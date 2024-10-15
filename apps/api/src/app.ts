import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import path from 'path';
import { AuthRouter } from './routers/auth.router';
import { ProfileRouter } from './routers/profile.router';
import { ProductRouter } from './routers/product.router';
import { InvoiceRouter } from './routers/invoice.router';
import { ClientRouter } from './routers/client.router';
import { PaymentRouter } from './routers/payment.router';
import { startCronJobs } from './cron/recurringInvoices';
import cron from 'node-cron';
import { sendRecurringInvoices } from './services/recurringInvoiceService';
import cloudinary from './utils/cloudinary';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use('/assets', express.static(path.join(__dirname, '../public')));

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Replace with your Cloudinary cloud name
      api_key: process.env.CLOUDINARY_API_KEY, // Replace with your Cloudinary API key
      api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your Cloudinary API secret
    });
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send('Error !');
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const authRouter = new AuthRouter();
    const profileRouter = new ProfileRouter();
    const productRouter = new ProductRouter();
    const invoiceRouter = new InvoiceRouter();
    const clientRouter = new ClientRouter();
    const paymentRouter = new PaymentRouter();

    this.app.get('/', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    this.app.use('/api/auth', authRouter.getRouter());
    this.app.use('/api/profile', profileRouter.getRouter());
    this.app.use('/api/product', productRouter.getRouter());
    this.app.use('/api/invoice', invoiceRouter.getRouter());
    this.app.use('/api/client', clientRouter.getRouter());
    this.app.use('/api/payment', paymentRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
      // startCronJobs();

      cron.schedule('0 0 * * *', async () => {
        console.log('Running recurring');
        await sendRecurringInvoices();
      });
    });
  }
}

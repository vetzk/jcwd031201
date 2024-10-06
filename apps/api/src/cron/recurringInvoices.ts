import { sendRecurringInvoices } from '@/services/recurringInvoiceService';
import { CronJob } from 'cron';

const job = new CronJob('0 0 * * *', async () => {
  console.log('Running recurring invoice job...');
  await sendRecurringInvoices();
});

export const startCronJobs = () => {
  job.start();
  console.log('Recurring invoice cron job started.');
};

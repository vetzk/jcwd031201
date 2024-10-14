
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  categoryName: 'categoryName',
  createdAt: 'createdAt'
};

exports.Prisma.ClientScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  phone: 'phone',
  email: 'email',
  createdAt: 'createdAt',
  clientCode: 'clientCode',
  userId: 'userId',
  payId: 'payId'
};

exports.Prisma.InvoiceScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  invoiceCode: 'invoiceCode',
  invoiceDate: 'invoiceDate',
  nextInvoiceDate: 'nextInvoiceDate',
  invoiceStatus: 'invoiceStatus',
  totalAmount: 'totalAmount',
  recurringDays: 'recurringDays',
  createdAt: 'createdAt',
  subTotal: 'subTotal',
  paymentId: 'paymentId',
  userId: 'userId',
  isDeleted: 'isDeleted'
};

exports.Prisma.InvoicedetailScalarFieldEnum = {
  id: 'id',
  productId: 'productId',
  invoiceId: 'invoiceId',
  qty: 'qty',
  priceUnit: 'priceUnit',
  priceTotal: 'priceTotal',
  createdAt: 'createdAt'
};

exports.Prisma.PaymentdetailsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  paymentOptId: 'paymentOptId',
  paymentCode: 'paymentCode',
  bankAccount: 'bankAccount',
  accountNumber: 'accountNumber',
  accountName: 'accountName',
  createdAt: 'createdAt'
};

exports.Prisma.PaymentoptionsScalarFieldEnum = {
  id: 'id',
  paymentType: 'paymentType',
  createdAt: 'createdAt'
};

exports.Prisma.ClientpaymentScalarFieldEnum = {
  id: 'id',
  paymentMethod: 'paymentMethod',
  createdAt: 'createdAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productCode: 'productCode',
  name: 'name',
  description: 'description',
  price: 'price',
  isDeleted: 'isDeleted',
  createdAt: 'createdAt',
  categoryId: 'categoryId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  identificationId: 'identificationId',
  username: 'username',
  email: 'email',
  password: 'password',
  createdAt: 'createdAt',
  isBlocked: 'isBlocked',
  lastLoginAttempt: 'lastLoginAttempt',
  loginAttempt: 'loginAttempt',
  isVerified: 'isVerified',
  resetToken: 'resetToken',
  resetTokenExpiry: 'resetTokenExpiry',
  sessionToken: 'sessionToken'
};

exports.Prisma.UserprofileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  firstName: 'firstName',
  lastName: 'lastName',
  companyName: 'companyName',
  profilePicture: 'profilePicture',
  address: 'address',
  phone: 'phone',
  createdAt: 'createdAt',
  isCreated: 'isCreated'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.invoice_invoiceStatus = exports.$Enums.invoice_invoiceStatus = {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  OVERDUE: 'OVERDUE'
};

exports.paymentoptions_paymentType = exports.$Enums.paymentoptions_paymentType = {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

exports.paymentmethod = exports.$Enums.paymentmethod = {
  GOPAY: 'GOPAY',
  OVO: 'OVO',
  DANA: 'DANA',
  CREDIT_CARD: 'CREDIT_CARD',
  COD: 'COD',
  BANK_VA: 'BANK_VA',
  BANK_TRANSFER: 'BANK_TRANSFER',
  PAYLATER: 'PAYLATER'
};

exports.Prisma.ModelName = {
  category: 'category',
  client: 'client',
  invoice: 'invoice',
  invoicedetail: 'invoicedetail',
  paymentdetails: 'paymentdetails',
  paymentoptions: 'paymentoptions',
  clientpayment: 'clientpayment',
  product: 'product',
  user: 'user',
  userprofile: 'userprofile'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

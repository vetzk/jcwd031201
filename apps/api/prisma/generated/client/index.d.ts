
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model client
 * 
 */
export type client = $Result.DefaultSelection<Prisma.$clientPayload>
/**
 * Model invoice
 * 
 */
export type invoice = $Result.DefaultSelection<Prisma.$invoicePayload>
/**
 * Model invoicedetail
 * 
 */
export type invoicedetail = $Result.DefaultSelection<Prisma.$invoicedetailPayload>
/**
 * Model paymentdetails
 * 
 */
export type paymentdetails = $Result.DefaultSelection<Prisma.$paymentdetailsPayload>
/**
 * Model paymentoptions
 * 
 */
export type paymentoptions = $Result.DefaultSelection<Prisma.$paymentoptionsPayload>
/**
 * Model clientpayment
 * 
 */
export type clientpayment = $Result.DefaultSelection<Prisma.$clientpaymentPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model userprofile
 * 
 */
export type userprofile = $Result.DefaultSelection<Prisma.$userprofilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const invoice_invoiceStatus: {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
  OVERDUE: 'OVERDUE'
};

export type invoice_invoiceStatus = (typeof invoice_invoiceStatus)[keyof typeof invoice_invoiceStatus]


export const paymentoptions_paymentType: {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type paymentoptions_paymentType = (typeof paymentoptions_paymentType)[keyof typeof paymentoptions_paymentType]


export const paymentmethod: {
  GOPAY: 'GOPAY',
  OVO: 'OVO',
  DANA: 'DANA',
  CREDIT_CARD: 'CREDIT_CARD',
  COD: 'COD',
  BANK_VA: 'BANK_VA',
  BANK_TRANSFER: 'BANK_TRANSFER',
  PAYLATER: 'PAYLATER'
};

export type paymentmethod = (typeof paymentmethod)[keyof typeof paymentmethod]

}

export type invoice_invoiceStatus = $Enums.invoice_invoiceStatus

export const invoice_invoiceStatus: typeof $Enums.invoice_invoiceStatus

export type paymentoptions_paymentType = $Enums.paymentoptions_paymentType

export const paymentoptions_paymentType: typeof $Enums.paymentoptions_paymentType

export type paymentmethod = $Enums.paymentmethod

export const paymentmethod: typeof $Enums.paymentmethod

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.clientDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.invoiceDelegate<ExtArgs>;

  /**
   * `prisma.invoicedetail`: Exposes CRUD operations for the **invoicedetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoicedetails
    * const invoicedetails = await prisma.invoicedetail.findMany()
    * ```
    */
  get invoicedetail(): Prisma.invoicedetailDelegate<ExtArgs>;

  /**
   * `prisma.paymentdetails`: Exposes CRUD operations for the **paymentdetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paymentdetails
    * const paymentdetails = await prisma.paymentdetails.findMany()
    * ```
    */
  get paymentdetails(): Prisma.paymentdetailsDelegate<ExtArgs>;

  /**
   * `prisma.paymentoptions`: Exposes CRUD operations for the **paymentoptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paymentoptions
    * const paymentoptions = await prisma.paymentoptions.findMany()
    * ```
    */
  get paymentoptions(): Prisma.paymentoptionsDelegate<ExtArgs>;

  /**
   * `prisma.clientpayment`: Exposes CRUD operations for the **clientpayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientpayments
    * const clientpayments = await prisma.clientpayment.findMany()
    * ```
    */
  get clientpayment(): Prisma.clientpaymentDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.userprofile`: Exposes CRUD operations for the **userprofile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userprofiles
    * const userprofiles = await prisma.userprofile.findMany()
    * ```
    */
  get userprofile(): Prisma.userprofileDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'category' | 'client' | 'invoice' | 'invoicedetail' | 'paymentdetails' | 'paymentoptions' | 'clientpayment' | 'product' | 'user' | 'userprofile'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      client: {
        payload: Prisma.$clientPayload<ExtArgs>
        fields: Prisma.clientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findFirst: {
            args: Prisma.clientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findMany: {
            args: Prisma.clientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          create: {
            args: Prisma.clientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          createMany: {
            args: Prisma.clientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          delete: {
            args: Prisma.clientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          update: {
            args: Prisma.clientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          deleteMany: {
            args: Prisma.clientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.clientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.clientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.clientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      invoice: {
        payload: Prisma.$invoicePayload<ExtArgs>
        fields: Prisma.invoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoiceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoiceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          findFirst: {
            args: Prisma.invoiceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoiceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          findMany: {
            args: Prisma.invoiceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          create: {
            args: Prisma.invoiceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          createMany: {
            args: Prisma.invoiceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoiceCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[]
          }
          delete: {
            args: Prisma.invoiceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          update: {
            args: Prisma.invoiceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          deleteMany: {
            args: Prisma.invoiceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.invoiceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.invoiceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.invoiceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoiceCountArgs<ExtArgs>,
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      invoicedetail: {
        payload: Prisma.$invoicedetailPayload<ExtArgs>
        fields: Prisma.invoicedetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicedetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicedetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload>
          }
          findFirst: {
            args: Prisma.invoicedetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicedetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload>
          }
          findMany: {
            args: Prisma.invoicedetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload>[]
          }
          create: {
            args: Prisma.invoicedetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload>
          }
          createMany: {
            args: Prisma.invoicedetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoicedetailCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload>[]
          }
          delete: {
            args: Prisma.invoicedetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload>
          }
          update: {
            args: Prisma.invoicedetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload>
          }
          deleteMany: {
            args: Prisma.invoicedetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.invoicedetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.invoicedetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$invoicedetailPayload>
          }
          aggregate: {
            args: Prisma.InvoicedetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvoicedetail>
          }
          groupBy: {
            args: Prisma.invoicedetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvoicedetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicedetailCountArgs<ExtArgs>,
            result: $Utils.Optional<InvoicedetailCountAggregateOutputType> | number
          }
        }
      }
      paymentdetails: {
        payload: Prisma.$paymentdetailsPayload<ExtArgs>
        fields: Prisma.paymentdetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentdetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentdetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload>
          }
          findFirst: {
            args: Prisma.paymentdetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentdetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload>
          }
          findMany: {
            args: Prisma.paymentdetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload>[]
          }
          create: {
            args: Prisma.paymentdetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload>
          }
          createMany: {
            args: Prisma.paymentdetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentdetailsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload>[]
          }
          delete: {
            args: Prisma.paymentdetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload>
          }
          update: {
            args: Prisma.paymentdetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload>
          }
          deleteMany: {
            args: Prisma.paymentdetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.paymentdetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.paymentdetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentdetailsPayload>
          }
          aggregate: {
            args: Prisma.PaymentdetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentdetails>
          }
          groupBy: {
            args: Prisma.paymentdetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentdetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentdetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentdetailsCountAggregateOutputType> | number
          }
        }
      }
      paymentoptions: {
        payload: Prisma.$paymentoptionsPayload<ExtArgs>
        fields: Prisma.paymentoptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentoptionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentoptionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload>
          }
          findFirst: {
            args: Prisma.paymentoptionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentoptionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload>
          }
          findMany: {
            args: Prisma.paymentoptionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload>[]
          }
          create: {
            args: Prisma.paymentoptionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload>
          }
          createMany: {
            args: Prisma.paymentoptionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentoptionsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload>[]
          }
          delete: {
            args: Prisma.paymentoptionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload>
          }
          update: {
            args: Prisma.paymentoptionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload>
          }
          deleteMany: {
            args: Prisma.paymentoptionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.paymentoptionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.paymentoptionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$paymentoptionsPayload>
          }
          aggregate: {
            args: Prisma.PaymentoptionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentoptions>
          }
          groupBy: {
            args: Prisma.paymentoptionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentoptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentoptionsCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentoptionsCountAggregateOutputType> | number
          }
        }
      }
      clientpayment: {
        payload: Prisma.$clientpaymentPayload<ExtArgs>
        fields: Prisma.clientpaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientpaymentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientpaymentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload>
          }
          findFirst: {
            args: Prisma.clientpaymentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientpaymentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload>
          }
          findMany: {
            args: Prisma.clientpaymentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload>[]
          }
          create: {
            args: Prisma.clientpaymentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload>
          }
          createMany: {
            args: Prisma.clientpaymentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientpaymentCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload>[]
          }
          delete: {
            args: Prisma.clientpaymentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload>
          }
          update: {
            args: Prisma.clientpaymentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload>
          }
          deleteMany: {
            args: Prisma.clientpaymentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.clientpaymentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.clientpaymentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clientpaymentPayload>
          }
          aggregate: {
            args: Prisma.ClientpaymentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClientpayment>
          }
          groupBy: {
            args: Prisma.clientpaymentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientpaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientpaymentCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientpaymentCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      userprofile: {
        payload: Prisma.$userprofilePayload<ExtArgs>
        fields: Prisma.userprofileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userprofileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userprofileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          findFirst: {
            args: Prisma.userprofileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userprofileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          findMany: {
            args: Prisma.userprofileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          create: {
            args: Prisma.userprofileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          createMany: {
            args: Prisma.userprofileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userprofileCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>[]
          }
          delete: {
            args: Prisma.userprofileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          update: {
            args: Prisma.userprofileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          deleteMany: {
            args: Prisma.userprofileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userprofileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userprofileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userprofilePayload>
          }
          aggregate: {
            args: Prisma.UserprofileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserprofile>
          }
          groupBy: {
            args: Prisma.userprofileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserprofileGroupByOutputType>[]
          }
          count: {
            args: Prisma.userprofileCountArgs<ExtArgs>,
            result: $Utils.Optional<UserprofileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    invoice: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | ClientCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    invoicedetail: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoicedetail?: boolean | InvoiceCountOutputTypeCountInvoicedetailArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountInvoicedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicedetailWhereInput
  }


  /**
   * Count Type PaymentdetailsCountOutputType
   */

  export type PaymentdetailsCountOutputType = {
    invoice: number
  }

  export type PaymentdetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | PaymentdetailsCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * PaymentdetailsCountOutputType without action
   */
  export type PaymentdetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentdetailsCountOutputType
     */
    select?: PaymentdetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentdetailsCountOutputType without action
   */
  export type PaymentdetailsCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput
  }


  /**
   * Count Type PaymentoptionsCountOutputType
   */

  export type PaymentoptionsCountOutputType = {
    paymentdetails: number
  }

  export type PaymentoptionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentdetails?: boolean | PaymentoptionsCountOutputTypeCountPaymentdetailsArgs
  }

  // Custom InputTypes
  /**
   * PaymentoptionsCountOutputType without action
   */
  export type PaymentoptionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentoptionsCountOutputType
     */
    select?: PaymentoptionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentoptionsCountOutputType without action
   */
  export type PaymentoptionsCountOutputTypeCountPaymentdetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentdetailsWhereInput
  }


  /**
   * Count Type ClientpaymentCountOutputType
   */

  export type ClientpaymentCountOutputType = {
    client: number
  }

  export type ClientpaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientpaymentCountOutputTypeCountClientArgs
  }

  // Custom InputTypes
  /**
   * ClientpaymentCountOutputType without action
   */
  export type ClientpaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientpaymentCountOutputType
     */
    select?: ClientpaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientpaymentCountOutputType without action
   */
  export type ClientpaymentCountOutputTypeCountClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    invoicedetail: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoicedetail?: boolean | ProductCountOutputTypeCountInvoicedetailArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInvoicedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicedetailWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    client: number
    invoice: number
    paymentdetails: number
    product: number
    userprofile: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserCountOutputTypeCountClientArgs
    invoice?: boolean | UserCountOutputTypeCountInvoiceArgs
    paymentdetails?: boolean | UserCountOutputTypeCountPaymentdetailsArgs
    product?: boolean | UserCountOutputTypeCountProductArgs
    userprofile?: boolean | UserCountOutputTypeCountUserprofileArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentdetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentdetailsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserprofileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userprofileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    categoryName: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    categoryName: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    categoryName: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    categoryName?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    categoryName: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
    product?: boolean | category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    categoryName?: boolean
    createdAt?: boolean
  }


  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      product: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryName: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends categoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryCreateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends categoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends categoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends categoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends category$productArgs<ExtArgs> = {}>(args?: Subset<T, category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the category model
   */ 
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly categoryName: FieldRef<"category", 'String'>
    readonly createdAt: FieldRef<"category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
  }

  /**
   * category.product
   */
  export type category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    payId: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    userId: number | null
    payId: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    clientCode: string | null
    userId: number | null
    payId: number | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    clientCode: string | null
    userId: number | null
    payId: number | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    email: number
    createdAt: number
    clientCode: number
    userId: number
    payId: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    userId?: true
    payId?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    userId?: true
    payId?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    clientCode?: true
    userId?: true
    payId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    clientCode?: true
    userId?: true
    payId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    clientCode?: true
    userId?: true
    payId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client to aggregate.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
    orderBy?: clientOrderByWithAggregationInput | clientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    address: string
    phone: string
    email: string
    createdAt: Date
    clientCode: string
    userId: number
    payId: number
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    clientCode?: boolean
    userId?: boolean
    payId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    invoice?: boolean | client$invoiceArgs<ExtArgs>
    clientpayment?: boolean | clientpaymentDefaultArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type clientSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    clientCode?: boolean
    userId?: boolean
    payId?: boolean
  }


  export type clientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    invoice?: boolean | client$invoiceArgs<ExtArgs>
    clientpayment?: boolean | clientpaymentDefaultArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      invoice: Prisma.$invoicePayload<ExtArgs>[]
      clientpayment: Prisma.$clientpaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      phone: string
      email: string
      createdAt: Date
      clientCode: string
      userId: number
      payId: number
    }, ExtArgs["result"]["client"]>
    composites: {}
  }


  type clientGetPayload<S extends boolean | null | undefined | clientDefaultArgs> = $Result.GetResult<Prisma.$clientPayload, S>

  type clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client'], meta: { name: 'client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {clientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clientFindUniqueArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindFirstArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends clientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client.
     * @param {clientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends clientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clientCreateArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {clientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends clientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {clientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends clientCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, clientCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Client.
     * @param {clientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends clientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clientDeleteArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client.
     * @param {clientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpdateArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {clientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {clientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends clientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clientUpsertArgs<ExtArgs>>
    ): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientCountArgs>(
      args?: Subset<T, clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientGroupByArgs['orderBy'] }
        : { orderBy?: clientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the client model
   */
  readonly fields: clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    invoice<T extends client$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, client$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    clientpayment<T extends clientpaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientpaymentDefaultArgs<ExtArgs>>): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the client model
   */ 
  interface clientFieldRefs {
    readonly id: FieldRef<"client", 'Int'>
    readonly name: FieldRef<"client", 'String'>
    readonly address: FieldRef<"client", 'String'>
    readonly phone: FieldRef<"client", 'String'>
    readonly email: FieldRef<"client", 'String'>
    readonly createdAt: FieldRef<"client", 'DateTime'>
    readonly clientCode: FieldRef<"client", 'String'>
    readonly userId: FieldRef<"client", 'Int'>
    readonly payId: FieldRef<"client", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * client findUnique
   */
  export type clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findUniqueOrThrow
   */
  export type clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findFirst
   */
  export type clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findFirstOrThrow
   */
  export type clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findMany
   */
  export type clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client create
   */
  export type clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to create a client.
     */
    data: XOR<clientCreateInput, clientUncheckedCreateInput>
  }

  /**
   * client createMany
   */
  export type clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client createManyAndReturn
   */
  export type clientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client update
   */
  export type clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to update a client.
     */
    data: XOR<clientUpdateInput, clientUncheckedUpdateInput>
    /**
     * Choose, which client to update.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client updateMany
   */
  export type clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput
  }

  /**
   * client upsert
   */
  export type clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The filter to search for the client to update in case it exists.
     */
    where: clientWhereUniqueInput
    /**
     * In case the client found by the `where` argument doesn't exist, create a new client with this data.
     */
    create: XOR<clientCreateInput, clientUncheckedCreateInput>
    /**
     * In case the client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientUpdateInput, clientUncheckedUpdateInput>
  }

  /**
   * client delete
   */
  export type clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter which client to delete.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client deleteMany
   */
  export type clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientWhereInput
  }

  /**
   * client.invoice
   */
  export type client$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    where?: invoiceWhereInput
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    cursor?: invoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * client without action
   */
  export type clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
  }


  /**
   * Model invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    totalAmount: number | null
    recurringDays: number | null
    subTotal: number | null
    paymentId: number | null
    userId: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    totalAmount: number | null
    recurringDays: number | null
    subTotal: number | null
    paymentId: number | null
    userId: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    invoiceCode: string | null
    invoiceDate: Date | null
    nextInvoiceDate: Date | null
    invoiceStatus: $Enums.invoice_invoiceStatus | null
    totalAmount: number | null
    recurringDays: number | null
    createdAt: Date | null
    subTotal: number | null
    paymentId: number | null
    userId: number | null
    isDeleted: boolean | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    invoiceCode: string | null
    invoiceDate: Date | null
    nextInvoiceDate: Date | null
    invoiceStatus: $Enums.invoice_invoiceStatus | null
    totalAmount: number | null
    recurringDays: number | null
    createdAt: Date | null
    subTotal: number | null
    paymentId: number | null
    userId: number | null
    isDeleted: boolean | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    clientId: number
    invoiceCode: number
    invoiceDate: number
    nextInvoiceDate: number
    invoiceStatus: number
    totalAmount: number
    recurringDays: number
    createdAt: number
    subTotal: number
    paymentId: number
    userId: number
    isDeleted: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    clientId?: true
    totalAmount?: true
    recurringDays?: true
    subTotal?: true
    paymentId?: true
    userId?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    clientId?: true
    totalAmount?: true
    recurringDays?: true
    subTotal?: true
    paymentId?: true
    userId?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    clientId?: true
    invoiceCode?: true
    invoiceDate?: true
    nextInvoiceDate?: true
    invoiceStatus?: true
    totalAmount?: true
    recurringDays?: true
    createdAt?: true
    subTotal?: true
    paymentId?: true
    userId?: true
    isDeleted?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    clientId?: true
    invoiceCode?: true
    invoiceDate?: true
    nextInvoiceDate?: true
    invoiceStatus?: true
    totalAmount?: true
    recurringDays?: true
    createdAt?: true
    subTotal?: true
    paymentId?: true
    userId?: true
    isDeleted?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    clientId?: true
    invoiceCode?: true
    invoiceDate?: true
    nextInvoiceDate?: true
    invoiceStatus?: true
    totalAmount?: true
    recurringDays?: true
    createdAt?: true
    subTotal?: true
    paymentId?: true
    userId?: true
    isDeleted?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice to aggregate.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type invoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput
    orderBy?: invoiceOrderByWithAggregationInput | invoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: invoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    clientId: number
    invoiceCode: string
    invoiceDate: Date
    nextInvoiceDate: Date
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt: Date
    subTotal: number
    paymentId: number
    userId: number
    isDeleted: boolean
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends invoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type invoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    invoiceCode?: boolean
    invoiceDate?: boolean
    nextInvoiceDate?: boolean
    invoiceStatus?: boolean
    totalAmount?: boolean
    recurringDays?: boolean
    createdAt?: boolean
    subTotal?: boolean
    paymentId?: boolean
    userId?: boolean
    isDeleted?: boolean
    client?: boolean | clientDefaultArgs<ExtArgs>
    paymentdetails?: boolean | paymentdetailsDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    invoicedetail?: boolean | invoice$invoicedetailArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type invoiceSelectScalar = {
    id?: boolean
    clientId?: boolean
    invoiceCode?: boolean
    invoiceDate?: boolean
    nextInvoiceDate?: boolean
    invoiceStatus?: boolean
    totalAmount?: boolean
    recurringDays?: boolean
    createdAt?: boolean
    subTotal?: boolean
    paymentId?: boolean
    userId?: boolean
    isDeleted?: boolean
  }


  export type invoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientDefaultArgs<ExtArgs>
    paymentdetails?: boolean | paymentdetailsDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    invoicedetail?: boolean | invoice$invoicedetailArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $invoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice"
    objects: {
      client: Prisma.$clientPayload<ExtArgs>
      paymentdetails: Prisma.$paymentdetailsPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      invoicedetail: Prisma.$invoicedetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      invoiceCode: string
      invoiceDate: Date
      nextInvoiceDate: Date
      invoiceStatus: $Enums.invoice_invoiceStatus
      totalAmount: number
      recurringDays: number
      createdAt: Date
      subTotal: number
      paymentId: number
      userId: number
      isDeleted: boolean
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }


  type invoiceGetPayload<S extends boolean | null | undefined | invoiceDefaultArgs> = $Result.GetResult<Prisma.$invoicePayload, S>

  type invoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<invoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface invoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice'], meta: { name: 'invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {invoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends invoiceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceFindUniqueArgs<ExtArgs>>
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {invoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends invoiceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends invoiceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindFirstArgs<ExtArgs>>
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends invoiceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends invoiceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Invoice.
     * @param {invoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
    **/
    create<T extends invoiceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceCreateArgs<ExtArgs>>
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {invoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends invoiceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends invoiceCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Invoice.
     * @param {invoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
    **/
    delete<T extends invoiceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceDeleteArgs<ExtArgs>>
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {invoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends invoiceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpdateArgs<ExtArgs>>
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {invoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends invoiceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends invoiceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {invoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
    **/
    upsert<T extends invoiceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpsertArgs<ExtArgs>>
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoiceCountArgs>(
      args?: Subset<T, invoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoiceGroupByArgs['orderBy'] }
        : { orderBy?: invoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice model
   */
  readonly fields: invoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends clientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientDefaultArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    paymentdetails<T extends paymentdetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paymentdetailsDefaultArgs<ExtArgs>>): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    invoicedetail<T extends invoice$invoicedetailArgs<ExtArgs> = {}>(args?: Subset<T, invoice$invoicedetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the invoice model
   */ 
  interface invoiceFieldRefs {
    readonly id: FieldRef<"invoice", 'Int'>
    readonly clientId: FieldRef<"invoice", 'Int'>
    readonly invoiceCode: FieldRef<"invoice", 'String'>
    readonly invoiceDate: FieldRef<"invoice", 'DateTime'>
    readonly nextInvoiceDate: FieldRef<"invoice", 'DateTime'>
    readonly invoiceStatus: FieldRef<"invoice", 'invoice_invoiceStatus'>
    readonly totalAmount: FieldRef<"invoice", 'Int'>
    readonly recurringDays: FieldRef<"invoice", 'Int'>
    readonly createdAt: FieldRef<"invoice", 'DateTime'>
    readonly subTotal: FieldRef<"invoice", 'Int'>
    readonly paymentId: FieldRef<"invoice", 'Int'>
    readonly userId: FieldRef<"invoice", 'Int'>
    readonly isDeleted: FieldRef<"invoice", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * invoice findUnique
   */
  export type invoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice findUniqueOrThrow
   */
  export type invoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice findFirst
   */
  export type invoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice findFirstOrThrow
   */
  export type invoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice findMany
   */
  export type invoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * invoice create
   */
  export type invoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice.
     */
    data: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>
  }

  /**
   * invoice createMany
   */
  export type invoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice createManyAndReturn
   */
  export type invoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice update
   */
  export type invoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice.
     */
    data: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>
    /**
     * Choose, which invoice to update.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice updateMany
   */
  export type invoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoiceWhereInput
  }

  /**
   * invoice upsert
   */
  export type invoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice to update in case it exists.
     */
    where: invoiceWhereUniqueInput
    /**
     * In case the invoice found by the `where` argument doesn't exist, create a new invoice with this data.
     */
    create: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>
    /**
     * In case the invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>
  }

  /**
   * invoice delete
   */
  export type invoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    /**
     * Filter which invoice to delete.
     */
    where: invoiceWhereUniqueInput
  }

  /**
   * invoice deleteMany
   */
  export type invoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoiceWhereInput
  }

  /**
   * invoice.invoicedetail
   */
  export type invoice$invoicedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    where?: invoicedetailWhereInput
    orderBy?: invoicedetailOrderByWithRelationInput | invoicedetailOrderByWithRelationInput[]
    cursor?: invoicedetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicedetailScalarFieldEnum | InvoicedetailScalarFieldEnum[]
  }

  /**
   * invoice without action
   */
  export type invoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
  }


  /**
   * Model invoicedetail
   */

  export type AggregateInvoicedetail = {
    _count: InvoicedetailCountAggregateOutputType | null
    _avg: InvoicedetailAvgAggregateOutputType | null
    _sum: InvoicedetailSumAggregateOutputType | null
    _min: InvoicedetailMinAggregateOutputType | null
    _max: InvoicedetailMaxAggregateOutputType | null
  }

  export type InvoicedetailAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    invoiceId: number | null
    qty: number | null
    priceUnit: number | null
    priceTotal: number | null
  }

  export type InvoicedetailSumAggregateOutputType = {
    id: number | null
    productId: number | null
    invoiceId: number | null
    qty: number | null
    priceUnit: number | null
    priceTotal: number | null
  }

  export type InvoicedetailMinAggregateOutputType = {
    id: number | null
    productId: number | null
    invoiceId: number | null
    qty: number | null
    priceUnit: number | null
    priceTotal: number | null
    createdAt: Date | null
  }

  export type InvoicedetailMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    invoiceId: number | null
    qty: number | null
    priceUnit: number | null
    priceTotal: number | null
    createdAt: Date | null
  }

  export type InvoicedetailCountAggregateOutputType = {
    id: number
    productId: number
    invoiceId: number
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt: number
    _all: number
  }


  export type InvoicedetailAvgAggregateInputType = {
    id?: true
    productId?: true
    invoiceId?: true
    qty?: true
    priceUnit?: true
    priceTotal?: true
  }

  export type InvoicedetailSumAggregateInputType = {
    id?: true
    productId?: true
    invoiceId?: true
    qty?: true
    priceUnit?: true
    priceTotal?: true
  }

  export type InvoicedetailMinAggregateInputType = {
    id?: true
    productId?: true
    invoiceId?: true
    qty?: true
    priceUnit?: true
    priceTotal?: true
    createdAt?: true
  }

  export type InvoicedetailMaxAggregateInputType = {
    id?: true
    productId?: true
    invoiceId?: true
    qty?: true
    priceUnit?: true
    priceTotal?: true
    createdAt?: true
  }

  export type InvoicedetailCountAggregateInputType = {
    id?: true
    productId?: true
    invoiceId?: true
    qty?: true
    priceUnit?: true
    priceTotal?: true
    createdAt?: true
    _all?: true
  }

  export type InvoicedetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoicedetail to aggregate.
     */
    where?: invoicedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoicedetails to fetch.
     */
    orderBy?: invoicedetailOrderByWithRelationInput | invoicedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoicedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoicedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoicedetails
    **/
    _count?: true | InvoicedetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicedetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicedetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicedetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicedetailMaxAggregateInputType
  }

  export type GetInvoicedetailAggregateType<T extends InvoicedetailAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoicedetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoicedetail[P]>
      : GetScalarType<T[P], AggregateInvoicedetail[P]>
  }




  export type invoicedetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicedetailWhereInput
    orderBy?: invoicedetailOrderByWithAggregationInput | invoicedetailOrderByWithAggregationInput[]
    by: InvoicedetailScalarFieldEnum[] | InvoicedetailScalarFieldEnum
    having?: invoicedetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicedetailCountAggregateInputType | true
    _avg?: InvoicedetailAvgAggregateInputType
    _sum?: InvoicedetailSumAggregateInputType
    _min?: InvoicedetailMinAggregateInputType
    _max?: InvoicedetailMaxAggregateInputType
  }

  export type InvoicedetailGroupByOutputType = {
    id: number
    productId: number
    invoiceId: number
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt: Date
    _count: InvoicedetailCountAggregateOutputType | null
    _avg: InvoicedetailAvgAggregateOutputType | null
    _sum: InvoicedetailSumAggregateOutputType | null
    _min: InvoicedetailMinAggregateOutputType | null
    _max: InvoicedetailMaxAggregateOutputType | null
  }

  type GetInvoicedetailGroupByPayload<T extends invoicedetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicedetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicedetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicedetailGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicedetailGroupByOutputType[P]>
        }
      >
    >


  export type invoicedetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    invoiceId?: boolean
    qty?: boolean
    priceUnit?: boolean
    priceTotal?: boolean
    createdAt?: boolean
    invoice?: boolean | invoiceDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoicedetail"]>

  export type invoicedetailSelectScalar = {
    id?: boolean
    productId?: boolean
    invoiceId?: boolean
    qty?: boolean
    priceUnit?: boolean
    priceTotal?: boolean
    createdAt?: boolean
  }


  export type invoicedetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | invoiceDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }


  export type $invoicedetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoicedetail"
    objects: {
      invoice: Prisma.$invoicePayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      invoiceId: number
      qty: number
      priceUnit: number
      priceTotal: number
      createdAt: Date
    }, ExtArgs["result"]["invoicedetail"]>
    composites: {}
  }


  type invoicedetailGetPayload<S extends boolean | null | undefined | invoicedetailDefaultArgs> = $Result.GetResult<Prisma.$invoicedetailPayload, S>

  type invoicedetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<invoicedetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoicedetailCountAggregateInputType | true
    }

  export interface invoicedetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoicedetail'], meta: { name: 'invoicedetail' } }
    /**
     * Find zero or one Invoicedetail that matches the filter.
     * @param {invoicedetailFindUniqueArgs} args - Arguments to find a Invoicedetail
     * @example
     * // Get one Invoicedetail
     * const invoicedetail = await prisma.invoicedetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends invoicedetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailFindUniqueArgs<ExtArgs>>
    ): Prisma__invoicedetailClient<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invoicedetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {invoicedetailFindUniqueOrThrowArgs} args - Arguments to find a Invoicedetail
     * @example
     * // Get one Invoicedetail
     * const invoicedetail = await prisma.invoicedetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends invoicedetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__invoicedetailClient<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Invoicedetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailFindFirstArgs} args - Arguments to find a Invoicedetail
     * @example
     * // Get one Invoicedetail
     * const invoicedetail = await prisma.invoicedetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends invoicedetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailFindFirstArgs<ExtArgs>>
    ): Prisma__invoicedetailClient<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Invoicedetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailFindFirstOrThrowArgs} args - Arguments to find a Invoicedetail
     * @example
     * // Get one Invoicedetail
     * const invoicedetail = await prisma.invoicedetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends invoicedetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__invoicedetailClient<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invoicedetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoicedetails
     * const invoicedetails = await prisma.invoicedetail.findMany()
     * 
     * // Get first 10 Invoicedetails
     * const invoicedetails = await prisma.invoicedetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicedetailWithIdOnly = await prisma.invoicedetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends invoicedetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Invoicedetail.
     * @param {invoicedetailCreateArgs} args - Arguments to create a Invoicedetail.
     * @example
     * // Create one Invoicedetail
     * const Invoicedetail = await prisma.invoicedetail.create({
     *   data: {
     *     // ... data to create a Invoicedetail
     *   }
     * })
     * 
    **/
    create<T extends invoicedetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailCreateArgs<ExtArgs>>
    ): Prisma__invoicedetailClient<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invoicedetails.
     * @param {invoicedetailCreateManyArgs} args - Arguments to create many Invoicedetails.
     * @example
     * // Create many Invoicedetails
     * const invoicedetail = await prisma.invoicedetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends invoicedetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoicedetails and returns the data saved in the database.
     * @param {invoicedetailCreateManyAndReturnArgs} args - Arguments to create many Invoicedetails.
     * @example
     * // Create many Invoicedetails
     * const invoicedetail = await prisma.invoicedetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoicedetails and only return the `id`
     * const invoicedetailWithIdOnly = await prisma.invoicedetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends invoicedetailCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Invoicedetail.
     * @param {invoicedetailDeleteArgs} args - Arguments to delete one Invoicedetail.
     * @example
     * // Delete one Invoicedetail
     * const Invoicedetail = await prisma.invoicedetail.delete({
     *   where: {
     *     // ... filter to delete one Invoicedetail
     *   }
     * })
     * 
    **/
    delete<T extends invoicedetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailDeleteArgs<ExtArgs>>
    ): Prisma__invoicedetailClient<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Invoicedetail.
     * @param {invoicedetailUpdateArgs} args - Arguments to update one Invoicedetail.
     * @example
     * // Update one Invoicedetail
     * const invoicedetail = await prisma.invoicedetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends invoicedetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailUpdateArgs<ExtArgs>>
    ): Prisma__invoicedetailClient<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Invoicedetails.
     * @param {invoicedetailDeleteManyArgs} args - Arguments to filter Invoicedetails to delete.
     * @example
     * // Delete a few Invoicedetails
     * const { count } = await prisma.invoicedetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends invoicedetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoicedetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoicedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoicedetails
     * const invoicedetail = await prisma.invoicedetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends invoicedetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoicedetail.
     * @param {invoicedetailUpsertArgs} args - Arguments to update or create a Invoicedetail.
     * @example
     * // Update or create a Invoicedetail
     * const invoicedetail = await prisma.invoicedetail.upsert({
     *   create: {
     *     // ... data to create a Invoicedetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoicedetail we want to update
     *   }
     * })
    **/
    upsert<T extends invoicedetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, invoicedetailUpsertArgs<ExtArgs>>
    ): Prisma__invoicedetailClient<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Invoicedetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailCountArgs} args - Arguments to filter Invoicedetails to count.
     * @example
     * // Count the number of Invoicedetails
     * const count = await prisma.invoicedetail.count({
     *   where: {
     *     // ... the filter for the Invoicedetails we want to count
     *   }
     * })
    **/
    count<T extends invoicedetailCountArgs>(
      args?: Subset<T, invoicedetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicedetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoicedetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicedetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoicedetailAggregateArgs>(args: Subset<T, InvoicedetailAggregateArgs>): Prisma.PrismaPromise<GetInvoicedetailAggregateType<T>>

    /**
     * Group by Invoicedetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicedetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends invoicedetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicedetailGroupByArgs['orderBy'] }
        : { orderBy?: invoicedetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, invoicedetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicedetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoicedetail model
   */
  readonly fields: invoicedetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoicedetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicedetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    invoice<T extends invoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoiceDefaultArgs<ExtArgs>>): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the invoicedetail model
   */ 
  interface invoicedetailFieldRefs {
    readonly id: FieldRef<"invoicedetail", 'Int'>
    readonly productId: FieldRef<"invoicedetail", 'Int'>
    readonly invoiceId: FieldRef<"invoicedetail", 'Int'>
    readonly qty: FieldRef<"invoicedetail", 'Int'>
    readonly priceUnit: FieldRef<"invoicedetail", 'Int'>
    readonly priceTotal: FieldRef<"invoicedetail", 'Int'>
    readonly createdAt: FieldRef<"invoicedetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invoicedetail findUnique
   */
  export type invoicedetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetail to fetch.
     */
    where: invoicedetailWhereUniqueInput
  }

  /**
   * invoicedetail findUniqueOrThrow
   */
  export type invoicedetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetail to fetch.
     */
    where: invoicedetailWhereUniqueInput
  }

  /**
   * invoicedetail findFirst
   */
  export type invoicedetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetail to fetch.
     */
    where?: invoicedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoicedetails to fetch.
     */
    orderBy?: invoicedetailOrderByWithRelationInput | invoicedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoicedetails.
     */
    cursor?: invoicedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoicedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoicedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoicedetails.
     */
    distinct?: InvoicedetailScalarFieldEnum | InvoicedetailScalarFieldEnum[]
  }

  /**
   * invoicedetail findFirstOrThrow
   */
  export type invoicedetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetail to fetch.
     */
    where?: invoicedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoicedetails to fetch.
     */
    orderBy?: invoicedetailOrderByWithRelationInput | invoicedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoicedetails.
     */
    cursor?: invoicedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoicedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoicedetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoicedetails.
     */
    distinct?: InvoicedetailScalarFieldEnum | InvoicedetailScalarFieldEnum[]
  }

  /**
   * invoicedetail findMany
   */
  export type invoicedetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * Filter, which invoicedetails to fetch.
     */
    where?: invoicedetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoicedetails to fetch.
     */
    orderBy?: invoicedetailOrderByWithRelationInput | invoicedetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoicedetails.
     */
    cursor?: invoicedetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoicedetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoicedetails.
     */
    skip?: number
    distinct?: InvoicedetailScalarFieldEnum | InvoicedetailScalarFieldEnum[]
  }

  /**
   * invoicedetail create
   */
  export type invoicedetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * The data needed to create a invoicedetail.
     */
    data: XOR<invoicedetailCreateInput, invoicedetailUncheckedCreateInput>
  }

  /**
   * invoicedetail createMany
   */
  export type invoicedetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoicedetails.
     */
    data: invoicedetailCreateManyInput | invoicedetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoicedetail createManyAndReturn
   */
  export type invoicedetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * The data used to create many invoicedetails.
     */
    data: invoicedetailCreateManyInput | invoicedetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoicedetail update
   */
  export type invoicedetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * The data needed to update a invoicedetail.
     */
    data: XOR<invoicedetailUpdateInput, invoicedetailUncheckedUpdateInput>
    /**
     * Choose, which invoicedetail to update.
     */
    where: invoicedetailWhereUniqueInput
  }

  /**
   * invoicedetail updateMany
   */
  export type invoicedetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoicedetails.
     */
    data: XOR<invoicedetailUpdateManyMutationInput, invoicedetailUncheckedUpdateManyInput>
    /**
     * Filter which invoicedetails to update
     */
    where?: invoicedetailWhereInput
  }

  /**
   * invoicedetail upsert
   */
  export type invoicedetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * The filter to search for the invoicedetail to update in case it exists.
     */
    where: invoicedetailWhereUniqueInput
    /**
     * In case the invoicedetail found by the `where` argument doesn't exist, create a new invoicedetail with this data.
     */
    create: XOR<invoicedetailCreateInput, invoicedetailUncheckedCreateInput>
    /**
     * In case the invoicedetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicedetailUpdateInput, invoicedetailUncheckedUpdateInput>
  }

  /**
   * invoicedetail delete
   */
  export type invoicedetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    /**
     * Filter which invoicedetail to delete.
     */
    where: invoicedetailWhereUniqueInput
  }

  /**
   * invoicedetail deleteMany
   */
  export type invoicedetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoicedetails to delete
     */
    where?: invoicedetailWhereInput
  }

  /**
   * invoicedetail without action
   */
  export type invoicedetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
  }


  /**
   * Model paymentdetails
   */

  export type AggregatePaymentdetails = {
    _count: PaymentdetailsCountAggregateOutputType | null
    _avg: PaymentdetailsAvgAggregateOutputType | null
    _sum: PaymentdetailsSumAggregateOutputType | null
    _min: PaymentdetailsMinAggregateOutputType | null
    _max: PaymentdetailsMaxAggregateOutputType | null
  }

  export type PaymentdetailsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    paymentOptId: number | null
  }

  export type PaymentdetailsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    paymentOptId: number | null
  }

  export type PaymentdetailsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    paymentOptId: number | null
    paymentCode: string | null
    bankAccount: string | null
    accountNumber: string | null
    accountName: string | null
    createdAt: Date | null
  }

  export type PaymentdetailsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    paymentOptId: number | null
    paymentCode: string | null
    bankAccount: string | null
    accountNumber: string | null
    accountName: string | null
    createdAt: Date | null
  }

  export type PaymentdetailsCountAggregateOutputType = {
    id: number
    userId: number
    paymentOptId: number
    paymentCode: number
    bankAccount: number
    accountNumber: number
    accountName: number
    createdAt: number
    _all: number
  }


  export type PaymentdetailsAvgAggregateInputType = {
    id?: true
    userId?: true
    paymentOptId?: true
  }

  export type PaymentdetailsSumAggregateInputType = {
    id?: true
    userId?: true
    paymentOptId?: true
  }

  export type PaymentdetailsMinAggregateInputType = {
    id?: true
    userId?: true
    paymentOptId?: true
    paymentCode?: true
    bankAccount?: true
    accountNumber?: true
    accountName?: true
    createdAt?: true
  }

  export type PaymentdetailsMaxAggregateInputType = {
    id?: true
    userId?: true
    paymentOptId?: true
    paymentCode?: true
    bankAccount?: true
    accountNumber?: true
    accountName?: true
    createdAt?: true
  }

  export type PaymentdetailsCountAggregateInputType = {
    id?: true
    userId?: true
    paymentOptId?: true
    paymentCode?: true
    bankAccount?: true
    accountNumber?: true
    accountName?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentdetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentdetails to aggregate.
     */
    where?: paymentdetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentdetails to fetch.
     */
    orderBy?: paymentdetailsOrderByWithRelationInput | paymentdetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentdetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paymentdetails
    **/
    _count?: true | PaymentdetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentdetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentdetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentdetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentdetailsMaxAggregateInputType
  }

  export type GetPaymentdetailsAggregateType<T extends PaymentdetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentdetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentdetails[P]>
      : GetScalarType<T[P], AggregatePaymentdetails[P]>
  }




  export type paymentdetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentdetailsWhereInput
    orderBy?: paymentdetailsOrderByWithAggregationInput | paymentdetailsOrderByWithAggregationInput[]
    by: PaymentdetailsScalarFieldEnum[] | PaymentdetailsScalarFieldEnum
    having?: paymentdetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentdetailsCountAggregateInputType | true
    _avg?: PaymentdetailsAvgAggregateInputType
    _sum?: PaymentdetailsSumAggregateInputType
    _min?: PaymentdetailsMinAggregateInputType
    _max?: PaymentdetailsMaxAggregateInputType
  }

  export type PaymentdetailsGroupByOutputType = {
    id: number
    userId: number
    paymentOptId: number
    paymentCode: string
    bankAccount: string | null
    accountNumber: string | null
    accountName: string | null
    createdAt: Date
    _count: PaymentdetailsCountAggregateOutputType | null
    _avg: PaymentdetailsAvgAggregateOutputType | null
    _sum: PaymentdetailsSumAggregateOutputType | null
    _min: PaymentdetailsMinAggregateOutputType | null
    _max: PaymentdetailsMaxAggregateOutputType | null
  }

  type GetPaymentdetailsGroupByPayload<T extends paymentdetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentdetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentdetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentdetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentdetailsGroupByOutputType[P]>
        }
      >
    >


  export type paymentdetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    paymentOptId?: boolean
    paymentCode?: boolean
    bankAccount?: boolean
    accountNumber?: boolean
    accountName?: boolean
    createdAt?: boolean
    paymentoptions?: boolean | paymentoptionsDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    invoice?: boolean | paymentdetails$invoiceArgs<ExtArgs>
    _count?: boolean | PaymentdetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentdetails"]>

  export type paymentdetailsSelectScalar = {
    id?: boolean
    userId?: boolean
    paymentOptId?: boolean
    paymentCode?: boolean
    bankAccount?: boolean
    accountNumber?: boolean
    accountName?: boolean
    createdAt?: boolean
  }


  export type paymentdetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentoptions?: boolean | paymentoptionsDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    invoice?: boolean | paymentdetails$invoiceArgs<ExtArgs>
    _count?: boolean | PaymentdetailsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $paymentdetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paymentdetails"
    objects: {
      paymentoptions: Prisma.$paymentoptionsPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      invoice: Prisma.$invoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      paymentOptId: number
      paymentCode: string
      bankAccount: string | null
      accountNumber: string | null
      accountName: string | null
      createdAt: Date
    }, ExtArgs["result"]["paymentdetails"]>
    composites: {}
  }


  type paymentdetailsGetPayload<S extends boolean | null | undefined | paymentdetailsDefaultArgs> = $Result.GetResult<Prisma.$paymentdetailsPayload, S>

  type paymentdetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<paymentdetailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentdetailsCountAggregateInputType | true
    }

  export interface paymentdetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paymentdetails'], meta: { name: 'paymentdetails' } }
    /**
     * Find zero or one Paymentdetails that matches the filter.
     * @param {paymentdetailsFindUniqueArgs} args - Arguments to find a Paymentdetails
     * @example
     * // Get one Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends paymentdetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paymentdetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Paymentdetails that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {paymentdetailsFindUniqueOrThrowArgs} args - Arguments to find a Paymentdetails
     * @example
     * // Get one Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends paymentdetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentdetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Paymentdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentdetailsFindFirstArgs} args - Arguments to find a Paymentdetails
     * @example
     * // Get one Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends paymentdetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentdetailsFindFirstArgs<ExtArgs>>
    ): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Paymentdetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentdetailsFindFirstOrThrowArgs} args - Arguments to find a Paymentdetails
     * @example
     * // Get one Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends paymentdetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentdetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Paymentdetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentdetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.findMany()
     * 
     * // Get first 10 Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentdetailsWithIdOnly = await prisma.paymentdetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends paymentdetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentdetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Paymentdetails.
     * @param {paymentdetailsCreateArgs} args - Arguments to create a Paymentdetails.
     * @example
     * // Create one Paymentdetails
     * const Paymentdetails = await prisma.paymentdetails.create({
     *   data: {
     *     // ... data to create a Paymentdetails
     *   }
     * })
     * 
    **/
    create<T extends paymentdetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentdetailsCreateArgs<ExtArgs>>
    ): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Paymentdetails.
     * @param {paymentdetailsCreateManyArgs} args - Arguments to create many Paymentdetails.
     * @example
     * // Create many Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends paymentdetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentdetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paymentdetails and returns the data saved in the database.
     * @param {paymentdetailsCreateManyAndReturnArgs} args - Arguments to create many Paymentdetails.
     * @example
     * // Create many Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paymentdetails and only return the `id`
     * const paymentdetailsWithIdOnly = await prisma.paymentdetails.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends paymentdetailsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentdetailsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Paymentdetails.
     * @param {paymentdetailsDeleteArgs} args - Arguments to delete one Paymentdetails.
     * @example
     * // Delete one Paymentdetails
     * const Paymentdetails = await prisma.paymentdetails.delete({
     *   where: {
     *     // ... filter to delete one Paymentdetails
     *   }
     * })
     * 
    **/
    delete<T extends paymentdetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paymentdetailsDeleteArgs<ExtArgs>>
    ): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Paymentdetails.
     * @param {paymentdetailsUpdateArgs} args - Arguments to update one Paymentdetails.
     * @example
     * // Update one Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends paymentdetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentdetailsUpdateArgs<ExtArgs>>
    ): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Paymentdetails.
     * @param {paymentdetailsDeleteManyArgs} args - Arguments to filter Paymentdetails to delete.
     * @example
     * // Delete a few Paymentdetails
     * const { count } = await prisma.paymentdetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends paymentdetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentdetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paymentdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentdetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends paymentdetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paymentdetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paymentdetails.
     * @param {paymentdetailsUpsertArgs} args - Arguments to update or create a Paymentdetails.
     * @example
     * // Update or create a Paymentdetails
     * const paymentdetails = await prisma.paymentdetails.upsert({
     *   create: {
     *     // ... data to create a Paymentdetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paymentdetails we want to update
     *   }
     * })
    **/
    upsert<T extends paymentdetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paymentdetailsUpsertArgs<ExtArgs>>
    ): Prisma__paymentdetailsClient<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Paymentdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentdetailsCountArgs} args - Arguments to filter Paymentdetails to count.
     * @example
     * // Count the number of Paymentdetails
     * const count = await prisma.paymentdetails.count({
     *   where: {
     *     // ... the filter for the Paymentdetails we want to count
     *   }
     * })
    **/
    count<T extends paymentdetailsCountArgs>(
      args?: Subset<T, paymentdetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentdetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paymentdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentdetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentdetailsAggregateArgs>(args: Subset<T, PaymentdetailsAggregateArgs>): Prisma.PrismaPromise<GetPaymentdetailsAggregateType<T>>

    /**
     * Group by Paymentdetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentdetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentdetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentdetailsGroupByArgs['orderBy'] }
        : { orderBy?: paymentdetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentdetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentdetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paymentdetails model
   */
  readonly fields: paymentdetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paymentdetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentdetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    paymentoptions<T extends paymentoptionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, paymentoptionsDefaultArgs<ExtArgs>>): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    invoice<T extends paymentdetails$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, paymentdetails$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the paymentdetails model
   */ 
  interface paymentdetailsFieldRefs {
    readonly id: FieldRef<"paymentdetails", 'Int'>
    readonly userId: FieldRef<"paymentdetails", 'Int'>
    readonly paymentOptId: FieldRef<"paymentdetails", 'Int'>
    readonly paymentCode: FieldRef<"paymentdetails", 'String'>
    readonly bankAccount: FieldRef<"paymentdetails", 'String'>
    readonly accountNumber: FieldRef<"paymentdetails", 'String'>
    readonly accountName: FieldRef<"paymentdetails", 'String'>
    readonly createdAt: FieldRef<"paymentdetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * paymentdetails findUnique
   */
  export type paymentdetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * Filter, which paymentdetails to fetch.
     */
    where: paymentdetailsWhereUniqueInput
  }

  /**
   * paymentdetails findUniqueOrThrow
   */
  export type paymentdetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * Filter, which paymentdetails to fetch.
     */
    where: paymentdetailsWhereUniqueInput
  }

  /**
   * paymentdetails findFirst
   */
  export type paymentdetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * Filter, which paymentdetails to fetch.
     */
    where?: paymentdetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentdetails to fetch.
     */
    orderBy?: paymentdetailsOrderByWithRelationInput | paymentdetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentdetails.
     */
    cursor?: paymentdetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentdetails.
     */
    distinct?: PaymentdetailsScalarFieldEnum | PaymentdetailsScalarFieldEnum[]
  }

  /**
   * paymentdetails findFirstOrThrow
   */
  export type paymentdetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * Filter, which paymentdetails to fetch.
     */
    where?: paymentdetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentdetails to fetch.
     */
    orderBy?: paymentdetailsOrderByWithRelationInput | paymentdetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentdetails.
     */
    cursor?: paymentdetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentdetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentdetails.
     */
    distinct?: PaymentdetailsScalarFieldEnum | PaymentdetailsScalarFieldEnum[]
  }

  /**
   * paymentdetails findMany
   */
  export type paymentdetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * Filter, which paymentdetails to fetch.
     */
    where?: paymentdetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentdetails to fetch.
     */
    orderBy?: paymentdetailsOrderByWithRelationInput | paymentdetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paymentdetails.
     */
    cursor?: paymentdetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentdetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentdetails.
     */
    skip?: number
    distinct?: PaymentdetailsScalarFieldEnum | PaymentdetailsScalarFieldEnum[]
  }

  /**
   * paymentdetails create
   */
  export type paymentdetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a paymentdetails.
     */
    data: XOR<paymentdetailsCreateInput, paymentdetailsUncheckedCreateInput>
  }

  /**
   * paymentdetails createMany
   */
  export type paymentdetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paymentdetails.
     */
    data: paymentdetailsCreateManyInput | paymentdetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paymentdetails createManyAndReturn
   */
  export type paymentdetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * The data used to create many paymentdetails.
     */
    data: paymentdetailsCreateManyInput | paymentdetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paymentdetails update
   */
  export type paymentdetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a paymentdetails.
     */
    data: XOR<paymentdetailsUpdateInput, paymentdetailsUncheckedUpdateInput>
    /**
     * Choose, which paymentdetails to update.
     */
    where: paymentdetailsWhereUniqueInput
  }

  /**
   * paymentdetails updateMany
   */
  export type paymentdetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paymentdetails.
     */
    data: XOR<paymentdetailsUpdateManyMutationInput, paymentdetailsUncheckedUpdateManyInput>
    /**
     * Filter which paymentdetails to update
     */
    where?: paymentdetailsWhereInput
  }

  /**
   * paymentdetails upsert
   */
  export type paymentdetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the paymentdetails to update in case it exists.
     */
    where: paymentdetailsWhereUniqueInput
    /**
     * In case the paymentdetails found by the `where` argument doesn't exist, create a new paymentdetails with this data.
     */
    create: XOR<paymentdetailsCreateInput, paymentdetailsUncheckedCreateInput>
    /**
     * In case the paymentdetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentdetailsUpdateInput, paymentdetailsUncheckedUpdateInput>
  }

  /**
   * paymentdetails delete
   */
  export type paymentdetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    /**
     * Filter which paymentdetails to delete.
     */
    where: paymentdetailsWhereUniqueInput
  }

  /**
   * paymentdetails deleteMany
   */
  export type paymentdetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentdetails to delete
     */
    where?: paymentdetailsWhereInput
  }

  /**
   * paymentdetails.invoice
   */
  export type paymentdetails$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    where?: invoiceWhereInput
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    cursor?: invoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * paymentdetails without action
   */
  export type paymentdetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
  }


  /**
   * Model paymentoptions
   */

  export type AggregatePaymentoptions = {
    _count: PaymentoptionsCountAggregateOutputType | null
    _avg: PaymentoptionsAvgAggregateOutputType | null
    _sum: PaymentoptionsSumAggregateOutputType | null
    _min: PaymentoptionsMinAggregateOutputType | null
    _max: PaymentoptionsMaxAggregateOutputType | null
  }

  export type PaymentoptionsAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentoptionsSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentoptionsMinAggregateOutputType = {
    id: number | null
    paymentType: $Enums.paymentoptions_paymentType | null
    createdAt: Date | null
  }

  export type PaymentoptionsMaxAggregateOutputType = {
    id: number | null
    paymentType: $Enums.paymentoptions_paymentType | null
    createdAt: Date | null
  }

  export type PaymentoptionsCountAggregateOutputType = {
    id: number
    paymentType: number
    createdAt: number
    _all: number
  }


  export type PaymentoptionsAvgAggregateInputType = {
    id?: true
  }

  export type PaymentoptionsSumAggregateInputType = {
    id?: true
  }

  export type PaymentoptionsMinAggregateInputType = {
    id?: true
    paymentType?: true
    createdAt?: true
  }

  export type PaymentoptionsMaxAggregateInputType = {
    id?: true
    paymentType?: true
    createdAt?: true
  }

  export type PaymentoptionsCountAggregateInputType = {
    id?: true
    paymentType?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentoptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentoptions to aggregate.
     */
    where?: paymentoptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentoptions to fetch.
     */
    orderBy?: paymentoptionsOrderByWithRelationInput | paymentoptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentoptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paymentoptions
    **/
    _count?: true | PaymentoptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentoptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentoptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentoptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentoptionsMaxAggregateInputType
  }

  export type GetPaymentoptionsAggregateType<T extends PaymentoptionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentoptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentoptions[P]>
      : GetScalarType<T[P], AggregatePaymentoptions[P]>
  }




  export type paymentoptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentoptionsWhereInput
    orderBy?: paymentoptionsOrderByWithAggregationInput | paymentoptionsOrderByWithAggregationInput[]
    by: PaymentoptionsScalarFieldEnum[] | PaymentoptionsScalarFieldEnum
    having?: paymentoptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentoptionsCountAggregateInputType | true
    _avg?: PaymentoptionsAvgAggregateInputType
    _sum?: PaymentoptionsSumAggregateInputType
    _min?: PaymentoptionsMinAggregateInputType
    _max?: PaymentoptionsMaxAggregateInputType
  }

  export type PaymentoptionsGroupByOutputType = {
    id: number
    paymentType: $Enums.paymentoptions_paymentType
    createdAt: Date
    _count: PaymentoptionsCountAggregateOutputType | null
    _avg: PaymentoptionsAvgAggregateOutputType | null
    _sum: PaymentoptionsSumAggregateOutputType | null
    _min: PaymentoptionsMinAggregateOutputType | null
    _max: PaymentoptionsMaxAggregateOutputType | null
  }

  type GetPaymentoptionsGroupByPayload<T extends paymentoptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentoptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentoptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentoptionsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentoptionsGroupByOutputType[P]>
        }
      >
    >


  export type paymentoptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentType?: boolean
    createdAt?: boolean
    paymentdetails?: boolean | paymentoptions$paymentdetailsArgs<ExtArgs>
    _count?: boolean | PaymentoptionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentoptions"]>

  export type paymentoptionsSelectScalar = {
    id?: boolean
    paymentType?: boolean
    createdAt?: boolean
  }


  export type paymentoptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentdetails?: boolean | paymentoptions$paymentdetailsArgs<ExtArgs>
    _count?: boolean | PaymentoptionsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $paymentoptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paymentoptions"
    objects: {
      paymentdetails: Prisma.$paymentdetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentType: $Enums.paymentoptions_paymentType
      createdAt: Date
    }, ExtArgs["result"]["paymentoptions"]>
    composites: {}
  }


  type paymentoptionsGetPayload<S extends boolean | null | undefined | paymentoptionsDefaultArgs> = $Result.GetResult<Prisma.$paymentoptionsPayload, S>

  type paymentoptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<paymentoptionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentoptionsCountAggregateInputType | true
    }

  export interface paymentoptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paymentoptions'], meta: { name: 'paymentoptions' } }
    /**
     * Find zero or one Paymentoptions that matches the filter.
     * @param {paymentoptionsFindUniqueArgs} args - Arguments to find a Paymentoptions
     * @example
     * // Get one Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends paymentoptionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, paymentoptionsFindUniqueArgs<ExtArgs>>
    ): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Paymentoptions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {paymentoptionsFindUniqueOrThrowArgs} args - Arguments to find a Paymentoptions
     * @example
     * // Get one Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends paymentoptionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentoptionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Paymentoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentoptionsFindFirstArgs} args - Arguments to find a Paymentoptions
     * @example
     * // Get one Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends paymentoptionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentoptionsFindFirstArgs<ExtArgs>>
    ): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Paymentoptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentoptionsFindFirstOrThrowArgs} args - Arguments to find a Paymentoptions
     * @example
     * // Get one Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends paymentoptionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentoptionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Paymentoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentoptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.findMany()
     * 
     * // Get first 10 Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentoptionsWithIdOnly = await prisma.paymentoptions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends paymentoptionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentoptionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Paymentoptions.
     * @param {paymentoptionsCreateArgs} args - Arguments to create a Paymentoptions.
     * @example
     * // Create one Paymentoptions
     * const Paymentoptions = await prisma.paymentoptions.create({
     *   data: {
     *     // ... data to create a Paymentoptions
     *   }
     * })
     * 
    **/
    create<T extends paymentoptionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentoptionsCreateArgs<ExtArgs>>
    ): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Paymentoptions.
     * @param {paymentoptionsCreateManyArgs} args - Arguments to create many Paymentoptions.
     * @example
     * // Create many Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends paymentoptionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentoptionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paymentoptions and returns the data saved in the database.
     * @param {paymentoptionsCreateManyAndReturnArgs} args - Arguments to create many Paymentoptions.
     * @example
     * // Create many Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paymentoptions and only return the `id`
     * const paymentoptionsWithIdOnly = await prisma.paymentoptions.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends paymentoptionsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentoptionsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Paymentoptions.
     * @param {paymentoptionsDeleteArgs} args - Arguments to delete one Paymentoptions.
     * @example
     * // Delete one Paymentoptions
     * const Paymentoptions = await prisma.paymentoptions.delete({
     *   where: {
     *     // ... filter to delete one Paymentoptions
     *   }
     * })
     * 
    **/
    delete<T extends paymentoptionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, paymentoptionsDeleteArgs<ExtArgs>>
    ): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Paymentoptions.
     * @param {paymentoptionsUpdateArgs} args - Arguments to update one Paymentoptions.
     * @example
     * // Update one Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends paymentoptionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, paymentoptionsUpdateArgs<ExtArgs>>
    ): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Paymentoptions.
     * @param {paymentoptionsDeleteManyArgs} args - Arguments to filter Paymentoptions to delete.
     * @example
     * // Delete a few Paymentoptions
     * const { count } = await prisma.paymentoptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends paymentoptionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, paymentoptionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paymentoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentoptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends paymentoptionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, paymentoptionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paymentoptions.
     * @param {paymentoptionsUpsertArgs} args - Arguments to update or create a Paymentoptions.
     * @example
     * // Update or create a Paymentoptions
     * const paymentoptions = await prisma.paymentoptions.upsert({
     *   create: {
     *     // ... data to create a Paymentoptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paymentoptions we want to update
     *   }
     * })
    **/
    upsert<T extends paymentoptionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, paymentoptionsUpsertArgs<ExtArgs>>
    ): Prisma__paymentoptionsClient<$Result.GetResult<Prisma.$paymentoptionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Paymentoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentoptionsCountArgs} args - Arguments to filter Paymentoptions to count.
     * @example
     * // Count the number of Paymentoptions
     * const count = await prisma.paymentoptions.count({
     *   where: {
     *     // ... the filter for the Paymentoptions we want to count
     *   }
     * })
    **/
    count<T extends paymentoptionsCountArgs>(
      args?: Subset<T, paymentoptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentoptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paymentoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentoptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentoptionsAggregateArgs>(args: Subset<T, PaymentoptionsAggregateArgs>): Prisma.PrismaPromise<GetPaymentoptionsAggregateType<T>>

    /**
     * Group by Paymentoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentoptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentoptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentoptionsGroupByArgs['orderBy'] }
        : { orderBy?: paymentoptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentoptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentoptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paymentoptions model
   */
  readonly fields: paymentoptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paymentoptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentoptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    paymentdetails<T extends paymentoptions$paymentdetailsArgs<ExtArgs> = {}>(args?: Subset<T, paymentoptions$paymentdetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the paymentoptions model
   */ 
  interface paymentoptionsFieldRefs {
    readonly id: FieldRef<"paymentoptions", 'Int'>
    readonly paymentType: FieldRef<"paymentoptions", 'paymentoptions_paymentType'>
    readonly createdAt: FieldRef<"paymentoptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * paymentoptions findUnique
   */
  export type paymentoptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * Filter, which paymentoptions to fetch.
     */
    where: paymentoptionsWhereUniqueInput
  }

  /**
   * paymentoptions findUniqueOrThrow
   */
  export type paymentoptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * Filter, which paymentoptions to fetch.
     */
    where: paymentoptionsWhereUniqueInput
  }

  /**
   * paymentoptions findFirst
   */
  export type paymentoptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * Filter, which paymentoptions to fetch.
     */
    where?: paymentoptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentoptions to fetch.
     */
    orderBy?: paymentoptionsOrderByWithRelationInput | paymentoptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentoptions.
     */
    cursor?: paymentoptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentoptions.
     */
    distinct?: PaymentoptionsScalarFieldEnum | PaymentoptionsScalarFieldEnum[]
  }

  /**
   * paymentoptions findFirstOrThrow
   */
  export type paymentoptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * Filter, which paymentoptions to fetch.
     */
    where?: paymentoptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentoptions to fetch.
     */
    orderBy?: paymentoptionsOrderByWithRelationInput | paymentoptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paymentoptions.
     */
    cursor?: paymentoptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paymentoptions.
     */
    distinct?: PaymentoptionsScalarFieldEnum | PaymentoptionsScalarFieldEnum[]
  }

  /**
   * paymentoptions findMany
   */
  export type paymentoptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * Filter, which paymentoptions to fetch.
     */
    where?: paymentoptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paymentoptions to fetch.
     */
    orderBy?: paymentoptionsOrderByWithRelationInput | paymentoptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paymentoptions.
     */
    cursor?: paymentoptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paymentoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paymentoptions.
     */
    skip?: number
    distinct?: PaymentoptionsScalarFieldEnum | PaymentoptionsScalarFieldEnum[]
  }

  /**
   * paymentoptions create
   */
  export type paymentoptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a paymentoptions.
     */
    data: XOR<paymentoptionsCreateInput, paymentoptionsUncheckedCreateInput>
  }

  /**
   * paymentoptions createMany
   */
  export type paymentoptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paymentoptions.
     */
    data: paymentoptionsCreateManyInput | paymentoptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paymentoptions createManyAndReturn
   */
  export type paymentoptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * The data used to create many paymentoptions.
     */
    data: paymentoptionsCreateManyInput | paymentoptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * paymentoptions update
   */
  export type paymentoptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a paymentoptions.
     */
    data: XOR<paymentoptionsUpdateInput, paymentoptionsUncheckedUpdateInput>
    /**
     * Choose, which paymentoptions to update.
     */
    where: paymentoptionsWhereUniqueInput
  }

  /**
   * paymentoptions updateMany
   */
  export type paymentoptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paymentoptions.
     */
    data: XOR<paymentoptionsUpdateManyMutationInput, paymentoptionsUncheckedUpdateManyInput>
    /**
     * Filter which paymentoptions to update
     */
    where?: paymentoptionsWhereInput
  }

  /**
   * paymentoptions upsert
   */
  export type paymentoptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the paymentoptions to update in case it exists.
     */
    where: paymentoptionsWhereUniqueInput
    /**
     * In case the paymentoptions found by the `where` argument doesn't exist, create a new paymentoptions with this data.
     */
    create: XOR<paymentoptionsCreateInput, paymentoptionsUncheckedCreateInput>
    /**
     * In case the paymentoptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentoptionsUpdateInput, paymentoptionsUncheckedUpdateInput>
  }

  /**
   * paymentoptions delete
   */
  export type paymentoptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
    /**
     * Filter which paymentoptions to delete.
     */
    where: paymentoptionsWhereUniqueInput
  }

  /**
   * paymentoptions deleteMany
   */
  export type paymentoptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paymentoptions to delete
     */
    where?: paymentoptionsWhereInput
  }

  /**
   * paymentoptions.paymentdetails
   */
  export type paymentoptions$paymentdetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    where?: paymentdetailsWhereInput
    orderBy?: paymentdetailsOrderByWithRelationInput | paymentdetailsOrderByWithRelationInput[]
    cursor?: paymentdetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentdetailsScalarFieldEnum | PaymentdetailsScalarFieldEnum[]
  }

  /**
   * paymentoptions without action
   */
  export type paymentoptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentoptions
     */
    select?: paymentoptionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentoptionsInclude<ExtArgs> | null
  }


  /**
   * Model clientpayment
   */

  export type AggregateClientpayment = {
    _count: ClientpaymentCountAggregateOutputType | null
    _avg: ClientpaymentAvgAggregateOutputType | null
    _sum: ClientpaymentSumAggregateOutputType | null
    _min: ClientpaymentMinAggregateOutputType | null
    _max: ClientpaymentMaxAggregateOutputType | null
  }

  export type ClientpaymentAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientpaymentSumAggregateOutputType = {
    id: number | null
  }

  export type ClientpaymentMinAggregateOutputType = {
    id: number | null
    paymentMethod: $Enums.paymentmethod | null
    createdAt: Date | null
  }

  export type ClientpaymentMaxAggregateOutputType = {
    id: number | null
    paymentMethod: $Enums.paymentmethod | null
    createdAt: Date | null
  }

  export type ClientpaymentCountAggregateOutputType = {
    id: number
    paymentMethod: number
    createdAt: number
    _all: number
  }


  export type ClientpaymentAvgAggregateInputType = {
    id?: true
  }

  export type ClientpaymentSumAggregateInputType = {
    id?: true
  }

  export type ClientpaymentMinAggregateInputType = {
    id?: true
    paymentMethod?: true
    createdAt?: true
  }

  export type ClientpaymentMaxAggregateInputType = {
    id?: true
    paymentMethod?: true
    createdAt?: true
  }

  export type ClientpaymentCountAggregateInputType = {
    id?: true
    paymentMethod?: true
    createdAt?: true
    _all?: true
  }

  export type ClientpaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientpayment to aggregate.
     */
    where?: clientpaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientpayments to fetch.
     */
    orderBy?: clientpaymentOrderByWithRelationInput | clientpaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientpaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientpayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientpayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientpayments
    **/
    _count?: true | ClientpaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientpaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientpaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientpaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientpaymentMaxAggregateInputType
  }

  export type GetClientpaymentAggregateType<T extends ClientpaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateClientpayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientpayment[P]>
      : GetScalarType<T[P], AggregateClientpayment[P]>
  }




  export type clientpaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientpaymentWhereInput
    orderBy?: clientpaymentOrderByWithAggregationInput | clientpaymentOrderByWithAggregationInput[]
    by: ClientpaymentScalarFieldEnum[] | ClientpaymentScalarFieldEnum
    having?: clientpaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientpaymentCountAggregateInputType | true
    _avg?: ClientpaymentAvgAggregateInputType
    _sum?: ClientpaymentSumAggregateInputType
    _min?: ClientpaymentMinAggregateInputType
    _max?: ClientpaymentMaxAggregateInputType
  }

  export type ClientpaymentGroupByOutputType = {
    id: number
    paymentMethod: $Enums.paymentmethod
    createdAt: Date
    _count: ClientpaymentCountAggregateOutputType | null
    _avg: ClientpaymentAvgAggregateOutputType | null
    _sum: ClientpaymentSumAggregateOutputType | null
    _min: ClientpaymentMinAggregateOutputType | null
    _max: ClientpaymentMaxAggregateOutputType | null
  }

  type GetClientpaymentGroupByPayload<T extends clientpaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientpaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientpaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientpaymentGroupByOutputType[P]>
            : GetScalarType<T[P], ClientpaymentGroupByOutputType[P]>
        }
      >
    >


  export type clientpaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    client?: boolean | clientpayment$clientArgs<ExtArgs>
    _count?: boolean | ClientpaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientpayment"]>

  export type clientpaymentSelectScalar = {
    id?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
  }


  export type clientpaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientpayment$clientArgs<ExtArgs>
    _count?: boolean | ClientpaymentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $clientpaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientpayment"
    objects: {
      client: Prisma.$clientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentMethod: $Enums.paymentmethod
      createdAt: Date
    }, ExtArgs["result"]["clientpayment"]>
    composites: {}
  }


  type clientpaymentGetPayload<S extends boolean | null | undefined | clientpaymentDefaultArgs> = $Result.GetResult<Prisma.$clientpaymentPayload, S>

  type clientpaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clientpaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientpaymentCountAggregateInputType | true
    }

  export interface clientpaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientpayment'], meta: { name: 'clientpayment' } }
    /**
     * Find zero or one Clientpayment that matches the filter.
     * @param {clientpaymentFindUniqueArgs} args - Arguments to find a Clientpayment
     * @example
     * // Get one Clientpayment
     * const clientpayment = await prisma.clientpayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clientpaymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clientpaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Clientpayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clientpaymentFindUniqueOrThrowArgs} args - Arguments to find a Clientpayment
     * @example
     * // Get one Clientpayment
     * const clientpayment = await prisma.clientpayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clientpaymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientpaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Clientpayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientpaymentFindFirstArgs} args - Arguments to find a Clientpayment
     * @example
     * // Get one Clientpayment
     * const clientpayment = await prisma.clientpayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clientpaymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clientpaymentFindFirstArgs<ExtArgs>>
    ): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Clientpayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientpaymentFindFirstOrThrowArgs} args - Arguments to find a Clientpayment
     * @example
     * // Get one Clientpayment
     * const clientpayment = await prisma.clientpayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clientpaymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clientpaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clientpayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientpaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientpayments
     * const clientpayments = await prisma.clientpayment.findMany()
     * 
     * // Get first 10 Clientpayments
     * const clientpayments = await prisma.clientpayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientpaymentWithIdOnly = await prisma.clientpayment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends clientpaymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientpaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Clientpayment.
     * @param {clientpaymentCreateArgs} args - Arguments to create a Clientpayment.
     * @example
     * // Create one Clientpayment
     * const Clientpayment = await prisma.clientpayment.create({
     *   data: {
     *     // ... data to create a Clientpayment
     *   }
     * })
     * 
    **/
    create<T extends clientpaymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clientpaymentCreateArgs<ExtArgs>>
    ): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clientpayments.
     * @param {clientpaymentCreateManyArgs} args - Arguments to create many Clientpayments.
     * @example
     * // Create many Clientpayments
     * const clientpayment = await prisma.clientpayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends clientpaymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientpaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientpayments and returns the data saved in the database.
     * @param {clientpaymentCreateManyAndReturnArgs} args - Arguments to create many Clientpayments.
     * @example
     * // Create many Clientpayments
     * const clientpayment = await prisma.clientpayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientpayments and only return the `id`
     * const clientpaymentWithIdOnly = await prisma.clientpayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends clientpaymentCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, clientpaymentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Clientpayment.
     * @param {clientpaymentDeleteArgs} args - Arguments to delete one Clientpayment.
     * @example
     * // Delete one Clientpayment
     * const Clientpayment = await prisma.clientpayment.delete({
     *   where: {
     *     // ... filter to delete one Clientpayment
     *   }
     * })
     * 
    **/
    delete<T extends clientpaymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clientpaymentDeleteArgs<ExtArgs>>
    ): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Clientpayment.
     * @param {clientpaymentUpdateArgs} args - Arguments to update one Clientpayment.
     * @example
     * // Update one Clientpayment
     * const clientpayment = await prisma.clientpayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clientpaymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clientpaymentUpdateArgs<ExtArgs>>
    ): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clientpayments.
     * @param {clientpaymentDeleteManyArgs} args - Arguments to filter Clientpayments to delete.
     * @example
     * // Delete a few Clientpayments
     * const { count } = await prisma.clientpayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clientpaymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clientpaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientpayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientpaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientpayments
     * const clientpayment = await prisma.clientpayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clientpaymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clientpaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientpayment.
     * @param {clientpaymentUpsertArgs} args - Arguments to update or create a Clientpayment.
     * @example
     * // Update or create a Clientpayment
     * const clientpayment = await prisma.clientpayment.upsert({
     *   create: {
     *     // ... data to create a Clientpayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientpayment we want to update
     *   }
     * })
    **/
    upsert<T extends clientpaymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clientpaymentUpsertArgs<ExtArgs>>
    ): Prisma__clientpaymentClient<$Result.GetResult<Prisma.$clientpaymentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clientpayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientpaymentCountArgs} args - Arguments to filter Clientpayments to count.
     * @example
     * // Count the number of Clientpayments
     * const count = await prisma.clientpayment.count({
     *   where: {
     *     // ... the filter for the Clientpayments we want to count
     *   }
     * })
    **/
    count<T extends clientpaymentCountArgs>(
      args?: Subset<T, clientpaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientpaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientpayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientpaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientpaymentAggregateArgs>(args: Subset<T, ClientpaymentAggregateArgs>): Prisma.PrismaPromise<GetClientpaymentAggregateType<T>>

    /**
     * Group by Clientpayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientpaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientpaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientpaymentGroupByArgs['orderBy'] }
        : { orderBy?: clientpaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientpaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientpaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientpayment model
   */
  readonly fields: clientpaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientpayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientpaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends clientpayment$clientArgs<ExtArgs> = {}>(args?: Subset<T, clientpayment$clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the clientpayment model
   */ 
  interface clientpaymentFieldRefs {
    readonly id: FieldRef<"clientpayment", 'Int'>
    readonly paymentMethod: FieldRef<"clientpayment", 'paymentmethod'>
    readonly createdAt: FieldRef<"clientpayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clientpayment findUnique
   */
  export type clientpaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * Filter, which clientpayment to fetch.
     */
    where: clientpaymentWhereUniqueInput
  }

  /**
   * clientpayment findUniqueOrThrow
   */
  export type clientpaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * Filter, which clientpayment to fetch.
     */
    where: clientpaymentWhereUniqueInput
  }

  /**
   * clientpayment findFirst
   */
  export type clientpaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * Filter, which clientpayment to fetch.
     */
    where?: clientpaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientpayments to fetch.
     */
    orderBy?: clientpaymentOrderByWithRelationInput | clientpaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientpayments.
     */
    cursor?: clientpaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientpayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientpayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientpayments.
     */
    distinct?: ClientpaymentScalarFieldEnum | ClientpaymentScalarFieldEnum[]
  }

  /**
   * clientpayment findFirstOrThrow
   */
  export type clientpaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * Filter, which clientpayment to fetch.
     */
    where?: clientpaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientpayments to fetch.
     */
    orderBy?: clientpaymentOrderByWithRelationInput | clientpaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientpayments.
     */
    cursor?: clientpaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientpayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientpayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientpayments.
     */
    distinct?: ClientpaymentScalarFieldEnum | ClientpaymentScalarFieldEnum[]
  }

  /**
   * clientpayment findMany
   */
  export type clientpaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * Filter, which clientpayments to fetch.
     */
    where?: clientpaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientpayments to fetch.
     */
    orderBy?: clientpaymentOrderByWithRelationInput | clientpaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientpayments.
     */
    cursor?: clientpaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientpayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientpayments.
     */
    skip?: number
    distinct?: ClientpaymentScalarFieldEnum | ClientpaymentScalarFieldEnum[]
  }

  /**
   * clientpayment create
   */
  export type clientpaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a clientpayment.
     */
    data: XOR<clientpaymentCreateInput, clientpaymentUncheckedCreateInput>
  }

  /**
   * clientpayment createMany
   */
  export type clientpaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientpayments.
     */
    data: clientpaymentCreateManyInput | clientpaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientpayment createManyAndReturn
   */
  export type clientpaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * The data used to create many clientpayments.
     */
    data: clientpaymentCreateManyInput | clientpaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientpayment update
   */
  export type clientpaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a clientpayment.
     */
    data: XOR<clientpaymentUpdateInput, clientpaymentUncheckedUpdateInput>
    /**
     * Choose, which clientpayment to update.
     */
    where: clientpaymentWhereUniqueInput
  }

  /**
   * clientpayment updateMany
   */
  export type clientpaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientpayments.
     */
    data: XOR<clientpaymentUpdateManyMutationInput, clientpaymentUncheckedUpdateManyInput>
    /**
     * Filter which clientpayments to update
     */
    where?: clientpaymentWhereInput
  }

  /**
   * clientpayment upsert
   */
  export type clientpaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the clientpayment to update in case it exists.
     */
    where: clientpaymentWhereUniqueInput
    /**
     * In case the clientpayment found by the `where` argument doesn't exist, create a new clientpayment with this data.
     */
    create: XOR<clientpaymentCreateInput, clientpaymentUncheckedCreateInput>
    /**
     * In case the clientpayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientpaymentUpdateInput, clientpaymentUncheckedUpdateInput>
  }

  /**
   * clientpayment delete
   */
  export type clientpaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
    /**
     * Filter which clientpayment to delete.
     */
    where: clientpaymentWhereUniqueInput
  }

  /**
   * clientpayment deleteMany
   */
  export type clientpaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientpayments to delete
     */
    where?: clientpaymentWhereInput
  }

  /**
   * clientpayment.client
   */
  export type clientpayment$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    where?: clientWhereInput
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    cursor?: clientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * clientpayment without action
   */
  export type clientpaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientpayment
     */
    select?: clientpaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientpaymentInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    userId: number | null
    productCode: string | null
    name: string | null
    description: string | null
    price: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    productCode: string | null
    name: string | null
    description: string | null
    price: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    userId: number
    productCode: number
    name: number
    description: number
    price: number
    isDeleted: number
    createdAt: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    userId?: true
    productCode?: true
    name?: true
    description?: true
    price?: true
    isDeleted?: true
    createdAt?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    userId?: true
    productCode?: true
    name?: true
    description?: true
    price?: true
    isDeleted?: true
    createdAt?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    userId?: true
    productCode?: true
    name?: true
    description?: true
    price?: true
    isDeleted?: true
    createdAt?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    userId: number
    productCode: string
    name: string
    description: string
    price: number
    isDeleted: boolean
    createdAt: Date
    categoryId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productCode?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    categoryId?: boolean
    invoicedetail?: boolean | product$invoicedetailArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    userId?: boolean
    productCode?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    categoryId?: boolean
  }


  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoicedetail?: boolean | product$invoicedetailArgs<ExtArgs>
    category?: boolean | categoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      invoicedetail: Prisma.$invoicedetailPayload<ExtArgs>[]
      category: Prisma.$categoryPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      productCode: string
      name: string
      description: string
      price: number
      isDeleted: boolean
      createdAt: Date
      categoryId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends productFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends productCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productCreateArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends productCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends productCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends productDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productDeleteArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productUpdateArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends productUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productUpsertArgs<ExtArgs>>
    ): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    invoicedetail<T extends product$invoicedetailArgs<ExtArgs> = {}>(args?: Subset<T, product$invoicedetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicedetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the product model
   */ 
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly userId: FieldRef<"product", 'Int'>
    readonly productCode: FieldRef<"product", 'String'>
    readonly name: FieldRef<"product", 'String'>
    readonly description: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Int'>
    readonly isDeleted: FieldRef<"product", 'Boolean'>
    readonly createdAt: FieldRef<"product", 'DateTime'>
    readonly categoryId: FieldRef<"product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
  }

  /**
   * product.invoicedetail
   */
  export type product$invoicedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoicedetail
     */
    select?: invoicedetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicedetailInclude<ExtArgs> | null
    where?: invoicedetailWhereInput
    orderBy?: invoicedetailOrderByWithRelationInput | invoicedetailOrderByWithRelationInput[]
    cursor?: invoicedetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicedetailScalarFieldEnum | InvoicedetailScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    loginAttempt: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    loginAttempt: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    identificationId: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    isBlocked: boolean | null
    lastLoginAttempt: Date | null
    loginAttempt: number | null
    isVerified: boolean | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    sessionToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    identificationId: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    isBlocked: boolean | null
    lastLoginAttempt: Date | null
    loginAttempt: number | null
    isVerified: boolean | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    sessionToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    identificationId: number
    username: number
    email: number
    password: number
    createdAt: number
    isBlocked: number
    lastLoginAttempt: number
    loginAttempt: number
    isVerified: number
    resetToken: number
    resetTokenExpiry: number
    sessionToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    loginAttempt?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    loginAttempt?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    identificationId?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    isBlocked?: true
    lastLoginAttempt?: true
    loginAttempt?: true
    isVerified?: true
    resetToken?: true
    resetTokenExpiry?: true
    sessionToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    identificationId?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    isBlocked?: true
    lastLoginAttempt?: true
    loginAttempt?: true
    isVerified?: true
    resetToken?: true
    resetTokenExpiry?: true
    sessionToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    identificationId?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    isBlocked?: true
    lastLoginAttempt?: true
    loginAttempt?: true
    isVerified?: true
    resetToken?: true
    resetTokenExpiry?: true
    sessionToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    identificationId: string
    username: string
    email: string
    password: string
    createdAt: Date
    isBlocked: boolean
    lastLoginAttempt: Date
    loginAttempt: number
    isVerified: boolean
    resetToken: string | null
    resetTokenExpiry: Date | null
    sessionToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identificationId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    isBlocked?: boolean
    lastLoginAttempt?: boolean
    loginAttempt?: boolean
    isVerified?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    sessionToken?: boolean
    client?: boolean | user$clientArgs<ExtArgs>
    invoice?: boolean | user$invoiceArgs<ExtArgs>
    paymentdetails?: boolean | user$paymentdetailsArgs<ExtArgs>
    product?: boolean | user$productArgs<ExtArgs>
    userprofile?: boolean | user$userprofileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    identificationId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    isBlocked?: boolean
    lastLoginAttempt?: boolean
    loginAttempt?: boolean
    isVerified?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    sessionToken?: boolean
  }


  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | user$clientArgs<ExtArgs>
    invoice?: boolean | user$invoiceArgs<ExtArgs>
    paymentdetails?: boolean | user$paymentdetailsArgs<ExtArgs>
    product?: boolean | user$productArgs<ExtArgs>
    userprofile?: boolean | user$userprofileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      client: Prisma.$clientPayload<ExtArgs>[]
      invoice: Prisma.$invoicePayload<ExtArgs>[]
      paymentdetails: Prisma.$paymentdetailsPayload<ExtArgs>[]
      product: Prisma.$productPayload<ExtArgs>[]
      userprofile: Prisma.$userprofilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      identificationId: string
      username: string
      email: string
      password: string
      createdAt: Date
      isBlocked: boolean
      lastLoginAttempt: Date
      loginAttempt: number
      isVerified: boolean
      resetToken: string | null
      resetTokenExpiry: Date | null
      sessionToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends userCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends user$clientArgs<ExtArgs> = {}>(args?: Subset<T, user$clientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, 'findMany'> | Null>;

    invoice<T extends user$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, user$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    paymentdetails<T extends user$paymentdetailsArgs<ExtArgs> = {}>(args?: Subset<T, user$paymentdetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentdetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    product<T extends user$productArgs<ExtArgs> = {}>(args?: Subset<T, user$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, 'findMany'> | Null>;

    userprofile<T extends user$userprofileArgs<ExtArgs> = {}>(args?: Subset<T, user$userprofileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly identificationId: FieldRef<"user", 'String'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly isBlocked: FieldRef<"user", 'Boolean'>
    readonly lastLoginAttempt: FieldRef<"user", 'DateTime'>
    readonly loginAttempt: FieldRef<"user", 'Int'>
    readonly isVerified: FieldRef<"user", 'Boolean'>
    readonly resetToken: FieldRef<"user", 'String'>
    readonly resetTokenExpiry: FieldRef<"user", 'DateTime'>
    readonly sessionToken: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user.client
   */
  export type user$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    where?: clientWhereInput
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    cursor?: clientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * user.invoice
   */
  export type user$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoiceInclude<ExtArgs> | null
    where?: invoiceWhereInput
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[]
    cursor?: invoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * user.paymentdetails
   */
  export type user$paymentdetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paymentdetails
     */
    select?: paymentdetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentdetailsInclude<ExtArgs> | null
    where?: paymentdetailsWhereInput
    orderBy?: paymentdetailsOrderByWithRelationInput | paymentdetailsOrderByWithRelationInput[]
    cursor?: paymentdetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentdetailsScalarFieldEnum | PaymentdetailsScalarFieldEnum[]
  }

  /**
   * user.product
   */
  export type user$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * user.userprofile
   */
  export type user$userprofileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    where?: userprofileWhereInput
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    cursor?: userprofileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model userprofile
   */

  export type AggregateUserprofile = {
    _count: UserprofileCountAggregateOutputType | null
    _avg: UserprofileAvgAggregateOutputType | null
    _sum: UserprofileSumAggregateOutputType | null
    _min: UserprofileMinAggregateOutputType | null
    _max: UserprofileMaxAggregateOutputType | null
  }

  export type UserprofileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserprofileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserprofileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    companyName: string | null
    profilePicture: string | null
    address: string | null
    phone: string | null
    createdAt: Date | null
    isCreated: boolean | null
  }

  export type UserprofileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    firstName: string | null
    lastName: string | null
    companyName: string | null
    profilePicture: string | null
    address: string | null
    phone: string | null
    createdAt: Date | null
    isCreated: boolean | null
  }

  export type UserprofileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    companyName: number
    profilePicture: number
    address: number
    phone: number
    createdAt: number
    isCreated: number
    _all: number
  }


  export type UserprofileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserprofileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserprofileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    companyName?: true
    profilePicture?: true
    address?: true
    phone?: true
    createdAt?: true
    isCreated?: true
  }

  export type UserprofileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    companyName?: true
    profilePicture?: true
    address?: true
    phone?: true
    createdAt?: true
    isCreated?: true
  }

  export type UserprofileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    companyName?: true
    profilePicture?: true
    address?: true
    phone?: true
    createdAt?: true
    isCreated?: true
    _all?: true
  }

  export type UserprofileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userprofile to aggregate.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userprofiles
    **/
    _count?: true | UserprofileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserprofileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserprofileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserprofileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserprofileMaxAggregateInputType
  }

  export type GetUserprofileAggregateType<T extends UserprofileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserprofile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserprofile[P]>
      : GetScalarType<T[P], AggregateUserprofile[P]>
  }




  export type userprofileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userprofileWhereInput
    orderBy?: userprofileOrderByWithAggregationInput | userprofileOrderByWithAggregationInput[]
    by: UserprofileScalarFieldEnum[] | UserprofileScalarFieldEnum
    having?: userprofileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserprofileCountAggregateInputType | true
    _avg?: UserprofileAvgAggregateInputType
    _sum?: UserprofileSumAggregateInputType
    _min?: UserprofileMinAggregateInputType
    _max?: UserprofileMaxAggregateInputType
  }

  export type UserprofileGroupByOutputType = {
    id: number
    userId: number
    firstName: string | null
    lastName: string | null
    companyName: string | null
    profilePicture: string | null
    address: string | null
    phone: string | null
    createdAt: Date
    isCreated: boolean
    _count: UserprofileCountAggregateOutputType | null
    _avg: UserprofileAvgAggregateOutputType | null
    _sum: UserprofileSumAggregateOutputType | null
    _min: UserprofileMinAggregateOutputType | null
    _max: UserprofileMaxAggregateOutputType | null
  }

  type GetUserprofileGroupByPayload<T extends userprofileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserprofileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserprofileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserprofileGroupByOutputType[P]>
            : GetScalarType<T[P], UserprofileGroupByOutputType[P]>
        }
      >
    >


  export type userprofileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    companyName?: boolean
    profilePicture?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    isCreated?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userprofile"]>

  export type userprofileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    companyName?: boolean
    profilePicture?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    isCreated?: boolean
  }


  export type userprofileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $userprofilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userprofile"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      firstName: string | null
      lastName: string | null
      companyName: string | null
      profilePicture: string | null
      address: string | null
      phone: string | null
      createdAt: Date
      isCreated: boolean
    }, ExtArgs["result"]["userprofile"]>
    composites: {}
  }


  type userprofileGetPayload<S extends boolean | null | undefined | userprofileDefaultArgs> = $Result.GetResult<Prisma.$userprofilePayload, S>

  type userprofileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userprofileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserprofileCountAggregateInputType | true
    }

  export interface userprofileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userprofile'], meta: { name: 'userprofile' } }
    /**
     * Find zero or one Userprofile that matches the filter.
     * @param {userprofileFindUniqueArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userprofileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userprofileFindUniqueArgs<ExtArgs>>
    ): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Userprofile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userprofileFindUniqueOrThrowArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userprofileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userprofileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Userprofile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindFirstArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userprofileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userprofileFindFirstArgs<ExtArgs>>
    ): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Userprofile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindFirstOrThrowArgs} args - Arguments to find a Userprofile
     * @example
     * // Get one Userprofile
     * const userprofile = await prisma.userprofile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userprofileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userprofileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Userprofiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userprofiles
     * const userprofiles = await prisma.userprofile.findMany()
     * 
     * // Get first 10 Userprofiles
     * const userprofiles = await prisma.userprofile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userprofileWithIdOnly = await prisma.userprofile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userprofileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userprofileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Userprofile.
     * @param {userprofileCreateArgs} args - Arguments to create a Userprofile.
     * @example
     * // Create one Userprofile
     * const Userprofile = await prisma.userprofile.create({
     *   data: {
     *     // ... data to create a Userprofile
     *   }
     * })
     * 
    **/
    create<T extends userprofileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userprofileCreateArgs<ExtArgs>>
    ): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Userprofiles.
     * @param {userprofileCreateManyArgs} args - Arguments to create many Userprofiles.
     * @example
     * // Create many Userprofiles
     * const userprofile = await prisma.userprofile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends userprofileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userprofileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Userprofiles and returns the data saved in the database.
     * @param {userprofileCreateManyAndReturnArgs} args - Arguments to create many Userprofiles.
     * @example
     * // Create many Userprofiles
     * const userprofile = await prisma.userprofile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Userprofiles and only return the `id`
     * const userprofileWithIdOnly = await prisma.userprofile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends userprofileCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, userprofileCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Userprofile.
     * @param {userprofileDeleteArgs} args - Arguments to delete one Userprofile.
     * @example
     * // Delete one Userprofile
     * const Userprofile = await prisma.userprofile.delete({
     *   where: {
     *     // ... filter to delete one Userprofile
     *   }
     * })
     * 
    **/
    delete<T extends userprofileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userprofileDeleteArgs<ExtArgs>>
    ): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Userprofile.
     * @param {userprofileUpdateArgs} args - Arguments to update one Userprofile.
     * @example
     * // Update one Userprofile
     * const userprofile = await prisma.userprofile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userprofileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userprofileUpdateArgs<ExtArgs>>
    ): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Userprofiles.
     * @param {userprofileDeleteManyArgs} args - Arguments to filter Userprofiles to delete.
     * @example
     * // Delete a few Userprofiles
     * const { count } = await prisma.userprofile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userprofileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userprofileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userprofiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userprofiles
     * const userprofile = await prisma.userprofile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userprofileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userprofileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Userprofile.
     * @param {userprofileUpsertArgs} args - Arguments to update or create a Userprofile.
     * @example
     * // Update or create a Userprofile
     * const userprofile = await prisma.userprofile.upsert({
     *   create: {
     *     // ... data to create a Userprofile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userprofile we want to update
     *   }
     * })
    **/
    upsert<T extends userprofileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userprofileUpsertArgs<ExtArgs>>
    ): Prisma__userprofileClient<$Result.GetResult<Prisma.$userprofilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Userprofiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileCountArgs} args - Arguments to filter Userprofiles to count.
     * @example
     * // Count the number of Userprofiles
     * const count = await prisma.userprofile.count({
     *   where: {
     *     // ... the filter for the Userprofiles we want to count
     *   }
     * })
    **/
    count<T extends userprofileCountArgs>(
      args?: Subset<T, userprofileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserprofileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userprofile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserprofileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserprofileAggregateArgs>(args: Subset<T, UserprofileAggregateArgs>): Prisma.PrismaPromise<GetUserprofileAggregateType<T>>

    /**
     * Group by Userprofile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userprofileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userprofileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userprofileGroupByArgs['orderBy'] }
        : { orderBy?: userprofileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userprofileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserprofileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userprofile model
   */
  readonly fields: userprofileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userprofile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userprofileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the userprofile model
   */ 
  interface userprofileFieldRefs {
    readonly id: FieldRef<"userprofile", 'Int'>
    readonly userId: FieldRef<"userprofile", 'Int'>
    readonly firstName: FieldRef<"userprofile", 'String'>
    readonly lastName: FieldRef<"userprofile", 'String'>
    readonly companyName: FieldRef<"userprofile", 'String'>
    readonly profilePicture: FieldRef<"userprofile", 'String'>
    readonly address: FieldRef<"userprofile", 'String'>
    readonly phone: FieldRef<"userprofile", 'String'>
    readonly createdAt: FieldRef<"userprofile", 'DateTime'>
    readonly isCreated: FieldRef<"userprofile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * userprofile findUnique
   */
  export type userprofileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile findUniqueOrThrow
   */
  export type userprofileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile findFirst
   */
  export type userprofileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userprofiles.
     */
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile findFirstOrThrow
   */
  export type userprofileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofile to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userprofiles.
     */
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile findMany
   */
  export type userprofileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter, which userprofiles to fetch.
     */
    where?: userprofileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userprofiles to fetch.
     */
    orderBy?: userprofileOrderByWithRelationInput | userprofileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userprofiles.
     */
    cursor?: userprofileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userprofiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userprofiles.
     */
    skip?: number
    distinct?: UserprofileScalarFieldEnum | UserprofileScalarFieldEnum[]
  }

  /**
   * userprofile create
   */
  export type userprofileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data needed to create a userprofile.
     */
    data: XOR<userprofileCreateInput, userprofileUncheckedCreateInput>
  }

  /**
   * userprofile createMany
   */
  export type userprofileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userprofiles.
     */
    data: userprofileCreateManyInput | userprofileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userprofile createManyAndReturn
   */
  export type userprofileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data used to create many userprofiles.
     */
    data: userprofileCreateManyInput | userprofileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userprofile update
   */
  export type userprofileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The data needed to update a userprofile.
     */
    data: XOR<userprofileUpdateInput, userprofileUncheckedUpdateInput>
    /**
     * Choose, which userprofile to update.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile updateMany
   */
  export type userprofileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userprofiles.
     */
    data: XOR<userprofileUpdateManyMutationInput, userprofileUncheckedUpdateManyInput>
    /**
     * Filter which userprofiles to update
     */
    where?: userprofileWhereInput
  }

  /**
   * userprofile upsert
   */
  export type userprofileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * The filter to search for the userprofile to update in case it exists.
     */
    where: userprofileWhereUniqueInput
    /**
     * In case the userprofile found by the `where` argument doesn't exist, create a new userprofile with this data.
     */
    create: XOR<userprofileCreateInput, userprofileUncheckedCreateInput>
    /**
     * In case the userprofile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userprofileUpdateInput, userprofileUncheckedUpdateInput>
  }

  /**
   * userprofile delete
   */
  export type userprofileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
    /**
     * Filter which userprofile to delete.
     */
    where: userprofileWhereUniqueInput
  }

  /**
   * userprofile deleteMany
   */
  export type userprofileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userprofiles to delete
     */
    where?: userprofileWhereInput
  }

  /**
   * userprofile without action
   */
  export type userprofileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userprofile
     */
    select?: userprofileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userprofileInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    categoryName: 'categoryName',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ClientScalarFieldEnum: {
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

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
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

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoicedetailScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    invoiceId: 'invoiceId',
    qty: 'qty',
    priceUnit: 'priceUnit',
    priceTotal: 'priceTotal',
    createdAt: 'createdAt'
  };

  export type InvoicedetailScalarFieldEnum = (typeof InvoicedetailScalarFieldEnum)[keyof typeof InvoicedetailScalarFieldEnum]


  export const PaymentdetailsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    paymentOptId: 'paymentOptId',
    paymentCode: 'paymentCode',
    bankAccount: 'bankAccount',
    accountNumber: 'accountNumber',
    accountName: 'accountName',
    createdAt: 'createdAt'
  };

  export type PaymentdetailsScalarFieldEnum = (typeof PaymentdetailsScalarFieldEnum)[keyof typeof PaymentdetailsScalarFieldEnum]


  export const PaymentoptionsScalarFieldEnum: {
    id: 'id',
    paymentType: 'paymentType',
    createdAt: 'createdAt'
  };

  export type PaymentoptionsScalarFieldEnum = (typeof PaymentoptionsScalarFieldEnum)[keyof typeof PaymentoptionsScalarFieldEnum]


  export const ClientpaymentScalarFieldEnum: {
    id: 'id',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt'
  };

  export type ClientpaymentScalarFieldEnum = (typeof ClientpaymentScalarFieldEnum)[keyof typeof ClientpaymentScalarFieldEnum]


  export const ProductScalarFieldEnum: {
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

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserprofileScalarFieldEnum: {
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

  export type UserprofileScalarFieldEnum = (typeof UserprofileScalarFieldEnum)[keyof typeof UserprofileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'invoice_invoiceStatus'
   */
  export type Enuminvoice_invoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'invoice_invoiceStatus'>
    


  /**
   * Reference to a field of type 'invoice_invoiceStatus[]'
   */
  export type ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'invoice_invoiceStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'paymentoptions_paymentType'
   */
  export type Enumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentoptions_paymentType'>
    


  /**
   * Reference to a field of type 'paymentoptions_paymentType[]'
   */
  export type ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentoptions_paymentType[]'>
    


  /**
   * Reference to a field of type 'paymentmethod'
   */
  export type EnumpaymentmethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentmethod'>
    


  /**
   * Reference to a field of type 'paymentmethod[]'
   */
  export type ListEnumpaymentmethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentmethod[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    categoryName?: StringFilter<"category"> | string
    createdAt?: DateTimeFilter<"category"> | Date | string
    product?: ProductListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    product?: productOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    categoryName?: StringFilter<"category"> | string
    createdAt?: DateTimeFilter<"category"> | Date | string
    product?: ProductListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    categoryName?: StringWithAggregatesFilter<"category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"category"> | Date | string
  }

  export type clientWhereInput = {
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    id?: IntFilter<"client"> | number
    name?: StringFilter<"client"> | string
    address?: StringFilter<"client"> | string
    phone?: StringFilter<"client"> | string
    email?: StringFilter<"client"> | string
    createdAt?: DateTimeFilter<"client"> | Date | string
    clientCode?: StringFilter<"client"> | string
    userId?: IntFilter<"client"> | number
    payId?: IntFilter<"client"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    invoice?: InvoiceListRelationFilter
    clientpayment?: XOR<ClientpaymentRelationFilter, clientpaymentWhereInput>
  }

  export type clientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clientCode?: SortOrder
    userId?: SortOrder
    payId?: SortOrder
    user?: userOrderByWithRelationInput
    invoice?: invoiceOrderByRelationAggregateInput
    clientpayment?: clientpaymentOrderByWithRelationInput
  }

  export type clientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clientCode?: string
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    name?: StringFilter<"client"> | string
    address?: StringFilter<"client"> | string
    phone?: StringFilter<"client"> | string
    email?: StringFilter<"client"> | string
    createdAt?: DateTimeFilter<"client"> | Date | string
    userId?: IntFilter<"client"> | number
    payId?: IntFilter<"client"> | number
    user?: XOR<UserRelationFilter, userWhereInput>
    invoice?: InvoiceListRelationFilter
    clientpayment?: XOR<ClientpaymentRelationFilter, clientpaymentWhereInput>
  }, "id" | "clientCode">

  export type clientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clientCode?: SortOrder
    userId?: SortOrder
    payId?: SortOrder
    _count?: clientCountOrderByAggregateInput
    _avg?: clientAvgOrderByAggregateInput
    _max?: clientMaxOrderByAggregateInput
    _min?: clientMinOrderByAggregateInput
    _sum?: clientSumOrderByAggregateInput
  }

  export type clientScalarWhereWithAggregatesInput = {
    AND?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    OR?: clientScalarWhereWithAggregatesInput[]
    NOT?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client"> | number
    name?: StringWithAggregatesFilter<"client"> | string
    address?: StringWithAggregatesFilter<"client"> | string
    phone?: StringWithAggregatesFilter<"client"> | string
    email?: StringWithAggregatesFilter<"client"> | string
    createdAt?: DateTimeWithAggregatesFilter<"client"> | Date | string
    clientCode?: StringWithAggregatesFilter<"client"> | string
    userId?: IntWithAggregatesFilter<"client"> | number
    payId?: IntWithAggregatesFilter<"client"> | number
  }

  export type invoiceWhereInput = {
    AND?: invoiceWhereInput | invoiceWhereInput[]
    OR?: invoiceWhereInput[]
    NOT?: invoiceWhereInput | invoiceWhereInput[]
    id?: IntFilter<"invoice"> | number
    clientId?: IntFilter<"invoice"> | number
    invoiceCode?: StringFilter<"invoice"> | string
    invoiceDate?: DateTimeFilter<"invoice"> | Date | string
    nextInvoiceDate?: DateTimeFilter<"invoice"> | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFilter<"invoice"> | $Enums.invoice_invoiceStatus
    totalAmount?: IntFilter<"invoice"> | number
    recurringDays?: IntFilter<"invoice"> | number
    createdAt?: DateTimeFilter<"invoice"> | Date | string
    subTotal?: IntFilter<"invoice"> | number
    paymentId?: IntFilter<"invoice"> | number
    userId?: IntFilter<"invoice"> | number
    isDeleted?: BoolFilter<"invoice"> | boolean
    client?: XOR<ClientRelationFilter, clientWhereInput>
    paymentdetails?: XOR<PaymentdetailsRelationFilter, paymentdetailsWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
    invoicedetail?: InvoicedetailListRelationFilter
  }

  export type invoiceOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceCode?: SortOrder
    invoiceDate?: SortOrder
    nextInvoiceDate?: SortOrder
    invoiceStatus?: SortOrder
    totalAmount?: SortOrder
    recurringDays?: SortOrder
    createdAt?: SortOrder
    subTotal?: SortOrder
    paymentId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    client?: clientOrderByWithRelationInput
    paymentdetails?: paymentdetailsOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    invoicedetail?: invoicedetailOrderByRelationAggregateInput
  }

  export type invoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoiceCode?: string
    AND?: invoiceWhereInput | invoiceWhereInput[]
    OR?: invoiceWhereInput[]
    NOT?: invoiceWhereInput | invoiceWhereInput[]
    clientId?: IntFilter<"invoice"> | number
    invoiceDate?: DateTimeFilter<"invoice"> | Date | string
    nextInvoiceDate?: DateTimeFilter<"invoice"> | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFilter<"invoice"> | $Enums.invoice_invoiceStatus
    totalAmount?: IntFilter<"invoice"> | number
    recurringDays?: IntFilter<"invoice"> | number
    createdAt?: DateTimeFilter<"invoice"> | Date | string
    subTotal?: IntFilter<"invoice"> | number
    paymentId?: IntFilter<"invoice"> | number
    userId?: IntFilter<"invoice"> | number
    isDeleted?: BoolFilter<"invoice"> | boolean
    client?: XOR<ClientRelationFilter, clientWhereInput>
    paymentdetails?: XOR<PaymentdetailsRelationFilter, paymentdetailsWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
    invoicedetail?: InvoicedetailListRelationFilter
  }, "id" | "invoiceCode">

  export type invoiceOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceCode?: SortOrder
    invoiceDate?: SortOrder
    nextInvoiceDate?: SortOrder
    invoiceStatus?: SortOrder
    totalAmount?: SortOrder
    recurringDays?: SortOrder
    createdAt?: SortOrder
    subTotal?: SortOrder
    paymentId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    _count?: invoiceCountOrderByAggregateInput
    _avg?: invoiceAvgOrderByAggregateInput
    _max?: invoiceMaxOrderByAggregateInput
    _min?: invoiceMinOrderByAggregateInput
    _sum?: invoiceSumOrderByAggregateInput
  }

  export type invoiceScalarWhereWithAggregatesInput = {
    AND?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[]
    OR?: invoiceScalarWhereWithAggregatesInput[]
    NOT?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoice"> | number
    clientId?: IntWithAggregatesFilter<"invoice"> | number
    invoiceCode?: StringWithAggregatesFilter<"invoice"> | string
    invoiceDate?: DateTimeWithAggregatesFilter<"invoice"> | Date | string
    nextInvoiceDate?: DateTimeWithAggregatesFilter<"invoice"> | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusWithAggregatesFilter<"invoice"> | $Enums.invoice_invoiceStatus
    totalAmount?: IntWithAggregatesFilter<"invoice"> | number
    recurringDays?: IntWithAggregatesFilter<"invoice"> | number
    createdAt?: DateTimeWithAggregatesFilter<"invoice"> | Date | string
    subTotal?: IntWithAggregatesFilter<"invoice"> | number
    paymentId?: IntWithAggregatesFilter<"invoice"> | number
    userId?: IntWithAggregatesFilter<"invoice"> | number
    isDeleted?: BoolWithAggregatesFilter<"invoice"> | boolean
  }

  export type invoicedetailWhereInput = {
    AND?: invoicedetailWhereInput | invoicedetailWhereInput[]
    OR?: invoicedetailWhereInput[]
    NOT?: invoicedetailWhereInput | invoicedetailWhereInput[]
    id?: IntFilter<"invoicedetail"> | number
    productId?: IntFilter<"invoicedetail"> | number
    invoiceId?: IntFilter<"invoicedetail"> | number
    qty?: IntFilter<"invoicedetail"> | number
    priceUnit?: IntFilter<"invoicedetail"> | number
    priceTotal?: IntFilter<"invoicedetail"> | number
    createdAt?: DateTimeFilter<"invoicedetail"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, invoiceWhereInput>
    product?: XOR<ProductRelationFilter, productWhereInput>
  }

  export type invoicedetailOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    qty?: SortOrder
    priceUnit?: SortOrder
    priceTotal?: SortOrder
    createdAt?: SortOrder
    invoice?: invoiceOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type invoicedetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: invoicedetailWhereInput | invoicedetailWhereInput[]
    OR?: invoicedetailWhereInput[]
    NOT?: invoicedetailWhereInput | invoicedetailWhereInput[]
    productId?: IntFilter<"invoicedetail"> | number
    invoiceId?: IntFilter<"invoicedetail"> | number
    qty?: IntFilter<"invoicedetail"> | number
    priceUnit?: IntFilter<"invoicedetail"> | number
    priceTotal?: IntFilter<"invoicedetail"> | number
    createdAt?: DateTimeFilter<"invoicedetail"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, invoiceWhereInput>
    product?: XOR<ProductRelationFilter, productWhereInput>
  }, "id">

  export type invoicedetailOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    qty?: SortOrder
    priceUnit?: SortOrder
    priceTotal?: SortOrder
    createdAt?: SortOrder
    _count?: invoicedetailCountOrderByAggregateInput
    _avg?: invoicedetailAvgOrderByAggregateInput
    _max?: invoicedetailMaxOrderByAggregateInput
    _min?: invoicedetailMinOrderByAggregateInput
    _sum?: invoicedetailSumOrderByAggregateInput
  }

  export type invoicedetailScalarWhereWithAggregatesInput = {
    AND?: invoicedetailScalarWhereWithAggregatesInput | invoicedetailScalarWhereWithAggregatesInput[]
    OR?: invoicedetailScalarWhereWithAggregatesInput[]
    NOT?: invoicedetailScalarWhereWithAggregatesInput | invoicedetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"invoicedetail"> | number
    productId?: IntWithAggregatesFilter<"invoicedetail"> | number
    invoiceId?: IntWithAggregatesFilter<"invoicedetail"> | number
    qty?: IntWithAggregatesFilter<"invoicedetail"> | number
    priceUnit?: IntWithAggregatesFilter<"invoicedetail"> | number
    priceTotal?: IntWithAggregatesFilter<"invoicedetail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"invoicedetail"> | Date | string
  }

  export type paymentdetailsWhereInput = {
    AND?: paymentdetailsWhereInput | paymentdetailsWhereInput[]
    OR?: paymentdetailsWhereInput[]
    NOT?: paymentdetailsWhereInput | paymentdetailsWhereInput[]
    id?: IntFilter<"paymentdetails"> | number
    userId?: IntFilter<"paymentdetails"> | number
    paymentOptId?: IntFilter<"paymentdetails"> | number
    paymentCode?: StringFilter<"paymentdetails"> | string
    bankAccount?: StringNullableFilter<"paymentdetails"> | string | null
    accountNumber?: StringNullableFilter<"paymentdetails"> | string | null
    accountName?: StringNullableFilter<"paymentdetails"> | string | null
    createdAt?: DateTimeFilter<"paymentdetails"> | Date | string
    paymentoptions?: XOR<PaymentoptionsRelationFilter, paymentoptionsWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
    invoice?: InvoiceListRelationFilter
  }

  export type paymentdetailsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentOptId?: SortOrder
    paymentCode?: SortOrder
    bankAccount?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    paymentoptions?: paymentoptionsOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    invoice?: invoiceOrderByRelationAggregateInput
  }

  export type paymentdetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    paymentCode?: string
    AND?: paymentdetailsWhereInput | paymentdetailsWhereInput[]
    OR?: paymentdetailsWhereInput[]
    NOT?: paymentdetailsWhereInput | paymentdetailsWhereInput[]
    userId?: IntFilter<"paymentdetails"> | number
    paymentOptId?: IntFilter<"paymentdetails"> | number
    bankAccount?: StringNullableFilter<"paymentdetails"> | string | null
    accountNumber?: StringNullableFilter<"paymentdetails"> | string | null
    accountName?: StringNullableFilter<"paymentdetails"> | string | null
    createdAt?: DateTimeFilter<"paymentdetails"> | Date | string
    paymentoptions?: XOR<PaymentoptionsRelationFilter, paymentoptionsWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
    invoice?: InvoiceListRelationFilter
  }, "id" | "paymentCode">

  export type paymentdetailsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentOptId?: SortOrder
    paymentCode?: SortOrder
    bankAccount?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    accountName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: paymentdetailsCountOrderByAggregateInput
    _avg?: paymentdetailsAvgOrderByAggregateInput
    _max?: paymentdetailsMaxOrderByAggregateInput
    _min?: paymentdetailsMinOrderByAggregateInput
    _sum?: paymentdetailsSumOrderByAggregateInput
  }

  export type paymentdetailsScalarWhereWithAggregatesInput = {
    AND?: paymentdetailsScalarWhereWithAggregatesInput | paymentdetailsScalarWhereWithAggregatesInput[]
    OR?: paymentdetailsScalarWhereWithAggregatesInput[]
    NOT?: paymentdetailsScalarWhereWithAggregatesInput | paymentdetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paymentdetails"> | number
    userId?: IntWithAggregatesFilter<"paymentdetails"> | number
    paymentOptId?: IntWithAggregatesFilter<"paymentdetails"> | number
    paymentCode?: StringWithAggregatesFilter<"paymentdetails"> | string
    bankAccount?: StringNullableWithAggregatesFilter<"paymentdetails"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"paymentdetails"> | string | null
    accountName?: StringNullableWithAggregatesFilter<"paymentdetails"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"paymentdetails"> | Date | string
  }

  export type paymentoptionsWhereInput = {
    AND?: paymentoptionsWhereInput | paymentoptionsWhereInput[]
    OR?: paymentoptionsWhereInput[]
    NOT?: paymentoptionsWhereInput | paymentoptionsWhereInput[]
    id?: IntFilter<"paymentoptions"> | number
    paymentType?: Enumpaymentoptions_paymentTypeFilter<"paymentoptions"> | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeFilter<"paymentoptions"> | Date | string
    paymentdetails?: PaymentdetailsListRelationFilter
  }

  export type paymentoptionsOrderByWithRelationInput = {
    id?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    paymentdetails?: paymentdetailsOrderByRelationAggregateInput
  }

  export type paymentoptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentoptionsWhereInput | paymentoptionsWhereInput[]
    OR?: paymentoptionsWhereInput[]
    NOT?: paymentoptionsWhereInput | paymentoptionsWhereInput[]
    paymentType?: Enumpaymentoptions_paymentTypeFilter<"paymentoptions"> | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeFilter<"paymentoptions"> | Date | string
    paymentdetails?: PaymentdetailsListRelationFilter
  }, "id">

  export type paymentoptionsOrderByWithAggregationInput = {
    id?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    _count?: paymentoptionsCountOrderByAggregateInput
    _avg?: paymentoptionsAvgOrderByAggregateInput
    _max?: paymentoptionsMaxOrderByAggregateInput
    _min?: paymentoptionsMinOrderByAggregateInput
    _sum?: paymentoptionsSumOrderByAggregateInput
  }

  export type paymentoptionsScalarWhereWithAggregatesInput = {
    AND?: paymentoptionsScalarWhereWithAggregatesInput | paymentoptionsScalarWhereWithAggregatesInput[]
    OR?: paymentoptionsScalarWhereWithAggregatesInput[]
    NOT?: paymentoptionsScalarWhereWithAggregatesInput | paymentoptionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paymentoptions"> | number
    paymentType?: Enumpaymentoptions_paymentTypeWithAggregatesFilter<"paymentoptions"> | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeWithAggregatesFilter<"paymentoptions"> | Date | string
  }

  export type clientpaymentWhereInput = {
    AND?: clientpaymentWhereInput | clientpaymentWhereInput[]
    OR?: clientpaymentWhereInput[]
    NOT?: clientpaymentWhereInput | clientpaymentWhereInput[]
    id?: IntFilter<"clientpayment"> | number
    paymentMethod?: EnumpaymentmethodFilter<"clientpayment"> | $Enums.paymentmethod
    createdAt?: DateTimeFilter<"clientpayment"> | Date | string
    client?: ClientListRelationFilter
  }

  export type clientpaymentOrderByWithRelationInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    client?: clientOrderByRelationAggregateInput
  }

  export type clientpaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clientpaymentWhereInput | clientpaymentWhereInput[]
    OR?: clientpaymentWhereInput[]
    NOT?: clientpaymentWhereInput | clientpaymentWhereInput[]
    paymentMethod?: EnumpaymentmethodFilter<"clientpayment"> | $Enums.paymentmethod
    createdAt?: DateTimeFilter<"clientpayment"> | Date | string
    client?: ClientListRelationFilter
  }, "id">

  export type clientpaymentOrderByWithAggregationInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    _count?: clientpaymentCountOrderByAggregateInput
    _avg?: clientpaymentAvgOrderByAggregateInput
    _max?: clientpaymentMaxOrderByAggregateInput
    _min?: clientpaymentMinOrderByAggregateInput
    _sum?: clientpaymentSumOrderByAggregateInput
  }

  export type clientpaymentScalarWhereWithAggregatesInput = {
    AND?: clientpaymentScalarWhereWithAggregatesInput | clientpaymentScalarWhereWithAggregatesInput[]
    OR?: clientpaymentScalarWhereWithAggregatesInput[]
    NOT?: clientpaymentScalarWhereWithAggregatesInput | clientpaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clientpayment"> | number
    paymentMethod?: EnumpaymentmethodWithAggregatesFilter<"clientpayment"> | $Enums.paymentmethod
    createdAt?: DateTimeWithAggregatesFilter<"clientpayment"> | Date | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    userId?: IntFilter<"product"> | number
    productCode?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: IntFilter<"product"> | number
    isDeleted?: BoolFilter<"product"> | boolean
    createdAt?: DateTimeFilter<"product"> | Date | string
    categoryId?: IntFilter<"product"> | number
    invoicedetail?: InvoicedetailListRelationFilter
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    invoicedetail?: invoicedetailOrderByRelationAggregateInput
    category?: categoryOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productCode?: string
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    userId?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: IntFilter<"product"> | number
    isDeleted?: BoolFilter<"product"> | boolean
    createdAt?: DateTimeFilter<"product"> | Date | string
    categoryId?: IntFilter<"product"> | number
    invoicedetail?: InvoicedetailListRelationFilter
    category?: XOR<CategoryRelationFilter, categoryWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id" | "productCode">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    userId?: IntWithAggregatesFilter<"product"> | number
    productCode?: StringWithAggregatesFilter<"product"> | string
    name?: StringWithAggregatesFilter<"product"> | string
    description?: StringWithAggregatesFilter<"product"> | string
    price?: IntWithAggregatesFilter<"product"> | number
    isDeleted?: BoolWithAggregatesFilter<"product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"product"> | Date | string
    categoryId?: IntWithAggregatesFilter<"product"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    identificationId?: StringFilter<"user"> | string
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    isBlocked?: BoolFilter<"user"> | boolean
    lastLoginAttempt?: DateTimeFilter<"user"> | Date | string
    loginAttempt?: IntFilter<"user"> | number
    isVerified?: BoolFilter<"user"> | boolean
    resetToken?: StringNullableFilter<"user"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"user"> | Date | string | null
    sessionToken?: StringNullableFilter<"user"> | string | null
    client?: ClientListRelationFilter
    invoice?: InvoiceListRelationFilter
    paymentdetails?: PaymentdetailsListRelationFilter
    product?: ProductListRelationFilter
    userprofile?: UserprofileListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    identificationId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isBlocked?: SortOrder
    lastLoginAttempt?: SortOrder
    loginAttempt?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    client?: clientOrderByRelationAggregateInput
    invoice?: invoiceOrderByRelationAggregateInput
    paymentdetails?: paymentdetailsOrderByRelationAggregateInput
    product?: productOrderByRelationAggregateInput
    userprofile?: userprofileOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    identificationId?: string
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    createdAt?: DateTimeFilter<"user"> | Date | string
    isBlocked?: BoolFilter<"user"> | boolean
    lastLoginAttempt?: DateTimeFilter<"user"> | Date | string
    loginAttempt?: IntFilter<"user"> | number
    isVerified?: BoolFilter<"user"> | boolean
    resetToken?: StringNullableFilter<"user"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"user"> | Date | string | null
    sessionToken?: StringNullableFilter<"user"> | string | null
    client?: ClientListRelationFilter
    invoice?: InvoiceListRelationFilter
    paymentdetails?: PaymentdetailsListRelationFilter
    product?: ProductListRelationFilter
    userprofile?: UserprofileListRelationFilter
  }, "id" | "identificationId" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    identificationId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isBlocked?: SortOrder
    lastLoginAttempt?: SortOrder
    loginAttempt?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    identificationId?: StringWithAggregatesFilter<"user"> | string
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    isBlocked?: BoolWithAggregatesFilter<"user"> | boolean
    lastLoginAttempt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    loginAttempt?: IntWithAggregatesFilter<"user"> | number
    isVerified?: BoolWithAggregatesFilter<"user"> | boolean
    resetToken?: StringNullableWithAggregatesFilter<"user"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    sessionToken?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type userprofileWhereInput = {
    AND?: userprofileWhereInput | userprofileWhereInput[]
    OR?: userprofileWhereInput[]
    NOT?: userprofileWhereInput | userprofileWhereInput[]
    id?: IntFilter<"userprofile"> | number
    userId?: IntFilter<"userprofile"> | number
    firstName?: StringNullableFilter<"userprofile"> | string | null
    lastName?: StringNullableFilter<"userprofile"> | string | null
    companyName?: StringNullableFilter<"userprofile"> | string | null
    profilePicture?: StringNullableFilter<"userprofile"> | string | null
    address?: StringNullableFilter<"userprofile"> | string | null
    phone?: StringNullableFilter<"userprofile"> | string | null
    createdAt?: DateTimeFilter<"userprofile"> | Date | string
    isCreated?: BoolFilter<"userprofile"> | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type userprofileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isCreated?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type userprofileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userprofileWhereInput | userprofileWhereInput[]
    OR?: userprofileWhereInput[]
    NOT?: userprofileWhereInput | userprofileWhereInput[]
    userId?: IntFilter<"userprofile"> | number
    firstName?: StringNullableFilter<"userprofile"> | string | null
    lastName?: StringNullableFilter<"userprofile"> | string | null
    companyName?: StringNullableFilter<"userprofile"> | string | null
    profilePicture?: StringNullableFilter<"userprofile"> | string | null
    address?: StringNullableFilter<"userprofile"> | string | null
    phone?: StringNullableFilter<"userprofile"> | string | null
    createdAt?: DateTimeFilter<"userprofile"> | Date | string
    isCreated?: BoolFilter<"userprofile"> | boolean
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type userprofileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isCreated?: SortOrder
    _count?: userprofileCountOrderByAggregateInput
    _avg?: userprofileAvgOrderByAggregateInput
    _max?: userprofileMaxOrderByAggregateInput
    _min?: userprofileMinOrderByAggregateInput
    _sum?: userprofileSumOrderByAggregateInput
  }

  export type userprofileScalarWhereWithAggregatesInput = {
    AND?: userprofileScalarWhereWithAggregatesInput | userprofileScalarWhereWithAggregatesInput[]
    OR?: userprofileScalarWhereWithAggregatesInput[]
    NOT?: userprofileScalarWhereWithAggregatesInput | userprofileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userprofile"> | number
    userId?: IntWithAggregatesFilter<"userprofile"> | number
    firstName?: StringNullableWithAggregatesFilter<"userprofile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"userprofile"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"userprofile"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"userprofile"> | string | null
    address?: StringNullableWithAggregatesFilter<"userprofile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"userprofile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"userprofile"> | Date | string
    isCreated?: BoolWithAggregatesFilter<"userprofile"> | boolean
  }

  export type categoryCreateInput = {
    categoryName: string
    createdAt?: Date | string
    product?: productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    categoryName: string
    createdAt?: Date | string
    product?: productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    categoryName: string
    createdAt?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientCreateInput = {
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    user: userCreateNestedOneWithoutClientInput
    invoice?: invoiceCreateNestedManyWithoutClientInput
    clientpayment: clientpaymentCreateNestedOneWithoutClientInput
  }

  export type clientUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    userId: number
    payId: number
    invoice?: invoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutClientNestedInput
    invoice?: invoiceUpdateManyWithoutClientNestedInput
    clientpayment?: clientpaymentUpdateOneRequiredWithoutClientNestedInput
  }

  export type clientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    payId?: IntFieldUpdateOperationsInput | number
    invoice?: invoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientCreateManyInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    userId: number
    payId: number
  }

  export type clientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
  }

  export type clientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    payId?: IntFieldUpdateOperationsInput | number
  }

  export type invoiceCreateInput = {
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    isDeleted?: boolean
    client: clientCreateNestedOneWithoutInvoiceInput
    paymentdetails: paymentdetailsCreateNestedOneWithoutInvoiceInput
    user: userCreateNestedOneWithoutInvoiceInput
    invoicedetail?: invoicedetailCreateNestedManyWithoutInvoiceInput
  }

  export type invoiceUncheckedCreateInput = {
    id?: number
    clientId: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    paymentId: number
    userId: number
    isDeleted?: boolean
    invoicedetail?: invoicedetailUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoiceUpdateInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    client?: clientUpdateOneRequiredWithoutInvoiceNestedInput
    paymentdetails?: paymentdetailsUpdateOneRequiredWithoutInvoiceNestedInput
    user?: userUpdateOneRequiredWithoutInvoiceNestedInput
    invoicedetail?: invoicedetailUpdateManyWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    invoicedetail?: invoicedetailUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoiceCreateManyInput = {
    id?: number
    clientId: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    paymentId: number
    userId: number
    isDeleted?: boolean
  }

  export type invoiceUpdateManyMutationInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type invoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type invoicedetailCreateInput = {
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
    invoice: invoiceCreateNestedOneWithoutInvoicedetailInput
    product: productCreateNestedOneWithoutInvoicedetailInput
  }

  export type invoicedetailUncheckedCreateInput = {
    id?: number
    productId: number
    invoiceId: number
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
  }

  export type invoicedetailUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoiceUpdateOneRequiredWithoutInvoicedetailNestedInput
    product?: productUpdateOneRequiredWithoutInvoicedetailNestedInput
  }

  export type invoicedetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailCreateManyInput = {
    id?: number
    productId: number
    invoiceId: number
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
  }

  export type invoicedetailUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentdetailsCreateInput = {
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
    paymentoptions: paymentoptionsCreateNestedOneWithoutPaymentdetailsInput
    user: userCreateNestedOneWithoutPaymentdetailsInput
    invoice?: invoiceCreateNestedManyWithoutPaymentdetailsInput
  }

  export type paymentdetailsUncheckedCreateInput = {
    id?: number
    userId: number
    paymentOptId: number
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
    invoice?: invoiceUncheckedCreateNestedManyWithoutPaymentdetailsInput
  }

  export type paymentdetailsUpdateInput = {
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentoptions?: paymentoptionsUpdateOneRequiredWithoutPaymentdetailsNestedInput
    user?: userUpdateOneRequiredWithoutPaymentdetailsNestedInput
    invoice?: invoiceUpdateManyWithoutPaymentdetailsNestedInput
  }

  export type paymentdetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    paymentOptId?: IntFieldUpdateOperationsInput | number
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoiceUncheckedUpdateManyWithoutPaymentdetailsNestedInput
  }

  export type paymentdetailsCreateManyInput = {
    id?: number
    userId: number
    paymentOptId: number
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
  }

  export type paymentdetailsUpdateManyMutationInput = {
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentdetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    paymentOptId?: IntFieldUpdateOperationsInput | number
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentoptionsCreateInput = {
    paymentType: $Enums.paymentoptions_paymentType
    createdAt?: Date | string
    paymentdetails?: paymentdetailsCreateNestedManyWithoutPaymentoptionsInput
  }

  export type paymentoptionsUncheckedCreateInput = {
    id?: number
    paymentType: $Enums.paymentoptions_paymentType
    createdAt?: Date | string
    paymentdetails?: paymentdetailsUncheckedCreateNestedManyWithoutPaymentoptionsInput
  }

  export type paymentoptionsUpdateInput = {
    paymentType?: Enumpaymentoptions_paymentTypeFieldUpdateOperationsInput | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdetails?: paymentdetailsUpdateManyWithoutPaymentoptionsNestedInput
  }

  export type paymentoptionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentType?: Enumpaymentoptions_paymentTypeFieldUpdateOperationsInput | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentdetails?: paymentdetailsUncheckedUpdateManyWithoutPaymentoptionsNestedInput
  }

  export type paymentoptionsCreateManyInput = {
    id?: number
    paymentType: $Enums.paymentoptions_paymentType
    createdAt?: Date | string
  }

  export type paymentoptionsUpdateManyMutationInput = {
    paymentType?: Enumpaymentoptions_paymentTypeFieldUpdateOperationsInput | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentoptionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentType?: Enumpaymentoptions_paymentTypeFieldUpdateOperationsInput | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientpaymentCreateInput = {
    paymentMethod: $Enums.paymentmethod
    createdAt?: Date | string
    client?: clientCreateNestedManyWithoutClientpaymentInput
  }

  export type clientpaymentUncheckedCreateInput = {
    id?: number
    paymentMethod: $Enums.paymentmethod
    createdAt?: Date | string
    client?: clientUncheckedCreateNestedManyWithoutClientpaymentInput
  }

  export type clientpaymentUpdateInput = {
    paymentMethod?: EnumpaymentmethodFieldUpdateOperationsInput | $Enums.paymentmethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientUpdateManyWithoutClientpaymentNestedInput
  }

  export type clientpaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumpaymentmethodFieldUpdateOperationsInput | $Enums.paymentmethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientUncheckedUpdateManyWithoutClientpaymentNestedInput
  }

  export type clientpaymentCreateManyInput = {
    id?: number
    paymentMethod: $Enums.paymentmethod
    createdAt?: Date | string
  }

  export type clientpaymentUpdateManyMutationInput = {
    paymentMethod?: EnumpaymentmethodFieldUpdateOperationsInput | $Enums.paymentmethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientpaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumpaymentmethodFieldUpdateOperationsInput | $Enums.paymentmethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateInput = {
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    invoicedetail?: invoicedetailCreateNestedManyWithoutProductInput
    category: categoryCreateNestedOneWithoutProductInput
    user: userCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    userId: number
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    categoryId: number
    invoicedetail?: invoicedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetail?: invoicedetailUpdateManyWithoutProductNestedInput
    category?: categoryUpdateOneRequiredWithoutProductNestedInput
    user?: userUpdateOneRequiredWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    invoicedetail?: invoicedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    userId: number
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    categoryId: number
  }

  export type productUpdateManyMutationInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientCreateNestedManyWithoutUserInput
    invoice?: invoiceCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsCreateNestedManyWithoutUserInput
    product?: productCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientUncheckedCreateNestedManyWithoutUserInput
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsUncheckedCreateNestedManyWithoutUserInput
    product?: productUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUpdateManyWithoutUserNestedInput
    invoice?: invoiceUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUpdateManyWithoutUserNestedInput
    product?: productUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUncheckedUpdateManyWithoutUserNestedInput
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUncheckedUpdateManyWithoutUserNestedInput
    product?: productUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
  }

  export type userUpdateManyMutationInput = {
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userprofileCreateInput = {
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    profilePicture?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    isCreated?: boolean
    user: userCreateNestedOneWithoutUserprofileInput
  }

  export type userprofileUncheckedCreateInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    profilePicture?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    isCreated?: boolean
  }

  export type userprofileUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCreated?: BoolFieldUpdateOperationsInput | boolean
    user?: userUpdateOneRequiredWithoutUserprofileNestedInput
  }

  export type userprofileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCreated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userprofileCreateManyInput = {
    id?: number
    userId: number
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    profilePicture?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    isCreated?: boolean
  }

  export type userprofileUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCreated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userprofileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCreated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    createdAt?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: invoiceWhereInput
    some?: invoiceWhereInput
    none?: invoiceWhereInput
  }

  export type ClientpaymentRelationFilter = {
    is?: clientpaymentWhereInput
    isNot?: clientpaymentWhereInput
  }

  export type invoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clientCode?: SortOrder
    userId?: SortOrder
    payId?: SortOrder
  }

  export type clientAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    payId?: SortOrder
  }

  export type clientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clientCode?: SortOrder
    userId?: SortOrder
    payId?: SortOrder
  }

  export type clientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clientCode?: SortOrder
    userId?: SortOrder
    payId?: SortOrder
  }

  export type clientSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    payId?: SortOrder
  }

  export type Enuminvoice_invoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.invoice_invoiceStatus | Enuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.invoice_invoiceStatus[] | ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.invoice_invoiceStatus[] | ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnuminvoice_invoiceStatusFilter<$PrismaModel> | $Enums.invoice_invoiceStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ClientRelationFilter = {
    is?: clientWhereInput
    isNot?: clientWhereInput
  }

  export type PaymentdetailsRelationFilter = {
    is?: paymentdetailsWhereInput
    isNot?: paymentdetailsWhereInput
  }

  export type InvoicedetailListRelationFilter = {
    every?: invoicedetailWhereInput
    some?: invoicedetailWhereInput
    none?: invoicedetailWhereInput
  }

  export type invoicedetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type invoiceCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceCode?: SortOrder
    invoiceDate?: SortOrder
    nextInvoiceDate?: SortOrder
    invoiceStatus?: SortOrder
    totalAmount?: SortOrder
    recurringDays?: SortOrder
    createdAt?: SortOrder
    subTotal?: SortOrder
    paymentId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type invoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    totalAmount?: SortOrder
    recurringDays?: SortOrder
    subTotal?: SortOrder
    paymentId?: SortOrder
    userId?: SortOrder
  }

  export type invoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceCode?: SortOrder
    invoiceDate?: SortOrder
    nextInvoiceDate?: SortOrder
    invoiceStatus?: SortOrder
    totalAmount?: SortOrder
    recurringDays?: SortOrder
    createdAt?: SortOrder
    subTotal?: SortOrder
    paymentId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type invoiceMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    invoiceCode?: SortOrder
    invoiceDate?: SortOrder
    nextInvoiceDate?: SortOrder
    invoiceStatus?: SortOrder
    totalAmount?: SortOrder
    recurringDays?: SortOrder
    createdAt?: SortOrder
    subTotal?: SortOrder
    paymentId?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type invoiceSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    totalAmount?: SortOrder
    recurringDays?: SortOrder
    subTotal?: SortOrder
    paymentId?: SortOrder
    userId?: SortOrder
  }

  export type Enuminvoice_invoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.invoice_invoiceStatus | Enuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.invoice_invoiceStatus[] | ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.invoice_invoiceStatus[] | ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnuminvoice_invoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.invoice_invoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminvoice_invoiceStatusFilter<$PrismaModel>
    _max?: NestedEnuminvoice_invoiceStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InvoiceRelationFilter = {
    is?: invoiceWhereInput
    isNot?: invoiceWhereInput
  }

  export type ProductRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type invoicedetailCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    qty?: SortOrder
    priceUnit?: SortOrder
    priceTotal?: SortOrder
    createdAt?: SortOrder
  }

  export type invoicedetailAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    qty?: SortOrder
    priceUnit?: SortOrder
    priceTotal?: SortOrder
  }

  export type invoicedetailMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    qty?: SortOrder
    priceUnit?: SortOrder
    priceTotal?: SortOrder
    createdAt?: SortOrder
  }

  export type invoicedetailMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    qty?: SortOrder
    priceUnit?: SortOrder
    priceTotal?: SortOrder
    createdAt?: SortOrder
  }

  export type invoicedetailSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    invoiceId?: SortOrder
    qty?: SortOrder
    priceUnit?: SortOrder
    priceTotal?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PaymentoptionsRelationFilter = {
    is?: paymentoptionsWhereInput
    isNot?: paymentoptionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type paymentdetailsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentOptId?: SortOrder
    paymentCode?: SortOrder
    bankAccount?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentdetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentOptId?: SortOrder
  }

  export type paymentdetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentOptId?: SortOrder
    paymentCode?: SortOrder
    bankAccount?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentdetailsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentOptId?: SortOrder
    paymentCode?: SortOrder
    bankAccount?: SortOrder
    accountNumber?: SortOrder
    accountName?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentdetailsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentOptId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumpaymentoptions_paymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentoptions_paymentType | Enumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.paymentoptions_paymentType[] | ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentoptions_paymentType[] | ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentoptions_paymentTypeFilter<$PrismaModel> | $Enums.paymentoptions_paymentType
  }

  export type PaymentdetailsListRelationFilter = {
    every?: paymentdetailsWhereInput
    some?: paymentdetailsWhereInput
    none?: paymentdetailsWhereInput
  }

  export type paymentdetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentoptionsCountOrderByAggregateInput = {
    id?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentoptionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type paymentoptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentoptionsMinOrderByAggregateInput = {
    id?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
  }

  export type paymentoptionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumpaymentoptions_paymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentoptions_paymentType | Enumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.paymentoptions_paymentType[] | ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentoptions_paymentType[] | ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentoptions_paymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.paymentoptions_paymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaymentoptions_paymentTypeFilter<$PrismaModel>
    _max?: NestedEnumpaymentoptions_paymentTypeFilter<$PrismaModel>
  }

  export type EnumpaymentmethodFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentmethod | EnumpaymentmethodFieldRefInput<$PrismaModel>
    in?: $Enums.paymentmethod[] | ListEnumpaymentmethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentmethod[] | ListEnumpaymentmethodFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentmethodFilter<$PrismaModel> | $Enums.paymentmethod
  }

  export type ClientListRelationFilter = {
    every?: clientWhereInput
    some?: clientWhereInput
    none?: clientWhereInput
  }

  export type clientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientpaymentCountOrderByAggregateInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type clientpaymentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientpaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type clientpaymentMinOrderByAggregateInput = {
    id?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type clientpaymentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumpaymentmethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentmethod | EnumpaymentmethodFieldRefInput<$PrismaModel>
    in?: $Enums.paymentmethod[] | ListEnumpaymentmethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentmethod[] | ListEnumpaymentmethodFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentmethodWithAggregatesFilter<$PrismaModel> | $Enums.paymentmethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaymentmethodFilter<$PrismaModel>
    _max?: NestedEnumpaymentmethodFilter<$PrismaModel>
  }

  export type CategoryRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productCode?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    categoryId?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserprofileListRelationFilter = {
    every?: userprofileWhereInput
    some?: userprofileWhereInput
    none?: userprofileWhereInput
  }

  export type userprofileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    identificationId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isBlocked?: SortOrder
    lastLoginAttempt?: SortOrder
    loginAttempt?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    sessionToken?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    loginAttempt?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    identificationId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isBlocked?: SortOrder
    lastLoginAttempt?: SortOrder
    loginAttempt?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    sessionToken?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    identificationId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    isBlocked?: SortOrder
    lastLoginAttempt?: SortOrder
    loginAttempt?: SortOrder
    isVerified?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    sessionToken?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    loginAttempt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type userprofileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    isCreated?: SortOrder
  }

  export type userprofileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type userprofileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    isCreated?: SortOrder
  }

  export type userprofileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    isCreated?: SortOrder
  }

  export type userprofileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type productCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type productUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutClientInput = {
    create?: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>
    connectOrCreate?: userCreateOrConnectWithoutClientInput
    connect?: userWhereUniqueInput
  }

  export type invoiceCreateNestedManyWithoutClientInput = {
    create?: XOR<invoiceCreateWithoutClientInput, invoiceUncheckedCreateWithoutClientInput> | invoiceCreateWithoutClientInput[] | invoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutClientInput | invoiceCreateOrConnectWithoutClientInput[]
    createMany?: invoiceCreateManyClientInputEnvelope
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
  }

  export type clientpaymentCreateNestedOneWithoutClientInput = {
    create?: XOR<clientpaymentCreateWithoutClientInput, clientpaymentUncheckedCreateWithoutClientInput>
    connectOrCreate?: clientpaymentCreateOrConnectWithoutClientInput
    connect?: clientpaymentWhereUniqueInput
  }

  export type invoiceUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<invoiceCreateWithoutClientInput, invoiceUncheckedCreateWithoutClientInput> | invoiceCreateWithoutClientInput[] | invoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutClientInput | invoiceCreateOrConnectWithoutClientInput[]
    createMany?: invoiceCreateManyClientInputEnvelope
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>
    connectOrCreate?: userCreateOrConnectWithoutClientInput
    upsert?: userUpsertWithoutClientInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutClientInput, userUpdateWithoutClientInput>, userUncheckedUpdateWithoutClientInput>
  }

  export type invoiceUpdateManyWithoutClientNestedInput = {
    create?: XOR<invoiceCreateWithoutClientInput, invoiceUncheckedCreateWithoutClientInput> | invoiceCreateWithoutClientInput[] | invoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutClientInput | invoiceCreateOrConnectWithoutClientInput[]
    upsert?: invoiceUpsertWithWhereUniqueWithoutClientInput | invoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: invoiceCreateManyClientInputEnvelope
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    update?: invoiceUpdateWithWhereUniqueWithoutClientInput | invoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: invoiceUpdateManyWithWhereWithoutClientInput | invoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
  }

  export type clientpaymentUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<clientpaymentCreateWithoutClientInput, clientpaymentUncheckedCreateWithoutClientInput>
    connectOrCreate?: clientpaymentCreateOrConnectWithoutClientInput
    upsert?: clientpaymentUpsertWithoutClientInput
    connect?: clientpaymentWhereUniqueInput
    update?: XOR<XOR<clientpaymentUpdateToOneWithWhereWithoutClientInput, clientpaymentUpdateWithoutClientInput>, clientpaymentUncheckedUpdateWithoutClientInput>
  }

  export type invoiceUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<invoiceCreateWithoutClientInput, invoiceUncheckedCreateWithoutClientInput> | invoiceCreateWithoutClientInput[] | invoiceUncheckedCreateWithoutClientInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutClientInput | invoiceCreateOrConnectWithoutClientInput[]
    upsert?: invoiceUpsertWithWhereUniqueWithoutClientInput | invoiceUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: invoiceCreateManyClientInputEnvelope
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    update?: invoiceUpdateWithWhereUniqueWithoutClientInput | invoiceUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: invoiceUpdateManyWithWhereWithoutClientInput | invoiceUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
  }

  export type clientCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<clientCreateWithoutInvoiceInput, clientUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: clientCreateOrConnectWithoutInvoiceInput
    connect?: clientWhereUniqueInput
  }

  export type paymentdetailsCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<paymentdetailsCreateWithoutInvoiceInput, paymentdetailsUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutInvoiceInput
    connect?: paymentdetailsWhereUniqueInput
  }

  export type userCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: userCreateOrConnectWithoutInvoiceInput
    connect?: userWhereUniqueInput
  }

  export type invoicedetailCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<invoicedetailCreateWithoutInvoiceInput, invoicedetailUncheckedCreateWithoutInvoiceInput> | invoicedetailCreateWithoutInvoiceInput[] | invoicedetailUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoicedetailCreateOrConnectWithoutInvoiceInput | invoicedetailCreateOrConnectWithoutInvoiceInput[]
    createMany?: invoicedetailCreateManyInvoiceInputEnvelope
    connect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
  }

  export type invoicedetailUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<invoicedetailCreateWithoutInvoiceInput, invoicedetailUncheckedCreateWithoutInvoiceInput> | invoicedetailCreateWithoutInvoiceInput[] | invoicedetailUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoicedetailCreateOrConnectWithoutInvoiceInput | invoicedetailCreateOrConnectWithoutInvoiceInput[]
    createMany?: invoicedetailCreateManyInvoiceInputEnvelope
    connect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
  }

  export type Enuminvoice_invoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.invoice_invoiceStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type clientUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<clientCreateWithoutInvoiceInput, clientUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: clientCreateOrConnectWithoutInvoiceInput
    upsert?: clientUpsertWithoutInvoiceInput
    connect?: clientWhereUniqueInput
    update?: XOR<XOR<clientUpdateToOneWithWhereWithoutInvoiceInput, clientUpdateWithoutInvoiceInput>, clientUncheckedUpdateWithoutInvoiceInput>
  }

  export type paymentdetailsUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<paymentdetailsCreateWithoutInvoiceInput, paymentdetailsUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutInvoiceInput
    upsert?: paymentdetailsUpsertWithoutInvoiceInput
    connect?: paymentdetailsWhereUniqueInput
    update?: XOR<XOR<paymentdetailsUpdateToOneWithWhereWithoutInvoiceInput, paymentdetailsUpdateWithoutInvoiceInput>, paymentdetailsUncheckedUpdateWithoutInvoiceInput>
  }

  export type userUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: userCreateOrConnectWithoutInvoiceInput
    upsert?: userUpsertWithoutInvoiceInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutInvoiceInput, userUpdateWithoutInvoiceInput>, userUncheckedUpdateWithoutInvoiceInput>
  }

  export type invoicedetailUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<invoicedetailCreateWithoutInvoiceInput, invoicedetailUncheckedCreateWithoutInvoiceInput> | invoicedetailCreateWithoutInvoiceInput[] | invoicedetailUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoicedetailCreateOrConnectWithoutInvoiceInput | invoicedetailCreateOrConnectWithoutInvoiceInput[]
    upsert?: invoicedetailUpsertWithWhereUniqueWithoutInvoiceInput | invoicedetailUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: invoicedetailCreateManyInvoiceInputEnvelope
    set?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    disconnect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    delete?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    connect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    update?: invoicedetailUpdateWithWhereUniqueWithoutInvoiceInput | invoicedetailUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: invoicedetailUpdateManyWithWhereWithoutInvoiceInput | invoicedetailUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: invoicedetailScalarWhereInput | invoicedetailScalarWhereInput[]
  }

  export type invoicedetailUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<invoicedetailCreateWithoutInvoiceInput, invoicedetailUncheckedCreateWithoutInvoiceInput> | invoicedetailCreateWithoutInvoiceInput[] | invoicedetailUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: invoicedetailCreateOrConnectWithoutInvoiceInput | invoicedetailCreateOrConnectWithoutInvoiceInput[]
    upsert?: invoicedetailUpsertWithWhereUniqueWithoutInvoiceInput | invoicedetailUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: invoicedetailCreateManyInvoiceInputEnvelope
    set?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    disconnect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    delete?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    connect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    update?: invoicedetailUpdateWithWhereUniqueWithoutInvoiceInput | invoicedetailUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: invoicedetailUpdateManyWithWhereWithoutInvoiceInput | invoicedetailUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: invoicedetailScalarWhereInput | invoicedetailScalarWhereInput[]
  }

  export type invoiceCreateNestedOneWithoutInvoicedetailInput = {
    create?: XOR<invoiceCreateWithoutInvoicedetailInput, invoiceUncheckedCreateWithoutInvoicedetailInput>
    connectOrCreate?: invoiceCreateOrConnectWithoutInvoicedetailInput
    connect?: invoiceWhereUniqueInput
  }

  export type productCreateNestedOneWithoutInvoicedetailInput = {
    create?: XOR<productCreateWithoutInvoicedetailInput, productUncheckedCreateWithoutInvoicedetailInput>
    connectOrCreate?: productCreateOrConnectWithoutInvoicedetailInput
    connect?: productWhereUniqueInput
  }

  export type invoiceUpdateOneRequiredWithoutInvoicedetailNestedInput = {
    create?: XOR<invoiceCreateWithoutInvoicedetailInput, invoiceUncheckedCreateWithoutInvoicedetailInput>
    connectOrCreate?: invoiceCreateOrConnectWithoutInvoicedetailInput
    upsert?: invoiceUpsertWithoutInvoicedetailInput
    connect?: invoiceWhereUniqueInput
    update?: XOR<XOR<invoiceUpdateToOneWithWhereWithoutInvoicedetailInput, invoiceUpdateWithoutInvoicedetailInput>, invoiceUncheckedUpdateWithoutInvoicedetailInput>
  }

  export type productUpdateOneRequiredWithoutInvoicedetailNestedInput = {
    create?: XOR<productCreateWithoutInvoicedetailInput, productUncheckedCreateWithoutInvoicedetailInput>
    connectOrCreate?: productCreateOrConnectWithoutInvoicedetailInput
    upsert?: productUpsertWithoutInvoicedetailInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutInvoicedetailInput, productUpdateWithoutInvoicedetailInput>, productUncheckedUpdateWithoutInvoicedetailInput>
  }

  export type paymentoptionsCreateNestedOneWithoutPaymentdetailsInput = {
    create?: XOR<paymentoptionsCreateWithoutPaymentdetailsInput, paymentoptionsUncheckedCreateWithoutPaymentdetailsInput>
    connectOrCreate?: paymentoptionsCreateOrConnectWithoutPaymentdetailsInput
    connect?: paymentoptionsWhereUniqueInput
  }

  export type userCreateNestedOneWithoutPaymentdetailsInput = {
    create?: XOR<userCreateWithoutPaymentdetailsInput, userUncheckedCreateWithoutPaymentdetailsInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentdetailsInput
    connect?: userWhereUniqueInput
  }

  export type invoiceCreateNestedManyWithoutPaymentdetailsInput = {
    create?: XOR<invoiceCreateWithoutPaymentdetailsInput, invoiceUncheckedCreateWithoutPaymentdetailsInput> | invoiceCreateWithoutPaymentdetailsInput[] | invoiceUncheckedCreateWithoutPaymentdetailsInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutPaymentdetailsInput | invoiceCreateOrConnectWithoutPaymentdetailsInput[]
    createMany?: invoiceCreateManyPaymentdetailsInputEnvelope
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
  }

  export type invoiceUncheckedCreateNestedManyWithoutPaymentdetailsInput = {
    create?: XOR<invoiceCreateWithoutPaymentdetailsInput, invoiceUncheckedCreateWithoutPaymentdetailsInput> | invoiceCreateWithoutPaymentdetailsInput[] | invoiceUncheckedCreateWithoutPaymentdetailsInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutPaymentdetailsInput | invoiceCreateOrConnectWithoutPaymentdetailsInput[]
    createMany?: invoiceCreateManyPaymentdetailsInputEnvelope
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type paymentoptionsUpdateOneRequiredWithoutPaymentdetailsNestedInput = {
    create?: XOR<paymentoptionsCreateWithoutPaymentdetailsInput, paymentoptionsUncheckedCreateWithoutPaymentdetailsInput>
    connectOrCreate?: paymentoptionsCreateOrConnectWithoutPaymentdetailsInput
    upsert?: paymentoptionsUpsertWithoutPaymentdetailsInput
    connect?: paymentoptionsWhereUniqueInput
    update?: XOR<XOR<paymentoptionsUpdateToOneWithWhereWithoutPaymentdetailsInput, paymentoptionsUpdateWithoutPaymentdetailsInput>, paymentoptionsUncheckedUpdateWithoutPaymentdetailsInput>
  }

  export type userUpdateOneRequiredWithoutPaymentdetailsNestedInput = {
    create?: XOR<userCreateWithoutPaymentdetailsInput, userUncheckedCreateWithoutPaymentdetailsInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentdetailsInput
    upsert?: userUpsertWithoutPaymentdetailsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPaymentdetailsInput, userUpdateWithoutPaymentdetailsInput>, userUncheckedUpdateWithoutPaymentdetailsInput>
  }

  export type invoiceUpdateManyWithoutPaymentdetailsNestedInput = {
    create?: XOR<invoiceCreateWithoutPaymentdetailsInput, invoiceUncheckedCreateWithoutPaymentdetailsInput> | invoiceCreateWithoutPaymentdetailsInput[] | invoiceUncheckedCreateWithoutPaymentdetailsInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutPaymentdetailsInput | invoiceCreateOrConnectWithoutPaymentdetailsInput[]
    upsert?: invoiceUpsertWithWhereUniqueWithoutPaymentdetailsInput | invoiceUpsertWithWhereUniqueWithoutPaymentdetailsInput[]
    createMany?: invoiceCreateManyPaymentdetailsInputEnvelope
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    update?: invoiceUpdateWithWhereUniqueWithoutPaymentdetailsInput | invoiceUpdateWithWhereUniqueWithoutPaymentdetailsInput[]
    updateMany?: invoiceUpdateManyWithWhereWithoutPaymentdetailsInput | invoiceUpdateManyWithWhereWithoutPaymentdetailsInput[]
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
  }

  export type invoiceUncheckedUpdateManyWithoutPaymentdetailsNestedInput = {
    create?: XOR<invoiceCreateWithoutPaymentdetailsInput, invoiceUncheckedCreateWithoutPaymentdetailsInput> | invoiceCreateWithoutPaymentdetailsInput[] | invoiceUncheckedCreateWithoutPaymentdetailsInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutPaymentdetailsInput | invoiceCreateOrConnectWithoutPaymentdetailsInput[]
    upsert?: invoiceUpsertWithWhereUniqueWithoutPaymentdetailsInput | invoiceUpsertWithWhereUniqueWithoutPaymentdetailsInput[]
    createMany?: invoiceCreateManyPaymentdetailsInputEnvelope
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    update?: invoiceUpdateWithWhereUniqueWithoutPaymentdetailsInput | invoiceUpdateWithWhereUniqueWithoutPaymentdetailsInput[]
    updateMany?: invoiceUpdateManyWithWhereWithoutPaymentdetailsInput | invoiceUpdateManyWithWhereWithoutPaymentdetailsInput[]
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
  }

  export type paymentdetailsCreateNestedManyWithoutPaymentoptionsInput = {
    create?: XOR<paymentdetailsCreateWithoutPaymentoptionsInput, paymentdetailsUncheckedCreateWithoutPaymentoptionsInput> | paymentdetailsCreateWithoutPaymentoptionsInput[] | paymentdetailsUncheckedCreateWithoutPaymentoptionsInput[]
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutPaymentoptionsInput | paymentdetailsCreateOrConnectWithoutPaymentoptionsInput[]
    createMany?: paymentdetailsCreateManyPaymentoptionsInputEnvelope
    connect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
  }

  export type paymentdetailsUncheckedCreateNestedManyWithoutPaymentoptionsInput = {
    create?: XOR<paymentdetailsCreateWithoutPaymentoptionsInput, paymentdetailsUncheckedCreateWithoutPaymentoptionsInput> | paymentdetailsCreateWithoutPaymentoptionsInput[] | paymentdetailsUncheckedCreateWithoutPaymentoptionsInput[]
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutPaymentoptionsInput | paymentdetailsCreateOrConnectWithoutPaymentoptionsInput[]
    createMany?: paymentdetailsCreateManyPaymentoptionsInputEnvelope
    connect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
  }

  export type Enumpaymentoptions_paymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.paymentoptions_paymentType
  }

  export type paymentdetailsUpdateManyWithoutPaymentoptionsNestedInput = {
    create?: XOR<paymentdetailsCreateWithoutPaymentoptionsInput, paymentdetailsUncheckedCreateWithoutPaymentoptionsInput> | paymentdetailsCreateWithoutPaymentoptionsInput[] | paymentdetailsUncheckedCreateWithoutPaymentoptionsInput[]
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutPaymentoptionsInput | paymentdetailsCreateOrConnectWithoutPaymentoptionsInput[]
    upsert?: paymentdetailsUpsertWithWhereUniqueWithoutPaymentoptionsInput | paymentdetailsUpsertWithWhereUniqueWithoutPaymentoptionsInput[]
    createMany?: paymentdetailsCreateManyPaymentoptionsInputEnvelope
    set?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    disconnect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    delete?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    connect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    update?: paymentdetailsUpdateWithWhereUniqueWithoutPaymentoptionsInput | paymentdetailsUpdateWithWhereUniqueWithoutPaymentoptionsInput[]
    updateMany?: paymentdetailsUpdateManyWithWhereWithoutPaymentoptionsInput | paymentdetailsUpdateManyWithWhereWithoutPaymentoptionsInput[]
    deleteMany?: paymentdetailsScalarWhereInput | paymentdetailsScalarWhereInput[]
  }

  export type paymentdetailsUncheckedUpdateManyWithoutPaymentoptionsNestedInput = {
    create?: XOR<paymentdetailsCreateWithoutPaymentoptionsInput, paymentdetailsUncheckedCreateWithoutPaymentoptionsInput> | paymentdetailsCreateWithoutPaymentoptionsInput[] | paymentdetailsUncheckedCreateWithoutPaymentoptionsInput[]
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutPaymentoptionsInput | paymentdetailsCreateOrConnectWithoutPaymentoptionsInput[]
    upsert?: paymentdetailsUpsertWithWhereUniqueWithoutPaymentoptionsInput | paymentdetailsUpsertWithWhereUniqueWithoutPaymentoptionsInput[]
    createMany?: paymentdetailsCreateManyPaymentoptionsInputEnvelope
    set?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    disconnect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    delete?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    connect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    update?: paymentdetailsUpdateWithWhereUniqueWithoutPaymentoptionsInput | paymentdetailsUpdateWithWhereUniqueWithoutPaymentoptionsInput[]
    updateMany?: paymentdetailsUpdateManyWithWhereWithoutPaymentoptionsInput | paymentdetailsUpdateManyWithWhereWithoutPaymentoptionsInput[]
    deleteMany?: paymentdetailsScalarWhereInput | paymentdetailsScalarWhereInput[]
  }

  export type clientCreateNestedManyWithoutClientpaymentInput = {
    create?: XOR<clientCreateWithoutClientpaymentInput, clientUncheckedCreateWithoutClientpaymentInput> | clientCreateWithoutClientpaymentInput[] | clientUncheckedCreateWithoutClientpaymentInput[]
    connectOrCreate?: clientCreateOrConnectWithoutClientpaymentInput | clientCreateOrConnectWithoutClientpaymentInput[]
    createMany?: clientCreateManyClientpaymentInputEnvelope
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
  }

  export type clientUncheckedCreateNestedManyWithoutClientpaymentInput = {
    create?: XOR<clientCreateWithoutClientpaymentInput, clientUncheckedCreateWithoutClientpaymentInput> | clientCreateWithoutClientpaymentInput[] | clientUncheckedCreateWithoutClientpaymentInput[]
    connectOrCreate?: clientCreateOrConnectWithoutClientpaymentInput | clientCreateOrConnectWithoutClientpaymentInput[]
    createMany?: clientCreateManyClientpaymentInputEnvelope
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
  }

  export type EnumpaymentmethodFieldUpdateOperationsInput = {
    set?: $Enums.paymentmethod
  }

  export type clientUpdateManyWithoutClientpaymentNestedInput = {
    create?: XOR<clientCreateWithoutClientpaymentInput, clientUncheckedCreateWithoutClientpaymentInput> | clientCreateWithoutClientpaymentInput[] | clientUncheckedCreateWithoutClientpaymentInput[]
    connectOrCreate?: clientCreateOrConnectWithoutClientpaymentInput | clientCreateOrConnectWithoutClientpaymentInput[]
    upsert?: clientUpsertWithWhereUniqueWithoutClientpaymentInput | clientUpsertWithWhereUniqueWithoutClientpaymentInput[]
    createMany?: clientCreateManyClientpaymentInputEnvelope
    set?: clientWhereUniqueInput | clientWhereUniqueInput[]
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[]
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    update?: clientUpdateWithWhereUniqueWithoutClientpaymentInput | clientUpdateWithWhereUniqueWithoutClientpaymentInput[]
    updateMany?: clientUpdateManyWithWhereWithoutClientpaymentInput | clientUpdateManyWithWhereWithoutClientpaymentInput[]
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[]
  }

  export type clientUncheckedUpdateManyWithoutClientpaymentNestedInput = {
    create?: XOR<clientCreateWithoutClientpaymentInput, clientUncheckedCreateWithoutClientpaymentInput> | clientCreateWithoutClientpaymentInput[] | clientUncheckedCreateWithoutClientpaymentInput[]
    connectOrCreate?: clientCreateOrConnectWithoutClientpaymentInput | clientCreateOrConnectWithoutClientpaymentInput[]
    upsert?: clientUpsertWithWhereUniqueWithoutClientpaymentInput | clientUpsertWithWhereUniqueWithoutClientpaymentInput[]
    createMany?: clientCreateManyClientpaymentInputEnvelope
    set?: clientWhereUniqueInput | clientWhereUniqueInput[]
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[]
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    update?: clientUpdateWithWhereUniqueWithoutClientpaymentInput | clientUpdateWithWhereUniqueWithoutClientpaymentInput[]
    updateMany?: clientUpdateManyWithWhereWithoutClientpaymentInput | clientUpdateManyWithWhereWithoutClientpaymentInput[]
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[]
  }

  export type invoicedetailCreateNestedManyWithoutProductInput = {
    create?: XOR<invoicedetailCreateWithoutProductInput, invoicedetailUncheckedCreateWithoutProductInput> | invoicedetailCreateWithoutProductInput[] | invoicedetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoicedetailCreateOrConnectWithoutProductInput | invoicedetailCreateOrConnectWithoutProductInput[]
    createMany?: invoicedetailCreateManyProductInputEnvelope
    connect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
  }

  export type categoryCreateNestedOneWithoutProductInput = {
    create?: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductInput
    connect?: categoryWhereUniqueInput
  }

  export type userCreateNestedOneWithoutProductInput = {
    create?: XOR<userCreateWithoutProductInput, userUncheckedCreateWithoutProductInput>
    connectOrCreate?: userCreateOrConnectWithoutProductInput
    connect?: userWhereUniqueInput
  }

  export type invoicedetailUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<invoicedetailCreateWithoutProductInput, invoicedetailUncheckedCreateWithoutProductInput> | invoicedetailCreateWithoutProductInput[] | invoicedetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoicedetailCreateOrConnectWithoutProductInput | invoicedetailCreateOrConnectWithoutProductInput[]
    createMany?: invoicedetailCreateManyProductInputEnvelope
    connect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
  }

  export type invoicedetailUpdateManyWithoutProductNestedInput = {
    create?: XOR<invoicedetailCreateWithoutProductInput, invoicedetailUncheckedCreateWithoutProductInput> | invoicedetailCreateWithoutProductInput[] | invoicedetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoicedetailCreateOrConnectWithoutProductInput | invoicedetailCreateOrConnectWithoutProductInput[]
    upsert?: invoicedetailUpsertWithWhereUniqueWithoutProductInput | invoicedetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: invoicedetailCreateManyProductInputEnvelope
    set?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    disconnect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    delete?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    connect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    update?: invoicedetailUpdateWithWhereUniqueWithoutProductInput | invoicedetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: invoicedetailUpdateManyWithWhereWithoutProductInput | invoicedetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: invoicedetailScalarWhereInput | invoicedetailScalarWhereInput[]
  }

  export type categoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductInput
    upsert?: categoryUpsertWithoutProductInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutProductInput, categoryUpdateWithoutProductInput>, categoryUncheckedUpdateWithoutProductInput>
  }

  export type userUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<userCreateWithoutProductInput, userUncheckedCreateWithoutProductInput>
    connectOrCreate?: userCreateOrConnectWithoutProductInput
    upsert?: userUpsertWithoutProductInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProductInput, userUpdateWithoutProductInput>, userUncheckedUpdateWithoutProductInput>
  }

  export type invoicedetailUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<invoicedetailCreateWithoutProductInput, invoicedetailUncheckedCreateWithoutProductInput> | invoicedetailCreateWithoutProductInput[] | invoicedetailUncheckedCreateWithoutProductInput[]
    connectOrCreate?: invoicedetailCreateOrConnectWithoutProductInput | invoicedetailCreateOrConnectWithoutProductInput[]
    upsert?: invoicedetailUpsertWithWhereUniqueWithoutProductInput | invoicedetailUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: invoicedetailCreateManyProductInputEnvelope
    set?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    disconnect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    delete?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    connect?: invoicedetailWhereUniqueInput | invoicedetailWhereUniqueInput[]
    update?: invoicedetailUpdateWithWhereUniqueWithoutProductInput | invoicedetailUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: invoicedetailUpdateManyWithWhereWithoutProductInput | invoicedetailUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: invoicedetailScalarWhereInput | invoicedetailScalarWhereInput[]
  }

  export type clientCreateNestedManyWithoutUserInput = {
    create?: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput> | clientCreateWithoutUserInput[] | clientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[]
    createMany?: clientCreateManyUserInputEnvelope
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
  }

  export type invoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput> | invoiceCreateWithoutUserInput[] | invoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[]
    createMany?: invoiceCreateManyUserInputEnvelope
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
  }

  export type paymentdetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentdetailsCreateWithoutUserInput, paymentdetailsUncheckedCreateWithoutUserInput> | paymentdetailsCreateWithoutUserInput[] | paymentdetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutUserInput | paymentdetailsCreateOrConnectWithoutUserInput[]
    createMany?: paymentdetailsCreateManyUserInputEnvelope
    connect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
  }

  export type productCreateNestedManyWithoutUserInput = {
    create?: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput> | productCreateWithoutUserInput[] | productUncheckedCreateWithoutUserInput[]
    connectOrCreate?: productCreateOrConnectWithoutUserInput | productCreateOrConnectWithoutUserInput[]
    createMany?: productCreateManyUserInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type userprofileCreateNestedManyWithoutUserInput = {
    create?: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput> | userprofileCreateWithoutUserInput[] | userprofileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput | userprofileCreateOrConnectWithoutUserInput[]
    createMany?: userprofileCreateManyUserInputEnvelope
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
  }

  export type clientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput> | clientCreateWithoutUserInput[] | clientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[]
    createMany?: clientCreateManyUserInputEnvelope
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
  }

  export type invoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput> | invoiceCreateWithoutUserInput[] | invoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[]
    createMany?: invoiceCreateManyUserInputEnvelope
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
  }

  export type paymentdetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentdetailsCreateWithoutUserInput, paymentdetailsUncheckedCreateWithoutUserInput> | paymentdetailsCreateWithoutUserInput[] | paymentdetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutUserInput | paymentdetailsCreateOrConnectWithoutUserInput[]
    createMany?: paymentdetailsCreateManyUserInputEnvelope
    connect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput> | productCreateWithoutUserInput[] | productUncheckedCreateWithoutUserInput[]
    connectOrCreate?: productCreateOrConnectWithoutUserInput | productCreateOrConnectWithoutUserInput[]
    createMany?: productCreateManyUserInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type userprofileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput> | userprofileCreateWithoutUserInput[] | userprofileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput | userprofileCreateOrConnectWithoutUserInput[]
    createMany?: userprofileCreateManyUserInputEnvelope
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type clientUpdateManyWithoutUserNestedInput = {
    create?: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput> | clientCreateWithoutUserInput[] | clientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[]
    upsert?: clientUpsertWithWhereUniqueWithoutUserInput | clientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: clientCreateManyUserInputEnvelope
    set?: clientWhereUniqueInput | clientWhereUniqueInput[]
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[]
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    update?: clientUpdateWithWhereUniqueWithoutUserInput | clientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: clientUpdateManyWithWhereWithoutUserInput | clientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[]
  }

  export type invoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput> | invoiceCreateWithoutUserInput[] | invoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[]
    upsert?: invoiceUpsertWithWhereUniqueWithoutUserInput | invoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: invoiceCreateManyUserInputEnvelope
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    update?: invoiceUpdateWithWhereUniqueWithoutUserInput | invoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: invoiceUpdateManyWithWhereWithoutUserInput | invoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
  }

  export type paymentdetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentdetailsCreateWithoutUserInput, paymentdetailsUncheckedCreateWithoutUserInput> | paymentdetailsCreateWithoutUserInput[] | paymentdetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutUserInput | paymentdetailsCreateOrConnectWithoutUserInput[]
    upsert?: paymentdetailsUpsertWithWhereUniqueWithoutUserInput | paymentdetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentdetailsCreateManyUserInputEnvelope
    set?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    disconnect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    delete?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    connect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    update?: paymentdetailsUpdateWithWhereUniqueWithoutUserInput | paymentdetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentdetailsUpdateManyWithWhereWithoutUserInput | paymentdetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentdetailsScalarWhereInput | paymentdetailsScalarWhereInput[]
  }

  export type productUpdateManyWithoutUserNestedInput = {
    create?: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput> | productCreateWithoutUserInput[] | productUncheckedCreateWithoutUserInput[]
    connectOrCreate?: productCreateOrConnectWithoutUserInput | productCreateOrConnectWithoutUserInput[]
    upsert?: productUpsertWithWhereUniqueWithoutUserInput | productUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: productCreateManyUserInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutUserInput | productUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: productUpdateManyWithWhereWithoutUserInput | productUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type userprofileUpdateManyWithoutUserNestedInput = {
    create?: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput> | userprofileCreateWithoutUserInput[] | userprofileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput | userprofileCreateOrConnectWithoutUserInput[]
    upsert?: userprofileUpsertWithWhereUniqueWithoutUserInput | userprofileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userprofileCreateManyUserInputEnvelope
    set?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    disconnect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    delete?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    update?: userprofileUpdateWithWhereUniqueWithoutUserInput | userprofileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userprofileUpdateManyWithWhereWithoutUserInput | userprofileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
  }

  export type clientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput> | clientCreateWithoutUserInput[] | clientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: clientCreateOrConnectWithoutUserInput | clientCreateOrConnectWithoutUserInput[]
    upsert?: clientUpsertWithWhereUniqueWithoutUserInput | clientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: clientCreateManyUserInputEnvelope
    set?: clientWhereUniqueInput | clientWhereUniqueInput[]
    disconnect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    delete?: clientWhereUniqueInput | clientWhereUniqueInput[]
    connect?: clientWhereUniqueInput | clientWhereUniqueInput[]
    update?: clientUpdateWithWhereUniqueWithoutUserInput | clientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: clientUpdateManyWithWhereWithoutUserInput | clientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: clientScalarWhereInput | clientScalarWhereInput[]
  }

  export type invoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput> | invoiceCreateWithoutUserInput[] | invoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[]
    upsert?: invoiceUpsertWithWhereUniqueWithoutUserInput | invoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: invoiceCreateManyUserInputEnvelope
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[]
    update?: invoiceUpdateWithWhereUniqueWithoutUserInput | invoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: invoiceUpdateManyWithWhereWithoutUserInput | invoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
  }

  export type paymentdetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentdetailsCreateWithoutUserInput, paymentdetailsUncheckedCreateWithoutUserInput> | paymentdetailsCreateWithoutUserInput[] | paymentdetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentdetailsCreateOrConnectWithoutUserInput | paymentdetailsCreateOrConnectWithoutUserInput[]
    upsert?: paymentdetailsUpsertWithWhereUniqueWithoutUserInput | paymentdetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentdetailsCreateManyUserInputEnvelope
    set?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    disconnect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    delete?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    connect?: paymentdetailsWhereUniqueInput | paymentdetailsWhereUniqueInput[]
    update?: paymentdetailsUpdateWithWhereUniqueWithoutUserInput | paymentdetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentdetailsUpdateManyWithWhereWithoutUserInput | paymentdetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentdetailsScalarWhereInput | paymentdetailsScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput> | productCreateWithoutUserInput[] | productUncheckedCreateWithoutUserInput[]
    connectOrCreate?: productCreateOrConnectWithoutUserInput | productCreateOrConnectWithoutUserInput[]
    upsert?: productUpsertWithWhereUniqueWithoutUserInput | productUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: productCreateManyUserInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutUserInput | productUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: productUpdateManyWithWhereWithoutUserInput | productUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type userprofileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput> | userprofileCreateWithoutUserInput[] | userprofileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: userprofileCreateOrConnectWithoutUserInput | userprofileCreateOrConnectWithoutUserInput[]
    upsert?: userprofileUpsertWithWhereUniqueWithoutUserInput | userprofileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: userprofileCreateManyUserInputEnvelope
    set?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    disconnect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    delete?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    connect?: userprofileWhereUniqueInput | userprofileWhereUniqueInput[]
    update?: userprofileUpdateWithWhereUniqueWithoutUserInput | userprofileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: userprofileUpdateManyWithWhereWithoutUserInput | userprofileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUserprofileInput = {
    create?: XOR<userCreateWithoutUserprofileInput, userUncheckedCreateWithoutUserprofileInput>
    connectOrCreate?: userCreateOrConnectWithoutUserprofileInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserprofileNestedInput = {
    create?: XOR<userCreateWithoutUserprofileInput, userUncheckedCreateWithoutUserprofileInput>
    connectOrCreate?: userCreateOrConnectWithoutUserprofileInput
    upsert?: userUpsertWithoutUserprofileInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserprofileInput, userUpdateWithoutUserprofileInput>, userUncheckedUpdateWithoutUserprofileInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnuminvoice_invoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.invoice_invoiceStatus | Enuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.invoice_invoiceStatus[] | ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.invoice_invoiceStatus[] | ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnuminvoice_invoiceStatusFilter<$PrismaModel> | $Enums.invoice_invoiceStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnuminvoice_invoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.invoice_invoiceStatus | Enuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.invoice_invoiceStatus[] | ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.invoice_invoiceStatus[] | ListEnuminvoice_invoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnuminvoice_invoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.invoice_invoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuminvoice_invoiceStatusFilter<$PrismaModel>
    _max?: NestedEnuminvoice_invoiceStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumpaymentoptions_paymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentoptions_paymentType | Enumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.paymentoptions_paymentType[] | ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentoptions_paymentType[] | ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentoptions_paymentTypeFilter<$PrismaModel> | $Enums.paymentoptions_paymentType
  }

  export type NestedEnumpaymentoptions_paymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentoptions_paymentType | Enumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.paymentoptions_paymentType[] | ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentoptions_paymentType[] | ListEnumpaymentoptions_paymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentoptions_paymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.paymentoptions_paymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaymentoptions_paymentTypeFilter<$PrismaModel>
    _max?: NestedEnumpaymentoptions_paymentTypeFilter<$PrismaModel>
  }

  export type NestedEnumpaymentmethodFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentmethod | EnumpaymentmethodFieldRefInput<$PrismaModel>
    in?: $Enums.paymentmethod[] | ListEnumpaymentmethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentmethod[] | ListEnumpaymentmethodFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentmethodFilter<$PrismaModel> | $Enums.paymentmethod
  }

  export type NestedEnumpaymentmethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentmethod | EnumpaymentmethodFieldRefInput<$PrismaModel>
    in?: $Enums.paymentmethod[] | ListEnumpaymentmethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.paymentmethod[] | ListEnumpaymentmethodFieldRefInput<$PrismaModel>
    not?: NestedEnumpaymentmethodWithAggregatesFilter<$PrismaModel> | $Enums.paymentmethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpaymentmethodFilter<$PrismaModel>
    _max?: NestedEnumpaymentmethodFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type productCreateWithoutCategoryInput = {
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    invoicedetail?: invoicedetailCreateNestedManyWithoutProductInput
    user: userCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    invoicedetail?: invoicedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCategoryInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productCreateManyCategoryInputEnvelope = {
    data: productCreateManyCategoryInput | productCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
  }

  export type productUpdateManyWithWhereWithoutCategoryInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutCategoryInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: IntFilter<"product"> | number
    userId?: IntFilter<"product"> | number
    productCode?: StringFilter<"product"> | string
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: IntFilter<"product"> | number
    isDeleted?: BoolFilter<"product"> | boolean
    createdAt?: DateTimeFilter<"product"> | Date | string
    categoryId?: IntFilter<"product"> | number
  }

  export type userCreateWithoutClientInput = {
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    invoice?: invoiceCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsCreateNestedManyWithoutUserInput
    product?: productCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutClientInput = {
    id?: number
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsUncheckedCreateNestedManyWithoutUserInput
    product?: productUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutClientInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>
  }

  export type invoiceCreateWithoutClientInput = {
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    isDeleted?: boolean
    paymentdetails: paymentdetailsCreateNestedOneWithoutInvoiceInput
    user: userCreateNestedOneWithoutInvoiceInput
    invoicedetail?: invoicedetailCreateNestedManyWithoutInvoiceInput
  }

  export type invoiceUncheckedCreateWithoutClientInput = {
    id?: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    paymentId: number
    userId: number
    isDeleted?: boolean
    invoicedetail?: invoicedetailUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoiceCreateOrConnectWithoutClientInput = {
    where: invoiceWhereUniqueInput
    create: XOR<invoiceCreateWithoutClientInput, invoiceUncheckedCreateWithoutClientInput>
  }

  export type invoiceCreateManyClientInputEnvelope = {
    data: invoiceCreateManyClientInput | invoiceCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type clientpaymentCreateWithoutClientInput = {
    paymentMethod: $Enums.paymentmethod
    createdAt?: Date | string
  }

  export type clientpaymentUncheckedCreateWithoutClientInput = {
    id?: number
    paymentMethod: $Enums.paymentmethod
    createdAt?: Date | string
  }

  export type clientpaymentCreateOrConnectWithoutClientInput = {
    where: clientpaymentWhereUniqueInput
    create: XOR<clientpaymentCreateWithoutClientInput, clientpaymentUncheckedCreateWithoutClientInput>
  }

  export type userUpsertWithoutClientInput = {
    update: XOR<userUpdateWithoutClientInput, userUncheckedUpdateWithoutClientInput>
    create: XOR<userCreateWithoutClientInput, userUncheckedCreateWithoutClientInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutClientInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutClientInput, userUncheckedUpdateWithoutClientInput>
  }

  export type userUpdateWithoutClientInput = {
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: invoiceUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUpdateManyWithoutUserNestedInput
    product?: productUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUncheckedUpdateManyWithoutUserNestedInput
    product?: productUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type invoiceUpsertWithWhereUniqueWithoutClientInput = {
    where: invoiceWhereUniqueInput
    update: XOR<invoiceUpdateWithoutClientInput, invoiceUncheckedUpdateWithoutClientInput>
    create: XOR<invoiceCreateWithoutClientInput, invoiceUncheckedCreateWithoutClientInput>
  }

  export type invoiceUpdateWithWhereUniqueWithoutClientInput = {
    where: invoiceWhereUniqueInput
    data: XOR<invoiceUpdateWithoutClientInput, invoiceUncheckedUpdateWithoutClientInput>
  }

  export type invoiceUpdateManyWithWhereWithoutClientInput = {
    where: invoiceScalarWhereInput
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyWithoutClientInput>
  }

  export type invoiceScalarWhereInput = {
    AND?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
    OR?: invoiceScalarWhereInput[]
    NOT?: invoiceScalarWhereInput | invoiceScalarWhereInput[]
    id?: IntFilter<"invoice"> | number
    clientId?: IntFilter<"invoice"> | number
    invoiceCode?: StringFilter<"invoice"> | string
    invoiceDate?: DateTimeFilter<"invoice"> | Date | string
    nextInvoiceDate?: DateTimeFilter<"invoice"> | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFilter<"invoice"> | $Enums.invoice_invoiceStatus
    totalAmount?: IntFilter<"invoice"> | number
    recurringDays?: IntFilter<"invoice"> | number
    createdAt?: DateTimeFilter<"invoice"> | Date | string
    subTotal?: IntFilter<"invoice"> | number
    paymentId?: IntFilter<"invoice"> | number
    userId?: IntFilter<"invoice"> | number
    isDeleted?: BoolFilter<"invoice"> | boolean
  }

  export type clientpaymentUpsertWithoutClientInput = {
    update: XOR<clientpaymentUpdateWithoutClientInput, clientpaymentUncheckedUpdateWithoutClientInput>
    create: XOR<clientpaymentCreateWithoutClientInput, clientpaymentUncheckedCreateWithoutClientInput>
    where?: clientpaymentWhereInput
  }

  export type clientpaymentUpdateToOneWithWhereWithoutClientInput = {
    where?: clientpaymentWhereInput
    data: XOR<clientpaymentUpdateWithoutClientInput, clientpaymentUncheckedUpdateWithoutClientInput>
  }

  export type clientpaymentUpdateWithoutClientInput = {
    paymentMethod?: EnumpaymentmethodFieldUpdateOperationsInput | $Enums.paymentmethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientpaymentUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentMethod?: EnumpaymentmethodFieldUpdateOperationsInput | $Enums.paymentmethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientCreateWithoutInvoiceInput = {
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    user: userCreateNestedOneWithoutClientInput
    clientpayment: clientpaymentCreateNestedOneWithoutClientInput
  }

  export type clientUncheckedCreateWithoutInvoiceInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    userId: number
    payId: number
  }

  export type clientCreateOrConnectWithoutInvoiceInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutInvoiceInput, clientUncheckedCreateWithoutInvoiceInput>
  }

  export type paymentdetailsCreateWithoutInvoiceInput = {
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
    paymentoptions: paymentoptionsCreateNestedOneWithoutPaymentdetailsInput
    user: userCreateNestedOneWithoutPaymentdetailsInput
  }

  export type paymentdetailsUncheckedCreateWithoutInvoiceInput = {
    id?: number
    userId: number
    paymentOptId: number
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
  }

  export type paymentdetailsCreateOrConnectWithoutInvoiceInput = {
    where: paymentdetailsWhereUniqueInput
    create: XOR<paymentdetailsCreateWithoutInvoiceInput, paymentdetailsUncheckedCreateWithoutInvoiceInput>
  }

  export type userCreateWithoutInvoiceInput = {
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsCreateNestedManyWithoutUserInput
    product?: productCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutInvoiceInput = {
    id?: number
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientUncheckedCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsUncheckedCreateNestedManyWithoutUserInput
    product?: productUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutInvoiceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>
  }

  export type invoicedetailCreateWithoutInvoiceInput = {
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
    product: productCreateNestedOneWithoutInvoicedetailInput
  }

  export type invoicedetailUncheckedCreateWithoutInvoiceInput = {
    id?: number
    productId: number
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
  }

  export type invoicedetailCreateOrConnectWithoutInvoiceInput = {
    where: invoicedetailWhereUniqueInput
    create: XOR<invoicedetailCreateWithoutInvoiceInput, invoicedetailUncheckedCreateWithoutInvoiceInput>
  }

  export type invoicedetailCreateManyInvoiceInputEnvelope = {
    data: invoicedetailCreateManyInvoiceInput | invoicedetailCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type clientUpsertWithoutInvoiceInput = {
    update: XOR<clientUpdateWithoutInvoiceInput, clientUncheckedUpdateWithoutInvoiceInput>
    create: XOR<clientCreateWithoutInvoiceInput, clientUncheckedCreateWithoutInvoiceInput>
    where?: clientWhereInput
  }

  export type clientUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: clientWhereInput
    data: XOR<clientUpdateWithoutInvoiceInput, clientUncheckedUpdateWithoutInvoiceInput>
  }

  export type clientUpdateWithoutInvoiceInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutClientNestedInput
    clientpayment?: clientpaymentUpdateOneRequiredWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    payId?: IntFieldUpdateOperationsInput | number
  }

  export type paymentdetailsUpsertWithoutInvoiceInput = {
    update: XOR<paymentdetailsUpdateWithoutInvoiceInput, paymentdetailsUncheckedUpdateWithoutInvoiceInput>
    create: XOR<paymentdetailsCreateWithoutInvoiceInput, paymentdetailsUncheckedCreateWithoutInvoiceInput>
    where?: paymentdetailsWhereInput
  }

  export type paymentdetailsUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: paymentdetailsWhereInput
    data: XOR<paymentdetailsUpdateWithoutInvoiceInput, paymentdetailsUncheckedUpdateWithoutInvoiceInput>
  }

  export type paymentdetailsUpdateWithoutInvoiceInput = {
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentoptions?: paymentoptionsUpdateOneRequiredWithoutPaymentdetailsNestedInput
    user?: userUpdateOneRequiredWithoutPaymentdetailsNestedInput
  }

  export type paymentdetailsUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    paymentOptId?: IntFieldUpdateOperationsInput | number
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithoutInvoiceInput = {
    update: XOR<userUpdateWithoutInvoiceInput, userUncheckedUpdateWithoutInvoiceInput>
    create: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutInvoiceInput, userUncheckedUpdateWithoutInvoiceInput>
  }

  export type userUpdateWithoutInvoiceInput = {
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUpdateManyWithoutUserNestedInput
    product?: productUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUncheckedUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUncheckedUpdateManyWithoutUserNestedInput
    product?: productUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type invoicedetailUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: invoicedetailWhereUniqueInput
    update: XOR<invoicedetailUpdateWithoutInvoiceInput, invoicedetailUncheckedUpdateWithoutInvoiceInput>
    create: XOR<invoicedetailCreateWithoutInvoiceInput, invoicedetailUncheckedCreateWithoutInvoiceInput>
  }

  export type invoicedetailUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: invoicedetailWhereUniqueInput
    data: XOR<invoicedetailUpdateWithoutInvoiceInput, invoicedetailUncheckedUpdateWithoutInvoiceInput>
  }

  export type invoicedetailUpdateManyWithWhereWithoutInvoiceInput = {
    where: invoicedetailScalarWhereInput
    data: XOR<invoicedetailUpdateManyMutationInput, invoicedetailUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type invoicedetailScalarWhereInput = {
    AND?: invoicedetailScalarWhereInput | invoicedetailScalarWhereInput[]
    OR?: invoicedetailScalarWhereInput[]
    NOT?: invoicedetailScalarWhereInput | invoicedetailScalarWhereInput[]
    id?: IntFilter<"invoicedetail"> | number
    productId?: IntFilter<"invoicedetail"> | number
    invoiceId?: IntFilter<"invoicedetail"> | number
    qty?: IntFilter<"invoicedetail"> | number
    priceUnit?: IntFilter<"invoicedetail"> | number
    priceTotal?: IntFilter<"invoicedetail"> | number
    createdAt?: DateTimeFilter<"invoicedetail"> | Date | string
  }

  export type invoiceCreateWithoutInvoicedetailInput = {
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    isDeleted?: boolean
    client: clientCreateNestedOneWithoutInvoiceInput
    paymentdetails: paymentdetailsCreateNestedOneWithoutInvoiceInput
    user: userCreateNestedOneWithoutInvoiceInput
  }

  export type invoiceUncheckedCreateWithoutInvoicedetailInput = {
    id?: number
    clientId: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    paymentId: number
    userId: number
    isDeleted?: boolean
  }

  export type invoiceCreateOrConnectWithoutInvoicedetailInput = {
    where: invoiceWhereUniqueInput
    create: XOR<invoiceCreateWithoutInvoicedetailInput, invoiceUncheckedCreateWithoutInvoicedetailInput>
  }

  export type productCreateWithoutInvoicedetailInput = {
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    category: categoryCreateNestedOneWithoutProductInput
    user: userCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateWithoutInvoicedetailInput = {
    id?: number
    userId: number
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    categoryId: number
  }

  export type productCreateOrConnectWithoutInvoicedetailInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutInvoicedetailInput, productUncheckedCreateWithoutInvoicedetailInput>
  }

  export type invoiceUpsertWithoutInvoicedetailInput = {
    update: XOR<invoiceUpdateWithoutInvoicedetailInput, invoiceUncheckedUpdateWithoutInvoicedetailInput>
    create: XOR<invoiceCreateWithoutInvoicedetailInput, invoiceUncheckedCreateWithoutInvoicedetailInput>
    where?: invoiceWhereInput
  }

  export type invoiceUpdateToOneWithWhereWithoutInvoicedetailInput = {
    where?: invoiceWhereInput
    data: XOR<invoiceUpdateWithoutInvoicedetailInput, invoiceUncheckedUpdateWithoutInvoicedetailInput>
  }

  export type invoiceUpdateWithoutInvoicedetailInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    client?: clientUpdateOneRequiredWithoutInvoiceNestedInput
    paymentdetails?: paymentdetailsUpdateOneRequiredWithoutInvoiceNestedInput
    user?: userUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateWithoutInvoicedetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type productUpsertWithoutInvoicedetailInput = {
    update: XOR<productUpdateWithoutInvoicedetailInput, productUncheckedUpdateWithoutInvoicedetailInput>
    create: XOR<productCreateWithoutInvoicedetailInput, productUncheckedCreateWithoutInvoicedetailInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutInvoicedetailInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutInvoicedetailInput, productUncheckedUpdateWithoutInvoicedetailInput>
  }

  export type productUpdateWithoutInvoicedetailInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutProductNestedInput
    user?: userUpdateOneRequiredWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutInvoicedetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type paymentoptionsCreateWithoutPaymentdetailsInput = {
    paymentType: $Enums.paymentoptions_paymentType
    createdAt?: Date | string
  }

  export type paymentoptionsUncheckedCreateWithoutPaymentdetailsInput = {
    id?: number
    paymentType: $Enums.paymentoptions_paymentType
    createdAt?: Date | string
  }

  export type paymentoptionsCreateOrConnectWithoutPaymentdetailsInput = {
    where: paymentoptionsWhereUniqueInput
    create: XOR<paymentoptionsCreateWithoutPaymentdetailsInput, paymentoptionsUncheckedCreateWithoutPaymentdetailsInput>
  }

  export type userCreateWithoutPaymentdetailsInput = {
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientCreateNestedManyWithoutUserInput
    invoice?: invoiceCreateNestedManyWithoutUserInput
    product?: productCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutPaymentdetailsInput = {
    id?: number
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientUncheckedCreateNestedManyWithoutUserInput
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput
    product?: productUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPaymentdetailsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPaymentdetailsInput, userUncheckedCreateWithoutPaymentdetailsInput>
  }

  export type invoiceCreateWithoutPaymentdetailsInput = {
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    isDeleted?: boolean
    client: clientCreateNestedOneWithoutInvoiceInput
    user: userCreateNestedOneWithoutInvoiceInput
    invoicedetail?: invoicedetailCreateNestedManyWithoutInvoiceInput
  }

  export type invoiceUncheckedCreateWithoutPaymentdetailsInput = {
    id?: number
    clientId: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    userId: number
    isDeleted?: boolean
    invoicedetail?: invoicedetailUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoiceCreateOrConnectWithoutPaymentdetailsInput = {
    where: invoiceWhereUniqueInput
    create: XOR<invoiceCreateWithoutPaymentdetailsInput, invoiceUncheckedCreateWithoutPaymentdetailsInput>
  }

  export type invoiceCreateManyPaymentdetailsInputEnvelope = {
    data: invoiceCreateManyPaymentdetailsInput | invoiceCreateManyPaymentdetailsInput[]
    skipDuplicates?: boolean
  }

  export type paymentoptionsUpsertWithoutPaymentdetailsInput = {
    update: XOR<paymentoptionsUpdateWithoutPaymentdetailsInput, paymentoptionsUncheckedUpdateWithoutPaymentdetailsInput>
    create: XOR<paymentoptionsCreateWithoutPaymentdetailsInput, paymentoptionsUncheckedCreateWithoutPaymentdetailsInput>
    where?: paymentoptionsWhereInput
  }

  export type paymentoptionsUpdateToOneWithWhereWithoutPaymentdetailsInput = {
    where?: paymentoptionsWhereInput
    data: XOR<paymentoptionsUpdateWithoutPaymentdetailsInput, paymentoptionsUncheckedUpdateWithoutPaymentdetailsInput>
  }

  export type paymentoptionsUpdateWithoutPaymentdetailsInput = {
    paymentType?: Enumpaymentoptions_paymentTypeFieldUpdateOperationsInput | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentoptionsUncheckedUpdateWithoutPaymentdetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentType?: Enumpaymentoptions_paymentTypeFieldUpdateOperationsInput | $Enums.paymentoptions_paymentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithoutPaymentdetailsInput = {
    update: XOR<userUpdateWithoutPaymentdetailsInput, userUncheckedUpdateWithoutPaymentdetailsInput>
    create: XOR<userCreateWithoutPaymentdetailsInput, userUncheckedCreateWithoutPaymentdetailsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPaymentdetailsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPaymentdetailsInput, userUncheckedUpdateWithoutPaymentdetailsInput>
  }

  export type userUpdateWithoutPaymentdetailsInput = {
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUpdateManyWithoutUserNestedInput
    invoice?: invoiceUpdateManyWithoutUserNestedInput
    product?: productUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPaymentdetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUncheckedUpdateManyWithoutUserNestedInput
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    product?: productUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type invoiceUpsertWithWhereUniqueWithoutPaymentdetailsInput = {
    where: invoiceWhereUniqueInput
    update: XOR<invoiceUpdateWithoutPaymentdetailsInput, invoiceUncheckedUpdateWithoutPaymentdetailsInput>
    create: XOR<invoiceCreateWithoutPaymentdetailsInput, invoiceUncheckedCreateWithoutPaymentdetailsInput>
  }

  export type invoiceUpdateWithWhereUniqueWithoutPaymentdetailsInput = {
    where: invoiceWhereUniqueInput
    data: XOR<invoiceUpdateWithoutPaymentdetailsInput, invoiceUncheckedUpdateWithoutPaymentdetailsInput>
  }

  export type invoiceUpdateManyWithWhereWithoutPaymentdetailsInput = {
    where: invoiceScalarWhereInput
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyWithoutPaymentdetailsInput>
  }

  export type paymentdetailsCreateWithoutPaymentoptionsInput = {
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
    user: userCreateNestedOneWithoutPaymentdetailsInput
    invoice?: invoiceCreateNestedManyWithoutPaymentdetailsInput
  }

  export type paymentdetailsUncheckedCreateWithoutPaymentoptionsInput = {
    id?: number
    userId: number
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
    invoice?: invoiceUncheckedCreateNestedManyWithoutPaymentdetailsInput
  }

  export type paymentdetailsCreateOrConnectWithoutPaymentoptionsInput = {
    where: paymentdetailsWhereUniqueInput
    create: XOR<paymentdetailsCreateWithoutPaymentoptionsInput, paymentdetailsUncheckedCreateWithoutPaymentoptionsInput>
  }

  export type paymentdetailsCreateManyPaymentoptionsInputEnvelope = {
    data: paymentdetailsCreateManyPaymentoptionsInput | paymentdetailsCreateManyPaymentoptionsInput[]
    skipDuplicates?: boolean
  }

  export type paymentdetailsUpsertWithWhereUniqueWithoutPaymentoptionsInput = {
    where: paymentdetailsWhereUniqueInput
    update: XOR<paymentdetailsUpdateWithoutPaymentoptionsInput, paymentdetailsUncheckedUpdateWithoutPaymentoptionsInput>
    create: XOR<paymentdetailsCreateWithoutPaymentoptionsInput, paymentdetailsUncheckedCreateWithoutPaymentoptionsInput>
  }

  export type paymentdetailsUpdateWithWhereUniqueWithoutPaymentoptionsInput = {
    where: paymentdetailsWhereUniqueInput
    data: XOR<paymentdetailsUpdateWithoutPaymentoptionsInput, paymentdetailsUncheckedUpdateWithoutPaymentoptionsInput>
  }

  export type paymentdetailsUpdateManyWithWhereWithoutPaymentoptionsInput = {
    where: paymentdetailsScalarWhereInput
    data: XOR<paymentdetailsUpdateManyMutationInput, paymentdetailsUncheckedUpdateManyWithoutPaymentoptionsInput>
  }

  export type paymentdetailsScalarWhereInput = {
    AND?: paymentdetailsScalarWhereInput | paymentdetailsScalarWhereInput[]
    OR?: paymentdetailsScalarWhereInput[]
    NOT?: paymentdetailsScalarWhereInput | paymentdetailsScalarWhereInput[]
    id?: IntFilter<"paymentdetails"> | number
    userId?: IntFilter<"paymentdetails"> | number
    paymentOptId?: IntFilter<"paymentdetails"> | number
    paymentCode?: StringFilter<"paymentdetails"> | string
    bankAccount?: StringNullableFilter<"paymentdetails"> | string | null
    accountNumber?: StringNullableFilter<"paymentdetails"> | string | null
    accountName?: StringNullableFilter<"paymentdetails"> | string | null
    createdAt?: DateTimeFilter<"paymentdetails"> | Date | string
  }

  export type clientCreateWithoutClientpaymentInput = {
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    user: userCreateNestedOneWithoutClientInput
    invoice?: invoiceCreateNestedManyWithoutClientInput
  }

  export type clientUncheckedCreateWithoutClientpaymentInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    userId: number
    invoice?: invoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientCreateOrConnectWithoutClientpaymentInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutClientpaymentInput, clientUncheckedCreateWithoutClientpaymentInput>
  }

  export type clientCreateManyClientpaymentInputEnvelope = {
    data: clientCreateManyClientpaymentInput | clientCreateManyClientpaymentInput[]
    skipDuplicates?: boolean
  }

  export type clientUpsertWithWhereUniqueWithoutClientpaymentInput = {
    where: clientWhereUniqueInput
    update: XOR<clientUpdateWithoutClientpaymentInput, clientUncheckedUpdateWithoutClientpaymentInput>
    create: XOR<clientCreateWithoutClientpaymentInput, clientUncheckedCreateWithoutClientpaymentInput>
  }

  export type clientUpdateWithWhereUniqueWithoutClientpaymentInput = {
    where: clientWhereUniqueInput
    data: XOR<clientUpdateWithoutClientpaymentInput, clientUncheckedUpdateWithoutClientpaymentInput>
  }

  export type clientUpdateManyWithWhereWithoutClientpaymentInput = {
    where: clientScalarWhereInput
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyWithoutClientpaymentInput>
  }

  export type clientScalarWhereInput = {
    AND?: clientScalarWhereInput | clientScalarWhereInput[]
    OR?: clientScalarWhereInput[]
    NOT?: clientScalarWhereInput | clientScalarWhereInput[]
    id?: IntFilter<"client"> | number
    name?: StringFilter<"client"> | string
    address?: StringFilter<"client"> | string
    phone?: StringFilter<"client"> | string
    email?: StringFilter<"client"> | string
    createdAt?: DateTimeFilter<"client"> | Date | string
    clientCode?: StringFilter<"client"> | string
    userId?: IntFilter<"client"> | number
    payId?: IntFilter<"client"> | number
  }

  export type invoicedetailCreateWithoutProductInput = {
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
    invoice: invoiceCreateNestedOneWithoutInvoicedetailInput
  }

  export type invoicedetailUncheckedCreateWithoutProductInput = {
    id?: number
    invoiceId: number
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
  }

  export type invoicedetailCreateOrConnectWithoutProductInput = {
    where: invoicedetailWhereUniqueInput
    create: XOR<invoicedetailCreateWithoutProductInput, invoicedetailUncheckedCreateWithoutProductInput>
  }

  export type invoicedetailCreateManyProductInputEnvelope = {
    data: invoicedetailCreateManyProductInput | invoicedetailCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type categoryCreateWithoutProductInput = {
    categoryName: string
    createdAt?: Date | string
  }

  export type categoryUncheckedCreateWithoutProductInput = {
    id?: number
    categoryName: string
    createdAt?: Date | string
  }

  export type categoryCreateOrConnectWithoutProductInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
  }

  export type userCreateWithoutProductInput = {
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientCreateNestedManyWithoutUserInput
    invoice?: invoiceCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsCreateNestedManyWithoutUserInput
    userprofile?: userprofileCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProductInput = {
    id?: number
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientUncheckedCreateNestedManyWithoutUserInput
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsUncheckedCreateNestedManyWithoutUserInput
    userprofile?: userprofileUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProductInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProductInput, userUncheckedCreateWithoutProductInput>
  }

  export type invoicedetailUpsertWithWhereUniqueWithoutProductInput = {
    where: invoicedetailWhereUniqueInput
    update: XOR<invoicedetailUpdateWithoutProductInput, invoicedetailUncheckedUpdateWithoutProductInput>
    create: XOR<invoicedetailCreateWithoutProductInput, invoicedetailUncheckedCreateWithoutProductInput>
  }

  export type invoicedetailUpdateWithWhereUniqueWithoutProductInput = {
    where: invoicedetailWhereUniqueInput
    data: XOR<invoicedetailUpdateWithoutProductInput, invoicedetailUncheckedUpdateWithoutProductInput>
  }

  export type invoicedetailUpdateManyWithWhereWithoutProductInput = {
    where: invoicedetailScalarWhereInput
    data: XOR<invoicedetailUpdateManyMutationInput, invoicedetailUncheckedUpdateManyWithoutProductInput>
  }

  export type categoryUpsertWithoutProductInput = {
    update: XOR<categoryUpdateWithoutProductInput, categoryUncheckedUpdateWithoutProductInput>
    create: XOR<categoryCreateWithoutProductInput, categoryUncheckedCreateWithoutProductInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutProductInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutProductInput, categoryUncheckedUpdateWithoutProductInput>
  }

  export type categoryUpdateWithoutProductInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpsertWithoutProductInput = {
    update: XOR<userUpdateWithoutProductInput, userUncheckedUpdateWithoutProductInput>
    create: XOR<userCreateWithoutProductInput, userUncheckedCreateWithoutProductInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProductInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProductInput, userUncheckedUpdateWithoutProductInput>
  }

  export type userUpdateWithoutProductInput = {
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUpdateManyWithoutUserNestedInput
    invoice?: invoiceUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUncheckedUpdateManyWithoutUserNestedInput
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUncheckedUpdateManyWithoutUserNestedInput
    userprofile?: userprofileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type clientCreateWithoutUserInput = {
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    invoice?: invoiceCreateNestedManyWithoutClientInput
    clientpayment: clientpaymentCreateNestedOneWithoutClientInput
  }

  export type clientUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    payId: number
    invoice?: invoiceUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientCreateOrConnectWithoutUserInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
  }

  export type clientCreateManyUserInputEnvelope = {
    data: clientCreateManyUserInput | clientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type invoiceCreateWithoutUserInput = {
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    isDeleted?: boolean
    client: clientCreateNestedOneWithoutInvoiceInput
    paymentdetails: paymentdetailsCreateNestedOneWithoutInvoiceInput
    invoicedetail?: invoicedetailCreateNestedManyWithoutInvoiceInput
  }

  export type invoiceUncheckedCreateWithoutUserInput = {
    id?: number
    clientId: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    paymentId: number
    isDeleted?: boolean
    invoicedetail?: invoicedetailUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoiceCreateOrConnectWithoutUserInput = {
    where: invoiceWhereUniqueInput
    create: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
  }

  export type invoiceCreateManyUserInputEnvelope = {
    data: invoiceCreateManyUserInput | invoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type paymentdetailsCreateWithoutUserInput = {
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
    paymentoptions: paymentoptionsCreateNestedOneWithoutPaymentdetailsInput
    invoice?: invoiceCreateNestedManyWithoutPaymentdetailsInput
  }

  export type paymentdetailsUncheckedCreateWithoutUserInput = {
    id?: number
    paymentOptId: number
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
    invoice?: invoiceUncheckedCreateNestedManyWithoutPaymentdetailsInput
  }

  export type paymentdetailsCreateOrConnectWithoutUserInput = {
    where: paymentdetailsWhereUniqueInput
    create: XOR<paymentdetailsCreateWithoutUserInput, paymentdetailsUncheckedCreateWithoutUserInput>
  }

  export type paymentdetailsCreateManyUserInputEnvelope = {
    data: paymentdetailsCreateManyUserInput | paymentdetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type productCreateWithoutUserInput = {
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    invoicedetail?: invoicedetailCreateNestedManyWithoutProductInput
    category: categoryCreateNestedOneWithoutProductInput
  }

  export type productUncheckedCreateWithoutUserInput = {
    id?: number
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    categoryId: number
    invoicedetail?: invoicedetailUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutUserInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput>
  }

  export type productCreateManyUserInputEnvelope = {
    data: productCreateManyUserInput | productCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userprofileCreateWithoutUserInput = {
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    profilePicture?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    isCreated?: boolean
  }

  export type userprofileUncheckedCreateWithoutUserInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    profilePicture?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    isCreated?: boolean
  }

  export type userprofileCreateOrConnectWithoutUserInput = {
    where: userprofileWhereUniqueInput
    create: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput>
  }

  export type userprofileCreateManyUserInputEnvelope = {
    data: userprofileCreateManyUserInput | userprofileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type clientUpsertWithWhereUniqueWithoutUserInput = {
    where: clientWhereUniqueInput
    update: XOR<clientUpdateWithoutUserInput, clientUncheckedUpdateWithoutUserInput>
    create: XOR<clientCreateWithoutUserInput, clientUncheckedCreateWithoutUserInput>
  }

  export type clientUpdateWithWhereUniqueWithoutUserInput = {
    where: clientWhereUniqueInput
    data: XOR<clientUpdateWithoutUserInput, clientUncheckedUpdateWithoutUserInput>
  }

  export type clientUpdateManyWithWhereWithoutUserInput = {
    where: clientScalarWhereInput
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyWithoutUserInput>
  }

  export type invoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: invoiceWhereUniqueInput
    update: XOR<invoiceUpdateWithoutUserInput, invoiceUncheckedUpdateWithoutUserInput>
    create: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
  }

  export type invoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: invoiceWhereUniqueInput
    data: XOR<invoiceUpdateWithoutUserInput, invoiceUncheckedUpdateWithoutUserInput>
  }

  export type invoiceUpdateManyWithWhereWithoutUserInput = {
    where: invoiceScalarWhereInput
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type paymentdetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentdetailsWhereUniqueInput
    update: XOR<paymentdetailsUpdateWithoutUserInput, paymentdetailsUncheckedUpdateWithoutUserInput>
    create: XOR<paymentdetailsCreateWithoutUserInput, paymentdetailsUncheckedCreateWithoutUserInput>
  }

  export type paymentdetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentdetailsWhereUniqueInput
    data: XOR<paymentdetailsUpdateWithoutUserInput, paymentdetailsUncheckedUpdateWithoutUserInput>
  }

  export type paymentdetailsUpdateManyWithWhereWithoutUserInput = {
    where: paymentdetailsScalarWhereInput
    data: XOR<paymentdetailsUpdateManyMutationInput, paymentdetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type productUpsertWithWhereUniqueWithoutUserInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutUserInput, productUncheckedUpdateWithoutUserInput>
    create: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput>
  }

  export type productUpdateWithWhereUniqueWithoutUserInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutUserInput, productUncheckedUpdateWithoutUserInput>
  }

  export type productUpdateManyWithWhereWithoutUserInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutUserInput>
  }

  export type userprofileUpsertWithWhereUniqueWithoutUserInput = {
    where: userprofileWhereUniqueInput
    update: XOR<userprofileUpdateWithoutUserInput, userprofileUncheckedUpdateWithoutUserInput>
    create: XOR<userprofileCreateWithoutUserInput, userprofileUncheckedCreateWithoutUserInput>
  }

  export type userprofileUpdateWithWhereUniqueWithoutUserInput = {
    where: userprofileWhereUniqueInput
    data: XOR<userprofileUpdateWithoutUserInput, userprofileUncheckedUpdateWithoutUserInput>
  }

  export type userprofileUpdateManyWithWhereWithoutUserInput = {
    where: userprofileScalarWhereInput
    data: XOR<userprofileUpdateManyMutationInput, userprofileUncheckedUpdateManyWithoutUserInput>
  }

  export type userprofileScalarWhereInput = {
    AND?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
    OR?: userprofileScalarWhereInput[]
    NOT?: userprofileScalarWhereInput | userprofileScalarWhereInput[]
    id?: IntFilter<"userprofile"> | number
    userId?: IntFilter<"userprofile"> | number
    firstName?: StringNullableFilter<"userprofile"> | string | null
    lastName?: StringNullableFilter<"userprofile"> | string | null
    companyName?: StringNullableFilter<"userprofile"> | string | null
    profilePicture?: StringNullableFilter<"userprofile"> | string | null
    address?: StringNullableFilter<"userprofile"> | string | null
    phone?: StringNullableFilter<"userprofile"> | string | null
    createdAt?: DateTimeFilter<"userprofile"> | Date | string
    isCreated?: BoolFilter<"userprofile"> | boolean
  }

  export type userCreateWithoutUserprofileInput = {
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientCreateNestedManyWithoutUserInput
    invoice?: invoiceCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsCreateNestedManyWithoutUserInput
    product?: productCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserprofileInput = {
    id?: number
    identificationId: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    isBlocked?: boolean
    lastLoginAttempt?: Date | string
    loginAttempt?: number
    isVerified?: boolean
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    sessionToken?: string | null
    client?: clientUncheckedCreateNestedManyWithoutUserInput
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput
    paymentdetails?: paymentdetailsUncheckedCreateNestedManyWithoutUserInput
    product?: productUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserprofileInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserprofileInput, userUncheckedCreateWithoutUserprofileInput>
  }

  export type userUpsertWithoutUserprofileInput = {
    update: XOR<userUpdateWithoutUserprofileInput, userUncheckedUpdateWithoutUserprofileInput>
    create: XOR<userCreateWithoutUserprofileInput, userUncheckedCreateWithoutUserprofileInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserprofileInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserprofileInput, userUncheckedUpdateWithoutUserprofileInput>
  }

  export type userUpdateWithoutUserprofileInput = {
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUpdateManyWithoutUserNestedInput
    invoice?: invoiceUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUpdateManyWithoutUserNestedInput
    product?: productUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserprofileInput = {
    id?: IntFieldUpdateOperationsInput | number
    identificationId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAttempt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginAttempt?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    client?: clientUncheckedUpdateManyWithoutUserNestedInput
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput
    paymentdetails?: paymentdetailsUncheckedUpdateManyWithoutUserNestedInput
    product?: productUncheckedUpdateManyWithoutUserNestedInput
  }

  export type productCreateManyCategoryInput = {
    id?: number
    userId: number
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
  }

  export type productUpdateWithoutCategoryInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetail?: invoicedetailUpdateManyWithoutProductNestedInput
    user?: userUpdateOneRequiredWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetail?: invoicedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoiceCreateManyClientInput = {
    id?: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    paymentId: number
    userId: number
    isDeleted?: boolean
  }

  export type invoiceUpdateWithoutClientInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    paymentdetails?: paymentdetailsUpdateOneRequiredWithoutInvoiceNestedInput
    user?: userUpdateOneRequiredWithoutInvoiceNestedInput
    invoicedetail?: invoicedetailUpdateManyWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    invoicedetail?: invoicedetailUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type invoicedetailCreateManyInvoiceInput = {
    id?: number
    productId: number
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
  }

  export type invoicedetailUpdateWithoutInvoiceInput = {
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneRequiredWithoutInvoicedetailNestedInput
  }

  export type invoicedetailUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailUncheckedUpdateManyWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoiceCreateManyPaymentdetailsInput = {
    id?: number
    clientId: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    userId: number
    isDeleted?: boolean
  }

  export type invoiceUpdateWithoutPaymentdetailsInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    client?: clientUpdateOneRequiredWithoutInvoiceNestedInput
    user?: userUpdateOneRequiredWithoutInvoiceNestedInput
    invoicedetail?: invoicedetailUpdateManyWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateWithoutPaymentdetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    invoicedetail?: invoicedetailUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateManyWithoutPaymentdetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type paymentdetailsCreateManyPaymentoptionsInput = {
    id?: number
    userId: number
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
  }

  export type paymentdetailsUpdateWithoutPaymentoptionsInput = {
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPaymentdetailsNestedInput
    invoice?: invoiceUpdateManyWithoutPaymentdetailsNestedInput
  }

  export type paymentdetailsUncheckedUpdateWithoutPaymentoptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoiceUncheckedUpdateManyWithoutPaymentdetailsNestedInput
  }

  export type paymentdetailsUncheckedUpdateManyWithoutPaymentoptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientCreateManyClientpaymentInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    userId: number
  }

  export type clientUpdateWithoutClientpaymentInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutClientNestedInput
    invoice?: invoiceUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutClientpaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    invoice?: invoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateManyWithoutClientpaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type invoicedetailCreateManyProductInput = {
    id?: number
    invoiceId: number
    qty: number
    priceUnit: number
    priceTotal: number
    createdAt?: Date | string
  }

  export type invoicedetailUpdateWithoutProductInput = {
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoiceUpdateOneRequiredWithoutInvoicedetailNestedInput
  }

  export type invoicedetailUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicedetailUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    priceUnit?: IntFieldUpdateOperationsInput | number
    priceTotal?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientCreateManyUserInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    createdAt?: Date | string
    clientCode: string
    payId: number
  }

  export type invoiceCreateManyUserInput = {
    id?: number
    clientId: number
    invoiceCode: string
    invoiceDate: Date | string
    nextInvoiceDate: Date | string
    invoiceStatus: $Enums.invoice_invoiceStatus
    totalAmount: number
    recurringDays: number
    createdAt?: Date | string
    subTotal: number
    paymentId: number
    isDeleted?: boolean
  }

  export type paymentdetailsCreateManyUserInput = {
    id?: number
    paymentOptId: number
    paymentCode: string
    bankAccount?: string | null
    accountNumber?: string | null
    accountName?: string | null
    createdAt?: Date | string
  }

  export type productCreateManyUserInput = {
    id?: number
    productCode: string
    name: string
    description: string
    price: number
    isDeleted?: boolean
    createdAt?: Date | string
    categoryId: number
  }

  export type userprofileCreateManyUserInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    profilePicture?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    isCreated?: boolean
  }

  export type clientUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    invoice?: invoiceUpdateManyWithoutClientNestedInput
    clientpayment?: clientpaymentUpdateOneRequiredWithoutClientNestedInput
  }

  export type clientUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    payId?: IntFieldUpdateOperationsInput | number
    invoice?: invoiceUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientCode?: StringFieldUpdateOperationsInput | string
    payId?: IntFieldUpdateOperationsInput | number
  }

  export type invoiceUpdateWithoutUserInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    client?: clientUpdateOneRequiredWithoutInvoiceNestedInput
    paymentdetails?: paymentdetailsUpdateOneRequiredWithoutInvoiceNestedInput
    invoicedetail?: invoicedetailUpdateManyWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    invoicedetail?: invoicedetailUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoiceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    invoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextInvoiceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceStatus?: Enuminvoice_invoiceStatusFieldUpdateOperationsInput | $Enums.invoice_invoiceStatus
    totalAmount?: IntFieldUpdateOperationsInput | number
    recurringDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTotal?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type paymentdetailsUpdateWithoutUserInput = {
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentoptions?: paymentoptionsUpdateOneRequiredWithoutPaymentdetailsNestedInput
    invoice?: invoiceUpdateManyWithoutPaymentdetailsNestedInput
  }

  export type paymentdetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentOptId?: IntFieldUpdateOperationsInput | number
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoiceUncheckedUpdateManyWithoutPaymentdetailsNestedInput
  }

  export type paymentdetailsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentOptId?: IntFieldUpdateOperationsInput | number
    paymentCode?: StringFieldUpdateOperationsInput | string
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    accountName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUpdateWithoutUserInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoicedetail?: invoicedetailUpdateManyWithoutProductNestedInput
    category?: categoryUpdateOneRequiredWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    invoicedetail?: invoicedetailUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type userprofileUpdateWithoutUserInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCreated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userprofileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCreated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userprofileUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isCreated?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceCountOutputTypeDefaultArgs instead
     */
    export type InvoiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentdetailsCountOutputTypeDefaultArgs instead
     */
    export type PaymentdetailsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentdetailsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentoptionsCountOutputTypeDefaultArgs instead
     */
    export type PaymentoptionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentoptionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientpaymentCountOutputTypeDefaultArgs instead
     */
    export type ClientpaymentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientpaymentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoryDefaultArgs instead
     */
    export type categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clientDefaultArgs instead
     */
    export type clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use invoiceDefaultArgs instead
     */
    export type invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = invoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use invoicedetailDefaultArgs instead
     */
    export type invoicedetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = invoicedetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use paymentdetailsDefaultArgs instead
     */
    export type paymentdetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = paymentdetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use paymentoptionsDefaultArgs instead
     */
    export type paymentoptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = paymentoptionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clientpaymentDefaultArgs instead
     */
    export type clientpaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clientpaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productDefaultArgs instead
     */
    export type productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userprofileDefaultArgs instead
     */
    export type userprofileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userprofileDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
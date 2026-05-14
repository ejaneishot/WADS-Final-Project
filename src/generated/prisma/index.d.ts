
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model UserSkill
 * 
 */
export type UserSkill = $Result.DefaultSelection<Prisma.$UserSkillPayload>
/**
 * Model Career
 * 
 */
export type Career = $Result.DefaultSelection<Prisma.$CareerPayload>
/**
 * Model UserCareerProgress
 * Per-user checklist state for career milestone steps (see /api/careers).
 */
export type UserCareerProgress = $Result.DefaultSelection<Prisma.$UserCareerProgressPayload>
/**
 * Model Roadmap
 * 
 */
export type Roadmap = $Result.DefaultSelection<Prisma.$RoadmapPayload>
/**
 * Model RoadmapNode
 * 
 */
export type RoadmapNode = $Result.DefaultSelection<Prisma.$RoadmapNodePayload>
/**
 * Model RoadmapEdge
 * 
 */
export type RoadmapEdge = $Result.DefaultSelection<Prisma.$RoadmapEdgePayload>
/**
 * Model QuizSection
 * 
 */
export type QuizSection = $Result.DefaultSelection<Prisma.$QuizSectionPayload>
/**
 * Model QuizQuestion
 * 
 */
export type QuizQuestion = $Result.DefaultSelection<Prisma.$QuizQuestionPayload>
/**
 * Model QuizOption
 * 
 */
export type QuizOption = $Result.DefaultSelection<Prisma.$QuizOptionPayload>
/**
 * Model AssessmentAttempt
 * 
 */
export type AssessmentAttempt = $Result.DefaultSelection<Prisma.$AssessmentAttemptPayload>
/**
 * Model AssessmentAnswer
 * 
 */
export type AssessmentAnswer = $Result.DefaultSelection<Prisma.$AssessmentAnswerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  student: 'student',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const QuestionType: {
  SINGLE_CHOICE: 'SINGLE_CHOICE'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSkill`: Exposes CRUD operations for the **UserSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSkills
    * const userSkills = await prisma.userSkill.findMany()
    * ```
    */
  get userSkill(): Prisma.UserSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **Career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.CareerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCareerProgress`: Exposes CRUD operations for the **UserCareerProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCareerProgresses
    * const userCareerProgresses = await prisma.userCareerProgress.findMany()
    * ```
    */
  get userCareerProgress(): Prisma.UserCareerProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roadmap`: Exposes CRUD operations for the **Roadmap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roadmaps
    * const roadmaps = await prisma.roadmap.findMany()
    * ```
    */
  get roadmap(): Prisma.RoadmapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roadmapNode`: Exposes CRUD operations for the **RoadmapNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoadmapNodes
    * const roadmapNodes = await prisma.roadmapNode.findMany()
    * ```
    */
  get roadmapNode(): Prisma.RoadmapNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roadmapEdge`: Exposes CRUD operations for the **RoadmapEdge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoadmapEdges
    * const roadmapEdges = await prisma.roadmapEdge.findMany()
    * ```
    */
  get roadmapEdge(): Prisma.RoadmapEdgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizSection`: Exposes CRUD operations for the **QuizSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizSections
    * const quizSections = await prisma.quizSection.findMany()
    * ```
    */
  get quizSection(): Prisma.QuizSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizQuestion`: Exposes CRUD operations for the **QuizQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizQuestions
    * const quizQuestions = await prisma.quizQuestion.findMany()
    * ```
    */
  get quizQuestion(): Prisma.QuizQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizOption`: Exposes CRUD operations for the **QuizOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizOptions
    * const quizOptions = await prisma.quizOption.findMany()
    * ```
    */
  get quizOption(): Prisma.QuizOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessmentAttempt`: Exposes CRUD operations for the **AssessmentAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentAttempts
    * const assessmentAttempts = await prisma.assessmentAttempt.findMany()
    * ```
    */
  get assessmentAttempt(): Prisma.AssessmentAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessmentAnswer`: Exposes CRUD operations for the **AssessmentAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentAnswers
    * const assessmentAnswers = await prisma.assessmentAnswer.findMany()
    * ```
    */
  get assessmentAnswer(): Prisma.AssessmentAnswerDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Profile: 'Profile',
    Skill: 'Skill',
    UserSkill: 'UserSkill',
    Career: 'Career',
    UserCareerProgress: 'UserCareerProgress',
    Roadmap: 'Roadmap',
    RoadmapNode: 'RoadmapNode',
    RoadmapEdge: 'RoadmapEdge',
    QuizSection: 'QuizSection',
    QuizQuestion: 'QuizQuestion',
    QuizOption: 'QuizOption',
    AssessmentAttempt: 'AssessmentAttempt',
    AssessmentAnswer: 'AssessmentAnswer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "skill" | "userSkill" | "career" | "userCareerProgress" | "roadmap" | "roadmapNode" | "roadmapEdge" | "quizSection" | "quizQuestion" | "quizOption" | "assessmentAttempt" | "assessmentAnswer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      UserSkill: {
        payload: Prisma.$UserSkillPayload<ExtArgs>
        fields: Prisma.UserSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findFirst: {
            args: Prisma.UserSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          findMany: {
            args: Prisma.UserSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          create: {
            args: Prisma.UserSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          createMany: {
            args: Prisma.UserSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          delete: {
            args: Prisma.UserSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          update: {
            args: Prisma.UserSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          deleteMany: {
            args: Prisma.UserSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>[]
          }
          upsert: {
            args: Prisma.UserSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSkillPayload>
          }
          aggregate: {
            args: Prisma.UserSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSkill>
          }
          groupBy: {
            args: Prisma.UserSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSkillCountArgs<ExtArgs>
            result: $Utils.Optional<UserSkillCountAggregateOutputType> | number
          }
        }
      }
      Career: {
        payload: Prisma.$CareerPayload<ExtArgs>
        fields: Prisma.CareerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findFirst: {
            args: Prisma.CareerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          findMany: {
            args: Prisma.CareerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          create: {
            args: Prisma.CareerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          createMany: {
            args: Prisma.CareerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          delete: {
            args: Prisma.CareerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          update: {
            args: Prisma.CareerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          deleteMany: {
            args: Prisma.CareerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>[]
          }
          upsert: {
            args: Prisma.CareerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.CareerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerCountArgs<ExtArgs>
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      UserCareerProgress: {
        payload: Prisma.$UserCareerProgressPayload<ExtArgs>
        fields: Prisma.UserCareerProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCareerProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCareerProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>
          }
          findFirst: {
            args: Prisma.UserCareerProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCareerProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>
          }
          findMany: {
            args: Prisma.UserCareerProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>[]
          }
          create: {
            args: Prisma.UserCareerProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>
          }
          createMany: {
            args: Prisma.UserCareerProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCareerProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>[]
          }
          delete: {
            args: Prisma.UserCareerProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>
          }
          update: {
            args: Prisma.UserCareerProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserCareerProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCareerProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCareerProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>[]
          }
          upsert: {
            args: Prisma.UserCareerProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCareerProgressPayload>
          }
          aggregate: {
            args: Prisma.UserCareerProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCareerProgress>
          }
          groupBy: {
            args: Prisma.UserCareerProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCareerProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCareerProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserCareerProgressCountAggregateOutputType> | number
          }
        }
      }
      Roadmap: {
        payload: Prisma.$RoadmapPayload<ExtArgs>
        fields: Prisma.RoadmapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadmapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadmapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          findFirst: {
            args: Prisma.RoadmapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadmapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          findMany: {
            args: Prisma.RoadmapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>[]
          }
          create: {
            args: Prisma.RoadmapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          createMany: {
            args: Prisma.RoadmapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoadmapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>[]
          }
          delete: {
            args: Prisma.RoadmapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          update: {
            args: Prisma.RoadmapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          deleteMany: {
            args: Prisma.RoadmapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoadmapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoadmapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>[]
          }
          upsert: {
            args: Prisma.RoadmapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapPayload>
          }
          aggregate: {
            args: Prisma.RoadmapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoadmap>
          }
          groupBy: {
            args: Prisma.RoadmapGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoadmapGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadmapCountArgs<ExtArgs>
            result: $Utils.Optional<RoadmapCountAggregateOutputType> | number
          }
        }
      }
      RoadmapNode: {
        payload: Prisma.$RoadmapNodePayload<ExtArgs>
        fields: Prisma.RoadmapNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadmapNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadmapNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>
          }
          findFirst: {
            args: Prisma.RoadmapNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadmapNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>
          }
          findMany: {
            args: Prisma.RoadmapNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>[]
          }
          create: {
            args: Prisma.RoadmapNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>
          }
          createMany: {
            args: Prisma.RoadmapNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoadmapNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>[]
          }
          delete: {
            args: Prisma.RoadmapNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>
          }
          update: {
            args: Prisma.RoadmapNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>
          }
          deleteMany: {
            args: Prisma.RoadmapNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoadmapNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoadmapNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>[]
          }
          upsert: {
            args: Prisma.RoadmapNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapNodePayload>
          }
          aggregate: {
            args: Prisma.RoadmapNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoadmapNode>
          }
          groupBy: {
            args: Prisma.RoadmapNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoadmapNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadmapNodeCountArgs<ExtArgs>
            result: $Utils.Optional<RoadmapNodeCountAggregateOutputType> | number
          }
        }
      }
      RoadmapEdge: {
        payload: Prisma.$RoadmapEdgePayload<ExtArgs>
        fields: Prisma.RoadmapEdgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadmapEdgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadmapEdgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>
          }
          findFirst: {
            args: Prisma.RoadmapEdgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadmapEdgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>
          }
          findMany: {
            args: Prisma.RoadmapEdgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>[]
          }
          create: {
            args: Prisma.RoadmapEdgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>
          }
          createMany: {
            args: Prisma.RoadmapEdgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoadmapEdgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>[]
          }
          delete: {
            args: Prisma.RoadmapEdgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>
          }
          update: {
            args: Prisma.RoadmapEdgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>
          }
          deleteMany: {
            args: Prisma.RoadmapEdgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoadmapEdgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoadmapEdgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>[]
          }
          upsert: {
            args: Prisma.RoadmapEdgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapEdgePayload>
          }
          aggregate: {
            args: Prisma.RoadmapEdgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoadmapEdge>
          }
          groupBy: {
            args: Prisma.RoadmapEdgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoadmapEdgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadmapEdgeCountArgs<ExtArgs>
            result: $Utils.Optional<RoadmapEdgeCountAggregateOutputType> | number
          }
        }
      }
      QuizSection: {
        payload: Prisma.$QuizSectionPayload<ExtArgs>
        fields: Prisma.QuizSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>
          }
          findFirst: {
            args: Prisma.QuizSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>
          }
          findMany: {
            args: Prisma.QuizSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>[]
          }
          create: {
            args: Prisma.QuizSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>
          }
          createMany: {
            args: Prisma.QuizSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>[]
          }
          delete: {
            args: Prisma.QuizSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>
          }
          update: {
            args: Prisma.QuizSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>
          }
          deleteMany: {
            args: Prisma.QuizSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>[]
          }
          upsert: {
            args: Prisma.QuizSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSectionPayload>
          }
          aggregate: {
            args: Prisma.QuizSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizSection>
          }
          groupBy: {
            args: Prisma.QuizSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizSectionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizSectionCountAggregateOutputType> | number
          }
        }
      }
      QuizQuestion: {
        payload: Prisma.$QuizQuestionPayload<ExtArgs>
        fields: Prisma.QuizQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findFirst: {
            args: Prisma.QuizQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          findMany: {
            args: Prisma.QuizQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          create: {
            args: Prisma.QuizQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          createMany: {
            args: Prisma.QuizQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          delete: {
            args: Prisma.QuizQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          update: {
            args: Prisma.QuizQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuizQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuizQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionPayload>
          }
          aggregate: {
            args: Prisma.QuizQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizQuestion>
          }
          groupBy: {
            args: Prisma.QuizQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionCountAggregateOutputType> | number
          }
        }
      }
      QuizOption: {
        payload: Prisma.$QuizOptionPayload<ExtArgs>
        fields: Prisma.QuizOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          findFirst: {
            args: Prisma.QuizOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          findMany: {
            args: Prisma.QuizOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>[]
          }
          create: {
            args: Prisma.QuizOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          createMany: {
            args: Prisma.QuizOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>[]
          }
          delete: {
            args: Prisma.QuizOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          update: {
            args: Prisma.QuizOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          deleteMany: {
            args: Prisma.QuizOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>[]
          }
          upsert: {
            args: Prisma.QuizOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizOptionPayload>
          }
          aggregate: {
            args: Prisma.QuizOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizOption>
          }
          groupBy: {
            args: Prisma.QuizOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizOptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizOptionCountAggregateOutputType> | number
          }
        }
      }
      AssessmentAttempt: {
        payload: Prisma.$AssessmentAttemptPayload<ExtArgs>
        fields: Prisma.AssessmentAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          findFirst: {
            args: Prisma.AssessmentAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          findMany: {
            args: Prisma.AssessmentAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>[]
          }
          create: {
            args: Prisma.AssessmentAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          createMany: {
            args: Prisma.AssessmentAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>[]
          }
          delete: {
            args: Prisma.AssessmentAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          update: {
            args: Prisma.AssessmentAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAttemptPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentAttempt>
          }
          groupBy: {
            args: Prisma.AssessmentAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentAttemptCountAggregateOutputType> | number
          }
        }
      }
      AssessmentAnswer: {
        payload: Prisma.$AssessmentAnswerPayload<ExtArgs>
        fields: Prisma.AssessmentAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>
          }
          findFirst: {
            args: Prisma.AssessmentAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>
          }
          findMany: {
            args: Prisma.AssessmentAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>[]
          }
          create: {
            args: Prisma.AssessmentAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>
          }
          createMany: {
            args: Prisma.AssessmentAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>[]
          }
          delete: {
            args: Prisma.AssessmentAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>
          }
          update: {
            args: Prisma.AssessmentAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>[]
          }
          upsert: {
            args: Prisma.AssessmentAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAnswerPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentAnswer>
          }
          groupBy: {
            args: Prisma.AssessmentAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentAnswerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    skill?: SkillOmit
    userSkill?: UserSkillOmit
    career?: CareerOmit
    userCareerProgress?: UserCareerProgressOmit
    roadmap?: RoadmapOmit
    roadmapNode?: RoadmapNodeOmit
    roadmapEdge?: RoadmapEdgeOmit
    quizSection?: QuizSectionOmit
    quizQuestion?: QuizQuestionOmit
    quizOption?: QuizOptionOmit
    assessmentAttempt?: AssessmentAttemptOmit
    assessmentAnswer?: AssessmentAnswerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assessmentAttempts: number
    roadmaps: number
    careerProgress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessmentAttempts?: boolean | UserCountOutputTypeCountAssessmentAttemptsArgs
    roadmaps?: boolean | UserCountOutputTypeCountRoadmapsArgs
    careerProgress?: boolean | UserCountOutputTypeCountCareerProgressArgs
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
  export type UserCountOutputTypeCountAssessmentAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoadmapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCareerProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCareerProgressWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    skills: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | ProfileCountOutputTypeCountSkillsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    users: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SkillCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
  }


  /**
   * Count Type CareerCountOutputType
   */

  export type CareerCountOutputType = {
    userProgress: number
  }

  export type CareerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | CareerCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerCountOutputType
     */
    select?: CareerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareerCountOutputType without action
   */
  export type CareerCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCareerProgressWhereInput
  }


  /**
   * Count Type RoadmapCountOutputType
   */

  export type RoadmapCountOutputType = {
    nodes: number
  }

  export type RoadmapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | RoadmapCountOutputTypeCountNodesArgs
  }

  // Custom InputTypes
  /**
   * RoadmapCountOutputType without action
   */
  export type RoadmapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapCountOutputType
     */
    select?: RoadmapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoadmapCountOutputType without action
   */
  export type RoadmapCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapNodeWhereInput
  }


  /**
   * Count Type RoadmapNodeCountOutputType
   */

  export type RoadmapNodeCountOutputType = {
    parents: number
    children: number
  }

  export type RoadmapNodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parents?: boolean | RoadmapNodeCountOutputTypeCountParentsArgs
    children?: boolean | RoadmapNodeCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * RoadmapNodeCountOutputType without action
   */
  export type RoadmapNodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNodeCountOutputType
     */
    select?: RoadmapNodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoadmapNodeCountOutputType without action
   */
  export type RoadmapNodeCountOutputTypeCountParentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapEdgeWhereInput
  }

  /**
   * RoadmapNodeCountOutputType without action
   */
  export type RoadmapNodeCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapEdgeWhereInput
  }


  /**
   * Count Type QuizSectionCountOutputType
   */

  export type QuizSectionCountOutputType = {
    questions: number
  }

  export type QuizSectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizSectionCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuizSectionCountOutputType without action
   */
  export type QuizSectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSectionCountOutputType
     */
    select?: QuizSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizSectionCountOutputType without action
   */
  export type QuizSectionCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
  }


  /**
   * Count Type QuizQuestionCountOutputType
   */

  export type QuizQuestionCountOutputType = {
    options: number
    assessmentAnswers: number
  }

  export type QuizQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuizQuestionCountOutputTypeCountOptionsArgs
    assessmentAnswers?: boolean | QuizQuestionCountOutputTypeCountAssessmentAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionCountOutputType
     */
    select?: QuizQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizOptionWhereInput
  }

  /**
   * QuizQuestionCountOutputType without action
   */
  export type QuizQuestionCountOutputTypeCountAssessmentAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAnswerWhereInput
  }


  /**
   * Count Type QuizOptionCountOutputType
   */

  export type QuizOptionCountOutputType = {
    assessmentAnswers: number
  }

  export type QuizOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assessmentAnswers?: boolean | QuizOptionCountOutputTypeCountAssessmentAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuizOptionCountOutputType without action
   */
  export type QuizOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOptionCountOutputType
     */
    select?: QuizOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizOptionCountOutputType without action
   */
  export type QuizOptionCountOutputTypeCountAssessmentAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAnswerWhereInput
  }


  /**
   * Count Type AssessmentAttemptCountOutputType
   */

  export type AssessmentAttemptCountOutputType = {
    answers: number
  }

  export type AssessmentAttemptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | AssessmentAttemptCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * AssessmentAttemptCountOutputType without action
   */
  export type AssessmentAttemptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttemptCountOutputType
     */
    select?: AssessmentAttemptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentAttemptCountOutputType without action
   */
  export type AssessmentAttemptCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    assessmentAttempts?: boolean | User$assessmentAttemptsArgs<ExtArgs>
    roadmaps?: boolean | User$roadmapsArgs<ExtArgs>
    careerProgress?: boolean | User$careerProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    assessmentAttempts?: boolean | User$assessmentAttemptsArgs<ExtArgs>
    roadmaps?: boolean | User$roadmapsArgs<ExtArgs>
    careerProgress?: boolean | User$careerProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      assessmentAttempts: Prisma.$AssessmentAttemptPayload<ExtArgs>[]
      roadmaps: Prisma.$RoadmapPayload<ExtArgs>[]
      careerProgress: Prisma.$UserCareerProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assessmentAttempts<T extends User$assessmentAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, User$assessmentAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roadmaps<T extends User$roadmapsArgs<ExtArgs> = {}>(args?: Subset<T, User$roadmapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    careerProgress<T extends User$careerProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$careerProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.assessmentAttempts
   */
  export type User$assessmentAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    where?: AssessmentAttemptWhereInput
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    cursor?: AssessmentAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * User.roadmaps
   */
  export type User$roadmapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    where?: RoadmapWhereInput
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    cursor?: RoadmapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }

  /**
   * User.careerProgress
   */
  export type User$careerProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    where?: UserCareerProgressWhereInput
    orderBy?: UserCareerProgressOrderByWithRelationInput | UserCareerProgressOrderByWithRelationInput[]
    cursor?: UserCareerProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCareerProgressScalarFieldEnum | UserCareerProgressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    semester: number | null
  }

  export type ProfileSumAggregateOutputType = {
    semester: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    major: string | null
    semester: number | null
    gpaRange: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    major: string | null
    semester: number | null
    gpaRange: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    major: number
    semester: number
    gpaRange: number
    interests: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    semester?: true
  }

  export type ProfileSumAggregateInputType = {
    semester?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    major?: true
    semester?: true
    gpaRange?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    major?: true
    semester?: true
    gpaRange?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    major?: true
    semester?: true
    gpaRange?: true
    interests?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    major: string | null
    semester: number | null
    gpaRange: string | null
    interests: string[]
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    major?: boolean
    semester?: boolean
    gpaRange?: boolean
    interests?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skills?: boolean | Profile$skillsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    major?: boolean
    semester?: boolean
    gpaRange?: boolean
    interests?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    major?: boolean
    semester?: boolean
    gpaRange?: boolean
    interests?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    major?: boolean
    semester?: boolean
    gpaRange?: boolean
    interests?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "major" | "semester" | "gpaRange" | "interests" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skills?: boolean | Profile$skillsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skills: Prisma.$UserSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      major: string | null
      semester: number | null
      gpaRange: string | null
      interests: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skills<T extends Profile$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly major: FieldRef<"Profile", 'String'>
    readonly semester: FieldRef<"Profile", 'Int'>
    readonly gpaRange: FieldRef<"Profile", 'String'>
    readonly interests: FieldRef<"Profile", 'String[]'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.skills
   */
  export type Profile$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    category: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    category: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    users?: boolean | Skill$usersArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Skill$usersArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      users: Prisma.$UserSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Skill$usersArgs<ExtArgs> = {}>(args?: Subset<T, Skill$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.users
   */
  export type Skill$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    cursor?: UserSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model UserSkill
   */

  export type AggregateUserSkill = {
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  export type UserSkillAvgAggregateOutputType = {
    level: number | null
  }

  export type UserSkillSumAggregateOutputType = {
    level: number | null
  }

  export type UserSkillMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    skillId: string | null
    level: number | null
  }

  export type UserSkillMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    skillId: string | null
    level: number | null
  }

  export type UserSkillCountAggregateOutputType = {
    id: number
    profileId: number
    skillId: number
    level: number
    _all: number
  }


  export type UserSkillAvgAggregateInputType = {
    level?: true
  }

  export type UserSkillSumAggregateInputType = {
    level?: true
  }

  export type UserSkillMinAggregateInputType = {
    id?: true
    profileId?: true
    skillId?: true
    level?: true
  }

  export type UserSkillMaxAggregateInputType = {
    id?: true
    profileId?: true
    skillId?: true
    level?: true
  }

  export type UserSkillCountAggregateInputType = {
    id?: true
    profileId?: true
    skillId?: true
    level?: true
    _all?: true
  }

  export type UserSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkill to aggregate.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSkills
    **/
    _count?: true | UserSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSkillMaxAggregateInputType
  }

  export type GetUserSkillAggregateType<T extends UserSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSkill[P]>
      : GetScalarType<T[P], AggregateUserSkill[P]>
  }




  export type UserSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSkillWhereInput
    orderBy?: UserSkillOrderByWithAggregationInput | UserSkillOrderByWithAggregationInput[]
    by: UserSkillScalarFieldEnum[] | UserSkillScalarFieldEnum
    having?: UserSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSkillCountAggregateInputType | true
    _avg?: UserSkillAvgAggregateInputType
    _sum?: UserSkillSumAggregateInputType
    _min?: UserSkillMinAggregateInputType
    _max?: UserSkillMaxAggregateInputType
  }

  export type UserSkillGroupByOutputType = {
    id: string
    profileId: string
    skillId: string
    level: number
    _count: UserSkillCountAggregateOutputType | null
    _avg: UserSkillAvgAggregateOutputType | null
    _sum: UserSkillSumAggregateOutputType | null
    _min: UserSkillMinAggregateOutputType | null
    _max: UserSkillMaxAggregateOutputType | null
  }

  type GetUserSkillGroupByPayload<T extends UserSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
            : GetScalarType<T[P], UserSkillGroupByOutputType[P]>
        }
      >
    >


  export type UserSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    skillId?: boolean
    level?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    skillId?: boolean
    level?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    skillId?: boolean
    level?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSkill"]>

  export type UserSkillSelectScalar = {
    id?: boolean
    profileId?: boolean
    skillId?: boolean
    level?: boolean
  }

  export type UserSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "skillId" | "level", ExtArgs["result"]["userSkill"]>
  export type UserSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type UserSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $UserSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSkill"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      skillId: string
      level: number
    }, ExtArgs["result"]["userSkill"]>
    composites: {}
  }

  type UserSkillGetPayload<S extends boolean | null | undefined | UserSkillDefaultArgs> = $Result.GetResult<Prisma.$UserSkillPayload, S>

  type UserSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSkillCountAggregateInputType | true
    }

  export interface UserSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSkill'], meta: { name: 'UserSkill' } }
    /**
     * Find zero or one UserSkill that matches the filter.
     * @param {UserSkillFindUniqueArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSkillFindUniqueArgs>(args: SelectSubset<T, UserSkillFindUniqueArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSkillFindUniqueOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSkillFindFirstArgs>(args?: SelectSubset<T, UserSkillFindFirstArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindFirstOrThrowArgs} args - Arguments to find a UserSkill
     * @example
     * // Get one UserSkill
     * const userSkill = await prisma.userSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSkills
     * const userSkills = await prisma.userSkill.findMany()
     * 
     * // Get first 10 UserSkills
     * const userSkills = await prisma.userSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSkillFindManyArgs>(args?: SelectSubset<T, UserSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSkill.
     * @param {UserSkillCreateArgs} args - Arguments to create a UserSkill.
     * @example
     * // Create one UserSkill
     * const UserSkill = await prisma.userSkill.create({
     *   data: {
     *     // ... data to create a UserSkill
     *   }
     * })
     * 
     */
    create<T extends UserSkillCreateArgs>(args: SelectSubset<T, UserSkillCreateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSkills.
     * @param {UserSkillCreateManyArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSkillCreateManyArgs>(args?: SelectSubset<T, UserSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSkills and returns the data saved in the database.
     * @param {UserSkillCreateManyAndReturnArgs} args - Arguments to create many UserSkills.
     * @example
     * // Create many UserSkills
     * const userSkill = await prisma.userSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSkill.
     * @param {UserSkillDeleteArgs} args - Arguments to delete one UserSkill.
     * @example
     * // Delete one UserSkill
     * const UserSkill = await prisma.userSkill.delete({
     *   where: {
     *     // ... filter to delete one UserSkill
     *   }
     * })
     * 
     */
    delete<T extends UserSkillDeleteArgs>(args: SelectSubset<T, UserSkillDeleteArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSkill.
     * @param {UserSkillUpdateArgs} args - Arguments to update one UserSkill.
     * @example
     * // Update one UserSkill
     * const userSkill = await prisma.userSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSkillUpdateArgs>(args: SelectSubset<T, UserSkillUpdateArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSkills.
     * @param {UserSkillDeleteManyArgs} args - Arguments to filter UserSkills to delete.
     * @example
     * // Delete a few UserSkills
     * const { count } = await prisma.userSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSkillDeleteManyArgs>(args?: SelectSubset<T, UserSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSkillUpdateManyArgs>(args: SelectSubset<T, UserSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSkills and returns the data updated in the database.
     * @param {UserSkillUpdateManyAndReturnArgs} args - Arguments to update many UserSkills.
     * @example
     * // Update many UserSkills
     * const userSkill = await prisma.userSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSkills and only return the `id`
     * const userSkillWithIdOnly = await prisma.userSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSkill.
     * @param {UserSkillUpsertArgs} args - Arguments to update or create a UserSkill.
     * @example
     * // Update or create a UserSkill
     * const userSkill = await prisma.userSkill.upsert({
     *   create: {
     *     // ... data to create a UserSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSkill we want to update
     *   }
     * })
     */
    upsert<T extends UserSkillUpsertArgs>(args: SelectSubset<T, UserSkillUpsertArgs<ExtArgs>>): Prisma__UserSkillClient<$Result.GetResult<Prisma.$UserSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillCountArgs} args - Arguments to filter UserSkills to count.
     * @example
     * // Count the number of UserSkills
     * const count = await prisma.userSkill.count({
     *   where: {
     *     // ... the filter for the UserSkills we want to count
     *   }
     * })
    **/
    count<T extends UserSkillCountArgs>(
      args?: Subset<T, UserSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSkillAggregateArgs>(args: Subset<T, UserSkillAggregateArgs>): Prisma.PrismaPromise<GetUserSkillAggregateType<T>>

    /**
     * Group by UserSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSkillGroupByArgs} args - Group by arguments.
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
      T extends UserSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSkillGroupByArgs['orderBy'] }
        : { orderBy?: UserSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSkill model
   */
  readonly fields: UserSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSkill model
   */
  interface UserSkillFieldRefs {
    readonly id: FieldRef<"UserSkill", 'String'>
    readonly profileId: FieldRef<"UserSkill", 'String'>
    readonly skillId: FieldRef<"UserSkill", 'String'>
    readonly level: FieldRef<"UserSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserSkill findUnique
   */
  export type UserSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findUniqueOrThrow
   */
  export type UserSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill findFirst
   */
  export type UserSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findFirstOrThrow
   */
  export type UserSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkill to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill findMany
   */
  export type UserSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter, which UserSkills to fetch.
     */
    where?: UserSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSkills to fetch.
     */
    orderBy?: UserSkillOrderByWithRelationInput | UserSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSkills.
     */
    cursor?: UserSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSkills.
     */
    distinct?: UserSkillScalarFieldEnum | UserSkillScalarFieldEnum[]
  }

  /**
   * UserSkill create
   */
  export type UserSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSkill.
     */
    data: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
  }

  /**
   * UserSkill createMany
   */
  export type UserSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSkill createManyAndReturn
   */
  export type UserSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to create many UserSkills.
     */
    data: UserSkillCreateManyInput | UserSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill update
   */
  export type UserSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSkill.
     */
    data: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
    /**
     * Choose, which UserSkill to update.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill updateMany
   */
  export type UserSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
  }

  /**
   * UserSkill updateManyAndReturn
   */
  export type UserSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * The data used to update UserSkills.
     */
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyInput>
    /**
     * Filter which UserSkills to update
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSkill upsert
   */
  export type UserSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSkill to update in case it exists.
     */
    where: UserSkillWhereUniqueInput
    /**
     * In case the UserSkill found by the `where` argument doesn't exist, create a new UserSkill with this data.
     */
    create: XOR<UserSkillCreateInput, UserSkillUncheckedCreateInput>
    /**
     * In case the UserSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSkillUpdateInput, UserSkillUncheckedUpdateInput>
  }

  /**
   * UserSkill delete
   */
  export type UserSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
    /**
     * Filter which UserSkill to delete.
     */
    where: UserSkillWhereUniqueInput
  }

  /**
   * UserSkill deleteMany
   */
  export type UserSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSkills to delete
     */
    where?: UserSkillWhereInput
    /**
     * Limit how many UserSkills to delete.
     */
    limit?: number
  }

  /**
   * UserSkill without action
   */
  export type UserSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSkill
     */
    select?: UserSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSkill
     */
    omit?: UserSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSkillInclude<ExtArgs> | null
  }


  /**
   * Model Career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    industry: string | null
    description: string | null
    icon: string | null
    color: string | null
    gradient: string | null
    border: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    industry: string | null
    description: string | null
    icon: string | null
    color: string | null
    gradient: string | null
    border: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    industry: number
    description: number
    icon: number
    color: number
    gradient: number
    border: number
    milestones: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CareerMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    industry?: true
    description?: true
    icon?: true
    color?: true
    gradient?: true
    border?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    industry?: true
    description?: true
    icon?: true
    color?: true
    gradient?: true
    border?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    industry?: true
    description?: true
    icon?: true
    color?: true
    gradient?: true
    border?: true
    milestones?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Career to aggregate.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type CareerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerWhereInput
    orderBy?: CareerOrderByWithAggregationInput | CareerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: CareerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id: string
    slug: string
    title: string
    industry: string
    description: string
    icon: string | null
    color: string | null
    gradient: string | null
    border: string | null
    milestones: string[]
    createdAt: Date
    updatedAt: Date
    _count: CareerCountAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends CareerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type CareerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    industry?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    gradient?: boolean
    border?: boolean
    milestones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProgress?: boolean | Career$userProgressArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["career"]>

  export type CareerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    industry?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    gradient?: boolean
    border?: boolean
    milestones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    industry?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    gradient?: boolean
    border?: boolean
    milestones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["career"]>

  export type CareerSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    industry?: boolean
    description?: boolean
    icon?: boolean
    color?: boolean
    gradient?: boolean
    border?: boolean
    milestones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CareerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "industry" | "description" | "icon" | "color" | "gradient" | "border" | "milestones" | "createdAt" | "updatedAt", ExtArgs["result"]["career"]>
  export type CareerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | Career$userProgressArgs<ExtArgs>
    _count?: boolean | CareerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CareerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CareerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Career"
    objects: {
      userProgress: Prisma.$UserCareerProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      industry: string
      description: string
      icon: string | null
      color: string | null
      gradient: string | null
      border: string | null
      milestones: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["career"]>
    composites: {}
  }

  type CareerGetPayload<S extends boolean | null | undefined | CareerDefaultArgs> = $Result.GetResult<Prisma.$CareerPayload, S>

  type CareerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface CareerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Career'], meta: { name: 'Career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {CareerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerFindUniqueArgs>(args: SelectSubset<T, CareerFindUniqueArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerFindFirstArgs>(args?: SelectSubset<T, CareerFindFirstArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerWithIdOnly = await prisma.career.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerFindManyArgs>(args?: SelectSubset<T, CareerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career.
     * @param {CareerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
     */
    create<T extends CareerCreateArgs>(args: SelectSubset<T, CareerCreateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {CareerCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerCreateManyArgs>(args?: SelectSubset<T, CareerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Careers and returns the data saved in the database.
     * @param {CareerCreateManyAndReturnArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareerCreateManyAndReturnArgs>(args?: SelectSubset<T, CareerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Career.
     * @param {CareerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
     */
    delete<T extends CareerDeleteArgs>(args: SelectSubset<T, CareerDeleteArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career.
     * @param {CareerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerUpdateArgs>(args: SelectSubset<T, CareerUpdateArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {CareerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerDeleteManyArgs>(args?: SelectSubset<T, CareerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerUpdateManyArgs>(args: SelectSubset<T, CareerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers and returns the data updated in the database.
     * @param {CareerUpdateManyAndReturnArgs} args - Arguments to update many Careers.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Careers and only return the `id`
     * const careerWithIdOnly = await prisma.career.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareerUpdateManyAndReturnArgs>(args: SelectSubset<T, CareerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Career.
     * @param {CareerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
     */
    upsert<T extends CareerUpsertArgs>(args: SelectSubset<T, CareerUpsertArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends CareerCountArgs>(
      args?: Subset<T, CareerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerGroupByArgs} args - Group by arguments.
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
      T extends CareerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerGroupByArgs['orderBy'] }
        : { orderBy?: CareerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CareerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Career model
   */
  readonly fields: CareerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProgress<T extends Career$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, Career$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Career model
   */
  interface CareerFieldRefs {
    readonly id: FieldRef<"Career", 'String'>
    readonly slug: FieldRef<"Career", 'String'>
    readonly title: FieldRef<"Career", 'String'>
    readonly industry: FieldRef<"Career", 'String'>
    readonly description: FieldRef<"Career", 'String'>
    readonly icon: FieldRef<"Career", 'String'>
    readonly color: FieldRef<"Career", 'String'>
    readonly gradient: FieldRef<"Career", 'String'>
    readonly border: FieldRef<"Career", 'String'>
    readonly milestones: FieldRef<"Career", 'String[]'>
    readonly createdAt: FieldRef<"Career", 'DateTime'>
    readonly updatedAt: FieldRef<"Career", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Career findUnique
   */
  export type CareerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findUniqueOrThrow
   */
  export type CareerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career findFirst
   */
  export type CareerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findFirstOrThrow
   */
  export type CareerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Career to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career findMany
   */
  export type CareerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter, which Careers to fetch.
     */
    where?: CareerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Careers to fetch.
     */
    orderBy?: CareerOrderByWithRelationInput | CareerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Careers.
     */
    cursor?: CareerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * Career create
   */
  export type CareerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to create a Career.
     */
    data: XOR<CareerCreateInput, CareerUncheckedCreateInput>
  }

  /**
   * Career createMany
   */
  export type CareerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career createManyAndReturn
   */
  export type CareerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to create many Careers.
     */
    data: CareerCreateManyInput | CareerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Career update
   */
  export type CareerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The data needed to update a Career.
     */
    data: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
    /**
     * Choose, which Career to update.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career updateMany
   */
  export type CareerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career updateManyAndReturn
   */
  export type CareerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * The data used to update Careers.
     */
    data: XOR<CareerUpdateManyMutationInput, CareerUncheckedUpdateManyInput>
    /**
     * Filter which Careers to update
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to update.
     */
    limit?: number
  }

  /**
   * Career upsert
   */
  export type CareerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * The filter to search for the Career to update in case it exists.
     */
    where: CareerWhereUniqueInput
    /**
     * In case the Career found by the `where` argument doesn't exist, create a new Career with this data.
     */
    create: XOR<CareerCreateInput, CareerUncheckedCreateInput>
    /**
     * In case the Career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerUpdateInput, CareerUncheckedUpdateInput>
  }

  /**
   * Career delete
   */
  export type CareerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
    /**
     * Filter which Career to delete.
     */
    where: CareerWhereUniqueInput
  }

  /**
   * Career deleteMany
   */
  export type CareerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Careers to delete
     */
    where?: CareerWhereInput
    /**
     * Limit how many Careers to delete.
     */
    limit?: number
  }

  /**
   * Career.userProgress
   */
  export type Career$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    where?: UserCareerProgressWhereInput
    orderBy?: UserCareerProgressOrderByWithRelationInput | UserCareerProgressOrderByWithRelationInput[]
    cursor?: UserCareerProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCareerProgressScalarFieldEnum | UserCareerProgressScalarFieldEnum[]
  }

  /**
   * Career without action
   */
  export type CareerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Career
     */
    select?: CareerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Career
     */
    omit?: CareerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareerInclude<ExtArgs> | null
  }


  /**
   * Model UserCareerProgress
   */

  export type AggregateUserCareerProgress = {
    _count: UserCareerProgressCountAggregateOutputType | null
    _avg: UserCareerProgressAvgAggregateOutputType | null
    _sum: UserCareerProgressSumAggregateOutputType | null
    _min: UserCareerProgressMinAggregateOutputType | null
    _max: UserCareerProgressMaxAggregateOutputType | null
  }

  export type UserCareerProgressAvgAggregateOutputType = {
    completedMilestones: number | null
  }

  export type UserCareerProgressSumAggregateOutputType = {
    completedMilestones: number[]
  }

  export type UserCareerProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    careerId: string | null
    updatedAt: Date | null
  }

  export type UserCareerProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    careerId: string | null
    updatedAt: Date | null
  }

  export type UserCareerProgressCountAggregateOutputType = {
    id: number
    userId: number
    careerId: number
    completedMilestones: number
    updatedAt: number
    _all: number
  }


  export type UserCareerProgressAvgAggregateInputType = {
    completedMilestones?: true
  }

  export type UserCareerProgressSumAggregateInputType = {
    completedMilestones?: true
  }

  export type UserCareerProgressMinAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    updatedAt?: true
  }

  export type UserCareerProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    updatedAt?: true
  }

  export type UserCareerProgressCountAggregateInputType = {
    id?: true
    userId?: true
    careerId?: true
    completedMilestones?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCareerProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCareerProgress to aggregate.
     */
    where?: UserCareerProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCareerProgresses to fetch.
     */
    orderBy?: UserCareerProgressOrderByWithRelationInput | UserCareerProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCareerProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCareerProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCareerProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCareerProgresses
    **/
    _count?: true | UserCareerProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCareerProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCareerProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCareerProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCareerProgressMaxAggregateInputType
  }

  export type GetUserCareerProgressAggregateType<T extends UserCareerProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCareerProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCareerProgress[P]>
      : GetScalarType<T[P], AggregateUserCareerProgress[P]>
  }




  export type UserCareerProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCareerProgressWhereInput
    orderBy?: UserCareerProgressOrderByWithAggregationInput | UserCareerProgressOrderByWithAggregationInput[]
    by: UserCareerProgressScalarFieldEnum[] | UserCareerProgressScalarFieldEnum
    having?: UserCareerProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCareerProgressCountAggregateInputType | true
    _avg?: UserCareerProgressAvgAggregateInputType
    _sum?: UserCareerProgressSumAggregateInputType
    _min?: UserCareerProgressMinAggregateInputType
    _max?: UserCareerProgressMaxAggregateInputType
  }

  export type UserCareerProgressGroupByOutputType = {
    id: string
    userId: string
    careerId: string
    completedMilestones: number[]
    updatedAt: Date
    _count: UserCareerProgressCountAggregateOutputType | null
    _avg: UserCareerProgressAvgAggregateOutputType | null
    _sum: UserCareerProgressSumAggregateOutputType | null
    _min: UserCareerProgressMinAggregateOutputType | null
    _max: UserCareerProgressMaxAggregateOutputType | null
  }

  type GetUserCareerProgressGroupByPayload<T extends UserCareerProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCareerProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCareerProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCareerProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserCareerProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserCareerProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    completedMilestones?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCareerProgress"]>

  export type UserCareerProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    completedMilestones?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCareerProgress"]>

  export type UserCareerProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careerId?: boolean
    completedMilestones?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCareerProgress"]>

  export type UserCareerProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    careerId?: boolean
    completedMilestones?: boolean
    updatedAt?: boolean
  }

  export type UserCareerProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "careerId" | "completedMilestones" | "updatedAt", ExtArgs["result"]["userCareerProgress"]>
  export type UserCareerProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }
  export type UserCareerProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }
  export type UserCareerProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    career?: boolean | CareerDefaultArgs<ExtArgs>
  }

  export type $UserCareerProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCareerProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      career: Prisma.$CareerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      careerId: string
      completedMilestones: number[]
      updatedAt: Date
    }, ExtArgs["result"]["userCareerProgress"]>
    composites: {}
  }

  type UserCareerProgressGetPayload<S extends boolean | null | undefined | UserCareerProgressDefaultArgs> = $Result.GetResult<Prisma.$UserCareerProgressPayload, S>

  type UserCareerProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCareerProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCareerProgressCountAggregateInputType | true
    }

  export interface UserCareerProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCareerProgress'], meta: { name: 'UserCareerProgress' } }
    /**
     * Find zero or one UserCareerProgress that matches the filter.
     * @param {UserCareerProgressFindUniqueArgs} args - Arguments to find a UserCareerProgress
     * @example
     * // Get one UserCareerProgress
     * const userCareerProgress = await prisma.userCareerProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCareerProgressFindUniqueArgs>(args: SelectSubset<T, UserCareerProgressFindUniqueArgs<ExtArgs>>): Prisma__UserCareerProgressClient<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCareerProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCareerProgressFindUniqueOrThrowArgs} args - Arguments to find a UserCareerProgress
     * @example
     * // Get one UserCareerProgress
     * const userCareerProgress = await prisma.userCareerProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCareerProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCareerProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCareerProgressClient<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCareerProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProgressFindFirstArgs} args - Arguments to find a UserCareerProgress
     * @example
     * // Get one UserCareerProgress
     * const userCareerProgress = await prisma.userCareerProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCareerProgressFindFirstArgs>(args?: SelectSubset<T, UserCareerProgressFindFirstArgs<ExtArgs>>): Prisma__UserCareerProgressClient<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCareerProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProgressFindFirstOrThrowArgs} args - Arguments to find a UserCareerProgress
     * @example
     * // Get one UserCareerProgress
     * const userCareerProgress = await prisma.userCareerProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCareerProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCareerProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCareerProgressClient<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCareerProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCareerProgresses
     * const userCareerProgresses = await prisma.userCareerProgress.findMany()
     * 
     * // Get first 10 UserCareerProgresses
     * const userCareerProgresses = await prisma.userCareerProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCareerProgressWithIdOnly = await prisma.userCareerProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCareerProgressFindManyArgs>(args?: SelectSubset<T, UserCareerProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCareerProgress.
     * @param {UserCareerProgressCreateArgs} args - Arguments to create a UserCareerProgress.
     * @example
     * // Create one UserCareerProgress
     * const UserCareerProgress = await prisma.userCareerProgress.create({
     *   data: {
     *     // ... data to create a UserCareerProgress
     *   }
     * })
     * 
     */
    create<T extends UserCareerProgressCreateArgs>(args: SelectSubset<T, UserCareerProgressCreateArgs<ExtArgs>>): Prisma__UserCareerProgressClient<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCareerProgresses.
     * @param {UserCareerProgressCreateManyArgs} args - Arguments to create many UserCareerProgresses.
     * @example
     * // Create many UserCareerProgresses
     * const userCareerProgress = await prisma.userCareerProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCareerProgressCreateManyArgs>(args?: SelectSubset<T, UserCareerProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCareerProgresses and returns the data saved in the database.
     * @param {UserCareerProgressCreateManyAndReturnArgs} args - Arguments to create many UserCareerProgresses.
     * @example
     * // Create many UserCareerProgresses
     * const userCareerProgress = await prisma.userCareerProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCareerProgresses and only return the `id`
     * const userCareerProgressWithIdOnly = await prisma.userCareerProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCareerProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCareerProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCareerProgress.
     * @param {UserCareerProgressDeleteArgs} args - Arguments to delete one UserCareerProgress.
     * @example
     * // Delete one UserCareerProgress
     * const UserCareerProgress = await prisma.userCareerProgress.delete({
     *   where: {
     *     // ... filter to delete one UserCareerProgress
     *   }
     * })
     * 
     */
    delete<T extends UserCareerProgressDeleteArgs>(args: SelectSubset<T, UserCareerProgressDeleteArgs<ExtArgs>>): Prisma__UserCareerProgressClient<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCareerProgress.
     * @param {UserCareerProgressUpdateArgs} args - Arguments to update one UserCareerProgress.
     * @example
     * // Update one UserCareerProgress
     * const userCareerProgress = await prisma.userCareerProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCareerProgressUpdateArgs>(args: SelectSubset<T, UserCareerProgressUpdateArgs<ExtArgs>>): Prisma__UserCareerProgressClient<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCareerProgresses.
     * @param {UserCareerProgressDeleteManyArgs} args - Arguments to filter UserCareerProgresses to delete.
     * @example
     * // Delete a few UserCareerProgresses
     * const { count } = await prisma.userCareerProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCareerProgressDeleteManyArgs>(args?: SelectSubset<T, UserCareerProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCareerProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCareerProgresses
     * const userCareerProgress = await prisma.userCareerProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCareerProgressUpdateManyArgs>(args: SelectSubset<T, UserCareerProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCareerProgresses and returns the data updated in the database.
     * @param {UserCareerProgressUpdateManyAndReturnArgs} args - Arguments to update many UserCareerProgresses.
     * @example
     * // Update many UserCareerProgresses
     * const userCareerProgress = await prisma.userCareerProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCareerProgresses and only return the `id`
     * const userCareerProgressWithIdOnly = await prisma.userCareerProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCareerProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCareerProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCareerProgress.
     * @param {UserCareerProgressUpsertArgs} args - Arguments to update or create a UserCareerProgress.
     * @example
     * // Update or create a UserCareerProgress
     * const userCareerProgress = await prisma.userCareerProgress.upsert({
     *   create: {
     *     // ... data to create a UserCareerProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCareerProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserCareerProgressUpsertArgs>(args: SelectSubset<T, UserCareerProgressUpsertArgs<ExtArgs>>): Prisma__UserCareerProgressClient<$Result.GetResult<Prisma.$UserCareerProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCareerProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProgressCountArgs} args - Arguments to filter UserCareerProgresses to count.
     * @example
     * // Count the number of UserCareerProgresses
     * const count = await prisma.userCareerProgress.count({
     *   where: {
     *     // ... the filter for the UserCareerProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserCareerProgressCountArgs>(
      args?: Subset<T, UserCareerProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCareerProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCareerProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserCareerProgressAggregateArgs>(args: Subset<T, UserCareerProgressAggregateArgs>): Prisma.PrismaPromise<GetUserCareerProgressAggregateType<T>>

    /**
     * Group by UserCareerProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCareerProgressGroupByArgs} args - Group by arguments.
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
      T extends UserCareerProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCareerProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserCareerProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserCareerProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCareerProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCareerProgress model
   */
  readonly fields: UserCareerProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCareerProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCareerProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    career<T extends CareerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareerDefaultArgs<ExtArgs>>): Prisma__CareerClient<$Result.GetResult<Prisma.$CareerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCareerProgress model
   */
  interface UserCareerProgressFieldRefs {
    readonly id: FieldRef<"UserCareerProgress", 'String'>
    readonly userId: FieldRef<"UserCareerProgress", 'String'>
    readonly careerId: FieldRef<"UserCareerProgress", 'String'>
    readonly completedMilestones: FieldRef<"UserCareerProgress", 'Int[]'>
    readonly updatedAt: FieldRef<"UserCareerProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCareerProgress findUnique
   */
  export type UserCareerProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProgress to fetch.
     */
    where: UserCareerProgressWhereUniqueInput
  }

  /**
   * UserCareerProgress findUniqueOrThrow
   */
  export type UserCareerProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProgress to fetch.
     */
    where: UserCareerProgressWhereUniqueInput
  }

  /**
   * UserCareerProgress findFirst
   */
  export type UserCareerProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProgress to fetch.
     */
    where?: UserCareerProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCareerProgresses to fetch.
     */
    orderBy?: UserCareerProgressOrderByWithRelationInput | UserCareerProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCareerProgresses.
     */
    cursor?: UserCareerProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCareerProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCareerProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCareerProgresses.
     */
    distinct?: UserCareerProgressScalarFieldEnum | UserCareerProgressScalarFieldEnum[]
  }

  /**
   * UserCareerProgress findFirstOrThrow
   */
  export type UserCareerProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProgress to fetch.
     */
    where?: UserCareerProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCareerProgresses to fetch.
     */
    orderBy?: UserCareerProgressOrderByWithRelationInput | UserCareerProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCareerProgresses.
     */
    cursor?: UserCareerProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCareerProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCareerProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCareerProgresses.
     */
    distinct?: UserCareerProgressScalarFieldEnum | UserCareerProgressScalarFieldEnum[]
  }

  /**
   * UserCareerProgress findMany
   */
  export type UserCareerProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserCareerProgresses to fetch.
     */
    where?: UserCareerProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCareerProgresses to fetch.
     */
    orderBy?: UserCareerProgressOrderByWithRelationInput | UserCareerProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCareerProgresses.
     */
    cursor?: UserCareerProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCareerProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCareerProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCareerProgresses.
     */
    distinct?: UserCareerProgressScalarFieldEnum | UserCareerProgressScalarFieldEnum[]
  }

  /**
   * UserCareerProgress create
   */
  export type UserCareerProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCareerProgress.
     */
    data: XOR<UserCareerProgressCreateInput, UserCareerProgressUncheckedCreateInput>
  }

  /**
   * UserCareerProgress createMany
   */
  export type UserCareerProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCareerProgresses.
     */
    data: UserCareerProgressCreateManyInput | UserCareerProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCareerProgress createManyAndReturn
   */
  export type UserCareerProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * The data used to create many UserCareerProgresses.
     */
    data: UserCareerProgressCreateManyInput | UserCareerProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCareerProgress update
   */
  export type UserCareerProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCareerProgress.
     */
    data: XOR<UserCareerProgressUpdateInput, UserCareerProgressUncheckedUpdateInput>
    /**
     * Choose, which UserCareerProgress to update.
     */
    where: UserCareerProgressWhereUniqueInput
  }

  /**
   * UserCareerProgress updateMany
   */
  export type UserCareerProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCareerProgresses.
     */
    data: XOR<UserCareerProgressUpdateManyMutationInput, UserCareerProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCareerProgresses to update
     */
    where?: UserCareerProgressWhereInput
    /**
     * Limit how many UserCareerProgresses to update.
     */
    limit?: number
  }

  /**
   * UserCareerProgress updateManyAndReturn
   */
  export type UserCareerProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * The data used to update UserCareerProgresses.
     */
    data: XOR<UserCareerProgressUpdateManyMutationInput, UserCareerProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserCareerProgresses to update
     */
    where?: UserCareerProgressWhereInput
    /**
     * Limit how many UserCareerProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCareerProgress upsert
   */
  export type UserCareerProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCareerProgress to update in case it exists.
     */
    where: UserCareerProgressWhereUniqueInput
    /**
     * In case the UserCareerProgress found by the `where` argument doesn't exist, create a new UserCareerProgress with this data.
     */
    create: XOR<UserCareerProgressCreateInput, UserCareerProgressUncheckedCreateInput>
    /**
     * In case the UserCareerProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCareerProgressUpdateInput, UserCareerProgressUncheckedUpdateInput>
  }

  /**
   * UserCareerProgress delete
   */
  export type UserCareerProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
    /**
     * Filter which UserCareerProgress to delete.
     */
    where: UserCareerProgressWhereUniqueInput
  }

  /**
   * UserCareerProgress deleteMany
   */
  export type UserCareerProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCareerProgresses to delete
     */
    where?: UserCareerProgressWhereInput
    /**
     * Limit how many UserCareerProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserCareerProgress without action
   */
  export type UserCareerProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCareerProgress
     */
    select?: UserCareerProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCareerProgress
     */
    omit?: UserCareerProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCareerProgressInclude<ExtArgs> | null
  }


  /**
   * Model Roadmap
   */

  export type AggregateRoadmap = {
    _count: RoadmapCountAggregateOutputType | null
    _min: RoadmapMinAggregateOutputType | null
    _max: RoadmapMaxAggregateOutputType | null
  }

  export type RoadmapMinAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type RoadmapMaxAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type RoadmapCountAggregateOutputType = {
    id: number
    title: number
    userId: number
    createdAt: number
    _all: number
  }


  export type RoadmapMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
  }

  export type RoadmapMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
  }

  export type RoadmapCountAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type RoadmapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roadmap to aggregate.
     */
    where?: RoadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roadmaps to fetch.
     */
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roadmaps
    **/
    _count?: true | RoadmapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadmapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadmapMaxAggregateInputType
  }

  export type GetRoadmapAggregateType<T extends RoadmapAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadmap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadmap[P]>
      : GetScalarType<T[P], AggregateRoadmap[P]>
  }




  export type RoadmapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapWhereInput
    orderBy?: RoadmapOrderByWithAggregationInput | RoadmapOrderByWithAggregationInput[]
    by: RoadmapScalarFieldEnum[] | RoadmapScalarFieldEnum
    having?: RoadmapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadmapCountAggregateInputType | true
    _min?: RoadmapMinAggregateInputType
    _max?: RoadmapMaxAggregateInputType
  }

  export type RoadmapGroupByOutputType = {
    id: string
    title: string
    userId: string
    createdAt: Date
    _count: RoadmapCountAggregateOutputType | null
    _min: RoadmapMinAggregateOutputType | null
    _max: RoadmapMaxAggregateOutputType | null
  }

  type GetRoadmapGroupByPayload<T extends RoadmapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadmapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadmapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadmapGroupByOutputType[P]>
            : GetScalarType<T[P], RoadmapGroupByOutputType[P]>
        }
      >
    >


  export type RoadmapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | Roadmap$nodesArgs<ExtArgs>
    _count?: boolean | RoadmapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmap"]>

  export type RoadmapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmap"]>

  export type RoadmapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmap"]>

  export type RoadmapSelectScalar = {
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type RoadmapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "userId" | "createdAt", ExtArgs["result"]["roadmap"]>
  export type RoadmapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | Roadmap$nodesArgs<ExtArgs>
    _count?: boolean | RoadmapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoadmapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoadmapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoadmapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roadmap"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nodes: Prisma.$RoadmapNodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["roadmap"]>
    composites: {}
  }

  type RoadmapGetPayload<S extends boolean | null | undefined | RoadmapDefaultArgs> = $Result.GetResult<Prisma.$RoadmapPayload, S>

  type RoadmapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoadmapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoadmapCountAggregateInputType | true
    }

  export interface RoadmapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roadmap'], meta: { name: 'Roadmap' } }
    /**
     * Find zero or one Roadmap that matches the filter.
     * @param {RoadmapFindUniqueArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoadmapFindUniqueArgs>(args: SelectSubset<T, RoadmapFindUniqueArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roadmap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoadmapFindUniqueOrThrowArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoadmapFindUniqueOrThrowArgs>(args: SelectSubset<T, RoadmapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roadmap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapFindFirstArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoadmapFindFirstArgs>(args?: SelectSubset<T, RoadmapFindFirstArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roadmap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapFindFirstOrThrowArgs} args - Arguments to find a Roadmap
     * @example
     * // Get one Roadmap
     * const roadmap = await prisma.roadmap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoadmapFindFirstOrThrowArgs>(args?: SelectSubset<T, RoadmapFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roadmaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roadmaps
     * const roadmaps = await prisma.roadmap.findMany()
     * 
     * // Get first 10 Roadmaps
     * const roadmaps = await prisma.roadmap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roadmapWithIdOnly = await prisma.roadmap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoadmapFindManyArgs>(args?: SelectSubset<T, RoadmapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roadmap.
     * @param {RoadmapCreateArgs} args - Arguments to create a Roadmap.
     * @example
     * // Create one Roadmap
     * const Roadmap = await prisma.roadmap.create({
     *   data: {
     *     // ... data to create a Roadmap
     *   }
     * })
     * 
     */
    create<T extends RoadmapCreateArgs>(args: SelectSubset<T, RoadmapCreateArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roadmaps.
     * @param {RoadmapCreateManyArgs} args - Arguments to create many Roadmaps.
     * @example
     * // Create many Roadmaps
     * const roadmap = await prisma.roadmap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoadmapCreateManyArgs>(args?: SelectSubset<T, RoadmapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roadmaps and returns the data saved in the database.
     * @param {RoadmapCreateManyAndReturnArgs} args - Arguments to create many Roadmaps.
     * @example
     * // Create many Roadmaps
     * const roadmap = await prisma.roadmap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roadmaps and only return the `id`
     * const roadmapWithIdOnly = await prisma.roadmap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoadmapCreateManyAndReturnArgs>(args?: SelectSubset<T, RoadmapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roadmap.
     * @param {RoadmapDeleteArgs} args - Arguments to delete one Roadmap.
     * @example
     * // Delete one Roadmap
     * const Roadmap = await prisma.roadmap.delete({
     *   where: {
     *     // ... filter to delete one Roadmap
     *   }
     * })
     * 
     */
    delete<T extends RoadmapDeleteArgs>(args: SelectSubset<T, RoadmapDeleteArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roadmap.
     * @param {RoadmapUpdateArgs} args - Arguments to update one Roadmap.
     * @example
     * // Update one Roadmap
     * const roadmap = await prisma.roadmap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoadmapUpdateArgs>(args: SelectSubset<T, RoadmapUpdateArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roadmaps.
     * @param {RoadmapDeleteManyArgs} args - Arguments to filter Roadmaps to delete.
     * @example
     * // Delete a few Roadmaps
     * const { count } = await prisma.roadmap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoadmapDeleteManyArgs>(args?: SelectSubset<T, RoadmapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roadmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roadmaps
     * const roadmap = await prisma.roadmap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoadmapUpdateManyArgs>(args: SelectSubset<T, RoadmapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roadmaps and returns the data updated in the database.
     * @param {RoadmapUpdateManyAndReturnArgs} args - Arguments to update many Roadmaps.
     * @example
     * // Update many Roadmaps
     * const roadmap = await prisma.roadmap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roadmaps and only return the `id`
     * const roadmapWithIdOnly = await prisma.roadmap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoadmapUpdateManyAndReturnArgs>(args: SelectSubset<T, RoadmapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roadmap.
     * @param {RoadmapUpsertArgs} args - Arguments to update or create a Roadmap.
     * @example
     * // Update or create a Roadmap
     * const roadmap = await prisma.roadmap.upsert({
     *   create: {
     *     // ... data to create a Roadmap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roadmap we want to update
     *   }
     * })
     */
    upsert<T extends RoadmapUpsertArgs>(args: SelectSubset<T, RoadmapUpsertArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roadmaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapCountArgs} args - Arguments to filter Roadmaps to count.
     * @example
     * // Count the number of Roadmaps
     * const count = await prisma.roadmap.count({
     *   where: {
     *     // ... the filter for the Roadmaps we want to count
     *   }
     * })
    **/
    count<T extends RoadmapCountArgs>(
      args?: Subset<T, RoadmapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadmapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roadmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoadmapAggregateArgs>(args: Subset<T, RoadmapAggregateArgs>): Prisma.PrismaPromise<GetRoadmapAggregateType<T>>

    /**
     * Group by Roadmap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapGroupByArgs} args - Group by arguments.
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
      T extends RoadmapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadmapGroupByArgs['orderBy'] }
        : { orderBy?: RoadmapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoadmapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadmapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roadmap model
   */
  readonly fields: RoadmapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roadmap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadmapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nodes<T extends Roadmap$nodesArgs<ExtArgs> = {}>(args?: Subset<T, Roadmap$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roadmap model
   */
  interface RoadmapFieldRefs {
    readonly id: FieldRef<"Roadmap", 'String'>
    readonly title: FieldRef<"Roadmap", 'String'>
    readonly userId: FieldRef<"Roadmap", 'String'>
    readonly createdAt: FieldRef<"Roadmap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roadmap findUnique
   */
  export type RoadmapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmap to fetch.
     */
    where: RoadmapWhereUniqueInput
  }

  /**
   * Roadmap findUniqueOrThrow
   */
  export type RoadmapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmap to fetch.
     */
    where: RoadmapWhereUniqueInput
  }

  /**
   * Roadmap findFirst
   */
  export type RoadmapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmap to fetch.
     */
    where?: RoadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roadmaps to fetch.
     */
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roadmaps.
     */
    cursor?: RoadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roadmaps.
     */
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }

  /**
   * Roadmap findFirstOrThrow
   */
  export type RoadmapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmap to fetch.
     */
    where?: RoadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roadmaps to fetch.
     */
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roadmaps.
     */
    cursor?: RoadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roadmaps.
     */
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }

  /**
   * Roadmap findMany
   */
  export type RoadmapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter, which Roadmaps to fetch.
     */
    where?: RoadmapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roadmaps to fetch.
     */
    orderBy?: RoadmapOrderByWithRelationInput | RoadmapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roadmaps.
     */
    cursor?: RoadmapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roadmaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roadmaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roadmaps.
     */
    distinct?: RoadmapScalarFieldEnum | RoadmapScalarFieldEnum[]
  }

  /**
   * Roadmap create
   */
  export type RoadmapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * The data needed to create a Roadmap.
     */
    data: XOR<RoadmapCreateInput, RoadmapUncheckedCreateInput>
  }

  /**
   * Roadmap createMany
   */
  export type RoadmapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roadmaps.
     */
    data: RoadmapCreateManyInput | RoadmapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roadmap createManyAndReturn
   */
  export type RoadmapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * The data used to create many Roadmaps.
     */
    data: RoadmapCreateManyInput | RoadmapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roadmap update
   */
  export type RoadmapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * The data needed to update a Roadmap.
     */
    data: XOR<RoadmapUpdateInput, RoadmapUncheckedUpdateInput>
    /**
     * Choose, which Roadmap to update.
     */
    where: RoadmapWhereUniqueInput
  }

  /**
   * Roadmap updateMany
   */
  export type RoadmapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roadmaps.
     */
    data: XOR<RoadmapUpdateManyMutationInput, RoadmapUncheckedUpdateManyInput>
    /**
     * Filter which Roadmaps to update
     */
    where?: RoadmapWhereInput
    /**
     * Limit how many Roadmaps to update.
     */
    limit?: number
  }

  /**
   * Roadmap updateManyAndReturn
   */
  export type RoadmapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * The data used to update Roadmaps.
     */
    data: XOR<RoadmapUpdateManyMutationInput, RoadmapUncheckedUpdateManyInput>
    /**
     * Filter which Roadmaps to update
     */
    where?: RoadmapWhereInput
    /**
     * Limit how many Roadmaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roadmap upsert
   */
  export type RoadmapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * The filter to search for the Roadmap to update in case it exists.
     */
    where: RoadmapWhereUniqueInput
    /**
     * In case the Roadmap found by the `where` argument doesn't exist, create a new Roadmap with this data.
     */
    create: XOR<RoadmapCreateInput, RoadmapUncheckedCreateInput>
    /**
     * In case the Roadmap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadmapUpdateInput, RoadmapUncheckedUpdateInput>
  }

  /**
   * Roadmap delete
   */
  export type RoadmapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
    /**
     * Filter which Roadmap to delete.
     */
    where: RoadmapWhereUniqueInput
  }

  /**
   * Roadmap deleteMany
   */
  export type RoadmapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roadmaps to delete
     */
    where?: RoadmapWhereInput
    /**
     * Limit how many Roadmaps to delete.
     */
    limit?: number
  }

  /**
   * Roadmap.nodes
   */
  export type Roadmap$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    where?: RoadmapNodeWhereInput
    orderBy?: RoadmapNodeOrderByWithRelationInput | RoadmapNodeOrderByWithRelationInput[]
    cursor?: RoadmapNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadmapNodeScalarFieldEnum | RoadmapNodeScalarFieldEnum[]
  }

  /**
   * Roadmap without action
   */
  export type RoadmapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roadmap
     */
    select?: RoadmapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roadmap
     */
    omit?: RoadmapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapInclude<ExtArgs> | null
  }


  /**
   * Model RoadmapNode
   */

  export type AggregateRoadmapNode = {
    _count: RoadmapNodeCountAggregateOutputType | null
    _min: RoadmapNodeMinAggregateOutputType | null
    _max: RoadmapNodeMaxAggregateOutputType | null
  }

  export type RoadmapNodeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    roadmapId: string | null
  }

  export type RoadmapNodeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    roadmapId: string | null
  }

  export type RoadmapNodeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    roadmapId: number
    _all: number
  }


  export type RoadmapNodeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roadmapId?: true
  }

  export type RoadmapNodeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roadmapId?: true
  }

  export type RoadmapNodeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    roadmapId?: true
    _all?: true
  }

  export type RoadmapNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadmapNode to aggregate.
     */
    where?: RoadmapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapNodes to fetch.
     */
    orderBy?: RoadmapNodeOrderByWithRelationInput | RoadmapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadmapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoadmapNodes
    **/
    _count?: true | RoadmapNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadmapNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadmapNodeMaxAggregateInputType
  }

  export type GetRoadmapNodeAggregateType<T extends RoadmapNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadmapNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadmapNode[P]>
      : GetScalarType<T[P], AggregateRoadmapNode[P]>
  }




  export type RoadmapNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapNodeWhereInput
    orderBy?: RoadmapNodeOrderByWithAggregationInput | RoadmapNodeOrderByWithAggregationInput[]
    by: RoadmapNodeScalarFieldEnum[] | RoadmapNodeScalarFieldEnum
    having?: RoadmapNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadmapNodeCountAggregateInputType | true
    _min?: RoadmapNodeMinAggregateInputType
    _max?: RoadmapNodeMaxAggregateInputType
  }

  export type RoadmapNodeGroupByOutputType = {
    id: string
    title: string
    description: string | null
    roadmapId: string
    _count: RoadmapNodeCountAggregateOutputType | null
    _min: RoadmapNodeMinAggregateOutputType | null
    _max: RoadmapNodeMaxAggregateOutputType | null
  }

  type GetRoadmapNodeGroupByPayload<T extends RoadmapNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadmapNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadmapNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadmapNodeGroupByOutputType[P]>
            : GetScalarType<T[P], RoadmapNodeGroupByOutputType[P]>
        }
      >
    >


  export type RoadmapNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roadmapId?: boolean
    roadmap?: boolean | RoadmapDefaultArgs<ExtArgs>
    parents?: boolean | RoadmapNode$parentsArgs<ExtArgs>
    children?: boolean | RoadmapNode$childrenArgs<ExtArgs>
    _count?: boolean | RoadmapNodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapNode"]>

  export type RoadmapNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roadmapId?: boolean
    roadmap?: boolean | RoadmapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapNode"]>

  export type RoadmapNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    roadmapId?: boolean
    roadmap?: boolean | RoadmapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapNode"]>

  export type RoadmapNodeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    roadmapId?: boolean
  }

  export type RoadmapNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "roadmapId", ExtArgs["result"]["roadmapNode"]>
  export type RoadmapNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roadmap?: boolean | RoadmapDefaultArgs<ExtArgs>
    parents?: boolean | RoadmapNode$parentsArgs<ExtArgs>
    children?: boolean | RoadmapNode$childrenArgs<ExtArgs>
    _count?: boolean | RoadmapNodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoadmapNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roadmap?: boolean | RoadmapDefaultArgs<ExtArgs>
  }
  export type RoadmapNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roadmap?: boolean | RoadmapDefaultArgs<ExtArgs>
  }

  export type $RoadmapNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoadmapNode"
    objects: {
      roadmap: Prisma.$RoadmapPayload<ExtArgs>
      parents: Prisma.$RoadmapEdgePayload<ExtArgs>[]
      children: Prisma.$RoadmapEdgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      roadmapId: string
    }, ExtArgs["result"]["roadmapNode"]>
    composites: {}
  }

  type RoadmapNodeGetPayload<S extends boolean | null | undefined | RoadmapNodeDefaultArgs> = $Result.GetResult<Prisma.$RoadmapNodePayload, S>

  type RoadmapNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoadmapNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoadmapNodeCountAggregateInputType | true
    }

  export interface RoadmapNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoadmapNode'], meta: { name: 'RoadmapNode' } }
    /**
     * Find zero or one RoadmapNode that matches the filter.
     * @param {RoadmapNodeFindUniqueArgs} args - Arguments to find a RoadmapNode
     * @example
     * // Get one RoadmapNode
     * const roadmapNode = await prisma.roadmapNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoadmapNodeFindUniqueArgs>(args: SelectSubset<T, RoadmapNodeFindUniqueArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoadmapNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoadmapNodeFindUniqueOrThrowArgs} args - Arguments to find a RoadmapNode
     * @example
     * // Get one RoadmapNode
     * const roadmapNode = await prisma.roadmapNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoadmapNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, RoadmapNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoadmapNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapNodeFindFirstArgs} args - Arguments to find a RoadmapNode
     * @example
     * // Get one RoadmapNode
     * const roadmapNode = await prisma.roadmapNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoadmapNodeFindFirstArgs>(args?: SelectSubset<T, RoadmapNodeFindFirstArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoadmapNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapNodeFindFirstOrThrowArgs} args - Arguments to find a RoadmapNode
     * @example
     * // Get one RoadmapNode
     * const roadmapNode = await prisma.roadmapNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoadmapNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, RoadmapNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoadmapNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoadmapNodes
     * const roadmapNodes = await prisma.roadmapNode.findMany()
     * 
     * // Get first 10 RoadmapNodes
     * const roadmapNodes = await prisma.roadmapNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roadmapNodeWithIdOnly = await prisma.roadmapNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoadmapNodeFindManyArgs>(args?: SelectSubset<T, RoadmapNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoadmapNode.
     * @param {RoadmapNodeCreateArgs} args - Arguments to create a RoadmapNode.
     * @example
     * // Create one RoadmapNode
     * const RoadmapNode = await prisma.roadmapNode.create({
     *   data: {
     *     // ... data to create a RoadmapNode
     *   }
     * })
     * 
     */
    create<T extends RoadmapNodeCreateArgs>(args: SelectSubset<T, RoadmapNodeCreateArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoadmapNodes.
     * @param {RoadmapNodeCreateManyArgs} args - Arguments to create many RoadmapNodes.
     * @example
     * // Create many RoadmapNodes
     * const roadmapNode = await prisma.roadmapNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoadmapNodeCreateManyArgs>(args?: SelectSubset<T, RoadmapNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoadmapNodes and returns the data saved in the database.
     * @param {RoadmapNodeCreateManyAndReturnArgs} args - Arguments to create many RoadmapNodes.
     * @example
     * // Create many RoadmapNodes
     * const roadmapNode = await prisma.roadmapNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoadmapNodes and only return the `id`
     * const roadmapNodeWithIdOnly = await prisma.roadmapNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoadmapNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, RoadmapNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoadmapNode.
     * @param {RoadmapNodeDeleteArgs} args - Arguments to delete one RoadmapNode.
     * @example
     * // Delete one RoadmapNode
     * const RoadmapNode = await prisma.roadmapNode.delete({
     *   where: {
     *     // ... filter to delete one RoadmapNode
     *   }
     * })
     * 
     */
    delete<T extends RoadmapNodeDeleteArgs>(args: SelectSubset<T, RoadmapNodeDeleteArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoadmapNode.
     * @param {RoadmapNodeUpdateArgs} args - Arguments to update one RoadmapNode.
     * @example
     * // Update one RoadmapNode
     * const roadmapNode = await prisma.roadmapNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoadmapNodeUpdateArgs>(args: SelectSubset<T, RoadmapNodeUpdateArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoadmapNodes.
     * @param {RoadmapNodeDeleteManyArgs} args - Arguments to filter RoadmapNodes to delete.
     * @example
     * // Delete a few RoadmapNodes
     * const { count } = await prisma.roadmapNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoadmapNodeDeleteManyArgs>(args?: SelectSubset<T, RoadmapNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadmapNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoadmapNodes
     * const roadmapNode = await prisma.roadmapNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoadmapNodeUpdateManyArgs>(args: SelectSubset<T, RoadmapNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadmapNodes and returns the data updated in the database.
     * @param {RoadmapNodeUpdateManyAndReturnArgs} args - Arguments to update many RoadmapNodes.
     * @example
     * // Update many RoadmapNodes
     * const roadmapNode = await prisma.roadmapNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoadmapNodes and only return the `id`
     * const roadmapNodeWithIdOnly = await prisma.roadmapNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoadmapNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, RoadmapNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoadmapNode.
     * @param {RoadmapNodeUpsertArgs} args - Arguments to update or create a RoadmapNode.
     * @example
     * // Update or create a RoadmapNode
     * const roadmapNode = await prisma.roadmapNode.upsert({
     *   create: {
     *     // ... data to create a RoadmapNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoadmapNode we want to update
     *   }
     * })
     */
    upsert<T extends RoadmapNodeUpsertArgs>(args: SelectSubset<T, RoadmapNodeUpsertArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoadmapNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapNodeCountArgs} args - Arguments to filter RoadmapNodes to count.
     * @example
     * // Count the number of RoadmapNodes
     * const count = await prisma.roadmapNode.count({
     *   where: {
     *     // ... the filter for the RoadmapNodes we want to count
     *   }
     * })
    **/
    count<T extends RoadmapNodeCountArgs>(
      args?: Subset<T, RoadmapNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadmapNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoadmapNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoadmapNodeAggregateArgs>(args: Subset<T, RoadmapNodeAggregateArgs>): Prisma.PrismaPromise<GetRoadmapNodeAggregateType<T>>

    /**
     * Group by RoadmapNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapNodeGroupByArgs} args - Group by arguments.
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
      T extends RoadmapNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadmapNodeGroupByArgs['orderBy'] }
        : { orderBy?: RoadmapNodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoadmapNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadmapNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoadmapNode model
   */
  readonly fields: RoadmapNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoadmapNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadmapNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roadmap<T extends RoadmapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoadmapDefaultArgs<ExtArgs>>): Prisma__RoadmapClient<$Result.GetResult<Prisma.$RoadmapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parents<T extends RoadmapNode$parentsArgs<ExtArgs> = {}>(args?: Subset<T, RoadmapNode$parentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    children<T extends RoadmapNode$childrenArgs<ExtArgs> = {}>(args?: Subset<T, RoadmapNode$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoadmapNode model
   */
  interface RoadmapNodeFieldRefs {
    readonly id: FieldRef<"RoadmapNode", 'String'>
    readonly title: FieldRef<"RoadmapNode", 'String'>
    readonly description: FieldRef<"RoadmapNode", 'String'>
    readonly roadmapId: FieldRef<"RoadmapNode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoadmapNode findUnique
   */
  export type RoadmapNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapNode to fetch.
     */
    where: RoadmapNodeWhereUniqueInput
  }

  /**
   * RoadmapNode findUniqueOrThrow
   */
  export type RoadmapNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapNode to fetch.
     */
    where: RoadmapNodeWhereUniqueInput
  }

  /**
   * RoadmapNode findFirst
   */
  export type RoadmapNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapNode to fetch.
     */
    where?: RoadmapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapNodes to fetch.
     */
    orderBy?: RoadmapNodeOrderByWithRelationInput | RoadmapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadmapNodes.
     */
    cursor?: RoadmapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapNodes.
     */
    distinct?: RoadmapNodeScalarFieldEnum | RoadmapNodeScalarFieldEnum[]
  }

  /**
   * RoadmapNode findFirstOrThrow
   */
  export type RoadmapNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapNode to fetch.
     */
    where?: RoadmapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapNodes to fetch.
     */
    orderBy?: RoadmapNodeOrderByWithRelationInput | RoadmapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadmapNodes.
     */
    cursor?: RoadmapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapNodes.
     */
    distinct?: RoadmapNodeScalarFieldEnum | RoadmapNodeScalarFieldEnum[]
  }

  /**
   * RoadmapNode findMany
   */
  export type RoadmapNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapNodes to fetch.
     */
    where?: RoadmapNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapNodes to fetch.
     */
    orderBy?: RoadmapNodeOrderByWithRelationInput | RoadmapNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoadmapNodes.
     */
    cursor?: RoadmapNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapNodes.
     */
    distinct?: RoadmapNodeScalarFieldEnum | RoadmapNodeScalarFieldEnum[]
  }

  /**
   * RoadmapNode create
   */
  export type RoadmapNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a RoadmapNode.
     */
    data: XOR<RoadmapNodeCreateInput, RoadmapNodeUncheckedCreateInput>
  }

  /**
   * RoadmapNode createMany
   */
  export type RoadmapNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoadmapNodes.
     */
    data: RoadmapNodeCreateManyInput | RoadmapNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoadmapNode createManyAndReturn
   */
  export type RoadmapNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * The data used to create many RoadmapNodes.
     */
    data: RoadmapNodeCreateManyInput | RoadmapNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoadmapNode update
   */
  export type RoadmapNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a RoadmapNode.
     */
    data: XOR<RoadmapNodeUpdateInput, RoadmapNodeUncheckedUpdateInput>
    /**
     * Choose, which RoadmapNode to update.
     */
    where: RoadmapNodeWhereUniqueInput
  }

  /**
   * RoadmapNode updateMany
   */
  export type RoadmapNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoadmapNodes.
     */
    data: XOR<RoadmapNodeUpdateManyMutationInput, RoadmapNodeUncheckedUpdateManyInput>
    /**
     * Filter which RoadmapNodes to update
     */
    where?: RoadmapNodeWhereInput
    /**
     * Limit how many RoadmapNodes to update.
     */
    limit?: number
  }

  /**
   * RoadmapNode updateManyAndReturn
   */
  export type RoadmapNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * The data used to update RoadmapNodes.
     */
    data: XOR<RoadmapNodeUpdateManyMutationInput, RoadmapNodeUncheckedUpdateManyInput>
    /**
     * Filter which RoadmapNodes to update
     */
    where?: RoadmapNodeWhereInput
    /**
     * Limit how many RoadmapNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoadmapNode upsert
   */
  export type RoadmapNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the RoadmapNode to update in case it exists.
     */
    where: RoadmapNodeWhereUniqueInput
    /**
     * In case the RoadmapNode found by the `where` argument doesn't exist, create a new RoadmapNode with this data.
     */
    create: XOR<RoadmapNodeCreateInput, RoadmapNodeUncheckedCreateInput>
    /**
     * In case the RoadmapNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadmapNodeUpdateInput, RoadmapNodeUncheckedUpdateInput>
  }

  /**
   * RoadmapNode delete
   */
  export type RoadmapNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
    /**
     * Filter which RoadmapNode to delete.
     */
    where: RoadmapNodeWhereUniqueInput
  }

  /**
   * RoadmapNode deleteMany
   */
  export type RoadmapNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadmapNodes to delete
     */
    where?: RoadmapNodeWhereInput
    /**
     * Limit how many RoadmapNodes to delete.
     */
    limit?: number
  }

  /**
   * RoadmapNode.parents
   */
  export type RoadmapNode$parentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    where?: RoadmapEdgeWhereInput
    orderBy?: RoadmapEdgeOrderByWithRelationInput | RoadmapEdgeOrderByWithRelationInput[]
    cursor?: RoadmapEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadmapEdgeScalarFieldEnum | RoadmapEdgeScalarFieldEnum[]
  }

  /**
   * RoadmapNode.children
   */
  export type RoadmapNode$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    where?: RoadmapEdgeWhereInput
    orderBy?: RoadmapEdgeOrderByWithRelationInput | RoadmapEdgeOrderByWithRelationInput[]
    cursor?: RoadmapEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadmapEdgeScalarFieldEnum | RoadmapEdgeScalarFieldEnum[]
  }

  /**
   * RoadmapNode without action
   */
  export type RoadmapNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapNode
     */
    select?: RoadmapNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapNode
     */
    omit?: RoadmapNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapNodeInclude<ExtArgs> | null
  }


  /**
   * Model RoadmapEdge
   */

  export type AggregateRoadmapEdge = {
    _count: RoadmapEdgeCountAggregateOutputType | null
    _min: RoadmapEdgeMinAggregateOutputType | null
    _max: RoadmapEdgeMaxAggregateOutputType | null
  }

  export type RoadmapEdgeMinAggregateOutputType = {
    parentId: string | null
    childId: string | null
  }

  export type RoadmapEdgeMaxAggregateOutputType = {
    parentId: string | null
    childId: string | null
  }

  export type RoadmapEdgeCountAggregateOutputType = {
    parentId: number
    childId: number
    _all: number
  }


  export type RoadmapEdgeMinAggregateInputType = {
    parentId?: true
    childId?: true
  }

  export type RoadmapEdgeMaxAggregateInputType = {
    parentId?: true
    childId?: true
  }

  export type RoadmapEdgeCountAggregateInputType = {
    parentId?: true
    childId?: true
    _all?: true
  }

  export type RoadmapEdgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadmapEdge to aggregate.
     */
    where?: RoadmapEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapEdges to fetch.
     */
    orderBy?: RoadmapEdgeOrderByWithRelationInput | RoadmapEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadmapEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoadmapEdges
    **/
    _count?: true | RoadmapEdgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadmapEdgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadmapEdgeMaxAggregateInputType
  }

  export type GetRoadmapEdgeAggregateType<T extends RoadmapEdgeAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadmapEdge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadmapEdge[P]>
      : GetScalarType<T[P], AggregateRoadmapEdge[P]>
  }




  export type RoadmapEdgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapEdgeWhereInput
    orderBy?: RoadmapEdgeOrderByWithAggregationInput | RoadmapEdgeOrderByWithAggregationInput[]
    by: RoadmapEdgeScalarFieldEnum[] | RoadmapEdgeScalarFieldEnum
    having?: RoadmapEdgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadmapEdgeCountAggregateInputType | true
    _min?: RoadmapEdgeMinAggregateInputType
    _max?: RoadmapEdgeMaxAggregateInputType
  }

  export type RoadmapEdgeGroupByOutputType = {
    parentId: string
    childId: string
    _count: RoadmapEdgeCountAggregateOutputType | null
    _min: RoadmapEdgeMinAggregateOutputType | null
    _max: RoadmapEdgeMaxAggregateOutputType | null
  }

  type GetRoadmapEdgeGroupByPayload<T extends RoadmapEdgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadmapEdgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadmapEdgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadmapEdgeGroupByOutputType[P]>
            : GetScalarType<T[P], RoadmapEdgeGroupByOutputType[P]>
        }
      >
    >


  export type RoadmapEdgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    parent?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
    child?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapEdge"]>

  export type RoadmapEdgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    parent?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
    child?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapEdge"]>

  export type RoadmapEdgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parentId?: boolean
    childId?: boolean
    parent?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
    child?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapEdge"]>

  export type RoadmapEdgeSelectScalar = {
    parentId?: boolean
    childId?: boolean
  }

  export type RoadmapEdgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"parentId" | "childId", ExtArgs["result"]["roadmapEdge"]>
  export type RoadmapEdgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
    child?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
  }
  export type RoadmapEdgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
    child?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
  }
  export type RoadmapEdgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
    child?: boolean | RoadmapNodeDefaultArgs<ExtArgs>
  }

  export type $RoadmapEdgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoadmapEdge"
    objects: {
      parent: Prisma.$RoadmapNodePayload<ExtArgs>
      child: Prisma.$RoadmapNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      parentId: string
      childId: string
    }, ExtArgs["result"]["roadmapEdge"]>
    composites: {}
  }

  type RoadmapEdgeGetPayload<S extends boolean | null | undefined | RoadmapEdgeDefaultArgs> = $Result.GetResult<Prisma.$RoadmapEdgePayload, S>

  type RoadmapEdgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoadmapEdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoadmapEdgeCountAggregateInputType | true
    }

  export interface RoadmapEdgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoadmapEdge'], meta: { name: 'RoadmapEdge' } }
    /**
     * Find zero or one RoadmapEdge that matches the filter.
     * @param {RoadmapEdgeFindUniqueArgs} args - Arguments to find a RoadmapEdge
     * @example
     * // Get one RoadmapEdge
     * const roadmapEdge = await prisma.roadmapEdge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoadmapEdgeFindUniqueArgs>(args: SelectSubset<T, RoadmapEdgeFindUniqueArgs<ExtArgs>>): Prisma__RoadmapEdgeClient<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoadmapEdge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoadmapEdgeFindUniqueOrThrowArgs} args - Arguments to find a RoadmapEdge
     * @example
     * // Get one RoadmapEdge
     * const roadmapEdge = await prisma.roadmapEdge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoadmapEdgeFindUniqueOrThrowArgs>(args: SelectSubset<T, RoadmapEdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoadmapEdgeClient<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoadmapEdge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapEdgeFindFirstArgs} args - Arguments to find a RoadmapEdge
     * @example
     * // Get one RoadmapEdge
     * const roadmapEdge = await prisma.roadmapEdge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoadmapEdgeFindFirstArgs>(args?: SelectSubset<T, RoadmapEdgeFindFirstArgs<ExtArgs>>): Prisma__RoadmapEdgeClient<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoadmapEdge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapEdgeFindFirstOrThrowArgs} args - Arguments to find a RoadmapEdge
     * @example
     * // Get one RoadmapEdge
     * const roadmapEdge = await prisma.roadmapEdge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoadmapEdgeFindFirstOrThrowArgs>(args?: SelectSubset<T, RoadmapEdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoadmapEdgeClient<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoadmapEdges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapEdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoadmapEdges
     * const roadmapEdges = await prisma.roadmapEdge.findMany()
     * 
     * // Get first 10 RoadmapEdges
     * const roadmapEdges = await prisma.roadmapEdge.findMany({ take: 10 })
     * 
     * // Only select the `parentId`
     * const roadmapEdgeWithParentIdOnly = await prisma.roadmapEdge.findMany({ select: { parentId: true } })
     * 
     */
    findMany<T extends RoadmapEdgeFindManyArgs>(args?: SelectSubset<T, RoadmapEdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoadmapEdge.
     * @param {RoadmapEdgeCreateArgs} args - Arguments to create a RoadmapEdge.
     * @example
     * // Create one RoadmapEdge
     * const RoadmapEdge = await prisma.roadmapEdge.create({
     *   data: {
     *     // ... data to create a RoadmapEdge
     *   }
     * })
     * 
     */
    create<T extends RoadmapEdgeCreateArgs>(args: SelectSubset<T, RoadmapEdgeCreateArgs<ExtArgs>>): Prisma__RoadmapEdgeClient<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoadmapEdges.
     * @param {RoadmapEdgeCreateManyArgs} args - Arguments to create many RoadmapEdges.
     * @example
     * // Create many RoadmapEdges
     * const roadmapEdge = await prisma.roadmapEdge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoadmapEdgeCreateManyArgs>(args?: SelectSubset<T, RoadmapEdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoadmapEdges and returns the data saved in the database.
     * @param {RoadmapEdgeCreateManyAndReturnArgs} args - Arguments to create many RoadmapEdges.
     * @example
     * // Create many RoadmapEdges
     * const roadmapEdge = await prisma.roadmapEdge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoadmapEdges and only return the `parentId`
     * const roadmapEdgeWithParentIdOnly = await prisma.roadmapEdge.createManyAndReturn({
     *   select: { parentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoadmapEdgeCreateManyAndReturnArgs>(args?: SelectSubset<T, RoadmapEdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoadmapEdge.
     * @param {RoadmapEdgeDeleteArgs} args - Arguments to delete one RoadmapEdge.
     * @example
     * // Delete one RoadmapEdge
     * const RoadmapEdge = await prisma.roadmapEdge.delete({
     *   where: {
     *     // ... filter to delete one RoadmapEdge
     *   }
     * })
     * 
     */
    delete<T extends RoadmapEdgeDeleteArgs>(args: SelectSubset<T, RoadmapEdgeDeleteArgs<ExtArgs>>): Prisma__RoadmapEdgeClient<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoadmapEdge.
     * @param {RoadmapEdgeUpdateArgs} args - Arguments to update one RoadmapEdge.
     * @example
     * // Update one RoadmapEdge
     * const roadmapEdge = await prisma.roadmapEdge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoadmapEdgeUpdateArgs>(args: SelectSubset<T, RoadmapEdgeUpdateArgs<ExtArgs>>): Prisma__RoadmapEdgeClient<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoadmapEdges.
     * @param {RoadmapEdgeDeleteManyArgs} args - Arguments to filter RoadmapEdges to delete.
     * @example
     * // Delete a few RoadmapEdges
     * const { count } = await prisma.roadmapEdge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoadmapEdgeDeleteManyArgs>(args?: SelectSubset<T, RoadmapEdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadmapEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapEdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoadmapEdges
     * const roadmapEdge = await prisma.roadmapEdge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoadmapEdgeUpdateManyArgs>(args: SelectSubset<T, RoadmapEdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadmapEdges and returns the data updated in the database.
     * @param {RoadmapEdgeUpdateManyAndReturnArgs} args - Arguments to update many RoadmapEdges.
     * @example
     * // Update many RoadmapEdges
     * const roadmapEdge = await prisma.roadmapEdge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoadmapEdges and only return the `parentId`
     * const roadmapEdgeWithParentIdOnly = await prisma.roadmapEdge.updateManyAndReturn({
     *   select: { parentId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoadmapEdgeUpdateManyAndReturnArgs>(args: SelectSubset<T, RoadmapEdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoadmapEdge.
     * @param {RoadmapEdgeUpsertArgs} args - Arguments to update or create a RoadmapEdge.
     * @example
     * // Update or create a RoadmapEdge
     * const roadmapEdge = await prisma.roadmapEdge.upsert({
     *   create: {
     *     // ... data to create a RoadmapEdge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoadmapEdge we want to update
     *   }
     * })
     */
    upsert<T extends RoadmapEdgeUpsertArgs>(args: SelectSubset<T, RoadmapEdgeUpsertArgs<ExtArgs>>): Prisma__RoadmapEdgeClient<$Result.GetResult<Prisma.$RoadmapEdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoadmapEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapEdgeCountArgs} args - Arguments to filter RoadmapEdges to count.
     * @example
     * // Count the number of RoadmapEdges
     * const count = await prisma.roadmapEdge.count({
     *   where: {
     *     // ... the filter for the RoadmapEdges we want to count
     *   }
     * })
    **/
    count<T extends RoadmapEdgeCountArgs>(
      args?: Subset<T, RoadmapEdgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadmapEdgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoadmapEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapEdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoadmapEdgeAggregateArgs>(args: Subset<T, RoadmapEdgeAggregateArgs>): Prisma.PrismaPromise<GetRoadmapEdgeAggregateType<T>>

    /**
     * Group by RoadmapEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapEdgeGroupByArgs} args - Group by arguments.
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
      T extends RoadmapEdgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadmapEdgeGroupByArgs['orderBy'] }
        : { orderBy?: RoadmapEdgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoadmapEdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadmapEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoadmapEdge model
   */
  readonly fields: RoadmapEdgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoadmapEdge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadmapEdgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends RoadmapNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoadmapNodeDefaultArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    child<T extends RoadmapNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoadmapNodeDefaultArgs<ExtArgs>>): Prisma__RoadmapNodeClient<$Result.GetResult<Prisma.$RoadmapNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoadmapEdge model
   */
  interface RoadmapEdgeFieldRefs {
    readonly parentId: FieldRef<"RoadmapEdge", 'String'>
    readonly childId: FieldRef<"RoadmapEdge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoadmapEdge findUnique
   */
  export type RoadmapEdgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapEdge to fetch.
     */
    where: RoadmapEdgeWhereUniqueInput
  }

  /**
   * RoadmapEdge findUniqueOrThrow
   */
  export type RoadmapEdgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapEdge to fetch.
     */
    where: RoadmapEdgeWhereUniqueInput
  }

  /**
   * RoadmapEdge findFirst
   */
  export type RoadmapEdgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapEdge to fetch.
     */
    where?: RoadmapEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapEdges to fetch.
     */
    orderBy?: RoadmapEdgeOrderByWithRelationInput | RoadmapEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadmapEdges.
     */
    cursor?: RoadmapEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapEdges.
     */
    distinct?: RoadmapEdgeScalarFieldEnum | RoadmapEdgeScalarFieldEnum[]
  }

  /**
   * RoadmapEdge findFirstOrThrow
   */
  export type RoadmapEdgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapEdge to fetch.
     */
    where?: RoadmapEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapEdges to fetch.
     */
    orderBy?: RoadmapEdgeOrderByWithRelationInput | RoadmapEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadmapEdges.
     */
    cursor?: RoadmapEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapEdges.
     */
    distinct?: RoadmapEdgeScalarFieldEnum | RoadmapEdgeScalarFieldEnum[]
  }

  /**
   * RoadmapEdge findMany
   */
  export type RoadmapEdgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapEdges to fetch.
     */
    where?: RoadmapEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapEdges to fetch.
     */
    orderBy?: RoadmapEdgeOrderByWithRelationInput | RoadmapEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoadmapEdges.
     */
    cursor?: RoadmapEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapEdges.
     */
    distinct?: RoadmapEdgeScalarFieldEnum | RoadmapEdgeScalarFieldEnum[]
  }

  /**
   * RoadmapEdge create
   */
  export type RoadmapEdgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * The data needed to create a RoadmapEdge.
     */
    data: XOR<RoadmapEdgeCreateInput, RoadmapEdgeUncheckedCreateInput>
  }

  /**
   * RoadmapEdge createMany
   */
  export type RoadmapEdgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoadmapEdges.
     */
    data: RoadmapEdgeCreateManyInput | RoadmapEdgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoadmapEdge createManyAndReturn
   */
  export type RoadmapEdgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * The data used to create many RoadmapEdges.
     */
    data: RoadmapEdgeCreateManyInput | RoadmapEdgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoadmapEdge update
   */
  export type RoadmapEdgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * The data needed to update a RoadmapEdge.
     */
    data: XOR<RoadmapEdgeUpdateInput, RoadmapEdgeUncheckedUpdateInput>
    /**
     * Choose, which RoadmapEdge to update.
     */
    where: RoadmapEdgeWhereUniqueInput
  }

  /**
   * RoadmapEdge updateMany
   */
  export type RoadmapEdgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoadmapEdges.
     */
    data: XOR<RoadmapEdgeUpdateManyMutationInput, RoadmapEdgeUncheckedUpdateManyInput>
    /**
     * Filter which RoadmapEdges to update
     */
    where?: RoadmapEdgeWhereInput
    /**
     * Limit how many RoadmapEdges to update.
     */
    limit?: number
  }

  /**
   * RoadmapEdge updateManyAndReturn
   */
  export type RoadmapEdgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * The data used to update RoadmapEdges.
     */
    data: XOR<RoadmapEdgeUpdateManyMutationInput, RoadmapEdgeUncheckedUpdateManyInput>
    /**
     * Filter which RoadmapEdges to update
     */
    where?: RoadmapEdgeWhereInput
    /**
     * Limit how many RoadmapEdges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoadmapEdge upsert
   */
  export type RoadmapEdgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * The filter to search for the RoadmapEdge to update in case it exists.
     */
    where: RoadmapEdgeWhereUniqueInput
    /**
     * In case the RoadmapEdge found by the `where` argument doesn't exist, create a new RoadmapEdge with this data.
     */
    create: XOR<RoadmapEdgeCreateInput, RoadmapEdgeUncheckedCreateInput>
    /**
     * In case the RoadmapEdge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadmapEdgeUpdateInput, RoadmapEdgeUncheckedUpdateInput>
  }

  /**
   * RoadmapEdge delete
   */
  export type RoadmapEdgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
    /**
     * Filter which RoadmapEdge to delete.
     */
    where: RoadmapEdgeWhereUniqueInput
  }

  /**
   * RoadmapEdge deleteMany
   */
  export type RoadmapEdgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadmapEdges to delete
     */
    where?: RoadmapEdgeWhereInput
    /**
     * Limit how many RoadmapEdges to delete.
     */
    limit?: number
  }

  /**
   * RoadmapEdge without action
   */
  export type RoadmapEdgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapEdge
     */
    select?: RoadmapEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapEdge
     */
    omit?: RoadmapEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapEdgeInclude<ExtArgs> | null
  }


  /**
   * Model QuizSection
   */

  export type AggregateQuizSection = {
    _count: QuizSectionCountAggregateOutputType | null
    _avg: QuizSectionAvgAggregateOutputType | null
    _sum: QuizSectionSumAggregateOutputType | null
    _min: QuizSectionMinAggregateOutputType | null
    _max: QuizSectionMaxAggregateOutputType | null
  }

  export type QuizSectionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuizSectionSumAggregateOutputType = {
    order: number | null
  }

  export type QuizSectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizSectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizSectionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizSectionAvgAggregateInputType = {
    order?: true
  }

  export type QuizSectionSumAggregateInputType = {
    order?: true
  }

  export type QuizSectionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizSectionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizSectionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSection to aggregate.
     */
    where?: QuizSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSections to fetch.
     */
    orderBy?: QuizSectionOrderByWithRelationInput | QuizSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizSections
    **/
    _count?: true | QuizSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizSectionMaxAggregateInputType
  }

  export type GetQuizSectionAggregateType<T extends QuizSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizSection[P]>
      : GetScalarType<T[P], AggregateQuizSection[P]>
  }




  export type QuizSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSectionWhereInput
    orderBy?: QuizSectionOrderByWithAggregationInput | QuizSectionOrderByWithAggregationInput[]
    by: QuizSectionScalarFieldEnum[] | QuizSectionScalarFieldEnum
    having?: QuizSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizSectionCountAggregateInputType | true
    _avg?: QuizSectionAvgAggregateInputType
    _sum?: QuizSectionSumAggregateInputType
    _min?: QuizSectionMinAggregateInputType
    _max?: QuizSectionMaxAggregateInputType
  }

  export type QuizSectionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: QuizSectionCountAggregateOutputType | null
    _avg: QuizSectionAvgAggregateOutputType | null
    _sum: QuizSectionSumAggregateOutputType | null
    _min: QuizSectionMinAggregateOutputType | null
    _max: QuizSectionMaxAggregateOutputType | null
  }

  type GetQuizSectionGroupByPayload<T extends QuizSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizSectionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizSectionGroupByOutputType[P]>
        }
      >
    >


  export type QuizSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | QuizSection$questionsArgs<ExtArgs>
    _count?: boolean | QuizSectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSection"]>

  export type QuizSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizSection"]>

  export type QuizSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quizSection"]>

  export type QuizSectionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["quizSection"]>
  export type QuizSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizSection$questionsArgs<ExtArgs>
    _count?: boolean | QuizSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuizSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuizSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizSection"
    objects: {
      questions: Prisma.$QuizQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizSection"]>
    composites: {}
  }

  type QuizSectionGetPayload<S extends boolean | null | undefined | QuizSectionDefaultArgs> = $Result.GetResult<Prisma.$QuizSectionPayload, S>

  type QuizSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizSectionCountAggregateInputType | true
    }

  export interface QuizSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizSection'], meta: { name: 'QuizSection' } }
    /**
     * Find zero or one QuizSection that matches the filter.
     * @param {QuizSectionFindUniqueArgs} args - Arguments to find a QuizSection
     * @example
     * // Get one QuizSection
     * const quizSection = await prisma.quizSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizSectionFindUniqueArgs>(args: SelectSubset<T, QuizSectionFindUniqueArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizSectionFindUniqueOrThrowArgs} args - Arguments to find a QuizSection
     * @example
     * // Get one QuizSection
     * const quizSection = await prisma.quizSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSectionFindFirstArgs} args - Arguments to find a QuizSection
     * @example
     * // Get one QuizSection
     * const quizSection = await prisma.quizSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizSectionFindFirstArgs>(args?: SelectSubset<T, QuizSectionFindFirstArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSectionFindFirstOrThrowArgs} args - Arguments to find a QuizSection
     * @example
     * // Get one QuizSection
     * const quizSection = await prisma.quizSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizSections
     * const quizSections = await prisma.quizSection.findMany()
     * 
     * // Get first 10 QuizSections
     * const quizSections = await prisma.quizSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizSectionWithIdOnly = await prisma.quizSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizSectionFindManyArgs>(args?: SelectSubset<T, QuizSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizSection.
     * @param {QuizSectionCreateArgs} args - Arguments to create a QuizSection.
     * @example
     * // Create one QuizSection
     * const QuizSection = await prisma.quizSection.create({
     *   data: {
     *     // ... data to create a QuizSection
     *   }
     * })
     * 
     */
    create<T extends QuizSectionCreateArgs>(args: SelectSubset<T, QuizSectionCreateArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizSections.
     * @param {QuizSectionCreateManyArgs} args - Arguments to create many QuizSections.
     * @example
     * // Create many QuizSections
     * const quizSection = await prisma.quizSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizSectionCreateManyArgs>(args?: SelectSubset<T, QuizSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizSections and returns the data saved in the database.
     * @param {QuizSectionCreateManyAndReturnArgs} args - Arguments to create many QuizSections.
     * @example
     * // Create many QuizSections
     * const quizSection = await prisma.quizSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizSections and only return the `id`
     * const quizSectionWithIdOnly = await prisma.quizSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizSection.
     * @param {QuizSectionDeleteArgs} args - Arguments to delete one QuizSection.
     * @example
     * // Delete one QuizSection
     * const QuizSection = await prisma.quizSection.delete({
     *   where: {
     *     // ... filter to delete one QuizSection
     *   }
     * })
     * 
     */
    delete<T extends QuizSectionDeleteArgs>(args: SelectSubset<T, QuizSectionDeleteArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizSection.
     * @param {QuizSectionUpdateArgs} args - Arguments to update one QuizSection.
     * @example
     * // Update one QuizSection
     * const quizSection = await prisma.quizSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizSectionUpdateArgs>(args: SelectSubset<T, QuizSectionUpdateArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizSections.
     * @param {QuizSectionDeleteManyArgs} args - Arguments to filter QuizSections to delete.
     * @example
     * // Delete a few QuizSections
     * const { count } = await prisma.quizSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizSectionDeleteManyArgs>(args?: SelectSubset<T, QuizSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizSections
     * const quizSection = await prisma.quizSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizSectionUpdateManyArgs>(args: SelectSubset<T, QuizSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSections and returns the data updated in the database.
     * @param {QuizSectionUpdateManyAndReturnArgs} args - Arguments to update many QuizSections.
     * @example
     * // Update many QuizSections
     * const quizSection = await prisma.quizSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizSections and only return the `id`
     * const quizSectionWithIdOnly = await prisma.quizSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizSection.
     * @param {QuizSectionUpsertArgs} args - Arguments to update or create a QuizSection.
     * @example
     * // Update or create a QuizSection
     * const quizSection = await prisma.quizSection.upsert({
     *   create: {
     *     // ... data to create a QuizSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizSection we want to update
     *   }
     * })
     */
    upsert<T extends QuizSectionUpsertArgs>(args: SelectSubset<T, QuizSectionUpsertArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSectionCountArgs} args - Arguments to filter QuizSections to count.
     * @example
     * // Count the number of QuizSections
     * const count = await prisma.quizSection.count({
     *   where: {
     *     // ... the filter for the QuizSections we want to count
     *   }
     * })
    **/
    count<T extends QuizSectionCountArgs>(
      args?: Subset<T, QuizSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizSectionAggregateArgs>(args: Subset<T, QuizSectionAggregateArgs>): Prisma.PrismaPromise<GetQuizSectionAggregateType<T>>

    /**
     * Group by QuizSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSectionGroupByArgs} args - Group by arguments.
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
      T extends QuizSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizSectionGroupByArgs['orderBy'] }
        : { orderBy?: QuizSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizSection model
   */
  readonly fields: QuizSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends QuizSection$questionsArgs<ExtArgs> = {}>(args?: Subset<T, QuizSection$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizSection model
   */
  interface QuizSectionFieldRefs {
    readonly id: FieldRef<"QuizSection", 'String'>
    readonly title: FieldRef<"QuizSection", 'String'>
    readonly description: FieldRef<"QuizSection", 'String'>
    readonly order: FieldRef<"QuizSection", 'Int'>
    readonly createdAt: FieldRef<"QuizSection", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizSection findUnique
   */
  export type QuizSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSection to fetch.
     */
    where: QuizSectionWhereUniqueInput
  }

  /**
   * QuizSection findUniqueOrThrow
   */
  export type QuizSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSection to fetch.
     */
    where: QuizSectionWhereUniqueInput
  }

  /**
   * QuizSection findFirst
   */
  export type QuizSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSection to fetch.
     */
    where?: QuizSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSections to fetch.
     */
    orderBy?: QuizSectionOrderByWithRelationInput | QuizSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSections.
     */
    cursor?: QuizSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSections.
     */
    distinct?: QuizSectionScalarFieldEnum | QuizSectionScalarFieldEnum[]
  }

  /**
   * QuizSection findFirstOrThrow
   */
  export type QuizSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSection to fetch.
     */
    where?: QuizSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSections to fetch.
     */
    orderBy?: QuizSectionOrderByWithRelationInput | QuizSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSections.
     */
    cursor?: QuizSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSections.
     */
    distinct?: QuizSectionScalarFieldEnum | QuizSectionScalarFieldEnum[]
  }

  /**
   * QuizSection findMany
   */
  export type QuizSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSections to fetch.
     */
    where?: QuizSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSections to fetch.
     */
    orderBy?: QuizSectionOrderByWithRelationInput | QuizSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizSections.
     */
    cursor?: QuizSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSections.
     */
    distinct?: QuizSectionScalarFieldEnum | QuizSectionScalarFieldEnum[]
  }

  /**
   * QuizSection create
   */
  export type QuizSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizSection.
     */
    data: XOR<QuizSectionCreateInput, QuizSectionUncheckedCreateInput>
  }

  /**
   * QuizSection createMany
   */
  export type QuizSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizSections.
     */
    data: QuizSectionCreateManyInput | QuizSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSection createManyAndReturn
   */
  export type QuizSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizSections.
     */
    data: QuizSectionCreateManyInput | QuizSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSection update
   */
  export type QuizSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizSection.
     */
    data: XOR<QuizSectionUpdateInput, QuizSectionUncheckedUpdateInput>
    /**
     * Choose, which QuizSection to update.
     */
    where: QuizSectionWhereUniqueInput
  }

  /**
   * QuizSection updateMany
   */
  export type QuizSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizSections.
     */
    data: XOR<QuizSectionUpdateManyMutationInput, QuizSectionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSections to update
     */
    where?: QuizSectionWhereInput
    /**
     * Limit how many QuizSections to update.
     */
    limit?: number
  }

  /**
   * QuizSection updateManyAndReturn
   */
  export type QuizSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * The data used to update QuizSections.
     */
    data: XOR<QuizSectionUpdateManyMutationInput, QuizSectionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSections to update
     */
    where?: QuizSectionWhereInput
    /**
     * Limit how many QuizSections to update.
     */
    limit?: number
  }

  /**
   * QuizSection upsert
   */
  export type QuizSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizSection to update in case it exists.
     */
    where: QuizSectionWhereUniqueInput
    /**
     * In case the QuizSection found by the `where` argument doesn't exist, create a new QuizSection with this data.
     */
    create: XOR<QuizSectionCreateInput, QuizSectionUncheckedCreateInput>
    /**
     * In case the QuizSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizSectionUpdateInput, QuizSectionUncheckedUpdateInput>
  }

  /**
   * QuizSection delete
   */
  export type QuizSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    /**
     * Filter which QuizSection to delete.
     */
    where: QuizSectionWhereUniqueInput
  }

  /**
   * QuizSection deleteMany
   */
  export type QuizSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSections to delete
     */
    where?: QuizSectionWhereInput
    /**
     * Limit how many QuizSections to delete.
     */
    limit?: number
  }

  /**
   * QuizSection.questions
   */
  export type QuizSection$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    cursor?: QuizQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizSection without action
   */
  export type QuizSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
  }


  /**
   * Model QuizQuestion
   */

  export type AggregateQuizQuestion = {
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  export type QuizQuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuizQuestionSumAggregateOutputType = {
    order: number | null
  }

  export type QuizQuestionMinAggregateOutputType = {
    id: string | null
    sectionId: string | null
    prompt: string | null
    helperText: string | null
    type: $Enums.QuestionType | null
    order: number | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizQuestionMaxAggregateOutputType = {
    id: string | null
    sectionId: string | null
    prompt: string | null
    helperText: string | null
    type: $Enums.QuestionType | null
    order: number | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizQuestionCountAggregateOutputType = {
    id: number
    sectionId: number
    prompt: number
    helperText: number
    type: number
    order: number
    isRequired: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizQuestionAvgAggregateInputType = {
    order?: true
  }

  export type QuizQuestionSumAggregateInputType = {
    order?: true
  }

  export type QuizQuestionMinAggregateInputType = {
    id?: true
    sectionId?: true
    prompt?: true
    helperText?: true
    type?: true
    order?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizQuestionMaxAggregateInputType = {
    id?: true
    sectionId?: true
    prompt?: true
    helperText?: true
    type?: true
    order?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizQuestionCountAggregateInputType = {
    id?: true
    sectionId?: true
    prompt?: true
    helperText?: true
    type?: true
    order?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestion to aggregate.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizQuestions
    **/
    _count?: true | QuizQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type GetQuizQuestionAggregateType<T extends QuizQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizQuestion[P]>
      : GetScalarType<T[P], AggregateQuizQuestion[P]>
  }




  export type QuizQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionWhereInput
    orderBy?: QuizQuestionOrderByWithAggregationInput | QuizQuestionOrderByWithAggregationInput[]
    by: QuizQuestionScalarFieldEnum[] | QuizQuestionScalarFieldEnum
    having?: QuizQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizQuestionCountAggregateInputType | true
    _avg?: QuizQuestionAvgAggregateInputType
    _sum?: QuizQuestionSumAggregateInputType
    _min?: QuizQuestionMinAggregateInputType
    _max?: QuizQuestionMaxAggregateInputType
  }

  export type QuizQuestionGroupByOutputType = {
    id: string
    sectionId: string | null
    prompt: string
    helperText: string | null
    type: $Enums.QuestionType
    order: number
    isRequired: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuizQuestionCountAggregateOutputType | null
    _avg: QuizQuestionAvgAggregateOutputType | null
    _sum: QuizQuestionSumAggregateOutputType | null
    _min: QuizQuestionMinAggregateOutputType | null
    _max: QuizQuestionMaxAggregateOutputType | null
  }

  type GetQuizQuestionGroupByPayload<T extends QuizQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizQuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuizQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    prompt?: boolean
    helperText?: boolean
    type?: boolean
    order?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | QuizQuestion$sectionArgs<ExtArgs>
    options?: boolean | QuizQuestion$optionsArgs<ExtArgs>
    assessmentAnswers?: boolean | QuizQuestion$assessmentAnswersArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    prompt?: boolean
    helperText?: boolean
    type?: boolean
    order?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | QuizQuestion$sectionArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectionId?: boolean
    prompt?: boolean
    helperText?: boolean
    type?: boolean
    order?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | QuizQuestion$sectionArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestion"]>

  export type QuizQuestionSelectScalar = {
    id?: boolean
    sectionId?: boolean
    prompt?: boolean
    helperText?: boolean
    type?: boolean
    order?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectionId" | "prompt" | "helperText" | "type" | "order" | "isRequired" | "createdAt" | "updatedAt", ExtArgs["result"]["quizQuestion"]>
  export type QuizQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | QuizQuestion$sectionArgs<ExtArgs>
    options?: boolean | QuizQuestion$optionsArgs<ExtArgs>
    assessmentAnswers?: boolean | QuizQuestion$assessmentAnswersArgs<ExtArgs>
    _count?: boolean | QuizQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | QuizQuestion$sectionArgs<ExtArgs>
  }
  export type QuizQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | QuizQuestion$sectionArgs<ExtArgs>
  }

  export type $QuizQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizQuestion"
    objects: {
      section: Prisma.$QuizSectionPayload<ExtArgs> | null
      options: Prisma.$QuizOptionPayload<ExtArgs>[]
      assessmentAnswers: Prisma.$AssessmentAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectionId: string | null
      prompt: string
      helperText: string | null
      type: $Enums.QuestionType
      order: number
      isRequired: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizQuestion"]>
    composites: {}
  }

  type QuizQuestionGetPayload<S extends boolean | null | undefined | QuizQuestionDefaultArgs> = $Result.GetResult<Prisma.$QuizQuestionPayload, S>

  type QuizQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizQuestionCountAggregateInputType | true
    }

  export interface QuizQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestion'], meta: { name: 'QuizQuestion' } }
    /**
     * Find zero or one QuizQuestion that matches the filter.
     * @param {QuizQuestionFindUniqueArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizQuestionFindUniqueArgs>(args: SelectSubset<T, QuizQuestionFindUniqueArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizQuestionFindUniqueOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizQuestionFindFirstArgs>(args?: SelectSubset<T, QuizQuestionFindFirstArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindFirstOrThrowArgs} args - Arguments to find a QuizQuestion
     * @example
     * // Get one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany()
     * 
     * // Get first 10 QuizQuestions
     * const quizQuestions = await prisma.quizQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizQuestionFindManyArgs>(args?: SelectSubset<T, QuizQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizQuestion.
     * @param {QuizQuestionCreateArgs} args - Arguments to create a QuizQuestion.
     * @example
     * // Create one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.create({
     *   data: {
     *     // ... data to create a QuizQuestion
     *   }
     * })
     * 
     */
    create<T extends QuizQuestionCreateArgs>(args: SelectSubset<T, QuizQuestionCreateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizQuestions.
     * @param {QuizQuestionCreateManyArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizQuestionCreateManyArgs>(args?: SelectSubset<T, QuizQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizQuestions and returns the data saved in the database.
     * @param {QuizQuestionCreateManyAndReturnArgs} args - Arguments to create many QuizQuestions.
     * @example
     * // Create many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizQuestions and only return the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizQuestion.
     * @param {QuizQuestionDeleteArgs} args - Arguments to delete one QuizQuestion.
     * @example
     * // Delete one QuizQuestion
     * const QuizQuestion = await prisma.quizQuestion.delete({
     *   where: {
     *     // ... filter to delete one QuizQuestion
     *   }
     * })
     * 
     */
    delete<T extends QuizQuestionDeleteArgs>(args: SelectSubset<T, QuizQuestionDeleteArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizQuestion.
     * @param {QuizQuestionUpdateArgs} args - Arguments to update one QuizQuestion.
     * @example
     * // Update one QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizQuestionUpdateArgs>(args: SelectSubset<T, QuizQuestionUpdateArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizQuestions.
     * @param {QuizQuestionDeleteManyArgs} args - Arguments to filter QuizQuestions to delete.
     * @example
     * // Delete a few QuizQuestions
     * const { count } = await prisma.quizQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizQuestionDeleteManyArgs>(args?: SelectSubset<T, QuizQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizQuestionUpdateManyArgs>(args: SelectSubset<T, QuizQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestions and returns the data updated in the database.
     * @param {QuizQuestionUpdateManyAndReturnArgs} args - Arguments to update many QuizQuestions.
     * @example
     * // Update many QuizQuestions
     * const quizQuestion = await prisma.quizQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizQuestions and only return the `id`
     * const quizQuestionWithIdOnly = await prisma.quizQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizQuestion.
     * @param {QuizQuestionUpsertArgs} args - Arguments to update or create a QuizQuestion.
     * @example
     * // Update or create a QuizQuestion
     * const quizQuestion = await prisma.quizQuestion.upsert({
     *   create: {
     *     // ... data to create a QuizQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizQuestion we want to update
     *   }
     * })
     */
    upsert<T extends QuizQuestionUpsertArgs>(args: SelectSubset<T, QuizQuestionUpsertArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionCountArgs} args - Arguments to filter QuizQuestions to count.
     * @example
     * // Count the number of QuizQuestions
     * const count = await prisma.quizQuestion.count({
     *   where: {
     *     // ... the filter for the QuizQuestions we want to count
     *   }
     * })
    **/
    count<T extends QuizQuestionCountArgs>(
      args?: Subset<T, QuizQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizQuestionAggregateArgs>(args: Subset<T, QuizQuestionAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionAggregateType<T>>

    /**
     * Group by QuizQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionGroupByArgs} args - Group by arguments.
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
      T extends QuizQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizQuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuizQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizQuestion model
   */
  readonly fields: QuizQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends QuizQuestion$sectionArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestion$sectionArgs<ExtArgs>>): Prisma__QuizSectionClient<$Result.GetResult<Prisma.$QuizSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    options<T extends QuizQuestion$optionsArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestion$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assessmentAnswers<T extends QuizQuestion$assessmentAnswersArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestion$assessmentAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizQuestion model
   */
  interface QuizQuestionFieldRefs {
    readonly id: FieldRef<"QuizQuestion", 'String'>
    readonly sectionId: FieldRef<"QuizQuestion", 'String'>
    readonly prompt: FieldRef<"QuizQuestion", 'String'>
    readonly helperText: FieldRef<"QuizQuestion", 'String'>
    readonly type: FieldRef<"QuizQuestion", 'QuestionType'>
    readonly order: FieldRef<"QuizQuestion", 'Int'>
    readonly isRequired: FieldRef<"QuizQuestion", 'Boolean'>
    readonly createdAt: FieldRef<"QuizQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizQuestion findUnique
   */
  export type QuizQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findUniqueOrThrow
   */
  export type QuizQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion findFirst
   */
  export type QuizQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findFirstOrThrow
   */
  export type QuizQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestion to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion findMany
   */
  export type QuizQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestions to fetch.
     */
    where?: QuizQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestions to fetch.
     */
    orderBy?: QuizQuestionOrderByWithRelationInput | QuizQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizQuestions.
     */
    cursor?: QuizQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestions.
     */
    distinct?: QuizQuestionScalarFieldEnum | QuizQuestionScalarFieldEnum[]
  }

  /**
   * QuizQuestion create
   */
  export type QuizQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizQuestion.
     */
    data: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
  }

  /**
   * QuizQuestion createMany
   */
  export type QuizQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizQuestion createManyAndReturn
   */
  export type QuizQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizQuestions.
     */
    data: QuizQuestionCreateManyInput | QuizQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizQuestion update
   */
  export type QuizQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizQuestion.
     */
    data: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
    /**
     * Choose, which QuizQuestion to update.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion updateMany
   */
  export type QuizQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
  }

  /**
   * QuizQuestion updateManyAndReturn
   */
  export type QuizQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * The data used to update QuizQuestions.
     */
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestions to update
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizQuestion upsert
   */
  export type QuizQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizQuestion to update in case it exists.
     */
    where: QuizQuestionWhereUniqueInput
    /**
     * In case the QuizQuestion found by the `where` argument doesn't exist, create a new QuizQuestion with this data.
     */
    create: XOR<QuizQuestionCreateInput, QuizQuestionUncheckedCreateInput>
    /**
     * In case the QuizQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizQuestionUpdateInput, QuizQuestionUncheckedUpdateInput>
  }

  /**
   * QuizQuestion delete
   */
  export type QuizQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
    /**
     * Filter which QuizQuestion to delete.
     */
    where: QuizQuestionWhereUniqueInput
  }

  /**
   * QuizQuestion deleteMany
   */
  export type QuizQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestions to delete
     */
    where?: QuizQuestionWhereInput
    /**
     * Limit how many QuizQuestions to delete.
     */
    limit?: number
  }

  /**
   * QuizQuestion.section
   */
  export type QuizQuestion$sectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSection
     */
    select?: QuizSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSection
     */
    omit?: QuizSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSectionInclude<ExtArgs> | null
    where?: QuizSectionWhereInput
  }

  /**
   * QuizQuestion.options
   */
  export type QuizQuestion$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    where?: QuizOptionWhereInput
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    cursor?: QuizOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizQuestion.assessmentAnswers
   */
  export type QuizQuestion$assessmentAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    where?: AssessmentAnswerWhereInput
    orderBy?: AssessmentAnswerOrderByWithRelationInput | AssessmentAnswerOrderByWithRelationInput[]
    cursor?: AssessmentAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAnswerScalarFieldEnum | AssessmentAnswerScalarFieldEnum[]
  }

  /**
   * QuizQuestion without action
   */
  export type QuizQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestion
     */
    select?: QuizQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestion
     */
    omit?: QuizQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuizOption
   */

  export type AggregateQuizOption = {
    _count: QuizOptionCountAggregateOutputType | null
    _avg: QuizOptionAvgAggregateOutputType | null
    _sum: QuizOptionSumAggregateOutputType | null
    _min: QuizOptionMinAggregateOutputType | null
    _max: QuizOptionMaxAggregateOutputType | null
  }

  export type QuizOptionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuizOptionSumAggregateOutputType = {
    order: number | null
  }

  export type QuizOptionMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    label: string | null
    value: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizOptionMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    label: string | null
    value: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizOptionCountAggregateOutputType = {
    id: number
    questionId: number
    label: number
    value: number
    order: number
    scoring: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizOptionAvgAggregateInputType = {
    order?: true
  }

  export type QuizOptionSumAggregateInputType = {
    order?: true
  }

  export type QuizOptionMinAggregateInputType = {
    id?: true
    questionId?: true
    label?: true
    value?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizOptionMaxAggregateInputType = {
    id?: true
    questionId?: true
    label?: true
    value?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizOptionCountAggregateInputType = {
    id?: true
    questionId?: true
    label?: true
    value?: true
    order?: true
    scoring?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizOption to aggregate.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizOptions
    **/
    _count?: true | QuizOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizOptionMaxAggregateInputType
  }

  export type GetQuizOptionAggregateType<T extends QuizOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizOption[P]>
      : GetScalarType<T[P], AggregateQuizOption[P]>
  }




  export type QuizOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizOptionWhereInput
    orderBy?: QuizOptionOrderByWithAggregationInput | QuizOptionOrderByWithAggregationInput[]
    by: QuizOptionScalarFieldEnum[] | QuizOptionScalarFieldEnum
    having?: QuizOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizOptionCountAggregateInputType | true
    _avg?: QuizOptionAvgAggregateInputType
    _sum?: QuizOptionSumAggregateInputType
    _min?: QuizOptionMinAggregateInputType
    _max?: QuizOptionMaxAggregateInputType
  }

  export type QuizOptionGroupByOutputType = {
    id: string
    questionId: string
    label: string
    value: string | null
    order: number
    scoring: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: QuizOptionCountAggregateOutputType | null
    _avg: QuizOptionAvgAggregateOutputType | null
    _sum: QuizOptionSumAggregateOutputType | null
    _min: QuizOptionMinAggregateOutputType | null
    _max: QuizOptionMaxAggregateOutputType | null
  }

  type GetQuizOptionGroupByPayload<T extends QuizOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizOptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizOptionGroupByOutputType[P]>
        }
      >
    >


  export type QuizOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    label?: boolean
    value?: boolean
    order?: boolean
    scoring?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    assessmentAnswers?: boolean | QuizOption$assessmentAnswersArgs<ExtArgs>
    _count?: boolean | QuizOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizOption"]>

  export type QuizOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    label?: boolean
    value?: boolean
    order?: boolean
    scoring?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizOption"]>

  export type QuizOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    label?: boolean
    value?: boolean
    order?: boolean
    scoring?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizOption"]>

  export type QuizOptionSelectScalar = {
    id?: boolean
    questionId?: boolean
    label?: boolean
    value?: boolean
    order?: boolean
    scoring?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "label" | "value" | "order" | "scoring" | "createdAt" | "updatedAt", ExtArgs["result"]["quizOption"]>
  export type QuizOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    assessmentAnswers?: boolean | QuizOption$assessmentAnswersArgs<ExtArgs>
    _count?: boolean | QuizOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }
  export type QuizOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
  }

  export type $QuizOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizOption"
    objects: {
      question: Prisma.$QuizQuestionPayload<ExtArgs>
      assessmentAnswers: Prisma.$AssessmentAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      label: string
      value: string | null
      order: number
      scoring: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quizOption"]>
    composites: {}
  }

  type QuizOptionGetPayload<S extends boolean | null | undefined | QuizOptionDefaultArgs> = $Result.GetResult<Prisma.$QuizOptionPayload, S>

  type QuizOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizOptionCountAggregateInputType | true
    }

  export interface QuizOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizOption'], meta: { name: 'QuizOption' } }
    /**
     * Find zero or one QuizOption that matches the filter.
     * @param {QuizOptionFindUniqueArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizOptionFindUniqueArgs>(args: SelectSubset<T, QuizOptionFindUniqueArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizOptionFindUniqueOrThrowArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindFirstArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizOptionFindFirstArgs>(args?: SelectSubset<T, QuizOptionFindFirstArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindFirstOrThrowArgs} args - Arguments to find a QuizOption
     * @example
     * // Get one QuizOption
     * const quizOption = await prisma.quizOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizOptions
     * const quizOptions = await prisma.quizOption.findMany()
     * 
     * // Get first 10 QuizOptions
     * const quizOptions = await prisma.quizOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizOptionWithIdOnly = await prisma.quizOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizOptionFindManyArgs>(args?: SelectSubset<T, QuizOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizOption.
     * @param {QuizOptionCreateArgs} args - Arguments to create a QuizOption.
     * @example
     * // Create one QuizOption
     * const QuizOption = await prisma.quizOption.create({
     *   data: {
     *     // ... data to create a QuizOption
     *   }
     * })
     * 
     */
    create<T extends QuizOptionCreateArgs>(args: SelectSubset<T, QuizOptionCreateArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizOptions.
     * @param {QuizOptionCreateManyArgs} args - Arguments to create many QuizOptions.
     * @example
     * // Create many QuizOptions
     * const quizOption = await prisma.quizOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizOptionCreateManyArgs>(args?: SelectSubset<T, QuizOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizOptions and returns the data saved in the database.
     * @param {QuizOptionCreateManyAndReturnArgs} args - Arguments to create many QuizOptions.
     * @example
     * // Create many QuizOptions
     * const quizOption = await prisma.quizOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizOptions and only return the `id`
     * const quizOptionWithIdOnly = await prisma.quizOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizOption.
     * @param {QuizOptionDeleteArgs} args - Arguments to delete one QuizOption.
     * @example
     * // Delete one QuizOption
     * const QuizOption = await prisma.quizOption.delete({
     *   where: {
     *     // ... filter to delete one QuizOption
     *   }
     * })
     * 
     */
    delete<T extends QuizOptionDeleteArgs>(args: SelectSubset<T, QuizOptionDeleteArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizOption.
     * @param {QuizOptionUpdateArgs} args - Arguments to update one QuizOption.
     * @example
     * // Update one QuizOption
     * const quizOption = await prisma.quizOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizOptionUpdateArgs>(args: SelectSubset<T, QuizOptionUpdateArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizOptions.
     * @param {QuizOptionDeleteManyArgs} args - Arguments to filter QuizOptions to delete.
     * @example
     * // Delete a few QuizOptions
     * const { count } = await prisma.quizOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizOptionDeleteManyArgs>(args?: SelectSubset<T, QuizOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizOptions
     * const quizOption = await prisma.quizOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizOptionUpdateManyArgs>(args: SelectSubset<T, QuizOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizOptions and returns the data updated in the database.
     * @param {QuizOptionUpdateManyAndReturnArgs} args - Arguments to update many QuizOptions.
     * @example
     * // Update many QuizOptions
     * const quizOption = await prisma.quizOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizOptions and only return the `id`
     * const quizOptionWithIdOnly = await prisma.quizOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizOption.
     * @param {QuizOptionUpsertArgs} args - Arguments to update or create a QuizOption.
     * @example
     * // Update or create a QuizOption
     * const quizOption = await prisma.quizOption.upsert({
     *   create: {
     *     // ... data to create a QuizOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizOption we want to update
     *   }
     * })
     */
    upsert<T extends QuizOptionUpsertArgs>(args: SelectSubset<T, QuizOptionUpsertArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionCountArgs} args - Arguments to filter QuizOptions to count.
     * @example
     * // Count the number of QuizOptions
     * const count = await prisma.quizOption.count({
     *   where: {
     *     // ... the filter for the QuizOptions we want to count
     *   }
     * })
    **/
    count<T extends QuizOptionCountArgs>(
      args?: Subset<T, QuizOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizOptionAggregateArgs>(args: Subset<T, QuizOptionAggregateArgs>): Prisma.PrismaPromise<GetQuizOptionAggregateType<T>>

    /**
     * Group by QuizOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizOptionGroupByArgs} args - Group by arguments.
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
      T extends QuizOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizOptionGroupByArgs['orderBy'] }
        : { orderBy?: QuizOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizOption model
   */
  readonly fields: QuizOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestionDefaultArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assessmentAnswers<T extends QuizOption$assessmentAnswersArgs<ExtArgs> = {}>(args?: Subset<T, QuizOption$assessmentAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizOption model
   */
  interface QuizOptionFieldRefs {
    readonly id: FieldRef<"QuizOption", 'String'>
    readonly questionId: FieldRef<"QuizOption", 'String'>
    readonly label: FieldRef<"QuizOption", 'String'>
    readonly value: FieldRef<"QuizOption", 'String'>
    readonly order: FieldRef<"QuizOption", 'Int'>
    readonly scoring: FieldRef<"QuizOption", 'Json'>
    readonly createdAt: FieldRef<"QuizOption", 'DateTime'>
    readonly updatedAt: FieldRef<"QuizOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizOption findUnique
   */
  export type QuizOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption findUniqueOrThrow
   */
  export type QuizOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption findFirst
   */
  export type QuizOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizOptions.
     */
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption findFirstOrThrow
   */
  export type QuizOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOption to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizOptions.
     */
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption findMany
   */
  export type QuizOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuizOptions to fetch.
     */
    where?: QuizOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizOptions to fetch.
     */
    orderBy?: QuizOptionOrderByWithRelationInput | QuizOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizOptions.
     */
    cursor?: QuizOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizOptions.
     */
    distinct?: QuizOptionScalarFieldEnum | QuizOptionScalarFieldEnum[]
  }

  /**
   * QuizOption create
   */
  export type QuizOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizOption.
     */
    data: XOR<QuizOptionCreateInput, QuizOptionUncheckedCreateInput>
  }

  /**
   * QuizOption createMany
   */
  export type QuizOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizOptions.
     */
    data: QuizOptionCreateManyInput | QuizOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizOption createManyAndReturn
   */
  export type QuizOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizOptions.
     */
    data: QuizOptionCreateManyInput | QuizOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizOption update
   */
  export type QuizOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizOption.
     */
    data: XOR<QuizOptionUpdateInput, QuizOptionUncheckedUpdateInput>
    /**
     * Choose, which QuizOption to update.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption updateMany
   */
  export type QuizOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizOptions.
     */
    data: XOR<QuizOptionUpdateManyMutationInput, QuizOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuizOptions to update
     */
    where?: QuizOptionWhereInput
    /**
     * Limit how many QuizOptions to update.
     */
    limit?: number
  }

  /**
   * QuizOption updateManyAndReturn
   */
  export type QuizOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * The data used to update QuizOptions.
     */
    data: XOR<QuizOptionUpdateManyMutationInput, QuizOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuizOptions to update
     */
    where?: QuizOptionWhereInput
    /**
     * Limit how many QuizOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizOption upsert
   */
  export type QuizOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizOption to update in case it exists.
     */
    where: QuizOptionWhereUniqueInput
    /**
     * In case the QuizOption found by the `where` argument doesn't exist, create a new QuizOption with this data.
     */
    create: XOR<QuizOptionCreateInput, QuizOptionUncheckedCreateInput>
    /**
     * In case the QuizOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizOptionUpdateInput, QuizOptionUncheckedUpdateInput>
  }

  /**
   * QuizOption delete
   */
  export type QuizOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
    /**
     * Filter which QuizOption to delete.
     */
    where: QuizOptionWhereUniqueInput
  }

  /**
   * QuizOption deleteMany
   */
  export type QuizOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizOptions to delete
     */
    where?: QuizOptionWhereInput
    /**
     * Limit how many QuizOptions to delete.
     */
    limit?: number
  }

  /**
   * QuizOption.assessmentAnswers
   */
  export type QuizOption$assessmentAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    where?: AssessmentAnswerWhereInput
    orderBy?: AssessmentAnswerOrderByWithRelationInput | AssessmentAnswerOrderByWithRelationInput[]
    cursor?: AssessmentAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAnswerScalarFieldEnum | AssessmentAnswerScalarFieldEnum[]
  }

  /**
   * QuizOption without action
   */
  export type QuizOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizOption
     */
    select?: QuizOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizOption
     */
    omit?: QuizOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizOptionInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentAttempt
   */

  export type AggregateAssessmentAttempt = {
    _count: AssessmentAttemptCountAggregateOutputType | null
    _min: AssessmentAttemptMinAggregateOutputType | null
    _max: AssessmentAttemptMaxAggregateOutputType | null
  }

  export type AssessmentAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    primary: string | null
    secondary: string | null
    createdAt: Date | null
  }

  export type AssessmentAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    primary: string | null
    secondary: string | null
    createdAt: Date | null
  }

  export type AssessmentAttemptCountAggregateOutputType = {
    id: number
    userId: number
    scores: number
    primary: number
    secondary: number
    createdAt: number
    _all: number
  }


  export type AssessmentAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    primary?: true
    secondary?: true
    createdAt?: true
  }

  export type AssessmentAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    primary?: true
    secondary?: true
    createdAt?: true
  }

  export type AssessmentAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    scores?: true
    primary?: true
    secondary?: true
    createdAt?: true
    _all?: true
  }

  export type AssessmentAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentAttempt to aggregate.
     */
    where?: AssessmentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAttempts to fetch.
     */
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentAttempts
    **/
    _count?: true | AssessmentAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentAttemptMaxAggregateInputType
  }

  export type GetAssessmentAttemptAggregateType<T extends AssessmentAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentAttempt[P]>
      : GetScalarType<T[P], AggregateAssessmentAttempt[P]>
  }




  export type AssessmentAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAttemptWhereInput
    orderBy?: AssessmentAttemptOrderByWithAggregationInput | AssessmentAttemptOrderByWithAggregationInput[]
    by: AssessmentAttemptScalarFieldEnum[] | AssessmentAttemptScalarFieldEnum
    having?: AssessmentAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentAttemptCountAggregateInputType | true
    _min?: AssessmentAttemptMinAggregateInputType
    _max?: AssessmentAttemptMaxAggregateInputType
  }

  export type AssessmentAttemptGroupByOutputType = {
    id: string
    userId: string
    scores: JsonValue
    primary: string
    secondary: string | null
    createdAt: Date
    _count: AssessmentAttemptCountAggregateOutputType | null
    _min: AssessmentAttemptMinAggregateOutputType | null
    _max: AssessmentAttemptMaxAggregateOutputType | null
  }

  type GetAssessmentAttemptGroupByPayload<T extends AssessmentAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentAttemptGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scores?: boolean
    primary?: boolean
    secondary?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | AssessmentAttempt$answersArgs<ExtArgs>
    _count?: boolean | AssessmentAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAttempt"]>

  export type AssessmentAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scores?: boolean
    primary?: boolean
    secondary?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAttempt"]>

  export type AssessmentAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scores?: boolean
    primary?: boolean
    secondary?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAttempt"]>

  export type AssessmentAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    scores?: boolean
    primary?: boolean
    secondary?: boolean
    createdAt?: boolean
  }

  export type AssessmentAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "scores" | "primary" | "secondary" | "createdAt", ExtArgs["result"]["assessmentAttempt"]>
  export type AssessmentAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    answers?: boolean | AssessmentAttempt$answersArgs<ExtArgs>
    _count?: boolean | AssessmentAttemptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssessmentAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssessmentAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssessmentAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      answers: Prisma.$AssessmentAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      scores: Prisma.JsonValue
      primary: string
      secondary: string | null
      createdAt: Date
    }, ExtArgs["result"]["assessmentAttempt"]>
    composites: {}
  }

  type AssessmentAttemptGetPayload<S extends boolean | null | undefined | AssessmentAttemptDefaultArgs> = $Result.GetResult<Prisma.$AssessmentAttemptPayload, S>

  type AssessmentAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentAttemptCountAggregateInputType | true
    }

  export interface AssessmentAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentAttempt'], meta: { name: 'AssessmentAttempt' } }
    /**
     * Find zero or one AssessmentAttempt that matches the filter.
     * @param {AssessmentAttemptFindUniqueArgs} args - Arguments to find a AssessmentAttempt
     * @example
     * // Get one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentAttemptFindUniqueArgs>(args: SelectSubset<T, AssessmentAttemptFindUniqueArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssessmentAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentAttemptFindUniqueOrThrowArgs} args - Arguments to find a AssessmentAttempt
     * @example
     * // Get one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessmentAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptFindFirstArgs} args - Arguments to find a AssessmentAttempt
     * @example
     * // Get one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentAttemptFindFirstArgs>(args?: SelectSubset<T, AssessmentAttemptFindFirstArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessmentAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptFindFirstOrThrowArgs} args - Arguments to find a AssessmentAttempt
     * @example
     * // Get one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssessmentAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentAttempts
     * const assessmentAttempts = await prisma.assessmentAttempt.findMany()
     * 
     * // Get first 10 AssessmentAttempts
     * const assessmentAttempts = await prisma.assessmentAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentAttemptWithIdOnly = await prisma.assessmentAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentAttemptFindManyArgs>(args?: SelectSubset<T, AssessmentAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssessmentAttempt.
     * @param {AssessmentAttemptCreateArgs} args - Arguments to create a AssessmentAttempt.
     * @example
     * // Create one AssessmentAttempt
     * const AssessmentAttempt = await prisma.assessmentAttempt.create({
     *   data: {
     *     // ... data to create a AssessmentAttempt
     *   }
     * })
     * 
     */
    create<T extends AssessmentAttemptCreateArgs>(args: SelectSubset<T, AssessmentAttemptCreateArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssessmentAttempts.
     * @param {AssessmentAttemptCreateManyArgs} args - Arguments to create many AssessmentAttempts.
     * @example
     * // Create many AssessmentAttempts
     * const assessmentAttempt = await prisma.assessmentAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentAttemptCreateManyArgs>(args?: SelectSubset<T, AssessmentAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentAttempts and returns the data saved in the database.
     * @param {AssessmentAttemptCreateManyAndReturnArgs} args - Arguments to create many AssessmentAttempts.
     * @example
     * // Create many AssessmentAttempts
     * const assessmentAttempt = await prisma.assessmentAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentAttempts and only return the `id`
     * const assessmentAttemptWithIdOnly = await prisma.assessmentAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssessmentAttempt.
     * @param {AssessmentAttemptDeleteArgs} args - Arguments to delete one AssessmentAttempt.
     * @example
     * // Delete one AssessmentAttempt
     * const AssessmentAttempt = await prisma.assessmentAttempt.delete({
     *   where: {
     *     // ... filter to delete one AssessmentAttempt
     *   }
     * })
     * 
     */
    delete<T extends AssessmentAttemptDeleteArgs>(args: SelectSubset<T, AssessmentAttemptDeleteArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssessmentAttempt.
     * @param {AssessmentAttemptUpdateArgs} args - Arguments to update one AssessmentAttempt.
     * @example
     * // Update one AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentAttemptUpdateArgs>(args: SelectSubset<T, AssessmentAttemptUpdateArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssessmentAttempts.
     * @param {AssessmentAttemptDeleteManyArgs} args - Arguments to filter AssessmentAttempts to delete.
     * @example
     * // Delete a few AssessmentAttempts
     * const { count } = await prisma.assessmentAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentAttemptDeleteManyArgs>(args?: SelectSubset<T, AssessmentAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentAttempts
     * const assessmentAttempt = await prisma.assessmentAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentAttemptUpdateManyArgs>(args: SelectSubset<T, AssessmentAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentAttempts and returns the data updated in the database.
     * @param {AssessmentAttemptUpdateManyAndReturnArgs} args - Arguments to update many AssessmentAttempts.
     * @example
     * // Update many AssessmentAttempts
     * const assessmentAttempt = await prisma.assessmentAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssessmentAttempts and only return the `id`
     * const assessmentAttemptWithIdOnly = await prisma.assessmentAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssessmentAttempt.
     * @param {AssessmentAttemptUpsertArgs} args - Arguments to update or create a AssessmentAttempt.
     * @example
     * // Update or create a AssessmentAttempt
     * const assessmentAttempt = await prisma.assessmentAttempt.upsert({
     *   create: {
     *     // ... data to create a AssessmentAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentAttempt we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentAttemptUpsertArgs>(args: SelectSubset<T, AssessmentAttemptUpsertArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssessmentAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptCountArgs} args - Arguments to filter AssessmentAttempts to count.
     * @example
     * // Count the number of AssessmentAttempts
     * const count = await prisma.assessmentAttempt.count({
     *   where: {
     *     // ... the filter for the AssessmentAttempts we want to count
     *   }
     * })
    **/
    count<T extends AssessmentAttemptCountArgs>(
      args?: Subset<T, AssessmentAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentAttemptAggregateArgs>(args: Subset<T, AssessmentAttemptAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAttemptAggregateType<T>>

    /**
     * Group by AssessmentAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAttemptGroupByArgs} args - Group by arguments.
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
      T extends AssessmentAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentAttemptGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentAttempt model
   */
  readonly fields: AssessmentAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends AssessmentAttempt$answersArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentAttempt$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessmentAttempt model
   */
  interface AssessmentAttemptFieldRefs {
    readonly id: FieldRef<"AssessmentAttempt", 'String'>
    readonly userId: FieldRef<"AssessmentAttempt", 'String'>
    readonly scores: FieldRef<"AssessmentAttempt", 'Json'>
    readonly primary: FieldRef<"AssessmentAttempt", 'String'>
    readonly secondary: FieldRef<"AssessmentAttempt", 'String'>
    readonly createdAt: FieldRef<"AssessmentAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentAttempt findUnique
   */
  export type AssessmentAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempt to fetch.
     */
    where: AssessmentAttemptWhereUniqueInput
  }

  /**
   * AssessmentAttempt findUniqueOrThrow
   */
  export type AssessmentAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempt to fetch.
     */
    where: AssessmentAttemptWhereUniqueInput
  }

  /**
   * AssessmentAttempt findFirst
   */
  export type AssessmentAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempt to fetch.
     */
    where?: AssessmentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAttempts to fetch.
     */
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentAttempts.
     */
    cursor?: AssessmentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAttempts.
     */
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * AssessmentAttempt findFirstOrThrow
   */
  export type AssessmentAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempt to fetch.
     */
    where?: AssessmentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAttempts to fetch.
     */
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentAttempts.
     */
    cursor?: AssessmentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAttempts.
     */
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * AssessmentAttempt findMany
   */
  export type AssessmentAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAttempts to fetch.
     */
    where?: AssessmentAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAttempts to fetch.
     */
    orderBy?: AssessmentAttemptOrderByWithRelationInput | AssessmentAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentAttempts.
     */
    cursor?: AssessmentAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAttempts.
     */
    distinct?: AssessmentAttemptScalarFieldEnum | AssessmentAttemptScalarFieldEnum[]
  }

  /**
   * AssessmentAttempt create
   */
  export type AssessmentAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentAttempt.
     */
    data: XOR<AssessmentAttemptCreateInput, AssessmentAttemptUncheckedCreateInput>
  }

  /**
   * AssessmentAttempt createMany
   */
  export type AssessmentAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentAttempts.
     */
    data: AssessmentAttemptCreateManyInput | AssessmentAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentAttempt createManyAndReturn
   */
  export type AssessmentAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many AssessmentAttempts.
     */
    data: AssessmentAttemptCreateManyInput | AssessmentAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentAttempt update
   */
  export type AssessmentAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentAttempt.
     */
    data: XOR<AssessmentAttemptUpdateInput, AssessmentAttemptUncheckedUpdateInput>
    /**
     * Choose, which AssessmentAttempt to update.
     */
    where: AssessmentAttemptWhereUniqueInput
  }

  /**
   * AssessmentAttempt updateMany
   */
  export type AssessmentAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentAttempts.
     */
    data: XOR<AssessmentAttemptUpdateManyMutationInput, AssessmentAttemptUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentAttempts to update
     */
    where?: AssessmentAttemptWhereInput
    /**
     * Limit how many AssessmentAttempts to update.
     */
    limit?: number
  }

  /**
   * AssessmentAttempt updateManyAndReturn
   */
  export type AssessmentAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * The data used to update AssessmentAttempts.
     */
    data: XOR<AssessmentAttemptUpdateManyMutationInput, AssessmentAttemptUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentAttempts to update
     */
    where?: AssessmentAttemptWhereInput
    /**
     * Limit how many AssessmentAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentAttempt upsert
   */
  export type AssessmentAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentAttempt to update in case it exists.
     */
    where: AssessmentAttemptWhereUniqueInput
    /**
     * In case the AssessmentAttempt found by the `where` argument doesn't exist, create a new AssessmentAttempt with this data.
     */
    create: XOR<AssessmentAttemptCreateInput, AssessmentAttemptUncheckedCreateInput>
    /**
     * In case the AssessmentAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentAttemptUpdateInput, AssessmentAttemptUncheckedUpdateInput>
  }

  /**
   * AssessmentAttempt delete
   */
  export type AssessmentAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
    /**
     * Filter which AssessmentAttempt to delete.
     */
    where: AssessmentAttemptWhereUniqueInput
  }

  /**
   * AssessmentAttempt deleteMany
   */
  export type AssessmentAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentAttempts to delete
     */
    where?: AssessmentAttemptWhereInput
    /**
     * Limit how many AssessmentAttempts to delete.
     */
    limit?: number
  }

  /**
   * AssessmentAttempt.answers
   */
  export type AssessmentAttempt$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    where?: AssessmentAnswerWhereInput
    orderBy?: AssessmentAnswerOrderByWithRelationInput | AssessmentAnswerOrderByWithRelationInput[]
    cursor?: AssessmentAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAnswerScalarFieldEnum | AssessmentAnswerScalarFieldEnum[]
  }

  /**
   * AssessmentAttempt without action
   */
  export type AssessmentAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAttempt
     */
    select?: AssessmentAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAttempt
     */
    omit?: AssessmentAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAttemptInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentAnswer
   */

  export type AggregateAssessmentAnswer = {
    _count: AssessmentAnswerCountAggregateOutputType | null
    _min: AssessmentAnswerMinAggregateOutputType | null
    _max: AssessmentAnswerMaxAggregateOutputType | null
  }

  export type AssessmentAnswerMinAggregateOutputType = {
    id: string | null
    attemptId: string | null
    questionId: string | null
    optionId: string | null
  }

  export type AssessmentAnswerMaxAggregateOutputType = {
    id: string | null
    attemptId: string | null
    questionId: string | null
    optionId: string | null
  }

  export type AssessmentAnswerCountAggregateOutputType = {
    id: number
    attemptId: number
    questionId: number
    optionId: number
    _all: number
  }


  export type AssessmentAnswerMinAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    optionId?: true
  }

  export type AssessmentAnswerMaxAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    optionId?: true
  }

  export type AssessmentAnswerCountAggregateInputType = {
    id?: true
    attemptId?: true
    questionId?: true
    optionId?: true
    _all?: true
  }

  export type AssessmentAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentAnswer to aggregate.
     */
    where?: AssessmentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAnswers to fetch.
     */
    orderBy?: AssessmentAnswerOrderByWithRelationInput | AssessmentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentAnswers
    **/
    _count?: true | AssessmentAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentAnswerMaxAggregateInputType
  }

  export type GetAssessmentAnswerAggregateType<T extends AssessmentAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentAnswer[P]>
      : GetScalarType<T[P], AggregateAssessmentAnswer[P]>
  }




  export type AssessmentAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAnswerWhereInput
    orderBy?: AssessmentAnswerOrderByWithAggregationInput | AssessmentAnswerOrderByWithAggregationInput[]
    by: AssessmentAnswerScalarFieldEnum[] | AssessmentAnswerScalarFieldEnum
    having?: AssessmentAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentAnswerCountAggregateInputType | true
    _min?: AssessmentAnswerMinAggregateInputType
    _max?: AssessmentAnswerMaxAggregateInputType
  }

  export type AssessmentAnswerGroupByOutputType = {
    id: string
    attemptId: string
    questionId: string
    optionId: string
    _count: AssessmentAnswerCountAggregateOutputType | null
    _min: AssessmentAnswerMinAggregateOutputType | null
    _max: AssessmentAnswerMaxAggregateOutputType | null
  }

  type GetAssessmentAnswerGroupByPayload<T extends AssessmentAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentAnswerGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    optionId?: boolean
    attempt?: boolean | AssessmentAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    option?: boolean | QuizOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAnswer"]>

  export type AssessmentAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    optionId?: boolean
    attempt?: boolean | AssessmentAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    option?: boolean | QuizOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAnswer"]>

  export type AssessmentAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    optionId?: boolean
    attempt?: boolean | AssessmentAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    option?: boolean | QuizOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAnswer"]>

  export type AssessmentAnswerSelectScalar = {
    id?: boolean
    attemptId?: boolean
    questionId?: boolean
    optionId?: boolean
  }

  export type AssessmentAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attemptId" | "questionId" | "optionId", ExtArgs["result"]["assessmentAnswer"]>
  export type AssessmentAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | AssessmentAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    option?: boolean | QuizOptionDefaultArgs<ExtArgs>
  }
  export type AssessmentAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | AssessmentAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    option?: boolean | QuizOptionDefaultArgs<ExtArgs>
  }
  export type AssessmentAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempt?: boolean | AssessmentAttemptDefaultArgs<ExtArgs>
    question?: boolean | QuizQuestionDefaultArgs<ExtArgs>
    option?: boolean | QuizOptionDefaultArgs<ExtArgs>
  }

  export type $AssessmentAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentAnswer"
    objects: {
      attempt: Prisma.$AssessmentAttemptPayload<ExtArgs>
      question: Prisma.$QuizQuestionPayload<ExtArgs>
      option: Prisma.$QuizOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attemptId: string
      questionId: string
      optionId: string
    }, ExtArgs["result"]["assessmentAnswer"]>
    composites: {}
  }

  type AssessmentAnswerGetPayload<S extends boolean | null | undefined | AssessmentAnswerDefaultArgs> = $Result.GetResult<Prisma.$AssessmentAnswerPayload, S>

  type AssessmentAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentAnswerCountAggregateInputType | true
    }

  export interface AssessmentAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentAnswer'], meta: { name: 'AssessmentAnswer' } }
    /**
     * Find zero or one AssessmentAnswer that matches the filter.
     * @param {AssessmentAnswerFindUniqueArgs} args - Arguments to find a AssessmentAnswer
     * @example
     * // Get one AssessmentAnswer
     * const assessmentAnswer = await prisma.assessmentAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentAnswerFindUniqueArgs>(args: SelectSubset<T, AssessmentAnswerFindUniqueArgs<ExtArgs>>): Prisma__AssessmentAnswerClient<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssessmentAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentAnswerFindUniqueOrThrowArgs} args - Arguments to find a AssessmentAnswer
     * @example
     * // Get one AssessmentAnswer
     * const assessmentAnswer = await prisma.assessmentAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentAnswerClient<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessmentAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAnswerFindFirstArgs} args - Arguments to find a AssessmentAnswer
     * @example
     * // Get one AssessmentAnswer
     * const assessmentAnswer = await prisma.assessmentAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentAnswerFindFirstArgs>(args?: SelectSubset<T, AssessmentAnswerFindFirstArgs<ExtArgs>>): Prisma__AssessmentAnswerClient<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessmentAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAnswerFindFirstOrThrowArgs} args - Arguments to find a AssessmentAnswer
     * @example
     * // Get one AssessmentAnswer
     * const assessmentAnswer = await prisma.assessmentAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentAnswerClient<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssessmentAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentAnswers
     * const assessmentAnswers = await prisma.assessmentAnswer.findMany()
     * 
     * // Get first 10 AssessmentAnswers
     * const assessmentAnswers = await prisma.assessmentAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentAnswerWithIdOnly = await prisma.assessmentAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentAnswerFindManyArgs>(args?: SelectSubset<T, AssessmentAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssessmentAnswer.
     * @param {AssessmentAnswerCreateArgs} args - Arguments to create a AssessmentAnswer.
     * @example
     * // Create one AssessmentAnswer
     * const AssessmentAnswer = await prisma.assessmentAnswer.create({
     *   data: {
     *     // ... data to create a AssessmentAnswer
     *   }
     * })
     * 
     */
    create<T extends AssessmentAnswerCreateArgs>(args: SelectSubset<T, AssessmentAnswerCreateArgs<ExtArgs>>): Prisma__AssessmentAnswerClient<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssessmentAnswers.
     * @param {AssessmentAnswerCreateManyArgs} args - Arguments to create many AssessmentAnswers.
     * @example
     * // Create many AssessmentAnswers
     * const assessmentAnswer = await prisma.assessmentAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentAnswerCreateManyArgs>(args?: SelectSubset<T, AssessmentAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentAnswers and returns the data saved in the database.
     * @param {AssessmentAnswerCreateManyAndReturnArgs} args - Arguments to create many AssessmentAnswers.
     * @example
     * // Create many AssessmentAnswers
     * const assessmentAnswer = await prisma.assessmentAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentAnswers and only return the `id`
     * const assessmentAnswerWithIdOnly = await prisma.assessmentAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssessmentAnswer.
     * @param {AssessmentAnswerDeleteArgs} args - Arguments to delete one AssessmentAnswer.
     * @example
     * // Delete one AssessmentAnswer
     * const AssessmentAnswer = await prisma.assessmentAnswer.delete({
     *   where: {
     *     // ... filter to delete one AssessmentAnswer
     *   }
     * })
     * 
     */
    delete<T extends AssessmentAnswerDeleteArgs>(args: SelectSubset<T, AssessmentAnswerDeleteArgs<ExtArgs>>): Prisma__AssessmentAnswerClient<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssessmentAnswer.
     * @param {AssessmentAnswerUpdateArgs} args - Arguments to update one AssessmentAnswer.
     * @example
     * // Update one AssessmentAnswer
     * const assessmentAnswer = await prisma.assessmentAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentAnswerUpdateArgs>(args: SelectSubset<T, AssessmentAnswerUpdateArgs<ExtArgs>>): Prisma__AssessmentAnswerClient<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssessmentAnswers.
     * @param {AssessmentAnswerDeleteManyArgs} args - Arguments to filter AssessmentAnswers to delete.
     * @example
     * // Delete a few AssessmentAnswers
     * const { count } = await prisma.assessmentAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentAnswerDeleteManyArgs>(args?: SelectSubset<T, AssessmentAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentAnswers
     * const assessmentAnswer = await prisma.assessmentAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentAnswerUpdateManyArgs>(args: SelectSubset<T, AssessmentAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentAnswers and returns the data updated in the database.
     * @param {AssessmentAnswerUpdateManyAndReturnArgs} args - Arguments to update many AssessmentAnswers.
     * @example
     * // Update many AssessmentAnswers
     * const assessmentAnswer = await prisma.assessmentAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssessmentAnswers and only return the `id`
     * const assessmentAnswerWithIdOnly = await prisma.assessmentAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssessmentAnswer.
     * @param {AssessmentAnswerUpsertArgs} args - Arguments to update or create a AssessmentAnswer.
     * @example
     * // Update or create a AssessmentAnswer
     * const assessmentAnswer = await prisma.assessmentAnswer.upsert({
     *   create: {
     *     // ... data to create a AssessmentAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentAnswer we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentAnswerUpsertArgs>(args: SelectSubset<T, AssessmentAnswerUpsertArgs<ExtArgs>>): Prisma__AssessmentAnswerClient<$Result.GetResult<Prisma.$AssessmentAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssessmentAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAnswerCountArgs} args - Arguments to filter AssessmentAnswers to count.
     * @example
     * // Count the number of AssessmentAnswers
     * const count = await prisma.assessmentAnswer.count({
     *   where: {
     *     // ... the filter for the AssessmentAnswers we want to count
     *   }
     * })
    **/
    count<T extends AssessmentAnswerCountArgs>(
      args?: Subset<T, AssessmentAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentAnswerAggregateArgs>(args: Subset<T, AssessmentAnswerAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAnswerAggregateType<T>>

    /**
     * Group by AssessmentAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAnswerGroupByArgs} args - Group by arguments.
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
      T extends AssessmentAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentAnswerGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentAnswer model
   */
  readonly fields: AssessmentAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attempt<T extends AssessmentAttemptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentAttemptDefaultArgs<ExtArgs>>): Prisma__AssessmentAttemptClient<$Result.GetResult<Prisma.$AssessmentAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuizQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizQuestionDefaultArgs<ExtArgs>>): Prisma__QuizQuestionClient<$Result.GetResult<Prisma.$QuizQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends QuizOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizOptionDefaultArgs<ExtArgs>>): Prisma__QuizOptionClient<$Result.GetResult<Prisma.$QuizOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessmentAnswer model
   */
  interface AssessmentAnswerFieldRefs {
    readonly id: FieldRef<"AssessmentAnswer", 'String'>
    readonly attemptId: FieldRef<"AssessmentAnswer", 'String'>
    readonly questionId: FieldRef<"AssessmentAnswer", 'String'>
    readonly optionId: FieldRef<"AssessmentAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentAnswer findUnique
   */
  export type AssessmentAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAnswer to fetch.
     */
    where: AssessmentAnswerWhereUniqueInput
  }

  /**
   * AssessmentAnswer findUniqueOrThrow
   */
  export type AssessmentAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAnswer to fetch.
     */
    where: AssessmentAnswerWhereUniqueInput
  }

  /**
   * AssessmentAnswer findFirst
   */
  export type AssessmentAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAnswer to fetch.
     */
    where?: AssessmentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAnswers to fetch.
     */
    orderBy?: AssessmentAnswerOrderByWithRelationInput | AssessmentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentAnswers.
     */
    cursor?: AssessmentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAnswers.
     */
    distinct?: AssessmentAnswerScalarFieldEnum | AssessmentAnswerScalarFieldEnum[]
  }

  /**
   * AssessmentAnswer findFirstOrThrow
   */
  export type AssessmentAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAnswer to fetch.
     */
    where?: AssessmentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAnswers to fetch.
     */
    orderBy?: AssessmentAnswerOrderByWithRelationInput | AssessmentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentAnswers.
     */
    cursor?: AssessmentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAnswers.
     */
    distinct?: AssessmentAnswerScalarFieldEnum | AssessmentAnswerScalarFieldEnum[]
  }

  /**
   * AssessmentAnswer findMany
   */
  export type AssessmentAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAnswers to fetch.
     */
    where?: AssessmentAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAnswers to fetch.
     */
    orderBy?: AssessmentAnswerOrderByWithRelationInput | AssessmentAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentAnswers.
     */
    cursor?: AssessmentAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAnswers.
     */
    distinct?: AssessmentAnswerScalarFieldEnum | AssessmentAnswerScalarFieldEnum[]
  }

  /**
   * AssessmentAnswer create
   */
  export type AssessmentAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentAnswer.
     */
    data: XOR<AssessmentAnswerCreateInput, AssessmentAnswerUncheckedCreateInput>
  }

  /**
   * AssessmentAnswer createMany
   */
  export type AssessmentAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentAnswers.
     */
    data: AssessmentAnswerCreateManyInput | AssessmentAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentAnswer createManyAndReturn
   */
  export type AssessmentAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many AssessmentAnswers.
     */
    data: AssessmentAnswerCreateManyInput | AssessmentAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentAnswer update
   */
  export type AssessmentAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentAnswer.
     */
    data: XOR<AssessmentAnswerUpdateInput, AssessmentAnswerUncheckedUpdateInput>
    /**
     * Choose, which AssessmentAnswer to update.
     */
    where: AssessmentAnswerWhereUniqueInput
  }

  /**
   * AssessmentAnswer updateMany
   */
  export type AssessmentAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentAnswers.
     */
    data: XOR<AssessmentAnswerUpdateManyMutationInput, AssessmentAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentAnswers to update
     */
    where?: AssessmentAnswerWhereInput
    /**
     * Limit how many AssessmentAnswers to update.
     */
    limit?: number
  }

  /**
   * AssessmentAnswer updateManyAndReturn
   */
  export type AssessmentAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * The data used to update AssessmentAnswers.
     */
    data: XOR<AssessmentAnswerUpdateManyMutationInput, AssessmentAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentAnswers to update
     */
    where?: AssessmentAnswerWhereInput
    /**
     * Limit how many AssessmentAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentAnswer upsert
   */
  export type AssessmentAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentAnswer to update in case it exists.
     */
    where: AssessmentAnswerWhereUniqueInput
    /**
     * In case the AssessmentAnswer found by the `where` argument doesn't exist, create a new AssessmentAnswer with this data.
     */
    create: XOR<AssessmentAnswerCreateInput, AssessmentAnswerUncheckedCreateInput>
    /**
     * In case the AssessmentAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentAnswerUpdateInput, AssessmentAnswerUncheckedUpdateInput>
  }

  /**
   * AssessmentAnswer delete
   */
  export type AssessmentAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
    /**
     * Filter which AssessmentAnswer to delete.
     */
    where: AssessmentAnswerWhereUniqueInput
  }

  /**
   * AssessmentAnswer deleteMany
   */
  export type AssessmentAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentAnswers to delete
     */
    where?: AssessmentAnswerWhereInput
    /**
     * Limit how many AssessmentAnswers to delete.
     */
    limit?: number
  }

  /**
   * AssessmentAnswer without action
   */
  export type AssessmentAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAnswer
     */
    select?: AssessmentAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentAnswer
     */
    omit?: AssessmentAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAnswerInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    major: 'major',
    semester: 'semester',
    gpaRange: 'gpaRange',
    interests: 'interests',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const UserSkillScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    skillId: 'skillId',
    level: 'level'
  };

  export type UserSkillScalarFieldEnum = (typeof UserSkillScalarFieldEnum)[keyof typeof UserSkillScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    industry: 'industry',
    description: 'description',
    icon: 'icon',
    color: 'color',
    gradient: 'gradient',
    border: 'border',
    milestones: 'milestones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const UserCareerProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    careerId: 'careerId',
    completedMilestones: 'completedMilestones',
    updatedAt: 'updatedAt'
  };

  export type UserCareerProgressScalarFieldEnum = (typeof UserCareerProgressScalarFieldEnum)[keyof typeof UserCareerProgressScalarFieldEnum]


  export const RoadmapScalarFieldEnum: {
    id: 'id',
    title: 'title',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type RoadmapScalarFieldEnum = (typeof RoadmapScalarFieldEnum)[keyof typeof RoadmapScalarFieldEnum]


  export const RoadmapNodeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    roadmapId: 'roadmapId'
  };

  export type RoadmapNodeScalarFieldEnum = (typeof RoadmapNodeScalarFieldEnum)[keyof typeof RoadmapNodeScalarFieldEnum]


  export const RoadmapEdgeScalarFieldEnum: {
    parentId: 'parentId',
    childId: 'childId'
  };

  export type RoadmapEdgeScalarFieldEnum = (typeof RoadmapEdgeScalarFieldEnum)[keyof typeof RoadmapEdgeScalarFieldEnum]


  export const QuizSectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizSectionScalarFieldEnum = (typeof QuizSectionScalarFieldEnum)[keyof typeof QuizSectionScalarFieldEnum]


  export const QuizQuestionScalarFieldEnum: {
    id: 'id',
    sectionId: 'sectionId',
    prompt: 'prompt',
    helperText: 'helperText',
    type: 'type',
    order: 'order',
    isRequired: 'isRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizQuestionScalarFieldEnum = (typeof QuizQuestionScalarFieldEnum)[keyof typeof QuizQuestionScalarFieldEnum]


  export const QuizOptionScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    label: 'label',
    value: 'value',
    order: 'order',
    scoring: 'scoring',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizOptionScalarFieldEnum = (typeof QuizOptionScalarFieldEnum)[keyof typeof QuizOptionScalarFieldEnum]


  export const AssessmentAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    scores: 'scores',
    primary: 'primary',
    secondary: 'secondary',
    createdAt: 'createdAt'
  };

  export type AssessmentAttemptScalarFieldEnum = (typeof AssessmentAttemptScalarFieldEnum)[keyof typeof AssessmentAttemptScalarFieldEnum]


  export const AssessmentAnswerScalarFieldEnum: {
    id: 'id',
    attemptId: 'attemptId',
    questionId: 'questionId',
    optionId: 'optionId'
  };

  export type AssessmentAnswerScalarFieldEnum = (typeof AssessmentAnswerScalarFieldEnum)[keyof typeof AssessmentAnswerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    assessmentAttempts?: AssessmentAttemptListRelationFilter
    roadmaps?: RoadmapListRelationFilter
    careerProgress?: UserCareerProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    assessmentAttempts?: AssessmentAttemptOrderByRelationAggregateInput
    roadmaps?: RoadmapOrderByRelationAggregateInput
    careerProgress?: UserCareerProgressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    assessmentAttempts?: AssessmentAttemptListRelationFilter
    roadmaps?: RoadmapListRelationFilter
    careerProgress?: UserCareerProgressListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    name?: StringNullableFilter<"Profile"> | string | null
    major?: StringNullableFilter<"Profile"> | string | null
    semester?: IntNullableFilter<"Profile"> | number | null
    gpaRange?: StringNullableFilter<"Profile"> | string | null
    interests?: StringNullableListFilter<"Profile">
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skills?: UserSkillListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    gpaRange?: SortOrderInput | SortOrder
    interests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    skills?: UserSkillOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringNullableFilter<"Profile"> | string | null
    major?: StringNullableFilter<"Profile"> | string | null
    semester?: IntNullableFilter<"Profile"> | number | null
    gpaRange?: StringNullableFilter<"Profile"> | string | null
    interests?: StringNullableListFilter<"Profile">
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skills?: UserSkillListRelationFilter
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    gpaRange?: SortOrderInput | SortOrder
    interests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    major?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    semester?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    gpaRange?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    interests?: StringNullableListFilter<"Profile">
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    category?: StringFilter<"Skill"> | string
    users?: UserSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    users?: UserSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    category?: StringFilter<"Skill"> | string
    users?: UserSkillListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    category?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type UserSkillWhereInput = {
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    profileId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    level?: IntFilter<"UserSkill"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type UserSkillOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type UserSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId_skillId?: UserSkillProfileIdSkillIdCompoundUniqueInput
    AND?: UserSkillWhereInput | UserSkillWhereInput[]
    OR?: UserSkillWhereInput[]
    NOT?: UserSkillWhereInput | UserSkillWhereInput[]
    profileId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    level?: IntFilter<"UserSkill"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "id" | "profileId_skillId">

  export type UserSkillOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    _count?: UserSkillCountOrderByAggregateInput
    _avg?: UserSkillAvgOrderByAggregateInput
    _max?: UserSkillMaxOrderByAggregateInput
    _min?: UserSkillMinOrderByAggregateInput
    _sum?: UserSkillSumOrderByAggregateInput
  }

  export type UserSkillScalarWhereWithAggregatesInput = {
    AND?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    OR?: UserSkillScalarWhereWithAggregatesInput[]
    NOT?: UserSkillScalarWhereWithAggregatesInput | UserSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSkill"> | string
    profileId?: StringWithAggregatesFilter<"UserSkill"> | string
    skillId?: StringWithAggregatesFilter<"UserSkill"> | string
    level?: IntWithAggregatesFilter<"UserSkill"> | number
  }

  export type CareerWhereInput = {
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    id?: StringFilter<"Career"> | string
    slug?: StringFilter<"Career"> | string
    title?: StringFilter<"Career"> | string
    industry?: StringFilter<"Career"> | string
    description?: StringFilter<"Career"> | string
    icon?: StringNullableFilter<"Career"> | string | null
    color?: StringNullableFilter<"Career"> | string | null
    gradient?: StringNullableFilter<"Career"> | string | null
    border?: StringNullableFilter<"Career"> | string | null
    milestones?: StringNullableListFilter<"Career">
    createdAt?: DateTimeFilter<"Career"> | Date | string
    updatedAt?: DateTimeFilter<"Career"> | Date | string
    userProgress?: UserCareerProgressListRelationFilter
  }

  export type CareerOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    industry?: SortOrder
    description?: SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    gradient?: SortOrderInput | SortOrder
    border?: SortOrderInput | SortOrder
    milestones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userProgress?: UserCareerProgressOrderByRelationAggregateInput
  }

  export type CareerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CareerWhereInput | CareerWhereInput[]
    OR?: CareerWhereInput[]
    NOT?: CareerWhereInput | CareerWhereInput[]
    title?: StringFilter<"Career"> | string
    industry?: StringFilter<"Career"> | string
    description?: StringFilter<"Career"> | string
    icon?: StringNullableFilter<"Career"> | string | null
    color?: StringNullableFilter<"Career"> | string | null
    gradient?: StringNullableFilter<"Career"> | string | null
    border?: StringNullableFilter<"Career"> | string | null
    milestones?: StringNullableListFilter<"Career">
    createdAt?: DateTimeFilter<"Career"> | Date | string
    updatedAt?: DateTimeFilter<"Career"> | Date | string
    userProgress?: UserCareerProgressListRelationFilter
  }, "id" | "slug">

  export type CareerOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    industry?: SortOrder
    description?: SortOrder
    icon?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    gradient?: SortOrderInput | SortOrder
    border?: SortOrderInput | SortOrder
    milestones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CareerCountOrderByAggregateInput
    _max?: CareerMaxOrderByAggregateInput
    _min?: CareerMinOrderByAggregateInput
  }

  export type CareerScalarWhereWithAggregatesInput = {
    AND?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    OR?: CareerScalarWhereWithAggregatesInput[]
    NOT?: CareerScalarWhereWithAggregatesInput | CareerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Career"> | string
    slug?: StringWithAggregatesFilter<"Career"> | string
    title?: StringWithAggregatesFilter<"Career"> | string
    industry?: StringWithAggregatesFilter<"Career"> | string
    description?: StringWithAggregatesFilter<"Career"> | string
    icon?: StringNullableWithAggregatesFilter<"Career"> | string | null
    color?: StringNullableWithAggregatesFilter<"Career"> | string | null
    gradient?: StringNullableWithAggregatesFilter<"Career"> | string | null
    border?: StringNullableWithAggregatesFilter<"Career"> | string | null
    milestones?: StringNullableListFilter<"Career">
    createdAt?: DateTimeWithAggregatesFilter<"Career"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Career"> | Date | string
  }

  export type UserCareerProgressWhereInput = {
    AND?: UserCareerProgressWhereInput | UserCareerProgressWhereInput[]
    OR?: UserCareerProgressWhereInput[]
    NOT?: UserCareerProgressWhereInput | UserCareerProgressWhereInput[]
    id?: StringFilter<"UserCareerProgress"> | string
    userId?: StringFilter<"UserCareerProgress"> | string
    careerId?: StringFilter<"UserCareerProgress"> | string
    completedMilestones?: IntNullableListFilter<"UserCareerProgress">
    updatedAt?: DateTimeFilter<"UserCareerProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
  }

  export type UserCareerProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    completedMilestones?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    career?: CareerOrderByWithRelationInput
  }

  export type UserCareerProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_careerId?: UserCareerProgressUserIdCareerIdCompoundUniqueInput
    AND?: UserCareerProgressWhereInput | UserCareerProgressWhereInput[]
    OR?: UserCareerProgressWhereInput[]
    NOT?: UserCareerProgressWhereInput | UserCareerProgressWhereInput[]
    userId?: StringFilter<"UserCareerProgress"> | string
    careerId?: StringFilter<"UserCareerProgress"> | string
    completedMilestones?: IntNullableListFilter<"UserCareerProgress">
    updatedAt?: DateTimeFilter<"UserCareerProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    career?: XOR<CareerScalarRelationFilter, CareerWhereInput>
  }, "id" | "userId_careerId">

  export type UserCareerProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    completedMilestones?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCareerProgressCountOrderByAggregateInput
    _avg?: UserCareerProgressAvgOrderByAggregateInput
    _max?: UserCareerProgressMaxOrderByAggregateInput
    _min?: UserCareerProgressMinOrderByAggregateInput
    _sum?: UserCareerProgressSumOrderByAggregateInput
  }

  export type UserCareerProgressScalarWhereWithAggregatesInput = {
    AND?: UserCareerProgressScalarWhereWithAggregatesInput | UserCareerProgressScalarWhereWithAggregatesInput[]
    OR?: UserCareerProgressScalarWhereWithAggregatesInput[]
    NOT?: UserCareerProgressScalarWhereWithAggregatesInput | UserCareerProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCareerProgress"> | string
    userId?: StringWithAggregatesFilter<"UserCareerProgress"> | string
    careerId?: StringWithAggregatesFilter<"UserCareerProgress"> | string
    completedMilestones?: IntNullableListFilter<"UserCareerProgress">
    updatedAt?: DateTimeWithAggregatesFilter<"UserCareerProgress"> | Date | string
  }

  export type RoadmapWhereInput = {
    AND?: RoadmapWhereInput | RoadmapWhereInput[]
    OR?: RoadmapWhereInput[]
    NOT?: RoadmapWhereInput | RoadmapWhereInput[]
    id?: StringFilter<"Roadmap"> | string
    title?: StringFilter<"Roadmap"> | string
    userId?: StringFilter<"Roadmap"> | string
    createdAt?: DateTimeFilter<"Roadmap"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: RoadmapNodeListRelationFilter
  }

  export type RoadmapOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    nodes?: RoadmapNodeOrderByRelationAggregateInput
  }

  export type RoadmapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoadmapWhereInput | RoadmapWhereInput[]
    OR?: RoadmapWhereInput[]
    NOT?: RoadmapWhereInput | RoadmapWhereInput[]
    title?: StringFilter<"Roadmap"> | string
    userId?: StringFilter<"Roadmap"> | string
    createdAt?: DateTimeFilter<"Roadmap"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: RoadmapNodeListRelationFilter
  }, "id">

  export type RoadmapOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: RoadmapCountOrderByAggregateInput
    _max?: RoadmapMaxOrderByAggregateInput
    _min?: RoadmapMinOrderByAggregateInput
  }

  export type RoadmapScalarWhereWithAggregatesInput = {
    AND?: RoadmapScalarWhereWithAggregatesInput | RoadmapScalarWhereWithAggregatesInput[]
    OR?: RoadmapScalarWhereWithAggregatesInput[]
    NOT?: RoadmapScalarWhereWithAggregatesInput | RoadmapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roadmap"> | string
    title?: StringWithAggregatesFilter<"Roadmap"> | string
    userId?: StringWithAggregatesFilter<"Roadmap"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Roadmap"> | Date | string
  }

  export type RoadmapNodeWhereInput = {
    AND?: RoadmapNodeWhereInput | RoadmapNodeWhereInput[]
    OR?: RoadmapNodeWhereInput[]
    NOT?: RoadmapNodeWhereInput | RoadmapNodeWhereInput[]
    id?: StringFilter<"RoadmapNode"> | string
    title?: StringFilter<"RoadmapNode"> | string
    description?: StringNullableFilter<"RoadmapNode"> | string | null
    roadmapId?: StringFilter<"RoadmapNode"> | string
    roadmap?: XOR<RoadmapScalarRelationFilter, RoadmapWhereInput>
    parents?: RoadmapEdgeListRelationFilter
    children?: RoadmapEdgeListRelationFilter
  }

  export type RoadmapNodeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    roadmapId?: SortOrder
    roadmap?: RoadmapOrderByWithRelationInput
    parents?: RoadmapEdgeOrderByRelationAggregateInput
    children?: RoadmapEdgeOrderByRelationAggregateInput
  }

  export type RoadmapNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoadmapNodeWhereInput | RoadmapNodeWhereInput[]
    OR?: RoadmapNodeWhereInput[]
    NOT?: RoadmapNodeWhereInput | RoadmapNodeWhereInput[]
    title?: StringFilter<"RoadmapNode"> | string
    description?: StringNullableFilter<"RoadmapNode"> | string | null
    roadmapId?: StringFilter<"RoadmapNode"> | string
    roadmap?: XOR<RoadmapScalarRelationFilter, RoadmapWhereInput>
    parents?: RoadmapEdgeListRelationFilter
    children?: RoadmapEdgeListRelationFilter
  }, "id">

  export type RoadmapNodeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    roadmapId?: SortOrder
    _count?: RoadmapNodeCountOrderByAggregateInput
    _max?: RoadmapNodeMaxOrderByAggregateInput
    _min?: RoadmapNodeMinOrderByAggregateInput
  }

  export type RoadmapNodeScalarWhereWithAggregatesInput = {
    AND?: RoadmapNodeScalarWhereWithAggregatesInput | RoadmapNodeScalarWhereWithAggregatesInput[]
    OR?: RoadmapNodeScalarWhereWithAggregatesInput[]
    NOT?: RoadmapNodeScalarWhereWithAggregatesInput | RoadmapNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoadmapNode"> | string
    title?: StringWithAggregatesFilter<"RoadmapNode"> | string
    description?: StringNullableWithAggregatesFilter<"RoadmapNode"> | string | null
    roadmapId?: StringWithAggregatesFilter<"RoadmapNode"> | string
  }

  export type RoadmapEdgeWhereInput = {
    AND?: RoadmapEdgeWhereInput | RoadmapEdgeWhereInput[]
    OR?: RoadmapEdgeWhereInput[]
    NOT?: RoadmapEdgeWhereInput | RoadmapEdgeWhereInput[]
    parentId?: StringFilter<"RoadmapEdge"> | string
    childId?: StringFilter<"RoadmapEdge"> | string
    parent?: XOR<RoadmapNodeScalarRelationFilter, RoadmapNodeWhereInput>
    child?: XOR<RoadmapNodeScalarRelationFilter, RoadmapNodeWhereInput>
  }

  export type RoadmapEdgeOrderByWithRelationInput = {
    parentId?: SortOrder
    childId?: SortOrder
    parent?: RoadmapNodeOrderByWithRelationInput
    child?: RoadmapNodeOrderByWithRelationInput
  }

  export type RoadmapEdgeWhereUniqueInput = Prisma.AtLeast<{
    parentId_childId?: RoadmapEdgeParentIdChildIdCompoundUniqueInput
    AND?: RoadmapEdgeWhereInput | RoadmapEdgeWhereInput[]
    OR?: RoadmapEdgeWhereInput[]
    NOT?: RoadmapEdgeWhereInput | RoadmapEdgeWhereInput[]
    parentId?: StringFilter<"RoadmapEdge"> | string
    childId?: StringFilter<"RoadmapEdge"> | string
    parent?: XOR<RoadmapNodeScalarRelationFilter, RoadmapNodeWhereInput>
    child?: XOR<RoadmapNodeScalarRelationFilter, RoadmapNodeWhereInput>
  }, "parentId_childId">

  export type RoadmapEdgeOrderByWithAggregationInput = {
    parentId?: SortOrder
    childId?: SortOrder
    _count?: RoadmapEdgeCountOrderByAggregateInput
    _max?: RoadmapEdgeMaxOrderByAggregateInput
    _min?: RoadmapEdgeMinOrderByAggregateInput
  }

  export type RoadmapEdgeScalarWhereWithAggregatesInput = {
    AND?: RoadmapEdgeScalarWhereWithAggregatesInput | RoadmapEdgeScalarWhereWithAggregatesInput[]
    OR?: RoadmapEdgeScalarWhereWithAggregatesInput[]
    NOT?: RoadmapEdgeScalarWhereWithAggregatesInput | RoadmapEdgeScalarWhereWithAggregatesInput[]
    parentId?: StringWithAggregatesFilter<"RoadmapEdge"> | string
    childId?: StringWithAggregatesFilter<"RoadmapEdge"> | string
  }

  export type QuizSectionWhereInput = {
    AND?: QuizSectionWhereInput | QuizSectionWhereInput[]
    OR?: QuizSectionWhereInput[]
    NOT?: QuizSectionWhereInput | QuizSectionWhereInput[]
    id?: StringFilter<"QuizSection"> | string
    title?: StringFilter<"QuizSection"> | string
    description?: StringNullableFilter<"QuizSection"> | string | null
    order?: IntFilter<"QuizSection"> | number
    createdAt?: DateTimeFilter<"QuizSection"> | Date | string
    updatedAt?: DateTimeFilter<"QuizSection"> | Date | string
    questions?: QuizQuestionListRelationFilter
  }

  export type QuizSectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuizQuestionOrderByRelationAggregateInput
  }

  export type QuizSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order?: number
    AND?: QuizSectionWhereInput | QuizSectionWhereInput[]
    OR?: QuizSectionWhereInput[]
    NOT?: QuizSectionWhereInput | QuizSectionWhereInput[]
    title?: StringFilter<"QuizSection"> | string
    description?: StringNullableFilter<"QuizSection"> | string | null
    createdAt?: DateTimeFilter<"QuizSection"> | Date | string
    updatedAt?: DateTimeFilter<"QuizSection"> | Date | string
    questions?: QuizQuestionListRelationFilter
  }, "id" | "order">

  export type QuizSectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizSectionCountOrderByAggregateInput
    _avg?: QuizSectionAvgOrderByAggregateInput
    _max?: QuizSectionMaxOrderByAggregateInput
    _min?: QuizSectionMinOrderByAggregateInput
    _sum?: QuizSectionSumOrderByAggregateInput
  }

  export type QuizSectionScalarWhereWithAggregatesInput = {
    AND?: QuizSectionScalarWhereWithAggregatesInput | QuizSectionScalarWhereWithAggregatesInput[]
    OR?: QuizSectionScalarWhereWithAggregatesInput[]
    NOT?: QuizSectionScalarWhereWithAggregatesInput | QuizSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizSection"> | string
    title?: StringWithAggregatesFilter<"QuizSection"> | string
    description?: StringNullableWithAggregatesFilter<"QuizSection"> | string | null
    order?: IntWithAggregatesFilter<"QuizSection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuizSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizSection"> | Date | string
  }

  export type QuizQuestionWhereInput = {
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    id?: StringFilter<"QuizQuestion"> | string
    sectionId?: StringNullableFilter<"QuizQuestion"> | string | null
    prompt?: StringFilter<"QuizQuestion"> | string
    helperText?: StringNullableFilter<"QuizQuestion"> | string | null
    type?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    order?: IntFilter<"QuizQuestion"> | number
    isRequired?: BoolFilter<"QuizQuestion"> | boolean
    createdAt?: DateTimeFilter<"QuizQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"QuizQuestion"> | Date | string
    section?: XOR<QuizSectionNullableScalarRelationFilter, QuizSectionWhereInput> | null
    options?: QuizOptionListRelationFilter
    assessmentAnswers?: AssessmentAnswerListRelationFilter
  }

  export type QuizQuestionOrderByWithRelationInput = {
    id?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    helperText?: SortOrderInput | SortOrder
    type?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    section?: QuizSectionOrderByWithRelationInput
    options?: QuizOptionOrderByRelationAggregateInput
    assessmentAnswers?: AssessmentAnswerOrderByRelationAggregateInput
  }

  export type QuizQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sectionId_order?: QuizQuestionSectionIdOrderCompoundUniqueInput
    AND?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    OR?: QuizQuestionWhereInput[]
    NOT?: QuizQuestionWhereInput | QuizQuestionWhereInput[]
    sectionId?: StringNullableFilter<"QuizQuestion"> | string | null
    prompt?: StringFilter<"QuizQuestion"> | string
    helperText?: StringNullableFilter<"QuizQuestion"> | string | null
    type?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    order?: IntFilter<"QuizQuestion"> | number
    isRequired?: BoolFilter<"QuizQuestion"> | boolean
    createdAt?: DateTimeFilter<"QuizQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"QuizQuestion"> | Date | string
    section?: XOR<QuizSectionNullableScalarRelationFilter, QuizSectionWhereInput> | null
    options?: QuizOptionListRelationFilter
    assessmentAnswers?: AssessmentAnswerListRelationFilter
  }, "id" | "sectionId_order">

  export type QuizQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    sectionId?: SortOrderInput | SortOrder
    prompt?: SortOrder
    helperText?: SortOrderInput | SortOrder
    type?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizQuestionCountOrderByAggregateInput
    _avg?: QuizQuestionAvgOrderByAggregateInput
    _max?: QuizQuestionMaxOrderByAggregateInput
    _min?: QuizQuestionMinOrderByAggregateInput
    _sum?: QuizQuestionSumOrderByAggregateInput
  }

  export type QuizQuestionScalarWhereWithAggregatesInput = {
    AND?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    OR?: QuizQuestionScalarWhereWithAggregatesInput[]
    NOT?: QuizQuestionScalarWhereWithAggregatesInput | QuizQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizQuestion"> | string
    sectionId?: StringNullableWithAggregatesFilter<"QuizQuestion"> | string | null
    prompt?: StringWithAggregatesFilter<"QuizQuestion"> | string
    helperText?: StringNullableWithAggregatesFilter<"QuizQuestion"> | string | null
    type?: EnumQuestionTypeWithAggregatesFilter<"QuizQuestion"> | $Enums.QuestionType
    order?: IntWithAggregatesFilter<"QuizQuestion"> | number
    isRequired?: BoolWithAggregatesFilter<"QuizQuestion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"QuizQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizQuestion"> | Date | string
  }

  export type QuizOptionWhereInput = {
    AND?: QuizOptionWhereInput | QuizOptionWhereInput[]
    OR?: QuizOptionWhereInput[]
    NOT?: QuizOptionWhereInput | QuizOptionWhereInput[]
    id?: StringFilter<"QuizOption"> | string
    questionId?: StringFilter<"QuizOption"> | string
    label?: StringFilter<"QuizOption"> | string
    value?: StringNullableFilter<"QuizOption"> | string | null
    order?: IntFilter<"QuizOption"> | number
    scoring?: JsonNullableFilter<"QuizOption">
    createdAt?: DateTimeFilter<"QuizOption"> | Date | string
    updatedAt?: DateTimeFilter<"QuizOption"> | Date | string
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
    assessmentAnswers?: AssessmentAnswerListRelationFilter
  }

  export type QuizOptionOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrderInput | SortOrder
    order?: SortOrder
    scoring?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuizQuestionOrderByWithRelationInput
    assessmentAnswers?: AssessmentAnswerOrderByRelationAggregateInput
  }

  export type QuizOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId_order?: QuizOptionQuestionIdOrderCompoundUniqueInput
    AND?: QuizOptionWhereInput | QuizOptionWhereInput[]
    OR?: QuizOptionWhereInput[]
    NOT?: QuizOptionWhereInput | QuizOptionWhereInput[]
    questionId?: StringFilter<"QuizOption"> | string
    label?: StringFilter<"QuizOption"> | string
    value?: StringNullableFilter<"QuizOption"> | string | null
    order?: IntFilter<"QuizOption"> | number
    scoring?: JsonNullableFilter<"QuizOption">
    createdAt?: DateTimeFilter<"QuizOption"> | Date | string
    updatedAt?: DateTimeFilter<"QuizOption"> | Date | string
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
    assessmentAnswers?: AssessmentAnswerListRelationFilter
  }, "id" | "questionId_order">

  export type QuizOptionOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrderInput | SortOrder
    order?: SortOrder
    scoring?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizOptionCountOrderByAggregateInput
    _avg?: QuizOptionAvgOrderByAggregateInput
    _max?: QuizOptionMaxOrderByAggregateInput
    _min?: QuizOptionMinOrderByAggregateInput
    _sum?: QuizOptionSumOrderByAggregateInput
  }

  export type QuizOptionScalarWhereWithAggregatesInput = {
    AND?: QuizOptionScalarWhereWithAggregatesInput | QuizOptionScalarWhereWithAggregatesInput[]
    OR?: QuizOptionScalarWhereWithAggregatesInput[]
    NOT?: QuizOptionScalarWhereWithAggregatesInput | QuizOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizOption"> | string
    questionId?: StringWithAggregatesFilter<"QuizOption"> | string
    label?: StringWithAggregatesFilter<"QuizOption"> | string
    value?: StringNullableWithAggregatesFilter<"QuizOption"> | string | null
    order?: IntWithAggregatesFilter<"QuizOption"> | number
    scoring?: JsonNullableWithAggregatesFilter<"QuizOption">
    createdAt?: DateTimeWithAggregatesFilter<"QuizOption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuizOption"> | Date | string
  }

  export type AssessmentAttemptWhereInput = {
    AND?: AssessmentAttemptWhereInput | AssessmentAttemptWhereInput[]
    OR?: AssessmentAttemptWhereInput[]
    NOT?: AssessmentAttemptWhereInput | AssessmentAttemptWhereInput[]
    id?: StringFilter<"AssessmentAttempt"> | string
    userId?: StringFilter<"AssessmentAttempt"> | string
    scores?: JsonFilter<"AssessmentAttempt">
    primary?: StringFilter<"AssessmentAttempt"> | string
    secondary?: StringNullableFilter<"AssessmentAttempt"> | string | null
    createdAt?: DateTimeFilter<"AssessmentAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AssessmentAnswerListRelationFilter
  }

  export type AssessmentAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    scores?: SortOrder
    primary?: SortOrder
    secondary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    answers?: AssessmentAnswerOrderByRelationAggregateInput
  }

  export type AssessmentAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentAttemptWhereInput | AssessmentAttemptWhereInput[]
    OR?: AssessmentAttemptWhereInput[]
    NOT?: AssessmentAttemptWhereInput | AssessmentAttemptWhereInput[]
    userId?: StringFilter<"AssessmentAttempt"> | string
    scores?: JsonFilter<"AssessmentAttempt">
    primary?: StringFilter<"AssessmentAttempt"> | string
    secondary?: StringNullableFilter<"AssessmentAttempt"> | string | null
    createdAt?: DateTimeFilter<"AssessmentAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    answers?: AssessmentAnswerListRelationFilter
  }, "id">

  export type AssessmentAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    scores?: SortOrder
    primary?: SortOrder
    secondary?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AssessmentAttemptCountOrderByAggregateInput
    _max?: AssessmentAttemptMaxOrderByAggregateInput
    _min?: AssessmentAttemptMinOrderByAggregateInput
  }

  export type AssessmentAttemptScalarWhereWithAggregatesInput = {
    AND?: AssessmentAttemptScalarWhereWithAggregatesInput | AssessmentAttemptScalarWhereWithAggregatesInput[]
    OR?: AssessmentAttemptScalarWhereWithAggregatesInput[]
    NOT?: AssessmentAttemptScalarWhereWithAggregatesInput | AssessmentAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssessmentAttempt"> | string
    userId?: StringWithAggregatesFilter<"AssessmentAttempt"> | string
    scores?: JsonWithAggregatesFilter<"AssessmentAttempt">
    primary?: StringWithAggregatesFilter<"AssessmentAttempt"> | string
    secondary?: StringNullableWithAggregatesFilter<"AssessmentAttempt"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentAttempt"> | Date | string
  }

  export type AssessmentAnswerWhereInput = {
    AND?: AssessmentAnswerWhereInput | AssessmentAnswerWhereInput[]
    OR?: AssessmentAnswerWhereInput[]
    NOT?: AssessmentAnswerWhereInput | AssessmentAnswerWhereInput[]
    id?: StringFilter<"AssessmentAnswer"> | string
    attemptId?: StringFilter<"AssessmentAnswer"> | string
    questionId?: StringFilter<"AssessmentAnswer"> | string
    optionId?: StringFilter<"AssessmentAnswer"> | string
    attempt?: XOR<AssessmentAttemptScalarRelationFilter, AssessmentAttemptWhereInput>
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
    option?: XOR<QuizOptionScalarRelationFilter, QuizOptionWhereInput>
  }

  export type AssessmentAnswerOrderByWithRelationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    attempt?: AssessmentAttemptOrderByWithRelationInput
    question?: QuizQuestionOrderByWithRelationInput
    option?: QuizOptionOrderByWithRelationInput
  }

  export type AssessmentAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    attemptId_questionId?: AssessmentAnswerAttemptIdQuestionIdCompoundUniqueInput
    AND?: AssessmentAnswerWhereInput | AssessmentAnswerWhereInput[]
    OR?: AssessmentAnswerWhereInput[]
    NOT?: AssessmentAnswerWhereInput | AssessmentAnswerWhereInput[]
    attemptId?: StringFilter<"AssessmentAnswer"> | string
    questionId?: StringFilter<"AssessmentAnswer"> | string
    optionId?: StringFilter<"AssessmentAnswer"> | string
    attempt?: XOR<AssessmentAttemptScalarRelationFilter, AssessmentAttemptWhereInput>
    question?: XOR<QuizQuestionScalarRelationFilter, QuizQuestionWhereInput>
    option?: XOR<QuizOptionScalarRelationFilter, QuizOptionWhereInput>
  }, "id" | "attemptId_questionId">

  export type AssessmentAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
    _count?: AssessmentAnswerCountOrderByAggregateInput
    _max?: AssessmentAnswerMaxOrderByAggregateInput
    _min?: AssessmentAnswerMinOrderByAggregateInput
  }

  export type AssessmentAnswerScalarWhereWithAggregatesInput = {
    AND?: AssessmentAnswerScalarWhereWithAggregatesInput | AssessmentAnswerScalarWhereWithAggregatesInput[]
    OR?: AssessmentAnswerScalarWhereWithAggregatesInput[]
    NOT?: AssessmentAnswerScalarWhereWithAggregatesInput | AssessmentAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssessmentAnswer"> | string
    attemptId?: StringWithAggregatesFilter<"AssessmentAnswer"> | string
    questionId?: StringWithAggregatesFilter<"AssessmentAnswer"> | string
    optionId?: StringWithAggregatesFilter<"AssessmentAnswer"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    assessmentAttempts?: AssessmentAttemptCreateNestedManyWithoutUserInput
    roadmaps?: RoadmapCreateNestedManyWithoutUserInput
    careerProgress?: UserCareerProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    assessmentAttempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutUserInput
    roadmaps?: RoadmapUncheckedCreateNestedManyWithoutUserInput
    careerProgress?: UserCareerProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    assessmentAttempts?: AssessmentAttemptUpdateManyWithoutUserNestedInput
    roadmaps?: RoadmapUpdateManyWithoutUserNestedInput
    careerProgress?: UserCareerProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    assessmentAttempts?: AssessmentAttemptUncheckedUpdateManyWithoutUserNestedInput
    roadmaps?: RoadmapUncheckedUpdateManyWithoutUserNestedInput
    careerProgress?: UserCareerProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    name?: string | null
    major?: string | null
    semester?: number | null
    gpaRange?: string | null
    interests?: ProfileCreateinterestsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
    skills?: UserSkillCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    major?: string | null
    semester?: number | null
    gpaRange?: string | null
    interests?: ProfileCreateinterestsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gpaRange?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: ProfileUpdateinterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    skills?: UserSkillUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gpaRange?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: ProfileUpdateinterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    major?: string | null
    semester?: number | null
    gpaRange?: string | null
    interests?: ProfileCreateinterestsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gpaRange?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: ProfileUpdateinterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gpaRange?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: ProfileUpdateinterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    category: string
    users?: UserSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    users?: UserSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    users?: UserSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    users?: UserSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    category: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type UserSkillCreateInput = {
    id?: string
    level: number
    profile: ProfileCreateNestedOneWithoutSkillsInput
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type UserSkillUncheckedCreateInput = {
    id?: string
    profileId: string
    skillId: string
    level: number
  }

  export type UserSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUpdateOneRequiredWithoutSkillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserSkillCreateManyInput = {
    id?: string
    profileId: string
    skillId: string
    level: number
  }

  export type UserSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type CareerCreateInput = {
    id?: string
    slug: string
    title: string
    industry: string
    description: string
    icon?: string | null
    color?: string | null
    gradient?: string | null
    border?: string | null
    milestones?: CareerCreatemilestonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserCareerProgressCreateNestedManyWithoutCareerInput
  }

  export type CareerUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    industry: string
    description: string
    icon?: string | null
    color?: string | null
    gradient?: string | null
    border?: string | null
    milestones?: CareerCreatemilestonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    userProgress?: UserCareerProgressUncheckedCreateNestedManyWithoutCareerInput
  }

  export type CareerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    border?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: CareerUpdatemilestonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserCareerProgressUpdateManyWithoutCareerNestedInput
  }

  export type CareerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    border?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: CareerUpdatemilestonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProgress?: UserCareerProgressUncheckedUpdateManyWithoutCareerNestedInput
  }

  export type CareerCreateManyInput = {
    id?: string
    slug: string
    title: string
    industry: string
    description: string
    icon?: string | null
    color?: string | null
    gradient?: string | null
    border?: string | null
    milestones?: CareerCreatemilestonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    border?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: CareerUpdatemilestonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    border?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: CareerUpdatemilestonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProgressCreateInput = {
    id?: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCareerProgressInput
    career: CareerCreateNestedOneWithoutUserProgressInput
  }

  export type UserCareerProgressUncheckedCreateInput = {
    id?: string
    userId: string
    careerId: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
  }

  export type UserCareerProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCareerProgressNestedInput
    career?: CareerUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserCareerProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    careerId?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProgressCreateManyInput = {
    id?: string
    userId: string
    careerId: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
  }

  export type UserCareerProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    careerId?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRoadmapsInput
    nodes?: RoadmapNodeCreateNestedManyWithoutRoadmapInput
  }

  export type RoadmapUncheckedCreateInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    nodes?: RoadmapNodeUncheckedCreateNestedManyWithoutRoadmapInput
  }

  export type RoadmapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoadmapsNestedInput
    nodes?: RoadmapNodeUpdateManyWithoutRoadmapNestedInput
  }

  export type RoadmapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: RoadmapNodeUncheckedUpdateManyWithoutRoadmapNestedInput
  }

  export type RoadmapCreateManyInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
  }

  export type RoadmapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapNodeCreateInput = {
    id?: string
    title: string
    description?: string | null
    roadmap: RoadmapCreateNestedOneWithoutNodesInput
    parents?: RoadmapEdgeCreateNestedManyWithoutChildInput
    children?: RoadmapEdgeCreateNestedManyWithoutParentInput
  }

  export type RoadmapNodeUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    roadmapId: string
    parents?: RoadmapEdgeUncheckedCreateNestedManyWithoutChildInput
    children?: RoadmapEdgeUncheckedCreateNestedManyWithoutParentInput
  }

  export type RoadmapNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap?: RoadmapUpdateOneRequiredWithoutNodesNestedInput
    parents?: RoadmapEdgeUpdateManyWithoutChildNestedInput
    children?: RoadmapEdgeUpdateManyWithoutParentNestedInput
  }

  export type RoadmapNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roadmapId?: StringFieldUpdateOperationsInput | string
    parents?: RoadmapEdgeUncheckedUpdateManyWithoutChildNestedInput
    children?: RoadmapEdgeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RoadmapNodeCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    roadmapId: string
  }

  export type RoadmapNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoadmapNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roadmapId?: StringFieldUpdateOperationsInput | string
  }

  export type RoadmapEdgeCreateInput = {
    parent: RoadmapNodeCreateNestedOneWithoutChildrenInput
    child: RoadmapNodeCreateNestedOneWithoutParentsInput
  }

  export type RoadmapEdgeUncheckedCreateInput = {
    parentId: string
    childId: string
  }

  export type RoadmapEdgeUpdateInput = {
    parent?: RoadmapNodeUpdateOneRequiredWithoutChildrenNestedInput
    child?: RoadmapNodeUpdateOneRequiredWithoutParentsNestedInput
  }

  export type RoadmapEdgeUncheckedUpdateInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
  }

  export type RoadmapEdgeCreateManyInput = {
    parentId: string
    childId: string
  }

  export type RoadmapEdgeUpdateManyMutationInput = {

  }

  export type RoadmapEdgeUncheckedUpdateManyInput = {
    parentId?: StringFieldUpdateOperationsInput | string
    childId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizSectionCreateInput = {
    id?: string
    title: string
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuizQuestionCreateNestedManyWithoutSectionInput
  }

  export type QuizSectionUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuizQuestionUncheckedCreateNestedManyWithoutSectionInput
  }

  export type QuizSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuizQuestionUpdateManyWithoutSectionNestedInput
  }

  export type QuizSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuizQuestionUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type QuizSectionCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizQuestionCreateInput = {
    id?: string
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: QuizSectionCreateNestedOneWithoutQuestionsInput
    options?: QuizOptionCreateNestedManyWithoutQuestionInput
    assessmentAnswers?: AssessmentAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateInput = {
    id?: string
    sectionId?: string | null
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuizOptionUncheckedCreateNestedManyWithoutQuestionInput
    assessmentAnswers?: AssessmentAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: QuizSectionUpdateOneWithoutQuestionsNestedInput
    options?: QuizOptionUpdateManyWithoutQuestionNestedInput
    assessmentAnswers?: AssessmentAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput
    assessmentAnswers?: AssessmentAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionCreateManyInput = {
    id?: string
    sectionId?: string | null
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizOptionCreateInput = {
    id?: string
    label: string
    value?: string | null
    order?: number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuizQuestionCreateNestedOneWithoutOptionsInput
    assessmentAnswers?: AssessmentAnswerCreateNestedManyWithoutOptionInput
  }

  export type QuizOptionUncheckedCreateInput = {
    id?: string
    questionId: string
    label: string
    value?: string | null
    order?: number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    assessmentAnswers?: AssessmentAnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type QuizOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput
    assessmentAnswers?: AssessmentAnswerUpdateManyWithoutOptionNestedInput
  }

  export type QuizOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessmentAnswers?: AssessmentAnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type QuizOptionCreateManyInput = {
    id?: string
    questionId: string
    label: string
    value?: string | null
    order?: number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptCreateInput = {
    id?: string
    scores: JsonNullValueInput | InputJsonValue
    primary: string
    secondary?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAssessmentAttemptsInput
    answers?: AssessmentAnswerCreateNestedManyWithoutAttemptInput
  }

  export type AssessmentAttemptUncheckedCreateInput = {
    id?: string
    userId: string
    scores: JsonNullValueInput | InputJsonValue
    primary: string
    secondary?: string | null
    createdAt?: Date | string
    answers?: AssessmentAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type AssessmentAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssessmentAttemptsNestedInput
    answers?: AssessmentAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type AssessmentAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AssessmentAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type AssessmentAttemptCreateManyInput = {
    id?: string
    userId: string
    scores: JsonNullValueInput | InputJsonValue
    primary: string
    secondary?: string | null
    createdAt?: Date | string
  }

  export type AssessmentAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAnswerCreateInput = {
    id?: string
    attempt: AssessmentAttemptCreateNestedOneWithoutAnswersInput
    question: QuizQuestionCreateNestedOneWithoutAssessmentAnswersInput
    option: QuizOptionCreateNestedOneWithoutAssessmentAnswersInput
  }

  export type AssessmentAnswerUncheckedCreateInput = {
    id?: string
    attemptId: string
    questionId: string
    optionId: string
  }

  export type AssessmentAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: AssessmentAttemptUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuizQuestionUpdateOneRequiredWithoutAssessmentAnswersNestedInput
    option?: QuizOptionUpdateOneRequiredWithoutAssessmentAnswersNestedInput
  }

  export type AssessmentAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentAnswerCreateManyInput = {
    id?: string
    attemptId: string
    questionId: string
    optionId: string
  }

  export type AssessmentAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type AssessmentAttemptListRelationFilter = {
    every?: AssessmentAttemptWhereInput
    some?: AssessmentAttemptWhereInput
    none?: AssessmentAttemptWhereInput
  }

  export type RoadmapListRelationFilter = {
    every?: RoadmapWhereInput
    some?: RoadmapWhereInput
    none?: RoadmapWhereInput
  }

  export type UserCareerProgressListRelationFilter = {
    every?: UserCareerProgressWhereInput
    some?: UserCareerProgressWhereInput
    none?: UserCareerProgressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoadmapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCareerProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSkillListRelationFilter = {
    every?: UserSkillWhereInput
    some?: UserSkillWhereInput
    none?: UserSkillWhereInput
  }

  export type UserSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    major?: SortOrder
    semester?: SortOrder
    gpaRange?: SortOrder
    interests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    major?: SortOrder
    semester?: SortOrder
    gpaRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    major?: SortOrder
    semester?: SortOrder
    gpaRange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
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

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type UserSkillProfileIdSkillIdCompoundUniqueInput = {
    profileId: string
    skillId: string
  }

  export type UserSkillCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
  }

  export type UserSkillAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type UserSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
  }

  export type UserSkillMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
  }

  export type UserSkillSumOrderByAggregateInput = {
    level?: SortOrder
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

  export type CareerCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    industry?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    gradient?: SortOrder
    border?: SortOrder
    milestones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    industry?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    gradient?: SortOrder
    border?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    industry?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    gradient?: SortOrder
    border?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CareerScalarRelationFilter = {
    is?: CareerWhereInput
    isNot?: CareerWhereInput
  }

  export type UserCareerProgressUserIdCareerIdCompoundUniqueInput = {
    userId: string
    careerId: string
  }

  export type UserCareerProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    completedMilestones?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCareerProgressAvgOrderByAggregateInput = {
    completedMilestones?: SortOrder
  }

  export type UserCareerProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCareerProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careerId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCareerProgressSumOrderByAggregateInput = {
    completedMilestones?: SortOrder
  }

  export type RoadmapNodeListRelationFilter = {
    every?: RoadmapNodeWhereInput
    some?: RoadmapNodeWhereInput
    none?: RoadmapNodeWhereInput
  }

  export type RoadmapNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoadmapCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoadmapMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoadmapMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoadmapScalarRelationFilter = {
    is?: RoadmapWhereInput
    isNot?: RoadmapWhereInput
  }

  export type RoadmapEdgeListRelationFilter = {
    every?: RoadmapEdgeWhereInput
    some?: RoadmapEdgeWhereInput
    none?: RoadmapEdgeWhereInput
  }

  export type RoadmapEdgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoadmapNodeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roadmapId?: SortOrder
  }

  export type RoadmapNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roadmapId?: SortOrder
  }

  export type RoadmapNodeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    roadmapId?: SortOrder
  }

  export type RoadmapNodeScalarRelationFilter = {
    is?: RoadmapNodeWhereInput
    isNot?: RoadmapNodeWhereInput
  }

  export type RoadmapEdgeParentIdChildIdCompoundUniqueInput = {
    parentId: string
    childId: string
  }

  export type RoadmapEdgeCountOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
  }

  export type RoadmapEdgeMaxOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
  }

  export type RoadmapEdgeMinOrderByAggregateInput = {
    parentId?: SortOrder
    childId?: SortOrder
  }

  export type QuizQuestionListRelationFilter = {
    every?: QuizQuestionWhereInput
    some?: QuizQuestionWhereInput
    none?: QuizQuestionWhereInput
  }

  export type QuizQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizSectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSectionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuizSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSectionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuizSectionNullableScalarRelationFilter = {
    is?: QuizSectionWhereInput | null
    isNot?: QuizSectionWhereInput | null
  }

  export type QuizOptionListRelationFilter = {
    every?: QuizOptionWhereInput
    some?: QuizOptionWhereInput
    none?: QuizOptionWhereInput
  }

  export type AssessmentAnswerListRelationFilter = {
    every?: AssessmentAnswerWhereInput
    some?: AssessmentAnswerWhereInput
    none?: AssessmentAnswerWhereInput
  }

  export type QuizOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizQuestionSectionIdOrderCompoundUniqueInput = {
    sectionId: string
    order: number
  }

  export type QuizQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    prompt?: SortOrder
    helperText?: SortOrder
    type?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizQuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuizQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    prompt?: SortOrder
    helperText?: SortOrder
    type?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    sectionId?: SortOrder
    prompt?: SortOrder
    helperText?: SortOrder
    type?: SortOrder
    order?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizQuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuizQuestionScalarRelationFilter = {
    is?: QuizQuestionWhereInput
    isNot?: QuizQuestionWhereInput
  }

  export type QuizOptionQuestionIdOrderCompoundUniqueInput = {
    questionId: string
    order: number
  }

  export type QuizOptionCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    order?: SortOrder
    scoring?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizOptionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuizOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizOptionMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    label?: SortOrder
    value?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizOptionSumOrderByAggregateInput = {
    order?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AssessmentAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scores?: SortOrder
    primary?: SortOrder
    secondary?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    primary?: SortOrder
    secondary?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    primary?: SortOrder
    secondary?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type AssessmentAttemptScalarRelationFilter = {
    is?: AssessmentAttemptWhereInput
    isNot?: AssessmentAttemptWhereInput
  }

  export type QuizOptionScalarRelationFilter = {
    is?: QuizOptionWhereInput
    isNot?: QuizOptionWhereInput
  }

  export type AssessmentAnswerAttemptIdQuestionIdCompoundUniqueInput = {
    attemptId: string
    questionId: string
  }

  export type AssessmentAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
  }

  export type AssessmentAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
  }

  export type AssessmentAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    attemptId?: SortOrder
    questionId?: SortOrder
    optionId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type AssessmentAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentAttemptCreateWithoutUserInput, AssessmentAttemptUncheckedCreateWithoutUserInput> | AssessmentAttemptCreateWithoutUserInput[] | AssessmentAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutUserInput | AssessmentAttemptCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentAttemptCreateManyUserInputEnvelope
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
  }

  export type RoadmapCreateNestedManyWithoutUserInput = {
    create?: XOR<RoadmapCreateWithoutUserInput, RoadmapUncheckedCreateWithoutUserInput> | RoadmapCreateWithoutUserInput[] | RoadmapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoadmapCreateOrConnectWithoutUserInput | RoadmapCreateOrConnectWithoutUserInput[]
    createMany?: RoadmapCreateManyUserInputEnvelope
    connect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
  }

  export type UserCareerProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCareerProgressCreateWithoutUserInput, UserCareerProgressUncheckedCreateWithoutUserInput> | UserCareerProgressCreateWithoutUserInput[] | UserCareerProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCareerProgressCreateOrConnectWithoutUserInput | UserCareerProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCareerProgressCreateManyUserInputEnvelope
    connect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type AssessmentAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentAttemptCreateWithoutUserInput, AssessmentAttemptUncheckedCreateWithoutUserInput> | AssessmentAttemptCreateWithoutUserInput[] | AssessmentAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutUserInput | AssessmentAttemptCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentAttemptCreateManyUserInputEnvelope
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
  }

  export type RoadmapUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoadmapCreateWithoutUserInput, RoadmapUncheckedCreateWithoutUserInput> | RoadmapCreateWithoutUserInput[] | RoadmapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoadmapCreateOrConnectWithoutUserInput | RoadmapCreateOrConnectWithoutUserInput[]
    createMany?: RoadmapCreateManyUserInputEnvelope
    connect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
  }

  export type UserCareerProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCareerProgressCreateWithoutUserInput, UserCareerProgressUncheckedCreateWithoutUserInput> | UserCareerProgressCreateWithoutUserInput[] | UserCareerProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCareerProgressCreateOrConnectWithoutUserInput | UserCareerProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserCareerProgressCreateManyUserInputEnvelope
    connect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentAttemptCreateWithoutUserInput, AssessmentAttemptUncheckedCreateWithoutUserInput> | AssessmentAttemptCreateWithoutUserInput[] | AssessmentAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutUserInput | AssessmentAttemptCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentAttemptUpsertWithWhereUniqueWithoutUserInput | AssessmentAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentAttemptCreateManyUserInputEnvelope
    set?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    disconnect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    delete?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    update?: AssessmentAttemptUpdateWithWhereUniqueWithoutUserInput | AssessmentAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentAttemptUpdateManyWithWhereWithoutUserInput | AssessmentAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
  }

  export type RoadmapUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoadmapCreateWithoutUserInput, RoadmapUncheckedCreateWithoutUserInput> | RoadmapCreateWithoutUserInput[] | RoadmapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoadmapCreateOrConnectWithoutUserInput | RoadmapCreateOrConnectWithoutUserInput[]
    upsert?: RoadmapUpsertWithWhereUniqueWithoutUserInput | RoadmapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoadmapCreateManyUserInputEnvelope
    set?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    disconnect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    delete?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    connect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    update?: RoadmapUpdateWithWhereUniqueWithoutUserInput | RoadmapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoadmapUpdateManyWithWhereWithoutUserInput | RoadmapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoadmapScalarWhereInput | RoadmapScalarWhereInput[]
  }

  export type UserCareerProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCareerProgressCreateWithoutUserInput, UserCareerProgressUncheckedCreateWithoutUserInput> | UserCareerProgressCreateWithoutUserInput[] | UserCareerProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCareerProgressCreateOrConnectWithoutUserInput | UserCareerProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCareerProgressUpsertWithWhereUniqueWithoutUserInput | UserCareerProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCareerProgressCreateManyUserInputEnvelope
    set?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    disconnect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    delete?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    connect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    update?: UserCareerProgressUpdateWithWhereUniqueWithoutUserInput | UserCareerProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCareerProgressUpdateManyWithWhereWithoutUserInput | UserCareerProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCareerProgressScalarWhereInput | UserCareerProgressScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentAttemptCreateWithoutUserInput, AssessmentAttemptUncheckedCreateWithoutUserInput> | AssessmentAttemptCreateWithoutUserInput[] | AssessmentAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutUserInput | AssessmentAttemptCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentAttemptUpsertWithWhereUniqueWithoutUserInput | AssessmentAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentAttemptCreateManyUserInputEnvelope
    set?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    disconnect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    delete?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    connect?: AssessmentAttemptWhereUniqueInput | AssessmentAttemptWhereUniqueInput[]
    update?: AssessmentAttemptUpdateWithWhereUniqueWithoutUserInput | AssessmentAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentAttemptUpdateManyWithWhereWithoutUserInput | AssessmentAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
  }

  export type RoadmapUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoadmapCreateWithoutUserInput, RoadmapUncheckedCreateWithoutUserInput> | RoadmapCreateWithoutUserInput[] | RoadmapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoadmapCreateOrConnectWithoutUserInput | RoadmapCreateOrConnectWithoutUserInput[]
    upsert?: RoadmapUpsertWithWhereUniqueWithoutUserInput | RoadmapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoadmapCreateManyUserInputEnvelope
    set?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    disconnect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    delete?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    connect?: RoadmapWhereUniqueInput | RoadmapWhereUniqueInput[]
    update?: RoadmapUpdateWithWhereUniqueWithoutUserInput | RoadmapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoadmapUpdateManyWithWhereWithoutUserInput | RoadmapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoadmapScalarWhereInput | RoadmapScalarWhereInput[]
  }

  export type UserCareerProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCareerProgressCreateWithoutUserInput, UserCareerProgressUncheckedCreateWithoutUserInput> | UserCareerProgressCreateWithoutUserInput[] | UserCareerProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCareerProgressCreateOrConnectWithoutUserInput | UserCareerProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserCareerProgressUpsertWithWhereUniqueWithoutUserInput | UserCareerProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCareerProgressCreateManyUserInputEnvelope
    set?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    disconnect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    delete?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    connect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    update?: UserCareerProgressUpdateWithWhereUniqueWithoutUserInput | UserCareerProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCareerProgressUpdateManyWithWhereWithoutUserInput | UserCareerProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCareerProgressScalarWhereInput | UserCareerProgressScalarWhereInput[]
  }

  export type ProfileCreateinterestsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserSkillCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserSkillCreateWithoutProfileInput, UserSkillUncheckedCreateWithoutProfileInput> | UserSkillCreateWithoutProfileInput[] | UserSkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutProfileInput | UserSkillCreateOrConnectWithoutProfileInput[]
    createMany?: UserSkillCreateManyProfileInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<UserSkillCreateWithoutProfileInput, UserSkillUncheckedCreateWithoutProfileInput> | UserSkillCreateWithoutProfileInput[] | UserSkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutProfileInput | UserSkillCreateOrConnectWithoutProfileInput[]
    createMany?: UserSkillCreateManyProfileInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateinterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserSkillUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserSkillCreateWithoutProfileInput, UserSkillUncheckedCreateWithoutProfileInput> | UserSkillCreateWithoutProfileInput[] | UserSkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutProfileInput | UserSkillCreateOrConnectWithoutProfileInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutProfileInput | UserSkillUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserSkillCreateManyProfileInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutProfileInput | UserSkillUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutProfileInput | UserSkillUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<UserSkillCreateWithoutProfileInput, UserSkillUncheckedCreateWithoutProfileInput> | UserSkillCreateWithoutProfileInput[] | UserSkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutProfileInput | UserSkillCreateOrConnectWithoutProfileInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutProfileInput | UserSkillUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: UserSkillCreateManyProfileInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutProfileInput | UserSkillUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutProfileInput | UserSkillUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
  }

  export type UserSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutSkillInput | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutSkillInput | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutSkillInput | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput> | UserSkillCreateWithoutSkillInput[] | UserSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: UserSkillCreateOrConnectWithoutSkillInput | UserSkillCreateOrConnectWithoutSkillInput[]
    upsert?: UserSkillUpsertWithWhereUniqueWithoutSkillInput | UserSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: UserSkillCreateManySkillInputEnvelope
    set?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    disconnect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    delete?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    connect?: UserSkillWhereUniqueInput | UserSkillWhereUniqueInput[]
    update?: UserSkillUpdateWithWhereUniqueWithoutSkillInput | UserSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: UserSkillUpdateManyWithWhereWithoutSkillInput | UserSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutSkillsInput = {
    create?: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSkillsInput
    connect?: ProfileWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutUsersInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    connect?: SkillWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSkillsInput
    upsert?: ProfileUpsertWithoutSkillsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSkillsInput, ProfileUpdateWithoutSkillsInput>, ProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type SkillUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    connectOrCreate?: SkillCreateOrConnectWithoutUsersInput
    upsert?: SkillUpsertWithoutUsersInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutUsersInput, SkillUpdateWithoutUsersInput>, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type CareerCreatemilestonesInput = {
    set: string[]
  }

  export type UserCareerProgressCreateNestedManyWithoutCareerInput = {
    create?: XOR<UserCareerProgressCreateWithoutCareerInput, UserCareerProgressUncheckedCreateWithoutCareerInput> | UserCareerProgressCreateWithoutCareerInput[] | UserCareerProgressUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: UserCareerProgressCreateOrConnectWithoutCareerInput | UserCareerProgressCreateOrConnectWithoutCareerInput[]
    createMany?: UserCareerProgressCreateManyCareerInputEnvelope
    connect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
  }

  export type UserCareerProgressUncheckedCreateNestedManyWithoutCareerInput = {
    create?: XOR<UserCareerProgressCreateWithoutCareerInput, UserCareerProgressUncheckedCreateWithoutCareerInput> | UserCareerProgressCreateWithoutCareerInput[] | UserCareerProgressUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: UserCareerProgressCreateOrConnectWithoutCareerInput | UserCareerProgressCreateOrConnectWithoutCareerInput[]
    createMany?: UserCareerProgressCreateManyCareerInputEnvelope
    connect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
  }

  export type CareerUpdatemilestonesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserCareerProgressUpdateManyWithoutCareerNestedInput = {
    create?: XOR<UserCareerProgressCreateWithoutCareerInput, UserCareerProgressUncheckedCreateWithoutCareerInput> | UserCareerProgressCreateWithoutCareerInput[] | UserCareerProgressUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: UserCareerProgressCreateOrConnectWithoutCareerInput | UserCareerProgressCreateOrConnectWithoutCareerInput[]
    upsert?: UserCareerProgressUpsertWithWhereUniqueWithoutCareerInput | UserCareerProgressUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: UserCareerProgressCreateManyCareerInputEnvelope
    set?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    disconnect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    delete?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    connect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    update?: UserCareerProgressUpdateWithWhereUniqueWithoutCareerInput | UserCareerProgressUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: UserCareerProgressUpdateManyWithWhereWithoutCareerInput | UserCareerProgressUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: UserCareerProgressScalarWhereInput | UserCareerProgressScalarWhereInput[]
  }

  export type UserCareerProgressUncheckedUpdateManyWithoutCareerNestedInput = {
    create?: XOR<UserCareerProgressCreateWithoutCareerInput, UserCareerProgressUncheckedCreateWithoutCareerInput> | UserCareerProgressCreateWithoutCareerInput[] | UserCareerProgressUncheckedCreateWithoutCareerInput[]
    connectOrCreate?: UserCareerProgressCreateOrConnectWithoutCareerInput | UserCareerProgressCreateOrConnectWithoutCareerInput[]
    upsert?: UserCareerProgressUpsertWithWhereUniqueWithoutCareerInput | UserCareerProgressUpsertWithWhereUniqueWithoutCareerInput[]
    createMany?: UserCareerProgressCreateManyCareerInputEnvelope
    set?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    disconnect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    delete?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    connect?: UserCareerProgressWhereUniqueInput | UserCareerProgressWhereUniqueInput[]
    update?: UserCareerProgressUpdateWithWhereUniqueWithoutCareerInput | UserCareerProgressUpdateWithWhereUniqueWithoutCareerInput[]
    updateMany?: UserCareerProgressUpdateManyWithWhereWithoutCareerInput | UserCareerProgressUpdateManyWithWhereWithoutCareerInput[]
    deleteMany?: UserCareerProgressScalarWhereInput | UserCareerProgressScalarWhereInput[]
  }

  export type UserCareerProgressCreatecompletedMilestonesInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutCareerProgressInput = {
    create?: XOR<UserCreateWithoutCareerProgressInput, UserUncheckedCreateWithoutCareerProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareerProgressInput
    connect?: UserWhereUniqueInput
  }

  export type CareerCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<CareerCreateWithoutUserProgressInput, CareerUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: CareerCreateOrConnectWithoutUserProgressInput
    connect?: CareerWhereUniqueInput
  }

  export type UserCareerProgressUpdatecompletedMilestonesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutCareerProgressNestedInput = {
    create?: XOR<UserCreateWithoutCareerProgressInput, UserUncheckedCreateWithoutCareerProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareerProgressInput
    upsert?: UserUpsertWithoutCareerProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCareerProgressInput, UserUpdateWithoutCareerProgressInput>, UserUncheckedUpdateWithoutCareerProgressInput>
  }

  export type CareerUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<CareerCreateWithoutUserProgressInput, CareerUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: CareerCreateOrConnectWithoutUserProgressInput
    upsert?: CareerUpsertWithoutUserProgressInput
    connect?: CareerWhereUniqueInput
    update?: XOR<XOR<CareerUpdateToOneWithWhereWithoutUserProgressInput, CareerUpdateWithoutUserProgressInput>, CareerUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserCreateNestedOneWithoutRoadmapsInput = {
    create?: XOR<UserCreateWithoutRoadmapsInput, UserUncheckedCreateWithoutRoadmapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoadmapsInput
    connect?: UserWhereUniqueInput
  }

  export type RoadmapNodeCreateNestedManyWithoutRoadmapInput = {
    create?: XOR<RoadmapNodeCreateWithoutRoadmapInput, RoadmapNodeUncheckedCreateWithoutRoadmapInput> | RoadmapNodeCreateWithoutRoadmapInput[] | RoadmapNodeUncheckedCreateWithoutRoadmapInput[]
    connectOrCreate?: RoadmapNodeCreateOrConnectWithoutRoadmapInput | RoadmapNodeCreateOrConnectWithoutRoadmapInput[]
    createMany?: RoadmapNodeCreateManyRoadmapInputEnvelope
    connect?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
  }

  export type RoadmapNodeUncheckedCreateNestedManyWithoutRoadmapInput = {
    create?: XOR<RoadmapNodeCreateWithoutRoadmapInput, RoadmapNodeUncheckedCreateWithoutRoadmapInput> | RoadmapNodeCreateWithoutRoadmapInput[] | RoadmapNodeUncheckedCreateWithoutRoadmapInput[]
    connectOrCreate?: RoadmapNodeCreateOrConnectWithoutRoadmapInput | RoadmapNodeCreateOrConnectWithoutRoadmapInput[]
    createMany?: RoadmapNodeCreateManyRoadmapInputEnvelope
    connect?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoadmapsNestedInput = {
    create?: XOR<UserCreateWithoutRoadmapsInput, UserUncheckedCreateWithoutRoadmapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoadmapsInput
    upsert?: UserUpsertWithoutRoadmapsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoadmapsInput, UserUpdateWithoutRoadmapsInput>, UserUncheckedUpdateWithoutRoadmapsInput>
  }

  export type RoadmapNodeUpdateManyWithoutRoadmapNestedInput = {
    create?: XOR<RoadmapNodeCreateWithoutRoadmapInput, RoadmapNodeUncheckedCreateWithoutRoadmapInput> | RoadmapNodeCreateWithoutRoadmapInput[] | RoadmapNodeUncheckedCreateWithoutRoadmapInput[]
    connectOrCreate?: RoadmapNodeCreateOrConnectWithoutRoadmapInput | RoadmapNodeCreateOrConnectWithoutRoadmapInput[]
    upsert?: RoadmapNodeUpsertWithWhereUniqueWithoutRoadmapInput | RoadmapNodeUpsertWithWhereUniqueWithoutRoadmapInput[]
    createMany?: RoadmapNodeCreateManyRoadmapInputEnvelope
    set?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
    disconnect?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
    delete?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
    connect?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
    update?: RoadmapNodeUpdateWithWhereUniqueWithoutRoadmapInput | RoadmapNodeUpdateWithWhereUniqueWithoutRoadmapInput[]
    updateMany?: RoadmapNodeUpdateManyWithWhereWithoutRoadmapInput | RoadmapNodeUpdateManyWithWhereWithoutRoadmapInput[]
    deleteMany?: RoadmapNodeScalarWhereInput | RoadmapNodeScalarWhereInput[]
  }

  export type RoadmapNodeUncheckedUpdateManyWithoutRoadmapNestedInput = {
    create?: XOR<RoadmapNodeCreateWithoutRoadmapInput, RoadmapNodeUncheckedCreateWithoutRoadmapInput> | RoadmapNodeCreateWithoutRoadmapInput[] | RoadmapNodeUncheckedCreateWithoutRoadmapInput[]
    connectOrCreate?: RoadmapNodeCreateOrConnectWithoutRoadmapInput | RoadmapNodeCreateOrConnectWithoutRoadmapInput[]
    upsert?: RoadmapNodeUpsertWithWhereUniqueWithoutRoadmapInput | RoadmapNodeUpsertWithWhereUniqueWithoutRoadmapInput[]
    createMany?: RoadmapNodeCreateManyRoadmapInputEnvelope
    set?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
    disconnect?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
    delete?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
    connect?: RoadmapNodeWhereUniqueInput | RoadmapNodeWhereUniqueInput[]
    update?: RoadmapNodeUpdateWithWhereUniqueWithoutRoadmapInput | RoadmapNodeUpdateWithWhereUniqueWithoutRoadmapInput[]
    updateMany?: RoadmapNodeUpdateManyWithWhereWithoutRoadmapInput | RoadmapNodeUpdateManyWithWhereWithoutRoadmapInput[]
    deleteMany?: RoadmapNodeScalarWhereInput | RoadmapNodeScalarWhereInput[]
  }

  export type RoadmapCreateNestedOneWithoutNodesInput = {
    create?: XOR<RoadmapCreateWithoutNodesInput, RoadmapUncheckedCreateWithoutNodesInput>
    connectOrCreate?: RoadmapCreateOrConnectWithoutNodesInput
    connect?: RoadmapWhereUniqueInput
  }

  export type RoadmapEdgeCreateNestedManyWithoutChildInput = {
    create?: XOR<RoadmapEdgeCreateWithoutChildInput, RoadmapEdgeUncheckedCreateWithoutChildInput> | RoadmapEdgeCreateWithoutChildInput[] | RoadmapEdgeUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RoadmapEdgeCreateOrConnectWithoutChildInput | RoadmapEdgeCreateOrConnectWithoutChildInput[]
    createMany?: RoadmapEdgeCreateManyChildInputEnvelope
    connect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
  }

  export type RoadmapEdgeCreateNestedManyWithoutParentInput = {
    create?: XOR<RoadmapEdgeCreateWithoutParentInput, RoadmapEdgeUncheckedCreateWithoutParentInput> | RoadmapEdgeCreateWithoutParentInput[] | RoadmapEdgeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RoadmapEdgeCreateOrConnectWithoutParentInput | RoadmapEdgeCreateOrConnectWithoutParentInput[]
    createMany?: RoadmapEdgeCreateManyParentInputEnvelope
    connect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
  }

  export type RoadmapEdgeUncheckedCreateNestedManyWithoutChildInput = {
    create?: XOR<RoadmapEdgeCreateWithoutChildInput, RoadmapEdgeUncheckedCreateWithoutChildInput> | RoadmapEdgeCreateWithoutChildInput[] | RoadmapEdgeUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RoadmapEdgeCreateOrConnectWithoutChildInput | RoadmapEdgeCreateOrConnectWithoutChildInput[]
    createMany?: RoadmapEdgeCreateManyChildInputEnvelope
    connect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
  }

  export type RoadmapEdgeUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<RoadmapEdgeCreateWithoutParentInput, RoadmapEdgeUncheckedCreateWithoutParentInput> | RoadmapEdgeCreateWithoutParentInput[] | RoadmapEdgeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RoadmapEdgeCreateOrConnectWithoutParentInput | RoadmapEdgeCreateOrConnectWithoutParentInput[]
    createMany?: RoadmapEdgeCreateManyParentInputEnvelope
    connect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
  }

  export type RoadmapUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<RoadmapCreateWithoutNodesInput, RoadmapUncheckedCreateWithoutNodesInput>
    connectOrCreate?: RoadmapCreateOrConnectWithoutNodesInput
    upsert?: RoadmapUpsertWithoutNodesInput
    connect?: RoadmapWhereUniqueInput
    update?: XOR<XOR<RoadmapUpdateToOneWithWhereWithoutNodesInput, RoadmapUpdateWithoutNodesInput>, RoadmapUncheckedUpdateWithoutNodesInput>
  }

  export type RoadmapEdgeUpdateManyWithoutChildNestedInput = {
    create?: XOR<RoadmapEdgeCreateWithoutChildInput, RoadmapEdgeUncheckedCreateWithoutChildInput> | RoadmapEdgeCreateWithoutChildInput[] | RoadmapEdgeUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RoadmapEdgeCreateOrConnectWithoutChildInput | RoadmapEdgeCreateOrConnectWithoutChildInput[]
    upsert?: RoadmapEdgeUpsertWithWhereUniqueWithoutChildInput | RoadmapEdgeUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RoadmapEdgeCreateManyChildInputEnvelope
    set?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    disconnect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    delete?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    connect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    update?: RoadmapEdgeUpdateWithWhereUniqueWithoutChildInput | RoadmapEdgeUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RoadmapEdgeUpdateManyWithWhereWithoutChildInput | RoadmapEdgeUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RoadmapEdgeScalarWhereInput | RoadmapEdgeScalarWhereInput[]
  }

  export type RoadmapEdgeUpdateManyWithoutParentNestedInput = {
    create?: XOR<RoadmapEdgeCreateWithoutParentInput, RoadmapEdgeUncheckedCreateWithoutParentInput> | RoadmapEdgeCreateWithoutParentInput[] | RoadmapEdgeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RoadmapEdgeCreateOrConnectWithoutParentInput | RoadmapEdgeCreateOrConnectWithoutParentInput[]
    upsert?: RoadmapEdgeUpsertWithWhereUniqueWithoutParentInput | RoadmapEdgeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RoadmapEdgeCreateManyParentInputEnvelope
    set?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    disconnect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    delete?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    connect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    update?: RoadmapEdgeUpdateWithWhereUniqueWithoutParentInput | RoadmapEdgeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RoadmapEdgeUpdateManyWithWhereWithoutParentInput | RoadmapEdgeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RoadmapEdgeScalarWhereInput | RoadmapEdgeScalarWhereInput[]
  }

  export type RoadmapEdgeUncheckedUpdateManyWithoutChildNestedInput = {
    create?: XOR<RoadmapEdgeCreateWithoutChildInput, RoadmapEdgeUncheckedCreateWithoutChildInput> | RoadmapEdgeCreateWithoutChildInput[] | RoadmapEdgeUncheckedCreateWithoutChildInput[]
    connectOrCreate?: RoadmapEdgeCreateOrConnectWithoutChildInput | RoadmapEdgeCreateOrConnectWithoutChildInput[]
    upsert?: RoadmapEdgeUpsertWithWhereUniqueWithoutChildInput | RoadmapEdgeUpsertWithWhereUniqueWithoutChildInput[]
    createMany?: RoadmapEdgeCreateManyChildInputEnvelope
    set?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    disconnect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    delete?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    connect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    update?: RoadmapEdgeUpdateWithWhereUniqueWithoutChildInput | RoadmapEdgeUpdateWithWhereUniqueWithoutChildInput[]
    updateMany?: RoadmapEdgeUpdateManyWithWhereWithoutChildInput | RoadmapEdgeUpdateManyWithWhereWithoutChildInput[]
    deleteMany?: RoadmapEdgeScalarWhereInput | RoadmapEdgeScalarWhereInput[]
  }

  export type RoadmapEdgeUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<RoadmapEdgeCreateWithoutParentInput, RoadmapEdgeUncheckedCreateWithoutParentInput> | RoadmapEdgeCreateWithoutParentInput[] | RoadmapEdgeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: RoadmapEdgeCreateOrConnectWithoutParentInput | RoadmapEdgeCreateOrConnectWithoutParentInput[]
    upsert?: RoadmapEdgeUpsertWithWhereUniqueWithoutParentInput | RoadmapEdgeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: RoadmapEdgeCreateManyParentInputEnvelope
    set?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    disconnect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    delete?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    connect?: RoadmapEdgeWhereUniqueInput | RoadmapEdgeWhereUniqueInput[]
    update?: RoadmapEdgeUpdateWithWhereUniqueWithoutParentInput | RoadmapEdgeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: RoadmapEdgeUpdateManyWithWhereWithoutParentInput | RoadmapEdgeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: RoadmapEdgeScalarWhereInput | RoadmapEdgeScalarWhereInput[]
  }

  export type RoadmapNodeCreateNestedOneWithoutChildrenInput = {
    create?: XOR<RoadmapNodeCreateWithoutChildrenInput, RoadmapNodeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: RoadmapNodeCreateOrConnectWithoutChildrenInput
    connect?: RoadmapNodeWhereUniqueInput
  }

  export type RoadmapNodeCreateNestedOneWithoutParentsInput = {
    create?: XOR<RoadmapNodeCreateWithoutParentsInput, RoadmapNodeUncheckedCreateWithoutParentsInput>
    connectOrCreate?: RoadmapNodeCreateOrConnectWithoutParentsInput
    connect?: RoadmapNodeWhereUniqueInput
  }

  export type RoadmapNodeUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<RoadmapNodeCreateWithoutChildrenInput, RoadmapNodeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: RoadmapNodeCreateOrConnectWithoutChildrenInput
    upsert?: RoadmapNodeUpsertWithoutChildrenInput
    connect?: RoadmapNodeWhereUniqueInput
    update?: XOR<XOR<RoadmapNodeUpdateToOneWithWhereWithoutChildrenInput, RoadmapNodeUpdateWithoutChildrenInput>, RoadmapNodeUncheckedUpdateWithoutChildrenInput>
  }

  export type RoadmapNodeUpdateOneRequiredWithoutParentsNestedInput = {
    create?: XOR<RoadmapNodeCreateWithoutParentsInput, RoadmapNodeUncheckedCreateWithoutParentsInput>
    connectOrCreate?: RoadmapNodeCreateOrConnectWithoutParentsInput
    upsert?: RoadmapNodeUpsertWithoutParentsInput
    connect?: RoadmapNodeWhereUniqueInput
    update?: XOR<XOR<RoadmapNodeUpdateToOneWithWhereWithoutParentsInput, RoadmapNodeUpdateWithoutParentsInput>, RoadmapNodeUncheckedUpdateWithoutParentsInput>
  }

  export type QuizQuestionCreateNestedManyWithoutSectionInput = {
    create?: XOR<QuizQuestionCreateWithoutSectionInput, QuizQuestionUncheckedCreateWithoutSectionInput> | QuizQuestionCreateWithoutSectionInput[] | QuizQuestionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutSectionInput | QuizQuestionCreateOrConnectWithoutSectionInput[]
    createMany?: QuizQuestionCreateManySectionInputEnvelope
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
  }

  export type QuizQuestionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<QuizQuestionCreateWithoutSectionInput, QuizQuestionUncheckedCreateWithoutSectionInput> | QuizQuestionCreateWithoutSectionInput[] | QuizQuestionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutSectionInput | QuizQuestionCreateOrConnectWithoutSectionInput[]
    createMany?: QuizQuestionCreateManySectionInputEnvelope
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
  }

  export type QuizQuestionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutSectionInput, QuizQuestionUncheckedCreateWithoutSectionInput> | QuizQuestionCreateWithoutSectionInput[] | QuizQuestionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutSectionInput | QuizQuestionCreateOrConnectWithoutSectionInput[]
    upsert?: QuizQuestionUpsertWithWhereUniqueWithoutSectionInput | QuizQuestionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: QuizQuestionCreateManySectionInputEnvelope
    set?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    disconnect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    delete?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    update?: QuizQuestionUpdateWithWhereUniqueWithoutSectionInput | QuizQuestionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: QuizQuestionUpdateManyWithWhereWithoutSectionInput | QuizQuestionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
  }

  export type QuizQuestionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutSectionInput, QuizQuestionUncheckedCreateWithoutSectionInput> | QuizQuestionCreateWithoutSectionInput[] | QuizQuestionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutSectionInput | QuizQuestionCreateOrConnectWithoutSectionInput[]
    upsert?: QuizQuestionUpsertWithWhereUniqueWithoutSectionInput | QuizQuestionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: QuizQuestionCreateManySectionInputEnvelope
    set?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    disconnect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    delete?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    connect?: QuizQuestionWhereUniqueInput | QuizQuestionWhereUniqueInput[]
    update?: QuizQuestionUpdateWithWhereUniqueWithoutSectionInput | QuizQuestionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: QuizQuestionUpdateManyWithWhereWithoutSectionInput | QuizQuestionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
  }

  export type QuizSectionCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizSectionCreateWithoutQuestionsInput, QuizSectionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizSectionCreateOrConnectWithoutQuestionsInput
    connect?: QuizSectionWhereUniqueInput
  }

  export type QuizOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
  }

  export type AssessmentAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AssessmentAnswerCreateWithoutQuestionInput, AssessmentAnswerUncheckedCreateWithoutQuestionInput> | AssessmentAnswerCreateWithoutQuestionInput[] | AssessmentAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutQuestionInput | AssessmentAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AssessmentAnswerCreateManyQuestionInputEnvelope
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
  }

  export type QuizOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
  }

  export type AssessmentAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AssessmentAnswerCreateWithoutQuestionInput, AssessmentAnswerUncheckedCreateWithoutQuestionInput> | AssessmentAnswerCreateWithoutQuestionInput[] | AssessmentAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutQuestionInput | AssessmentAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AssessmentAnswerCreateManyQuestionInputEnvelope
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuizSectionUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<QuizSectionCreateWithoutQuestionsInput, QuizSectionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizSectionCreateOrConnectWithoutQuestionsInput
    upsert?: QuizSectionUpsertWithoutQuestionsInput
    disconnect?: QuizSectionWhereInput | boolean
    delete?: QuizSectionWhereInput | boolean
    connect?: QuizSectionWhereUniqueInput
    update?: XOR<XOR<QuizSectionUpdateToOneWithWhereWithoutQuestionsInput, QuizSectionUpdateWithoutQuestionsInput>, QuizSectionUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizOptionUpsertWithWhereUniqueWithoutQuestionInput | QuizOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    set?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    disconnect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    delete?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    update?: QuizOptionUpdateWithWhereUniqueWithoutQuestionInput | QuizOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizOptionUpdateManyWithWhereWithoutQuestionInput | QuizOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
  }

  export type AssessmentAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AssessmentAnswerCreateWithoutQuestionInput, AssessmentAnswerUncheckedCreateWithoutQuestionInput> | AssessmentAnswerCreateWithoutQuestionInput[] | AssessmentAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutQuestionInput | AssessmentAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AssessmentAnswerUpsertWithWhereUniqueWithoutQuestionInput | AssessmentAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AssessmentAnswerCreateManyQuestionInputEnvelope
    set?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    disconnect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    delete?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    update?: AssessmentAnswerUpdateWithWhereUniqueWithoutQuestionInput | AssessmentAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AssessmentAnswerUpdateManyWithWhereWithoutQuestionInput | AssessmentAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AssessmentAnswerScalarWhereInput | AssessmentAnswerScalarWhereInput[]
  }

  export type QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput> | QuizOptionCreateWithoutQuestionInput[] | QuizOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizOptionCreateOrConnectWithoutQuestionInput | QuizOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizOptionUpsertWithWhereUniqueWithoutQuestionInput | QuizOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizOptionCreateManyQuestionInputEnvelope
    set?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    disconnect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    delete?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    connect?: QuizOptionWhereUniqueInput | QuizOptionWhereUniqueInput[]
    update?: QuizOptionUpdateWithWhereUniqueWithoutQuestionInput | QuizOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizOptionUpdateManyWithWhereWithoutQuestionInput | QuizOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
  }

  export type AssessmentAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AssessmentAnswerCreateWithoutQuestionInput, AssessmentAnswerUncheckedCreateWithoutQuestionInput> | AssessmentAnswerCreateWithoutQuestionInput[] | AssessmentAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutQuestionInput | AssessmentAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AssessmentAnswerUpsertWithWhereUniqueWithoutQuestionInput | AssessmentAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AssessmentAnswerCreateManyQuestionInputEnvelope
    set?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    disconnect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    delete?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    update?: AssessmentAnswerUpdateWithWhereUniqueWithoutQuestionInput | AssessmentAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AssessmentAnswerUpdateManyWithWhereWithoutQuestionInput | AssessmentAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AssessmentAnswerScalarWhereInput | AssessmentAnswerScalarWhereInput[]
  }

  export type QuizQuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutOptionsInput
    connect?: QuizQuestionWhereUniqueInput
  }

  export type AssessmentAnswerCreateNestedManyWithoutOptionInput = {
    create?: XOR<AssessmentAnswerCreateWithoutOptionInput, AssessmentAnswerUncheckedCreateWithoutOptionInput> | AssessmentAnswerCreateWithoutOptionInput[] | AssessmentAnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutOptionInput | AssessmentAnswerCreateOrConnectWithoutOptionInput[]
    createMany?: AssessmentAnswerCreateManyOptionInputEnvelope
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
  }

  export type AssessmentAnswerUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<AssessmentAnswerCreateWithoutOptionInput, AssessmentAnswerUncheckedCreateWithoutOptionInput> | AssessmentAnswerCreateWithoutOptionInput[] | AssessmentAnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutOptionInput | AssessmentAnswerCreateOrConnectWithoutOptionInput[]
    createMany?: AssessmentAnswerCreateManyOptionInputEnvelope
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
  }

  export type QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuizQuestionUpsertWithoutOptionsInput
    connect?: QuizQuestionWhereUniqueInput
    update?: XOR<XOR<QuizQuestionUpdateToOneWithWhereWithoutOptionsInput, QuizQuestionUpdateWithoutOptionsInput>, QuizQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type AssessmentAnswerUpdateManyWithoutOptionNestedInput = {
    create?: XOR<AssessmentAnswerCreateWithoutOptionInput, AssessmentAnswerUncheckedCreateWithoutOptionInput> | AssessmentAnswerCreateWithoutOptionInput[] | AssessmentAnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutOptionInput | AssessmentAnswerCreateOrConnectWithoutOptionInput[]
    upsert?: AssessmentAnswerUpsertWithWhereUniqueWithoutOptionInput | AssessmentAnswerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: AssessmentAnswerCreateManyOptionInputEnvelope
    set?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    disconnect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    delete?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    update?: AssessmentAnswerUpdateWithWhereUniqueWithoutOptionInput | AssessmentAnswerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: AssessmentAnswerUpdateManyWithWhereWithoutOptionInput | AssessmentAnswerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: AssessmentAnswerScalarWhereInput | AssessmentAnswerScalarWhereInput[]
  }

  export type AssessmentAnswerUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<AssessmentAnswerCreateWithoutOptionInput, AssessmentAnswerUncheckedCreateWithoutOptionInput> | AssessmentAnswerCreateWithoutOptionInput[] | AssessmentAnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutOptionInput | AssessmentAnswerCreateOrConnectWithoutOptionInput[]
    upsert?: AssessmentAnswerUpsertWithWhereUniqueWithoutOptionInput | AssessmentAnswerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: AssessmentAnswerCreateManyOptionInputEnvelope
    set?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    disconnect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    delete?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    update?: AssessmentAnswerUpdateWithWhereUniqueWithoutOptionInput | AssessmentAnswerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: AssessmentAnswerUpdateManyWithWhereWithoutOptionInput | AssessmentAnswerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: AssessmentAnswerScalarWhereInput | AssessmentAnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssessmentAttemptsInput = {
    create?: XOR<UserCreateWithoutAssessmentAttemptsInput, UserUncheckedCreateWithoutAssessmentAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentAttemptsInput
    connect?: UserWhereUniqueInput
  }

  export type AssessmentAnswerCreateNestedManyWithoutAttemptInput = {
    create?: XOR<AssessmentAnswerCreateWithoutAttemptInput, AssessmentAnswerUncheckedCreateWithoutAttemptInput> | AssessmentAnswerCreateWithoutAttemptInput[] | AssessmentAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutAttemptInput | AssessmentAnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: AssessmentAnswerCreateManyAttemptInputEnvelope
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
  }

  export type AssessmentAnswerUncheckedCreateNestedManyWithoutAttemptInput = {
    create?: XOR<AssessmentAnswerCreateWithoutAttemptInput, AssessmentAnswerUncheckedCreateWithoutAttemptInput> | AssessmentAnswerCreateWithoutAttemptInput[] | AssessmentAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutAttemptInput | AssessmentAnswerCreateOrConnectWithoutAttemptInput[]
    createMany?: AssessmentAnswerCreateManyAttemptInputEnvelope
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAssessmentAttemptsNestedInput = {
    create?: XOR<UserCreateWithoutAssessmentAttemptsInput, UserUncheckedCreateWithoutAssessmentAttemptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssessmentAttemptsInput
    upsert?: UserUpsertWithoutAssessmentAttemptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssessmentAttemptsInput, UserUpdateWithoutAssessmentAttemptsInput>, UserUncheckedUpdateWithoutAssessmentAttemptsInput>
  }

  export type AssessmentAnswerUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<AssessmentAnswerCreateWithoutAttemptInput, AssessmentAnswerUncheckedCreateWithoutAttemptInput> | AssessmentAnswerCreateWithoutAttemptInput[] | AssessmentAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutAttemptInput | AssessmentAnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: AssessmentAnswerUpsertWithWhereUniqueWithoutAttemptInput | AssessmentAnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: AssessmentAnswerCreateManyAttemptInputEnvelope
    set?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    disconnect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    delete?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    update?: AssessmentAnswerUpdateWithWhereUniqueWithoutAttemptInput | AssessmentAnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: AssessmentAnswerUpdateManyWithWhereWithoutAttemptInput | AssessmentAnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: AssessmentAnswerScalarWhereInput | AssessmentAnswerScalarWhereInput[]
  }

  export type AssessmentAnswerUncheckedUpdateManyWithoutAttemptNestedInput = {
    create?: XOR<AssessmentAnswerCreateWithoutAttemptInput, AssessmentAnswerUncheckedCreateWithoutAttemptInput> | AssessmentAnswerCreateWithoutAttemptInput[] | AssessmentAnswerUncheckedCreateWithoutAttemptInput[]
    connectOrCreate?: AssessmentAnswerCreateOrConnectWithoutAttemptInput | AssessmentAnswerCreateOrConnectWithoutAttemptInput[]
    upsert?: AssessmentAnswerUpsertWithWhereUniqueWithoutAttemptInput | AssessmentAnswerUpsertWithWhereUniqueWithoutAttemptInput[]
    createMany?: AssessmentAnswerCreateManyAttemptInputEnvelope
    set?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    disconnect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    delete?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    connect?: AssessmentAnswerWhereUniqueInput | AssessmentAnswerWhereUniqueInput[]
    update?: AssessmentAnswerUpdateWithWhereUniqueWithoutAttemptInput | AssessmentAnswerUpdateWithWhereUniqueWithoutAttemptInput[]
    updateMany?: AssessmentAnswerUpdateManyWithWhereWithoutAttemptInput | AssessmentAnswerUpdateManyWithWhereWithoutAttemptInput[]
    deleteMany?: AssessmentAnswerScalarWhereInput | AssessmentAnswerScalarWhereInput[]
  }

  export type AssessmentAttemptCreateNestedOneWithoutAnswersInput = {
    create?: XOR<AssessmentAttemptCreateWithoutAnswersInput, AssessmentAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutAnswersInput
    connect?: AssessmentAttemptWhereUniqueInput
  }

  export type QuizQuestionCreateNestedOneWithoutAssessmentAnswersInput = {
    create?: XOR<QuizQuestionCreateWithoutAssessmentAnswersInput, QuizQuestionUncheckedCreateWithoutAssessmentAnswersInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutAssessmentAnswersInput
    connect?: QuizQuestionWhereUniqueInput
  }

  export type QuizOptionCreateNestedOneWithoutAssessmentAnswersInput = {
    create?: XOR<QuizOptionCreateWithoutAssessmentAnswersInput, QuizOptionUncheckedCreateWithoutAssessmentAnswersInput>
    connectOrCreate?: QuizOptionCreateOrConnectWithoutAssessmentAnswersInput
    connect?: QuizOptionWhereUniqueInput
  }

  export type AssessmentAttemptUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<AssessmentAttemptCreateWithoutAnswersInput, AssessmentAttemptUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: AssessmentAttemptCreateOrConnectWithoutAnswersInput
    upsert?: AssessmentAttemptUpsertWithoutAnswersInput
    connect?: AssessmentAttemptWhereUniqueInput
    update?: XOR<XOR<AssessmentAttemptUpdateToOneWithWhereWithoutAnswersInput, AssessmentAttemptUpdateWithoutAnswersInput>, AssessmentAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type QuizQuestionUpdateOneRequiredWithoutAssessmentAnswersNestedInput = {
    create?: XOR<QuizQuestionCreateWithoutAssessmentAnswersInput, QuizQuestionUncheckedCreateWithoutAssessmentAnswersInput>
    connectOrCreate?: QuizQuestionCreateOrConnectWithoutAssessmentAnswersInput
    upsert?: QuizQuestionUpsertWithoutAssessmentAnswersInput
    connect?: QuizQuestionWhereUniqueInput
    update?: XOR<XOR<QuizQuestionUpdateToOneWithWhereWithoutAssessmentAnswersInput, QuizQuestionUpdateWithoutAssessmentAnswersInput>, QuizQuestionUncheckedUpdateWithoutAssessmentAnswersInput>
  }

  export type QuizOptionUpdateOneRequiredWithoutAssessmentAnswersNestedInput = {
    create?: XOR<QuizOptionCreateWithoutAssessmentAnswersInput, QuizOptionUncheckedCreateWithoutAssessmentAnswersInput>
    connectOrCreate?: QuizOptionCreateOrConnectWithoutAssessmentAnswersInput
    upsert?: QuizOptionUpsertWithoutAssessmentAnswersInput
    connect?: QuizOptionWhereUniqueInput
    update?: XOR<XOR<QuizOptionUpdateToOneWithWhereWithoutAssessmentAnswersInput, QuizOptionUpdateWithoutAssessmentAnswersInput>, QuizOptionUncheckedUpdateWithoutAssessmentAnswersInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    name?: string | null
    major?: string | null
    semester?: number | null
    gpaRange?: string | null
    interests?: ProfileCreateinterestsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    major?: string | null
    semester?: number | null
    gpaRange?: string | null
    interests?: ProfileCreateinterestsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: UserSkillUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type AssessmentAttemptCreateWithoutUserInput = {
    id?: string
    scores: JsonNullValueInput | InputJsonValue
    primary: string
    secondary?: string | null
    createdAt?: Date | string
    answers?: AssessmentAnswerCreateNestedManyWithoutAttemptInput
  }

  export type AssessmentAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    scores: JsonNullValueInput | InputJsonValue
    primary: string
    secondary?: string | null
    createdAt?: Date | string
    answers?: AssessmentAnswerUncheckedCreateNestedManyWithoutAttemptInput
  }

  export type AssessmentAttemptCreateOrConnectWithoutUserInput = {
    where: AssessmentAttemptWhereUniqueInput
    create: XOR<AssessmentAttemptCreateWithoutUserInput, AssessmentAttemptUncheckedCreateWithoutUserInput>
  }

  export type AssessmentAttemptCreateManyUserInputEnvelope = {
    data: AssessmentAttemptCreateManyUserInput | AssessmentAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoadmapCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    nodes?: RoadmapNodeCreateNestedManyWithoutRoadmapInput
  }

  export type RoadmapUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    nodes?: RoadmapNodeUncheckedCreateNestedManyWithoutRoadmapInput
  }

  export type RoadmapCreateOrConnectWithoutUserInput = {
    where: RoadmapWhereUniqueInput
    create: XOR<RoadmapCreateWithoutUserInput, RoadmapUncheckedCreateWithoutUserInput>
  }

  export type RoadmapCreateManyUserInputEnvelope = {
    data: RoadmapCreateManyUserInput | RoadmapCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCareerProgressCreateWithoutUserInput = {
    id?: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
    career: CareerCreateNestedOneWithoutUserProgressInput
  }

  export type UserCareerProgressUncheckedCreateWithoutUserInput = {
    id?: string
    careerId: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
  }

  export type UserCareerProgressCreateOrConnectWithoutUserInput = {
    where: UserCareerProgressWhereUniqueInput
    create: XOR<UserCareerProgressCreateWithoutUserInput, UserCareerProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCareerProgressCreateManyUserInputEnvelope = {
    data: UserCareerProgressCreateManyUserInput | UserCareerProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gpaRange?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: ProfileUpdateinterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gpaRange?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: ProfileUpdateinterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: UserSkillUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type AssessmentAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: AssessmentAttemptWhereUniqueInput
    update: XOR<AssessmentAttemptUpdateWithoutUserInput, AssessmentAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<AssessmentAttemptCreateWithoutUserInput, AssessmentAttemptUncheckedCreateWithoutUserInput>
  }

  export type AssessmentAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: AssessmentAttemptWhereUniqueInput
    data: XOR<AssessmentAttemptUpdateWithoutUserInput, AssessmentAttemptUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentAttemptUpdateManyWithWhereWithoutUserInput = {
    where: AssessmentAttemptScalarWhereInput
    data: XOR<AssessmentAttemptUpdateManyMutationInput, AssessmentAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type AssessmentAttemptScalarWhereInput = {
    AND?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
    OR?: AssessmentAttemptScalarWhereInput[]
    NOT?: AssessmentAttemptScalarWhereInput | AssessmentAttemptScalarWhereInput[]
    id?: StringFilter<"AssessmentAttempt"> | string
    userId?: StringFilter<"AssessmentAttempt"> | string
    scores?: JsonFilter<"AssessmentAttempt">
    primary?: StringFilter<"AssessmentAttempt"> | string
    secondary?: StringNullableFilter<"AssessmentAttempt"> | string | null
    createdAt?: DateTimeFilter<"AssessmentAttempt"> | Date | string
  }

  export type RoadmapUpsertWithWhereUniqueWithoutUserInput = {
    where: RoadmapWhereUniqueInput
    update: XOR<RoadmapUpdateWithoutUserInput, RoadmapUncheckedUpdateWithoutUserInput>
    create: XOR<RoadmapCreateWithoutUserInput, RoadmapUncheckedCreateWithoutUserInput>
  }

  export type RoadmapUpdateWithWhereUniqueWithoutUserInput = {
    where: RoadmapWhereUniqueInput
    data: XOR<RoadmapUpdateWithoutUserInput, RoadmapUncheckedUpdateWithoutUserInput>
  }

  export type RoadmapUpdateManyWithWhereWithoutUserInput = {
    where: RoadmapScalarWhereInput
    data: XOR<RoadmapUpdateManyMutationInput, RoadmapUncheckedUpdateManyWithoutUserInput>
  }

  export type RoadmapScalarWhereInput = {
    AND?: RoadmapScalarWhereInput | RoadmapScalarWhereInput[]
    OR?: RoadmapScalarWhereInput[]
    NOT?: RoadmapScalarWhereInput | RoadmapScalarWhereInput[]
    id?: StringFilter<"Roadmap"> | string
    title?: StringFilter<"Roadmap"> | string
    userId?: StringFilter<"Roadmap"> | string
    createdAt?: DateTimeFilter<"Roadmap"> | Date | string
  }

  export type UserCareerProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCareerProgressWhereUniqueInput
    update: XOR<UserCareerProgressUpdateWithoutUserInput, UserCareerProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserCareerProgressCreateWithoutUserInput, UserCareerProgressUncheckedCreateWithoutUserInput>
  }

  export type UserCareerProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCareerProgressWhereUniqueInput
    data: XOR<UserCareerProgressUpdateWithoutUserInput, UserCareerProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserCareerProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserCareerProgressScalarWhereInput
    data: XOR<UserCareerProgressUpdateManyMutationInput, UserCareerProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCareerProgressScalarWhereInput = {
    AND?: UserCareerProgressScalarWhereInput | UserCareerProgressScalarWhereInput[]
    OR?: UserCareerProgressScalarWhereInput[]
    NOT?: UserCareerProgressScalarWhereInput | UserCareerProgressScalarWhereInput[]
    id?: StringFilter<"UserCareerProgress"> | string
    userId?: StringFilter<"UserCareerProgress"> | string
    careerId?: StringFilter<"UserCareerProgress"> | string
    completedMilestones?: IntNullableListFilter<"UserCareerProgress">
    updatedAt?: DateTimeFilter<"UserCareerProgress"> | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    assessmentAttempts?: AssessmentAttemptCreateNestedManyWithoutUserInput
    roadmaps?: RoadmapCreateNestedManyWithoutUserInput
    careerProgress?: UserCareerProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    assessmentAttempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutUserInput
    roadmaps?: RoadmapUncheckedCreateNestedManyWithoutUserInput
    careerProgress?: UserCareerProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserSkillCreateWithoutProfileInput = {
    id?: string
    level: number
    skill: SkillCreateNestedOneWithoutUsersInput
  }

  export type UserSkillUncheckedCreateWithoutProfileInput = {
    id?: string
    skillId: string
    level: number
  }

  export type UserSkillCreateOrConnectWithoutProfileInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutProfileInput, UserSkillUncheckedCreateWithoutProfileInput>
  }

  export type UserSkillCreateManyProfileInputEnvelope = {
    data: UserSkillCreateManyProfileInput | UserSkillCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessmentAttempts?: AssessmentAttemptUpdateManyWithoutUserNestedInput
    roadmaps?: RoadmapUpdateManyWithoutUserNestedInput
    careerProgress?: UserCareerProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessmentAttempts?: AssessmentAttemptUncheckedUpdateManyWithoutUserNestedInput
    roadmaps?: RoadmapUncheckedUpdateManyWithoutUserNestedInput
    careerProgress?: UserCareerProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSkillUpsertWithWhereUniqueWithoutProfileInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutProfileInput, UserSkillUncheckedUpdateWithoutProfileInput>
    create: XOR<UserSkillCreateWithoutProfileInput, UserSkillUncheckedCreateWithoutProfileInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutProfileInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutProfileInput, UserSkillUncheckedUpdateWithoutProfileInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutProfileInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutProfileInput>
  }

  export type UserSkillScalarWhereInput = {
    AND?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    OR?: UserSkillScalarWhereInput[]
    NOT?: UserSkillScalarWhereInput | UserSkillScalarWhereInput[]
    id?: StringFilter<"UserSkill"> | string
    profileId?: StringFilter<"UserSkill"> | string
    skillId?: StringFilter<"UserSkill"> | string
    level?: IntFilter<"UserSkill"> | number
  }

  export type UserSkillCreateWithoutSkillInput = {
    id?: string
    level: number
    profile: ProfileCreateNestedOneWithoutSkillsInput
  }

  export type UserSkillUncheckedCreateWithoutSkillInput = {
    id?: string
    profileId: string
    level: number
  }

  export type UserSkillCreateOrConnectWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillCreateManySkillInputEnvelope = {
    data: UserSkillCreateManySkillInput | UserSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type UserSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    update: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<UserSkillCreateWithoutSkillInput, UserSkillUncheckedCreateWithoutSkillInput>
  }

  export type UserSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: UserSkillWhereUniqueInput
    data: XOR<UserSkillUpdateWithoutSkillInput, UserSkillUncheckedUpdateWithoutSkillInput>
  }

  export type UserSkillUpdateManyWithWhereWithoutSkillInput = {
    where: UserSkillScalarWhereInput
    data: XOR<UserSkillUpdateManyMutationInput, UserSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type ProfileCreateWithoutSkillsInput = {
    id?: string
    name?: string | null
    major?: string | null
    semester?: number | null
    gpaRange?: string | null
    interests?: ProfileCreateinterestsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutSkillsInput = {
    id?: string
    userId: string
    name?: string | null
    major?: string | null
    semester?: number | null
    gpaRange?: string | null
    interests?: ProfileCreateinterestsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutSkillsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
  }

  export type SkillCreateWithoutUsersInput = {
    id?: string
    name: string
    category: string
  }

  export type SkillUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    category: string
  }

  export type SkillCreateOrConnectWithoutUsersInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
  }

  export type ProfileUpsertWithoutSkillsInput = {
    update: XOR<ProfileUpdateWithoutSkillsInput, ProfileUncheckedUpdateWithoutSkillsInput>
    create: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSkillsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSkillsInput, ProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type ProfileUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gpaRange?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: ProfileUpdateinterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    gpaRange?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: ProfileUpdateinterestsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUpsertWithoutUsersInput = {
    update: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
    create: XOR<SkillCreateWithoutUsersInput, SkillUncheckedCreateWithoutUsersInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutUsersInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutUsersInput, SkillUncheckedUpdateWithoutUsersInput>
  }

  export type SkillUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type UserCareerProgressCreateWithoutCareerInput = {
    id?: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCareerProgressInput
  }

  export type UserCareerProgressUncheckedCreateWithoutCareerInput = {
    id?: string
    userId: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
  }

  export type UserCareerProgressCreateOrConnectWithoutCareerInput = {
    where: UserCareerProgressWhereUniqueInput
    create: XOR<UserCareerProgressCreateWithoutCareerInput, UserCareerProgressUncheckedCreateWithoutCareerInput>
  }

  export type UserCareerProgressCreateManyCareerInputEnvelope = {
    data: UserCareerProgressCreateManyCareerInput | UserCareerProgressCreateManyCareerInput[]
    skipDuplicates?: boolean
  }

  export type UserCareerProgressUpsertWithWhereUniqueWithoutCareerInput = {
    where: UserCareerProgressWhereUniqueInput
    update: XOR<UserCareerProgressUpdateWithoutCareerInput, UserCareerProgressUncheckedUpdateWithoutCareerInput>
    create: XOR<UserCareerProgressCreateWithoutCareerInput, UserCareerProgressUncheckedCreateWithoutCareerInput>
  }

  export type UserCareerProgressUpdateWithWhereUniqueWithoutCareerInput = {
    where: UserCareerProgressWhereUniqueInput
    data: XOR<UserCareerProgressUpdateWithoutCareerInput, UserCareerProgressUncheckedUpdateWithoutCareerInput>
  }

  export type UserCareerProgressUpdateManyWithWhereWithoutCareerInput = {
    where: UserCareerProgressScalarWhereInput
    data: XOR<UserCareerProgressUpdateManyMutationInput, UserCareerProgressUncheckedUpdateManyWithoutCareerInput>
  }

  export type UserCreateWithoutCareerProgressInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    assessmentAttempts?: AssessmentAttemptCreateNestedManyWithoutUserInput
    roadmaps?: RoadmapCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCareerProgressInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    assessmentAttempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutUserInput
    roadmaps?: RoadmapUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCareerProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCareerProgressInput, UserUncheckedCreateWithoutCareerProgressInput>
  }

  export type CareerCreateWithoutUserProgressInput = {
    id?: string
    slug: string
    title: string
    industry: string
    description: string
    icon?: string | null
    color?: string | null
    gradient?: string | null
    border?: string | null
    milestones?: CareerCreatemilestonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerUncheckedCreateWithoutUserProgressInput = {
    id?: string
    slug: string
    title: string
    industry: string
    description: string
    icon?: string | null
    color?: string | null
    gradient?: string | null
    border?: string | null
    milestones?: CareerCreatemilestonesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerCreateOrConnectWithoutUserProgressInput = {
    where: CareerWhereUniqueInput
    create: XOR<CareerCreateWithoutUserProgressInput, CareerUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutCareerProgressInput = {
    update: XOR<UserUpdateWithoutCareerProgressInput, UserUncheckedUpdateWithoutCareerProgressInput>
    create: XOR<UserCreateWithoutCareerProgressInput, UserUncheckedCreateWithoutCareerProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCareerProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCareerProgressInput, UserUncheckedUpdateWithoutCareerProgressInput>
  }

  export type UserUpdateWithoutCareerProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    assessmentAttempts?: AssessmentAttemptUpdateManyWithoutUserNestedInput
    roadmaps?: RoadmapUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCareerProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    assessmentAttempts?: AssessmentAttemptUncheckedUpdateManyWithoutUserNestedInput
    roadmaps?: RoadmapUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CareerUpsertWithoutUserProgressInput = {
    update: XOR<CareerUpdateWithoutUserProgressInput, CareerUncheckedUpdateWithoutUserProgressInput>
    create: XOR<CareerCreateWithoutUserProgressInput, CareerUncheckedCreateWithoutUserProgressInput>
    where?: CareerWhereInput
  }

  export type CareerUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: CareerWhereInput
    data: XOR<CareerUpdateWithoutUserProgressInput, CareerUncheckedUpdateWithoutUserProgressInput>
  }

  export type CareerUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    border?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: CareerUpdatemilestonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerUncheckedUpdateWithoutUserProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    industry?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    gradient?: NullableStringFieldUpdateOperationsInput | string | null
    border?: NullableStringFieldUpdateOperationsInput | string | null
    milestones?: CareerUpdatemilestonesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRoadmapsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    assessmentAttempts?: AssessmentAttemptCreateNestedManyWithoutUserInput
    careerProgress?: UserCareerProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoadmapsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    assessmentAttempts?: AssessmentAttemptUncheckedCreateNestedManyWithoutUserInput
    careerProgress?: UserCareerProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoadmapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoadmapsInput, UserUncheckedCreateWithoutRoadmapsInput>
  }

  export type RoadmapNodeCreateWithoutRoadmapInput = {
    id?: string
    title: string
    description?: string | null
    parents?: RoadmapEdgeCreateNestedManyWithoutChildInput
    children?: RoadmapEdgeCreateNestedManyWithoutParentInput
  }

  export type RoadmapNodeUncheckedCreateWithoutRoadmapInput = {
    id?: string
    title: string
    description?: string | null
    parents?: RoadmapEdgeUncheckedCreateNestedManyWithoutChildInput
    children?: RoadmapEdgeUncheckedCreateNestedManyWithoutParentInput
  }

  export type RoadmapNodeCreateOrConnectWithoutRoadmapInput = {
    where: RoadmapNodeWhereUniqueInput
    create: XOR<RoadmapNodeCreateWithoutRoadmapInput, RoadmapNodeUncheckedCreateWithoutRoadmapInput>
  }

  export type RoadmapNodeCreateManyRoadmapInputEnvelope = {
    data: RoadmapNodeCreateManyRoadmapInput | RoadmapNodeCreateManyRoadmapInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoadmapsInput = {
    update: XOR<UserUpdateWithoutRoadmapsInput, UserUncheckedUpdateWithoutRoadmapsInput>
    create: XOR<UserCreateWithoutRoadmapsInput, UserUncheckedCreateWithoutRoadmapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoadmapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoadmapsInput, UserUncheckedUpdateWithoutRoadmapsInput>
  }

  export type UserUpdateWithoutRoadmapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    assessmentAttempts?: AssessmentAttemptUpdateManyWithoutUserNestedInput
    careerProgress?: UserCareerProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoadmapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    assessmentAttempts?: AssessmentAttemptUncheckedUpdateManyWithoutUserNestedInput
    careerProgress?: UserCareerProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoadmapNodeUpsertWithWhereUniqueWithoutRoadmapInput = {
    where: RoadmapNodeWhereUniqueInput
    update: XOR<RoadmapNodeUpdateWithoutRoadmapInput, RoadmapNodeUncheckedUpdateWithoutRoadmapInput>
    create: XOR<RoadmapNodeCreateWithoutRoadmapInput, RoadmapNodeUncheckedCreateWithoutRoadmapInput>
  }

  export type RoadmapNodeUpdateWithWhereUniqueWithoutRoadmapInput = {
    where: RoadmapNodeWhereUniqueInput
    data: XOR<RoadmapNodeUpdateWithoutRoadmapInput, RoadmapNodeUncheckedUpdateWithoutRoadmapInput>
  }

  export type RoadmapNodeUpdateManyWithWhereWithoutRoadmapInput = {
    where: RoadmapNodeScalarWhereInput
    data: XOR<RoadmapNodeUpdateManyMutationInput, RoadmapNodeUncheckedUpdateManyWithoutRoadmapInput>
  }

  export type RoadmapNodeScalarWhereInput = {
    AND?: RoadmapNodeScalarWhereInput | RoadmapNodeScalarWhereInput[]
    OR?: RoadmapNodeScalarWhereInput[]
    NOT?: RoadmapNodeScalarWhereInput | RoadmapNodeScalarWhereInput[]
    id?: StringFilter<"RoadmapNode"> | string
    title?: StringFilter<"RoadmapNode"> | string
    description?: StringNullableFilter<"RoadmapNode"> | string | null
    roadmapId?: StringFilter<"RoadmapNode"> | string
  }

  export type RoadmapCreateWithoutNodesInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRoadmapsInput
  }

  export type RoadmapUncheckedCreateWithoutNodesInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
  }

  export type RoadmapCreateOrConnectWithoutNodesInput = {
    where: RoadmapWhereUniqueInput
    create: XOR<RoadmapCreateWithoutNodesInput, RoadmapUncheckedCreateWithoutNodesInput>
  }

  export type RoadmapEdgeCreateWithoutChildInput = {
    parent: RoadmapNodeCreateNestedOneWithoutChildrenInput
  }

  export type RoadmapEdgeUncheckedCreateWithoutChildInput = {
    parentId: string
  }

  export type RoadmapEdgeCreateOrConnectWithoutChildInput = {
    where: RoadmapEdgeWhereUniqueInput
    create: XOR<RoadmapEdgeCreateWithoutChildInput, RoadmapEdgeUncheckedCreateWithoutChildInput>
  }

  export type RoadmapEdgeCreateManyChildInputEnvelope = {
    data: RoadmapEdgeCreateManyChildInput | RoadmapEdgeCreateManyChildInput[]
    skipDuplicates?: boolean
  }

  export type RoadmapEdgeCreateWithoutParentInput = {
    child: RoadmapNodeCreateNestedOneWithoutParentsInput
  }

  export type RoadmapEdgeUncheckedCreateWithoutParentInput = {
    childId: string
  }

  export type RoadmapEdgeCreateOrConnectWithoutParentInput = {
    where: RoadmapEdgeWhereUniqueInput
    create: XOR<RoadmapEdgeCreateWithoutParentInput, RoadmapEdgeUncheckedCreateWithoutParentInput>
  }

  export type RoadmapEdgeCreateManyParentInputEnvelope = {
    data: RoadmapEdgeCreateManyParentInput | RoadmapEdgeCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type RoadmapUpsertWithoutNodesInput = {
    update: XOR<RoadmapUpdateWithoutNodesInput, RoadmapUncheckedUpdateWithoutNodesInput>
    create: XOR<RoadmapCreateWithoutNodesInput, RoadmapUncheckedCreateWithoutNodesInput>
    where?: RoadmapWhereInput
  }

  export type RoadmapUpdateToOneWithWhereWithoutNodesInput = {
    where?: RoadmapWhereInput
    data: XOR<RoadmapUpdateWithoutNodesInput, RoadmapUncheckedUpdateWithoutNodesInput>
  }

  export type RoadmapUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoadmapsNestedInput
  }

  export type RoadmapUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapEdgeUpsertWithWhereUniqueWithoutChildInput = {
    where: RoadmapEdgeWhereUniqueInput
    update: XOR<RoadmapEdgeUpdateWithoutChildInput, RoadmapEdgeUncheckedUpdateWithoutChildInput>
    create: XOR<RoadmapEdgeCreateWithoutChildInput, RoadmapEdgeUncheckedCreateWithoutChildInput>
  }

  export type RoadmapEdgeUpdateWithWhereUniqueWithoutChildInput = {
    where: RoadmapEdgeWhereUniqueInput
    data: XOR<RoadmapEdgeUpdateWithoutChildInput, RoadmapEdgeUncheckedUpdateWithoutChildInput>
  }

  export type RoadmapEdgeUpdateManyWithWhereWithoutChildInput = {
    where: RoadmapEdgeScalarWhereInput
    data: XOR<RoadmapEdgeUpdateManyMutationInput, RoadmapEdgeUncheckedUpdateManyWithoutChildInput>
  }

  export type RoadmapEdgeScalarWhereInput = {
    AND?: RoadmapEdgeScalarWhereInput | RoadmapEdgeScalarWhereInput[]
    OR?: RoadmapEdgeScalarWhereInput[]
    NOT?: RoadmapEdgeScalarWhereInput | RoadmapEdgeScalarWhereInput[]
    parentId?: StringFilter<"RoadmapEdge"> | string
    childId?: StringFilter<"RoadmapEdge"> | string
  }

  export type RoadmapEdgeUpsertWithWhereUniqueWithoutParentInput = {
    where: RoadmapEdgeWhereUniqueInput
    update: XOR<RoadmapEdgeUpdateWithoutParentInput, RoadmapEdgeUncheckedUpdateWithoutParentInput>
    create: XOR<RoadmapEdgeCreateWithoutParentInput, RoadmapEdgeUncheckedCreateWithoutParentInput>
  }

  export type RoadmapEdgeUpdateWithWhereUniqueWithoutParentInput = {
    where: RoadmapEdgeWhereUniqueInput
    data: XOR<RoadmapEdgeUpdateWithoutParentInput, RoadmapEdgeUncheckedUpdateWithoutParentInput>
  }

  export type RoadmapEdgeUpdateManyWithWhereWithoutParentInput = {
    where: RoadmapEdgeScalarWhereInput
    data: XOR<RoadmapEdgeUpdateManyMutationInput, RoadmapEdgeUncheckedUpdateManyWithoutParentInput>
  }

  export type RoadmapNodeCreateWithoutChildrenInput = {
    id?: string
    title: string
    description?: string | null
    roadmap: RoadmapCreateNestedOneWithoutNodesInput
    parents?: RoadmapEdgeCreateNestedManyWithoutChildInput
  }

  export type RoadmapNodeUncheckedCreateWithoutChildrenInput = {
    id?: string
    title: string
    description?: string | null
    roadmapId: string
    parents?: RoadmapEdgeUncheckedCreateNestedManyWithoutChildInput
  }

  export type RoadmapNodeCreateOrConnectWithoutChildrenInput = {
    where: RoadmapNodeWhereUniqueInput
    create: XOR<RoadmapNodeCreateWithoutChildrenInput, RoadmapNodeUncheckedCreateWithoutChildrenInput>
  }

  export type RoadmapNodeCreateWithoutParentsInput = {
    id?: string
    title: string
    description?: string | null
    roadmap: RoadmapCreateNestedOneWithoutNodesInput
    children?: RoadmapEdgeCreateNestedManyWithoutParentInput
  }

  export type RoadmapNodeUncheckedCreateWithoutParentsInput = {
    id?: string
    title: string
    description?: string | null
    roadmapId: string
    children?: RoadmapEdgeUncheckedCreateNestedManyWithoutParentInput
  }

  export type RoadmapNodeCreateOrConnectWithoutParentsInput = {
    where: RoadmapNodeWhereUniqueInput
    create: XOR<RoadmapNodeCreateWithoutParentsInput, RoadmapNodeUncheckedCreateWithoutParentsInput>
  }

  export type RoadmapNodeUpsertWithoutChildrenInput = {
    update: XOR<RoadmapNodeUpdateWithoutChildrenInput, RoadmapNodeUncheckedUpdateWithoutChildrenInput>
    create: XOR<RoadmapNodeCreateWithoutChildrenInput, RoadmapNodeUncheckedCreateWithoutChildrenInput>
    where?: RoadmapNodeWhereInput
  }

  export type RoadmapNodeUpdateToOneWithWhereWithoutChildrenInput = {
    where?: RoadmapNodeWhereInput
    data: XOR<RoadmapNodeUpdateWithoutChildrenInput, RoadmapNodeUncheckedUpdateWithoutChildrenInput>
  }

  export type RoadmapNodeUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap?: RoadmapUpdateOneRequiredWithoutNodesNestedInput
    parents?: RoadmapEdgeUpdateManyWithoutChildNestedInput
  }

  export type RoadmapNodeUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roadmapId?: StringFieldUpdateOperationsInput | string
    parents?: RoadmapEdgeUncheckedUpdateManyWithoutChildNestedInput
  }

  export type RoadmapNodeUpsertWithoutParentsInput = {
    update: XOR<RoadmapNodeUpdateWithoutParentsInput, RoadmapNodeUncheckedUpdateWithoutParentsInput>
    create: XOR<RoadmapNodeCreateWithoutParentsInput, RoadmapNodeUncheckedCreateWithoutParentsInput>
    where?: RoadmapNodeWhereInput
  }

  export type RoadmapNodeUpdateToOneWithWhereWithoutParentsInput = {
    where?: RoadmapNodeWhereInput
    data: XOR<RoadmapNodeUpdateWithoutParentsInput, RoadmapNodeUncheckedUpdateWithoutParentsInput>
  }

  export type RoadmapNodeUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roadmap?: RoadmapUpdateOneRequiredWithoutNodesNestedInput
    children?: RoadmapEdgeUpdateManyWithoutParentNestedInput
  }

  export type RoadmapNodeUncheckedUpdateWithoutParentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roadmapId?: StringFieldUpdateOperationsInput | string
    children?: RoadmapEdgeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type QuizQuestionCreateWithoutSectionInput = {
    id?: string
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuizOptionCreateNestedManyWithoutQuestionInput
    assessmentAnswers?: AssessmentAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateWithoutSectionInput = {
    id?: string
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuizOptionUncheckedCreateNestedManyWithoutQuestionInput
    assessmentAnswers?: AssessmentAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionCreateOrConnectWithoutSectionInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutSectionInput, QuizQuestionUncheckedCreateWithoutSectionInput>
  }

  export type QuizQuestionCreateManySectionInputEnvelope = {
    data: QuizQuestionCreateManySectionInput | QuizQuestionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type QuizQuestionUpsertWithWhereUniqueWithoutSectionInput = {
    where: QuizQuestionWhereUniqueInput
    update: XOR<QuizQuestionUpdateWithoutSectionInput, QuizQuestionUncheckedUpdateWithoutSectionInput>
    create: XOR<QuizQuestionCreateWithoutSectionInput, QuizQuestionUncheckedCreateWithoutSectionInput>
  }

  export type QuizQuestionUpdateWithWhereUniqueWithoutSectionInput = {
    where: QuizQuestionWhereUniqueInput
    data: XOR<QuizQuestionUpdateWithoutSectionInput, QuizQuestionUncheckedUpdateWithoutSectionInput>
  }

  export type QuizQuestionUpdateManyWithWhereWithoutSectionInput = {
    where: QuizQuestionScalarWhereInput
    data: XOR<QuizQuestionUpdateManyMutationInput, QuizQuestionUncheckedUpdateManyWithoutSectionInput>
  }

  export type QuizQuestionScalarWhereInput = {
    AND?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
    OR?: QuizQuestionScalarWhereInput[]
    NOT?: QuizQuestionScalarWhereInput | QuizQuestionScalarWhereInput[]
    id?: StringFilter<"QuizQuestion"> | string
    sectionId?: StringNullableFilter<"QuizQuestion"> | string | null
    prompt?: StringFilter<"QuizQuestion"> | string
    helperText?: StringNullableFilter<"QuizQuestion"> | string | null
    type?: EnumQuestionTypeFilter<"QuizQuestion"> | $Enums.QuestionType
    order?: IntFilter<"QuizQuestion"> | number
    isRequired?: BoolFilter<"QuizQuestion"> | boolean
    createdAt?: DateTimeFilter<"QuizQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"QuizQuestion"> | Date | string
  }

  export type QuizSectionCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizSectionUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizSectionCreateOrConnectWithoutQuestionsInput = {
    where: QuizSectionWhereUniqueInput
    create: XOR<QuizSectionCreateWithoutQuestionsInput, QuizSectionUncheckedCreateWithoutQuestionsInput>
  }

  export type QuizOptionCreateWithoutQuestionInput = {
    id?: string
    label: string
    value?: string | null
    order?: number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    assessmentAnswers?: AssessmentAnswerCreateNestedManyWithoutOptionInput
  }

  export type QuizOptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    label: string
    value?: string | null
    order?: number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    assessmentAnswers?: AssessmentAnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type QuizOptionCreateOrConnectWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    create: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuizOptionCreateManyQuestionInputEnvelope = {
    data: QuizOptionCreateManyQuestionInput | QuizOptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentAnswerCreateWithoutQuestionInput = {
    id?: string
    attempt: AssessmentAttemptCreateNestedOneWithoutAnswersInput
    option: QuizOptionCreateNestedOneWithoutAssessmentAnswersInput
  }

  export type AssessmentAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    attemptId: string
    optionId: string
  }

  export type AssessmentAnswerCreateOrConnectWithoutQuestionInput = {
    where: AssessmentAnswerWhereUniqueInput
    create: XOR<AssessmentAnswerCreateWithoutQuestionInput, AssessmentAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AssessmentAnswerCreateManyQuestionInputEnvelope = {
    data: AssessmentAnswerCreateManyQuestionInput | AssessmentAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizSectionUpsertWithoutQuestionsInput = {
    update: XOR<QuizSectionUpdateWithoutQuestionsInput, QuizSectionUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizSectionCreateWithoutQuestionsInput, QuizSectionUncheckedCreateWithoutQuestionsInput>
    where?: QuizSectionWhereInput
  }

  export type QuizSectionUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizSectionWhereInput
    data: XOR<QuizSectionUpdateWithoutQuestionsInput, QuizSectionUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizSectionUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizSectionUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    update: XOR<QuizOptionUpdateWithoutQuestionInput, QuizOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuizOptionCreateWithoutQuestionInput, QuizOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuizOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuizOptionWhereUniqueInput
    data: XOR<QuizOptionUpdateWithoutQuestionInput, QuizOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type QuizOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: QuizOptionScalarWhereInput
    data: XOR<QuizOptionUpdateManyMutationInput, QuizOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuizOptionScalarWhereInput = {
    AND?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
    OR?: QuizOptionScalarWhereInput[]
    NOT?: QuizOptionScalarWhereInput | QuizOptionScalarWhereInput[]
    id?: StringFilter<"QuizOption"> | string
    questionId?: StringFilter<"QuizOption"> | string
    label?: StringFilter<"QuizOption"> | string
    value?: StringNullableFilter<"QuizOption"> | string | null
    order?: IntFilter<"QuizOption"> | number
    scoring?: JsonNullableFilter<"QuizOption">
    createdAt?: DateTimeFilter<"QuizOption"> | Date | string
    updatedAt?: DateTimeFilter<"QuizOption"> | Date | string
  }

  export type AssessmentAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AssessmentAnswerWhereUniqueInput
    update: XOR<AssessmentAnswerUpdateWithoutQuestionInput, AssessmentAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AssessmentAnswerCreateWithoutQuestionInput, AssessmentAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AssessmentAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AssessmentAnswerWhereUniqueInput
    data: XOR<AssessmentAnswerUpdateWithoutQuestionInput, AssessmentAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AssessmentAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AssessmentAnswerScalarWhereInput
    data: XOR<AssessmentAnswerUpdateManyMutationInput, AssessmentAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AssessmentAnswerScalarWhereInput = {
    AND?: AssessmentAnswerScalarWhereInput | AssessmentAnswerScalarWhereInput[]
    OR?: AssessmentAnswerScalarWhereInput[]
    NOT?: AssessmentAnswerScalarWhereInput | AssessmentAnswerScalarWhereInput[]
    id?: StringFilter<"AssessmentAnswer"> | string
    attemptId?: StringFilter<"AssessmentAnswer"> | string
    questionId?: StringFilter<"AssessmentAnswer"> | string
    optionId?: StringFilter<"AssessmentAnswer"> | string
  }

  export type QuizQuestionCreateWithoutOptionsInput = {
    id?: string
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: QuizSectionCreateNestedOneWithoutQuestionsInput
    assessmentAnswers?: AssessmentAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    sectionId?: string | null
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assessmentAnswers?: AssessmentAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionCreateOrConnectWithoutOptionsInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
  }

  export type AssessmentAnswerCreateWithoutOptionInput = {
    id?: string
    attempt: AssessmentAttemptCreateNestedOneWithoutAnswersInput
    question: QuizQuestionCreateNestedOneWithoutAssessmentAnswersInput
  }

  export type AssessmentAnswerUncheckedCreateWithoutOptionInput = {
    id?: string
    attemptId: string
    questionId: string
  }

  export type AssessmentAnswerCreateOrConnectWithoutOptionInput = {
    where: AssessmentAnswerWhereUniqueInput
    create: XOR<AssessmentAnswerCreateWithoutOptionInput, AssessmentAnswerUncheckedCreateWithoutOptionInput>
  }

  export type AssessmentAnswerCreateManyOptionInputEnvelope = {
    data: AssessmentAnswerCreateManyOptionInput | AssessmentAnswerCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type QuizQuestionUpsertWithoutOptionsInput = {
    update: XOR<QuizQuestionUpdateWithoutOptionsInput, QuizQuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuizQuestionCreateWithoutOptionsInput, QuizQuestionUncheckedCreateWithoutOptionsInput>
    where?: QuizQuestionWhereInput
  }

  export type QuizQuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuizQuestionWhereInput
    data: XOR<QuizQuestionUpdateWithoutOptionsInput, QuizQuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuizQuestionUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: QuizSectionUpdateOneWithoutQuestionsNestedInput
    assessmentAnswers?: AssessmentAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessmentAnswers?: AssessmentAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AssessmentAnswerUpsertWithWhereUniqueWithoutOptionInput = {
    where: AssessmentAnswerWhereUniqueInput
    update: XOR<AssessmentAnswerUpdateWithoutOptionInput, AssessmentAnswerUncheckedUpdateWithoutOptionInput>
    create: XOR<AssessmentAnswerCreateWithoutOptionInput, AssessmentAnswerUncheckedCreateWithoutOptionInput>
  }

  export type AssessmentAnswerUpdateWithWhereUniqueWithoutOptionInput = {
    where: AssessmentAnswerWhereUniqueInput
    data: XOR<AssessmentAnswerUpdateWithoutOptionInput, AssessmentAnswerUncheckedUpdateWithoutOptionInput>
  }

  export type AssessmentAnswerUpdateManyWithWhereWithoutOptionInput = {
    where: AssessmentAnswerScalarWhereInput
    data: XOR<AssessmentAnswerUpdateManyMutationInput, AssessmentAnswerUncheckedUpdateManyWithoutOptionInput>
  }

  export type UserCreateWithoutAssessmentAttemptsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    roadmaps?: RoadmapCreateNestedManyWithoutUserInput
    careerProgress?: UserCareerProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssessmentAttemptsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    roadmaps?: RoadmapUncheckedCreateNestedManyWithoutUserInput
    careerProgress?: UserCareerProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssessmentAttemptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssessmentAttemptsInput, UserUncheckedCreateWithoutAssessmentAttemptsInput>
  }

  export type AssessmentAnswerCreateWithoutAttemptInput = {
    id?: string
    question: QuizQuestionCreateNestedOneWithoutAssessmentAnswersInput
    option: QuizOptionCreateNestedOneWithoutAssessmentAnswersInput
  }

  export type AssessmentAnswerUncheckedCreateWithoutAttemptInput = {
    id?: string
    questionId: string
    optionId: string
  }

  export type AssessmentAnswerCreateOrConnectWithoutAttemptInput = {
    where: AssessmentAnswerWhereUniqueInput
    create: XOR<AssessmentAnswerCreateWithoutAttemptInput, AssessmentAnswerUncheckedCreateWithoutAttemptInput>
  }

  export type AssessmentAnswerCreateManyAttemptInputEnvelope = {
    data: AssessmentAnswerCreateManyAttemptInput | AssessmentAnswerCreateManyAttemptInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAssessmentAttemptsInput = {
    update: XOR<UserUpdateWithoutAssessmentAttemptsInput, UserUncheckedUpdateWithoutAssessmentAttemptsInput>
    create: XOR<UserCreateWithoutAssessmentAttemptsInput, UserUncheckedCreateWithoutAssessmentAttemptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssessmentAttemptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssessmentAttemptsInput, UserUncheckedUpdateWithoutAssessmentAttemptsInput>
  }

  export type UserUpdateWithoutAssessmentAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    roadmaps?: RoadmapUpdateManyWithoutUserNestedInput
    careerProgress?: UserCareerProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssessmentAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    roadmaps?: RoadmapUncheckedUpdateManyWithoutUserNestedInput
    careerProgress?: UserCareerProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssessmentAnswerUpsertWithWhereUniqueWithoutAttemptInput = {
    where: AssessmentAnswerWhereUniqueInput
    update: XOR<AssessmentAnswerUpdateWithoutAttemptInput, AssessmentAnswerUncheckedUpdateWithoutAttemptInput>
    create: XOR<AssessmentAnswerCreateWithoutAttemptInput, AssessmentAnswerUncheckedCreateWithoutAttemptInput>
  }

  export type AssessmentAnswerUpdateWithWhereUniqueWithoutAttemptInput = {
    where: AssessmentAnswerWhereUniqueInput
    data: XOR<AssessmentAnswerUpdateWithoutAttemptInput, AssessmentAnswerUncheckedUpdateWithoutAttemptInput>
  }

  export type AssessmentAnswerUpdateManyWithWhereWithoutAttemptInput = {
    where: AssessmentAnswerScalarWhereInput
    data: XOR<AssessmentAnswerUpdateManyMutationInput, AssessmentAnswerUncheckedUpdateManyWithoutAttemptInput>
  }

  export type AssessmentAttemptCreateWithoutAnswersInput = {
    id?: string
    scores: JsonNullValueInput | InputJsonValue
    primary: string
    secondary?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAssessmentAttemptsInput
  }

  export type AssessmentAttemptUncheckedCreateWithoutAnswersInput = {
    id?: string
    userId: string
    scores: JsonNullValueInput | InputJsonValue
    primary: string
    secondary?: string | null
    createdAt?: Date | string
  }

  export type AssessmentAttemptCreateOrConnectWithoutAnswersInput = {
    where: AssessmentAttemptWhereUniqueInput
    create: XOR<AssessmentAttemptCreateWithoutAnswersInput, AssessmentAttemptUncheckedCreateWithoutAnswersInput>
  }

  export type QuizQuestionCreateWithoutAssessmentAnswersInput = {
    id?: string
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    section?: QuizSectionCreateNestedOneWithoutQuestionsInput
    options?: QuizOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionUncheckedCreateWithoutAssessmentAnswersInput = {
    id?: string
    sectionId?: string | null
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuizOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuizQuestionCreateOrConnectWithoutAssessmentAnswersInput = {
    where: QuizQuestionWhereUniqueInput
    create: XOR<QuizQuestionCreateWithoutAssessmentAnswersInput, QuizQuestionUncheckedCreateWithoutAssessmentAnswersInput>
  }

  export type QuizOptionCreateWithoutAssessmentAnswersInput = {
    id?: string
    label: string
    value?: string | null
    order?: number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuizQuestionCreateNestedOneWithoutOptionsInput
  }

  export type QuizOptionUncheckedCreateWithoutAssessmentAnswersInput = {
    id?: string
    questionId: string
    label: string
    value?: string | null
    order?: number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizOptionCreateOrConnectWithoutAssessmentAnswersInput = {
    where: QuizOptionWhereUniqueInput
    create: XOR<QuizOptionCreateWithoutAssessmentAnswersInput, QuizOptionUncheckedCreateWithoutAssessmentAnswersInput>
  }

  export type AssessmentAttemptUpsertWithoutAnswersInput = {
    update: XOR<AssessmentAttemptUpdateWithoutAnswersInput, AssessmentAttemptUncheckedUpdateWithoutAnswersInput>
    create: XOR<AssessmentAttemptCreateWithoutAnswersInput, AssessmentAttemptUncheckedCreateWithoutAnswersInput>
    where?: AssessmentAttemptWhereInput
  }

  export type AssessmentAttemptUpdateToOneWithWhereWithoutAnswersInput = {
    where?: AssessmentAttemptWhereInput
    data: XOR<AssessmentAttemptUpdateWithoutAnswersInput, AssessmentAttemptUncheckedUpdateWithoutAnswersInput>
  }

  export type AssessmentAttemptUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssessmentAttemptsNestedInput
  }

  export type AssessmentAttemptUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizQuestionUpsertWithoutAssessmentAnswersInput = {
    update: XOR<QuizQuestionUpdateWithoutAssessmentAnswersInput, QuizQuestionUncheckedUpdateWithoutAssessmentAnswersInput>
    create: XOR<QuizQuestionCreateWithoutAssessmentAnswersInput, QuizQuestionUncheckedCreateWithoutAssessmentAnswersInput>
    where?: QuizQuestionWhereInput
  }

  export type QuizQuestionUpdateToOneWithWhereWithoutAssessmentAnswersInput = {
    where?: QuizQuestionWhereInput
    data: XOR<QuizQuestionUpdateWithoutAssessmentAnswersInput, QuizQuestionUncheckedUpdateWithoutAssessmentAnswersInput>
  }

  export type QuizQuestionUpdateWithoutAssessmentAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: QuizSectionUpdateOneWithoutQuestionsNestedInput
    options?: QuizOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutAssessmentAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizOptionUpsertWithoutAssessmentAnswersInput = {
    update: XOR<QuizOptionUpdateWithoutAssessmentAnswersInput, QuizOptionUncheckedUpdateWithoutAssessmentAnswersInput>
    create: XOR<QuizOptionCreateWithoutAssessmentAnswersInput, QuizOptionUncheckedCreateWithoutAssessmentAnswersInput>
    where?: QuizOptionWhereInput
  }

  export type QuizOptionUpdateToOneWithWhereWithoutAssessmentAnswersInput = {
    where?: QuizOptionWhereInput
    data: XOR<QuizOptionUpdateWithoutAssessmentAnswersInput, QuizOptionUncheckedUpdateWithoutAssessmentAnswersInput>
  }

  export type QuizOptionUpdateWithoutAssessmentAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuizQuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type QuizOptionUncheckedUpdateWithoutAssessmentAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAttemptCreateManyUserInput = {
    id?: string
    scores: JsonNullValueInput | InputJsonValue
    primary: string
    secondary?: string | null
    createdAt?: Date | string
  }

  export type RoadmapCreateManyUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
  }

  export type UserCareerProgressCreateManyUserInput = {
    id?: string
    careerId: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
  }

  export type AssessmentAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AssessmentAnswerUpdateManyWithoutAttemptNestedInput
  }

  export type AssessmentAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AssessmentAnswerUncheckedUpdateManyWithoutAttemptNestedInput
  }

  export type AssessmentAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scores?: JsonNullValueInput | InputJsonValue
    primary?: StringFieldUpdateOperationsInput | string
    secondary?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: RoadmapNodeUpdateManyWithoutRoadmapNestedInput
  }

  export type RoadmapUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: RoadmapNodeUncheckedUpdateManyWithoutRoadmapNestedInput
  }

  export type RoadmapUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    career?: CareerUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserCareerProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    careerId?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    careerId?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSkillCreateManyProfileInput = {
    id?: string
    skillId: string
    level: number
  }

  export type UserSkillUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    skill?: SkillUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserSkillUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    skillId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserSkillCreateManySkillInput = {
    id?: string
    profileId: string
    level: number
  }

  export type UserSkillUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type UserSkillUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type UserCareerProgressCreateManyCareerInput = {
    id?: string
    userId: string
    completedMilestones?: UserCareerProgressCreatecompletedMilestonesInput | number[]
    updatedAt?: Date | string
  }

  export type UserCareerProgressUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCareerProgressNestedInput
  }

  export type UserCareerProgressUncheckedUpdateWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCareerProgressUncheckedUpdateManyWithoutCareerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedMilestones?: UserCareerProgressUpdatecompletedMilestonesInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapNodeCreateManyRoadmapInput = {
    id?: string
    title: string
    description?: string | null
  }

  export type RoadmapNodeUpdateWithoutRoadmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parents?: RoadmapEdgeUpdateManyWithoutChildNestedInput
    children?: RoadmapEdgeUpdateManyWithoutParentNestedInput
  }

  export type RoadmapNodeUncheckedUpdateWithoutRoadmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parents?: RoadmapEdgeUncheckedUpdateManyWithoutChildNestedInput
    children?: RoadmapEdgeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RoadmapNodeUncheckedUpdateManyWithoutRoadmapInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoadmapEdgeCreateManyChildInput = {
    parentId: string
  }

  export type RoadmapEdgeCreateManyParentInput = {
    childId: string
  }

  export type RoadmapEdgeUpdateWithoutChildInput = {
    parent?: RoadmapNodeUpdateOneRequiredWithoutChildrenNestedInput
  }

  export type RoadmapEdgeUncheckedUpdateWithoutChildInput = {
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type RoadmapEdgeUncheckedUpdateManyWithoutChildInput = {
    parentId?: StringFieldUpdateOperationsInput | string
  }

  export type RoadmapEdgeUpdateWithoutParentInput = {
    child?: RoadmapNodeUpdateOneRequiredWithoutParentsNestedInput
  }

  export type RoadmapEdgeUncheckedUpdateWithoutParentInput = {
    childId?: StringFieldUpdateOperationsInput | string
  }

  export type RoadmapEdgeUncheckedUpdateManyWithoutParentInput = {
    childId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionCreateManySectionInput = {
    id?: string
    prompt: string
    helperText?: string | null
    type?: $Enums.QuestionType
    order?: number
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizQuestionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuizOptionUpdateManyWithoutQuestionNestedInput
    assessmentAnswers?: AssessmentAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuizOptionUncheckedUpdateManyWithoutQuestionNestedInput
    assessmentAnswers?: AssessmentAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuizQuestionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    helperText?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    order?: IntFieldUpdateOperationsInput | number
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizOptionCreateManyQuestionInput = {
    id?: string
    label: string
    value?: string | null
    order?: number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentAnswerCreateManyQuestionInput = {
    id?: string
    attemptId: string
    optionId: string
  }

  export type QuizOptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessmentAnswers?: AssessmentAnswerUpdateManyWithoutOptionNestedInput
  }

  export type QuizOptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assessmentAnswers?: AssessmentAnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type QuizOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    scoring?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: AssessmentAttemptUpdateOneRequiredWithoutAnswersNestedInput
    option?: QuizOptionUpdateOneRequiredWithoutAssessmentAnswersNestedInput
  }

  export type AssessmentAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentAnswerCreateManyOptionInput = {
    id?: string
    attemptId: string
    questionId: string
  }

  export type AssessmentAnswerUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attempt?: AssessmentAttemptUpdateOneRequiredWithoutAnswersNestedInput
    question?: QuizQuestionUpdateOneRequiredWithoutAssessmentAnswersNestedInput
  }

  export type AssessmentAnswerUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentAnswerUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    attemptId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentAnswerCreateManyAttemptInput = {
    id?: string
    questionId: string
    optionId: string
  }

  export type AssessmentAnswerUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: QuizQuestionUpdateOneRequiredWithoutAssessmentAnswersNestedInput
    option?: QuizOptionUpdateOneRequiredWithoutAssessmentAnswersNestedInput
  }

  export type AssessmentAnswerUncheckedUpdateWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }

  export type AssessmentAnswerUncheckedUpdateManyWithoutAttemptInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
  }



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
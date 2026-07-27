var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// extension/ay-pi/src/index.ts
import { execSync } from "node:child_process";

// src/input/signal.ts
function detectIntent(rawText) {
  const trimmed = rawText.trim();
  if (trimmed.startsWith("/")) {
    return trimmed.split(/\s+/)[0];
  }
  return "";
}
function detectSubcommand(rawText) {
  const tokens = rawText.trim().split(/\s+/);
  if (tokens[0]?.startsWith("/") && tokens[1]?.startsWith("/")) {
    return tokens[1];
  }
  return void 0;
}
function buildSignal(rawText, overrides = {}) {
  return {
    command: detectIntent(rawText),
    rawText,
    subcommand: detectSubcommand(rawText),
    ...overrides
  };
}

// src/policy/loader.ts
import { readFileSync } from "node:fs";

// node_modules/zod/v4/classic/external.js
var external_exports = {};
__export(external_exports, {
  $brand: () => $brand,
  $input: () => $input,
  $output: () => $output,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBase64: () => ZodBase64,
  ZodBase64URL: () => ZodBase64URL,
  ZodBigInt: () => ZodBigInt,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBoolean: () => ZodBoolean,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCUID: () => ZodCUID,
  ZodCUID2: () => ZodCUID2,
  ZodCatch: () => ZodCatch,
  ZodCodec: () => ZodCodec,
  ZodCustom: () => ZodCustom,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodE164: () => ZodE164,
  ZodEmail: () => ZodEmail,
  ZodEmoji: () => ZodEmoji,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodExactOptional: () => ZodExactOptional,
  ZodFile: () => ZodFile,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodGUID: () => ZodGUID,
  ZodIPv4: () => ZodIPv4,
  ZodIPv6: () => ZodIPv6,
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodJWT: () => ZodJWT,
  ZodKSUID: () => ZodKSUID,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMAC: () => ZodMAC,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNanoID: () => ZodNanoID,
  ZodNever: () => ZodNever,
  ZodNonOptional: () => ZodNonOptional,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodPipe: () => ZodPipe,
  ZodPrefault: () => ZodPrefault,
  ZodPreprocess: () => ZodPreprocess,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRealError: () => ZodRealError,
  ZodRecord: () => ZodRecord,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodStringFormat: () => ZodStringFormat,
  ZodSuccess: () => ZodSuccess,
  ZodSymbol: () => ZodSymbol,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodTransform: () => ZodTransform,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodULID: () => ZodULID,
  ZodURL: () => ZodURL,
  ZodUUID: () => ZodUUID,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  ZodXID: () => ZodXID,
  ZodXor: () => ZodXor,
  _ZodString: () => _ZodString,
  _default: () => _default2,
  _function: () => _function,
  any: () => any,
  array: () => array,
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => _catch2,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  clone: () => clone,
  codec: () => codec,
  coerce: () => coerce_exports,
  config: () => config,
  core: () => core_exports2,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date3,
  decode: () => decode2,
  decodeAsync: () => decodeAsync2,
  describe: () => describe2,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
  encode: () => encode2,
  encodeAsync: () => encodeAsync2,
  endsWith: () => _endsWith,
  enum: () => _enum2,
  exactOptional: () => exactOptional,
  file: () => file,
  flattenError: () => flattenError,
  float32: () => float32,
  float64: () => float64,
  formatError: () => formatError,
  fromJSONSchema: () => fromJSONSchema,
  function: () => _function,
  getErrorMap: () => getErrorMap,
  globalRegistry: () => globalRegistry,
  gt: () => _gt,
  gte: () => _gte,
  guid: () => guid2,
  hash: () => hash,
  hex: () => hex2,
  hostname: () => hostname2,
  httpUrl: () => httpUrl,
  includes: () => _includes,
  instanceof: () => _instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  invertCodec: () => invertCodec,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  iso: () => iso_exports,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => lazy,
  length: () => _length,
  literal: () => literal,
  locales: () => locales_exports,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  lowercase: () => _lowercase,
  lt: () => _lt,
  lte: () => _lte,
  mac: () => mac2,
  map: () => map,
  maxLength: () => _maxLength,
  maxSize: () => _maxSize,
  meta: () => meta2,
  mime: () => _mime,
  minLength: () => _minLength,
  minSize: () => _minSize,
  multipleOf: () => _multipleOf,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  negative: () => _negative,
  never: () => never,
  nonnegative: () => _nonnegative,
  nonoptional: () => nonoptional,
  nonpositive: () => _nonpositive,
  normalize: () => _normalize,
  null: () => _null3,
  nullable: () => nullable,
  nullish: () => nullish2,
  number: () => number2,
  object: () => object,
  optional: () => optional,
  overwrite: () => _overwrite,
  parse: () => parse2,
  parseAsync: () => parseAsync2,
  partialRecord: () => partialRecord,
  pipe: () => pipe,
  positive: () => _positive,
  prefault: () => prefault,
  preprocess: () => preprocess,
  prettifyError: () => prettifyError,
  promise: () => promise,
  property: () => _property,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  regex: () => _regex,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeDecode: () => safeDecode2,
  safeDecodeAsync: () => safeDecodeAsync2,
  safeEncode: () => safeEncode2,
  safeEncodeAsync: () => safeEncodeAsync2,
  safeParse: () => safeParse2,
  safeParseAsync: () => safeParseAsync2,
  set: () => set,
  setErrorMap: () => setErrorMap,
  size: () => _size,
  slugify: () => _slugify,
  startsWith: () => _startsWith,
  strictObject: () => strictObject,
  string: () => string2,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol,
  templateLiteral: () => templateLiteral,
  toJSONSchema: () => toJSONSchema,
  toLowerCase: () => _toLowerCase,
  toUpperCase: () => _toUpperCase,
  transform: () => transform,
  treeifyError: () => treeifyError,
  trim: () => _trim,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid2,
  undefined: () => _undefined3,
  union: () => union,
  unknown: () => unknown,
  uppercase: () => _uppercase,
  url: () => url,
  util: () => util_exports,
  uuid: () => uuid2,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  void: () => _void2,
  xid: () => xid2,
  xor: () => xor
});

// node_modules/zod/v4/core/index.js
var core_exports2 = {};
__export(core_exports2, {
  $ZodAny: () => $ZodAny,
  $ZodArray: () => $ZodArray,
  $ZodAsyncError: () => $ZodAsyncError,
  $ZodBase64: () => $ZodBase64,
  $ZodBase64URL: () => $ZodBase64URL,
  $ZodBigInt: () => $ZodBigInt,
  $ZodBigIntFormat: () => $ZodBigIntFormat,
  $ZodBoolean: () => $ZodBoolean,
  $ZodCIDRv4: () => $ZodCIDRv4,
  $ZodCIDRv6: () => $ZodCIDRv6,
  $ZodCUID: () => $ZodCUID,
  $ZodCUID2: () => $ZodCUID2,
  $ZodCatch: () => $ZodCatch,
  $ZodCheck: () => $ZodCheck,
  $ZodCheckBigIntFormat: () => $ZodCheckBigIntFormat,
  $ZodCheckEndsWith: () => $ZodCheckEndsWith,
  $ZodCheckGreaterThan: () => $ZodCheckGreaterThan,
  $ZodCheckIncludes: () => $ZodCheckIncludes,
  $ZodCheckLengthEquals: () => $ZodCheckLengthEquals,
  $ZodCheckLessThan: () => $ZodCheckLessThan,
  $ZodCheckLowerCase: () => $ZodCheckLowerCase,
  $ZodCheckMaxLength: () => $ZodCheckMaxLength,
  $ZodCheckMaxSize: () => $ZodCheckMaxSize,
  $ZodCheckMimeType: () => $ZodCheckMimeType,
  $ZodCheckMinLength: () => $ZodCheckMinLength,
  $ZodCheckMinSize: () => $ZodCheckMinSize,
  $ZodCheckMultipleOf: () => $ZodCheckMultipleOf,
  $ZodCheckNumberFormat: () => $ZodCheckNumberFormat,
  $ZodCheckOverwrite: () => $ZodCheckOverwrite,
  $ZodCheckProperty: () => $ZodCheckProperty,
  $ZodCheckRegex: () => $ZodCheckRegex,
  $ZodCheckSizeEquals: () => $ZodCheckSizeEquals,
  $ZodCheckStartsWith: () => $ZodCheckStartsWith,
  $ZodCheckStringFormat: () => $ZodCheckStringFormat,
  $ZodCheckUpperCase: () => $ZodCheckUpperCase,
  $ZodCodec: () => $ZodCodec,
  $ZodCustom: () => $ZodCustom,
  $ZodCustomStringFormat: () => $ZodCustomStringFormat,
  $ZodDate: () => $ZodDate,
  $ZodDefault: () => $ZodDefault,
  $ZodDiscriminatedUnion: () => $ZodDiscriminatedUnion,
  $ZodE164: () => $ZodE164,
  $ZodEmail: () => $ZodEmail,
  $ZodEmoji: () => $ZodEmoji,
  $ZodEncodeError: () => $ZodEncodeError,
  $ZodEnum: () => $ZodEnum,
  $ZodError: () => $ZodError,
  $ZodExactOptional: () => $ZodExactOptional,
  $ZodFile: () => $ZodFile,
  $ZodFunction: () => $ZodFunction,
  $ZodGUID: () => $ZodGUID,
  $ZodIPv4: () => $ZodIPv4,
  $ZodIPv6: () => $ZodIPv6,
  $ZodISODate: () => $ZodISODate,
  $ZodISODateTime: () => $ZodISODateTime,
  $ZodISODuration: () => $ZodISODuration,
  $ZodISOTime: () => $ZodISOTime,
  $ZodIntersection: () => $ZodIntersection,
  $ZodJWT: () => $ZodJWT,
  $ZodKSUID: () => $ZodKSUID,
  $ZodLazy: () => $ZodLazy,
  $ZodLiteral: () => $ZodLiteral,
  $ZodMAC: () => $ZodMAC,
  $ZodMap: () => $ZodMap,
  $ZodNaN: () => $ZodNaN,
  $ZodNanoID: () => $ZodNanoID,
  $ZodNever: () => $ZodNever,
  $ZodNonOptional: () => $ZodNonOptional,
  $ZodNull: () => $ZodNull,
  $ZodNullable: () => $ZodNullable,
  $ZodNumber: () => $ZodNumber,
  $ZodNumberFormat: () => $ZodNumberFormat,
  $ZodObject: () => $ZodObject,
  $ZodObjectJIT: () => $ZodObjectJIT,
  $ZodOptional: () => $ZodOptional,
  $ZodPipe: () => $ZodPipe,
  $ZodPrefault: () => $ZodPrefault,
  $ZodPreprocess: () => $ZodPreprocess,
  $ZodPromise: () => $ZodPromise,
  $ZodReadonly: () => $ZodReadonly,
  $ZodRealError: () => $ZodRealError,
  $ZodRecord: () => $ZodRecord,
  $ZodRegistry: () => $ZodRegistry,
  $ZodSet: () => $ZodSet,
  $ZodString: () => $ZodString,
  $ZodStringFormat: () => $ZodStringFormat,
  $ZodSuccess: () => $ZodSuccess,
  $ZodSymbol: () => $ZodSymbol,
  $ZodTemplateLiteral: () => $ZodTemplateLiteral,
  $ZodTransform: () => $ZodTransform,
  $ZodTuple: () => $ZodTuple,
  $ZodType: () => $ZodType,
  $ZodULID: () => $ZodULID,
  $ZodURL: () => $ZodURL,
  $ZodUUID: () => $ZodUUID,
  $ZodUndefined: () => $ZodUndefined,
  $ZodUnion: () => $ZodUnion,
  $ZodUnknown: () => $ZodUnknown,
  $ZodVoid: () => $ZodVoid,
  $ZodXID: () => $ZodXID,
  $ZodXor: () => $ZodXor,
  $brand: () => $brand,
  $constructor: () => $constructor,
  $input: () => $input,
  $output: () => $output,
  Doc: () => Doc,
  JSONSchema: () => json_schema_exports,
  JSONSchemaGenerator: () => JSONSchemaGenerator,
  NEVER: () => NEVER,
  TimePrecision: () => TimePrecision,
  _any: () => _any,
  _array: () => _array,
  _base64: () => _base64,
  _base64url: () => _base64url,
  _bigint: () => _bigint,
  _boolean: () => _boolean,
  _catch: () => _catch,
  _check: () => _check,
  _cidrv4: () => _cidrv4,
  _cidrv6: () => _cidrv6,
  _coercedBigint: () => _coercedBigint,
  _coercedBoolean: () => _coercedBoolean,
  _coercedDate: () => _coercedDate,
  _coercedNumber: () => _coercedNumber,
  _coercedString: () => _coercedString,
  _cuid: () => _cuid,
  _cuid2: () => _cuid2,
  _custom: () => _custom,
  _date: () => _date,
  _decode: () => _decode,
  _decodeAsync: () => _decodeAsync,
  _default: () => _default,
  _discriminatedUnion: () => _discriminatedUnion,
  _e164: () => _e164,
  _email: () => _email,
  _emoji: () => _emoji2,
  _encode: () => _encode,
  _encodeAsync: () => _encodeAsync,
  _endsWith: () => _endsWith,
  _enum: () => _enum,
  _file: () => _file,
  _float32: () => _float32,
  _float64: () => _float64,
  _gt: () => _gt,
  _gte: () => _gte,
  _guid: () => _guid,
  _includes: () => _includes,
  _int: () => _int,
  _int32: () => _int32,
  _int64: () => _int64,
  _intersection: () => _intersection,
  _ipv4: () => _ipv4,
  _ipv6: () => _ipv6,
  _isoDate: () => _isoDate,
  _isoDateTime: () => _isoDateTime,
  _isoDuration: () => _isoDuration,
  _isoTime: () => _isoTime,
  _jwt: () => _jwt,
  _ksuid: () => _ksuid,
  _lazy: () => _lazy,
  _length: () => _length,
  _literal: () => _literal,
  _lowercase: () => _lowercase,
  _lt: () => _lt,
  _lte: () => _lte,
  _mac: () => _mac,
  _map: () => _map,
  _max: () => _lte,
  _maxLength: () => _maxLength,
  _maxSize: () => _maxSize,
  _mime: () => _mime,
  _min: () => _gte,
  _minLength: () => _minLength,
  _minSize: () => _minSize,
  _multipleOf: () => _multipleOf,
  _nan: () => _nan,
  _nanoid: () => _nanoid,
  _nativeEnum: () => _nativeEnum,
  _negative: () => _negative,
  _never: () => _never,
  _nonnegative: () => _nonnegative,
  _nonoptional: () => _nonoptional,
  _nonpositive: () => _nonpositive,
  _normalize: () => _normalize,
  _null: () => _null2,
  _nullable: () => _nullable,
  _number: () => _number,
  _optional: () => _optional,
  _overwrite: () => _overwrite,
  _parse: () => _parse,
  _parseAsync: () => _parseAsync,
  _pipe: () => _pipe,
  _positive: () => _positive,
  _promise: () => _promise,
  _property: () => _property,
  _readonly: () => _readonly,
  _record: () => _record,
  _refine: () => _refine,
  _regex: () => _regex,
  _safeDecode: () => _safeDecode,
  _safeDecodeAsync: () => _safeDecodeAsync,
  _safeEncode: () => _safeEncode,
  _safeEncodeAsync: () => _safeEncodeAsync,
  _safeParse: () => _safeParse,
  _safeParseAsync: () => _safeParseAsync,
  _set: () => _set,
  _size: () => _size,
  _slugify: () => _slugify,
  _startsWith: () => _startsWith,
  _string: () => _string,
  _stringFormat: () => _stringFormat,
  _stringbool: () => _stringbool,
  _success: () => _success,
  _superRefine: () => _superRefine,
  _symbol: () => _symbol,
  _templateLiteral: () => _templateLiteral,
  _toLowerCase: () => _toLowerCase,
  _toUpperCase: () => _toUpperCase,
  _transform: () => _transform,
  _trim: () => _trim,
  _tuple: () => _tuple,
  _uint32: () => _uint32,
  _uint64: () => _uint64,
  _ulid: () => _ulid,
  _undefined: () => _undefined2,
  _union: () => _union,
  _unknown: () => _unknown,
  _uppercase: () => _uppercase,
  _url: () => _url,
  _uuid: () => _uuid,
  _uuidv4: () => _uuidv4,
  _uuidv6: () => _uuidv6,
  _uuidv7: () => _uuidv7,
  _void: () => _void,
  _xid: () => _xid,
  _xor: () => _xor,
  clone: () => clone,
  config: () => config,
  createStandardJSONSchemaMethod: () => createStandardJSONSchemaMethod,
  createToJSONSchemaMethod: () => createToJSONSchemaMethod,
  decode: () => decode,
  decodeAsync: () => decodeAsync,
  describe: () => describe,
  encode: () => encode,
  encodeAsync: () => encodeAsync,
  extractDefs: () => extractDefs,
  finalize: () => finalize,
  flattenError: () => flattenError,
  formatError: () => formatError,
  globalConfig: () => globalConfig,
  globalRegistry: () => globalRegistry,
  initializeContext: () => initializeContext,
  isValidBase64: () => isValidBase64,
  isValidBase64URL: () => isValidBase64URL,
  isValidJWT: () => isValidJWT,
  locales: () => locales_exports,
  meta: () => meta,
  parse: () => parse,
  parseAsync: () => parseAsync,
  prettifyError: () => prettifyError,
  process: () => process2,
  regexes: () => regexes_exports,
  registry: () => registry,
  safeDecode: () => safeDecode,
  safeDecodeAsync: () => safeDecodeAsync,
  safeEncode: () => safeEncode,
  safeEncodeAsync: () => safeEncodeAsync,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  toDotPath: () => toDotPath,
  toJSONSchema: () => toJSONSchema,
  treeifyError: () => treeifyError,
  util: () => util_exports,
  version: () => version
});

// node_modules/zod/v4/core/core.js
var _a;
var NEVER = /* @__PURE__ */ Object.freeze({
  status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer3(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a3;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $brand = /* @__PURE__ */ Symbol("zod_brand");
var $ZodAsyncError = class extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
};
var $ZodEncodeError = class extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
};
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}

// node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  explicitlyAborted: () => explicitlyAborted,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set2 = false;
  return {
    get value() {
      if (!set2) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === void 0;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const ratio = val / step;
  const roundedRatio = Math.round(ratio);
  const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
  if (Math.abs(ratio - roundedRatio) < tolerance)
    return 0;
  return ratio - roundedRatio;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object2, key, getter) {
  let value = void 0;
  Object.defineProperty(object2, key, {
    get() {
      if (value === EVALUATING) {
        return void 0;
      }
      if (value === void 0) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object2, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path2) {
  if (!path2)
    return obj;
  return path2.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__ */ cached(() => {
  if (globalConfig.jitless) {
    return false;
  }
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  if (o instanceof Map)
    return new Map(o);
  if (o instanceof Set)
    return new Set(o);
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};
var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key in shape) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function merge(a, b) {
  if (a._zod.def.checks?.length) {
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  }
  const def = mergeDefs(a._zod.def, {
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class2, schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in oldShape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key in oldShape) {
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class2, schema, mask) {
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key in oldShape) {
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema, def);
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path2, issues) {
  return issues.map((iss) => {
    var _a3;
    (_a3 = iss).path ?? (_a3.path = []);
    iss.path.unshift(path2);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
  const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
  rest.path ?? (rest.path = []);
  rest.message = message;
  if (ctx?.reportInput) {
    rest.input = _input;
  }
  return rest;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base643) {
  const binaryString = atob(base643);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0; i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url3) {
  const base643 = base64url3.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base643.length % 4) % 4);
  return base64ToUint8Array(base643 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex3) {
  const cleanHex = hex3.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0; i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var Class = class {
  constructor(..._args) {
  }
};

// node_modules/zod/v4/core/errors.js
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
function flattenError(error51, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error51.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error51, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error52, path2 = []) => {
    for (const issue2 of error52.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, [...path2, ...issue2.path]));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, [...path2, ...issue2.path]);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, [...path2, ...issue2.path]);
      } else {
        const fullpath = [...path2, ...issue2.path];
        if (fullpath.length === 0) {
          fieldErrors._errors.push(mapper(issue2));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < fullpath.length) {
            const el = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue2));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    }
  };
  processError(error51);
  return fieldErrors;
}
function treeifyError(error51, mapper = (issue2) => issue2.message) {
  const result = { errors: [] };
  const processError = (error52, path2 = []) => {
    var _a3, _b;
    for (const issue2 of error52.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, [...path2, ...issue2.path]));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, [...path2, ...issue2.path]);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, [...path2, ...issue2.path]);
      } else {
        const fullpath = [...path2, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result;
        let i = 0;
        while (i < fullpath.length) {
          const el = fullpath[i];
          const terminal = i === fullpath.length - 1;
          if (typeof el === "string") {
            curr.properties ?? (curr.properties = {});
            (_a3 = curr.properties)[el] ?? (_a3[el] = { errors: [] });
            curr = curr.properties[el];
          } else {
            curr.items ?? (curr.items = []);
            (_b = curr.items)[el] ?? (_b[el] = { errors: [] });
            curr = curr.items[el];
          }
          if (terminal) {
            curr.errors.push(mapper(issue2));
          }
          i++;
        }
      }
    }
  };
  processError(error51);
  return result;
}
function toDotPath(_path) {
  const segs = [];
  const path2 = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
  for (const seg of path2) {
    if (typeof seg === "number")
      segs.push(`[${seg}]`);
    else if (typeof seg === "symbol")
      segs.push(`[${JSON.stringify(String(seg))}]`);
    else if (/[^\w$]/.test(seg))
      segs.push(`[${JSON.stringify(seg)}]`);
    else {
      if (segs.length)
        segs.push(".");
      segs.push(seg);
    }
  }
  return segs.join("");
}
function prettifyError(error51) {
  const lines = [];
  const issues = [...error51.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
  for (const issue2 of issues) {
    lines.push(`\u2716 ${issue2.message}`);
    if (issue2.path?.length)
      lines.push(`  \u2192 at ${toDotPath(issue2.path)}`);
  }
  return lines.join("\n");
}

// node_modules/zod/v4/core/parse.js
var _parse = (_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value;
};
var parse = /* @__PURE__ */ _parse($ZodRealError);
var _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
    captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value;
};
var parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _parse(_Err)(schema, value, ctx);
};
var encode = /* @__PURE__ */ _encode($ZodRealError);
var _decode = (_Err) => (schema, value, _ctx) => {
  return _parse(_Err)(schema, value, _ctx);
};
var decode = /* @__PURE__ */ _decode($ZodRealError);
var _encodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _parseAsync(_Err)(schema, value, ctx);
};
var encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError);
var _decodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _parseAsync(_Err)(schema, value, _ctx);
};
var decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError);
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError);
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError);
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);

// node_modules/zod/v4/core/regexes.js
var regexes_exports = {};
__export(regexes_exports, {
  base64: () => base64,
  base64url: () => base64url,
  bigint: () => bigint,
  boolean: () => boolean,
  browserEmail: () => browserEmail,
  cidrv4: () => cidrv4,
  cidrv6: () => cidrv6,
  cuid: () => cuid,
  cuid2: () => cuid2,
  date: () => date,
  datetime: () => datetime,
  domain: () => domain,
  duration: () => duration,
  e164: () => e164,
  email: () => email,
  emoji: () => emoji,
  extendedDuration: () => extendedDuration,
  guid: () => guid,
  hex: () => hex,
  hostname: () => hostname,
  html5Email: () => html5Email,
  httpProtocol: () => httpProtocol,
  idnEmail: () => idnEmail,
  integer: () => integer,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  ksuid: () => ksuid,
  lowercase: () => lowercase,
  mac: () => mac,
  md5_base64: () => md5_base64,
  md5_base64url: () => md5_base64url,
  md5_hex: () => md5_hex,
  nanoid: () => nanoid,
  null: () => _null,
  number: () => number,
  rfc5322Email: () => rfc5322Email,
  sha1_base64: () => sha1_base64,
  sha1_base64url: () => sha1_base64url,
  sha1_hex: () => sha1_hex,
  sha256_base64: () => sha256_base64,
  sha256_base64url: () => sha256_base64url,
  sha256_hex: () => sha256_hex,
  sha384_base64: () => sha384_base64,
  sha384_base64url: () => sha384_base64url,
  sha384_hex: () => sha384_hex,
  sha512_base64: () => sha512_base64,
  sha512_base64url: () => sha512_base64url,
  sha512_hex: () => sha512_hex,
  string: () => string,
  time: () => time,
  ulid: () => ulid,
  undefined: () => _undefined,
  unicodeEmail: () => unicodeEmail,
  uppercase: () => uppercase,
  uuid: () => uuid,
  uuid4: () => uuid4,
  uuid6: () => uuid6,
  uuid7: () => uuid7,
  xid: () => xid
});
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version2) => {
  if (!version2)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var uuid4 = /* @__PURE__ */ uuid(4);
var uuid6 = /* @__PURE__ */ uuid(6);
var uuid7 = /* @__PURE__ */ uuid(7);
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
var idnEmail = unicodeEmail;
var browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var mac = (delimiter) => {
  const escapedDelim = escapeRegex(delimiter ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
var domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const time3 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const timeRegex = `${time3}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string = (params) => {
  const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex}$`);
};
var bigint = /^-?\d+n?$/;
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;
var _null = /^null$/i;
var _undefined = /^undefined$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;
var hex = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
  return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
  return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var md5_hex = /^[0-9a-fA-F]{32}$/;
var md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
var md5_base64url = /* @__PURE__ */ fixedBase64url(22);
var sha1_hex = /^[0-9a-fA-F]{40}$/;
var sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
var sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
var sha256_hex = /^[0-9a-fA-F]{64}$/;
var sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
var sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
var sha384_hex = /^[0-9a-fA-F]{96}$/;
var sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
var sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
var sha512_hex = /^[0-9a-fA-F]{128}$/;
var sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
var sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

// node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a3;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a3 = inst._zod).onattach ?? (_a3.onattach = []);
});
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a3;
    (_a3 = inst2._zod.bag).multipleOf ?? (_a3.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (input < minimum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "bigint",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size <= def.maximum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size >= def.minimum)
      return;
    payload.issues.push({
      origin: getSizableOrigin(input),
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.size !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.size;
    bag.maximum = def.size;
    bag.size = def.size;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const size = input.size;
    if (size === def.size)
      return;
    const tooBig = size > def.size;
    payload.issues.push({
      origin: getSizableOrigin(input),
      ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def);
  (_a3 = inst._zod.def).when ?? (_a3.when = (payload) => {
    const val = payload.value;
    return !nullish(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a3, _b;
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a3 = inst._zod).check ?? (_a3.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {
    });
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
var $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    const result = def.schema._zod.run({
      value: payload.value[def.property],
      issues: []
    }, {});
    if (result instanceof Promise) {
      return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
    }
    handleCheckPropertyResult(result, payload, def.property);
    return;
  };
});
var $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
  $ZodCheck.init(inst, def);
  const mimeSet = new Set(def.mime);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.mime = def.mime;
  });
  inst._zod.check = (payload) => {
    if (mimeSet.has(payload.value.type))
      return;
    payload.issues.push({
      code: "invalid_value",
      values: def.mime,
      input: payload.value.type,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/zod/v4/core/doc.js
var Doc = class {
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [``];
    const lines = [...content.map((x) => `  ${x}`)];
    return new F(...args, lines.join("\n"));
  }
};

// node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 4,
  patch: 3
};

// node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a3;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          if (explicitlyAborted(payload))
            continue;
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  defineLazy(inst, "~standard", () => ({
    validate: (value) => {
      try {
        const r = safeParse(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch (_) {
        return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
});
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      if (!def.normalize && def.protocol?.source === httpProtocol.source) {
        if (!/^https?:\/\//i.test(trimmed)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid URL format",
            input: payload.value,
            inst,
            continue: !def.abort
          });
          return;
        }
      }
      const url2 = new URL(trimmed);
      if (def.hostname) {
        def.hostname.lastIndex = 0;
        if (!def.hostname.test(url2.hostname)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: def.hostname.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.protocol) {
        def.protocol.lastIndex = 0;
        if (!def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: def.protocol.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.normalize) {
        payload.value = url2.href;
      } else {
        payload.value = trimmed;
      }
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  def.pattern ?? (def.pattern = nanoid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv4`;
});
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv6`;
  inst._zod.check = (payload) => {
    try {
      new URL(`http://[${payload.value}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
  def.pattern ?? (def.pattern = mac(def.delimiter));
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `mac`;
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    const parts = payload.value.split("/");
    try {
      if (parts.length !== 2)
        throw new Error();
      const [address, prefix] = parts;
      if (!prefix)
        throw new Error();
      const prefixNum = Number(prefix);
      if (`${prefixNum}` !== prefix)
        throw new Error();
      if (prefixNum < 0 || prefixNum > 128)
        throw new Error();
      new URL(`http://[${address}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64";
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base643 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base643.padEnd(Math.ceil(base643.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64url";
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (def.fn(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = bigint;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = BigInt(payload.value);
      } catch (_) {
      }
    if (typeof payload.value === "bigint")
      return payload;
    payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
  $ZodCheckBigIntFormat.init(inst, def);
  $ZodBigInt.init(inst, def);
});
var $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "symbol")
      return payload;
    payload.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _undefined;
  inst._zod.values = /* @__PURE__ */ new Set([void 0]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _null;
  inst._zod.values = /* @__PURE__ */ new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (typeof input === "undefined")
      return payload;
    payload.issues.push({
      expected: "void",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce) {
      try {
        payload.value = new Date(payload.value);
      } catch (_err) {
      }
    }
    const input = payload.value;
    const isDate = input instanceof Date;
    const isValidDate = isDate && !Number.isNaN(input.getTime());
    if (isValidDate)
      return payload;
    payload.issues.push({
      expected: "date",
      code: "invalid_type",
      input,
      ...isDate ? { received: "Invalid Date" } : {},
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
  const isPresent = key in input;
  if (result.issues.length) {
    if (isOptionalIn && isOptionalOut && !isPresent) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && !isOptionalIn) {
    if (!result.issues.length) {
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [key]
      });
    }
    return;
  }
  if (result.value === void 0) {
    if (isPresent) {
      final.value[key] = void 0;
    }
  } else {
    final.value[key] = result.value;
  }
}
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k of keys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const isOptionalIn = _catchall.optin === "optional";
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (key === "__proto__")
      continue;
    if (keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut)));
    } else {
      handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!desc?.get) {
    const sh = def.shape;
    Object.defineProperty(def, "shape", {
      get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", {
          value: newSh
        });
        return newSh;
      }
    });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazy(inst._zod, "propValues", () => {
    const shape = def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
        for (const v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = {};
    const proms = [];
    const shape = value.shape;
    for (const key of value.keys) {
      const el = shape[key];
      const isOptionalIn = el._zod.optin === "optional";
      const isOptionalOut = el._zod.optout === "optional";
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut)));
      } else {
        handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const generateFastpass = (shape) => {
    const doc = new Doc(["shape", "payload", "ctx"]);
    const normalized = _normalized.value;
    const parseStr = (key) => {
      const k = esc(key);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.keys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(`const newResult = {};`);
    for (const key of normalized.keys) {
      const id = ids[key];
      const k = esc(key);
      const schema = shape[key];
      const isOptionalIn = schema?._zod?.optin === "optional";
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(key)};`);
      if (isOptionalIn && isOptionalOut) {
        doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      } else if (!isOptionalIn) {
        doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    const fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazy(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      const patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return void 0;
  });
  const first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
  const successes = results.filter((r) => r.issues.length === 0);
  if (successes.length === 1) {
    final.value = successes[0].value;
    return final;
  }
  if (successes.length === 0) {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
  } else {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: [],
      inclusive: false
    });
  }
  return final;
}
var $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
  $ZodUnion.init(inst, def);
  def.inclusive = false;
  const first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        results.push(result);
      }
    }
    if (!async)
      return handleExclusiveUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleExclusiveUnionResults(results2, payload, inst, ctx);
    });
  };
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = false;
  $ZodUnion.init(inst, def);
  const _super = inst._zod.parse;
  defineLazy(inst._zod, "propValues", () => {
    const propValues = {};
    for (const option of def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
      for (const [k, v] of Object.entries(pv)) {
        if (!propValues[k])
          propValues[k] = /* @__PURE__ */ new Set();
        for (const val of v) {
          propValues[k].add(val);
        }
      }
    }
    return propValues;
  });
  const disc = cached(() => {
    const opts = def.options;
    const map2 = /* @__PURE__ */ new Map();
    for (const o of opts) {
      const values = o._zod.propValues?.[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
      for (const v of values) {
        if (map2.has(v)) {
          throw new Error(`Duplicate discriminator value "${String(v)}"`);
        }
        map2.set(v, o);
      }
    }
    return map2;
  });
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const opt = disc.value.get(input?.[def.discriminator]);
    if (opt) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback || ctx.direction === "backward") {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      options: Array.from(disc.value.keys()),
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
  $ZodType.init(inst, def);
  const items = def.items;
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        input,
        inst,
        expected: "tuple",
        code: "invalid_type"
      });
      return payload;
    }
    payload.value = [];
    const proms = [];
    const optinStart = getTupleOptStart(items, "optin");
    const optoutStart = getTupleOptStart(items, "optout");
    if (!def.rest) {
      if (input.length < optinStart) {
        payload.issues.push({
          code: "too_small",
          minimum: optinStart,
          inclusive: true,
          input,
          inst,
          origin: "array"
        });
        return payload;
      }
      if (input.length > items.length) {
        payload.issues.push({
          code: "too_big",
          maximum: items.length,
          inclusive: true,
          input,
          inst,
          origin: "array"
        });
      }
    }
    const itemResults = new Array(items.length);
    for (let i = 0; i < items.length; i++) {
      const r = items[i]._zod.run({ value: input[i], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((rr) => {
          itemResults[i] = rr;
        }));
      } else {
        itemResults[i] = r;
      }
    }
    if (def.rest) {
      let i = items.length - 1;
      const rest = input.slice(items.length);
      for (const el of rest) {
        i++;
        const result = def.rest._zod.run({ value: el, issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((r) => handleTupleResult(r, payload, i)));
        } else {
          handleTupleResult(result, payload, i);
        }
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => handleTupleResults(itemResults, payload, items, input, optoutStart));
    }
    return handleTupleResults(itemResults, payload, items, input, optoutStart);
  };
});
function getTupleOptStart(items, key) {
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i]._zod[key] !== "optional")
      return i + 1;
  }
  return 0;
}
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
function handleTupleResults(itemResults, final, items, input, optoutStart) {
  for (let i = 0; i < items.length; i++) {
    const r = itemResults[i];
    const isPresent = i < input.length;
    if (r.issues.length) {
      if (!isPresent && i >= optoutStart) {
        final.value.length = i;
        break;
      }
      final.issues.push(...prefixIssues(i, r.issues));
    }
    final.value[i] = r.value;
  }
  for (let i = final.value.length - 1; i >= input.length; i--) {
    if (items[i]._zod.optout === "optional" && final.value[i] === void 0) {
      final.value.length = i;
    } else {
      break;
    }
  }
  return final;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    const values = def.keyType._zod.values;
    if (values) {
      payload.value = {};
      const recordKeys = /* @__PURE__ */ new Set();
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          recordKeys.add(typeof key === "number" ? key.toString() : key);
          const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          if (keyResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (keyResult.issues.length) {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
            continue;
          }
          const outKey = keyResult.value;
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[outKey] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[outKey] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!recordKeys.has(key)) {
          unrecognized = unrecognized ?? [];
          unrecognized.push(key);
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized
        });
      }
    } else {
      payload.value = {};
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(input, key))
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
        if (checkNumericKey) {
          const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (retryResult.issues.length === 0) {
            keyResult = retryResult;
          }
        }
        if (keyResult.issues.length) {
          if (def.mode === "loose") {
            payload.value[key] = input[key];
          } else {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
          }
          continue;
        }
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues(key, result2.issues));
            }
            payload.value[keyResult.value] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues(key, result.issues));
          }
          payload.value[keyResult.value] = result.value;
        }
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Map)) {
      payload.issues.push({
        expected: "map",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    payload.value = /* @__PURE__ */ new Map();
    for (const [key, value] of input) {
      const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
      const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
      if (keyResult instanceof Promise || valueResult instanceof Promise) {
        proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
          handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
        }));
      } else {
        handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
      }
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, keyResult.issues));
    } else {
      final.issues.push({
        code: "invalid_key",
        origin: "map",
        input,
        inst,
        issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  if (valueResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, valueResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  final.value.set(keyResult.value, valueResult.value);
}
var $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!(input instanceof Set)) {
      payload.issues.push({
        input,
        inst,
        expected: "set",
        code: "invalid_type"
      });
      return payload;
    }
    const proms = [];
    payload.value = /* @__PURE__ */ new Set();
    for (const item of input) {
      const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleSetResult(result2, payload)));
      } else
        handleSetResult(result, payload);
    }
    if (proms.length)
      return Promise.all(proms).then(() => payload);
    return payload;
  };
});
function handleSetResult(result, final) {
  if (result.issues.length) {
    final.issues.push(...result.issues);
  }
  final.value.add(result.value);
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  if (def.values.length === 0) {
    throw new Error("Cannot create literal schema with no valid values");
  }
  const values = new Set(def.values);
  inst._zod.values = values;
  inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input instanceof File)
      return payload;
    payload.issues.push({
      expected: "file",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        payload.fallback = true;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError();
    }
    payload.value = _out;
    payload.fallback = true;
    return payload;
  };
});
function handleOptionalResult(result, input) {
  if (input === void 0 && (result.issues.length || result.fallback)) {
    return { issues: [], value: void 0 };
  }
  return result;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
  });
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      const input = payload.value;
      const result = def.innerType._zod.run(payload, ctx);
      if (result instanceof Promise)
        return result.then((r) => handleOptionalResult(r, input));
      return handleOptionalResult(result, input);
    }
    if (payload.value === void 0) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  });
  defineLazy(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
var $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError("ZodSuccess");
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.issues.length === 0;
        return payload;
      });
    }
    payload.value = result.issues.length === 0;
    return payload;
  };
});
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.value;
        if (result2.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
          payload.fallback = true;
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
        },
        input: payload.value
      });
      payload.issues = [];
      payload.fallback = true;
    }
    return payload;
  };
});
var $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "nan",
        code: "invalid_type"
      });
      return payload;
    }
    return payload;
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues, fallback: left.fallback }, ctx);
}
var $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "values", () => def.in._zod.values);
  defineLazy(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy(inst._zod, "optout", () => def.out._zod.optout);
  defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    const direction = ctx.direction || "forward";
    if (direction === "forward") {
      const left = def.in._zod.run(payload, ctx);
      if (left instanceof Promise) {
        return left.then((left2) => handleCodecAResult(left2, def, ctx));
      }
      return handleCodecAResult(left, def, ctx);
    } else {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handleCodecAResult(right2, def, ctx));
      }
      return handleCodecAResult(right, def, ctx);
    }
  };
});
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length) {
    result.aborted = true;
    return result;
  }
  const direction = ctx.direction || "forward";
  if (direction === "forward") {
    const transformed = def.transform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
    }
    return handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    const transformed = def.reverseTransform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
    }
    return handleCodecTxResult(result, transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
var $ZodPreprocess = /* @__PURE__ */ $constructor("$ZodPreprocess", (inst, def) => {
  $ZodPipe.init(inst, def);
});
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
  defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const regexParts = [];
  for (const part of def.parts) {
    if (typeof part === "object" && part !== null) {
      if (!part._zod.pattern) {
        throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
      }
      const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
      if (!source)
        throw new Error(`Invalid template literal part: ${part._zod.traits}`);
      const start = source.startsWith("^") ? 1 : 0;
      const end = source.endsWith("$") ? source.length - 1 : source.length;
      regexParts.push(source.slice(start, end));
    } else if (part === null || primitiveTypes.has(typeof part)) {
      regexParts.push(escapeRegex(`${part}`));
    } else {
      throw new Error(`Invalid template literal part: ${part}`);
    }
  }
  inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "string") {
      payload.issues.push({
        input: payload.value,
        inst,
        expected: "string",
        code: "invalid_type"
      });
      return payload;
    }
    inst._zod.pattern.lastIndex = 0;
    if (!inst._zod.pattern.test(payload.value)) {
      payload.issues.push({
        input: payload.value,
        inst,
        code: "invalid_format",
        format: def.format ?? "template_literal",
        pattern: inst._zod.pattern.source
      });
      return payload;
    }
    return payload;
  };
});
var $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
  $ZodType.init(inst, def);
  inst._def = def;
  inst._zod.def = def;
  inst.implement = (func) => {
    if (typeof func !== "function") {
      throw new Error("implement() must be called with a function");
    }
    return function(...args) {
      const parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
      const result = Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return parse(inst._def.output, result);
      }
      return result;
    };
  };
  inst.implementAsync = (func) => {
    if (typeof func !== "function") {
      throw new Error("implementAsync() must be called with a function");
    }
    return async function(...args) {
      const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
      const result = await Reflect.apply(func, this, parsedArgs);
      if (inst._def.output) {
        return await parseAsync(inst._def.output, result);
      }
      return result;
    };
  };
  inst._zod.parse = (payload, _ctx) => {
    if (typeof payload.value !== "function") {
      payload.issues.push({
        code: "invalid_type",
        expected: "function",
        input: payload.value,
        inst
      });
      return payload;
    }
    const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
    if (hasPromiseOutput) {
      payload.value = inst.implementAsync(payload.value);
    } else {
      payload.value = inst.implement(payload.value);
    }
    return payload;
  };
  inst.input = (...args) => {
    const F = inst.constructor;
    if (Array.isArray(args[0])) {
      return new F({
        type: "function",
        input: new $ZodTuple({
          type: "tuple",
          items: args[0],
          rest: args[1]
        }),
        output: inst._def.output
      });
    }
    return new F({
      type: "function",
      input: args[0],
      output: inst._def.output
    });
  };
  inst.output = (output) => {
    const F = inst.constructor;
    return new F({
      type: "function",
      input: inst._def.input,
      output
    });
  };
  return inst;
});
var $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
  };
});
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "innerType", () => {
    const d = def;
    if (!d._cachedInner)
      d._cachedInner = def.getter();
    return d._cachedInner;
  });
  defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
  defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
  defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0);
  defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}

// node_modules/zod/v4/locales/index.js
var locales_exports = {};
__export(locales_exports, {
  ar: () => ar_default,
  az: () => az_default,
  be: () => be_default,
  bg: () => bg_default,
  ca: () => ca_default,
  cs: () => cs_default,
  da: () => da_default,
  de: () => de_default,
  el: () => el_default,
  en: () => en_default,
  eo: () => eo_default,
  es: () => es_default,
  fa: () => fa_default,
  fi: () => fi_default,
  fr: () => fr_default,
  frCA: () => fr_CA_default,
  he: () => he_default,
  hr: () => hr_default,
  hu: () => hu_default,
  hy: () => hy_default,
  id: () => id_default,
  is: () => is_default,
  it: () => it_default,
  ja: () => ja_default,
  ka: () => ka_default,
  kh: () => kh_default,
  km: () => km_default,
  ko: () => ko_default,
  lt: () => lt_default,
  mk: () => mk_default,
  ms: () => ms_default,
  nl: () => nl_default,
  no: () => no_default,
  ota: () => ota_default,
  pl: () => pl_default,
  ps: () => ps_default,
  pt: () => pt_default,
  ro: () => ro_default,
  ru: () => ru_default,
  sl: () => sl_default,
  sv: () => sv_default,
  ta: () => ta_default,
  th: () => th_default,
  tr: () => tr_default,
  ua: () => ua_default,
  uk: () => uk_default,
  ur: () => ur_default,
  uz: () => uz_default,
  vi: () => vi_default,
  yo: () => yo_default,
  zhCN: () => zh_CN_default,
  zhTW: () => zh_TW_default
});

// node_modules/zod/v4/locales/ar.js
var error = () => {
  const Sizable = {
    string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
    set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0645\u062F\u062E\u0644",
    email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    url: "\u0631\u0627\u0628\u0637",
    emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
    ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
    ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
    cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
    cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
    base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
    base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
    json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
    e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
    jwt: "JWT",
    template_literal: "\u0645\u062F\u062E\u0644"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${issue2.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
        }
        return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"}`;
        return `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${issue2.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
      }
      case "not_multiple_of":
        return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u0645\u0639\u0631\u0641${issue2.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${issue2.keys.length > 1 ? "\u0629" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
      case "invalid_key":
        return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
      case "invalid_union":
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
      case "invalid_element":
        return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
      default:
        return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
    }
  };
};
function ar_default() {
  return {
    localeError: error()
  };
}

// node_modules/zod/v4/locales/az.js
var error2 = () => {
  const Sizable = {
    string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "element", verb: "olmal\u0131d\u0131r" },
    set: { unit: "element", verb: "olmal\u0131d\u0131r" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${issue2.expected}, daxil olan ${received}`;
        }
        return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${expected}, daxil olan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${stringifyPrimitive(issue2.values[0])}`;
        return `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`;
        if (_issue.format === "ends_with")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.suffix}" il\u0259 bitm\u0259lidir`;
        if (_issue.format === "includes")
          return `Yanl\u0131\u015F m\u0259tn: "${_issue.includes}" daxil olmal\u0131d\u0131r`;
        if (_issue.format === "regex")
          return `Yanl\u0131\u015F m\u0259tn: ${_issue.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`;
        return `Yanl\u0131\u015F ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Yanl\u0131\u015F \u0259d\u0259d: ${issue2.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan a\xE7ar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
      case "invalid_union":
        return "Yanl\u0131\u015F d\u0259y\u0259r";
      case "invalid_element":
        return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      default:
        return `Yanl\u0131\u015F d\u0259y\u0259r`;
    }
  };
};
function az_default() {
  return {
    localeError: error2()
  };
}

// node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error3 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0441\u0456\u043C\u0432\u0430\u043B",
        few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
        many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u044B",
        many: "\u0431\u0430\u0439\u0442\u0430\u045E"
      },
      verb: "\u043C\u0435\u0446\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0443\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0430\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0447\u0430\u0441",
    duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
    cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
    base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
    json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
    e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0443\u0432\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u043B\u0456\u043A",
    array: "\u043C\u0430\u0441\u0456\u045E"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${issue2.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
        }
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${issue2.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
      case "invalid_element":
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${issue2.origin}`;
      default:
        return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434`;
    }
  };
};
function be_default() {
  return {
    localeError: error3()
  };
}

// node_modules/zod/v4/locales/bg.js
var error4 = () => {
  const Sizable = {
    string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
    set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0445\u043E\u0434",
    email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
    json_string: "JSON \u043D\u0438\u0437",
    e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
        }
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`;
        return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${_issue.pattern}`;
        let invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
        if (_issue.format === "emoji")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "datetime")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "date")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
        if (_issue.format === "time")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
        if (_issue.format === "duration")
          invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
        return `${invalid_adj} ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${issue2.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434`;
    }
  };
};
function bg_default() {
  return {
    localeError: error4()
  };
}

// node_modules/zod/v4/locales/ca.js
var error5 = () => {
  const Sizable = {
    string: { unit: "car\xE0cters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "adre\xE7a electr\xF2nica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adre\xE7a IPv4",
    ipv6: "adre\xE7a IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipus inv\xE0lid: s'esperava instanceof ${issue2.expected}, s'ha rebut ${received}`;
        }
        return `Tipus inv\xE0lid: s'esperava ${expected}, s'ha rebut ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Valor inv\xE0lid: s'esperava ${stringifyPrimitive(issue2.values[0])}`;
        return `Opci\xF3 inv\xE0lida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "com a m\xE0xim" : "menys de";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingu\xE9s ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "com a m\xEDnim" : "m\xE9s de";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Massa petit: s'esperava que ${issue2.origin} contingu\xE9s ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Format inv\xE0lid: ha de comen\xE7ar amb "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Format inv\xE0lid: ha d'acabar amb "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Format inv\xE0lid: ha d'incloure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${_issue.pattern}`;
        return `Format inv\xE0lid per a ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Clau inv\xE0lida a ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE0lida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element inv\xE0lid a ${issue2.origin}`;
      default:
        return `Entrada inv\xE0lida`;
    }
  };
};
function ca_default() {
  return {
    localeError: error5()
  };
}

// node_modules/zod/v4/locales/cs.js
var error6 = () => {
  const Sizable = {
    string: { unit: "znak\u016F", verb: "m\xEDt" },
    file: { unit: "bajt\u016F", verb: "m\xEDt" },
    array: { unit: "prvk\u016F", verb: "m\xEDt" },
    set: { unit: "prvk\u016F", verb: "m\xEDt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regul\xE1rn\xED v\xFDraz",
    email: "e-mailov\xE1 adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a \u010Das ve form\xE1tu ISO",
    date: "datum ve form\xE1tu ISO",
    time: "\u010Das ve form\xE1tu ISO",
    duration: "doba trv\xE1n\xED ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
    base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
    json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
    e164: "\u010D\xEDslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u010D\xEDslo",
    string: "\u0159et\u011Bzec",
    function: "funkce",
    array: "pole"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${issue2.expected}, obdr\u017Eeno ${received}`;
        }
        return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${expected}, obdr\u017Eeno ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${stringifyPrimitive(issue2.values[0])}`;
        return `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
        }
        return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
        }
        return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${_issue.pattern}`;
        return `Neplatn\xFD form\xE1t ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nezn\xE1m\xE9 kl\xED\u010De: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neplatn\xFD kl\xED\u010D v ${issue2.origin}`;
      case "invalid_union":
        return "Neplatn\xFD vstup";
      case "invalid_element":
        return `Neplatn\xE1 hodnota v ${issue2.origin}`;
      default:
        return `Neplatn\xFD vstup`;
    }
  };
};
function cs_default() {
  return {
    localeError: error6()
  };
}

// node_modules/zod/v4/locales/da.js
var error7 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkesl\xE6t",
    date: "ISO-dato",
    time: "ISO-klokkesl\xE6t",
    duration: "ISO-varighed",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "s\xE6t",
    file: "fil"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldigt input: forventede instanceof ${issue2.expected}, fik ${received}`;
        }
        return `Ugyldigt input: forventede ${expected}, fik ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig v\xE6rdi: forventede ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldigt valg: forventede en af f\xF8lgende ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lille: forventede ${origin} havde ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: skal matche m\xF8nsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal v\xE6re deleligt med ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8gle i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig v\xE6rdi i ${issue2.origin}`;
      default:
        return `Ugyldigt input`;
    }
  };
};
function da_default() {
  return {
    localeError: error7()
  };
}

// node_modules/zod/v4/locales/de.js
var error8 = () => {
  const Sizable = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ung\xFCltige Eingabe: erwartet instanceof ${issue2.expected}, erhalten ${received}`;
        }
        return `Ung\xFCltige Eingabe: erwartet ${expected}, erhalten ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ung\xFCltige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ung\xFCltige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
        return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat`;
        }
        return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ung\xFCltiger String: muss mit "${_issue.prefix}" beginnen`;
        if (_issue.format === "ends_with")
          return `Ung\xFCltiger String: muss mit "${_issue.suffix}" enden`;
        if (_issue.format === "includes")
          return `Ung\xFCltiger String: muss "${_issue.includes}" enthalten`;
        if (_issue.format === "regex")
          return `Ung\xFCltiger String: muss dem Muster ${_issue.pattern} entsprechen`;
        return `Ung\xFCltig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ung\xFCltige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ung\xFCltiger Schl\xFCssel in ${issue2.origin}`;
      case "invalid_union":
        return "Ung\xFCltige Eingabe";
      case "invalid_element":
        return `Ung\xFCltiger Wert in ${issue2.origin}`;
      default:
        return `Ung\xFCltige Eingabe`;
    }
  };
};
function de_default() {
  return {
    localeError: error8()
  };
}

// node_modules/zod/v4/locales/el.js
var error9 = () => {
  const Sizable = {
    string: { unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
    file: { unit: "bytes", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
    array: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
    set: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
    map: { unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
    email: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1",
    date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
    time: "ISO \u03CE\u03C1\u03B1",
    duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1",
    ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4",
    ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6",
    mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC",
    cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4",
    cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6",
    base64: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64",
    base64url: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url",
    json_string: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON",
    e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164",
    jwt: "JWT",
    template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (typeof issue2.expected === "string" && /^[A-Z]/.test(issue2.expected)) {
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${issue2.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${received}`;
        }
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${stringifyPrimitive(issue2.values[0])}`;
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}`;
        return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${_issue.pattern}`;
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${issue2.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${issue2.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${issue2.origin}`;
      case "invalid_union":
        return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
      case "invalid_element":
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${issue2.origin}`;
      default:
        return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2`;
    }
  };
};
function el_default() {
  return {
    localeError: error9()
  };
}

// node_modules/zod/v4/locales/en.js
var error10 = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        if (issue2.options && Array.isArray(issue2.options) && issue2.options.length > 0) {
          const opts = issue2.options.map((o) => `'${o}'`).join(" | ");
          return `Invalid discriminator value. Expected ${opts}`;
        }
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default() {
  return {
    localeError: error10()
  };
}

// node_modules/zod/v4/locales/eo.js
var error11 = () => {
  const Sizable = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emo\u011Dio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-da\u016Dro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nevalida enigo: atendi\u011Dis instanceof ${issue2.expected}, ricevi\u011Dis ${received}`;
        }
        return `Nevalida enigo: atendi\u011Dis ${expected}, ricevi\u011Dis ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nevalida enigo: atendi\u011Dis ${stringifyPrimitive(issue2.values[0])}`;
        return `Nevalida opcio: atendi\u011Dis unu el ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
        return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nevalida karaktraro: devas komenci\u011Di per "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nevalida karaktraro: devas fini\u011Di per "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
        return `Nevalida ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${issue2.keys.length > 1 ? "j" : ""} \u015Dlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida \u015Dlosilo en ${issue2.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${issue2.origin}`;
      default:
        return `Nevalida enigo`;
    }
  };
};
function eo_default() {
  return {
    localeError: error11()
  };
}

// node_modules/zod/v4/locales/es.js
var error12 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entrada",
    email: "direcci\xF3n de correo electr\xF3nico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duraci\xF3n ISO",
    ipv4: "direcci\xF3n IPv4",
    ipv6: "direcci\xF3n IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "texto",
    number: "n\xFAmero",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "n\xFAmero grande",
    symbol: "s\xEDmbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "funci\xF3n",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeraci\xF3n",
    union: "uni\xF3n",
    literal: "literal",
    promise: "promesa",
    void: "vac\xEDo",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entrada inv\xE1lida: se esperaba instanceof ${issue2.expected}, recibido ${received}`;
        }
        return `Entrada inv\xE1lida: se esperaba ${expected}, recibido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inv\xE1lida: se esperaba ${stringifyPrimitive(issue2.values[0])}`;
        return `Opci\xF3n inv\xE1lida: se esperaba una de ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `Demasiado peque\xF1o: se esperaba que ${origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Demasiado peque\xF1o: se esperaba que ${origin} fuera ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cadena inv\xE1lida: debe comenzar con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cadena inv\xE1lida: debe terminar en "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cadena inv\xE1lida: debe incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${_issue.pattern}`;
        return `Inv\xE1lido ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Llave inv\xE1lida en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      default:
        return `Entrada inv\xE1lida`;
    }
  };
};
function es_default() {
  return {
    localeError: error12()
  };
}

// node_modules/zod/v4/locales/fa.js
var error13 = () => {
  const Sizable = {
    string: { unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
    set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0648\u0631\u0648\u062F\u06CC",
    email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
    url: "URL",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
    time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
    ipv4: "IPv4 \u0622\u062F\u0631\u0633",
    ipv6: "IPv6 \u0622\u062F\u0631\u0633",
    cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
    cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
    base64: "base64-encoded \u0631\u0634\u062A\u0647",
    base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
    json_string: "JSON \u0631\u0634\u062A\u0647",
    e164: "E.164 \u0639\u062F\u062F",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u06CC"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0639\u062F\u062F",
    array: "\u0622\u0631\u0627\u06CC\u0647"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${issue2.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
        }
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${stringifyPrimitive(issue2.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`;
        }
        return `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${joinValues(issue2.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`;
        }
        return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0628\u0627\u0634\u062F`;
        }
        return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0628\u0627\u0634\u062F`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`;
        }
        if (_issue.format === "ends_with") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`;
        }
        if (_issue.format === "includes") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${_issue.includes}" \u0628\u0627\u0634\u062F`;
        }
        if (_issue.format === "regex") {
          return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${_issue.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      }
      case "not_multiple_of":
        return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${issue2.divisor} \u0628\u0627\u0634\u062F`;
      case "unrecognized_keys":
        return `\u06A9\u0644\u06CC\u062F${issue2.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${issue2.origin}`;
      case "invalid_union":
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
      case "invalid_element":
        return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${issue2.origin}`;
      default:
        return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
    }
  };
};
function fa_default() {
  return {
    localeError: error13()
  };
}

// node_modules/zod/v4/locales/fi.js
var error14 = () => {
  const Sizable = {
    string: { unit: "merkki\xE4", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "s\xE4\xE4nn\xF6llinen lauseke",
    email: "s\xE4hk\xF6postiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Virheellinen tyyppi: odotettiin instanceof ${issue2.expected}, oli ${received}`;
        }
        return `Virheellinen tyyppi: odotettiin ${expected}, oli ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Virheellinen sy\xF6te: t\xE4ytyy olla ${stringifyPrimitive(issue2.values[0])}`;
        return `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian suuri: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian suuri: arvon t\xE4ytyy olla ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Liian pieni: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim();
        }
        return `Liian pieni: arvon t\xE4ytyy olla ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Virheellinen sy\xF6te: t\xE4ytyy loppua "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${_issue.includes}"`;
        if (_issue.format === "regex") {
          return `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${_issue.pattern}`;
        }
        return `Virheellinen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: t\xE4ytyy olla luvun ${issue2.divisor} monikerta`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return `Virheellinen sy\xF6te`;
    }
  };
};
function fi_default() {
  return {
    localeError: error14()
  };
}

// node_modules/zod/v4/locales/fr.js
var error15 = () => {
  const Sizable = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entr\xE9e",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  const TypeDictionary = {
    string: "cha\xEEne",
    number: "nombre",
    int: "entier",
    boolean: "bool\xE9en",
    bigint: "grand entier",
    symbol: "symbole",
    undefined: "ind\xE9fini",
    null: "null",
    never: "jamais",
    void: "vide",
    date: "date",
    array: "tableau",
    object: "objet",
    tuple: "tuple",
    record: "enregistrement",
    map: "carte",
    set: "ensemble",
    file: "fichier",
    nonoptional: "non-optionnel",
    nan: "NaN",
    function: "fonction"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entr\xE9e invalide : instanceof ${issue2.expected} attendu, ${received} re\xE7u`;
        }
        return `Entr\xE9e invalide : ${expected} attendu, ${received} re\xE7u`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entr\xE9e invalide : ${stringifyPrimitive(issue2.values[0])} attendu`;
        return `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : ${TypeDictionary[issue2.origin] ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xE9l\xE9ment(s)"}`;
        return `Trop grand : ${TypeDictionary[issue2.origin] ?? "valeur"} doit \xEAtre ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop petit : ${TypeDictionary[issue2.origin] ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `Trop petit : ${TypeDictionary[issue2.origin] ?? "valeur"} doit \xEAtre ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cha\xEEne invalide : doit correspondre au mod\xE8le ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entr\xE9e invalide`;
    }
  };
};
function fr_default() {
  return {
    localeError: error15()
  };
}

// node_modules/zod/v4/locales/fr-CA.js
var error16 = () => {
  const Sizable = {
    string: { unit: "caract\xE8res", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "\xE9l\xE9ments", verb: "avoir" },
    set: { unit: "\xE9l\xE9ments", verb: "avoir" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "entr\xE9e",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "dur\xE9e ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "cha\xEEne encod\xE9e en base64",
    base64url: "cha\xEEne encod\xE9e en base64url",
    json_string: "cha\xEEne JSON",
    e164: "num\xE9ro E.164",
    jwt: "JWT",
    template_literal: "entr\xE9e"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Entr\xE9e invalide : attendu instanceof ${issue2.expected}, re\xE7u ${received}`;
        }
        return `Entr\xE9e invalide : attendu ${expected}, re\xE7u ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entr\xE9e invalide : attendu ${stringifyPrimitive(issue2.values[0])}`;
        return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u2264" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u2265" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Cha\xEEne invalide : doit correspondre au motif ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cl\xE9 invalide dans ${issue2.origin}`;
      case "invalid_union":
        return "Entr\xE9e invalide";
      case "invalid_element":
        return `Valeur invalide dans ${issue2.origin}`;
      default:
        return `Entr\xE9e invalide`;
    }
  };
};
function fr_CA_default() {
  return {
    localeError: error16()
  };
}

// node_modules/zod/v4/locales/he.js
var error17 = () => {
  const TypeNames = {
    string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
    number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
    boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
    array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
    object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" },
    null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" },
    undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" },
    symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" },
    function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" },
    map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
    set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
    file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" },
    value: { label: "\u05E2\u05E8\u05DA", gender: "m" }
  };
  const Sizable = {
    string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" },
    file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
    number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }
    // no unit
  };
  const typeEntry = (t) => t ? TypeNames[t] : void 0;
  const typeLabel = (t) => {
    const e = typeEntry(t);
    if (e)
      return e.label;
    return t ?? TypeNames.unknown.label;
  };
  const withDefinite = (t) => `\u05D4${typeLabel(t)}`;
  const verbFor = (t) => {
    const e = typeEntry(t);
    const gender = e?.gender ?? "m";
    return gender === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
  };
  const getSizing = (origin) => {
    if (!origin)
      return null;
    return Sizable[origin] ?? null;
  };
  const FormatDictionary = {
    regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" },
    url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" },
    emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" },
    date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
    time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
    duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" },
    ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
    ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
    cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
    cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
    base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" },
    base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" },
    json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" },
    e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
    uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expectedKey = issue2.expected;
        const expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey);
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${issue2.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
        }
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
      }
      case "invalid_value": {
        if (issue2.values.length === 1) {
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${stringifyPrimitive(issue2.values[0])}`;
        }
        const stringified = issue2.values.map((v) => stringifyPrimitive(v));
        if (issue2.values.length === 2) {
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${stringified[0]} \u05D0\u05D5 ${stringified[1]}`;
        }
        const lastValue = stringified[stringified.length - 1];
        const restValues = stringified.slice(0, -1).join(", ");
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${restValues} \u05D0\u05D5 ${lastValue}`;
      }
      case "too_big": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.maximum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${issue2.maximum}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
          const comparison = issue2.inclusive ? `${issue2.maximum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${issue2.maximum} ${sizing?.unit ?? ""}`;
          return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? "<=" : "<";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.longLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const sizing = getSizing(issue2.origin);
        const subject = withDefinite(issue2.origin ?? "value");
        if (issue2.origin === "string") {
          return `${sizing?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.minimum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
        }
        if (issue2.origin === "number") {
          const comparison = issue2.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${issue2.minimum}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
        }
        if (issue2.origin === "array" || issue2.origin === "set") {
          const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
          if (issue2.minimum === 1 && issue2.inclusive) {
            const singularPhrase = issue2.origin === "set" ? "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3" : "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${singularPhrase}`;
          }
          const comparison = issue2.inclusive ? `${issue2.minimum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${issue2.minimum} ${sizing?.unit ?? ""}`;
          return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
        }
        const adj = issue2.inclusive ? ">=" : ">";
        const be = verbFor(issue2.origin ?? "value");
        if (sizing?.unit) {
          return `${sizing.shortLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `${sizing?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${_issue.pattern}`;
        const nounEntry = FormatDictionary[_issue.format];
        const noun = nounEntry?.label ?? _issue.format;
        const gender = nounEntry?.gender ?? "m";
        const adjective = gender === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
        return `${noun} \u05DC\u05D0 ${adjective}`;
      }
      case "not_multiple_of":
        return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u05DE\u05E4\u05EA\u05D7${issue2.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${issue2.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key": {
        return `\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8`;
      }
      case "invalid_union":
        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
      case "invalid_element": {
        const place = withDefinite(issue2.origin ?? "array");
        return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${place}`;
      }
      default:
        return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
    }
  };
};
function he_default() {
  return {
    localeError: error17()
  };
}

// node_modules/zod/v4/locales/hr.js
var error18 = () => {
  const Sizable = {
    string: { unit: "znakova", verb: "imati" },
    file: { unit: "bajtova", verb: "imati" },
    array: { unit: "stavki", verb: "imati" },
    set: { unit: "stavki", verb: "imati" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "unos",
    email: "email adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum i vrijeme",
    date: "ISO datum",
    time: "ISO vrijeme",
    duration: "ISO trajanje",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "IPv4 raspon",
    cidrv6: "IPv6 raspon",
    base64: "base64 kodirani tekst",
    base64url: "base64url kodirani tekst",
    json_string: "JSON tekst",
    e164: "E.164 broj",
    jwt: "JWT",
    template_literal: "unos"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "tekst",
    number: "broj",
    boolean: "boolean",
    array: "niz",
    object: "objekt",
    set: "skup",
    file: "datoteka",
    date: "datum",
    bigint: "bigint",
    symbol: "simbol",
    undefined: "undefined",
    null: "null",
    function: "funkcija",
    map: "mapa"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neispravan unos: o\u010Dekuje se instanceof ${issue2.expected}, a primljeno je ${received}`;
        }
        return `Neispravan unos: o\u010Dekuje se ${expected}, a primljeno je ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neispravna vrijednost: o\u010Dekivano ${stringifyPrimitive(issue2.values[0])}`;
        return `Neispravna opcija: o\u010Dekivano jedno od ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing)
          return `Preveliko: o\u010Dekivano da ${origin ?? "vrijednost"} ima ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemenata"}`;
        return `Preveliko: o\u010Dekivano da ${origin ?? "vrijednost"} bude ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        if (sizing) {
          return `Premalo: o\u010Dekivano da ${origin} ima ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Premalo: o\u010Dekivano da ${origin} bude ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Neispravan tekst: mora zapo\u010Dinjati s "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Neispravan tekst: mora zavr\u0161avati s "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neispravan tekst: mora sadr\u017Eavati "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neispravan tekst: mora odgovarati uzorku ${_issue.pattern}`;
        return `Neispravna ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neispravan broj: mora biti vi\u0161ekratnik od ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznat${issue2.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neispravan klju\u010D u ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      case "invalid_union":
        return "Neispravan unos";
      case "invalid_element":
        return `Neispravna vrijednost u ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
      default:
        return `Neispravan unos`;
    }
  };
};
function hr_default() {
  return {
    localeError: error18()
  };
}

// node_modules/zod/v4/locales/hu.js
var error19 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "bemenet",
    email: "email c\xEDm",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO id\u0151b\xE9lyeg",
    date: "ISO d\xE1tum",
    time: "ISO id\u0151",
    duration: "ISO id\u0151intervallum",
    ipv4: "IPv4 c\xEDm",
    ipv6: "IPv6 c\xEDm",
    cidrv4: "IPv4 tartom\xE1ny",
    cidrv6: "IPv6 tartom\xE1ny",
    base64: "base64-k\xF3dolt string",
    base64url: "base64url-k\xF3dolt string",
    json_string: "JSON string",
    e164: "E.164 sz\xE1m",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "sz\xE1m",
    array: "t\xF6mb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${issue2.expected}, a kapott \xE9rt\xE9k ${received}`;
        }
        return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${expected}, a kapott \xE9rt\xE9k ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${stringifyPrimitive(issue2.values[0])}`;
        return `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `T\xFAl nagy: ${issue2.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}`;
        return `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${issue2.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} m\xE9rete t\xFAl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} t\xFAl kicsi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\xC9rv\xE9nytelen string: "${_issue.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`;
        if (_issue.format === "ends_with")
          return `\xC9rv\xE9nytelen string: "${_issue.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`;
        if (_issue.format === "includes")
          return `\xC9rv\xE9nytelen string: "${_issue.includes}" \xE9rt\xE9ket kell tartalmaznia`;
        if (_issue.format === "regex")
          return `\xC9rv\xE9nytelen string: ${_issue.pattern} mint\xE1nak kell megfelelnie`;
        return `\xC9rv\xE9nytelen ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\xC9rv\xE9nytelen sz\xE1m: ${issue2.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\xC9rv\xE9nytelen kulcs ${issue2.origin}`;
      case "invalid_union":
        return "\xC9rv\xE9nytelen bemenet";
      case "invalid_element":
        return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${issue2.origin}`;
      default:
        return `\xC9rv\xE9nytelen bemenet`;
    }
  };
};
function hu_default() {
  return {
    localeError: error19()
  };
}

// node_modules/zod/v4/locales/hy.js
function getArmenianPlural(count, one, many) {
  return Math.abs(count) === 1 ? one : many;
}
function withDefiniteArticle(word) {
  if (!word)
    return "";
  const vowels = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
  const lastChar = word[word.length - 1];
  return word + (vowels.includes(lastChar) ? "\u0576" : "\u0568");
}
var error20 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0576\u0577\u0561\u0576",
        many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    file: {
      unit: {
        one: "\u0562\u0561\u0575\u0569",
        many: "\u0562\u0561\u0575\u0569\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    array: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    },
    set: {
      unit: {
        one: "\u057F\u0561\u0580\u0580",
        many: "\u057F\u0561\u0580\u0580\u0565\u0580"
      },
      verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0574\u0578\u0582\u057F\u0584",
    email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
    url: "URL",
    emoji: "\u0567\u0574\u0578\u057B\u056B",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
    date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
    time: "ISO \u056A\u0561\u0574",
    duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
    ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
    ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
    cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
    cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
    base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
    base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
    json_string: "JSON \u057F\u0578\u0572",
    e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
    jwt: "JWT",
    template_literal: "\u0574\u0578\u0582\u057F\u0584"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0569\u056B\u057E",
    array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${issue2.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
        }
        return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${stringifyPrimitive(issue2.values[1])}`;
        return `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056C\u056B\u0576\u056B ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${_issue.prefix}"-\u0578\u057E`;
        if (_issue.format === "ends_with")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${_issue.suffix}"-\u0578\u057E`;
        if (_issue.format === "includes")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${_issue.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`;
        return `\u054D\u056D\u0561\u056C ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${issue2.divisor}-\u056B`;
      case "unrecognized_keys":
        return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${issue2.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
      case "invalid_union":
        return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
      case "invalid_element":
        return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
      default:
        return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574`;
    }
  };
};
function hy_default() {
  return {
    localeError: error20()
  };
}

// node_modules/zod/v4/locales/id.js
var error21 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak valid: diharapkan instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak valid: diharapkan ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak valid: harus menyertakan "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${issue2.origin}`;
      default:
        return `Input tidak valid`;
    }
  };
};
function id_default() {
  return {
    localeError: error21()
  };
}

// node_modules/zod/v4/locales/is.js
var error22 = () => {
  const Sizable = {
    string: { unit: "stafi", verb: "a\xF0 hafa" },
    file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
    array: { unit: "hluti", verb: "a\xF0 hafa" },
    set: { unit: "hluti", verb: "a\xF0 hafa" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "gildi",
    email: "netfang",
    url: "vefsl\xF3\xF0",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og t\xEDmi",
    date: "ISO dagsetning",
    time: "ISO t\xEDmi",
    duration: "ISO t\xEDmalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 t\xF6lugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\xFAmer",
    array: "fylki"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera instanceof ${issue2.expected}`;
        }
        return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Rangt gildi: gert r\xE1\xF0 fyrir ${stringifyPrimitive(issue2.values[0])}`;
        return `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} hafi ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "hluti"}`;
        return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} s\xE9 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} hafi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} s\xE9 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${_issue.pattern}`;
        return `Rangt ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\xD3\xFEekkt ${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill \xED ${issue2.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi \xED ${issue2.origin}`;
      default:
        return `Rangt gildi`;
    }
  };
};
function is_default() {
  return {
    localeError: error22()
  };
}

// node_modules/zod/v4/locales/it.js
var error23 = () => {
  const Sizable = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input non valido: atteso instanceof ${issue2.expected}, ricevuto ${received}`;
        }
        return `Input non valido: atteso ${expected}, ricevuto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}`;
        return `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}`;
        return `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Stringa non valida: deve includere "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
        return `Input non valido: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${issue2.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${issue2.origin}`;
      default:
        return `Input non valido`;
    }
  };
};
function it_default() {
  return {
    localeError: error23()
  };
}

// node_modules/zod/v4/locales/ja.js
var error24 = () => {
  const Sizable = {
    string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
    file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
    array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
    set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u5165\u529B\u5024",
    email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
    url: "URL",
    emoji: "\u7D75\u6587\u5B57",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u6642",
    date: "ISO\u65E5\u4ED8",
    time: "ISO\u6642\u523B",
    duration: "ISO\u671F\u9593",
    ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
    ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
    cidrv4: "IPv4\u7BC4\u56F2",
    cidrv6: "IPv6\u7BC4\u56F2",
    base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
    json_string: "JSON\u6587\u5B57\u5217",
    e164: "E.164\u756A\u53F7",
    jwt: "JWT",
    template_literal: "\u5165\u529B\u5024"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u6570\u5024",
    array: "\u914D\u5217"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u7121\u52B9\u306A\u5165\u529B: instanceof ${issue2.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
        }
        return `\u7121\u52B9\u306A\u5165\u529B: ${expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u7121\u52B9\u306A\u5165\u529B: ${stringifyPrimitive(issue2.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`;
        return `\u7121\u52B9\u306A\u9078\u629E: ${joinValues(issue2.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${sizing.unit ?? "\u8981\u7D20"}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${sizing.unit}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "ends_with")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "includes")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        if (_issue.format === "regex")
          return `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${_issue.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        return `\u7121\u52B9\u306A${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u52B9\u306A\u6570\u5024: ${issue2.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
      case "unrecognized_keys":
        return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${issue2.keys.length > 1 ? "\u7FA4" : ""}: ${joinValues(issue2.keys, "\u3001")}`;
      case "invalid_key":
        return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
      case "invalid_union":
        return "\u7121\u52B9\u306A\u5165\u529B";
      case "invalid_element":
        return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      default:
        return `\u7121\u52B9\u306A\u5165\u529B`;
    }
  };
};
function ja_default() {
  return {
    localeError: error24()
  };
}

// node_modules/zod/v4/locales/ka.js
var error25 = () => {
  const Sizable = {
    string: { unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    file: { unit: "\u10D1\u10D0\u10D8\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    array: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
    set: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
    email: "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    url: "URL",
    emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
    date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
    time: "\u10D3\u10E0\u10DD",
    duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
    ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
    cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
    base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
    base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
    json_string: "JSON \u10D5\u10D4\u10DA\u10D8",
    e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
    jwt: "JWT",
    template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
    string: "\u10D5\u10D4\u10DA\u10D8",
    boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
    function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
    array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${issue2.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
        }
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${joinValues(issue2.values, "|")}-\u10D3\u10D0\u10DC`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
        return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.prefix}"-\u10D8\u10D7`;
        }
        if (_issue.format === "ends_with")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.suffix}"-\u10D8\u10D7`;
        if (_issue.format === "includes")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${_issue.includes}"-\u10E1`;
        if (_issue.format === "regex")
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${_issue.pattern}`;
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${issue2.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
      case "unrecognized_keys":
        return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${issue2.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${issue2.origin}-\u10E8\u10D8`;
      case "invalid_union":
        return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
      case "invalid_element":
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${issue2.origin}-\u10E8\u10D8`;
      default:
        return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0`;
    }
  };
};
function ka_default() {
  return {
    localeError: error25()
  };
}

// node_modules/zod/v4/locales/km.js
var error26 = () => {
  const Sizable = {
    string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
    set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
    email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
    url: "URL",
    emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
    date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
    time: "\u1798\u17C9\u17C4\u1784 ISO",
    duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
    ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
    cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
    base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
    base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
    json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
    e164: "\u179B\u17C1\u1781 E.164",
    jwt: "JWT",
    template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u179B\u17C1\u1781",
    array: "\u17A2\u17B6\u179A\u17C1 (Array)",
    null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${issue2.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
        }
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${stringifyPrimitive(issue2.values[0])}`;
        return `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u1792\u17B6\u178F\u17BB"}`;
        return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${_issue.pattern}`;
        return `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
      case "invalid_union":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
      case "invalid_element":
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
      default:
        return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
    }
  };
};
function km_default() {
  return {
    localeError: error26()
  };
}

// node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}

// node_modules/zod/v4/locales/ko.js
var error27 = () => {
  const Sizable = {
    string: { unit: "\uBB38\uC790", verb: "to have" },
    file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
    array: { unit: "\uAC1C", verb: "to have" },
    set: { unit: "\uAC1C", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\uC785\uB825",
    email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
    url: "URL",
    emoji: "\uC774\uBAA8\uC9C0",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
    date: "ISO \uB0A0\uC9DC",
    time: "ISO \uC2DC\uAC04",
    duration: "ISO \uAE30\uAC04",
    ipv4: "IPv4 \uC8FC\uC18C",
    ipv6: "IPv6 \uC8FC\uC18C",
    cidrv4: "IPv4 \uBC94\uC704",
    cidrv6: "IPv6 \uBC94\uC704",
    base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
    json_string: "JSON \uBB38\uC790\uC5F4",
    e164: "E.164 \uBC88\uD638",
    jwt: "JWT",
    template_literal: "\uC785\uB825"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${issue2.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
        }
        return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${stringifyPrimitive(issue2.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`;
        return `\uC798\uBABB\uB41C \uC635\uC158: ${joinValues(issue2.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "too_big": {
        const adj = issue2.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC";
        const suffix = adj === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "\uC694\uC18C";
        if (sizing)
          return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()}${unit} ${adj}${suffix}`;
        return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()} ${adj}${suffix}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC";
        const suffix = adj === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
        const sizing = getSizing(issue2.origin);
        const unit = sizing?.unit ?? "\uC694\uC18C";
        if (sizing) {
          return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()}${unit} ${adj}${suffix}`;
        }
        return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()} ${adj}${suffix}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`;
        }
        if (_issue.format === "ends_with")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`;
        if (_issue.format === "includes")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`;
        if (_issue.format === "regex")
          return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${_issue.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`;
        return `\uC798\uBABB\uB41C ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\uC798\uBABB\uB41C \uC22B\uC790: ${issue2.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
      case "unrecognized_keys":
        return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\uC798\uBABB\uB41C \uD0A4: ${issue2.origin}`;
      case "invalid_union":
        return `\uC798\uBABB\uB41C \uC785\uB825`;
      case "invalid_element":
        return `\uC798\uBABB\uB41C \uAC12: ${issue2.origin}`;
      default:
        return `\uC798\uBABB\uB41C \uC785\uB825`;
    }
  };
};
function ko_default() {
  return {
    localeError: error27()
  };
}

// node_modules/zod/v4/locales/lt.js
var capitalizeFirstCharacter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
function getUnitTypeFromNumber(number4) {
  const abs = Math.abs(number4);
  const last = abs % 10;
  const last2 = abs % 100;
  if (last2 >= 11 && last2 <= 19 || last === 0)
    return "many";
  if (last === 1)
    return "one";
  return "few";
}
var error28 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simboli\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
          notInclusive: "turi b\u016Bti trumpesn\u0117 kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
          notInclusive: "turi b\u016Bti ilgesn\u0117 kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "bait\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi b\u016Bti ne didesnis kaip",
          notInclusive: "turi b\u016Bti ma\u017Eesnis kaip"
        },
        bigger: {
          inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
          notInclusive: "turi b\u016Bti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "element\u0105",
        few: "elementus",
        many: "element\u0173"
      },
      verb: {
        smaller: {
          inclusive: "turi tur\u0117ti ne daugiau kaip",
          notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
        },
        bigger: {
          inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
          notInclusive: "turi tur\u0117ti daugiau kaip"
        }
      }
    }
  };
  function getSizing(origin, unitType, inclusive, targetShouldBe) {
    const result = Sizable[origin] ?? null;
    if (result === null)
      return result;
    return {
      unit: result.unit[unitType],
      verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
    };
  }
  const FormatDictionary = {
    regex: "\u012Fvestis",
    email: "el. pa\u0161to adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukm\u0117",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 u\u017Ekoduota eilut\u0117",
    base64url: "base64url u\u017Ekoduota eilut\u0117",
    json_string: "JSON eilut\u0117",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "\u012Fvestis"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "skai\u010Dius",
    bigint: "sveikasis skai\u010Dius",
    string: "eilut\u0117",
    boolean: "login\u0117 reik\u0161m\u0117",
    undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulin\u0117 reik\u0161m\u0117"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Gautas tipas ${received}, o tik\u0117tasi - instanceof ${issue2.expected}`;
        }
        return `Gautas tipas ${received}, o tik\u0117tasi - ${expected}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Privalo b\u016Bti ${stringifyPrimitive(issue2.values[0])}`;
        return `Privalo b\u016Bti vienas i\u0161 ${joinValues(issue2.values, "|")} pasirinkim\u0173`;
      case "too_big": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? false, "smaller");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.maximum.toString()} ${sizing.unit ?? "element\u0173"}`;
        const adj = issue2.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.maximum.toString()} ${sizing?.unit}`;
      }
      case "too_small": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? false, "bigger");
        if (sizing?.verb)
          return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.minimum.toString()} ${sizing.unit ?? "element\u0173"}`;
        const adj = issue2.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.minimum.toString()} ${sizing?.unit}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Eilut\u0117 privalo prasid\u0117ti "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Eilut\u0117 privalo pasibaigti "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Eilut\u0117 privalo \u012Ftraukti "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Eilut\u0117 privalo atitikti ${_issue.pattern}`;
        return `Neteisingas ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Skai\u010Dius privalo b\u016Bti ${issue2.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpa\u017Eint${issue2.keys.length > 1 ? "i" : "as"} rakt${issue2.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga \u012Fvestis";
      case "invalid_element": {
        const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
        return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
      }
      default:
        return "Klaidinga \u012Fvestis";
    }
  };
};
function lt_default() {
  return {
    localeError: error28()
  };
}

// node_modules/zod/v4/locales/mk.js
var error29 = () => {
  const Sizable = {
    string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
    set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u043D\u0435\u0441",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u045F\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
    date: "ISO \u0434\u0430\u0442\u0443\u043C",
    time: "ISO \u0432\u0440\u0435\u043C\u0435",
    duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
    cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
    cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
    base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
    json_string: "JSON \u043D\u0438\u0437\u0430",
    e164: "E.164 \u0431\u0440\u043E\u0458",
    jwt: "JWT",
    template_literal: "\u0432\u043D\u0435\u0441"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0431\u0440\u043E\u0458",
    array: "\u043D\u0438\u0437\u0430"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${issue2.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
        }
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`;
        return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${issue2.origin}`;
      case "invalid_union":
        return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
      case "invalid_element":
        return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${issue2.origin}`;
      default:
        return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441`;
    }
  };
};
function mk_default() {
  return {
    localeError: error29()
  };
}

// node_modules/zod/v4/locales/ms.js
var error30 = () => {
  const Sizable = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "nombor"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Input tidak sah: dijangka instanceof ${issue2.expected}, diterima ${received}`;
        }
        return `Input tidak sah: dijangka ${expected}, diterima ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}`;
        return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
        return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${issue2.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${issue2.origin}`;
      default:
        return `Input tidak sah`;
    }
  };
};
function ms_default() {
  return {
    localeError: error30()
  };
}

// node_modules/zod/v4/locales/nl.js
var error31 = () => {
  const Sizable = {
    string: { unit: "tekens", verb: "heeft" },
    file: { unit: "bytes", verb: "heeft" },
    array: { unit: "elementen", verb: "heeft" },
    set: { unit: "elementen", verb: "heeft" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "getal"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ongeldige invoer: verwacht instanceof ${issue2.expected}, ontving ${received}`;
        }
        return `Ongeldige invoer: verwacht ${expected}, ontving ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}`;
        return `Ongeldige optie: verwacht \xE9\xE9n van ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        const longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
        if (sizing)
          return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} ${sizing.verb}`;
        return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        const shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
        if (sizing) {
          return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
        }
        if (_issue.format === "ends_with")
          return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
        if (_issue.format === "includes")
          return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
        if (_issue.format === "regex")
          return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
        return `Ongeldig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${issue2.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${issue2.origin}`;
      default:
        return `Ongeldige invoer`;
    }
  };
};
function nl_default() {
  return {
    localeError: error31()
  };
}

// node_modules/zod/v4/locales/no.js
var error32 = () => {
  const Sizable = {
    string: { unit: "tegn", verb: "\xE5 ha" },
    file: { unit: "bytes", verb: "\xE5 ha" },
    array: { unit: "elementer", verb: "\xE5 inneholde" },
    set: { unit: "elementer", verb: "\xE5 inneholde" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-omr\xE5de",
    ipv6: "IPv6-omr\xE5de",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ugyldig input: forventet instanceof ${issue2.expected}, fikk ${received}`;
        }
        return `Ugyldig input: forventet ${expected}, fikk ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}`;
        return `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
        return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ugyldig streng: m\xE5 starte med "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Ugyldig streng: m\xE5 ende med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ugyldig streng: m\xE5 inneholde "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ugyldig streng: m\xE5 matche m\xF8nsteret ${_issue.pattern}`;
        return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig n\xF8kkel i ${issue2.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${issue2.origin}`;
      default:
        return `Ugyldig input`;
    }
  };
};
function no_default() {
  return {
    localeError: error32()
  };
}

// node_modules/zod/v4/locales/ota.js
var error33 = () => {
  const Sizable = {
    string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
    file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
    array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
    set: { unit: "unsur", verb: "olmal\u0131d\u0131r" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "giren",
    email: "epostag\xE2h",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO heng\xE2m\u0131",
    date: "ISO tarihi",
    time: "ISO zaman\u0131",
    duration: "ISO m\xFCddeti",
    ipv4: "IPv4 ni\u015F\xE2n\u0131",
    ipv6: "IPv6 ni\u015F\xE2n\u0131",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-\u015Fifreli metin",
    base64url: "base64url-\u015Fifreli metin",
    json_string: "JSON metin",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "giren"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `F\xE2sit giren: umulan instanceof ${issue2.expected}, al\u0131nan ${received}`;
        }
        return `F\xE2sit giren: umulan ${expected}, al\u0131nan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `F\xE2sit giren: umulan ${stringifyPrimitive(issue2.values[0])}`;
        return `F\xE2sit tercih: m\xFBteberler ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmal\u0131yd\u0131.`;
        return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmal\u0131yd\u0131.`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmal\u0131yd\u0131.`;
        }
        return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmal\u0131yd\u0131.`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `F\xE2sit metin: "${_issue.prefix}" ile ba\u015Flamal\u0131.`;
        if (_issue.format === "ends_with")
          return `F\xE2sit metin: "${_issue.suffix}" ile bitmeli.`;
        if (_issue.format === "includes")
          return `F\xE2sit metin: "${_issue.includes}" ihtiv\xE2 etmeli.`;
        if (_issue.format === "regex")
          return `F\xE2sit metin: ${_issue.pattern} nak\u015F\u0131na uymal\u0131.`;
        return `F\xE2sit ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `F\xE2sit say\u0131: ${issue2.divisor} kat\u0131 olmal\u0131yd\u0131.`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} i\xE7in tan\u0131nmayan anahtar var.`;
      case "invalid_union":
        return "Giren tan\u0131namad\u0131.";
      case "invalid_element":
        return `${issue2.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
      default:
        return `K\u0131ymet tan\u0131namad\u0131.`;
    }
  };
};
function ota_default() {
  return {
    localeError: error33()
  };
}

// node_modules/zod/v4/locales/ps.js
var error34 = () => {
  const Sizable = {
    string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
    file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" },
    array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
    set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0648\u0631\u0648\u062F\u064A",
    email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
    date: "\u0646\u06D0\u067C\u0647",
    time: "\u0648\u062E\u062A",
    duration: "\u0645\u0648\u062F\u0647",
    ipv4: "\u062F IPv4 \u067E\u062A\u0647",
    ipv6: "\u062F IPv6 \u067E\u062A\u0647",
    cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
    cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
    base64: "base64-encoded \u0645\u062A\u0646",
    base64url: "base64url-encoded \u0645\u062A\u0646",
    json_string: "JSON \u0645\u062A\u0646",
    e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
    jwt: "JWT",
    template_literal: "\u0648\u0631\u0648\u062F\u064A"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0639\u062F\u062F",
    array: "\u0627\u0631\u06D0"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${issue2.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
        }
        return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
      }
      case "invalid_value":
        if (issue2.values.length === 1) {
          return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${stringifyPrimitive(issue2.values[0])} \u0648\u0627\u06CC`;
        }
        return `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${joinValues(issue2.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`;
        }
        return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0648\u064A`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0648\u0644\u0631\u064A`;
        }
        return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0648\u064A`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`;
        }
        if (_issue.format === "ends_with") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`;
        }
        if (_issue.format === "includes") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${_issue.includes}" \u0648\u0644\u0631\u064A`;
        }
        if (_issue.format === "regex") {
          return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${_issue.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`;
        }
        return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
      }
      case "not_multiple_of":
        return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${issue2.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
      case "unrecognized_keys":
        return `\u0646\u0627\u0633\u0645 ${issue2.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
      case "invalid_union":
        return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
      case "invalid_element":
        return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
      default:
        return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
    }
  };
};
function ps_default() {
  return {
    localeError: error34()
  };
}

// node_modules/zod/v4/locales/pl.js
var error35 = () => {
  const Sizable = {
    string: { unit: "znak\xF3w", verb: "mie\u0107" },
    file: { unit: "bajt\xF3w", verb: "mie\u0107" },
    array: { unit: "element\xF3w", verb: "mie\u0107" },
    set: { unit: "element\xF3w", verb: "mie\u0107" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "wyra\u017Cenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
    base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
    json_string: "ci\u0105g znak\xF3w w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wej\u015Bcie"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${issue2.expected}, otrzymano ${received}`;
        }
        return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${expected}, otrzymano ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}`;
        return `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element\xF3w"}`;
        }
        return `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "element\xF3w"}`;
        }
        return `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${_issue.pattern}`;
        return `Nieprawid\u0142ow(y/a/e) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawid\u0142owy klucz w ${issue2.origin}`;
      case "invalid_union":
        return "Nieprawid\u0142owe dane wej\u015Bciowe";
      case "invalid_element":
        return `Nieprawid\u0142owa warto\u015B\u0107 w ${issue2.origin}`;
      default:
        return `Nieprawid\u0142owe dane wej\u015Bciowe`;
    }
  };
};
function pl_default() {
  return {
    localeError: error35()
  };
}

// node_modules/zod/v4/locales/pt.js
var error36 = () => {
  const Sizable = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "padr\xE3o",
    email: "endere\xE7o de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "dura\xE7\xE3o ISO",
    ipv4: "endere\xE7o IPv4",
    ipv6: "endere\xE7o IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "n\xFAmero E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\xFAmero",
    null: "nulo"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Tipo inv\xE1lido: esperado instanceof ${issue2.expected}, recebido ${received}`;
        }
        return `Tipo inv\xE1lido: esperado ${expected}, recebido ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Entrada inv\xE1lida: esperado ${stringifyPrimitive(issue2.values[0])}`;
        return `Op\xE7\xE3o inv\xE1lida: esperada uma das ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Texto inv\xE1lido: deve come\xE7ar com "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Texto inv\xE1lido: deve terminar com "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Texto inv\xE1lido: deve incluir "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} inv\xE1lido`;
      }
      case "not_multiple_of":
        return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Chave inv\xE1lida em ${issue2.origin}`;
      case "invalid_union":
        return "Entrada inv\xE1lida";
      case "invalid_element":
        return `Valor inv\xE1lido em ${issue2.origin}`;
      default:
        return `Campo inv\xE1lido`;
    }
  };
};
function pt_default() {
  return {
    localeError: error36()
  };
}

// node_modules/zod/v4/locales/ro.js
var error37 = () => {
  const Sizable = {
    string: { unit: "caractere", verb: "s\u0103 aib\u0103" },
    file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" },
    array: { unit: "elemente", verb: "s\u0103 aib\u0103" },
    set: { unit: "elemente", verb: "s\u0103 aib\u0103" },
    map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "intrare",
    email: "adres\u0103 de email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "dat\u0103 \u0219i or\u0103 ISO",
    date: "dat\u0103 ISO",
    time: "or\u0103 ISO",
    duration: "durat\u0103 ISO",
    ipv4: "adres\u0103 IPv4",
    ipv6: "adres\u0103 IPv6",
    mac: "adres\u0103 MAC",
    cidrv4: "interval IPv4",
    cidrv6: "interval IPv6",
    base64: "\u0219ir codat base64",
    base64url: "\u0219ir codat base64url",
    json_string: "\u0219ir JSON",
    e164: "num\u0103r E.164",
    jwt: "JWT",
    template_literal: "intrare"
  };
  const TypeDictionary = {
    nan: "NaN",
    string: "\u0219ir",
    number: "num\u0103r",
    boolean: "boolean",
    function: "func\u021Bie",
    array: "matrice",
    object: "obiect",
    undefined: "nedefinit",
    symbol: "simbol",
    bigint: "num\u0103r mare",
    void: "void",
    never: "never",
    map: "hart\u0103",
    set: "set"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        return `Intrare invalid\u0103: a\u0219teptat ${expected}, primit ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Intrare invalid\u0103: a\u0219teptat ${stringifyPrimitive(issue2.values[0])}`;
        return `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Prea mare: a\u0219teptat ca ${issue2.origin ?? "valoarea"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemente"}`;
        return `Prea mare: a\u0219teptat ca ${issue2.origin ?? "valoarea"} s\u0103 fie ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Prea mic: a\u0219teptat ca ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Prea mic: a\u0219teptat ca ${issue2.origin} s\u0103 fie ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u0218ir invalid: trebuie s\u0103 se termine cu "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${_issue.pattern}`;
        return `Format invalid: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Chei nerecunoscute: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Cheie invalid\u0103 \xEEn ${issue2.origin}`;
      case "invalid_union":
        return "Intrare invalid\u0103";
      case "invalid_element":
        return `Valoare invalid\u0103 \xEEn ${issue2.origin}`;
      default:
        return `Intrare invalid\u0103`;
    }
  };
};
function ro_default() {
  return {
    localeError: error37()
  };
}

// node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
var error38 = () => {
  const Sizable = {
    string: {
      unit: {
        one: "\u0441\u0438\u043C\u0432\u043E\u043B",
        few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
        many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    file: {
      unit: {
        one: "\u0431\u0430\u0439\u0442",
        few: "\u0431\u0430\u0439\u0442\u0430",
        many: "\u0431\u0430\u0439\u0442"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    array: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    },
    set: {
      unit: {
        one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
        many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
      },
      verb: "\u0438\u043C\u0435\u0442\u044C"
    }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0432\u043E\u0434",
    email: "email \u0430\u0434\u0440\u0435\u0441",
    url: "URL",
    emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
    date: "ISO \u0434\u0430\u0442\u0430",
    time: "ISO \u0432\u0440\u0435\u043C\u044F",
    duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
    ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
    ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
    cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
    base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
    base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
    json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0432\u043E\u0434"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
        }
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const maxValue = Number(issue2.maximum);
          const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.maximum.toString()} ${unit}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          const minValue = Number(issue2.minimum);
          const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.minimum.toString()} ${unit}`;
        }
        return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${issue2.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0438" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
      case "invalid_element":
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435`;
    }
  };
};
function ru_default() {
  return {
    localeError: error38()
  };
}

// node_modules/zod/v4/locales/sl.js
var error39 = () => {
  const Sizable = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "vnos",
    email: "e-po\u0161tni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in \u010Das",
    date: "ISO datum",
    time: "ISO \u010Das",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 \u0161tevilka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0161tevilo",
    array: "tabela"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Neveljaven vnos: pri\u010Dakovano instanceof ${issue2.expected}, prejeto ${received}`;
        }
        return `Neveljaven vnos: pri\u010Dakovano ${expected}, prejeto ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Neveljaven vnos: pri\u010Dakovano ${stringifyPrimitive(issue2.values[0])}`;
        return `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}`;
        return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} imelo ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Premajhno: pri\u010Dakovano, da bo ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Neveljaven niz: mora se za\u010Deti z "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Neveljaven niz: mora se kon\u010Dati z "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Neveljaven niz: mora vsebovati "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Neveljaven niz: mora ustrezati vzorcu ${_issue.pattern}`;
        return `Neveljaven ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${issue2.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven klju\u010D v ${issue2.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${issue2.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function sl_default() {
  return {
    localeError: error39()
  };
}

// node_modules/zod/v4/locales/sv.js
var error40 = () => {
  const Sizable = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att inneh\xE5lla" },
    set: { unit: "objekt", verb: "att inneh\xE5lla" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "regulj\xE4rt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad str\xE4ng",
    base64url: "base64url-kodad str\xE4ng",
    json_string: "JSON-str\xE4ng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${issue2.expected}, fick ${received}`;
        }
        return `Ogiltig inmatning: f\xF6rv\xE4ntat ${expected}, fick ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ogiltig inmatning: f\xF6rv\xE4ntat ${stringifyPrimitive(issue2.values[0])}`;
        return `Ogiltigt val: f\xF6rv\xE4ntade en av ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `F\xF6r stor(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
        }
        return `F\xF6r stor(t): f\xF6rv\xE4ntat ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `F\xF6r lite(t): f\xF6rv\xE4ntade ${issue2.origin ?? "v\xE4rdet"} att ha ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Ogiltig str\xE4ng: m\xE5ste sluta med "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${_issue.pattern}"`;
        return `Ogiltig(t) ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: m\xE5ste vara en multipel av ${issue2.divisor}`;
      case "unrecognized_keys":
        return `${issue2.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${issue2.origin ?? "v\xE4rdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt v\xE4rde i ${issue2.origin ?? "v\xE4rdet"}`;
      default:
        return `Ogiltig input`;
    }
  };
};
function sv_default() {
  return {
    localeError: error40()
  };
}

// node_modules/zod/v4/locales/ta.js
var error41 = () => {
  const Sizable = {
    string: { unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    file: { unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    array: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" },
    set: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
    email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
    time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
    duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
    ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
    cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
    json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
    e164: "E.164 \u0B8E\u0BA3\u0BCD",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0B8E\u0BA3\u0BCD",
    array: "\u0B85\u0BA3\u0BBF",
    null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${issue2.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
        }
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${joinValues(issue2.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${adj}${issue2.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${issue2.origin} ${adj}${issue2.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "ends_with")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "includes")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_issue.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        if (_issue.format === "regex")
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${_issue.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${issue2.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
      case "unrecognized_keys":
        return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${issue2.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
      case "invalid_union":
        return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
      case "invalid_element":
        return `${issue2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      default:
        return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1`;
    }
  };
};
function ta_default() {
  return {
    localeError: error41()
  };
}

// node_modules/zod/v4/locales/th.js
var error42 = () => {
  const Sizable = {
    string: { unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" },
    set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
    email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
    url: "URL",
    emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
    time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
    ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
    ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
    cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
    cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
    base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
    base64url: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
    json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
    e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
    jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
    template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
    array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
    null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${issue2.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
        }
        return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${stringifyPrimitive(issue2.values[0])}`;
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19" : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`;
        return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22" : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${issue2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${adj} ${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${_issue.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`;
        if (_issue.format === "regex")
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${_issue.pattern}`;
        return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${issue2.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
      case "unrecognized_keys":
        return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
      case "invalid_union":
        return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
      case "invalid_element":
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${issue2.origin}`;
      default:
        return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07`;
    }
  };
};
function th_default() {
  return {
    localeError: error42()
  };
}

// node_modules/zod/v4/locales/tr.js
var error43 = () => {
  const Sizable = {
    string: { unit: "karakter", verb: "olmal\u0131" },
    file: { unit: "bayt", verb: "olmal\u0131" },
    array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
    set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO s\xFCre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aral\u0131\u011F\u0131",
    cidrv6: "IPv6 aral\u0131\u011F\u0131",
    base64: "base64 ile \u015Fifrelenmi\u015F metin",
    base64url: "base64url ile \u015Fifrelenmi\u015F metin",
    json_string: "JSON dizesi",
    e164: "E.164 say\u0131s\u0131",
    jwt: "JWT",
    template_literal: "\u015Eablon dizesi"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${issue2.expected}, al\u0131nan ${received}`;
        }
        return `Ge\xE7ersiz de\u011Fer: beklenen ${expected}, al\u0131nan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Ge\xE7ersiz de\u011Fer: beklenen ${stringifyPrimitive(issue2.values[0])}`;
        return `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xF6\u011Fe"}`;
        return `\xC7ok b\xFCy\xFCk: beklenen ${issue2.origin ?? "de\u011Fer"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        return `\xC7ok k\xFC\xE7\xFCk: beklenen ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Ge\xE7ersiz metin: "${_issue.prefix}" ile ba\u015Flamal\u0131`;
        if (_issue.format === "ends_with")
          return `Ge\xE7ersiz metin: "${_issue.suffix}" ile bitmeli`;
        if (_issue.format === "includes")
          return `Ge\xE7ersiz metin: "${_issue.includes}" i\xE7ermeli`;
        if (_issue.format === "regex")
          return `Ge\xE7ersiz metin: ${_issue.pattern} desenine uymal\u0131`;
        return `Ge\xE7ersiz ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Ge\xE7ersiz say\u0131: ${issue2.divisor} ile tam b\xF6l\xFCnebilmeli`;
      case "unrecognized_keys":
        return `Tan\u0131nmayan anahtar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} i\xE7inde ge\xE7ersiz anahtar`;
      case "invalid_union":
        return "Ge\xE7ersiz de\u011Fer";
      case "invalid_element":
        return `${issue2.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
      default:
        return `Ge\xE7ersiz de\u011Fer`;
    }
  };
};
function tr_default() {
  return {
    localeError: error43()
  };
}

// node_modules/zod/v4/locales/uk.js
var error44 = () => {
  const Sizable = {
    string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    file: { unit: "\u0431\u0430\u0439\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" },
    set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
    email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
    url: "URL",
    emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
    date: "\u0434\u0430\u0442\u0430 ISO",
    time: "\u0447\u0430\u0441 ISO",
    duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
    ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
    ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
    cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
    cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
    base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
    base64url: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
    json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
    e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
    jwt: "JWT",
    template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0447\u0438\u0441\u043B\u043E",
    array: "\u043C\u0430\u0441\u0438\u0432"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${issue2.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
        }
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`;
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${issue2.origin} \u0431\u0443\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${issue2.divisor}`;
      case "unrecognized_keys":
        return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0456" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
      case "invalid_union":
        return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
      case "invalid_element":
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${issue2.origin}`;
      default:
        return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456`;
    }
  };
};
function uk_default() {
  return {
    localeError: error44()
  };
}

// node_modules/zod/v4/locales/ua.js
function ua_default() {
  return uk_default();
}

// node_modules/zod/v4/locales/ur.js
var error45 = () => {
  const Sizable = {
    string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" },
    file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" },
    array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" },
    set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0627\u0646 \u067E\u0679",
    email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
    emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
    uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
    uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
    nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
    ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
    xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
    ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
    datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
    date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
    time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
    duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
    ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
    cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
    cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
    base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
    json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
    e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
    jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
    template_literal: "\u0627\u0646 \u067E\u0679"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u0646\u0645\u0628\u0631",
    array: "\u0622\u0631\u06D2",
    null: "\u0646\u0644"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${issue2.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
        }
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${received} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${stringifyPrimitive(issue2.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        return `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${joinValues(issue2.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
        return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${issue2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${adj}${issue2.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u06D2 ${adj}${issue2.minimum.toString()} ${sizing.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
        }
        return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${issue2.origin} \u06A9\u0627 ${adj}${issue2.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        }
        if (_issue.format === "ends_with")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        if (_issue.format === "includes")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_issue.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        if (_issue.format === "regex")
          return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${_issue.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        return `\u063A\u0644\u0637 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${issue2.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
      case "unrecognized_keys":
        return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${issue2.keys.length > 1 ? "\u0632" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
      case "invalid_key":
        return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
      case "invalid_union":
        return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
      case "invalid_element":
        return `${issue2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      default:
        return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679`;
    }
  };
};
function ur_default() {
  return {
    localeError: error45()
  };
}

// node_modules/zod/v4/locales/uz.js
var error46 = () => {
  const Sizable = {
    string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
    file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
    array: { unit: "element", verb: "bo\u2018lishi kerak" },
    set: { unit: "element", verb: "bo\u2018lishi kerak" },
    map: { unit: "yozuv", verb: "bo\u2018lishi kerak" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "kirish",
    email: "elektron pochta manzili",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${issue2.expected}, qabul qilingan ${received}`;
        }
        return `Noto\u2018g\u2018ri kirish: kutilgan ${expected}, qabul qilingan ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `Noto\u2018g\u2018ri kirish: kutilgan ${stringifyPrimitive(issue2.values[0])}`;
        return `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()} ${sizing.unit} ${sizing.verb}`;
        return `Juda katta: kutilgan ${issue2.origin ?? "qiymat"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
        }
        return `Juda kichik: kutilgan ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Noto\u2018g\u2018ri satr: "${_issue.prefix}" bilan boshlanishi kerak`;
        if (_issue.format === "ends_with")
          return `Noto\u2018g\u2018ri satr: "${_issue.suffix}" bilan tugashi kerak`;
        if (_issue.format === "includes")
          return `Noto\u2018g\u2018ri satr: "${_issue.includes}" ni o\u2018z ichiga olishi kerak`;
        if (_issue.format === "regex")
          return `Noto\u2018g\u2018ri satr: ${_issue.pattern} shabloniga mos kelishi kerak`;
        return `Noto\u2018g\u2018ri ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Noto\u2018g\u2018ri raqam: ${issue2.divisor} ning karralisi bo\u2018lishi kerak`;
      case "unrecognized_keys":
        return `Noma\u2019lum kalit${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} dagi kalit noto\u2018g\u2018ri`;
      case "invalid_union":
        return "Noto\u2018g\u2018ri kirish";
      case "invalid_element":
        return `${issue2.origin} da noto\u2018g\u2018ri qiymat`;
      default:
        return `Noto\u2018g\u2018ri kirish`;
    }
  };
};
function uz_default() {
  return {
    localeError: error46()
  };
}

// node_modules/zod/v4/locales/vi.js
var error47 = () => {
  const Sizable = {
    string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
    file: { unit: "byte", verb: "c\xF3" },
    array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
    set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u0111\u1EA7u v\xE0o",
    email: "\u0111\u1ECBa ch\u1EC9 email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ng\xE0y gi\u1EDD ISO",
    date: "ng\xE0y ISO",
    time: "gi\u1EDD ISO",
    duration: "kho\u1EA3ng th\u1EDDi gian ISO",
    ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
    ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
    cidrv4: "d\u1EA3i IPv4",
    cidrv6: "d\u1EA3i IPv6",
    base64: "chu\u1ED7i m\xE3 h\xF3a base64",
    base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
    json_string: "chu\u1ED7i JSON",
    e164: "s\u1ED1 E.164",
    jwt: "JWT",
    template_literal: "\u0111\u1EA7u v\xE0o"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "s\u1ED1",
    array: "m\u1EA3ng"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${issue2.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
        }
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${stringifyPrimitive(issue2.values[0])}`;
        return `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "ph\u1EA7n t\u1EED"}`;
        return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${issue2.origin ?? "gi\xE1 tr\u1ECB"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${_issue.pattern}`;
        return `${FormatDictionary[_issue.format] ?? issue2.format} kh\xF4ng h\u1EE3p l\u1EC7`;
      }
      case "not_multiple_of":
        return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
      case "invalid_union":
        return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
      case "invalid_element":
        return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${issue2.origin}`;
      default:
        return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7`;
    }
  };
};
function vi_default() {
  return {
    localeError: error47()
  };
}

// node_modules/zod/v4/locales/zh-CN.js
var error48 = () => {
  const Sizable = {
    string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
    file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
    array: { unit: "\u9879", verb: "\u5305\u542B" },
    set: { unit: "\u9879", verb: "\u5305\u542B" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u8F93\u5165",
    email: "\u7535\u5B50\u90AE\u4EF6",
    url: "URL",
    emoji: "\u8868\u60C5\u7B26\u53F7",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO\u65E5\u671F\u65F6\u95F4",
    date: "ISO\u65E5\u671F",
    time: "ISO\u65F6\u95F4",
    duration: "ISO\u65F6\u957F",
    ipv4: "IPv4\u5730\u5740",
    ipv6: "IPv6\u5730\u5740",
    cidrv4: "IPv4\u7F51\u6BB5",
    cidrv6: "IPv6\u7F51\u6BB5",
    base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
    base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
    json_string: "JSON\u5B57\u7B26\u4E32",
    e164: "E.164\u53F7\u7801",
    jwt: "JWT",
    template_literal: "\u8F93\u5165"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "\u6570\u5B57",
    array: "\u6570\u7EC4",
    null: "\u7A7A\u503C(null)"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${issue2.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
        }
        return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${stringifyPrimitive(issue2.values[0])}`;
        return `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u4E2A\u5143\u7D20"}`;
        return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${issue2.origin ?? "\u503C"} ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.prefix}" \u5F00\u5934`;
        if (_issue.format === "ends_with")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_issue.suffix}" \u7ED3\u5C3E`;
        if (_issue.format === "includes")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${_issue.pattern}`;
        return `\u65E0\u6548${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${issue2.divisor} \u7684\u500D\u6570`;
      case "unrecognized_keys":
        return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `${issue2.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
      case "invalid_union":
        return "\u65E0\u6548\u8F93\u5165";
      case "invalid_element":
        return `${issue2.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      default:
        return `\u65E0\u6548\u8F93\u5165`;
    }
  };
};
function zh_CN_default() {
  return {
    localeError: error48()
  };
}

// node_modules/zod/v4/locales/zh-TW.js
var error49 = () => {
  const Sizable = {
    string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
    file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
    array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
    set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u8F38\u5165",
    email: "\u90F5\u4EF6\u5730\u5740",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO \u65E5\u671F\u6642\u9593",
    date: "ISO \u65E5\u671F",
    time: "ISO \u6642\u9593",
    duration: "ISO \u671F\u9593",
    ipv4: "IPv4 \u4F4D\u5740",
    ipv6: "IPv6 \u4F4D\u5740",
    cidrv4: "IPv4 \u7BC4\u570D",
    cidrv6: "IPv6 \u7BC4\u570D",
    base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
    base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
    json_string: "JSON \u5B57\u4E32",
    e164: "E.164 \u6578\u503C",
    jwt: "JWT",
    template_literal: "\u8F38\u5165"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${issue2.expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
        }
        return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${expected}\uFF0C\u4F46\u6536\u5230 ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${stringifyPrimitive(issue2.values[0])}`;
        return `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u500B\u5143\u7D20"}`;
        return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${issue2.origin ?? "\u503C"} \u61C9\u70BA ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing) {
          return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
        }
        return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${issue2.origin} \u61C9\u70BA ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with") {
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.prefix}" \u958B\u982D`;
        }
        if (_issue.format === "ends_with")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_issue.suffix}" \u7D50\u5C3E`;
        if (_issue.format === "includes")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${_issue.pattern}`;
        return `\u7121\u6548\u7684 ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${issue2.divisor} \u7684\u500D\u6578`;
      case "unrecognized_keys":
        return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${issue2.keys.length > 1 ? "\u5011" : ""}\uFF1A${joinValues(issue2.keys, "\u3001")}`;
      case "invalid_key":
        return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
      case "invalid_union":
        return "\u7121\u6548\u7684\u8F38\u5165\u503C";
      case "invalid_element":
        return `${issue2.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      default:
        return `\u7121\u6548\u7684\u8F38\u5165\u503C`;
    }
  };
};
function zh_TW_default() {
  return {
    localeError: error49()
  };
}

// node_modules/zod/v4/locales/yo.js
var error50 = () => {
  const Sizable = {
    string: { unit: "\xE0mi", verb: "n\xED" },
    file: { unit: "bytes", verb: "n\xED" },
    array: { unit: "nkan", verb: "n\xED" },
    set: { unit: "nkan", verb: "n\xED" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
    email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "\xE0k\xF3k\xF2 ISO",
    date: "\u1ECDj\u1ECD\u0301 ISO",
    time: "\xE0k\xF3k\xF2 ISO",
    duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
    ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
    ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
    cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
    cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
    base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
    base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
    json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
    e164: "n\u1ECD\u0301mb\xE0 E.164",
    jwt: "JWT",
    template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9"
  };
  const TypeDictionary = {
    nan: "NaN",
    number: "n\u1ECD\u0301mb\xE0",
    array: "akop\u1ECD"
  };
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
        const receivedType = parsedType(issue2.input);
        const received = TypeDictionary[receivedType] ?? receivedType;
        if (/^[A-Z]/.test(issue2.expected)) {
          return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${issue2.expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
        }
        return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${expected}, \xE0m\u1ECD\u0300 a r\xED ${received}`;
      }
      case "invalid_value":
        if (issue2.values.length === 1)
          return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${stringifyPrimitive(issue2.values[0])}`;
        return `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        const adj = issue2.inclusive ? "<=" : "<";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin ?? "iye"} ${sizing.verb} ${adj}${issue2.maximum} ${sizing.unit}`;
        return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.maximum}`;
      }
      case "too_small": {
        const adj = issue2.inclusive ? ">=" : ">";
        const sizing = getSizing(issue2.origin);
        if (sizing)
          return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum} ${sizing.unit}`;
        return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${adj}${issue2.minimum}`;
      }
      case "invalid_format": {
        const _issue = issue2;
        if (_issue.format === "starts_with")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${_issue.prefix}"`;
        if (_issue.format === "ends_with")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${_issue.pattern}`;
        return `A\u1E63\xEC\u1E63e: ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${issue2.divisor}`;
      case "unrecognized_keys":
        return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
      case "invalid_union":
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
      case "invalid_element":
        return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${issue2.origin}`;
      default:
        return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
    }
  };
};
function yo_default() {
  return {
    localeError: error50()
  };
}

// node_modules/zod/v4/core/registries.js
var _a2;
var $output = /* @__PURE__ */ Symbol("ZodOutput");
var $input = /* @__PURE__ */ Symbol("ZodInput");
var $ZodRegistry = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta3 = _meta[0];
    this._map.set(schema, meta3);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.set(meta3.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta3 = this._map.get(schema);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.delete(meta3.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
(_a2 = globalThis).__zod_globalRegistry ?? (_a2.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _string(Class2, params) {
  return new Class2({
    type: "string",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedString(Class2, params) {
  return new Class2({
    type: "string",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _mac(Class2, params) {
  return new Class2({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
var TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _number(Class2, params) {
  return new Class2({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedNumber(Class2, params) {
  return new Class2({
    type: "number",
    coerce: true,
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _float32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _float64(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uint32(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBoolean(Class2, params) {
  return new Class2({
    type: "boolean",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _bigint(Class2, params) {
  return new Class2({
    type: "bigint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBigint(Class2, params) {
  return new Class2({
    type: "bigint",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uint64(Class2, params) {
  return new Class2({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _symbol(Class2, params) {
  return new Class2({
    type: "symbol",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _undefined2(Class2, params) {
  return new Class2({
    type: "undefined",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _any(Class2) {
  return new Class2({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _void(Class2, params) {
  return new Class2({
    type: "void",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _date(Class2, params) {
  return new Class2({
    type: "date",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedDate(Class2, params) {
  return new Class2({
    type: "date",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nan(Class2, params) {
  return new Class2({
    type: "nan",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _positive(params) {
  return /* @__PURE__ */ _gt(0, params);
}
// @__NO_SIDE_EFFECTS__
function _negative(params) {
  return /* @__PURE__ */ _lt(0, params);
}
// @__NO_SIDE_EFFECTS__
function _nonpositive(params) {
  return /* @__PURE__ */ _lte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _nonnegative(params) {
  return /* @__PURE__ */ _gte(0, params);
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
// @__NO_SIDE_EFFECTS__
function _maxSize(maximum, params) {
  return new $ZodCheckMaxSize({
    check: "max_size",
    ...normalizeParams(params),
    maximum
  });
}
// @__NO_SIDE_EFFECTS__
function _minSize(minimum, params) {
  return new $ZodCheckMinSize({
    check: "min_size",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _size(size, params) {
  return new $ZodCheckSizeEquals({
    check: "size_equals",
    ...normalizeParams(params),
    size
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _property(property, schema, params) {
  return new $ZodCheckProperty({
    check: "property",
    property,
    schema,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _mime(types, params) {
  return new $ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _union(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
function _xor(Class2, options, params) {
  return new Class2({
    type: "union",
    options,
    inclusive: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _discriminatedUnion(Class2, discriminator, options, params) {
  return new Class2({
    type: "union",
    options,
    discriminator,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _intersection(Class2, left, right) {
  return new Class2({
    type: "intersection",
    left,
    right
  });
}
// @__NO_SIDE_EFFECTS__
function _tuple(Class2, items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new Class2({
    type: "tuple",
    items,
    rest,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _record(Class2, keyType, valueType, params) {
  return new Class2({
    type: "record",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _map(Class2, keyType, valueType, params) {
  return new Class2({
    type: "map",
    keyType,
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _set(Class2, valueType, params) {
  return new Class2({
    type: "set",
    valueType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _enum(Class2, values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nativeEnum(Class2, entries, params) {
  return new Class2({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _literal(Class2, value, params) {
  return new Class2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _file(Class2, params) {
  return new Class2({
    type: "file",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _transform(Class2, fn) {
  return new Class2({
    type: "transform",
    transform: fn
  });
}
// @__NO_SIDE_EFFECTS__
function _optional(Class2, innerType) {
  return new Class2({
    type: "optional",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _nullable(Class2, innerType) {
  return new Class2({
    type: "nullable",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _default(Class2, innerType, defaultValue) {
  return new Class2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
// @__NO_SIDE_EFFECTS__
function _nonoptional(Class2, innerType, params) {
  return new Class2({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _success(Class2, innerType) {
  return new Class2({
    type: "success",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _catch(Class2, innerType, catchValue) {
  return new Class2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
// @__NO_SIDE_EFFECTS__
function _pipe(Class2, in_, out) {
  return new Class2({
    type: "pipe",
    in: in_,
    out
  });
}
// @__NO_SIDE_EFFECTS__
function _readonly(Class2, innerType) {
  return new Class2({
    type: "readonly",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _templateLiteral(Class2, parts, params) {
  return new Class2({
    type: "template_literal",
    parts,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lazy(Class2, getter) {
  return new Class2({
    type: "lazy",
    getter
  });
}
// @__NO_SIDE_EFFECTS__
function _promise(Class2, innerType) {
  return new Class2({
    type: "promise",
    innerType
  });
}
// @__NO_SIDE_EFFECTS__
function _custom(Class2, fn, _params) {
  const norm = normalizeParams(_params);
  norm.abort ?? (norm.abort = true);
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _refine(Class2, fn, _params) {
  const schema = new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
  const ch = /* @__PURE__ */ _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  }, params);
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
// @__NO_SIDE_EFFECTS__
function describe(description) {
  const ch = new $ZodCheck({ check: "describe" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, description });
    }
  ];
  ch._zod.check = () => {
  };
  return ch;
}
// @__NO_SIDE_EFFECTS__
function meta(metadata) {
  const ch = new $ZodCheck({ check: "meta" });
  ch._zod.onattach = [
    (inst) => {
      const existing = globalRegistry.get(inst) ?? {};
      globalRegistry.add(inst, { ...existing, ...metadata });
    }
  ];
  ch._zod.check = () => {
  };
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _stringbool(Classes, _params) {
  const params = normalizeParams(_params);
  let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (params.case !== "sensitive") {
    truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
    falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
  }
  const truthySet = new Set(truthyArray);
  const falsySet = new Set(falsyArray);
  const _Codec = Classes.Codec ?? $ZodCodec;
  const _Boolean = Classes.Boolean ?? $ZodBoolean;
  const _String = Classes.String ?? $ZodString;
  const stringSchema = new _String({ type: "string", error: params.error });
  const booleanSchema = new _Boolean({ type: "boolean", error: params.error });
  const codec2 = new _Codec({
    type: "pipe",
    in: stringSchema,
    out: booleanSchema,
    transform: ((input, payload) => {
      let data = input;
      if (params.case !== "sensitive")
        data = data.toLowerCase();
      if (truthySet.has(data)) {
        return true;
      } else if (falsySet.has(data)) {
        return false;
      } else {
        payload.issues.push({
          code: "invalid_value",
          expected: "stringbool",
          values: [...truthySet, ...falsySet],
          input: payload.value,
          inst: codec2,
          continue: false
        });
        return {};
      }
    }),
    reverseTransform: ((input, _payload) => {
      if (input === true) {
        return truthyArray[0] || "true";
      } else {
        return falsyArray[0] || "false";
      }
    }),
    error: params.error
  });
  return codec2;
}
// @__NO_SIDE_EFFECTS__
function _stringFormat(Class2, format, fnOrRegex, _params = {}) {
  const params = normalizeParams(_params);
  const def = {
    ...normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params
  };
  if (fnOrRegex instanceof RegExp) {
    def.pattern = fnOrRegex;
  }
  const inst = new Class2(def);
  return inst;
}

// node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    external: params?.external ?? void 0
  };
}
function process2(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a3;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process2(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta3 = ctx.metadataRegistry.get(schema);
  if (meta3)
    Object.assign(result.schema, meta3);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema)
    (_a3 = result.schema).default ?? (_a3.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
    }
    if (entry[1] === root) {
      return { ref: "#" };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + defId };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        Object.assign(schema2, refSchema);
      }
      Object.assign(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  for (const entry of [...ctx.seen.entries()].reverse()) {
    flattenRef(entry[0]);
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {
  } else {
  }
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  Object.assign(result, root.def ?? root.schema);
  const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  if (rootMetaId !== void 0 && result.id === rootMetaId)
    delete result.id;
  const defs = ctx.external?.defs ?? {};
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (seen.def && seen.defId) {
      if (seen.def.id === seen.defId)
        delete seen.def.id;
      defs[seen.defId] = seen.def;
    }
  }
  if (ctx.external) {
  } else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec"))
      return true;
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process2(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process2(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};

// node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
};
var stringProcessor = (schema, ctx, _json, _params) => {
  const json2 = _json;
  json2.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minLength = minimum;
  if (typeof maximum === "number")
    json2.maxLength = maximum;
  if (format) {
    json2.format = formatMap[format] ?? format;
    if (json2.format === "")
      delete json2.format;
    if (format === "time") {
      delete json2.format;
    }
  }
  if (contentEncoding)
    json2.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const regexes = [...patterns];
    if (regexes.length === 1)
      json2.pattern = regexes[0].source;
    else if (regexes.length > 1) {
      json2.allOf = [
        ...regexes.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, _params) => {
  const json2 = _json;
  const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format === "string" && format.includes("int"))
    json2.type = "integer";
  else
    json2.type = "number";
  const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
  const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
  const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  if (exMin) {
    if (legacy) {
      json2.minimum = exclusiveMinimum;
      json2.exclusiveMinimum = true;
    } else {
      json2.exclusiveMinimum = exclusiveMinimum;
    }
  } else if (typeof minimum === "number") {
    json2.minimum = minimum;
  }
  if (exMax) {
    if (legacy) {
      json2.maximum = exclusiveMaximum;
      json2.exclusiveMaximum = true;
    } else {
      json2.exclusiveMaximum = exclusiveMaximum;
    }
  } else if (typeof maximum === "number") {
    json2.maximum = maximum;
  }
  if (typeof multipleOf === "number")
    json2.multipleOf = multipleOf;
};
var booleanProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
};
var bigintProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("BigInt cannot be represented in JSON Schema");
  }
};
var symbolProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Symbols cannot be represented in JSON Schema");
  }
};
var nullProcessor = (_schema, ctx, json2, _params) => {
  if (ctx.target === "openapi-3.0") {
    json2.type = "string";
    json2.nullable = true;
    json2.enum = [null];
  } else {
    json2.type = "null";
  }
};
var undefinedProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Undefined cannot be represented in JSON Schema");
  }
};
var voidProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Void cannot be represented in JSON Schema");
  }
};
var neverProcessor = (_schema, _ctx, json2, _params) => {
  json2.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {
};
var unknownProcessor = (_schema, _ctx, _json, _params) => {
};
var dateProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Date cannot be represented in JSON Schema");
  }
};
var enumProcessor = (schema, _ctx, json2, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.every((v) => typeof v === "number"))
    json2.type = "number";
  if (values.every((v) => typeof v === "string"))
    json2.type = "string";
  json2.enum = values;
};
var literalProcessor = (schema, ctx, json2, _params) => {
  const def = schema._zod.def;
  const vals = [];
  for (const val of def.values) {
    if (val === void 0) {
      if (ctx.unrepresentable === "throw") {
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
      } else {
      }
    } else if (typeof val === "bigint") {
      if (ctx.unrepresentable === "throw") {
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      } else {
        vals.push(Number(val));
      }
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {
  } else if (vals.length === 1) {
    const val = vals[0];
    json2.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json2.enum = [val];
    } else {
      json2.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json2.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json2.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json2.type = "boolean";
    if (vals.every((v) => v === null))
      json2.type = "null";
    json2.enum = vals;
  }
};
var nanProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("NaN cannot be represented in JSON Schema");
  }
};
var templateLiteralProcessor = (schema, _ctx, json2, _params) => {
  const _json = json2;
  const pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
};
var fileProcessor = (schema, _ctx, json2, _params) => {
  const _json = json2;
  const file2 = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  };
  const { minimum, maximum, mime } = schema._zod.bag;
  if (minimum !== void 0)
    file2.minLength = minimum;
  if (maximum !== void 0)
    file2.maxLength = maximum;
  if (mime) {
    if (mime.length === 1) {
      file2.contentMediaType = mime[0];
      Object.assign(_json, file2);
    } else {
      Object.assign(_json, file2);
      _json.anyOf = mime.map((m) => ({ contentMediaType: m }));
    }
  } else {
    Object.assign(_json, file2);
  }
};
var successProcessor = (_schema, _ctx, json2, _params) => {
  json2.type = "boolean";
};
var customProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Custom types cannot be represented in JSON Schema");
  }
};
var functionProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Function types cannot be represented in JSON Schema");
  }
};
var transformProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Transforms cannot be represented in JSON Schema");
  }
};
var mapProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Map cannot be represented in JSON Schema");
  }
};
var setProcessor = (_schema, ctx, _json, _params) => {
  if (ctx.unrepresentable === "throw") {
    throw new Error("Set cannot be represented in JSON Schema");
  }
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minItems = minimum;
  if (typeof maximum === "number")
    json2.maxItems = maximum;
  json2.type = "array";
  json2.items = process2(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
var objectProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "object";
  json2.properties = {};
  const shape = def.shape;
  for (const key in shape) {
    json2.properties[key] = process2(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    });
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const v = def.shape[key]._zod;
    if (ctx.io === "input") {
      return v.optin === void 0;
    } else {
      return v.optout === void 0;
    }
  }));
  if (requiredKeys.size > 0) {
    json2.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json2.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json2.additionalProperties = false;
  } else if (def.catchall) {
    json2.additionalProperties = process2(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => process2(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json2.oneOf = options;
  } else {
    json2.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const a = process2(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process2(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json2.allOf = allOf;
};
var tupleProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map((x, i) => process2(x, ctx, {
    ...params,
    path: [...params.path, prefixPath, i]
  }));
  const rest = def.rest ? process2(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  if (ctx.target === "draft-2020-12") {
    json2.prefixItems = prefixItems;
    if (rest) {
      json2.items = rest;
    }
  } else if (ctx.target === "openapi-3.0") {
    json2.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json2.items.anyOf.push(rest);
    }
    json2.minItems = prefixItems.length;
    if (!rest) {
      json2.maxItems = prefixItems.length;
    }
  } else {
    json2.items = prefixItems;
    if (rest) {
      json2.additionalItems = rest;
    }
  }
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json2.minItems = minimum;
  if (typeof maximum === "number")
    json2.maxItems = maximum;
};
var recordProcessor = (schema, ctx, _json, params) => {
  const json2 = _json;
  const def = schema._zod.def;
  json2.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json2.patternProperties = {};
    for (const pattern of patterns) {
      json2.patternProperties[pattern.source] = valueSchema;
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json2.propertyNames = process2(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
    }
    json2.additionalProperties = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  if (keyValues) {
    const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
    if (validKeyValues.length > 0) {
      json2.required = validKeyValues;
    }
  }
};
var nullableProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  const inner = process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json2.nullable = true;
  } else {
    json2.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var defaultProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json2.default = JSON.parse(JSON.stringify(def.defaultValue));
};
var prefaultProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io === "input")
    json2._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
var catchProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  json2.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const inIsTransform = def.in._zod.traits.has("$ZodTransform");
  const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json2, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json2.readOnly = true;
};
var promiseProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry2 = input;
    const ctx2 = initializeContext({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry2._idmap.entries()) {
      const [_, schema] = entry;
      process2(schema, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry2._idmap.entries()) {
      const [key, schema] = entry;
      extractDefs(ctx2, schema);
      schemas[key] = finalize(ctx2, schema);
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext({ ...params, processors: allProcessors });
  process2(input, ctx);
  extractDefs(ctx, input);
  return finalize(ctx, input);
}

// node_modules/zod/v4/core/json-schema-generator.js
var JSONSchemaGenerator = class {
  /** @deprecated Access via ctx instead */
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  /** @deprecated Access via ctx instead */
  get target() {
    return this.ctx.target;
  }
  /** @deprecated Access via ctx instead */
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  /** @deprecated Access via ctx instead */
  get override() {
    return this.ctx.override;
  }
  /** @deprecated Access via ctx instead */
  get io() {
    return this.ctx.io;
  }
  /** @deprecated Access via ctx instead */
  get counter() {
    return this.ctx.counter;
  }
  set counter(value) {
    this.ctx.counter = value;
  }
  /** @deprecated Access via ctx instead */
  get seen() {
    return this.ctx.seen;
  }
  constructor(params) {
    let normalizedTarget = params?.target ?? "draft-2020-12";
    if (normalizedTarget === "draft-4")
      normalizedTarget = "draft-04";
    if (normalizedTarget === "draft-7")
      normalizedTarget = "draft-07";
    this.ctx = initializeContext({
      processors: allProcessors,
      target: normalizedTarget,
      ...params?.metadata && { metadata: params.metadata },
      ...params?.unrepresentable && { unrepresentable: params.unrepresentable },
      ...params?.override && { override: params.override },
      ...params?.io && { io: params.io }
    });
  }
  /**
   * Process a schema to prepare it for JSON Schema generation.
   * This must be called before emit().
   */
  process(schema, _params = { path: [], schemaPath: [] }) {
    return process2(schema, this.ctx, _params);
  }
  /**
   * Emit the final JSON Schema after processing.
   * Must call process() first.
   */
  emit(schema, _params) {
    if (_params) {
      if (_params.cycles)
        this.ctx.cycles = _params.cycles;
      if (_params.reused)
        this.ctx.reused = _params.reused;
      if (_params.external)
        this.ctx.external = _params.external;
    }
    extractDefs(this.ctx, schema);
    const result = finalize(this.ctx, schema);
    const { "~standard": _, ...plainResult } = result;
    return plainResult;
  }
};

// node_modules/zod/v4/core/json-schema.js
var json_schema_exports = {};

// node_modules/zod/v4/classic/schemas.js
var schemas_exports2 = {};
__export(schemas_exports2, {
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBase64: () => ZodBase64,
  ZodBase64URL: () => ZodBase64URL,
  ZodBigInt: () => ZodBigInt,
  ZodBigIntFormat: () => ZodBigIntFormat,
  ZodBoolean: () => ZodBoolean,
  ZodCIDRv4: () => ZodCIDRv4,
  ZodCIDRv6: () => ZodCIDRv6,
  ZodCUID: () => ZodCUID,
  ZodCUID2: () => ZodCUID2,
  ZodCatch: () => ZodCatch,
  ZodCodec: () => ZodCodec,
  ZodCustom: () => ZodCustom,
  ZodCustomStringFormat: () => ZodCustomStringFormat,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodE164: () => ZodE164,
  ZodEmail: () => ZodEmail,
  ZodEmoji: () => ZodEmoji,
  ZodEnum: () => ZodEnum,
  ZodExactOptional: () => ZodExactOptional,
  ZodFile: () => ZodFile,
  ZodFunction: () => ZodFunction,
  ZodGUID: () => ZodGUID,
  ZodIPv4: () => ZodIPv4,
  ZodIPv6: () => ZodIPv6,
  ZodIntersection: () => ZodIntersection,
  ZodJWT: () => ZodJWT,
  ZodKSUID: () => ZodKSUID,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMAC: () => ZodMAC,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNanoID: () => ZodNanoID,
  ZodNever: () => ZodNever,
  ZodNonOptional: () => ZodNonOptional,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodNumberFormat: () => ZodNumberFormat,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodPipe: () => ZodPipe,
  ZodPrefault: () => ZodPrefault,
  ZodPreprocess: () => ZodPreprocess,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodStringFormat: () => ZodStringFormat,
  ZodSuccess: () => ZodSuccess,
  ZodSymbol: () => ZodSymbol,
  ZodTemplateLiteral: () => ZodTemplateLiteral,
  ZodTransform: () => ZodTransform,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodULID: () => ZodULID,
  ZodURL: () => ZodURL,
  ZodUUID: () => ZodUUID,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  ZodXID: () => ZodXID,
  ZodXor: () => ZodXor,
  _ZodString: () => _ZodString,
  _default: () => _default2,
  _function: () => _function,
  any: () => any,
  array: () => array,
  base64: () => base642,
  base64url: () => base64url2,
  bigint: () => bigint2,
  boolean: () => boolean2,
  catch: () => _catch2,
  check: () => check,
  cidrv4: () => cidrv42,
  cidrv6: () => cidrv62,
  codec: () => codec,
  cuid: () => cuid3,
  cuid2: () => cuid22,
  custom: () => custom,
  date: () => date3,
  describe: () => describe2,
  discriminatedUnion: () => discriminatedUnion,
  e164: () => e1642,
  email: () => email2,
  emoji: () => emoji2,
  enum: () => _enum2,
  exactOptional: () => exactOptional,
  file: () => file,
  float32: () => float32,
  float64: () => float64,
  function: () => _function,
  guid: () => guid2,
  hash: () => hash,
  hex: () => hex2,
  hostname: () => hostname2,
  httpUrl: () => httpUrl,
  instanceof: () => _instanceof,
  int: () => int,
  int32: () => int32,
  int64: () => int64,
  intersection: () => intersection,
  invertCodec: () => invertCodec,
  ipv4: () => ipv42,
  ipv6: () => ipv62,
  json: () => json,
  jwt: () => jwt,
  keyof: () => keyof,
  ksuid: () => ksuid2,
  lazy: () => lazy,
  literal: () => literal,
  looseObject: () => looseObject,
  looseRecord: () => looseRecord,
  mac: () => mac2,
  map: () => map,
  meta: () => meta2,
  nan: () => nan,
  nanoid: () => nanoid2,
  nativeEnum: () => nativeEnum,
  never: () => never,
  nonoptional: () => nonoptional,
  null: () => _null3,
  nullable: () => nullable,
  nullish: () => nullish2,
  number: () => number2,
  object: () => object,
  optional: () => optional,
  partialRecord: () => partialRecord,
  pipe: () => pipe,
  prefault: () => prefault,
  preprocess: () => preprocess,
  promise: () => promise,
  readonly: () => readonly,
  record: () => record,
  refine: () => refine,
  set: () => set,
  strictObject: () => strictObject,
  string: () => string2,
  stringFormat: () => stringFormat,
  stringbool: () => stringbool,
  success: () => success,
  superRefine: () => superRefine,
  symbol: () => symbol,
  templateLiteral: () => templateLiteral,
  transform: () => transform,
  tuple: () => tuple,
  uint32: () => uint32,
  uint64: () => uint64,
  ulid: () => ulid2,
  undefined: () => _undefined3,
  union: () => union,
  unknown: () => unknown,
  url: () => url,
  uuid: () => uuid2,
  uuidv4: () => uuidv4,
  uuidv6: () => uuidv6,
  uuidv7: () => uuidv7,
  void: () => _void2,
  xid: () => xid2,
  xor: () => xor
});

// node_modules/zod/v4/classic/checks.js
var checks_exports2 = {};
__export(checks_exports2, {
  endsWith: () => _endsWith,
  gt: () => _gt,
  gte: () => _gte,
  includes: () => _includes,
  length: () => _length,
  lowercase: () => _lowercase,
  lt: () => _lt,
  lte: () => _lte,
  maxLength: () => _maxLength,
  maxSize: () => _maxSize,
  mime: () => _mime,
  minLength: () => _minLength,
  minSize: () => _minSize,
  multipleOf: () => _multipleOf,
  negative: () => _negative,
  nonnegative: () => _nonnegative,
  nonpositive: () => _nonpositive,
  normalize: () => _normalize,
  overwrite: () => _overwrite,
  positive: () => _positive,
  property: () => _property,
  regex: () => _regex,
  size: () => _size,
  slugify: () => _slugify,
  startsWith: () => _startsWith,
  toLowerCase: () => _toLowerCase,
  toUpperCase: () => _toUpperCase,
  trim: () => _trim,
  uppercase: () => _uppercase
});

// node_modules/zod/v4/classic/iso.js
var iso_exports = {};
__export(iso_exports, {
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  date: () => date2,
  datetime: () => datetime2,
  duration: () => duration2,
  time: () => time2
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function date2(params) {
  return _isoDate(ZodISODate, params);
}
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// node_modules/zod/v4/classic/errors.js
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError(inst, mapper)
      // enumerable: false,
    },
    flatten: {
      value: (mapper) => flattenError(inst, mapper)
      // enumerable: false,
    },
    addIssue: {
      value: (issue2) => {
        inst.issues.push(issue2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (issues2) => {
        inst.issues.push(...issues2);
        inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
};
var ZodError = /* @__PURE__ */ $constructor("ZodError", initializer2);
var ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer2, {
  Parent: Error
});

// node_modules/zod/v4/classic/parse.js
var parse2 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode2 = /* @__PURE__ */ _encode(ZodRealError);
var decode2 = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// node_modules/zod/v4/classic/schemas.js
var _installedGroups = /* @__PURE__ */ new WeakMap();
function _installLazyMethods(inst, group, methods) {
  const proto = Object.getPrototypeOf(inst);
  let installed = _installedGroups.get(proto);
  if (!installed) {
    installed = /* @__PURE__ */ new Set();
    _installedGroups.set(proto, installed);
  }
  if (installed.has(group))
    return;
  installed.add(group);
  for (const key in methods) {
    const fn = methods[key];
    Object.defineProperty(proto, key, {
      configurable: true,
      enumerable: false,
      get() {
        const bound = fn.bind(this);
        Object.defineProperty(this, key, {
          configurable: true,
          writable: true,
          enumerable: true,
          value: bound
        });
        return bound;
      },
      set(v) {
        Object.defineProperty(this, key, {
          configurable: true,
          writable: true,
          enumerable: true,
          value: v
        });
      }
    });
  }
}
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  $ZodType.init(inst, def);
  Object.assign(inst["~standard"], {
    jsonSchema: {
      input: createStandardJSONSchemaMethod(inst, "input"),
      output: createStandardJSONSchemaMethod(inst, "output")
    }
  });
  inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
  inst.def = def;
  inst.type = def.type;
  Object.defineProperty(inst, "_def", { value: def });
  inst.parse = (data, params) => parse2(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse2(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync2(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync2(inst, data, params);
  inst.spa = inst.safeParseAsync;
  inst.encode = (data, params) => encode2(inst, data, params);
  inst.decode = (data, params) => decode2(inst, data, params);
  inst.encodeAsync = async (data, params) => encodeAsync2(inst, data, params);
  inst.decodeAsync = async (data, params) => decodeAsync2(inst, data, params);
  inst.safeEncode = (data, params) => safeEncode2(inst, data, params);
  inst.safeDecode = (data, params) => safeDecode2(inst, data, params);
  inst.safeEncodeAsync = async (data, params) => safeEncodeAsync2(inst, data, params);
  inst.safeDecodeAsync = async (data, params) => safeDecodeAsync2(inst, data, params);
  _installLazyMethods(inst, "ZodType", {
    check(...chks) {
      const def2 = this.def;
      return this.clone(util_exports.mergeDefs(def2, {
        checks: [
          ...def2.checks ?? [],
          ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
        ]
      }), { parent: true });
    },
    with(...chks) {
      return this.check(...chks);
    },
    clone(def2, params) {
      return clone(this, def2, params);
    },
    brand() {
      return this;
    },
    register(reg, meta3) {
      reg.add(this, meta3);
      return this;
    },
    refine(check2, params) {
      return this.check(refine(check2, params));
    },
    superRefine(refinement, params) {
      return this.check(superRefine(refinement, params));
    },
    overwrite(fn) {
      return this.check(_overwrite(fn));
    },
    optional() {
      return optional(this);
    },
    exactOptional() {
      return exactOptional(this);
    },
    nullable() {
      return nullable(this);
    },
    nullish() {
      return optional(nullable(this));
    },
    nonoptional(params) {
      return nonoptional(this, params);
    },
    array() {
      return array(this);
    },
    or(arg) {
      return union([this, arg]);
    },
    and(arg) {
      return intersection(this, arg);
    },
    transform(tx) {
      return pipe(this, transform(tx));
    },
    default(d) {
      return _default2(this, d);
    },
    prefault(d) {
      return prefault(this, d);
    },
    catch(params) {
      return _catch2(this, params);
    },
    pipe(target) {
      return pipe(this, target);
    },
    readonly() {
      return readonly(this);
    },
    describe(description) {
      const cl = this.clone();
      globalRegistry.add(cl, { description });
      return cl;
    },
    meta(...args) {
      if (args.length === 0)
        return globalRegistry.get(this);
      const cl = this.clone();
      globalRegistry.add(cl, args[0]);
      return cl;
    },
    isOptional() {
      return this.safeParse(void 0).success;
    },
    isNullable() {
      return this.safeParse(null).success;
    },
    apply(fn) {
      return fn(this);
    }
  });
  Object.defineProperty(inst, "description", {
    get() {
      return globalRegistry.get(inst)?.description;
    },
    configurable: true
  });
  return inst;
});
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => stringProcessor(inst, ctx, json2, params);
  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;
  _installLazyMethods(inst, "_ZodString", {
    regex(...args) {
      return this.check(_regex(...args));
    },
    includes(...args) {
      return this.check(_includes(...args));
    },
    startsWith(...args) {
      return this.check(_startsWith(...args));
    },
    endsWith(...args) {
      return this.check(_endsWith(...args));
    },
    min(...args) {
      return this.check(_minLength(...args));
    },
    max(...args) {
      return this.check(_maxLength(...args));
    },
    length(...args) {
      return this.check(_length(...args));
    },
    nonempty(...args) {
      return this.check(_minLength(1, ...args));
    },
    lowercase(params) {
      return this.check(_lowercase(params));
    },
    uppercase(params) {
      return this.check(_uppercase(params));
    },
    trim() {
      return this.check(_trim());
    },
    normalize(...args) {
      return this.check(_normalize(...args));
    },
    toLowerCase() {
      return this.check(_toLowerCase());
    },
    toUpperCase() {
      return this.check(_toUpperCase());
    },
    slugify() {
      return this.check(_slugify());
    }
  });
});
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
  inst.email = (params) => inst.check(_email(ZodEmail, params));
  inst.url = (params) => inst.check(_url(ZodURL, params));
  inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
  inst.emoji = (params) => inst.check(_emoji2(ZodEmoji, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
  inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
  inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
  inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
  inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
  inst.guid = (params) => inst.check(_guid(ZodGUID, params));
  inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
  inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
  inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
  inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
  inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
  inst.xid = (params) => inst.check(_xid(ZodXID, params));
  inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
  inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
  inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
  inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
  inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
  inst.e164 = (params) => inst.check(_e164(ZodE164, params));
  inst.datetime = (params) => inst.check(datetime2(params));
  inst.date = (params) => inst.check(date2(params));
  inst.time = (params) => inst.check(time2(params));
  inst.duration = (params) => inst.check(duration2(params));
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function email2(params) {
  return _email(ZodEmail, params);
}
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function guid2(params) {
  return _guid(ZodGUID, params);
}
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function uuid2(params) {
  return _uuid(ZodUUID, params);
}
function uuidv4(params) {
  return _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
  return _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
  return _uuidv7(ZodUUID, params);
}
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function url(params) {
  return _url(ZodURL, params);
}
function httpUrl(params) {
  return _url(ZodURL, {
    protocol: regexes_exports.httpProtocol,
    hostname: regexes_exports.domain,
    ...util_exports.normalizeParams(params)
  });
}
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function emoji2(params) {
  return _emoji2(ZodEmoji, params);
}
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function nanoid2(params) {
  return _nanoid(ZodNanoID, params);
}
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid3(params) {
  return _cuid(ZodCUID, params);
}
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cuid22(params) {
  return _cuid2(ZodCUID2, params);
}
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ulid2(params) {
  return _ulid(ZodULID, params);
}
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function xid2(params) {
  return _xid(ZodXID, params);
}
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ksuid2(params) {
  return _ksuid(ZodKSUID, params);
}
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv42(params) {
  return _ipv4(ZodIPv4, params);
}
var ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
  $ZodMAC.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function mac2(params) {
  return _mac(ZodMAC, params);
}
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function ipv62(params) {
  return _ipv6(ZodIPv6, params);
}
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv42(params) {
  return _cidrv4(ZodCIDRv4, params);
}
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function cidrv62(params) {
  return _cidrv6(ZodCIDRv6, params);
}
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base642(params) {
  return _base64(ZodBase64, params);
}
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function base64url2(params) {
  return _base64url(ZodBase64URL, params);
}
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function e1642(params) {
  return _e164(ZodE164, params);
}
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function jwt(params) {
  return _jwt(ZodJWT, params);
}
var ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
  $ZodCustomStringFormat.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function stringFormat(format, fnOrRegex, _params = {}) {
  return _stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params);
}
function hostname2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hostname", regexes_exports.hostname, _params);
}
function hex2(_params) {
  return _stringFormat(ZodCustomStringFormat, "hex", regexes_exports.hex, _params);
}
function hash(alg, params) {
  const enc = params?.enc ?? "hex";
  const format = `${alg}_${enc}`;
  const regex = regexes_exports[format];
  if (!regex)
    throw new Error(`Unrecognized hash format: ${format}`);
  return _stringFormat(ZodCustomStringFormat, format, regex, params);
}
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => numberProcessor(inst, ctx, json2, params);
  _installLazyMethods(inst, "ZodNumber", {
    gt(value, params) {
      return this.check(_gt(value, params));
    },
    gte(value, params) {
      return this.check(_gte(value, params));
    },
    min(value, params) {
      return this.check(_gte(value, params));
    },
    lt(value, params) {
      return this.check(_lt(value, params));
    },
    lte(value, params) {
      return this.check(_lte(value, params));
    },
    max(value, params) {
      return this.check(_lte(value, params));
    },
    int(params) {
      return this.check(int(params));
    },
    safe(params) {
      return this.check(int(params));
    },
    positive(params) {
      return this.check(_gt(0, params));
    },
    nonnegative(params) {
      return this.check(_gte(0, params));
    },
    negative(params) {
      return this.check(_lt(0, params));
    },
    nonpositive(params) {
      return this.check(_lte(0, params));
    },
    multipleOf(value, params) {
      return this.check(_multipleOf(value, params));
    },
    step(value, params) {
      return this.check(_multipleOf(value, params));
    },
    finite() {
      return this;
    }
  });
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
});
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
function float32(params) {
  return _float32(ZodNumberFormat, params);
}
function float64(params) {
  return _float64(ZodNumberFormat, params);
}
function int32(params) {
  return _int32(ZodNumberFormat, params);
}
function uint32(params) {
  return _uint32(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => booleanProcessor(inst, ctx, json2, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
  $ZodBigInt.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => bigintProcessor(inst, ctx, json2, params);
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.gt = (value, params) => inst.check(_gt(value, params));
  inst.gte = (value, params) => inst.check(_gte(value, params));
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.lt = (value, params) => inst.check(_lt(value, params));
  inst.lte = (value, params) => inst.check(_lte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  inst.positive = (params) => inst.check(_gt(BigInt(0), params));
  inst.negative = (params) => inst.check(_lt(BigInt(0), params));
  inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
  inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
  const bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null;
  inst.maxValue = bag.maximum ?? null;
  inst.format = bag.format ?? null;
});
function bigint2(params) {
  return _bigint(ZodBigInt, params);
}
var ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
  $ZodBigIntFormat.init(inst, def);
  ZodBigInt.init(inst, def);
});
function int64(params) {
  return _int64(ZodBigIntFormat, params);
}
function uint64(params) {
  return _uint64(ZodBigIntFormat, params);
}
var ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
  $ZodSymbol.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => symbolProcessor(inst, ctx, json2, params);
});
function symbol(params) {
  return _symbol(ZodSymbol, params);
}
var ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
  $ZodUndefined.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => undefinedProcessor(inst, ctx, json2, params);
});
function _undefined3(params) {
  return _undefined2(ZodUndefined, params);
}
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => nullProcessor(inst, ctx, json2, params);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
  $ZodAny.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => anyProcessor(inst, ctx, json2, params);
});
function any() {
  return _any(ZodAny);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => unknownProcessor(inst, ctx, json2, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => neverProcessor(inst, ctx, json2, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
  $ZodVoid.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => voidProcessor(inst, ctx, json2, params);
});
function _void2(params) {
  return _void(ZodVoid, params);
}
var ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
  $ZodDate.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => dateProcessor(inst, ctx, json2, params);
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  const c = inst._zod.bag;
  inst.minDate = c.minimum ? new Date(c.minimum) : null;
  inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date3(params) {
  return _date(ZodDate, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => arrayProcessor(inst, ctx, json2, params);
  inst.element = def.element;
  _installLazyMethods(inst, "ZodArray", {
    min(n, params) {
      return this.check(_minLength(n, params));
    },
    nonempty(params) {
      return this.check(_minLength(1, params));
    },
    max(n, params) {
      return this.check(_maxLength(n, params));
    },
    length(n, params) {
      return this.check(_length(n, params));
    },
    unwrap() {
      return this.element;
    }
  });
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
function keyof(schema) {
  const shape = schema._zod.def.shape;
  return _enum2(Object.keys(shape));
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => objectProcessor(inst, ctx, json2, params);
  util_exports.defineLazy(inst, "shape", () => {
    return def.shape;
  });
  _installLazyMethods(inst, "ZodObject", {
    keyof() {
      return _enum2(Object.keys(this._zod.def.shape));
    },
    catchall(catchall) {
      return this.clone({ ...this._zod.def, catchall });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: unknown() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: unknown() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: never() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(incoming) {
      return util_exports.extend(this, incoming);
    },
    safeExtend(incoming) {
      return util_exports.safeExtend(this, incoming);
    },
    merge(other) {
      return util_exports.merge(this, other);
    },
    pick(mask) {
      return util_exports.pick(this, mask);
    },
    omit(mask) {
      return util_exports.omit(this, mask);
    },
    partial(...args) {
      return util_exports.partial(ZodOptional, this, args[0]);
    },
    required(...args) {
      return util_exports.required(ZodNonOptional, this, args[0]);
    }
  });
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...util_exports.normalizeParams(params)
  };
  return new ZodObject(def);
}
function strictObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: never(),
    ...util_exports.normalizeParams(params)
  });
}
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: unknown(),
    ...util_exports.normalizeParams(params)
  });
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => unionProcessor(inst, ctx, json2, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...util_exports.normalizeParams(params)
  });
}
var ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodXor.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => unionProcessor(inst, ctx, json2, params);
  inst.options = def.options;
});
function xor(options, params) {
  return new ZodXor({
    type: "union",
    options,
    inclusive: false,
    ...util_exports.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...util_exports.normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => intersectionProcessor(inst, ctx, json2, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
  $ZodTuple.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => tupleProcessor(inst, ctx, json2, params);
  inst.rest = (rest) => inst.clone({
    ...inst._zod.def,
    rest
  });
});
function tuple(items, _paramsOrRest, _params) {
  const hasRest = _paramsOrRest instanceof $ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple({
    type: "tuple",
    items,
    rest,
    ...util_exports.normalizeParams(params)
  });
}
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  $ZodRecord.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => recordProcessor(inst, ctx, json2, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  if (!valueType || !valueType._zod) {
    return new ZodRecord({
      type: "record",
      keyType: string2(),
      valueType: keyType,
      ...util_exports.normalizeParams(valueType)
    });
  }
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
function partialRecord(keyType, valueType, params) {
  const k = clone(keyType);
  k._zod.values = void 0;
  return new ZodRecord({
    type: "record",
    keyType: k,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
function looseRecord(keyType, valueType, params) {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    mode: "loose",
    ...util_exports.normalizeParams(params)
  });
}
var ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
  $ZodMap.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => mapProcessor(inst, ctx, json2, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function map(keyType, valueType, params) {
  return new ZodMap({
    type: "map",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
  $ZodSet.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => setProcessor(inst, ctx, json2, params);
  inst.min = (...args) => inst.check(_minSize(...args));
  inst.nonempty = (params) => inst.check(_minSize(1, params));
  inst.max = (...args) => inst.check(_maxSize(...args));
  inst.size = (...args) => inst.check(_size(...args));
});
function set(valueType, params) {
  return new ZodSet({
    type: "set",
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => enumProcessor(inst, ctx, json2, params);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum2(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
function nativeEnum(entries, params) {
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => literalProcessor(inst, ctx, json2, params);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util_exports.normalizeParams(params)
  });
}
var ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
  $ZodFile.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => fileProcessor(inst, ctx, json2, params);
  inst.min = (size, params) => inst.check(_minSize(size, params));
  inst.max = (size, params) => inst.check(_maxSize(size, params));
  inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
  return _file(ZodFile, params);
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => transformProcessor(inst, ctx, json2, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(util_exports.issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(util_exports.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        payload.fallback = true;
        return payload;
      });
    }
    payload.value = output;
    payload.fallback = true;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => optionalProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => optionalProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => nullableProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
function nullish2(innerType) {
  return optional(nullable(innerType));
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => defaultProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default2(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => prefaultProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => nonoptionalProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
  $ZodSuccess.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => successProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
  return new ZodSuccess({
    type: "success",
    innerType
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => catchProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch2(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
var ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
  $ZodNaN.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => nanProcessor(inst, ctx, json2, params);
});
function nan(params) {
  return _nan(ZodNaN, params);
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => pipeProcessor(inst, ctx, json2, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
  ZodPipe.init(inst, def);
  $ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
  return new ZodCodec({
    type: "pipe",
    in: in_,
    out,
    transform: params.decode,
    reverseTransform: params.encode
  });
}
function invertCodec(codec2) {
  const def = codec2._zod.def;
  return new ZodCodec({
    type: "pipe",
    in: def.out,
    out: def.in,
    transform: def.reverseTransform,
    reverseTransform: def.transform
  });
}
var ZodPreprocess = /* @__PURE__ */ $constructor("ZodPreprocess", (inst, def) => {
  ZodPipe.init(inst, def);
  $ZodPreprocess.init(inst, def);
});
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => readonlyProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
  $ZodTemplateLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => templateLiteralProcessor(inst, ctx, json2, params);
});
function templateLiteral(parts, params) {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
  $ZodLazy.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => lazyProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
var ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
  $ZodPromise.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => promiseProcessor(inst, ctx, json2, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
  return new ZodPromise({
    type: "promise",
    innerType
  });
}
var ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
  $ZodFunction.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => functionProcessor(inst, ctx, json2, params);
});
function _function(params) {
  return new ZodFunction({
    type: "function",
    input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array(unknown()),
    output: params?.output ?? unknown()
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json2, params) => customProcessor(inst, ctx, json2, params);
});
function check(fn) {
  const ch = new $ZodCheck({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  ch._zod.check = fn;
  return ch;
}
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
  return _superRefine(fn, params);
}
var describe2 = describe;
var meta2 = meta;
function _instanceof(cls, params = {}) {
  const inst = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: (data) => data instanceof cls,
    abort: true,
    ...util_exports.normalizeParams(params)
  });
  inst._zod.bag.Class = cls;
  inst._zod.check = (payload) => {
    if (!(payload.value instanceof cls)) {
      payload.issues.push({
        code: "invalid_type",
        expected: cls.name,
        input: payload.value,
        inst,
        path: [...inst._zod.def.path ?? []]
      });
    }
  };
  return inst;
}
var stringbool = (...args) => _stringbool({
  Codec: ZodCodec,
  Boolean: ZodBoolean,
  String: ZodString
}, ...args);
function json(params) {
  const jsonSchema = lazy(() => {
    return union([string2(params), number2(), boolean2(), _null3(), array(jsonSchema), record(string2(), jsonSchema)]);
  });
  return jsonSchema;
}
function preprocess(fn, schema) {
  return new ZodPreprocess({
    type: "pipe",
    in: transform(fn),
    out: schema
  });
}

// node_modules/zod/v4/classic/compat.js
var ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function setErrorMap(map2) {
  config({
    customError: map2
  });
}
function getErrorMap() {
  return config().customError;
}
var ZodFirstPartyTypeKind;
/* @__PURE__ */ (function(ZodFirstPartyTypeKind2) {
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));

// node_modules/zod/v4/classic/from-json-schema.js
var z = {
  ...schemas_exports2,
  ...checks_exports2,
  iso: iso_exports
};
var RECOGNIZED_KEYS = /* @__PURE__ */ new Set([
  // Schema identification
  "$schema",
  "$ref",
  "$defs",
  "definitions",
  // Core schema keywords
  "$id",
  "id",
  "$comment",
  "$anchor",
  "$vocabulary",
  "$dynamicRef",
  "$dynamicAnchor",
  // Type
  "type",
  "enum",
  "const",
  // Composition
  "anyOf",
  "oneOf",
  "allOf",
  "not",
  // Object
  "properties",
  "required",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "minProperties",
  "maxProperties",
  // Array
  "items",
  "prefixItems",
  "additionalItems",
  "minItems",
  "maxItems",
  "uniqueItems",
  "contains",
  "minContains",
  "maxContains",
  // String
  "minLength",
  "maxLength",
  "pattern",
  "format",
  // Number
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "multipleOf",
  // Already handled metadata
  "description",
  "default",
  // Content
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  // Unsupported (error-throwing)
  "unevaluatedItems",
  "unevaluatedProperties",
  "if",
  "then",
  "else",
  "dependentSchemas",
  "dependentRequired",
  // OpenAPI
  "nullable",
  "readOnly"
]);
function detectVersion(schema, defaultTarget) {
  const $schema = schema.$schema;
  if ($schema === "https://json-schema.org/draft/2020-12/schema") {
    return "draft-2020-12";
  }
  if ($schema === "http://json-schema.org/draft-07/schema#") {
    return "draft-7";
  }
  if ($schema === "http://json-schema.org/draft-04/schema#") {
    return "draft-4";
  }
  return defaultTarget ?? "draft-2020-12";
}
function resolveRef(ref, ctx) {
  if (!ref.startsWith("#")) {
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  }
  const path2 = ref.slice(1).split("/").filter(Boolean);
  if (path2.length === 0) {
    return ctx.rootSchema;
  }
  const defsKey = ctx.version === "draft-2020-12" ? "$defs" : "definitions";
  if (path2[0] === defsKey) {
    const key = path2[1];
    if (!key || !ctx.defs[key]) {
      throw new Error(`Reference not found: ${ref}`);
    }
    return ctx.defs[key];
  }
  throw new Error(`Reference not found: ${ref}`);
}
function convertBaseSchema(schema, ctx) {
  if (schema.not !== void 0) {
    if (typeof schema.not === "object" && Object.keys(schema.not).length === 0) {
      return z.never();
    }
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (schema.unevaluatedItems !== void 0) {
    throw new Error("unevaluatedItems is not supported");
  }
  if (schema.unevaluatedProperties !== void 0) {
    throw new Error("unevaluatedProperties is not supported");
  }
  if (schema.if !== void 0 || schema.then !== void 0 || schema.else !== void 0) {
    throw new Error("Conditional schemas (if/then/else) are not supported");
  }
  if (schema.dependentSchemas !== void 0 || schema.dependentRequired !== void 0) {
    throw new Error("dependentSchemas and dependentRequired are not supported");
  }
  if (schema.$ref) {
    const refPath = schema.$ref;
    if (ctx.refs.has(refPath)) {
      return ctx.refs.get(refPath);
    }
    if (ctx.processing.has(refPath)) {
      return z.lazy(() => {
        if (!ctx.refs.has(refPath)) {
          throw new Error(`Circular reference not resolved: ${refPath}`);
        }
        return ctx.refs.get(refPath);
      });
    }
    ctx.processing.add(refPath);
    const resolved = resolveRef(refPath, ctx);
    const zodSchema2 = convertSchema(resolved, ctx);
    ctx.refs.set(refPath, zodSchema2);
    ctx.processing.delete(refPath);
    return zodSchema2;
  }
  if (schema.enum !== void 0) {
    const enumValues = schema.enum;
    if (ctx.version === "openapi-3.0" && schema.nullable === true && enumValues.length === 1 && enumValues[0] === null) {
      return z.null();
    }
    if (enumValues.length === 0) {
      return z.never();
    }
    if (enumValues.length === 1) {
      return z.literal(enumValues[0]);
    }
    if (enumValues.every((v) => typeof v === "string")) {
      return z.enum(enumValues);
    }
    const literalSchemas = enumValues.map((v) => z.literal(v));
    if (literalSchemas.length < 2) {
      return literalSchemas[0];
    }
    return z.union([literalSchemas[0], literalSchemas[1], ...literalSchemas.slice(2)]);
  }
  if (schema.const !== void 0) {
    return z.literal(schema.const);
  }
  const type = schema.type;
  if (Array.isArray(type)) {
    const typeSchemas = type.map((t) => {
      const typeSchema = { ...schema, type: t };
      return convertBaseSchema(typeSchema, ctx);
    });
    if (typeSchemas.length === 0) {
      return z.never();
    }
    if (typeSchemas.length === 1) {
      return typeSchemas[0];
    }
    return z.union(typeSchemas);
  }
  if (!type) {
    return z.any();
  }
  let zodSchema;
  switch (type) {
    case "string": {
      let stringSchema = z.string();
      if (schema.format) {
        const format = schema.format;
        if (format === "email") {
          stringSchema = stringSchema.check(z.email());
        } else if (format === "uri" || format === "uri-reference") {
          stringSchema = stringSchema.check(z.url());
        } else if (format === "uuid" || format === "guid") {
          stringSchema = stringSchema.check(z.uuid());
        } else if (format === "date-time") {
          stringSchema = stringSchema.check(z.iso.datetime());
        } else if (format === "date") {
          stringSchema = stringSchema.check(z.iso.date());
        } else if (format === "time") {
          stringSchema = stringSchema.check(z.iso.time());
        } else if (format === "duration") {
          stringSchema = stringSchema.check(z.iso.duration());
        } else if (format === "ipv4") {
          stringSchema = stringSchema.check(z.ipv4());
        } else if (format === "ipv6") {
          stringSchema = stringSchema.check(z.ipv6());
        } else if (format === "mac") {
          stringSchema = stringSchema.check(z.mac());
        } else if (format === "cidr") {
          stringSchema = stringSchema.check(z.cidrv4());
        } else if (format === "cidr-v6") {
          stringSchema = stringSchema.check(z.cidrv6());
        } else if (format === "base64") {
          stringSchema = stringSchema.check(z.base64());
        } else if (format === "base64url") {
          stringSchema = stringSchema.check(z.base64url());
        } else if (format === "e164") {
          stringSchema = stringSchema.check(z.e164());
        } else if (format === "jwt") {
          stringSchema = stringSchema.check(z.jwt());
        } else if (format === "emoji") {
          stringSchema = stringSchema.check(z.emoji());
        } else if (format === "nanoid") {
          stringSchema = stringSchema.check(z.nanoid());
        } else if (format === "cuid") {
          stringSchema = stringSchema.check(z.cuid());
        } else if (format === "cuid2") {
          stringSchema = stringSchema.check(z.cuid2());
        } else if (format === "ulid") {
          stringSchema = stringSchema.check(z.ulid());
        } else if (format === "xid") {
          stringSchema = stringSchema.check(z.xid());
        } else if (format === "ksuid") {
          stringSchema = stringSchema.check(z.ksuid());
        }
      }
      if (typeof schema.minLength === "number") {
        stringSchema = stringSchema.min(schema.minLength);
      }
      if (typeof schema.maxLength === "number") {
        stringSchema = stringSchema.max(schema.maxLength);
      }
      if (schema.pattern) {
        stringSchema = stringSchema.regex(new RegExp(schema.pattern));
      }
      zodSchema = stringSchema;
      break;
    }
    case "number":
    case "integer": {
      let numberSchema = type === "integer" ? z.number().int() : z.number();
      if (typeof schema.minimum === "number") {
        numberSchema = numberSchema.min(schema.minimum);
      }
      if (typeof schema.maximum === "number") {
        numberSchema = numberSchema.max(schema.maximum);
      }
      if (typeof schema.exclusiveMinimum === "number") {
        numberSchema = numberSchema.gt(schema.exclusiveMinimum);
      } else if (schema.exclusiveMinimum === true && typeof schema.minimum === "number") {
        numberSchema = numberSchema.gt(schema.minimum);
      }
      if (typeof schema.exclusiveMaximum === "number") {
        numberSchema = numberSchema.lt(schema.exclusiveMaximum);
      } else if (schema.exclusiveMaximum === true && typeof schema.maximum === "number") {
        numberSchema = numberSchema.lt(schema.maximum);
      }
      if (typeof schema.multipleOf === "number") {
        numberSchema = numberSchema.multipleOf(schema.multipleOf);
      }
      zodSchema = numberSchema;
      break;
    }
    case "boolean": {
      zodSchema = z.boolean();
      break;
    }
    case "null": {
      zodSchema = z.null();
      break;
    }
    case "object": {
      const shape = {};
      const properties = schema.properties || {};
      const requiredSet = new Set(schema.required || []);
      for (const [key, propSchema] of Object.entries(properties)) {
        const propZodSchema = convertSchema(propSchema, ctx);
        shape[key] = requiredSet.has(key) ? propZodSchema : propZodSchema.optional();
      }
      if (schema.propertyNames) {
        const keySchema = convertSchema(schema.propertyNames, ctx);
        const valueSchema = schema.additionalProperties && typeof schema.additionalProperties === "object" ? convertSchema(schema.additionalProperties, ctx) : z.any();
        if (Object.keys(shape).length === 0) {
          zodSchema = z.record(keySchema, valueSchema);
          break;
        }
        const objectSchema2 = z.object(shape).passthrough();
        const recordSchema = z.looseRecord(keySchema, valueSchema);
        zodSchema = z.intersection(objectSchema2, recordSchema);
        break;
      }
      if (schema.patternProperties) {
        const patternProps = schema.patternProperties;
        const patternKeys = Object.keys(patternProps);
        const looseRecords = [];
        for (const pattern of patternKeys) {
          const patternValue = convertSchema(patternProps[pattern], ctx);
          const keySchema = z.string().regex(new RegExp(pattern));
          looseRecords.push(z.looseRecord(keySchema, patternValue));
        }
        const schemasToIntersect = [];
        if (Object.keys(shape).length > 0) {
          schemasToIntersect.push(z.object(shape).passthrough());
        }
        schemasToIntersect.push(...looseRecords);
        if (schemasToIntersect.length === 0) {
          zodSchema = z.object({}).passthrough();
        } else if (schemasToIntersect.length === 1) {
          zodSchema = schemasToIntersect[0];
        } else {
          let result = z.intersection(schemasToIntersect[0], schemasToIntersect[1]);
          for (let i = 2; i < schemasToIntersect.length; i++) {
            result = z.intersection(result, schemasToIntersect[i]);
          }
          zodSchema = result;
        }
        break;
      }
      const objectSchema = z.object(shape);
      if (schema.additionalProperties === false) {
        zodSchema = objectSchema.strict();
      } else if (typeof schema.additionalProperties === "object") {
        zodSchema = objectSchema.catchall(convertSchema(schema.additionalProperties, ctx));
      } else {
        zodSchema = objectSchema.passthrough();
      }
      break;
    }
    case "array": {
      const prefixItems = schema.prefixItems;
      const items = schema.items;
      if (prefixItems && Array.isArray(prefixItems)) {
        const tupleItems = prefixItems.map((item) => convertSchema(item, ctx));
        const rest = items && typeof items === "object" && !Array.isArray(items) ? convertSchema(items, ctx) : void 0;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema.minItems));
        }
        if (typeof schema.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
        }
      } else if (Array.isArray(items)) {
        const tupleItems = items.map((item) => convertSchema(item, ctx));
        const rest = schema.additionalItems && typeof schema.additionalItems === "object" ? convertSchema(schema.additionalItems, ctx) : void 0;
        if (rest) {
          zodSchema = z.tuple(tupleItems).rest(rest);
        } else {
          zodSchema = z.tuple(tupleItems);
        }
        if (typeof schema.minItems === "number") {
          zodSchema = zodSchema.check(z.minLength(schema.minItems));
        }
        if (typeof schema.maxItems === "number") {
          zodSchema = zodSchema.check(z.maxLength(schema.maxItems));
        }
      } else if (items !== void 0) {
        const element = convertSchema(items, ctx);
        let arraySchema = z.array(element);
        if (typeof schema.minItems === "number") {
          arraySchema = arraySchema.min(schema.minItems);
        }
        if (typeof schema.maxItems === "number") {
          arraySchema = arraySchema.max(schema.maxItems);
        }
        zodSchema = arraySchema;
      } else {
        zodSchema = z.array(z.any());
      }
      break;
    }
    default:
      throw new Error(`Unsupported type: ${type}`);
  }
  return zodSchema;
}
function convertSchema(schema, ctx) {
  if (typeof schema === "boolean") {
    return schema ? z.any() : z.never();
  }
  let baseSchema = convertBaseSchema(schema, ctx);
  const hasExplicitType = schema.type || schema.enum !== void 0 || schema.const !== void 0;
  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    const options = schema.anyOf.map((s) => convertSchema(s, ctx));
    const anyOfUnion = z.union(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, anyOfUnion) : anyOfUnion;
  }
  if (schema.oneOf && Array.isArray(schema.oneOf)) {
    const options = schema.oneOf.map((s) => convertSchema(s, ctx));
    const oneOfUnion = z.xor(options);
    baseSchema = hasExplicitType ? z.intersection(baseSchema, oneOfUnion) : oneOfUnion;
  }
  if (schema.allOf && Array.isArray(schema.allOf)) {
    if (schema.allOf.length === 0) {
      baseSchema = hasExplicitType ? baseSchema : z.any();
    } else {
      let result = hasExplicitType ? baseSchema : convertSchema(schema.allOf[0], ctx);
      const startIdx = hasExplicitType ? 0 : 1;
      for (let i = startIdx; i < schema.allOf.length; i++) {
        result = z.intersection(result, convertSchema(schema.allOf[i], ctx));
      }
      baseSchema = result;
    }
  }
  if (schema.nullable === true && ctx.version === "openapi-3.0") {
    baseSchema = z.nullable(baseSchema);
  }
  if (schema.readOnly === true) {
    baseSchema = z.readonly(baseSchema);
  }
  if (schema.default !== void 0) {
    baseSchema = baseSchema.default(schema.default);
  }
  const extraMeta = {};
  const coreMetadataKeys = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (const key of coreMetadataKeys) {
    if (key in schema) {
      extraMeta[key] = schema[key];
    }
  }
  const contentMetadataKeys = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (const key of contentMetadataKeys) {
    if (key in schema) {
      extraMeta[key] = schema[key];
    }
  }
  for (const key of Object.keys(schema)) {
    if (!RECOGNIZED_KEYS.has(key)) {
      extraMeta[key] = schema[key];
    }
  }
  if (Object.keys(extraMeta).length > 0) {
    ctx.registry.add(baseSchema, extraMeta);
  }
  if (schema.description) {
    baseSchema = baseSchema.describe(schema.description);
  }
  return baseSchema;
}
function fromJSONSchema(schema, params) {
  if (typeof schema === "boolean") {
    return schema ? z.any() : z.never();
  }
  let normalized;
  try {
    normalized = JSON.parse(JSON.stringify(schema));
  } catch {
    throw new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
  }
  const version2 = detectVersion(normalized, params?.defaultTarget);
  const defs = normalized.$defs || normalized.definitions || {};
  const ctx = {
    version: version2,
    defs,
    refs: /* @__PURE__ */ new Map(),
    processing: /* @__PURE__ */ new Set(),
    rootSchema: normalized,
    registry: params?.registry ?? globalRegistry
  };
  return convertSchema(normalized, ctx);
}

// node_modules/zod/v4/classic/coerce.js
var coerce_exports = {};
__export(coerce_exports, {
  bigint: () => bigint3,
  boolean: () => boolean3,
  date: () => date4,
  number: () => number3,
  string: () => string3
});
function string3(params) {
  return _coercedString(ZodString, params);
}
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean3(params) {
  return _coercedBoolean(ZodBoolean, params);
}
function bigint3(params) {
  return _coercedBigint(ZodBigInt, params);
}
function date4(params) {
  return _coercedDate(ZodDate, params);
}

// node_modules/zod/v4/classic/external.js
config(en_default());

// src/workflow/types.ts
var THINKING_LEVELS = ["off", "minimal", "low", "medium", "high", "xhigh"];
var ALL_TOOLS = ["read", "bash", "edit", "write", "grep", "find", "ls"];

// src/policy/loader.ts
var BehaviorSchema = external_exports.enum(["CHAT", "PLAN", "REVIEW", "CODE", "SUGGEST"]);
var ThinkingLevelSchema = external_exports.enum(["off", "minimal", "low", "medium", "high", "xhigh"]);
var ConstraintSchema = external_exports.enum([
  "code_only",
  "no_comments",
  "no_refactor",
  "no_code_output",
  "suggest_only",
  "scope_limited"
]);
var ToolNameSchema = external_exports.enum(ALL_TOOLS);
var ContextBudgetSchema = external_exports.object({
  maxFiles: external_exports.number(),
  maxChars: external_exports.number()
});
var OutputConstraintSchema = external_exports.object({
  maxTokens: external_exports.number()
});
var PolicyEntrySchema = external_exports.object({
  behavior: BehaviorSchema,
  workflow: external_exports.string().min(1),
  provider: external_exports.string(),
  pool: external_exports.array(external_exports.string()).min(1),
  thinking: ThinkingLevelSchema,
  contextBudget: ContextBudgetSchema,
  constraints: external_exports.array(ConstraintSchema),
  output: OutputConstraintSchema.optional(),
  allowedTools: external_exports.array(ToolNameSchema).min(1).optional()
});
var PolicySettingsSchema = external_exports.object({
  diffLinesEscalationThreshold: external_exports.number().positive(),
  diffLinesEscalationBehaviors: external_exports.array(BehaviorSchema).min(1)
});
var PolicyFileSchema = external_exports.object({
  settings: PolicySettingsSchema,
  policies: external_exports.array(PolicyEntrySchema).min(1)
});
function loadPolicies(filePath) {
  const raw = readFileSync(filePath, "utf-8");
  const parsed = JSON.parse(raw);
  const result = PolicyFileSchema.safeParse(parsed);
  if (!result.success) {
    const issues = result.error.issues.map((issue2) => `  - ${issue2.path.join(".") || "(root)"}: ${issue2.message}`).join("\n");
    throw new Error(`${filePath} is invalid:
${issues}`);
  }
  return result.data;
}

// src/telemetry/debugLogger.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
function getProjectRoot(currentDir) {
  const root = path.parse(currentDir).root;
  let dir = currentDir;
  while (dir !== root) {
    if (fs.existsSync(path.join(dir, "package.json"))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  return currentDir;
}
var PROJECT_ROOT = getProjectRoot(__dirname);
var LOG_FILE = path.join(PROJECT_ROOT, "ay-pi.debug.log");
var TELEMETRY_FILE = path.join(PROJECT_ROOT, "ay-pi.telemetry.jsonl");
var DebugLogger = class _DebugLogger {
  static instance = new _DebugLogger();
  enabled = true;
  startTime = 0;
  startTimestamp = "";
  logs = [];
  // Data bags
  input = "";
  ruleEngine = {
    regex: [],
    confidence: 0,
    decision: "UNRESOLVED"
  };
  semanticEngine = {
    invoked: false,
    modelLoadedBefore: false,
    loadingModel: false,
    embeddingTimeMs: 0,
    scores: {},
    threshold: 0,
    decision: "UNRESOLVED"
  };
  workflowResolver = {
    behavior: "",
    explicitCommand: void 0,
    scores: {},
    selected: "",
    isDefaultFallback: false
  };
  policy = {
    selected: "",
    reasoning: "",
    model: "",
    tools: []
  };
  adapter = {
    target: "",
    name: "",
    systemPrompt: ""
  };
  finalResult = {
    behavior: "",
    workflow: "",
    policy: ""
  };
  fallback = "";
  contextStrategy = {
    focusTargets: [],
    repositoryScan: "",
    expectedGoal: "",
    reason: ""
  };
  static getInstance() {
    return _DebugLogger.instance;
  }
  start(input) {
    if (!this.enabled) return;
    this.startTime = performance.now();
    this.startTimestamp = (/* @__PURE__ */ new Date()).toISOString();
    this.input = input;
    this.ruleEngine = { regex: [], confidence: 0, decision: "UNRESOLVED" };
    this.semanticEngine = { invoked: false, modelLoadedBefore: false, loadingModel: false, embeddingTimeMs: 0, scores: {}, threshold: 0, decision: "UNRESOLVED" };
    this.workflowResolver = { behavior: "", explicitCommand: void 0, scores: {}, selected: "", isDefaultFallback: false };
    this.policy = { selected: "", reasoning: "", model: "", tools: [] };
    this.adapter = { target: "", name: "", systemPrompt: "" };
    this.finalResult = { behavior: "", workflow: "", policy: "" };
    this.fallback = "";
    this.contextStrategy = { focusTargets: [], repositoryScan: "", expectedGoal: "", reason: "" };
  }
  print() {
    if (!this.enabled) return;
    const totalTime = Math.round(performance.now() - this.startTime);
    let output = `
--------------------------------------------------
AY-PI Routing Debug
--------------------------------------------------

`;
    output += `Input:
"${this.input}"

`;
    output += `----------------------------------------

Rule Engine

`;
    output += `Regex:
[${this.ruleEngine.regex.join(", ")}]

`;
    output += `Confidence:
${this.ruleEngine.confidence.toFixed(2)}

`;
    output += `Decision:
${this.ruleEngine.decision}

`;
    if (this.semanticEngine.invoked) {
      output += `----------------------------------------

Semantic Engine

`;
      output += `Model:
Xenova/multilingual-e5-small

`;
      output += `Loaded:
${this.semanticEngine.modelLoadedBefore}

`;
      output += `Load Source:
${this.semanticEngine.modelLoadedBefore ? "memory" : "disk"}

`;
      output += `Loading Model:
${this.semanticEngine.loadingModel ? "YES" : "NO"}

`;
      output += `Embedding Time:
${this.semanticEngine.embeddingTimeMs}ms

`;
      output += `Similarity Scores:

`;
      for (const [bh, data] of Object.entries(this.semanticEngine.scores)) {
        output += `Behavior: ${bh}
Description: ${data.description}
Score: ${data.score.toFixed(2)}

`;
      }
      output += `Threshold:
${this.semanticEngine.threshold}

`;
      output += `Decision:
${this.semanticEngine.decision}

`;
    }
    if (this.fallback) {
      output += `Fallback:

${this.fallback}

`;
    }
    output += `----------------------------------------

Workflow Resolver

`;
    output += `Behavior:
${this.workflowResolver.behavior}

`;
    if (this.workflowResolver.explicitCommand) {
      output += `Explicit Command:
${this.workflowResolver.explicitCommand}

`;
    }
    if (Object.keys(this.workflowResolver.scores).length > 0) {
      output += `Workflow Scores:

`;
      for (const [wf, score] of Object.entries(this.workflowResolver.scores)) {
        output += `${wf.padEnd(10)}: ${score.toFixed(2)}
`;
      }
      output += `
`;
    }
    output += `Selected Workflow:

${this.workflowResolver.selected}

`;
    if (this.workflowResolver.isDefaultFallback) {
      output += `Default Fallback:
YES

`;
    }
    output += `----------------------------------------

Policy

`;
    output += `Selected Policy:

${this.policy.selected}

`;
    output += `Reasoning:
${this.policy.reasoning}

`;
    output += `Model:

${this.policy.model}

`;
    output += `Tools:

${this.policy.tools.join("\n")}

`;
    output += `----------------------------------------

Adapter

`;
    output += `Target:

${this.adapter.target}

`;
    output += `Adapter:

${this.adapter.name}

`;
    output += `--------------------------------------------------
Context Strategy
--------------------------------------------------

`;
    output += `Behavior:

${this.finalResult.behavior}

`;
    output += `Workflow:

${this.finalResult.workflow}

`;
    output += `Reasoning:

${this.policy.reasoning}

`;
    const firstModel = this.policy.model.split(",")[0].trim();
    output += `Selected Model:

${firstModel}

`;
    output += `Target:

${this.adapter.target}

`;
    output += `--------------------------------------------------
Context Instructions

`;
    output += `Required Files:

- N/A

`;
    output += `Optional Files:

- N/A

`;
    output += `Avoid Reading:

- N/A

`;
    output += `Focus Targets:

${this.contextStrategy.focusTargets.length > 0 ? this.contextStrategy.focusTargets.join(", ") : "None"}

`;
    output += `Repository Scan:

${this.contextStrategy.repositoryScan}

`;
    output += `Expected Goal:

${this.contextStrategy.expectedGoal}

`;
    output += `Reason:

${this.contextStrategy.reason}

`;
    output += `--------------------------------------------------
Prompt Preview

`;
    output += `${this.adapter.systemPrompt}

`;
    output += `--------------------------------------------------
Estimated Prompt Size

`;
    const chars = this.adapter.systemPrompt.length;
    const tokens = Math.ceil(chars / 4);
    output += `Characters:

${chars}

`;
    output += `Estimated Tokens:

${tokens}

`;
    output += `----------------------------------------

FINAL RESULT

`;
    output += `Behavior:
${this.finalResult.behavior}

`;
    output += `Workflow:
${this.finalResult.workflow}

`;
    output += `Policy:
${this.finalResult.policy}

`;
    output += `----------------------------------------

Total Routing Time:

${totalTime}ms

==================================================
`;
    try {
      fs.appendFileSync(LOG_FILE, output);
    } catch (err) {
      console.error("Failed to write debug log to", LOG_FILE, err);
    }
    const record2 = {
      timestamp: this.startTimestamp,
      routingTimeMs: totalTime,
      input: this.input,
      ruleEngine: {
        regex: this.ruleEngine.regex,
        confidence: Number(this.ruleEngine.confidence.toFixed(3)),
        decision: this.ruleEngine.decision
      },
      semanticEngine: this.semanticEngine.invoked ? {
        invoked: true,
        embeddingTimeMs: this.semanticEngine.embeddingTimeMs,
        scores: Object.fromEntries(
          Object.entries(this.semanticEngine.scores).map(([k, v]) => [
            k,
            Number(v.score.toFixed(3))
          ])
        ),
        threshold: this.semanticEngine.threshold,
        decision: this.semanticEngine.decision
      } : { invoked: false },
      workflow: {
        behavior: this.finalResult.behavior,
        workflow: this.finalResult.workflow,
        policy: this.finalResult.policy,
        reasoning: this.policy.reasoning,
        model: this.policy.model.split(",")[0].trim(),
        tools: this.policy.tools
      },
      context: {
        focusTargets: this.contextStrategy.focusTargets,
        repositoryScan: this.contextStrategy.repositoryScan,
        expectedGoal: this.contextStrategy.expectedGoal
      }
    };
    try {
      fs.appendFileSync(TELEMETRY_FILE, JSON.stringify(record2) + "\n");
    } catch (err) {
      console.error("Failed to write telemetry to", TELEMETRY_FILE, err);
    }
  }
};

// src/behavior/ruleEngine.ts
var BEHAVIOR_COMMANDS = {
  "/chat": "CHAT",
  "/plan": "PLAN",
  "/review": "REVIEW",
  "/code": "CODE",
  "/suggest": "SUGGEST"
};
function resolveBehaviorByRule(signal) {
  const logger = DebugLogger.getInstance();
  const explicit = BEHAVIOR_COMMANDS[signal.command];
  if (explicit) {
    logger.ruleEngine.confidence = 1;
    logger.ruleEngine.decision = explicit;
    return {
      behavior: explicit,
      confidence: 1,
      source: "rule",
      ruleId: `behavior::command.${signal.command.slice(1)}`
    };
  }
  logger.ruleEngine.confidence = 0;
  logger.ruleEngine.decision = "UNRESOLVED";
  return null;
}

// src/behavior/semanticEngine.ts
import { pipeline } from "@xenova/transformers";

// src/behavior/catalog.json
var catalog_default = [
  {
    id: "CHAT",
    description: "general conversation, greetings, thanks, explanations, casual chat, teaching, summarizing, translating, non-technical discussion, no code changes.",
    embedding: [
      0.03302110731601715,
      -0.028386756777763367,
      -0.049328286200761795,
      -0.034921370446681976,
      0.05149782821536064,
      -0.039765406399965286,
      0.019492072984576225,
      0.014940667897462845,
      0.03859139233827591,
      0.0019145503174513578,
      0.021811727434396744,
      0.006464592181146145,
      0.07880645245313644,
      -0.02085656113922596,
      -0.030217386782169342,
      0.09238068014383316,
      0.05144140496850014,
      -0.008715338073670864,
      -0.00372671103104949,
      -0.028112206608057022,
      0.0572492741048336,
      -0.02242317795753479,
      -0.07689282298088074,
      0.017281424254179,
      0.07844921201467514,
      0.055075354874134064,
      0.00734287453815341,
      0.023434190079569817,
      0.03291071578860283,
      -0.07393351942300797,
      -0.03315909579396248,
      -0.007675568573176861,
      0.050416648387908936,
      -0.060455068945884705,
      0.030214836820960045,
      0.02257276140153408,
      -0.052029624581336975,
      -0.013271315954625607,
      0.05574280768632889,
      -0.08131467550992966,
      -0.025360066443681717,
      0.03997974470257759,
      0.04506054148077965,
      0.05880146846175194,
      0.05360518395900726,
      0.07878804951906204,
      -0.04247600585222244,
      0.07432638853788376,
      -0.04371272027492523,
      -0.021445242688059807,
      -0.02077953703701496,
      0.0346863828599453,
      0.028848685324192047,
      0.08812707662582397,
      0.02263779751956463,
      -0.06820812076330185,
      -0.06241399049758911,
      -0.015205013565719128,
      -0.05527842417359352,
      0.02161339297890663,
      0.05642157793045044,
      -0.06553322076797485,
      0.010010022670030594,
      0.022685814648866653,
      0.09164068102836609,
      0.06272568553686142,
      0.051876384764909744,
      0.0393119715154171,
      -0.05291779711842537,
      0.008852253668010235,
      -0.031345270574092865,
      0.05763853341341019,
      -0.02666977420449257,
      -0.011309145018458366,
      0.013479143381118774,
      0.026246685534715652,
      0.008853388950228691,
      -0.04922517389059067,
      0.05223465710878372,
      -0.0458780862390995,
      -0.09718649834394455,
      -0.047428198158741,
      -0.0682312548160553,
      0.03273649886250496,
      -0.050372250378131866,
      0.04473452642560005,
      0.04255019873380661,
      -0.07303876429796219,
      0.08138782531023026,
      -0.022389354184269905,
      0.03989517316222191,
      0.0086465273052454,
      -0.07749684900045395,
      -0.04039487987756729,
      -0.09264544397592545,
      -0.0752829760313034,
      -0.06522922962903976,
      0.06616382300853729,
      0.07150975614786148,
      -0.035019390285015106,
      0.05091644078493118,
      0.009320617653429508,
      0.022349759936332703,
      -0.07494937628507614,
      -0.008616946637630463,
      0.03028976172208786,
      0.038043729960918427,
      -0.0355876162648201,
      0.031583163887262344,
      -0.04791218042373657,
      -0.04747231677174568,
      0.02170555666089058,
      0.09826871007680893,
      0.028888141736388206,
      -0.04959898069500923,
      -0.07461865246295929,
      -0.022245781496167183,
      -0.025888532400131226,
      0.03588506206870079,
      -0.0964464545249939,
      0.031085969880223274,
      0.01201364304870367,
      -0.018939245492219925,
      -0.03289716690778732,
      -0.08000658452510834,
      -0.03991321474313736,
      0.06066050007939339,
      0.025625400245189667,
      -0.04058639332652092,
      0.0328768752515316,
      0.009417007677257061,
      0.02557082287967205,
      0.015580598264932632,
      0.04553384706377983,
      0.059864986687898636,
      0.1130082756280899,
      -0.02655612863600254,
      0.04702959209680557,
      -9403916774317622e-19,
      -0.006815319415181875,
      -0.03629247471690178,
      0.04630965366959572,
      -0.01521508302539587,
      0.06252042949199677,
      0.07535448670387268,
      0.04477858915925026,
      0.03077174350619316,
      -0.015777194872498512,
      0.08423236012458801,
      -0.059578295797109604,
      0.059784624725580215,
      -0.02413998544216156,
      0.06723157316446304,
      0.033136431127786636,
      0.0059384242631495,
      -0.050624117255210876,
      -0.01863883249461651,
      -0.036585208028554916,
      0.07994348555803299,
      0.044980019330978394,
      -0.051278699189424515,
      -0.04411369189620018,
      -0.0730029046535492,
      -0.04252399876713753,
      -0.043543800711631775,
      -0.03245342895388603,
      0.008820629678666592,
      0.040913961827754974,
      -0.04235994070768356,
      -0.008807496167719364,
      -0.08275237679481506,
      0.07331344485282898,
      -0.05946514382958412,
      0.04615223407745361,
      -0.0030247820541262627,
      0.01696843095123768,
      -0.06146520376205444,
      0.04429008439183235,
      0.0692039281129837,
      0.05401794612407684,
      -0.006982472725212574,
      -0.010552257299423218,
      -0.006414514500647783,
      -0.0076161520555615425,
      -0.10528822243213654,
      -0.05907813087105751,
      -0.047469612210989,
      0.020394589751958847,
      0.03282880783081055,
      -0.042735617607831955,
      -4901856300421059e-19,
      0.024837037548422813,
      -0.07823862135410309,
      -0.07288969308137894,
      -0.07842560857534409,
      0.011491751298308372,
      -0.025978172197937965,
      0.043537333607673645,
      0.05428090691566467,
      0.03257818520069122,
      -0.0595247820019722,
      -0.014947169460356236,
      0.03457687422633171,
      0.025659210979938507,
      0.019337942823767662,
      0.001404807437211275,
      -0.03353835642337799,
      0.05920220911502838,
      -0.04340473935008049,
      0.051696501672267914,
      0.04692710563540459,
      -0.06506380438804626,
      -0.08751144260168076,
      0.05471252277493477,
      -0.026682501658797264,
      -0.029914701357483864,
      -0.018486563116312027,
      0.04864257946610451,
      -0.024449247866868973,
      0.04696374014019966,
      0.053759995847940445,
      -0.003702887101098895,
      0.03080880641937256,
      -0.08253855258226395,
      -0.0847434252500534,
      0.0725916400551796,
      0.06363315880298615,
      -0.060416437685489655,
      -0.044515468180179596,
      0.047335539013147354,
      -0.06718368083238602,
      -0.014627507887780666,
      -0.06506165862083435,
      -0.061305008828639984,
      -0.04936361685395241,
      -0.07392607629299164,
      0.002306521637365222,
      0.046631112694740295,
      0.03922650218009949,
      -0.03057260625064373,
      -0.03067978285253048,
      -0.0450035035610199,
      0.07445158064365387,
      -0.10108846426010132,
      0.04146943241357803,
      -0.033958643674850464,
      -0.025690393522381783,
      0.06017705798149109,
      -0.007954075001180172,
      0.07019346207380295,
      0.01838492415845394,
      -0.06532606482505798,
      -0.032865654677152634,
      -0.03935224935412407,
      -0.03124786913394928,
      0.0236570592969656,
      0.07500328123569489,
      0.07625744491815567,
      -0.07859384268522263,
      0.051071278750896454,
      0.01842094399034977,
      -0.05530049651861191,
      0.09431301057338715,
      0.047264520078897476,
      0.04283547028899193,
      0.016162285581231117,
      -0.04232726991176605,
      0.008171006105840206,
      -0.06969697773456573,
      -0.0214458629488945,
      -0.06792419403791428,
      0.0023577669635415077,
      0.03370857611298561,
      -0.05031076818704605,
      -0.07527709752321243,
      -0.04370059072971344,
      -0.0019273575162515044,
      0.09249453246593475,
      -0.06066287308931351,
      -0.011644632555544376,
      -8962537976913154e-19,
      -0.04036395624279976,
      0.03636801615357399,
      0.04111627861857414,
      0.038641028106212616,
      -0.014687889255583286,
      774459564127028e-18,
      0.06313242763280869,
      -0.015654219314455986,
      -0.04196951910853386,
      0.009062939323484898,
      -0.09608709067106247,
      0.027778318151831627,
      -0.020101310685276985,
      0.049525827169418335,
      0.0044464594684541225,
      0.01677032932639122,
      0.09641122072935104,
      -0.04587344080209732,
      0.07209715992212296,
      -0.04218384623527527,
      -0.05686214566230774,
      0.0365326814353466,
      0.050818800926208496,
      -0.10632417351007462,
      0.06537754833698273,
      -0.005662407260388136,
      0.005308352876454592,
      0.04405772686004639,
      0.029823312535881996,
      0.03764476254582405,
      0.0692797377705574,
      -0.034686215221881866,
      -0.04631428048014641,
      0.10715439170598984,
      0.0691482424736023,
      -0.03407905250787735,
      0.05186336860060692,
      -0.03972902148962021,
      -0.02625700831413269,
      -0.045639291405677795,
      -0.06648880243301392,
      -0.002134744543582201,
      -0.046510662883520126,
      0.02119210734963417,
      0.06298349797725677,
      -0.09065736085176468,
      -0.010665856301784515,
      0.03630870580673218,
      -0.010364746674895287,
      0.05300069600343704,
      -0.028639161959290504,
      -0.03788149356842041,
      0.01384590845555067,
      -0.03926945850253105,
      0.01184770092368126,
      -0.04220462217926979,
      0.06575318425893784,
      -0.08108915388584137,
      -0.06350377947092056,
      -0.003509266534820199,
      0.02570548839867115,
      -0.03476295247673988,
      0.06848226487636566,
      -0.04770448058843613,
      -0.09592456370592117,
      0.02028948999941349,
      -0.03814822807908058,
      0.011342105455696583,
      0.037801872938871384,
      0.08892816305160522,
      -0.09498186409473419,
      0.04722638055682182,
      0.10746487975120544,
      -0.03880401700735092,
      0.05371231958270073,
      -0.11557094752788544,
      -0.0033541598822921515,
      0.09241703897714615,
      0.09552964568138123,
      -0.05698781833052635,
      -0.05994434654712677,
      0.02010454423725605,
      0.04920201376080513,
      0.075180783867836,
      0.03365636244416237,
      -0.005684199742972851,
      -0.006076335441321135,
      0.025236649438738823,
      -0.05898881331086159,
      0.06652124226093292,
      0.05021001771092415,
      -0.09330014139413834,
      -0.020561715587973595,
      -0.07928897440433502,
      -0.06522903591394424,
      -0.0491943322122097,
      0.03988208249211311,
      -0.08830694109201431,
      -0.04652542993426323,
      -0.004860043991357088,
      0.0706506296992302,
      0.05778610333800316,
      0.06799653172492981
    ]
  },
  {
    id: "PLAN",
    description: "brainstorming, design exploration, visual direction, color palette ideas, UI and UX concepts, architecture planning, strategy, roadmap, comparisons, recommendations before implementation, concept creation, decision support for design choices. (tasar\u0131m fikirleri, plan, \xF6neri, renk)",
    embedding: [
      -0.0037338880356401205,
      -0.046754542738199234,
      -0.02376411482691765,
      -0.02603038027882576,
      0.10162734240293503,
      -0.05983878672122955,
      0.04187927767634392,
      0.03770217299461365,
      0.031181419268250465,
      0.012784842401742935,
      0.051772553473711014,
      -0.013748862780630589,
      0.08376748859882355,
      -0.0041064308024942875,
      -0.03609250485897064,
      0.038916073739528656,
      0.05375306308269501,
      -0.04169151559472084,
      -0.08006887882947922,
      -0.018355732783675194,
      0.0019453732529655099,
      -0.015120582655072212,
      -0.025943204760551453,
      0.04357867315411568,
      0.06277280300855637,
      0.050787556916475296,
      -0.036591559648513794,
      -0.01937180943787098,
      0.043803516775369644,
      -0.07409284263849258,
      -0.06094309315085411,
      -0.0540962889790535,
      0.04448097571730614,
      -0.053168680518865585,
      0.0026835338212549686,
      0.043533168733119965,
      -0.048529330641031265,
      -0.009601317346096039,
      0.0293890293687582,
      -0.06158110499382019,
      0.016912022605538368,
      0.005259200930595398,
      0.09157983213663101,
      0.045439213514328,
      0.0810932144522667,
      0.0736885592341423,
      -0.038332197815179825,
      0.022676127031445503,
      -0.07543816417455673,
      -0.012581518851220608,
      -0.052995916455984116,
      0.06654242426156998,
      0.035175424069166183,
      0.06041725352406502,
      -0.007082218769937754,
      -0.05776617303490639,
      -0.024362584576010704,
      -0.03687966614961624,
      -0.03586000204086304,
      0.030183421447873116,
      0.029456837102770805,
      -0.06047701835632324,
      0.02547621540725231,
      0.021865935996174812,
      0.04872826486825943,
      0.05858578905463219,
      0.05423605069518089,
      0.0340472087264061,
      -0.060624536126852036,
      -0.05666442960500717,
      -0.04632513225078583,
      0.05534394457936287,
      -0.008485926315188408,
      -0.05769911780953407,
      0.006660975981503725,
      0.044263098388910294,
      0.040857452899217606,
      -0.05440707877278328,
      0.03623369708657265,
      -0.04352571442723274,
      -0.10124891996383667,
      -0.04353330656886101,
      -0.01871861331164837,
      0.029186757281422615,
      -0.0769784152507782,
      0.0752173364162445,
      0.039437972009181976,
      -0.05233050510287285,
      0.05944884568452835,
      -0.02365075796842575,
      0.026644619181752205,
      0.06094267964363098,
      -0.08701600879430771,
      -0.020637881010770798,
      -0.1049213632941246,
      -0.10057327151298523,
      -0.07190611213445663,
      0.08652196079492569,
      0.08471522480249405,
      -0.043180231004953384,
      0.02385704778134823,
      -0.007574868388473988,
      0.024455271661281586,
      -0.10010094195604324,
      -0.06758342683315277,
      0.014470630325376987,
      -0.0019994021859019995,
      -0.006886257324367762,
      0.056711066514253616,
      -0.05275968834757805,
      -0.03840023651719093,
      0.031046245247125626,
      0.025103406980633736,
      0.057505037635564804,
      -0.0015480662696063519,
      -0.035467203706502914,
      -0.01961558870971203,
      -0.06855784356594086,
      0.06442353874444962,
      -0.05859380587935448,
      0.08315864205360413,
      -0.01722087152302265,
      -0.09675484150648117,
      -0.08314983546733856,
      -0.05756056308746338,
      -0.03200671821832657,
      0.07117357105016708,
      0.07688124477863312,
      0.02276529371738434,
      -0.012165214866399765,
      0.02473219484090805,
      0.03706437721848488,
      0.05508996918797493,
      0.04057633876800537,
      0.07171148806810379,
      0.06876139342784882,
      -0.014864204451441765,
      0.027836164459586143,
      -0.02344747819006443,
      0.0020161529537290335,
      -0.025733353570103645,
      0.08339834213256836,
      -0.029402868822216988,
      0.06078437715768814,
      0.05921895429491997,
      0.0525144599378109,
      0.046236466616392136,
      -0.04905233904719353,
      0.029560565948486328,
      0.0020179590210318565,
      0.07106173038482666,
      -0.00657424284145236,
      0.0416572242975235,
      0.019847240298986435,
      0.04757228493690491,
      -0.051021672785282135,
      -0.032584067434072495,
      -0.03816942870616913,
      0.07727805525064468,
      0.06830484420061111,
      -0.04354533925652504,
      -0.011505624279379845,
      -0.044719576835632324,
      -0.02238842099905014,
      -0.05251939222216606,
      -0.07098768651485443,
      0.05547799915075302,
      0.03753671050071716,
      -0.030748508870601654,
      -0.0124660674482584,
      -0.09198468923568726,
      0.051029957830905914,
      -0.029385851696133614,
      0.03281073644757271,
      0.016604634001851082,
      0.05416051670908928,
      -0.05284971743822098,
      0.03581937029957771,
      0.08267170190811157,
      0.033839575946331024,
      -0.022840294986963272,
      -0.02355870045721531,
      -0.031889576464891434,
      -0.05240640416741371,
      -0.09570739418268204,
      -0.061583906412124634,
      -0.04972140118479729,
      0.01846262626349926,
      -0.004021507687866688,
      0.00719424756243825,
      0.036815859377384186,
      0.04838857054710388,
      -0.10113178193569183,
      -0.07511115819215775,
      -0.062410932034254074,
      0.06836122274398804,
      -0.059204865247011185,
      0.058036159723997116,
      0.04039890691637993,
      0.0636008009314537,
      0.002570775803178549,
      -0.04315905645489693,
      0.04280487447977066,
      0.04581625014543533,
      0.01333034411072731,
      -0.015205918811261654,
      -0.007495218887925148,
      0.05403917282819748,
      -0.04603743180632591,
      0.07319600135087967,
      0.0036416074726730585,
      -0.10007923096418381,
      -0.08052277565002441,
      0.031035928055644035,
      -0.0071161119267344475,
      -0.01832369714975357,
      -0.04159388318657875,
      0.08184793591499329,
      -0.0579751580953598,
      0.04781284183263779,
      0.045395273715257645,
      -0.03854208067059517,
      0.06519325822591782,
      -0.08228009194135666,
      -0.048828814178705215,
      0.04727676510810852,
      0.04036320745944977,
      -0.06044641137123108,
      -0.04562028869986534,
      0.09312878549098969,
      -0.025373980402946472,
      -0.059787631034851074,
      -0.043510522693395615,
      -0.07570266723632812,
      -0.026095068082213402,
      -0.05644678696990013,
      -0.029629217460751534,
      0.0423402413725853,
      0.008208416402339935,
      -0.0432777963578701,
      -0.02296634018421173,
      -0.039773907512426376,
      0.03359430283308029,
      -0.10500504076480865,
      0.10601100325584412,
      0.011451683938503265,
      -0.049436233937740326,
      0.06335074454545975,
      -0.03202151879668236,
      0.022569624707102776,
      0.024937214329838753,
      -0.03533332794904709,
      -0.03858306258916855,
      -0.011183583177626133,
      -0.05309798941016197,
      0.06502715498209,
      0.07011152803897858,
      0.07227157801389694,
      -0.05910634249448776,
      0.012078375555574894,
      -0.010616689920425415,
      -0.04691963270306587,
      0.09918231517076492,
      0.014999713748693466,
      0.010507636703550816,
      -0.036292579025030136,
      -0.047144945710897446,
      0.005831944290548563,
      -0.04601946473121643,
      -0.016793351620435715,
      -0.07637345045804977,
      -0.006494690664112568,
      0.007799428887665272,
      -0.02635761722922325,
      -0.023940259590744972,
      -0.07589153200387955,
      0.04665679857134819,
      0.0943145826458931,
      -0.06154323369264603,
      -0.05433151498436928,
      0.021651633083820343,
      -0.019405202940106392,
      0.05118105933070183,
      0.06632721424102783,
      0.0246729776263237,
      -0.028300868347287178,
      -0.003913304302841425,
      0.07901447266340256,
      -0.0026162106078118086,
      -0.015791399404406548,
      -0.015419180504977703,
      -0.07314285635948181,
      0.05338564142584801,
      -0.004038079176098108,
      0.08500432968139648,
      0.060208216309547424,
      -0.015290524810552597,
      0.044495657086372375,
      -0.03422887623310089,
      0.09562826156616211,
      -0.016148434951901436,
      -0.06672866642475128,
      0.020204557105898857,
      0.0535997599363327,
      -0.10474444925785065,
      0.05553102865815163,
      -0.003480135230347514,
      0.05076153576374054,
      0.0029059394728392363,
      0.04235721006989479,
      0.015002164989709854,
      0.040149107575416565,
      -0.04246329888701439,
      -0.036333438009023666,
      0.0615123026072979,
      0.06469226628541946,
      -0.006987905595451593,
      0.050477687269449234,
      -0.09940734505653381,
      -0.05120908468961716,
      -0.04792005568742752,
      -0.062328774482011795,
      -0.06479357182979584,
      -0.07280553877353668,
      0.04884146898984909,
      0.05206038057804108,
      -0.05471444129943848,
      0.0040036472491919994,
      0.022503389045596123,
      0.01321372576057911,
      0.07633500546216965,
      -0.04821009933948517,
      -0.05609222501516342,
      0.04114959388971329,
      -0.05162229761481285,
      0.007017637137323618,
      -0.02628861367702484,
      0.03655047342181206,
      -0.028591690585017204,
      -0.07111036777496338,
      0.028806673362851143,
      0.03362580016255379,
      -0.040272388607263565,
      0.04604141414165497,
      -0.045350708067417145,
      -0.04596223309636116,
      0.02383211813867092,
      -0.055956993252038956,
      -0.03424399346113205,
      0.07414455711841583,
      0.04797679930925369,
      -0.1006106361746788,
      0.02146499790251255,
      0.050023775547742844,
      -0.019697608426213264,
      0.018554385751485825,
      -0.089126817882061,
      -0.01160428300499916,
      0.057646166533231735,
      0.04558368772268295,
      -0.03903547674417496,
      -0.04219011589884758,
      0.04375992342829704,
      0.06701239943504333,
      0.02131892926990986,
      0.0061213308945298195,
      -0.004036103840917349,
      5881153047084808e-19,
      0.009913141839206219,
      -0.024056773632764816,
      0.09136129170656204,
      0.0919002816081047,
      -0.07018795609474182,
      -0.007901453413069248,
      -0.007940991781651974,
      -0.06477440148591995,
      -0.006456334143877029,
      0.060380492359399796,
      -0.07719796150922775,
      -0.055995505303144455,
      -0.018284311518073082,
      0.10325874388217926,
      0.06152573227882385,
      0.05667770653963089
    ]
  },
  {
    id: "REVIEW",
    description: "evaluate existing work, code review, audit, inspect quality, performance checks, security review, bug finding, analysis without creating new features. (incele, de\u011Ferlendir, g\xFCvenlik)",
    embedding: [
      0.02725289575755596,
      -0.034359369426965714,
      -0.055699095129966736,
      -0.08697937428951263,
      0.06019480898976326,
      -0.03287828713655472,
      0.0338301956653595,
      0.031192200258374214,
      0.055973950773477554,
      0.011957411654293537,
      -0.023639433085918427,
      0.04290395230054855,
      0.08228632807731628,
      -0.019436145201325417,
      -0.026753775775432587,
      0.059676192700862885,
      0.06344024091959,
      -0.057381052523851395,
      -0.05564747005701065,
      -0.054361261427402496,
      0.0017050477908924222,
      -0.03415335342288017,
      -0.033924251794815063,
      0.042419590055942535,
      0.08431342989206314,
      0.0555100291967392,
      -0.005648325197398663,
      -0.024412309750914574,
      0.032743487507104874,
      -0.05687263607978821,
      -0.07252253592014313,
      -0.025666620582342148,
      0.04808817058801651,
      -0.07912818342447281,
      2780359354801476e-19,
      1667222531978041e-19,
      -0.06165638193488121,
      -0.01814592070877552,
      0.06043660640716553,
      -0.08607275784015656,
      -0.04397664591670036,
      -0.01271031890064478,
      0.041587844491004944,
      0.038283202797174454,
      0.05231887474656105,
      0.06344343721866608,
      -0.03823497146368027,
      0.03672490641474724,
      -0.045195773243904114,
      -0.03821808099746704,
      -0.01599915511906147,
      0.056788135319948196,
      0.013448403216898441,
      0.054256100207567215,
      0.02464985102415085,
      -0.023517442867159843,
      -0.041946589946746826,
      -0.03208751231431961,
      -0.05842551961541176,
      0.05002403259277344,
      0.05630025640130043,
      -0.05469469726085663,
      0.020957304164767265,
      0.0222115907818079,
      0.07174531370401382,
      0.05378119647502899,
      0.07185046374797821,
      0.0344955250620842,
      -0.07672803848981857,
      -0.04571082815527916,
      -0.043304264545440674,
      0.023378323763608932,
      -43779940460808575e-20,
      -0.06497592478990555,
      0.002663948340341449,
      0.023407958447933197,
      0.014390304684638977,
      -0.09064960479736328,
      0.027895450592041016,
      -0.06426134705543518,
      -0.0779833123087883,
      -0.015339912846684456,
      -0.042493514716625214,
      0.009460743516683578,
      -0.021520551294088364,
      0.08101020008325577,
      0.05910995230078697,
      -0.06360342353582382,
      0.09300673753023148,
      -0.03576824814081192,
      0.04333973303437233,
      0.03280824422836304,
      -0.09383025765419006,
      -0.022677520290017128,
      -0.14227323234081268,
      -0.078528992831707,
      -0.04117867723107338,
      0.07745048403739929,
      0.07339716702699661,
      -0.047689300030469894,
      0.05665862187743187,
      -0.027501899749040604,
      0.047520704567432404,
      -0.06627795845270157,
      -0.01884988509118557,
      0.056607935577631,
      -0.03507286310195923,
      -0.06183057278394699,
      0.039448101073503494,
      -0.05670694261789322,
      -0.05391348898410797,
      0.027484329417347908,
      0.10494691878557205,
      0.032585274428129196,
      -0.014409156516194344,
      -0.01375208143144846,
      0.003931338898837566,
      -0.05788610503077507,
      0.02638741210103035,
      -0.0668778344988823,
      0.08856768161058426,
      -0.02690165862441063,
      -0.06598452478647232,
      -0.0878085121512413,
      -0.05827854946255684,
      -0.028640398755669594,
      0.07798928022384644,
      0.05283179134130478,
      0.020744163542985916,
      0.020219866186380386,
      -0.009217053651809692,
      0.028774121776223183,
      0.025043491274118423,
      0.055116843432188034,
      0.06452111154794693,
      0.08543278276920319,
      -0.025571268051862717,
      0.011382467113435268,
      -0.0025435518473386765,
      -0.03987790271639824,
      -0.031730152666568756,
      0.04187896102666855,
      0.017046598717570305,
      0.06905607134103775,
      0.07056121528148651,
      0.0675177350640297,
      0.05047069489955902,
      -0.04566405341029167,
      0.052685946226119995,
      -0.0714697316288948,
      0.07246235013008118,
      -0.010093314573168755,
      0.0750369131565094,
      0.03091324493288994,
      0.06159692630171776,
      -0.022015970200300217,
      -0.06255019456148148,
      -0.01585354469716549,
      0.05648590251803398,
      0.049478303641080856,
      -0.0671512559056282,
      -0.04438244178891182,
      -0.07493775337934494,
      -0.027988063171505928,
      -0.04797551408410072,
      -0.046093735843896866,
      0.03238467499613762,
      0.051851220428943634,
      -0.03822549805045128,
      -0.021783139556646347,
      -0.09111206233501434,
      0.0946359634399414,
      -0.02829139679670334,
      0.031008029356598854,
      -0.00666448287665844,
      0.05479604750871658,
      -0.04924296960234642,
      0.0176240187138319,
      0.05902119353413582,
      0.03221908584237099,
      -0.03290553763508797,
      -0.03127000853419304,
      -0.010965239256620407,
      -0.0117442412301898,
      -0.07847976684570312,
      -0.05289348587393761,
      -0.07916437834501266,
      0.03210587427020073,
      -0.02815871313214302,
      -0.018038539215922356,
      0.014763339422643185,
      0.05616410821676254,
      -0.06726982444524765,
      -0.0826263427734375,
      -0.08811044692993164,
      0.033898260444402695,
      -0.036701809614896774,
      0.04058229550719261,
      0.052320998162031174,
      0.0449024960398674,
      0.03702401742339134,
      -0.021544158458709717,
      0.06308983266353607,
      0.018504582345485687,
      0.03611457720398903,
      -0.024859750643372536,
      -0.04017926752567291,
      0.045520808547735214,
      -0.07054311037063599,
      0.04668997973203659,
      0.016315611079335213,
      -0.08954354375600815,
      -0.06690829247236252,
      0.055961497128009796,
      -0.005282292608171701,
      -0.01826321706175804,
      -0.0039787995629012585,
      0.06440900266170502,
      -0.015920918434858322,
      0.03820856660604477,
      0.030736137181520462,
      -0.009645976126194,
      0.021747002378106117,
      -0.07393889874219894,
      -0.05799586698412895,
      0.021308647468686104,
      0.042551156133413315,
      -0.08476272970438004,
      -0.02896437793970108,
      0.08538832515478134,
      -0.02418021857738495,
      -0.07966981828212738,
      -0.01949402689933777,
      -0.0821169912815094,
      -0.04714294150471687,
      -0.07675105333328247,
      -0.010093195363879204,
      0.03357028216123581,
      0.04770750552415848,
      -0.0037653318140655756,
      -0.025284169241786003,
      -0.0657854974269867,
      0.03300385922193527,
      -0.07601150870323181,
      0.09643049538135529,
      -0.03439045697450638,
      -0.02505800500512123,
      0.06218670681118965,
      -0.028832698240876198,
      0.044427353888750076,
      0.027836283668875694,
      -0.0533333383500576,
      -0.042097967118024826,
      0.006073571275919676,
      -0.040305763483047485,
      0.07131153345108032,
      0.08447280526161194,
      0.10106538236141205,
      -0.040757838636636734,
      0.040977075695991516,
      0.010780008509755135,
      -0.05776992067694664,
      0.07554007321596146,
      0.044737331569194794,
      0.027467360720038414,
      0.004128600005060434,
      -0.04490320384502411,
      0.012304053641855717,
      -0.06920838356018066,
      -0.017728207632899284,
      -0.07798589020967484,
      0.022255929186940193,
      0.030458183959126472,
      -0.03326350823044777,
      -0.044761620461940765,
      -0.054557301104068756,
      0.05033821240067482,
      0.08876854926347733,
      -0.05119618773460388,
      -0.04123563691973686,
      0.021245328709483147,
      -0.03756042569875717,
      0.07139857858419418,
      0.009146486409008503,
      0.09053114056587219,
      0.0023399777710437775,
      0.011673187837004662,
      0.047875501215457916,
      -0.00588860223069787,
      -0.0055667026899755,
      0.01239828858524561,
      -0.06619222462177277,
      0.029952002689242363,
      -0.03170520439743996,
      0.07101979851722717,
      0.06416364759206772,
      0.013090990483760834,
      0.08035411685705185,
      -0.030429260805249214,
      0.10371237248182297,
      -0.03402388095855713,
      -0.05270620062947273,
      0.037286482751369476,
      0.05876222252845764,
      -0.07851037383079529,
      0.030771467834711075,
      0.049439478665590286,
      -0.009563175961375237,
      0.00801339466124773,
      0.06727907061576843,
      0.045896705240011215,
      0.06124817579984665,
      -0.021821653470396996,
      -0.010540170595049858,
      0.025105087086558342,
      0.0018927076598629355,
      -0.040867891162633896,
      0.04761659353971481,
      -0.053269170224666595,
      -0.03511198237538338,
      -0.03369568660855293,
      -0.08314681798219681,
      -0.03506363555788994,
      -0.053547658026218414,
      0.03524507209658623,
      0.07535382360219955,
      -0.05055932700634003,
      -0.007629393599927425,
      0.02064354345202446,
      -0.03273148834705353,
      0.045379381626844406,
      -0.022647112607955933,
      -0.03795718774199486,
      0.027576129883527756,
      -0.07373785972595215,
      -0.019215645268559456,
      -0.027865897864103317,
      0.02765449695289135,
      -0.019643276929855347,
      -0.036671701818704605,
      0.006861128378659487,
      0.045577820390462875,
      -0.06419865787029266,
      0.06599793583154678,
      -0.034530192613601685,
      -0.05854758247733116,
      -0.0014669018564745784,
      -0.03419457748532295,
      -0.008096786215901375,
      0.05150669813156128,
      0.041135694831609726,
      -0.11075462400913239,
      0.04718310013413429,
      0.07070114463567734,
      -0.023417659103870392,
      0.04310068488121033,
      -0.11242350190877914,
      0.0017844360554590821,
      0.0393170528113842,
      0.0559956431388855,
      -0.07257959246635437,
      -0.06303206831216812,
      0.019051888957619667,
      0.05557845160365105,
      0.07217396795749664,
      0.0599062480032444,
      -0.03919021040201187,
      -0.0043371436186134815,
      0.023726871237158775,
      -0.06699341535568237,
      0.12150052189826965,
      0.08456128090620041,
      -0.038355354219675064,
      -0.039739809930324554,
      -0.008447350934147835,
      -0.04451167583465576,
      -0.007797725033015013,
      0.04169373959302902,
      -0.08678370714187622,
      -0.01896721124649048,
      -0.008658815175294876,
      0.0638413205742836,
      0.041199807077646255,
      0.08119965344667435
    ]
  },
  {
    id: "CODE",
    description: "implement approved changes, write or modify code, edit files, fix bugs, refactor, create components, apply selected plan or design, make changes in the project. (uygula, koda d\xF6k, yaz, de\u011Fi\u015Ftir, d\xFCzelt)",
    embedding: [
      0.016625074669718742,
      -0.03758694976568222,
      -0.03519505634903908,
      -0.06521320343017578,
      0.10136198997497559,
      -0.02773424983024597,
      0.027564508840441704,
      0.04323160648345947,
      0.011121833696961403,
      0.012284268625080585,
      0.013502798974514008,
      0.0307976845651865,
      0.06880111247301102,
      -0.05420101433992386,
      -0.007266134023666382,
      0.0513777881860733,
      0.05116104707121849,
      -0.042569685727357864,
      0.0024835991207510233,
      -0.016184719279408455,
      0.021418046206235886,
      -0.02628280222415924,
      -0.025031305849552155,
      0.029803190380334854,
      0.04405505582690239,
      0.021789345890283585,
      -0.03793613612651825,
      -0.0049170032143592834,
      0.06547345966100693,
      -0.07746856659650803,
      -0.04081130400300026,
      -0.06727927178144455,
      0.062369510531425476,
      -0.03762722760438919,
      0.01891440711915493,
      -0.00861081387847662,
      -0.04586116224527359,
      0.0016900573391467333,
      0.0312981940805912,
      -0.07581470161676407,
      -0.021617600694298744,
      -0.005553167778998613,
      0.05164991691708565,
      0.036617521196603775,
      0.06263937056064606,
      0.03900633007287979,
      -0.06158159300684929,
      0.010213238187134266,
      -0.03849494084715843,
      -0.02099936455488205,
      0.0012250863946974277,
      0.0571163110435009,
      0.006822702940553427,
      0.0399271585047245,
      0.03451446071267128,
      -0.04384597763419151,
      -0.08324790000915527,
      -0.04563082754611969,
      -0.0776035264134407,
      0.03759269043803215,
      0.03440237045288086,
      -0.060443777590990067,
      0.03012578934431076,
      0.008306358940899372,
      0.10810744017362595,
      0.017462652176618576,
      0.06321757286787033,
      0.02458367869257927,
      -0.05187410116195679,
      -0.045412566512823105,
      -0.030103206634521484,
      0.06107846647500992,
      0.02644452638924122,
      -0.03986647352576256,
      -0.0013730115024372935,
      0.015041518956422806,
      0.013365941122174263,
      -0.10290518403053284,
      0.05298740044236183,
      -0.060884490609169006,
      -0.1035882905125618,
      -0.015712957829236984,
      -0.06371200084686279,
      0.019587866961956024,
      -0.07069606333971024,
      0.10421738028526306,
      0.06149879842996597,
      -0.0630936548113823,
      0.09320106357336044,
      -0.061663173139095306,
      0.05386873707175255,
      0.047188080847263336,
      -0.10634136199951172,
      -0.035793837159872055,
      -0.15671727061271667,
      -0.08764110505580902,
      -0.061537496745586395,
      0.06125663220882416,
      0.0889366939663887,
      -0.041295431554317474,
      0.03778889775276184,
      -0.03018045425415039,
      0.047379180788993835,
      -0.09478006511926651,
      -0.026226796209812164,
      0.06572293490171432,
      -0.01306859590113163,
      -0.03221420571208,
      0.035682838410139084,
      -0.08273617923259735,
      -0.03605327010154724,
      0.04172344505786896,
      0.06198471784591675,
      0.02666461281478405,
      -0.034067552536726,
      -0.048918385058641434,
      -0.03447014465928078,
      -0.07570657134056091,
      0.06409818679094315,
      -0.08290323615074158,
      0.07386205345392227,
      -0.007996764034032822,
      -0.05723847076296806,
      -0.07448925077915192,
      -0.07090042531490326,
      -0.02808717079460621,
      0.0513821616768837,
      0.021029843017458916,
      -0.012508892454206944,
      5243272753432393e-19,
      -0.004153505899012089,
      0.03043057583272457,
      0.02842990681529045,
      0.03620946779847145,
      0.06010357663035393,
      0.0911731868982315,
      -0.028237974271178246,
      -0.0046206312254071236,
      -0.04088982939720154,
      -0.014886566437780857,
      -0.030704285949468613,
      0.05552470684051514,
      0.002172003732994199,
      0.046803805977106094,
      0.04726368188858032,
      0.09587734192609787,
      0.029197147116065025,
      -0.008550952188670635,
      0.07887779921293259,
      -0.0519266352057457,
      0.04953622817993164,
      0.03263886645436287,
      0.1022297665476799,
      0.04653292894363403,
      0.055068306624889374,
      -0.05981987342238426,
      -0.019348829984664917,
      -0.028474874794483185,
      0.08171940594911575,
      0.04225792735815048,
      -0.04032590612769127,
      -0.05338142439723015,
      -0.044723059982061386,
      -0.041995979845523834,
      -0.05619176849722862,
      -0.05460955202579498,
      0.01285078376531601,
      0.038820791989564896,
      -0.022044828161597252,
      -0.02398897334933281,
      -0.08834205567836761,
      0.10524936020374298,
      -0.048251815140247345,
      0.03852984681725502,
      -0.0038590177427977324,
      0.093889519572258,
      -0.04293160140514374,
      0.06494075059890747,
      0.09512464702129364,
      0.05916270613670349,
      0.010646612383425236,
      -0.0028621733654290438,
      -0.05896817520260811,
      -0.022206082940101624,
      -0.07964039593935013,
      -0.014435692690312862,
      -0.06742183119058609,
      0.031496454030275345,
      0.0028347051702439785,
      -0.031780920922756195,
      0.010101174004375935,
      0.026026636362075806,
      -0.051822151988744736,
      -0.08977219462394714,
      -0.10499728471040726,
      0.019691061228513718,
      -0.05360892042517662,
      0.04058908671140671,
      0.04169981926679611,
      0.06483808904886246,
      0.02393394336104393,
      -0.02099435031414032,
      0.07814150303602219,
      0.011150342412292957,
      0.015513970516622066,
      -0.005385464057326317,
      -0.04876351356506348,
      0.08187951892614365,
      -0.04726298153400421,
      0.027954617515206337,
      0.0323881097137928,
      -0.10336589813232422,
      -0.06711123138666153,
      0.027768900617957115,
      -0.0072610764764249325,
      -0.03626427426934242,
      0.007518479134887457,
      0.07273145020008087,
      -0.026794619858264923,
      0.03393566608428955,
      0.05307050794363022,
      -0.024564001709222794,
      0.050280194729566574,
      -0.04980676993727684,
      -0.053949885070323944,
      0.05353624001145363,
      0.039962466806173325,
      -0.07501386851072311,
      -0.03276773542165756,
      0.0895102322101593,
      -0.04014907404780388,
      -0.05878518521785736,
      -0.024050211533904076,
      -0.05247368663549423,
      -0.01255343109369278,
      -0.07561326026916504,
      -0.02105485089123249,
      0.03306620940566063,
      0.07237614691257477,
      -0.029561320319771767,
      -0.016761427745223045,
      -0.05034592002630234,
      0.053895968943834305,
      -0.0740635097026825,
      0.08091435581445694,
      -0.027437014505267143,
      -0.033416327089071274,
      0.0573870949447155,
      -0.0015550419921055436,
      0.005686836317181587,
      0.033787164837121964,
      -0.06776677817106247,
      -0.06285575777292252,
      -0.003925058525055647,
      -0.08690456300973892,
      0.0641496554017067,
      0.05055701360106468,
      0.07470915466547012,
      -0.04559290036559105,
      0.009935306385159492,
      -8963414584286511e-19,
      -0.0375041626393795,
      0.0766742154955864,
      0.023541372269392014,
      0.023911943659186363,
      -0.001507698674686253,
      -0.0760422945022583,
      -0.0016088373959064484,
      -0.049503836780786514,
      -0.01668105274438858,
      -0.040121324360370636,
      0.032940980046987534,
      0.011062966659665108,
      -0.049397945404052734,
      -0.017885543406009674,
      -0.051609307527542114,
      0.045207902789115906,
      0.057856667786836624,
      -0.03768708184361458,
      -0.026639405637979507,
      0.015267807058990002,
      0.007294115610420704,
      0.06987350434064865,
      0.06189614534378052,
      0.07039712369441986,
      -0.0055330004543066025,
      0.01729830913245678,
      0.07151956111192703,
      -0.031488604843616486,
      -0.0346645824611187,
      -0.013701623305678368,
      -0.062372129410505295,
      0.04856065288186073,
      -0.012711660005152225,
      0.07943806797266006,
      0.03213871270418167,
      0.017855755984783173,
      0.06805018335580826,
      -0.07498261332511902,
      0.06803151965141296,
      -0.04140476509928703,
      -0.07786793261766434,
      0.02495090290904045,
      0.06043408438563347,
      -0.07555155456066132,
      0.04398930072784424,
      0.002602045191451907,
      0.012761522084474564,
      -0.004111096728593111,
      0.0333864651620388,
      0.05890016630291939,
      0.05310589075088501,
      -0.0275482889264822,
      -0.011991730891168118,
      0.05162615329027176,
      0.02834450453519821,
      -0.045304782688617706,
      0.04444357380270958,
      -0.06643906980752945,
      -0.05400395765900612,
      -0.015377047471702099,
      -0.06279167532920837,
      -0.039736587554216385,
      -0.0283618476241827,
      0.03134090080857277,
      0.04663291573524475,
      -0.04844886437058449,
      -0.012106342241168022,
      0.04371286928653717,
      -0.034637097269296646,
      0.07435417920351028,
      -0.03624366596341133,
      -0.0620882548391819,
      0.03985612094402313,
      -0.05997255817055702,
      0.005494040437042713,
      -0.02127416990697384,
      0.056670114398002625,
      -0.020353563129901886,
      -0.03457384929060936,
      0.024830762296915054,
      0.03467212989926338,
      -0.04293977469205856,
      0.07845001667737961,
      -0.05513884499669075,
      -0.07091124355792999,
      -0.013869080692529678,
      -0.015910523012280464,
      -0.03444366529583931,
      0.0712255910038948,
      0.0774676576256752,
      -0.11783130466938019,
      0.038366612046957016,
      0.0714767724275589,
      -0.01550702191889286,
      0.04385371133685112,
      -0.09114643931388855,
      0.021129067987203598,
      0.05087678134441376,
      0.06194685027003288,
      -0.059166766703128815,
      -0.06504548341035843,
      -0.00444213580340147,
      0.059247199445962906,
      0.03849425166845322,
      0.052954837679862976,
      -0.03440413251519203,
      12115831486880779e-20,
      0.025474926456809044,
      -0.024510955438017845,
      0.09181224554777145,
      0.07002277672290802,
      -0.029475074261426926,
      -0.0024671973660588264,
      -0.02293749898672104,
      -0.0379718653857708,
      -0.03168784826993942,
      0.05101031810045242,
      -0.08086959272623062,
      -0.021827461197972298,
      -0.003624473698437214,
      0.07480119913816452,
      0.049927953630685806,
      0.048144273459911346
    ]
  },
  {
    id: "SUGGEST",
    description: "compare explicit options, advise on trade-offs, recommend between candidate choices, technology selection, ranking alternatives, decision support when options already exist, no design creation or code changes.",
    embedding: [
      0.009635105729103088,
      -0.062313999980688095,
      -0.0514477863907814,
      -0.022436009719967842,
      0.017613109201192856,
      -0.004552067257463932,
      0.03542107716202736,
      0.022936657071113586,
      0.043754275888204575,
      0.005940858740359545,
      0.022750020027160645,
      0.02422604337334633,
      0.11519650369882584,
      0.014035682193934917,
      -0.026733476668596268,
      0.06284274905920029,
      0.034751757979393005,
      -0.01652872934937477,
      -0.053266312927007675,
      -0.09085750579833984,
      0.021382931619882584,
      -0.047680679708719254,
      -0.015351597219705582,
      0.039135370403528214,
      0.057504989206790924,
      0.05836295709013939,
      0.0026603026781231165,
      -0.04052325338125229,
      0.020321618765592575,
      -0.04089488461613655,
      -0.01340857706964016,
      -0.03668377920985222,
      0.049736443907022476,
      -0.07115444540977478,
      0.011501498520374298,
      0.022489240393042564,
      -0.053191110491752625,
      -0.007604817394167185,
      0.04342063143849373,
      -0.06958284974098206,
      -0.0076746586710214615,
      0.05643133819103241,
      0.042814090847969055,
      0.003999692853540182,
      0.0710906833410263,
      0.024832190945744514,
      -0.057094160467386246,
      0.027045410126447678,
      -0.05543128401041031,
      -0.011900369077920914,
      -0.049495283514261246,
      0.06064766272902489,
      0.009872818365693092,
      0.021146835759282112,
      0.009661433286964893,
      -0.05326066538691521,
      -0.07947863638401031,
      -0.049025759100914,
      -0.025929391384124756,
      0.01430128701031208,
      0.02836211584508419,
      -0.022623823955655098,
      0.026171475648880005,
      0.03348479047417641,
      0.05955176427960396,
      0.03792618587613106,
      0.05643443390727043,
      0.030150849372148514,
      -0.09489701688289642,
      -0.0349247083067894,
      -0.02850307710468769,
      0.05524899810552597,
      -0.010484326630830765,
      7319842115975916e-19,
      -0.004763463977724314,
      0.020432883873581886,
      0.039014920592308044,
      -0.031065506860613823,
      0.02541436441242695,
      -0.0643865242600441,
      -0.10919535160064697,
      -0.021046770736575127,
      -0.05094915255904198,
      0.049412138760089874,
      -0.056450724601745605,
      0.05253392457962036,
      0.05141456052660942,
      -0.056972768157720566,
      0.06605104357004166,
      -0.05878922715783119,
      0.015308186411857605,
      0.03861358016729355,
      -0.07782294601202011,
      -0.023482006043195724,
      -0.07370399683713913,
      -0.08424165099859238,
      -0.08423372358083725,
      0.07697787880897522,
      0.06390274316072464,
      0.006972494535148144,
      0.04988716170191765,
      -0.002919332589954138,
      0.07869436591863632,
      -0.07515906542539597,
      -0.054241299629211426,
      0.0403352789580822,
      -0.003278917632997036,
      -0.029507886618375778,
      0.015755508095026016,
      -0.06690135598182678,
      -0.045066334307193756,
      0.033481720834970474,
      0.05154147371649742,
      0.030377794057130814,
      -0.03846302628517151,
      -0.04586523771286011,
      -0.01899908296763897,
      -0.06636536121368408,
      0.05416438728570938,
      -0.07208546251058578,
      0.09426282346248627,
      -0.02696814015507698,
      -0.06743445992469788,
      -0.0855334922671318,
      -0.07845431566238403,
      -0.016947153955698013,
      0.06508105993270874,
      0.0695166364312172,
      -0.012169241905212402,
      0.0017597087426111102,
      0.04039500281214714,
      0.032901566475629807,
      0.06188587471842766,
      0.035026516765356064,
      0.048251669853925705,
      0.11514853686094284,
      -0.0307159423828125,
      0.0299629308283329,
      -0.025327151641249657,
      -0.0078311488032341,
      -0.04801804944872856,
      0.07911449670791626,
      -0.03733505681157112,
      0.038576237857341766,
      0.058688532561063766,
      0.043865591287612915,
      0.04408672824501991,
      -0.06335243582725525,
      0.05492965877056122,
      -0.04582952335476875,
      0.043688319623470306,
      -0.028986159712076187,
      0.05468937009572983,
      0.026444455608725548,
      0.02874290570616722,
      -0.027999432757496834,
      -0.04342859238386154,
      -0.025117386132478714,
      0.08951941132545471,
      0.05014795437455177,
      -0.00803396012634039,
      -0.030741846188902855,
      -0.09032997488975525,
      -0.04767133668065071,
      -0.05078991875052452,
      -0.0951675996184349,
      0.038227278739213943,
      0.06550604850053787,
      -0.06629478186368942,
      -0.020035136491060257,
      -0.07491154968738556,
      0.07939628511667252,
      -0.03733283653855324,
      0.05819718539714813,
      -0.009217619895935059,
      0.015285049565136433,
      -0.01413810346275568,
      0.004562649875879288,
      0.038217850029468536,
      0.05679221451282501,
      -0.07173137366771698,
      -0.032363083213567734,
      -0.01885318011045456,
      -0.025555243715643883,
      -0.08664042502641678,
      -0.05144282802939415,
      -0.036957524716854095,
      0.024722671136260033,
      -0.014733346179127693,
      -0.005336644593626261,
      0.02863181382417679,
      0.03620615601539612,
      -0.09382627159357071,
      -0.06714025884866714,
      -0.07592881470918655,
      0.03230944275856018,
      -0.0680093914270401,
      0.043420955538749695,
      0.046076931059360504,
      0.052142880856990814,
      -0.01605166308581829,
      -0.010852056555449963,
      0.02867814712226391,
      0.02546137012541294,
      0.045941729098558426,
      0.014672418124973774,
      -0.025813281536102295,
      0.05201108008623123,
      -0.07606025785207748,
      0.05607437714934349,
      0.024477755650877953,
      -0.07096850872039795,
      -0.08154261112213135,
      0.027763571590185165,
      -0.003289364278316498,
      -0.02498086355626583,
      -0.02307816967368126,
      0.05083769932389259,
      -0.023782778531312943,
      -0.0014546635793522,
      0.05051684379577637,
      -0.01005505584180355,
      0.04318542405962944,
      -0.09137521684169769,
      -0.06420838832855225,
      0.023147281259298325,
      0.0847187265753746,
      -0.09826324880123138,
      -0.07609347999095917,
      0.08946140855550766,
      -0.03723849728703499,
      -0.058311302214860916,
      -0.03161616623401642,
      -0.08584140986204147,
      -0.041344501078128815,
      -0.05989748612046242,
      -0.02733544073998928,
      0.06511660665273666,
      0.06484144181013107,
      -0.07414337247610092,
      -0.059837959706783295,
      -0.03678717464208603,
      0.048264723271131516,
      -0.08542147278785706,
      0.09091834723949432,
      -0.019512983039021492,
      -0.011625684797763824,
      0.05439786612987518,
      -0.029097607359290123,
      0.017062870785593987,
      0.0316590741276741,
      -0.05369354411959648,
      -0.030330955982208252,
      0.008804199285805225,
      -0.03826327249407768,
      0.045638155192136765,
      0.04602549597620964,
      0.09027081727981567,
      -0.05783926323056221,
      0.05372003838419914,
      0.01540867518633604,
      -0.04379040002822876,
      0.0825367271900177,
      0.03771071508526802,
      0.04330466687679291,
      -0.015909695997834206,
      -0.021711409091949463,
      0.016719896346330643,
      -0.07612063735723495,
      -0.03419068083167076,
      -0.048804789781570435,
      0.015880290418863297,
      0.04804421588778496,
      -0.06549137830734253,
      -0.03134610131382942,
      -0.07084298878908157,
      0.031162237748503685,
      0.07468272000551224,
      -0.06800999492406845,
      -0.028755897656083107,
      0.028028549626469612,
      -0.03774750605225563,
      0.033899761736392975,
      0.09654393792152405,
      0.023264553397893906,
      -0.006622590124607086,
      0.016594355925917625,
      0.09791529923677444,
      -0.004382119048386812,
      0.0034216614440083504,
      -0.03208296000957489,
      -0.07221026718616486,
      0.04238744080066681,
      -0.030599988996982574,
      0.11150355637073517,
      0.04618876054883003,
      -0.024617226794362068,
      0.07884696125984192,
      -0.028919266536831856,
      0.1062343418598175,
      -0.018370091915130615,
      -0.026553373783826828,
      0.032549500465393066,
      0.04293574392795563,
      -0.1267211139202118,
      0.05056491866707802,
      0.02644258178770542,
      0.02472558058798313,
      0.02379455603659153,
      0.05030463635921478,
      0.03643834590911865,
      0.07794732600450516,
      -0.013064595870673656,
      -0.014533260837197304,
      0.07250156253576279,
      0.05631232634186745,
      -0.005840778350830078,
      0.08065299689769745,
      -0.05004890263080597,
      -0.04429744929075241,
      -0.03144573047757149,
      -0.07242964208126068,
      -0.01806051656603813,
      -0.07244335860013962,
      0.06616107374429703,
      0.043970976024866104,
      -0.049079202115535736,
      -0.029340483248233795,
      0.006479218136519194,
      -0.023423202335834503,
      0.06353732943534851,
      -0.07175885140895844,
      -0.031935859471559525,
      0.004228297621011734,
      -0.08901305496692657,
      0.013421919196844101,
      -0.02066437341272831,
      0.05083047226071358,
      -0.05017590522766113,
      -0.07481742650270462,
      0.01655864343047142,
      -0.01994943432509899,
      -0.03113516792654991,
      0.048941005021333694,
      -0.03879666328430176,
      -0.04854065179824829,
      0.007109446916729212,
      -0.04967884719371796,
      0.024363607168197632,
      0.0352916419506073,
      0.09165692329406738,
      -0.08275381475687027,
      0.023297380656003952,
      0.08366803079843521,
      -0.04992811381816864,
      0.06044486165046692,
      -0.10134339332580566,
      -0.001305973157286644,
      0.03723856806755066,
      0.08868519961833954,
      -0.08506161719560623,
      -0.01988997496664524,
      0.05725504830479622,
      0.07283253967761993,
      0.06094000115990639,
      0.018470173701643944,
      -0.034447263926267624,
      0.015618723817169666,
      0.02719961106777191,
      -0.043792176991701126,
      0.10798096656799316,
      0.07053196430206299,
      -0.040033940225839615,
      0.006771252490580082,
      -0.01995406486093998,
      -0.02279389463365078,
      -0.045235611498355865,
      -8319685002788901e-19,
      -0.04059123620390892,
      -0.03325631469488144,
      0.022721152752637863,
      0.06732582300901413,
      0.04598962888121605,
      0.07361777871847153
    ]
  }
];

// src/workflow/catalog.json
var catalog_default2 = [
  {
    id: "default",
    behavior: "CHAT",
    description: "Casual conversation and direct answers.",
    embedding: [
      0.03794034942984581,
      0.008182390592992306,
      -0.04455242305994034,
      -0.08468607068061829,
      0.05240786075592041,
      -0.010710137896239758,
      0.07653021067380905,
      0.015334163792431355,
      0.04468049481511116,
      -0.0010861663613468409,
      0.05207686498761177,
      0.010806085541844368,
      0.03114006295800209,
      -0.00900054257363081,
      -0.04092862084507942,
      0.03894904628396034,
      0.08054210245609283,
      -0.05645426735281944,
      -0.07534521073102951,
      -0.04850206524133682,
      0.027960527688264847,
      -0.020988203585147858,
      -0.03063160553574562,
      0.0636093020439148,
      0.05482432246208191,
      0.06834142655134201,
      -0.04598516970872879,
      0.07610176503658295,
      0.05601885914802551,
      -0.06716744601726532,
      -0.028126241639256477,
      -0.03625441715121269,
      0.044710416346788406,
      -0.0422954261302948,
      0.051277801394462585,
      0.05323924124240875,
      -0.040305837988853455,
      -0.05532001331448555,
      0.04765229672193527,
      -0.06954017281532288,
      -0.06637980043888092,
      0.06113075092434883,
      0.04124416410923004,
      0.05414208024740219,
      0.08148712664842606,
      0.012946613132953644,
      -0.07039117813110352,
      0.06969024986028671,
      -0.0013605407439172268,
      -0.017482612282037735,
      -0.03753369301557541,
      0.048260994255542755,
      0.013026249594986439,
      0.09095531702041626,
      0.029039816930890083,
      -0.07704617083072662,
      -0.04775369539856911,
      -0.09345529228448868,
      -0.07224317640066147,
      -0.00707972003147006,
      0.09093426913022995,
      0.0011740945046767592,
      0.017809608951210976,
      0.00782080926001072,
      0.06657647341489792,
      0.06998440623283386,
      0.07917483150959015,
      0.04193415492773056,
      -0.06363648921251297,
      0.024769065901637077,
      -0.059190019965171814,
      0.046741727739572525,
      0.016765180975198746,
      -0.009158613160252571,
      -0.01272425428032875,
      0.044130589812994,
      0.024566849693655968,
      -0.0095573915168643,
      0.044301070272922516,
      -0.022134486585855484,
      -0.0383138470351696,
      -0.056281328201293945,
      -0.06122913211584091,
      0.03078416734933853,
      -0.09416477382183075,
      0.0634707510471344,
      0.07193511724472046,
      -0.048390667885541916,
      0.05437121167778969,
      -0.005729591939598322,
      0.03798077255487442,
      0.04880555346608162,
      -0.06447477638721466,
      -0.04789440706372261,
      -0.06612763553857803,
      -0.04287950322031975,
      -0.06940247118473053,
      0.08191800117492676,
      0.02524178847670555,
      -0.024813087657094002,
      0.0800720825791359,
      -0.034688785672187805,
      0.03320973366498947,
      -0.10743620246648788,
      -0.01699371449649334,
      0.007586320862174034,
      0.048142872750759125,
      -0.026466308161616325,
      0.03006228804588318,
      -0.03935541585087776,
      -0.036667317152023315,
      0.021657506003975868,
      0.03875492140650749,
      0.0519607774913311,
      -0.08878173679113388,
      -0.05192195624113083,
      -0.0532512292265892,
      -0.03438215330243111,
      0.04474237561225891,
      -0.0472244955599308,
      0.065894216299057,
      -0.015171565115451813,
      -0.05865304172039032,
      -0.020738491788506508,
      -0.05624353140592575,
      -0.02820889838039875,
      0.028330884873867035,
      0.023982545360922813,
      0.026293020695447922,
      0.013821575790643692,
      0.07904753088951111,
      -0.009039723314344883,
      0.01749858632683754,
      0.047094326466321945,
      0.0805746465921402,
      0.10092660039663315,
      0.004715301096439362,
      0.0738178938627243,
      0.03948703780770302,
      -0.005986003205180168,
      -0.06133904680609703,
      0.049759842455387115,
      -0.03729990869760513,
      0.03362416476011276,
      0.02575485222041607,
      0.060813143849372864,
      0.053192269057035446,
      0.03609436750411987,
      0.0894153043627739,
      -0.02985296957194805,
      0.035596247762441635,
      0.019659150391817093,
      0.03975379094481468,
      0.02255682274699211,
      0.07323562353849411,
      -0.03191022574901581,
      -0.07943762093782425,
      -0.05156204104423523,
      0.05251465365290642,
      0.04598458111286163,
      -0.09425179660320282,
      -0.07335712760686874,
      -0.07545338571071625,
      -0.03364906460046768,
      -0.06655958294868469,
      -0.06896959990262985,
      0.07109685242176056,
      0.0914064571261406,
      -0.07503146678209305,
      -0.011552903801202774,
      -0.09564832597970963,
      0.021756133064627647,
      -0.06243022158741951,
      0.026387950405478477,
      -0.0038426374085247517,
      0.017897427082061768,
      -0.04769384115934372,
      0.07157722115516663,
      0.0452592670917511,
      0.010630416683852673,
      -0.031644903123378754,
      -0.021820737048983574,
      -0.0072238873690366745,
      -0.029987121000885963,
      -0.09446809440851212,
      -0.05612246319651604,
      -0.03806719183921814,
      0.013150329701602459,
      0.007676886860281229,
      -0.0023511922918260098,
      -0.014517736621201038,
      0.035003744065761566,
      -0.08185295760631561,
      -0.0642380639910698,
      -0.05731422081589699,
      0.01516892109066248,
      -0.08221415430307388,
      0.0654897540807724,
      0.05912819504737854,
      0.029155051335692406,
      -0.027409713715314865,
      -0.026926547288894653,
      0.03131925314664841,
      0.01370872464030981,
      0.03420533984899521,
      0.02656661905348301,
      -0.05076542869210243,
      -0.022023657336831093,
      -0.036015428602695465,
      0.057707808911800385,
      0.043757226318120956,
      -0.055948805063962936,
      -0.07020936906337738,
      0.03638900816440582,
      -0.05730924382805824,
      -0.002010835101827979,
      0.04805377870798111,
      0.07087340950965881,
      -0.08016896992921829,
      0.027050334960222244,
      0.06453677266836166,
      -0.02716679684817791,
      0.03289171680808067,
      -0.080386683344841,
      -0.0855179950594902,
      0.024089347571134567,
      0.06473034620285034,
      -0.05095089226961136,
      -0.05129283666610718,
      0.024118533357977867,
      -0.04505646601319313,
      -0.0342363566160202,
      -0.0749235674738884,
      -0.060216713696718216,
      -0.061140015721321106,
      -0.07650933414697647,
      0.018336959183216095,
      0.027431288734078407,
      0.016131293028593063,
      -0.05932609736919403,
      -0.05220867320895195,
      -0.03239167109131813,
      0.03147569298744202,
      -0.057356156408786774,
      0.0462980717420578,
      -0.041573066264390945,
      -0.03852744773030281,
      0.050706926733255386,
      0.019671808928251266,
      0.06833364814519882,
      0.03151833638548851,
      -0.11274151504039764,
      -0.058514758944511414,
      -0.030203716829419136,
      -0.022959286347031593,
      0.016002871096134186,
      0.057483427226543427,
      0.0761634036898613,
      -0.06959205120801926,
      0.020639799535274506,
      0.04375755414366722,
      -0.06688634306192398,
      0.06429349631071091,
      0.041725318878889084,
      0.05659870058298111,
      0.044465791434049606,
      -0.03888345882296562,
      0.00838684942573309,
      -0.08728744834661484,
      -0.04428188502788544,
      -0.05629315227270126,
      -8267050143331289e-19,
      0.04434832185506821,
      -0.06549655646085739,
      -0.05778845399618149,
      -0.04537031799554825,
      0.04824963957071304,
      0.07403922080993652,
      -0.04654489457607269,
      -0.02576986514031887,
      0.025954989716410637,
      -0.020731108263134956,
      0.006559590809047222,
      0.036881621927022934,
      0.029942966997623444,
      -0.027542151510715485,
      0.013516785576939583,
      0.01594804972410202,
      -0.009781038388609886,
      -0.04414844885468483,
      -0.03005196340382099,
      -0.10169726610183716,
      0.022071968764066696,
      -0.032402053475379944,
      -0.019145870581269264,
      -0.0013802004978060722,
      0.009922954253852367,
      0.02861679345369339,
      -0.020480195060372353,
      0.058923523873090744,
      -0.037270642817020416,
      -0.018714047968387604,
      -0.010668744333088398,
      0.02033173479139805,
      -0.054937440901994705,
      0.04238619655370712,
      -0.010858011431992054,
      0.010528968647122383,
      0.024176549166440964,
      0.05774400010704994,
      0.04768026992678642,
      0.08957937359809875,
      -0.07106375694274902,
      -0.013865804299712181,
      0.09549438208341599,
      0.10191730409860611,
      -0.04907812178134918,
      0.009499221108853817,
      -0.015091941691935062,
      -0.04634672775864601,
      -0.0776163712143898,
      -0.042032524943351746,
      0.015054195187985897,
      -0.08932044357061386,
      0.04814914986491203,
      0.04794177785515785,
      -0.03476494923233986,
      -0.04358400031924248,
      0.06089290231466293,
      0.017762644216418266,
      0.037866100668907166,
      -0.03751637786626816,
      -0.06225430220365524,
      -0.010144591331481934,
      -0.022572165355086327,
      -0.026054002344608307,
      -0.05442865565419197,
      0.052676331251859665,
      -0.05794169381260872,
      -0.10006900876760483,
      0.01901872828602791,
      0.01711839810013771,
      -0.013636231422424316,
      0.05878055840730667,
      -0.03936932981014252,
      -0.04683440178632736,
      0.05134858191013336,
      -0.027419397607445717,
      -0.018004894256591797,
      0.040159955620765686,
      0.09630037099123001,
      -0.11662706732749939,
      0.03908494859933853,
      0.06559575349092484,
      -0.009605303406715393,
      0.04816823452711105,
      -0.07369247823953629,
      0.011522883549332619,
      0.07330889999866486,
      0.07088492810726166,
      -0.0478631965816021,
      -0.01796400547027588,
      0.04532237350940704,
      0.042597949504852295,
      0.08967702090740204,
      0.026137417182326317,
      -0.0158223994076252,
      -0.0027661770582199097,
      0.05502091348171234,
      -0.07074630260467529,
      0.05835568532347679,
      0.05824011564254761,
      -0.01442684419453144,
      -0.001722685876302421,
      -0.01740957796573639,
      -0.11209124326705933,
      -0.04520248994231224,
      0.042722005397081375,
      -0.016906822100281715,
      -0.034832991659641266,
      0.036740973591804504,
      0.08184630423784256,
      0.07445628196001053,
      0.051558203995227814
    ]
  },
  {
    id: "explain",
    behavior: "CHAT",
    description: "Explain a concept or answer why/how questions.",
    embedding: [
      0.05347543582320213,
      -0.026189057156443596,
      -0.0394701287150383,
      -0.09041909128427505,
      0.04709465056657791,
      0.009589246474206448,
      0.020711613819003105,
      0.010994940996170044,
      0.05350732058286667,
      0.006809728220105171,
      0.030970780178904533,
      -0.0036523675080388784,
      0.1082037165760994,
      -0.006750768981873989,
      -0.05398489907383919,
      0.02587924338877201,
      0.07224953919649124,
      -0.049930281937122345,
      -0.041865698993206024,
      -2567023102528765e-21,
      0.022494453936815262,
      -9547258378006518e-19,
      -0.019487883895635605,
      0.033812928944826126,
      0.03629377856850624,
      0.08399413526058197,
      -0.01121392659842968,
      0.03148766607046127,
      0.052278656512498856,
      -0.04818498715758324,
      -0.054941922426223755,
      -0.02980073168873787,
      0.0423559807240963,
      -0.055337756872177124,
      0.052388425916433334,
      0.04304661974310875,
      -0.04621920362114906,
      -0.06765294820070267,
      0.03598899021744728,
      -0.055675726383924484,
      -0.055593810975551605,
      0.0029586858581751585,
      0.04699764773249626,
      0.02407102845609188,
      0.08901116997003555,
      0.07329032570123672,
      -0.055057037621736526,
      0.008785692043602467,
      -0.06226033344864845,
      -0.004396830685436726,
      -0.050772689282894135,
      0.059800732880830765,
      0.029606511816382408,
      0.06272275000810623,
      0.06750230491161346,
      -0.0625518336892128,
      -0.030807241797447205,
      -0.0751100480556488,
      -0.08959105610847473,
      0.03203864395618439,
      0.05518137663602829,
      -0.024350345134735107,
      0.022461652755737305,
      0.024562597274780273,
      0.105943463742733,
      0.060615431517362595,
      0.046648722141981125,
      0.016245096921920776,
      -0.04510848596692085,
      0.009510884061455727,
      -0.08783445507287979,
      0.05037432163953781,
      -0.008045744150876999,
      -0.01608930714428425,
      -0.026425020769238472,
      0.00782343465834856,
      -0.022618908435106277,
      -0.0552491769194603,
      0.09630586206912994,
      -0.028818516060709953,
      -0.0760534480214119,
      -0.05178382247686386,
      -0.03620309382677078,
      0.03143167123198509,
      -0.06802253425121307,
      0.046956032514572144,
      0.042855340987443924,
      -0.05699113756418228,
      0.05993301793932915,
      -0.014088665135204792,
      0.04075298830866814,
      0.05906728655099869,
      -0.08529134839773178,
      -0.022042639553546906,
      -0.07679334282875061,
      -0.06822114437818527,
      -0.0668465867638588,
      0.07425395399332047,
      0.050652578473091125,
      -0.03497697412967682,
      0.06518775224685669,
      0.011789536103606224,
      0.07569451630115509,
      -0.07243087887763977,
      -0.030011432245373726,
      -0.003702747169882059,
      -0.023616382852196693,
      -0.05359165742993355,
      0.056257862597703934,
      -0.0555194728076458,
      -0.04537222906947136,
      0.011205047369003296,
      0.030890369787812233,
      0.045173317193984985,
      -0.03224552795290947,
      -0.03222294896841049,
      -0.05490993335843086,
      -0.06303475052118301,
      0.052533309906721115,
      -0.06003900244832039,
      0.06159866973757744,
      -0.025307610630989075,
      -0.05556962266564369,
      0.009436320513486862,
      -0.06800664216279984,
      -0.048823513090610504,
      -0.007812979631125927,
      0.06825114786624908,
      0.023001570254564285,
      0.028804568573832512,
      0.09172850102186203,
      0.03338143229484558,
      -0.01174385566264391,
      0.058974284678697586,
      0.04145454242825508,
      0.08682920783758163,
      0.007781874854117632,
      0.06447777152061462,
      0.014170637354254723,
      -0.02731502056121826,
      -0.07927216589450836,
      0.062016941606998444,
      -0.03239309415221214,
      0.046306949108839035,
      0.0738053247332573,
      0.07409121096134186,
      0.06816509366035461,
      0.03253602236509323,
      0.0489036925137043,
      -0.04641804099082947,
      0.03918066620826721,
      0.026367584243416786,
      0.04203179106116295,
      0.02237566187977791,
      0.030197681859135628,
      0.0020297816954553127,
      -0.046783845871686935,
      -0.054924577474594116,
      0.028959130868315697,
      0.02251388318836689,
      -0.0875386893749237,
      -0.07709649205207825,
      -0.06028151139616966,
      -0.03277967870235443,
      -0.07371886074542999,
      -0.04435135796666145,
      0.028678007423877716,
      0.06280733644962311,
      -0.07178671658039093,
      -0.017165737226605415,
      -0.05815863609313965,
      0.057325273752212524,
      -0.060799725353717804,
      0.01836484670639038,
      0.021275166422128677,
      0.017147736623883247,
      -0.032215822488069534,
      0.042237572371959686,
      0.07056883722543716,
      0.058628909289836884,
      -0.023361271247267723,
      -0.012130487710237503,
      0.005346436984837055,
      -0.05243610590696335,
      -0.09972796589136124,
      -0.0210503488779068,
      -0.04391392692923546,
      0.03318324312567711,
      0.03553100675344467,
      -0.034863099455833435,
      -0.03269948437809944,
      0.048003796488046646,
      -0.07934477180242538,
      -0.07496726512908936,
      -0.05617569014430046,
      3392474027350545e-19,
      -0.062080398201942444,
      0.06309584528207779,
      0.07763960212469101,
      0.057845503091812134,
      0.015259424224495888,
      -0.021963847801089287,
      0.054837487637996674,
      0.006049749907106161,
      0.013594960793852806,
      -0.0013147145509719849,
      -0.009259900078177452,
      -0.004737686365842819,
      -0.04772490635514259,
      0.051739055663347244,
      0.0372210256755352,
      -0.06872474402189255,
      -0.0753621980547905,
      0.05815395340323448,
      -0.03889799863100052,
      -0.015965141355991364,
      0.042315684258937836,
      0.08712117373943329,
      -0.0635908991098404,
      -0.005476368125528097,
      0.0717262476682663,
      -0.012686488218605518,
      0.05192429944872856,
      -0.06988273561000824,
      -0.09706055372953415,
      0.024370279163122177,
      0.03682122752070427,
      -0.057109225541353226,
      -0.025512587279081345,
      0.03861322999000549,
      -0.05167733132839203,
      -0.046777304261922836,
      -0.03851936385035515,
      -0.06063345447182655,
      -0.05557405948638916,
      -0.08180531114339828,
      0.00880516692996025,
      0.05836581438779831,
      0.03807836398482323,
      -0.0538509264588356,
      -0.060049887746572495,
      -0.066099151968956,
      -0.002896555932238698,
      -0.09289149194955826,
      0.05327140912413597,
      -0.022960655391216278,
      -0.020033342763781548,
      0.0887073203921318,
      -0.02081920951604843,
      0.035826586186885834,
      0.059621263295412064,
      -0.07562758028507233,
      -0.054036568850278854,
      -0.054253075271844864,
      -0.018946701660752296,
      0.08625086396932602,
      0.05099277198314667,
      0.08627521246671677,
      -0.06397394835948944,
      0.03786327317357063,
      -0.0168413408100605,
      -0.08217818289995193,
      0.09537725150585175,
      0.04978613182902336,
      0.053783491253852844,
      0.07127740979194641,
      -0.05724509060382843,
      -0.026824558153748512,
      -0.06267783790826797,
      -0.03843502700328827,
      -0.04127795994281769,
      -0.006815433502197266,
      0.04238603264093399,
      -0.06314457207918167,
      -0.031510960310697556,
      -0.022854410111904144,
      0.06576903164386749,
      0.08676685392856598,
      -0.044827647507190704,
      -0.045247532427310944,
      0.02190837264060974,
      0.014415689744055271,
      -0.008249416016042233,
      0.06458355486392975,
      0.02012697234749794,
      -0.009607682004570961,
      -0.016269685700535774,
      0.06030585989356041,
      0.016132283955812454,
      -0.06335389614105225,
      0.016724860295653343,
      -0.09647545963525772,
      0.01672525703907013,
      0.008379437029361725,
      0.05421935021877289,
      0.03555222600698471,
      7320489967241883e-19,
      0.03546760976314545,
      -0.038454219698905945,
      0.054006177932024,
      -0.010353934019804,
      -0.09007202088832855,
      0.015586533583700657,
      0.010911568067967892,
      -0.09547584503889084,
      0.045758139342069626,
      0.01447272952646017,
      0.051562096923589706,
      -0.001495169010013342,
      0.048070333898067474,
      0.06836586445569992,
      0.06671816855669022,
      -0.08441793918609619,
      -0.006426602136343718,
      0.023813769221305847,
      0.07875575125217438,
      -0.013279012404382229,
      0.02798100747168064,
      -0.06772035360336304,
      -0.060487326234579086,
      -0.0620894655585289,
      -0.056532733142375946,
      -0.025420717895030975,
      -0.06229236349463463,
      0.0682566836476326,
      0.06969346851110458,
      -0.038755834102630615,
      -0.044735778123140335,
      0.0644577369093895,
      0.016370471566915512,
      0.0024579644668847322,
      -0.01887875609099865,
      -0.06043554097414017,
      0.042398516088724136,
      -0.07165729254484177,
      0.0017858168575912714,
      -0.0644935816526413,
      0.059226904064416885,
      -0.05252234637737274,
      -0.0751953199505806,
      0.024968095123767853,
      0.04633777216076851,
      -0.04871487244963646,
      0.03404190018773079,
      -0.02828080952167511,
      -0.06011186167597771,
      0.053534697741270065,
      -0.04765181988477707,
      0.004950564820319414,
      0.0038651633076369762,
      0.06232490763068199,
      -0.09307151287794113,
      -0.004852202255278826,
      0.06901277601718903,
      -0.0658927783370018,
      0.05148030444979668,
      -0.08125549554824829,
      0.0027502463199198246,
      0.03956107050180435,
      0.0485415980219841,
      -0.048469338566064835,
      -0.019421685487031937,
      0.031744617968797684,
      0.039107177406549454,
      0.07164318114519119,
      0.05152387171983719,
      -0.0035375801380723715,
      -0.012772309593856335,
      0.060913410037755966,
      -0.08050192892551422,
      0.0776049792766571,
      0.058701060712337494,
      -0.0325188934803009,
      -0.0291177649050951,
      -0.012023392133414745,
      -0.04152693226933479,
      -0.029457595199346542,
      0.03940868377685547,
      -0.06299936026334763,
      -0.04342959448695183,
      0.00740156089887023,
      0.08604492992162704,
      0.08798811584711075,
      0.03633438050746918
    ]
  },
  {
    id: "summarize",
    behavior: "CHAT",
    description: "Condense long material into a concise summary.",
    embedding: [
      0.05178612098097801,
      0.003929954953491688,
      -0.0402589850127697,
      -0.1289997547864914,
      0.04351126030087471,
      -0.015260620042681694,
      0.03792065009474754,
      0.020077720284461975,
      0.07779034972190857,
      0.00985898170620203,
      0.04502137750387192,
      0.0031742749270051718,
      0.09396232664585114,
      -0.017086023464798927,
      -0.042404066771268845,
      0.03707148879766464,
      0.058661170303821564,
      -0.06387624144554138,
      -0.07325028628110886,
      -0.04065066576004028,
      -0.002806891454383731,
      -0.0025494550354778767,
      -0.017960118129849434,
      0.10786902159452438,
      0.06752724200487137,
      0.0811663493514061,
      -0.05002623796463013,
      0.035750240087509155,
      0.028306089341640472,
      -0.03958362713456154,
      -0.03389815241098404,
      -0.04483939707279205,
      0.051208775490522385,
      -0.03332386165857315,
      0.05736062303185463,
      0.024972980841994286,
      -0.011006373912096024,
      -0.06735552847385406,
      0.04238756373524666,
      -0.03415612876415253,
      -0.05310996621847153,
      -0.01236705668270588,
      0.037824101746082306,
      0.05074400454759598,
      0.05696399509906769,
      0.043473128229379654,
      -0.05036177113652229,
      0.023933060467243195,
      -0.012467379681766033,
      -0.05287045240402222,
      -0.026430856436491013,
      0.06668845564126968,
      -0.014845485799014568,
      0.03950266167521477,
      0.03447066247463226,
      -0.09429994970560074,
      -0.048557162284851074,
      -0.07708628475666046,
      -0.02571818232536316,
      0.011281224898993969,
      0.10815498977899551,
      0.013823567889630795,
      0.0021890534553676844,
      0.02514027990400791,
      0.09119044244289398,
      0.13906213641166687,
      0.05690372735261917,
      0.03949648514389992,
      -0.027253031730651855,
      -0.029741624370217323,
      -0.0640016496181488,
      0.0559038445353508,
      0.010963552631437778,
      -0.04231885075569153,
      -0.011191610246896744,
      0.0344405435025692,
      0.03789174556732178,
      -0.05005359277129173,
      -0.011519523337483406,
      -0.052010904997587204,
      -0.07182998210191727,
      -0.051751572638750076,
      -0.05075916647911072,
      0.02107483334839344,
      -0.07213461399078369,
      0.07258238643407822,
      0.029692549258470535,
      -0.07720182090997696,
      0.06604505330324173,
      -0.03950616717338562,
      0.0718868151307106,
      0.04493817314505577,
      -0.0314534455537796,
      -0.030701853334903717,
      -0.08796291798353195,
      -0.05538688972592354,
      -0.06156947836279869,
      0.05002882331609726,
      0.07933622598648071,
      -0.020589951425790787,
      0.05285611376166344,
      -0.002958221361041069,
      0.06196495518088341,
      -0.06776328384876251,
      -0.01742521859705448,
      0.042384106665849686,
      0.014481722377240658,
      -0.0747724398970604,
      0.05383464694023132,
      -0.08280304074287415,
      0.011967913247644901,
      0.03378397226333618,
      0.028203085064888,
      0.06906410306692123,
      -0.024541588500142097,
      -0.03706051781773567,
      -0.04764759540557861,
      -0.06085972487926483,
      0.054613083600997925,
      -0.06482496112585068,
      0.07160744816064835,
      -0.025887833908200264,
      -0.042310528457164764,
      -0.023546161130070686,
      -0.02388015016913414,
      -0.02745862305164337,
      -0.004413709044456482,
      0.0217765923589468,
      0.04101128503680229,
      0.0311012864112854,
      0.06666771322488785,
      0.06664169579744339,
      0.04038144648075104,
      0.027694644406437874,
      0.05921884626150131,
      0.09957871586084366,
      -0.042109306901693344,
      0.013674396090209484,
      0.028589366003870964,
      -0.05871076509356499,
      -0.08283720165491104,
      0.056237924844026566,
      -0.06577497720718384,
      0.03369565308094025,
      0.027351947501301765,
      0.06407508254051208,
      0.062438346445560455,
      -0.017851347103714943,
      0.07690964639186859,
      -0.08037712424993515,
      0.0459057055413723,
      0.018374167382717133,
      0.05437617748975754,
      0.0285652969032526,
      0.05673469603061676,
      -0.07264135032892227,
      -0.04703589901328087,
      -0.05459915101528168,
      0.03243875131011009,
      0.07113339006900787,
      -0.05962013825774193,
      -0.02290371060371399,
      -0.03929391875863075,
      0.021666450425982475,
      -0.10015460103750229,
      -0.03372875973582268,
      0.0569453202188015,
      0.048614583909511566,
      -0.01874496601521969,
      -0.004518117289990187,
      -0.06209073215723038,
      0.03425395116209984,
      -0.0631699413061142,
      0.02978675439953804,
      0.004489361774176359,
      0.0577867217361927,
      -0.034724410623311996,
      0.014506585896015167,
      0.07905085384845734,
      0.029510855674743652,
      -0.028187967836856842,
      -0.03641830012202263,
      -0.010859058238565922,
      -0.028593340888619423,
      -0.053592611104249954,
      -0.04384482651948929,
      -0.04148175194859505,
      0.006579065695405006,
      0.02945694513618946,
      -0.06645114719867706,
      -0.022986359894275665,
      0.02593545988202095,
      -0.05225764960050583,
      -0.07858698070049286,
      -0.05192647874355316,
      0.03644028678536415,
      -0.0017932429909706116,
      0.05581318214535713,
      0.03860790655016899,
      0.052508678287267685,
      35193742951378226e-20,
      -0.008921484462916851,
      0.06124886870384216,
      0.03989252820611,
      0.07060237228870392,
      0.025257086381316185,
      -0.06550481170415878,
      0.052676454186439514,
      -0.05730472505092621,
      0.03104879893362522,
      0.00248718005605042,
      -0.07817720621824265,
      -0.09334126114845276,
      0.05060223489999771,
      -0.062308285385370255,
      0.002378117525950074,
      0.013039021752774715,
      0.04597874730825424,
      -0.0584525465965271,
      0.020195074379444122,
      0.06522510945796967,
      -0.007272378541529179,
      0.05198168754577637,
      -0.09128730744123459,
      -0.09351136535406113,
      0.033626947551965714,
      0.0975932702422142,
      -0.07029805332422256,
      -0.05006255581974983,
      0.037491340190172195,
      -0.05319029837846756,
      -0.024709302932024002,
      -0.06020467355847359,
      -0.06175443157553673,
      -0.034596383571624756,
      -0.04353075101971626,
      0.020086409524083138,
      0.023213503882288933,
      0.030475543811917305,
      -0.06817835569381714,
      0.015738654881715775,
      -0.05975087732076645,
      0.07708990573883057,
      -0.04729517176747322,
      0.04284510761499405,
      -0.062455177307128906,
      -0.06937399506568909,
      0.035616934299468994,
      0.0020715484861284494,
      0.053166553378105164,
      0.006738226395100355,
      -0.06336241960525513,
      -0.06836012005805969,
      -0.05375761166214943,
      -0.024425556883215904,
      0.025680001825094223,
      0.08652757108211517,
      0.03563655912876129,
      -0.052815329283475876,
      0.02896931953728199,
      0.038063306361436844,
      -0.009943639859557152,
      0.10926274210214615,
      0.04064542427659035,
      0.07111918181180954,
      0.06403710693120956,
      -0.019643446430563927,
      -0.0615604929625988,
      -0.04326422140002251,
      -0.07167651504278183,
      -0.04815635085105896,
      0.02084200270473957,
      0.037036120891571045,
      -0.06328953057527542,
      -0.05738656595349312,
      -0.05091576650738716,
      0.014033571816980839,
      0.09734329581260681,
      -0.08026900887489319,
      -0.06104361265897751,
      0.03068486787378788,
      0.009719752706587315,
      0.03562932088971138,
      0.025408759713172913,
      0.07327724248170853,
      -0.001736842910759151,
      -9749438613653183e-19,
      0.022655462846159935,
      -0.04369925335049629,
      -0.08401316404342651,
      -0.01596072129905224,
      -0.09848687797784805,
      0.04321632906794548,
      -0.040207382291555405,
      0.05399846285581589,
      0.04511317238211632,
      -0.0011469746241346002,
      0.03579925373196602,
      -0.034141656011343,
      0.049290675669908524,
      -0.04979078471660614,
      -0.06284848600625992,
      0.0356084443628788,
      0.03936515003442764,
      -0.07948750257492065,
      0.0675341784954071,
      -0.058364659547805786,
      0.048115599900484085,
      0.014175480231642723,
      0.04575366526842117,
      0.046513721346855164,
      0.007838272489607334,
      -0.0706874430179596,
      9086874197237194e-19,
      0.06335598975419998,
      0.03818945214152336,
      -0.015138454735279083,
      0.008716515265405178,
      -0.06670384854078293,
      -0.0525430291891098,
      -0.06584010273218155,
      -0.05150328949093819,
      0.009756296873092651,
      -0.05980779230594635,
      0.050663601607084274,
      0.05908368155360222,
      -0.010271760635077953,
      -0.0035613388754427433,
      0.03748943284153938,
      0.04592321440577507,
      0.026475366204977036,
      -0.02676745317876339,
      -0.048442546278238297,
      0.002576309721916914,
      -0.021138016134500504,
      -0.019605208188295364,
      -0.03700273111462593,
      0.05808882787823677,
      -0.05611589550971985,
      -0.07514888793230057,
      0.03740037605166435,
      0.035048965364694595,
      -0.06311753392219543,
      0.08669602125883102,
      -0.03752387315034866,
      -0.03907952085137367,
      0.07112883776426315,
      -0.03867014870047569,
      -0.006511629559099674,
      0.02958790399134159,
      0.0933910682797432,
      -0.11182136088609695,
      0.002946499502286315,
      0.006049843970686197,
      -0.07948167622089386,
      0.045569900423288345,
      -0.06365638971328735,
      -0.04024774581193924,
      0.03156401589512825,
      0.045010149478912354,
      -0.07598105072975159,
      -0.03283032402396202,
      0.042722612619400024,
      0.05154093727469444,
      0.00529067637398839,
      0.01884181797504425,
      0.016946522518992424,
      -0.014301721937954426,
      0.05163094401359558,
      -0.07710449397563934,
      0.05805618688464165,
      0.071497842669487,
      -0.034782834351062775,
      0.014303689822554588,
      -43120133341290057e-20,
      -0.09102828055620193,
      -0.01914503052830696,
      0.03175054118037224,
      -0.04755198210477829,
      -0.03093886375427246,
      0.021961634978652,
      0.0472559779882431,
      0.04624548926949501,
      0.06390488892793655
    ]
  },
  {
    id: "teach",
    behavior: "CHAT",
    description: "Teach a concept step by step with examples.",
    embedding: [
      0.051994260400533676,
      -0.002690244233235717,
      -0.03628993779420853,
      -0.08563107252120972,
      0.057653073221445084,
      -0.02629542537033558,
      -0.005482575856149197,
      0.038007572293281555,
      0.052472494542598724,
      0.02336932346224785,
      0.04085354879498482,
      0.02161462791264057,
      0.09447863698005676,
      -0.029283028095960617,
      -0.053008291870355606,
      0.03846340626478195,
      0.06028449907898903,
      -0.051763247698545456,
      -0.10533392429351807,
      -0.029755637049674988,
      0.022687459364533424,
      -0.011158701963722706,
      0.02898644469678402,
      0.07507962733507156,
      0.04475155845284462,
      0.06600693613290787,
      -0.02946149744093418,
      0.01316379476338625,
      0.04318557307124138,
      -0.05318639427423477,
      -0.061730578541755676,
      -0.047424543648958206,
      0.05878165736794472,
      -0.05816112458705902,
      0.052283111959695816,
      0.03516435623168945,
      0.010688054375350475,
      -0.048172228038311005,
      0.0025310060009360313,
      -0.06337142735719681,
      -0.036030735820531845,
      -0.01933511346578598,
      0.05025072395801544,
      0.0387621745467186,
      0.0924186035990715,
      0.0376453660428524,
      -0.04256860539317131,
      0.028769738972187042,
      -0.09752195328474045,
      -0.04072711244225502,
      -0.03207710385322571,
      0.047264501452445984,
      0.03733503073453903,
      0.07821883261203766,
      0.048561498522758484,
      -0.09328027069568634,
      -0.033508848398923874,
      -0.0966845452785492,
      -0.06260424107313156,
      -0.006007454823702574,
      0.0928940400481224,
      -0.0074561238288879395,
      0.024005305022001266,
      0.06702535599470139,
      0.09349668025970459,
      0.09345974028110504,
      0.01697417162358761,
      0.0168637502938509,
      -0.03959248587489128,
      -0.015865467488765717,
      -0.05343364551663399,
      0.061350662261247635,
      -0.023136062547564507,
      -0.03374796360731125,
      -41179024265147746e-21,
      0.0392938032746315,
      0.023711005225777626,
      -0.05120823532342911,
      0.0410257987678051,
      -0.05554921180009842,
      -0.050644293427467346,
      -0.037179045379161835,
      -0.015971127897500992,
      0.019879793748259544,
      -0.0554983988404274,
      0.0723891332745552,
      0.043189194053411484,
      -0.05855250358581543,
      0.06429772078990936,
      -0.03599308058619499,
      0.03285743296146393,
      0.04158724471926689,
      -0.08808299154043198,
      -0.04540589079260826,
      -0.06661566346883774,
      -0.05493679270148277,
      -0.042455412447452545,
      0.08468171209096909,
      0.056604478508234024,
      -0.04170864820480347,
      0.03739218786358833,
      -0.014176325872540474,
      0.04680681601166725,
      -0.1143648773431778,
      -0.06603790074586868,
      0.032361891120672226,
      0.01019814983010292,
      -0.05051587149500847,
      0.0525347962975502,
      -0.09498604387044907,
      0.005972408223897219,
      0.031174395233392715,
      0.021250423043966293,
      0.04783984646201134,
      -0.041293058544397354,
      -0.002945025684311986,
      -0.08942193537950516,
      -0.06482032686471939,
      0.06385882943868637,
      -0.06800876557826996,
      0.05606522038578987,
      -0.05170696601271629,
      -0.03824087232351303,
      -0.018716808408498764,
      -0.05097236484289169,
      -0.022334598004817963,
      0.008192280307412148,
      0.0583772137761116,
      0.020071491599082947,
      0.03772440552711487,
      0.05657577887177467,
      0.027705196291208267,
      0.0021927535999566317,
      0.05341869965195656,
      0.03560006245970726,
      0.10732545703649521,
      -0.02019888162612915,
      0.03150930255651474,
      -0.003980216104537249,
      -0.022544363513588905,
      -0.058382585644721985,
      0.03335366025567055,
      -0.03382109850645065,
      0.04858263581991196,
      0.047533899545669556,
      0.04813949018716812,
      0.04733531177043915,
      -0.002416745526716113,
      0.08524136990308762,
      -0.002012742217630148,
      0.028873784467577934,
      0.05898680537939072,
      0.029368262737989426,
      0.008116248995065689,
      0.046353790909051895,
      -0.032798413187265396,
      -0.0673014298081398,
      -0.024456687271595,
      0.04872364178299904,
      0.02784270979464054,
      -0.05722740292549133,
      -0.02728053368628025,
      -0.03158733248710632,
      0.01114338357001543,
      -0.08735927939414978,
      -0.04359841346740723,
      0.036168090999126434,
      0.050283245742321014,
      -0.06532513350248337,
      -0.0256589837372303,
      -0.03399571403861046,
      0.027308810502290726,
      -0.004714799579232931,
      -0.011474275030195713,
      -0.00625384459272027,
      0.03293100744485855,
      -0.028774412348866463,
      0.03160354122519493,
      0.08310205489397049,
      0.03935103490948677,
      0.012729357928037643,
      -0.03576616570353508,
      -0.021770857274532318,
      -0.038028012961149216,
      -0.09387794137001038,
      -0.021267930045723915,
      -0.02954600565135479,
      0.015784554183483124,
      -0.014270398765802383,
      -0.021874208003282547,
      0.006699517369270325,
      0.03903894126415253,
      -0.05377601832151413,
      -0.08464173227548599,
      -0.06472290307283401,
      0.04640047997236252,
      -0.040516842156648636,
      0.07782818377017975,
      0.05888165161013603,
      0.026815103366971016,
      -0.030126526951789856,
      -0.03931427001953125,
      0.07060504704713821,
      0.045105595141649246,
      0.04397932067513466,
      0.020388025790452957,
      -0.06129814684391022,
      0.0152554577216506,
      -0.03515325486660004,
      0.06982753425836563,
      0.018237534910440445,
      -0.06664504110813141,
      -0.055533427745103836,
      0.04096103087067604,
      -0.04158712923526764,
      -0.042397353798151016,
      0.0135066919028759,
      0.037703122943639755,
      -0.0663360208272934,
      0.0075650932267308235,
      0.07309790700674057,
      -0.018313253298401833,
      0.056967593729496,
      -0.05643594264984131,
      -0.07620302587747574,
      0.04056883975863457,
      0.0938701406121254,
      -0.04998202249407768,
      -0.027952197939157486,
      0.04094916582107544,
      -0.04226455092430115,
      -0.039961300790309906,
      -0.06446468830108643,
      -0.05883778631687164,
      -0.06746379286050797,
      -0.062305815517902374,
      -0.0037609641440212727,
      0.03607158362865448,
      0.03949308395385742,
      -0.038820575922727585,
      -0.015183261595666409,
      -0.035164207220077515,
      0.03968122974038124,
      -0.09157253801822662,
      0.055947478860616684,
      -0.024402905255556107,
      -0.031883105635643005,
      0.07833755761384964,
      0.00839111115783453,
      0.048677559942007065,
      0.026425596326589584,
      -0.055422522127628326,
      -0.060665298253297806,
      -0.05194277688860893,
      -0.014412363059818745,
      0.04586665704846382,
      0.07893463224172592,
      0.036182403564453125,
      -0.05117243900895119,
      0.04009418189525604,
      0.0025729648768901825,
      -0.06668651849031448,
      0.06262879818677902,
      0.03127580136060715,
      0.06863988935947418,
      0.06525013595819473,
      -0.06907732784748077,
      -0.027834895998239517,
      -0.07346585392951965,
      -0.03523605689406395,
      -0.0842718780040741,
      0.03910774365067482,
      0.021639009937644005,
      -0.02144664153456688,
      -0.02414005994796753,
      -0.03232230246067047,
      0.029552578926086426,
      0.07768585532903671,
      -0.049627821892499924,
      -0.07798247784376144,
      -0.027839532122015953,
      0.015563101507723331,
      0.03811691701412201,
      0.09817805141210556,
      0.05471976473927498,
      0.009342707693576813,
      -0.005572077818214893,
      0.07145056128501892,
      -0.052961159497499466,
      -0.05142897367477417,
      -0.029727984219789505,
      -0.10916490107774734,
      0.02210173010826111,
      -0.016049601137638092,
      0.1244426816701889,
      0.03435569629073143,
      0.01994142308831215,
      0.08959569782018661,
      -0.02718726545572281,
      0.05918818712234497,
      -0.034795429557561874,
      -0.08238016813993454,
      0.058889567852020264,
      0.0518861785531044,
      -0.07634742558002472,
      0.062027279287576675,
      -0.013633402064442635,
      0.033212270587682724,
      0.0321638397872448,
      0.04687938094139099,
      0.03948729485273361,
      0.052313778549432755,
      -0.046205487102270126,
      -0.006482604891061783,
      0.054367609322071075,
      0.1011061742901802,
      -0.006317415274679661,
      0.0025339056737720966,
      -0.0687958225607872,
      -0.0498591847717762,
      -0.05899282544851303,
      -0.06546691060066223,
      0.0035798896569758654,
      -0.03486410528421402,
      0.05069097504019737,
      0.06570353358983994,
      -0.040961265563964844,
      -0.04050053283572197,
      0.04771227017045021,
      0.009309782646596432,
      0.03383800387382507,
      -0.02040260098874569,
      -0.043299321085214615,
      -0.014177290722727776,
      -0.08171607553958893,
      -0.08294800668954849,
      -0.048219624906778336,
      0.07160875201225281,
      -0.010187186300754547,
      -0.08090630173683167,
      0.032810278236866,
      0.06487146019935608,
      -0.05213136598467827,
      0.0453791581094265,
      -0.018309013918042183,
      -0.07213161885738373,
      0.016561131924390793,
      -0.04560568183660507,
      -0.03388821333646774,
      0.020516812801361084,
      0.07378210127353668,
      -0.13080237805843353,
      -0.02153552696108818,
      0.013908625580370426,
      -0.10938488692045212,
      0.016598094254732132,
      -0.09698236733675003,
      -0.00964952539652586,
      0.04501085728406906,
      0.04938880354166031,
      -0.02840479649603367,
      -0.024935154244303703,
      0.0720939189195633,
      0.007529258728027344,
      0.02184685878455639,
      0.051182396709918976,
      -0.012181858532130718,
      -0.025114089250564575,
      -35814886359730735e-21,
      -0.02999456226825714,
      0.07519036531448364,
      0.0691041499376297,
      -0.07782179117202759,
      0.03235907480120659,
      0.03125443309545517,
      -0.0720699355006218,
      -0.0357852429151535,
      0.02370416186749935,
      -0.05827716737985611,
      -0.03639715164899826,
      0.028088731691241264,
      0.08856124430894852,
      0.06601596623659134,
      0.05086581036448479
    ]
  },
  {
    id: "translate",
    behavior: "CHAT",
    description: "Translate text while preserving meaning and tone.",
    embedding: [
      0.039784714579582214,
      -0.030996324494481087,
      -0.021062226966023445,
      -0.08177001029253006,
      0.043151747435331345,
      -0.01765209436416626,
      0.01162578072398901,
      -0.005742867477238178,
      0.023668402805924416,
      0.03342041000723839,
      0.04171215370297432,
      -0.002968166023492813,
      0.11699874699115753,
      0.009845131076872349,
      -0.042775675654411316,
      0.03666973114013672,
      0.09559202194213867,
      -0.0046535152941942215,
      -0.06127864494919777,
      -0.018740374594926834,
      0.011522278189659119,
      -0.027075430378317833,
      -0.013499909080564976,
      0.06335809826850891,
      0.05320131406188011,
      0.07576265186071396,
      -0.06518746167421341,
      0.049994293600320816,
      0.045092977583408356,
      -0.028244173154234886,
      -0.04556705057621002,
      -0.020741205662488937,
      0.05452529713511467,
      -0.06565488874912262,
      0.053692977875471115,
      0.032079003751277924,
      -0.05377734452486038,
      -0.053597476333379745,
      0.037582047283649445,
      -0.07240477949380875,
      -0.021999269723892212,
      0.02973989024758339,
      0.026633739471435547,
      0.07541756331920624,
      0.06402841210365295,
      0.022991709411144257,
      -0.06270154565572739,
      0.03215061500668526,
      -0.05434213951230049,
      -0.03769490122795105,
      -0.05199339985847473,
      0.04486214742064476,
      0.009605900384485722,
      0.07635081559419632,
      0.03506451100111008,
      -0.06451515853404999,
      -0.05863400548696518,
      -0.08467888087034225,
      -0.06028120592236519,
      0.007922934368252754,
      0.06957118958234787,
      -0.016689358279109,
      0.004227244295179844,
      0.03124731406569481,
      0.1385173350572586,
      0.07825794816017151,
      0.03184221684932709,
      0.012454281561076641,
      0.00360644469037652,
      -0.006829493213444948,
      -0.042819544672966,
      0.035364240407943726,
      -0.03353765234351158,
      -0.045077141374349594,
      0.005923279095441103,
      0.02496962435543537,
      0.03472878038883209,
      -0.08208517730236053,
      0.035040322691202164,
      -0.0635630190372467,
      -0.057768866419792175,
      -0.06721623986959457,
      -0.08611299842596054,
      0.044139180332422256,
      -0.055482808500528336,
      0.05470715090632439,
      0.05585600435733795,
      -0.07368720322847366,
      0.06366398185491562,
      -0.004702785983681679,
      0.04299141839146614,
      0.02006940171122551,
      -0.06536423414945602,
      -0.03246401250362396,
      -0.09642334282398224,
      -0.05629514530301094,
      -0.005273388233035803,
      0.09093046933412552,
      0.042905036360025406,
      -0.017414629459381104,
      0.06388397514820099,
      -0.05298393964767456,
      0.035711731761693954,
      -0.10128448903560638,
      -0.06286557018756866,
      0.06469107419252396,
      0.04599251225590706,
      -0.05295741930603981,
      0.05140484496951103,
      -0.0640416070818901,
      -0.005710082594305277,
      0.016117382794618607,
      0.04432849586009979,
      0.03591597080230713,
      -0.06506523489952087,
      -0.05314743146300316,
      -0.08895015716552734,
      -0.031233640387654305,
      0.03382871672511101,
      -0.06678212434053421,
      0.04477047175168991,
      -0.009502195753157139,
      -0.024229982867836952,
      -0.03643065690994263,
      -0.042410410940647125,
      -0.05767301470041275,
      0.03255302831530571,
      0.03888571262359619,
      0.028173260390758514,
      0.031912900507450104,
      0.06829861551523209,
      0.011653924360871315,
      0.013005201704800129,
      0.07715915888547897,
      0.022903548553586006,
      0.0972331166267395,
      -0.01798267662525177,
      0.04069684073328972,
      0.0015798254171386361,
      -0.002585561713203788,
      -0.05039728805422783,
      0.0748661682009697,
      -0.03612428531050682,
      -0.008355696685612202,
      0.03935343772172928,
      0.038956012576818466,
      0.03327394276857376,
      0.007622528355568647,
      0.07457058876752853,
      -0.05419701710343361,
      0.018203701823949814,
      -0.0033935976680368185,
      0.045889586210250854,
      0.030909257009625435,
      0.04908180236816406,
      -0.04040496423840523,
      -0.07765910774469376,
      -0.05839191749691963,
      0.05656358227133751,
      0.041764210909605026,
      -0.06181010976433754,
      -0.06642674654722214,
      -0.07990992814302444,
      0.01405323389917612,
      -0.046338412910699844,
      -0.04347547888755798,
      0.04789813980460167,
      0.05289065092802048,
      -0.0539470799267292,
      -0.024222277104854584,
      -0.07573830336332321,
      0.02024693600833416,
      -0.04063662141561508,
      0.04624258726835251,
      -0.015551903285086155,
      0.005592421628534794,
      -0.07184349745512009,
      0.07326260209083557,
      0.05817951261997223,
      0.039717912673950195,
      -0.02149617113173008,
      -0.010100087150931358,
      0.009393691085278988,
      -0.036828603595495224,
      -0.06336886435747147,
      -0.045220911502838135,
      -0.09075408428907394,
      0.07043071836233139,
      0.039693623781204224,
      -0.047224726527929306,
      0.023499008268117905,
      0.03645247966051102,
      -0.04685897380113602,
      -0.08223804831504822,
      -0.077971450984478,
      0.03261826932430267,
      -0.021426517516374588,
      0.0622958242893219,
      0.06553324311971664,
      0.05785932391881943,
      -0.01387866586446762,
      -0.04488464444875717,
      0.04073955491185188,
      0.030581366270780563,
      0.021148687228560448,
      0.019261764362454414,
      -0.09495629370212555,
      0.036078840494155884,
      -0.008029509335756302,
      0.05447795242071152,
      0.039474356919527054,
      -0.10876165330410004,
      -0.05572189390659332,
      0.062034375965595245,
      -0.06759244948625565,
      -0.06910806149244308,
      0.03293533995747566,
      0.08425123989582062,
      -0.0666886493563652,
      0.017087861895561218,
      0.07955317944288254,
      -0.022979119792580605,
      0.042093247175216675,
      -0.06381268054246902,
      -0.07638165354728699,
      0.03560737147927284,
      0.09437590092420578,
      -0.053351789712905884,
      -0.04720378667116165,
      0.025047563016414642,
      -0.010084393434226513,
      -0.04130549728870392,
      -0.05534010007977486,
      -0.03458206355571747,
      -0.028542019426822662,
      -0.045816805213689804,
      0.05603713542222977,
      0.03084416128695011,
      0.09668956696987152,
      -0.03004470281302929,
      0.031205197796225548,
      -0.03744377940893173,
      0.05490153655409813,
      -0.08575752377510071,
      0.06277641654014587,
      -0.020244117826223373,
      -0.011944049969315529,
      0.046051427721977234,
      -0.008664111606776714,
      0.08595263212919235,
      -0.008347518742084503,
      -0.008629672229290009,
      -0.07791197299957275,
      -0.04752290993928909,
      -0.016838861629366875,
      0.0031708714086562395,
      0.08299203217029572,
      0.08801259845495224,
      -0.05471105873584747,
      0.03478507697582245,
      0.023591795936226845,
      -0.08222397416830063,
      0.09677165001630783,
      0.047599900513887405,
      0.04734078049659729,
      0.039470065385103226,
      -0.062381964176893234,
      -0.04099470376968384,
      -0.12228106707334518,
      -0.0529838390648365,
      -0.057291269302368164,
      0.033052630722522736,
      0.017272578552365303,
      -0.03776158019900322,
      -0.062064964324235916,
      -0.029396824538707733,
      0.010575328022241592,
      0.06517535448074341,
      -0.02849491871893406,
      -0.027284134179353714,
      0.02720787562429905,
      0.02184104360640049,
      0.013592013157904148,
      0.031276505440473557,
      0.06281030178070068,
      0.05956078693270683,
      -0.007472829427570105,
      0.04198845475912094,
      -0.05216793343424797,
      -0.07761428505182266,
      -0.03423301503062248,
      -0.08335741609334946,
      0.013416802510619164,
      0.002479297574609518,
      0.015612349845468998,
      0.04468366503715515,
      0.0010810861131176353,
      0.043483566492795944,
      -0.022228432819247246,
      0.05460753291845322,
      -0.02263692207634449,
      -0.10301636904478073,
      0.023520775139331818,
      0.06735953688621521,
      -0.061371270567178726,
      0.023615004494786263,
      -0.03547912836074829,
      0.0018271190347149968,
      0.003938297275453806,
      0.050513312220573425,
      0.050241485238075256,
      0.05636674538254738,
      -0.08637408912181854,
      0.007629438303411007,
      0.07493550330400467,
      0.06396728754043579,
      -0.015484784729778767,
      -0.0021461572032421827,
      -0.026267241686582565,
      -0.05179527401924133,
      -0.06000623106956482,
      -0.062463000416755676,
      -0.02377127856016159,
      -0.07995907217264175,
      0.04830121621489525,
      0.04776352643966675,
      -0.03729977086186409,
      -0.04239395633339882,
      0.054234933108091354,
      0.005147955380380154,
      0.056854646652936935,
      -0.045307233929634094,
      -0.0235665924847126,
      0.004130288492888212,
      -0.02191067300736904,
      -0.004207187332212925,
      -0.04844145476818085,
      0.04718005284667015,
      -0.049308158457279205,
      -0.05286357179284096,
      0.024914417415857315,
      0.05550568550825119,
      -0.07500280439853668,
      0.0750839114189148,
      -0.043729860335588455,
      -0.07210302352905273,
      0.04721260070800781,
      -0.031177470460534096,
      0.02754172869026661,
      0.052457839250564575,
      0.05489833280444145,
      -0.12281972169876099,
      0.02378532849252224,
      0.06551633030176163,
      -0.013273274526000023,
      0.058090128004550934,
      -0.08419878780841827,
      -0.010949931107461452,
      0.022409895434975624,
      0.044784508645534515,
      -0.040741998702287674,
      -0.039345450699329376,
      0.023692121729254723,
      0.0519324466586113,
      0.03434258699417114,
      0.035100847482681274,
      -0.016470927745103836,
      -0.025520049035549164,
      0.026432275772094727,
      -0.0472719669342041,
      0.055303964763879776,
      0.0566173754632473,
      -0.04453802853822708,
      -0.02883472479879856,
      -0.01772538758814335,
      -0.07150140404701233,
      -0.04487144947052002,
      0.043311793357133865,
      -0.07597751915454865,
      0.009904996491968632,
      0.025076335296034813,
      0.08254331350326538,
      0.06681810319423676,
      0.05159549042582512
    ]
  },
  {
    id: "architecture",
    behavior: "PLAN",
    description: "system structure, technical planning, migration, high-level design (mimari plan)",
    embedding: [
      0.041867293417453766,
      -0.019780373200774193,
      -0.023356948047876358,
      -0.03673721104860306,
      0.08815690875053406,
      -0.03777361288666725,
      0.0655064582824707,
      0.033430397510528564,
      0.050329145044088364,
      0.014751003123819828,
      0.05029565468430519,
      -0.06765513867139816,
      0.08619356155395508,
      -0.008974201045930386,
      -0.027700036764144897,
      0.05603451654314995,
      0.07126571238040924,
      -0.04571563005447388,
      -0.045053835958242416,
      -0.040028322488069534,
      0.059214670211076736,
      -0.040206775069236755,
      -0.03388935700058937,
      0.049175161868333817,
      0.040537670254707336,
      0.022058013826608658,
      -0.03616950288414955,
      -8170813089236617e-19,
      0.0549815371632576,
      -0.02980194240808487,
      -0.02082427404820919,
      -0.016609197482466698,
      0.06991314888000488,
      -0.0636032298207283,
      0.053610388189554214,
      0.049226194620132446,
      -0.06029286980628967,
      -0.014309222809970379,
      0.006415247917175293,
      -0.09574294835329056,
      -0.022930331528186798,
      0.002417851472273469,
      0.04991183802485466,
      0.04944787546992302,
      0.04010938107967377,
      0.08441603183746338,
      -0.0027773804031312466,
      -0.0034382930025458336,
      -0.03025207482278347,
      -0.02740621753036976,
      -0.060521744191646576,
      0.09874390065670013,
      0.06822744011878967,
      0.052291419357061386,
      0.0011794980382546782,
      -0.04003407061100006,
      -0.029319044202566147,
      -0.03793272003531456,
      -0.03587000444531441,
      0.03581405058503151,
      0.002609316259622574,
      -0.02159680612385273,
      0.029815876856446266,
      0.031210346147418022,
      0.0756804421544075,
      0.040207430720329285,
      0.06479182094335556,
      0.028498604893684387,
      -0.03549651801586151,
      -0.04714497923851013,
      -0.056903574615716934,
      0.04726802557706833,
      -0.038056012243032455,
      -0.03919871896505356,
      0.03320566192269325,
      0.007658630143851042,
      0.029103774577379227,
      -0.05703848972916603,
      0.05732501298189163,
      -0.039990294724702835,
      -0.115085169672966,
      -0.03451849892735481,
      -0.039311472326517105,
      0.02403142862021923,
      -0.08138632774353027,
      0.05456971749663353,
      0.03708492964506149,
      -0.025072287768125534,
      0.06870425492525101,
      -0.07247955352067947,
      0.04415750876069069,
      0.04233415797352791,
      -0.06759065389633179,
      -0.02281981147825718,
      -0.08820147812366486,
      -0.08123306185007095,
      -0.0729641541838646,
      0.07799425721168518,
      0.09030618518590927,
      -0.04812652990221977,
      0.04732663929462433,
      0.006610784213989973,
      0.05969197675585747,
      -0.09628879278898239,
      -0.08236659318208694,
      0.03973883017897606,
      0.021533962339162827,
      -0.03578996658325195,
      0.040500570088624954,
      -0.06995376199483871,
      -0.02859652042388916,
      0.02477956935763359,
      0.05063335597515106,
      0.030775053426623344,
      -0.007868234999477863,
      -0.05841754376888275,
      -0.03730001673102379,
      -0.0504336878657341,
      0.03472215682268143,
      -0.0376722477376461,
      0.03725549578666687,
      -0.01037117000669241,
      -0.04802900552749634,
      -0.060496121644973755,
      -0.06088947877287865,
      -0.07169991731643677,
      0.059506047517061234,
      0.040407851338386536,
      0.0034971428103744984,
      -0.05039184167981148,
      0.03178958594799042,
      0.07492711395025253,
      0.04344290867447853,
      0.02193829044699669,
      0.0915825217962265,
      0.11047244817018509,
      -0.03707646206021309,
      0.030067401006817818,
      -0.008228078484535217,
      -0.027715934440493584,
      -0.07261435687541962,
      0.0882197767496109,
      -0.05325114354491234,
      0.027442963793873787,
      0.05625196918845177,
      0.03910106047987938,
      0.0627194494009018,
      -0.012530715204775333,
      0.07246444374322891,
      -0.04042345657944679,
      0.09296398609876633,
      9568959940224886e-19,
      0.036371029913425446,
      0.017032543197274208,
      0.049332622438669205,
      -0.05589711666107178,
      -0.020984772592782974,
      -0.010424056090414524,
      0.07848957926034927,
      0.0758582353591919,
      -0.038063742220401764,
      -0.04227333888411522,
      -0.06350167840719223,
      -0.05438464134931564,
      -0.0563700906932354,
      -0.06707373261451721,
      0.027837416157126427,
      0.057386815547943115,
      -0.07024475187063217,
      -0.02393798902630806,
      -0.04404506832361221,
      0.053937844932079315,
      -0.047229327261447906,
      0.03718186169862747,
      -0.0194317065179348,
      0.0419512502849102,
      -0.06227974221110344,
      0.012114325538277626,
      0.08529918640851974,
      0.057351622730493546,
      -0.025986947119235992,
      -0.03680102527141571,
      -0.04311375692486763,
      -0.02580398879945278,
      -0.12370601296424866,
      -0.022240418940782547,
      -0.06536217033863068,
      0.022822441533207893,
      -0.02463827282190323,
      -0.011034834198653698,
      0.038298819214105606,
      0.03576776757836342,
      -0.07646753638982773,
      -0.06838787347078323,
      -0.09312764555215836,
      0.07307510077953339,
      -0.03411218896508217,
      0.05031218379735947,
      0.018653757870197296,
      0.03982427716255188,
      -0.03561374917626381,
      -0.013915026560425758,
      0.03650886192917824,
      0.024497762322425842,
      0.03503996133804321,
      0.052694760262966156,
      -0.03947606310248375,
      0.08662378042936325,
      -0.029789315536618233,
      0.057030435651540756,
      0.054909709841012955,
      -0.08469539880752563,
      -0.047837287187576294,
      0.06278365105390549,
      -0.02088066376745701,
      0.010438370518386364,
      -0.031710874289274216,
      0.07645495980978012,
      -0.047961920499801636,
      0.031093982979655266,
      0.09290621429681778,
      -0.05475204437971115,
      0.07681410014629364,
      -0.07908562570810318,
      -0.06973809003829956,
      0.026499681174755096,
      0.04007577896118164,
      -0.10337818413972855,
      -0.04432303458452225,
      0.06433521211147308,
      -0.008447954431176186,
      -0.02344507724046707,
      -0.08507409691810608,
      -0.0568707101047039,
      -0.0489276759326458,
      -0.07310691475868225,
      -0.03405340015888214,
      0.04461843892931938,
      0.04155131056904793,
      -0.030019540339708328,
      -0.02748040109872818,
      -0.0345577709376812,
      -0.0023111840710043907,
      -0.07453987002372742,
      0.053032197058200836,
      -0.0034234430640935898,
      -0.06643401086330414,
      0.03917892277240753,
      0.01870609261095524,
      0.0018545235507190228,
      0.04551040753722191,
      -0.050030238926410675,
      -0.06813003122806549,
      -0.0323505625128746,
      -0.04299873858690262,
      0.04141882434487343,
      0.11367547512054443,
      0.061491481959819794,
      -0.04415389150381088,
      0.021340619772672653,
      0.006982977502048016,
      -0.020618056878447533,
      0.07596366107463837,
      0.02979212813079357,
      0.06974931061267853,
      -0.024522390216588974,
      -0.07251238822937012,
      -0.05291465297341347,
      -0.10317441821098328,
      -0.029801765456795692,
      -0.08466267585754395,
      0.01282862201333046,
      0.07092210650444031,
      -0.07020507752895355,
      -0.046647291630506516,
      -0.06391461938619614,
      0.027054501697421074,
      0.07622230052947998,
      -0.024136360734701157,
      -0.07116209715604782,
      32525491405976936e-21,
      0.003171038581058383,
      0.05508379638195038,
      0.06562027335166931,
      0.04346783831715584,
      -0.02258134074509144,
      0.022719813510775566,
      0.053752101957798004,
      0.006462166551500559,
      -0.03144047409296036,
      -0.032184187322854996,
      -0.06926760822534561,
      0.032577987760305405,
      -0.03073064424097538,
      0.0810031145811081,
      0.03169966861605644,
      0.00277686957269907,
      0.06195463240146637,
      -0.05185253173112869,
      0.0704481452703476,
      -0.03201861307024956,
      -0.04149384796619415,
      0.04626614972949028,
      0.025350794196128845,
      -0.07825542986392975,
      0.07881799340248108,
      0.015976641327142715,
      0.02521805465221405,
      0.03227464109659195,
      0.03261798620223999,
      -0.0029053858015686274,
      0.014818398281931877,
      -0.04338197410106659,
      -0.024806959554553032,
      0.06969194859266281,
      0.05089658498764038,
      0.01475693192332983,
      0.08554431796073914,
      -0.0691445991396904,
      -0.05385208874940872,
      -0.05383783206343651,
      -0.06549715250730515,
      -0.02582838386297226,
      -0.050044797360897064,
      0.07478534430265427,
      0.04071221873164177,
      -0.04278751462697983,
      -0.010248393751680851,
      20534619397949427e-20,
      0.0014482509577646852,
      0.06801711022853851,
      -0.031169725582003593,
      -0.048004891723394394,
      0.022596249356865883,
      -0.04024580121040344,
      -0.020705828443169594,
      0.004327805247157812,
      0.0387757383286953,
      -0.06490118056535721,
      -0.049978531897068024,
      0.008493863977491856,
      0.05318913981318474,
      0.0015738296788185835,
      0.06326840072870255,
      -0.04018921032547951,
      -0.061355121433734894,
      0.050053179264068604,
      -0.04231632500886917,
      0.013961962424218655,
      0.030179426074028015,
      0.0638296827673912,
      -0.10160184651613235,
      0.01644144020974636,
      0.06334605067968369,
      -0.011419071815907955,
      0.052681419998407364,
      -0.03659582510590553,
      -0.03413243964314461,
      0.042137738317251205,
      0.051433950662612915,
      -0.07316537946462631,
      -0.053824298083782196,
      0.03965470939874649,
      0.04892287775874138,
      0.035435523837804794,
      0.045015763491392136,
      -0.008539277128875256,
      -0.007838974706828594,
      0.01573960669338703,
      -0.053779229521751404,
      0.0752265527844429,
      0.029599953442811966,
      -0.06738761067390442,
      -0.03434376418590546,
      -0.019947007298469543,
      -0.04065277427434921,
      -0.018430572003126144,
      0.034965287894010544,
      -0.09562918543815613,
      -0.0823868066072464,
      -0.0049696024507284164,
      0.04076746106147766,
      0.05540546774864197,
      0.0437290333211422
    ]
  },
  {
    id: "design",
    behavior: "PLAN",
    description: "visual direction, UI concept, color palette, aesthetics, presentation ideas (renk, g\xF6rsel, tasar\u0131m)",
    embedding: [
      0.04077315330505371,
      -0.025711018592119217,
      -0.03187070041894913,
      -0.042752455919981,
      0.10584773123264313,
      -0.055901821702718735,
      0.031207777559757233,
      0.003975922707468271,
      0.04458681493997574,
      0.009421776980161667,
      0.03661626949906349,
      30684220837429166e-20,
      0.10332485288381577,
      -0.01709246262907982,
      -0.04159630835056305,
      0.04840712621808052,
      0.0591212697327137,
      -0.04086339473724365,
      -0.06992663443088531,
      0.015029975213110447,
      0.03536283224821091,
      -0.005624121520668268,
      -0.0344536229968071,
      0.027240624651312828,
      0.07108955085277557,
      0.043141528964042664,
      -0.03284241631627083,
      -0.012448551133275032,
      0.04438303783535957,
      -0.1012180745601654,
      -0.05816270783543587,
      -0.035807088017463684,
      0.013680658303201199,
      -0.02716745249927044,
      0.025930650532245636,
      0.03275188431143761,
      -0.03461477905511856,
      -0.024652620777487755,
      0.03534531593322754,
      -0.05876338109374046,
      0.008179530501365662,
      -0.0038878321647644043,
      0.05151507630944252,
      0.0796123594045639,
      0.07023915648460388,
      0.05549127236008644,
      -0.009568958543241024,
      0.0687728002667427,
      -0.06298121809959412,
      -0.015268629416823387,
      -0.04213927313685417,
      0.04592609032988548,
      -0.0033469300251454115,
      0.038796547800302505,
      -0.021984634920954704,
      -0.07572309672832489,
      0.007359648589044809,
      -0.04715000092983246,
      -0.05899873003363609,
      0.007870888337492943,
      0.026321500539779663,
      -0.05648389086127281,
      0.02190989814698696,
      0.02219131775200367,
      0.09153813868761063,
      0.05834774300456047,
      0.053894318640232086,
      0.056035540997982025,
      -0.045190613716840744,
      -0.02355082705616951,
      -0.03781978040933609,
      0.030776018276810646,
      -0.021991616114974022,
      -0.04405461251735687,
      0.001586606726050377,
      0.019369950518012047,
      0.07305416464805603,
      -0.0842122808098793,
      0.041407693177461624,
      -0.024523796513676643,
      -0.09510384500026703,
      -0.04249519854784012,
      -0.019964536651968956,
      0.04961948096752167,
      -0.07219507545232773,
      0.07675419747829437,
      0.05841727554798126,
      -0.047354556620121,
      0.04857460781931877,
      -0.021550185978412628,
      0.03648294508457184,
      0.04633631184697151,
      -0.08229885995388031,
      -0.05010267347097397,
      -0.11099430173635483,
      -0.09758451581001282,
      -0.08747333288192749,
      0.07309090346097946,
      0.0839543268084526,
      -0.046789396554231644,
      0.043149374425411224,
      -0.00839216448366642,
      0.02901410683989525,
      -0.06469251215457916,
      -0.054066795855760574,
      0.0043936241418123245,
      0.014166133478283882,
      -0.012391522526741028,
      0.08382117003202438,
      -0.03910364955663681,
      -0.025959437713027,
      0.04766707494854927,
      0.013971623033285141,
      0.07059506326913834,
      -0.05740107595920563,
      -0.006103623192757368,
      5478470120579004e-19,
      -0.08506687730550766,
      0.05310814827680588,
      -0.060812920331954956,
      0.09210909903049469,
      -0.025546269491314888,
      -0.0741717666387558,
      -0.06950212270021439,
      -0.05540122091770172,
      -0.06105545535683632,
      0.09293855726718903,
      0.026966044679284096,
      14973323231970426e-21,
      -0.04182052984833717,
      0.019107308238744736,
      0.06962466239929199,
      0.05328426882624626,
      0.04843902587890625,
      0.04598410800099373,
      0.07560013234615326,
      -0.024815959855914116,
      0.03138141334056854,
      -0.026909934356808662,
      -0.007394615560770035,
      -0.034630078822374344,
      0.04719264432787895,
      -0.038596972823143005,
      0.07733836024999619,
      0.05534198880195618,
      0.03050026297569275,
      0.04115352779626846,
      -0.03569192439317703,
      0.053395263850688934,
      0.01629798486828804,
      0.06490851938724518,
      -0.001046196324750781,
      0.04204288497567177,
      0.021423354744911194,
      0.07655578851699829,
      -0.06560587882995605,
      -0.03747782111167908,
      -0.05173221603035927,
      0.06361110508441925,
      0.0494612455368042,
      -0.05582211911678314,
      -0.04001752287149429,
      -0.04122989624738693,
      -0.020878877490758896,
      -0.05369262769818306,
      -0.08214680105447769,
      0.03282064199447632,
      0.06563523411750793,
      -0.034281786531209946,
      -0.0037242197431623936,
      -0.10013110190629959,
      0.05749879404902458,
      -0.04603585600852966,
      0.013423050753772259,
      -0.012890225276350975,
      0.0726223960518837,
      -0.061184078454971313,
      0.03030189499258995,
      0.07806391268968582,
      0.053452491760253906,
      -0.01604032889008522,
      -0.010197713971138,
      -0.03193452209234238,
      -0.04466431587934494,
      -0.11661845445632935,
      -0.06728586554527283,
      -0.04826425388455391,
      0.05082332342863083,
      -0.006656039506196976,
      -0.006230317056179047,
      0.020432064309716225,
      0.06493163108825684,
      -0.08397325128316879,
      -0.1001090556383133,
      -0.07234034687280655,
      0.04906953126192093,
      -0.059354912489652634,
      0.03995290398597717,
      0.03685586899518967,
      0.06898140162229538,
      -0.022312447428703308,
      -0.051137372851371765,
      0.061732470989227295,
      0.05108903720974922,
      0.007408293895423412,
      0.009834351018071175,
      -0.0381283164024353,
      0.05736633017659187,
      -0.06212836876511574,
      0.07139112800359726,
      0.02344347909092903,
      -0.07822784781455994,
      -0.07525438815355301,
      0.05983031913638115,
      -0.05592036619782448,
      -0.007453143130987883,
      -0.02417832799255848,
      0.07059674710035324,
      -0.0346708707511425,
      0.03955414518713951,
      0.06580301374197006,
      -0.0341779999434948,
      0.06717360019683838,
      -0.08005333691835403,
      -0.05340317636728287,
      0.06287065893411636,
      0.07256301492452621,
      -0.038980044424533844,
      -0.051847346127033234,
      0.06580804288387299,
      -0.03686337172985077,
      -0.03591078892350197,
      -0.04555615410208702,
      -0.09168125689029694,
      -0.01788528822362423,
      -0.0702081099152565,
      -0.01894281804561615,
      0.03842774033546448,
      0.012157217599451542,
      -0.03638976812362671,
      0.00741701852530241,
      -0.06574498862028122,
      0.03143495321273804,
      -0.09374421089887619,
      0.09323727339506149,
      -5078675458207726e-19,
      -0.05029945820569992,
      0.07972592860460281,
      -0.045524001121520996,
      0.0161273255944252,
      0.034928370267152786,
      -0.03798858821392059,
      -0.04215393215417862,
      -0.05285763740539551,
      -0.039800941944122314,
      0.030804766342043877,
      0.05271613597869873,
      0.07387018203735352,
      -0.07749047875404358,
      0.014154932461678982,
      0.016822343692183495,
      -0.03231900930404663,
      0.08523127436637878,
      0.020918576046824455,
      0.023560848087072372,
      0.010654629208147526,
      -0.023744573816657066,
      -0.01634051650762558,
      -0.08248919248580933,
      -0.04772726818919182,
      -0.07239198684692383,
      0.008266297169029713,
      0.039588671177625656,
      -0.01484499778598547,
      -0.03135966509580612,
      -0.06728993356227875,
      0.04789760336279869,
      0.09033677726984024,
      -0.04373353347182274,
      -0.04754427820444107,
      0.018371278420090675,
      -0.018008457496762276,
      0.062054120004177094,
      0.06914244592189789,
      0.05566634237766266,
      -0.04947790130972862,
      -0.00515188230201602,
      0.06656110286712646,
      0.0030723840463906527,
      -0.04516394063830376,
      -0.010614069178700447,
      -0.07366056740283966,
      0.024138377979397774,
      -0.010954377241432667,
      0.06484010815620422,
      0.06555002927780151,
      0.011797988787293434,
      0.04053424671292305,
      -0.04989032447338104,
      0.0763595849275589,
      -0.0022982629016041756,
      -0.05346814915537834,
      0.04300514981150627,
      0.04633043706417084,
      -0.1003914326429367,
      0.051203999668359756,
      -0.006192098371684551,
      0.03157631680369377,
      0.034225206822156906,
      0.037147339433431625,
      0.04778493940830231,
      0.04544707015156746,
      -0.03228139504790306,
      -0.0331718735396862,
      0.061391089111566544,
      0.04025328531861305,
      -0.005732446908950806,
      0.0464162640273571,
      -0.0883377268910408,
      -0.0593247190117836,
      -0.06668606400489807,
      -0.03683442249894142,
      -0.04037889093160629,
      -0.07083345204591751,
      0.029534438624978065,
      0.0356362909078598,
      -0.06364208459854126,
      -0.01140712108463049,
      0.016379138454794884,
      -0.012043970637023449,
      0.05429745465517044,
      -0.03034904971718788,
      -0.049242135137319565,
      0.012926640920341015,
      -0.016550816595554352,
      -0.028472239151597023,
      -0.03304024785757065,
      0.05535607039928436,
      -0.01909327693283558,
      -0.07423686236143112,
      0.03178539499640465,
      0.06776595115661621,
      -0.02793540433049202,
      -0.009003689512610435,
      -0.030565563589334488,
      -0.04213244467973709,
      0.03814363107085228,
      -0.04159167408943176,
      -0.042547136545181274,
      0.09560533612966537,
      0.049132559448480606,
      -0.09807844460010529,
      0.02240840159356594,
      0.04407443106174469,
      -0.021723715588450432,
      0.004196718335151672,
      -0.07128705829381943,
      -0.015466578304767609,
      0.07509282231330872,
      0.03679213300347328,
      -0.049778807908296585,
      -0.042000044137239456,
      0.03263093903660774,
      0.0885685458779335,
      0.05132068321108818,
      0.08205488324165344,
      0.02437659539282322,
      -0.04095785692334175,
      0.029376020655035973,
      -0.03020014800131321,
      0.06436585634946823,
      0.06548982113599777,
      -0.056384772062301636,
      -0.012774161994457245,
      -0.017662478610873222,
      -0.05656388774514198,
      -0.03040193021297455,
      0.049502354115247726,
      -0.08709345757961273,
      -0.029446342960000038,
      -0.019924478605389595,
      0.06893876194953918,
      0.05174178257584572,
      0.03530193865299225
    ]
  },
  {
    id: "brainstorm",
    behavior: "PLAN",
    description: "idea generation and alternatives (fikir, beyin f\u0131rt\u0131nas\u0131)",
    embedding: [
      0.044975318014621735,
      0.017327122390270233,
      -0.038068387657403946,
      -0.04693509638309479,
      0.07228892296552658,
      -0.0312693752348423,
      0.03682946786284447,
      0.03701586276292801,
      0.019401730969548225,
      0.01475714985281229,
      0.05989443138241768,
      0.004762465599924326,
      0.07855544239282608,
      -0.012088406831026077,
      -0.06858117133378983,
      0.049393169581890106,
      0.047492992132902145,
      -0.058307357132434845,
      -0.03032347559928894,
      -0.026448827236890793,
      0.028964383527636528,
      0.007346030790358782,
      -0.03825272619724274,
      0.05915523320436478,
      0.04922060668468475,
      0.04875683784484863,
      -0.0033568080980330706,
      0.01245367806404829,
      0.051510732620954514,
      -0.04823221266269684,
      -0.0650329738855362,
      -0.049671098589897156,
      0.03171706944704056,
      -0.0337669774889946,
      0.04318851977586746,
      0.011814545840024948,
      -0.05846267566084862,
      -0.04418720677495003,
      0.0468783862888813,
      -0.06831801682710648,
      -0.045273493975400925,
      -0.0010508510749787092,
      0.03895454481244087,
      0.0998985543847084,
      0.05523812398314476,
      -0.02162107266485691,
      -0.019908174872398376,
      0.033138763159513474,
      -0.07912085205316544,
      -0.019190028309822083,
      -0.09896324574947357,
      0.09103722870349884,
      0.022556444630026817,
      0.10651949048042297,
      0.00790194608271122,
      -0.05177391320466995,
      -0.05890350043773651,
      -0.041169147938489914,
      -0.04260525852441788,
      0.03125382587313652,
      0.020683560520410538,
      -0.029402436688542366,
      0.038409776985645294,
      0.03955518454313278,
      0.08130257576704025,
      0.07353874295949936,
      0.0621410608291626,
      0.04392935335636139,
      -0.005791235715150833,
      -0.009593650698661804,
      -0.058283254504203796,
      0.027145056053996086,
      -0.036886971443891525,
      -0.02485443279147148,
      0.01871863193809986,
      0.013950311578810215,
      0.053524184972047806,
      -0.04662398248910904,
      0.08205050230026245,
      -0.04052329435944557,
      -0.10133840143680573,
      -0.03692749887704849,
      -0.038907065987586975,
      0.04068860784173012,
      -0.058221545070409775,
      0.04539455100893974,
      0.022748423740267754,
      -0.03524152562022209,
      0.03925935551524162,
      -0.016402794048190117,
      0.033677443861961365,
      0.03473252058029175,
      -0.05697407200932503,
      -0.0372832827270031,
      -0.10747380554676056,
      -0.06384722143411636,
      -0.08046264946460724,
      0.06908624619245529,
      0.06931992620229721,
      -0.02464286796748638,
      0.032260335981845856,
      -0.04730844870209694,
      0.04549653083086014,
      -0.1041826382279396,
      -0.07080305367708206,
      0.03312661871314049,
      0.01490949559956789,
      -0.0361408069729805,
      0.04354306682944298,
      -0.06546220928430557,
      -0.03490017354488373,
      0.01831122860312462,
      0.024697061628103256,
      0.07862234860658646,
      -0.034636929631233215,
      -0.025131020694971085,
      -0.06635270267724991,
      -0.07366863638162613,
      0.026376275345683098,
      -0.08448401838541031,
      0.0777922198176384,
      -0.01739426888525486,
      -0.08836859464645386,
      -0.07896026223897934,
      -0.06948729604482651,
      -0.042460303753614426,
      0.08007517457008362,
      0.053549136966466904,
      0.06475938856601715,
      0.025915442034602165,
      0.03833889216184616,
      0.07132089883089066,
      0.02608591504395008,
      0.04153487831354141,
      0.04344674572348595,
      0.07027433812618256,
      -0.02192281372845173,
      0.01920115016400814,
      0.0033811021130532026,
      -0.04492173343896866,
      -0.04920531436800957,
      0.05871604382991791,
      -0.022569524124264717,
      0.04644745588302612,
      0.04564841091632843,
      0.008732547052204609,
      0.05111916735768318,
      0.03383016586303711,
      0.048369333148002625,
      -0.08175934851169586,
      0.06590941548347473,
      -0.0257203858345747,
      0.06242440640926361,
      0.03912309929728508,
      0.1303619146347046,
      -0.04930746182799339,
      -0.03747586905956268,
      -0.02452932484447956,
      0.07079298794269562,
      0.059526506811380386,
      -0.056814827024936676,
      -0.07251396775245667,
      -0.08592725545167923,
      -0.03771841153502464,
      -0.08901839703321457,
      -0.07185695320367813,
      0.031952209770679474,
      0.07929827272891998,
      -0.05092175304889679,
      -0.014386939816176891,
      -0.07711717486381531,
      0.0678243339061737,
      -0.026226328685879707,
      0.0312822163105011,
      -0.02334516867995262,
      0.05978422611951828,
      -0.0631343349814415,
      0.071555495262146,
      0.0729236826300621,
      0.034933242946863174,
      -0.020321551710367203,
      -0.05221959576010704,
      0.012134292162954807,
      -0.06206167861819267,
      -0.08842295408248901,
      -0.009811615571379662,
      -0.05366703122854233,
      0.04127803072333336,
      -0.006502767559140921,
      -0.015990743413567543,
      0.024688711389899254,
      0.06907466053962708,
      -0.11435557901859283,
      -0.06012783199548721,
      -0.05893577262759209,
      0.048089247196912766,
      -0.03512391820549965,
      0.032317619770765305,
      0.07271327078342438,
      0.04135481268167496,
      0.005506071262061596,
      -0.054305549710989,
      0.03735603392124176,
      -0.0015719278017058969,
      0.04961720481514931,
      0.041560057550668716,
      -0.056396447122097015,
      0.029866371303796768,
      -0.02602202445268631,
      0.05385192483663559,
      0.03898441046476364,
      -0.03808664530515671,
      -0.04984860122203827,
      0.050069164484739304,
      -0.055068228393793106,
      -0.02768612466752529,
      0.026524672284722328,
      0.06641709059476852,
      -0.047669418156147,
      0.038087327033281326,
      0.057465434074401855,
      -0.035966139286756516,
      0.06425503641366959,
      -0.09227564930915833,
      -0.0745677724480629,
      0.016587547957897186,
      0.08923230320215225,
      -0.05145113915205002,
      -0.07658685743808746,
      0.05144285038113594,
      -0.017884155735373497,
      -0.012906976975500584,
      -0.035642359405756,
      -0.06932859122753143,
      -0.014168544672429562,
      -0.06945879012346268,
      -0.05257268249988556,
      0.04724323749542236,
      0.0512661449611187,
      -0.05336571857333183,
      -0.005911792162805796,
      -0.07782280445098877,
      0.016537368297576904,
      -0.11238229274749756,
      0.08724179118871689,
      -0.025627564638853073,
      -0.034637581557035446,
      0.07715023308992386,
      4082480736542493e-19,
      0.03628479689359665,
      0.0671873688697815,
      -0.029474003240466118,
      -0.03637843579053879,
      -0.05191437527537346,
      0.0016930337296798825,
      0.038685303181409836,
      0.06868578493595123,
      0.09349501878023148,
      -0.07214128226041794,
      0.039201799780130386,
      0.02359768934547901,
      -0.061606887727975845,
      0.09048719704151154,
      0.0440685860812664,
      0.03551088646054268,
      0.04114610701799393,
      -0.006959510035812855,
      -0.017563583329319954,
      -0.062445417046546936,
      -0.013567250221967697,
      -0.06400661915540695,
      -0.0013429446844384074,
      0.05156560242176056,
      -0.054052069783210754,
      -0.019099503755569458,
      -0.05941367149353027,
      0.05224304646253586,
      0.05763297528028488,
      -0.05530044063925743,
      -0.032719649374485016,
      0.04161781072616577,
      0.006911217700690031,
      0.02149108052253723,
      0.0515248142182827,
      -0.002875811653211713,
      -0.02429853193461895,
      -0.03953913226723671,
      0.05143674090504646,
      -0.00753219798207283,
      -0.006083052605390549,
      -0.04037230834364891,
      -0.055708035826683044,
      0.014513070695102215,
      -0.02980397641658783,
      0.07446591556072235,
      0.010778872296214104,
      0.02265472337603569,
      0.060314346104860306,
      -0.06324221193790436,
      0.06996314227581024,
      -0.03438958153128624,
      -0.04110809788107872,
      0.03951137140393257,
      0.052546426653862,
      -0.11395981162786484,
      0.046434879302978516,
      0.011429793201386929,
      0.041633397340774536,
      0.047804925590753555,
      0.033788051456213,
      0.04855681210756302,
      0.02837054431438446,
      -0.051340777426958084,
      -0.03714119642972946,
      0.02497539483010769,
      0.02627066895365715,
      -0.011249449104070663,
      0.03825492784380913,
      -0.05404604971408844,
      -0.03643025830388069,
      -0.09588300436735153,
      -0.02861091122031212,
      -0.03262776881456375,
      -0.08753471821546555,
      0.03622732684016228,
      -0.017322082072496414,
      -0.06410519778728485,
      -0.0011048305314034224,
      0.03312845155596733,
      0.026858272030949593,
      0.04367360472679138,
      -0.03290120139718056,
      -0.052263252437114716,
      0.012186633422970772,
      -0.03436253219842911,
      -0.031054891645908356,
      -0.01515932846814394,
      0.06370094418525696,
      -0.016613509505987167,
      -0.05981990322470665,
      0.0264367014169693,
      0.04102211818099022,
      -0.03627390414476395,
      0.055614519864320755,
      -0.049993161112070084,
      -0.0546814426779747,
      0.08219609409570694,
      -0.0421871580183506,
      -0.02966446615755558,
      0.07222744077444077,
      -0.008318783715367317,
      -0.09138880670070648,
      0.028651254251599312,
      0.010155655443668365,
      -0.014255174435675144,
      0.0525813065469265,
      -0.06079307198524475,
      -0.007794036529958248,
      0.021984444931149483,
      0.04496472701430321,
      -0.06392064690589905,
      -0.02461354061961174,
      0.03621821478009224,
      0.058176781982183456,
      0.059094883501529694,
      0.037770919501781464,
      -0.03384917229413986,
      -0.021903248503804207,
      0.0538887195289135,
      -0.058836016803979874,
      0.09499359130859375,
      0.06263183802366257,
      -0.037804801017045975,
      -0.008120572194457054,
      -0.029780030250549316,
      -0.060263749212026596,
      -0.018047647550702095,
      0.03377451002597809,
      -0.05747568607330322,
      -0.06048843637108803,
      -7071854779496789e-19,
      0.057818543165922165,
      0.058270908892154694,
      0.0685822144150734
    ]
  },
  {
    id: "migration",
    behavior: "PLAN",
    description: "moving from one structure to another (ta\u015F\u0131ma, ge\xE7i\u015F)",
    embedding: [
      0.05330792814493179,
      -0.02137909270823002,
      -0.06258285790681839,
      -0.06942450255155563,
      0.0667962059378624,
      -0.004970389883965254,
      32774682040326297e-20,
      0.029214641079306602,
      0.03177620470523834,
      0.041415583342313766,
      0.0459672249853611,
      -0.003338756738230586,
      0.034354615956544876,
      0.008028734475374222,
      -0.03505721688270569,
      0.03601459786295891,
      0.05427290126681328,
      -0.022215187549591064,
      -0.03967658057808876,
      -0.0380970761179924,
      0.016794385388493538,
      -0.01535437349230051,
      -0.04090056195855141,
      0.07392264157533646,
      0.03410269692540169,
      0.04326997324824333,
      -0.04718039929866791,
      0.05150466039776802,
      0.06821282207965851,
      -0.09363841265439987,
      -0.0719648078083992,
      -0.0645688995718956,
      0.045455362647771835,
      -0.04729292169213295,
      0.040571995079517365,
      0.02014174871146679,
      -0.031842805445194244,
      -0.05305787920951843,
      0.01879551261663437,
      -0.08458760380744934,
      0.004143224563449621,
      0.006590710487216711,
      0.04933362826704979,
      0.08061516284942627,
      0.015069404616951942,
      0.012316149659454823,
      -0.014005888253450394,
      0.04993870109319687,
      -0.0619654543697834,
      -0.05459751561284065,
      -0.05749596282839775,
      0.07268352806568146,
      0.05861154571175575,
      0.07167118042707443,
      0.03365509584546089,
      -0.09275432676076889,
      -0.004416222684085369,
      -0.07777782529592514,
      -0.05717596784234047,
      0.057913169264793396,
      0.004350319504737854,
      -0.005863735917955637,
      0.013409646227955818,
      0.009360220283269882,
      0.10548090934753418,
      0.055185168981552124,
      0.047734711319208145,
      0.036300934851169586,
      -0.02177552692592144,
      -0.044694684445858,
      -0.05629683658480644,
      0.015045253559947014,
      -0.02930726297199726,
      -0.026939602568745613,
      0.03573126718401909,
      0.013682746328413486,
      0.07547872513532639,
      -0.0658840611577034,
      0.0514230877161026,
      -0.06183934584259987,
      -0.08431530743837357,
      -0.05250632017850876,
      -0.06214830279350281,
      0.04669070243835449,
      -0.03532185032963753,
      0.08831007778644562,
      0.040820714086294174,
      -0.04633378982543945,
      0.0544121153652668,
      -0.040980979800224304,
      -0.00200315797701478,
      0.06000349298119545,
      -0.040117595344781876,
      -0.014078290201723576,
      -0.0843009352684021,
      -0.041275572031736374,
      -0.05751471593976021,
      0.04600784555077553,
      0.10291455686092377,
      -0.06281154602766037,
      0.07505420595407486,
      -0.014387588948011398,
      0.035989537835121155,
      -0.1642129272222519,
      -0.07563980668783188,
      0.06162664294242859,
      -0.014444908127188683,
      -0.04006674513220787,
      0.025676554068922997,
      -0.06943834573030472,
      -0.01724664680659771,
      0.0236439760774374,
      0.020423533394932747,
      0.0436205118894577,
      -0.05940696969628334,
      -0.011890019290149212,
      -0.047125186771154404,
      -0.04936737194657326,
      0.05036530643701553,
      -0.048978403210639954,
      0.0267616156488657,
      -0.007191698998212814,
      -0.05772009491920471,
      -0.0210869163274765,
      -0.034428633749485016,
      -0.0608520582318306,
      0.019333379343152046,
      0.005949605721980333,
      0.07072071731090546,
      0.010419066995382309,
      0.07482592016458511,
      0.03529317304491997,
      0.013816396705806255,
      0.09172391891479492,
      0.04216224327683449,
      0.07133577018976212,
      -0.05377449095249176,
      0.04816105589270592,
      0.006666087079793215,
      -0.005242505576461554,
      -0.08283809572458267,
      0.06886372715234756,
      -0.031724248081445694,
      0.024508537724614143,
      0.02211832068860531,
      0.06631970405578613,
      0.06693457812070847,
      0.017903048545122147,
      0.07839949429035187,
      -0.08897665143013,
      0.0932355672121048,
      -0.02069021947681904,
      0.09410818666219711,
      0.025946155190467834,
      0.06962130963802338,
      -0.02669249102473259,
      -0.09428003430366516,
      -0.030287226662039757,
      0.026780474931001663,
      0.08048813790082932,
      -0.06279297173023224,
      -0.0650983452796936,
      -0.0621124804019928,
      -0.04176946356892586,
      -0.04967846721410751,
      -0.03546492010354996,
      0.017524736002087593,
      0.06346038728952408,
      -0.048874299973249435,
      -0.020409131422638893,
      -0.050925757735967636,
      0.030723439529538155,
      0.009271170012652874,
      0.010739298537373543,
      -0.016620611771941185,
      0.0563872754573822,
      -0.047492269426584244,
      0.0758323147892952,
      0.0697663426399231,
      0.04853132367134094,
      0.010740920901298523,
      -0.04748803377151489,
      -0.06677607446908951,
      -0.07064761221408844,
      -0.08294232189655304,
      -0.02527157962322235,
      -0.04830434173345566,
      -0.010875590145587921,
      0.007729006931185722,
      0.009268123656511307,
      0.002313587348908186,
      0.042224302887916565,
      -0.04038257524371147,
      -0.06748797744512558,
      -0.06488675624132156,
      0.06558564305305481,
      -0.038882777094841,
      0.06768498569726944,
      0.03643827512860298,
      0.05479276925325394,
      -0.014798596501350403,
      -0.07465396076440811,
      0.031259965151548386,
      0.025348838418722153,
      0.04583173617720604,
      0.04631492868065834,
      -0.06768371164798737,
      0.040635451674461365,
      -0.0369267463684082,
      0.046993717551231384,
      0.053319308906793594,
      -0.03691377863287926,
      -0.029179994016885757,
      0.06021060794591904,
      -0.0695742592215538,
      -0.009059900417923927,
      0.021920396015048027,
      0.06885603070259094,
      -0.05816636234521866,
      0.05472804978489876,
      0.02725001610815525,
      -0.02887360192835331,
      0.060575585812330246,
      -0.06432030349969864,
      -0.07901732623577118,
      0.03202873840928078,
      0.03276033326983452,
      -0.0465262308716774,
      -0.03492787852883339,
      0.07895826548337936,
      -0.05095404013991356,
      -0.02034241147339344,
      -0.06925074011087418,
      -0.06330420076847076,
      -0.04199346899986267,
      -0.10053080320358276,
      -0.003064309014007449,
      0.056757137179374695,
      0.034268785268068314,
      -0.039534565061330795,
      0.001344888936728239,
      -0.03002806007862091,
      0.07069627195596695,
      -0.09797043353319168,
      0.045332618057727814,
      -0.06914399564266205,
      -0.04586072266101837,
      0.044182535260915756,
      -0.008437790907919407,
      0.024446118623018265,
      0.06267386674880981,
      -0.030337002128362656,
      -0.03632252663373947,
      -0.06781043112277985,
      -0.029868563637137413,
      -0.023494401946663857,
      0.10711978375911713,
      0.07540068030357361,
      -0.08659930527210236,
      0.033956147730350494,
      0.03449203073978424,
      -0.004926708992570639,
      0.10510123521089554,
      0.011800218373537064,
      0.053716354072093964,
      0.03614821285009384,
      -0.06646865606307983,
      -0.02045445516705513,
      -0.07372415065765381,
      8356077596545219e-19,
      -0.06146463006734848,
      0.019332565367221832,
      0.03954658284783363,
      -0.035323649644851685,
      -0.05565769597887993,
      -0.04230800271034241,
      0.03271880000829697,
      0.0710715800523758,
      -0.05435184761881828,
      -0.059532761573791504,
      0.022496404126286507,
      0.014611947350203991,
      0.026414794847369194,
      0.04660734906792641,
      0.08152136206626892,
      -0.004399030469357967,
      0.0020188570488244295,
      0.03095894493162632,
      -0.040825486183166504,
      -0.030445508658885956,
      -0.028983935713768005,
      -0.06552043557167053,
      0.018722081556916237,
      -0.05893990397453308,
      0.07844600081443787,
      0.07136198878288269,
      0.02580256201326847,
      0.09824158996343613,
      -0.04857611283659935,
      0.050918057560920715,
      -0.05377937853336334,
      -0.06983986496925354,
      0.06441230326890945,
      0.0307468231767416,
      -0.08794720470905304,
      0.04184047505259514,
      0.011270971968770027,
      -0.012399041093885899,
      0.021973861381411552,
      0.04555385932326317,
      0.05863525718450546,
      0.025207877159118652,
      -0.04776035621762276,
      -0.05310765653848648,
      0.0480082668364048,
      0.05732675641775131,
      -0.014975551515817642,
      0.024290477856993675,
      -0.03742844611406326,
      -0.09429538249969482,
      -0.019493697211146355,
      -0.03393237292766571,
      -0.02449772134423256,
      -0.03241691365838051,
      0.02760603465139866,
      0.03349697217345238,
      -0.0618925616145134,
      -0.02497045509517193,
      0.02794167958199978,
      0.04814022406935692,
      0.043317414820194244,
      -0.04420493170619011,
      -0.05244394764304161,
      0.01787419803440571,
      -0.043386753648519516,
      -0.03580598533153534,
      0.007271376438438892,
      0.054028116166591644,
      -0.021580077707767487,
      -0.06448975950479507,
      0.04841061308979988,
      0.06548204272985458,
      -0.05994477868080139,
      0.03929742053151131,
      -0.06592324376106262,
      -0.08193953335285187,
      0.06787096709012985,
      -0.029638096690177917,
      -0.012682893313467503,
      0.06370649486780167,
      0.046479690819978714,
      -0.08504527807235718,
      0.02448515221476555,
      0.017882369458675385,
      0.026129193603992462,
      0.03162463754415512,
      -0.08013134449720383,
      -0.03140779584646225,
      0.04783480986952782,
      0.04016464203596115,
      -0.017147235572338104,
      -0.03836841881275177,
      0.035395216196775436,
      -0.00416907761245966,
      0.040122631937265396,
      0.05181678757071495,
      -0.016566313803195953,
      -0.038130246102809906,
      0.040346965193748474,
      -0.06635132431983948,
      0.0603373758494854,
      0.05743999034166336,
      -0.03758252039551735,
      -0.008515660651028156,
      -0.006199745927006006,
      -0.08171898871660233,
      -0.04149720445275307,
      0.06352938711643219,
      -0.07456371188163757,
      -0.014057244174182415,
      0.02422291412949562,
      0.057621728628873825,
      0.05618682876229286,
      0.05084838718175888
    ]
  },
  {
    id: "strategy",
    behavior: "PLAN",
    description: "roadmap and decision planning (strateji, yol haritas\u0131)",
    embedding: [
      0.007832548581063747,
      -0.016797279939055443,
      -0.0157488901168108,
      -0.042256250977516174,
      0.062028974294662476,
      -0.01864355057477951,
      0.057097457349300385,
      0.040880195796489716,
      0.009745252318680286,
      0.02448430471122265,
      0.07594945281744003,
      -0.02187402918934822,
      0.05546628683805466,
      -0.0030297781340777874,
      -0.0892115980386734,
      0.028452247381210327,
      0.052886754274368286,
      -0.030091961845755577,
      -0.013884831219911575,
      -0.016623670235276222,
      0.022939002141356468,
      -0.007944823242723942,
      -0.012784854508936405,
      0.04736130312085152,
      0.04546063020825386,
      0.01636609621345997,
      -0.05840444192290306,
      0.02606317214667797,
      0.047927577048540115,
      -0.0631709024310112,
      -0.04716293141245842,
      -0.045820318162441254,
      0.03495015203952789,
      -0.06751992553472519,
      0.040274180471897125,
      0.02482341043651104,
      -0.0622960589826107,
      -0.009513800032436848,
      0.0670480877161026,
      -0.06067522242665291,
      -0.0013222370762377977,
      0.006635485216975212,
      0.05641848221421242,
      0.06412094831466675,
      0.06883824616670609,
      0.04884636402130127,
      -0.054232340306043625,
      0.016000431030988693,
      -0.07290127873420715,
      -0.04452488198876381,
      -0.05437474325299263,
      0.06736600399017334,
      0.03737637773156166,
      0.06800360977649689,
      0.018164925277233124,
      -0.08672822266817093,
      -0.015676576644182205,
      -0.05607718229293823,
      -0.07197341322898865,
      0.012483573518693447,
      0.02689543552696705,
      -0.02075146697461605,
      0.03733397275209427,
      0.04074792563915253,
      0.10414766520261765,
      0.038930412381887436,
      0.05467139557003975,
      0.05634186789393425,
      -0.03676999360322952,
      -0.07790301740169525,
      -0.07703737914562225,
      0.023451857268810272,
      -0.006267537362873554,
      -0.019742727279663086,
      0.0016738398699089885,
      0.028341300785541534,
      0.07169733941555023,
      -0.031952865421772,
      0.05293659865856171,
      -0.03514745086431503,
      -0.1015506461262703,
      -0.05336521565914154,
      -0.01902136579155922,
      0.03812986612319946,
      -0.039767786860466,
      0.058023832738399506,
      0.02211977168917656,
      -0.055633414536714554,
      0.05646971985697746,
      -0.05027743801474571,
      0.03182622417807579,
      0.05780351161956787,
      -0.06078806892037392,
      -0.032475877553224564,
      -0.0883173942565918,
      -0.07194840162992477,
      -0.07605767995119095,
      0.07755549997091293,
      0.06552091985940933,
      -0.04809381440281868,
      0.011165257543325424,
      -0.012368514202535152,
      0.013385687954723835,
      -0.10089903324842453,
      -0.09249074757099152,
      0.03776799142360687,
      0.02509935200214386,
      -0.058265283703804016,
      0.04664057493209839,
      -0.07747117429971695,
      12862026051152498e-20,
      0.03873983025550842,
      0.017694812268018723,
      0.054711662232875824,
      -0.061071451753377914,
      -0.0423385351896286,
      -0.05188094452023506,
      -0.06784975528717041,
      0.04889959469437599,
      -0.03491126000881195,
      0.051864493638277054,
      -0.061750371009111404,
      -0.07343436777591705,
      -0.0826239287853241,
      -0.05422114208340645,
      -0.060941170901060104,
      0.04587683826684952,
      0.04468999430537224,
      0.0392286591231823,
      -0.006904392968863249,
      0.07918316125869751,
      0.023869019001722336,
      0.033223867416381836,
      0.034067898988723755,
      0.05001669004559517,
      0.04220953211188316,
      -0.03057018853724003,
      0.015711534768342972,
      0.020246950909495354,
      -0.016332512721419334,
      -0.05803171545267105,
      0.0773928314447403,
      -0.022969326004385948,
      0.014860291965305805,
      0.03624218702316284,
      0.03293818607926369,
      0.03193815425038338,
      0.010820423252880573,
      0.0697031170129776,
      -0.08462105691432953,
      0.07711805403232574,
      -0.046620942652225494,
      0.07483132928609848,
      0.03453625366091728,
      0.10446476191282272,
      -0.05045953392982483,
      -0.05778295546770096,
      -0.0644596517086029,
      0.07086590677499771,
      0.06433453410863876,
      -0.04977109655737877,
      -0.0861521065235138,
      -0.05975741520524025,
      -0.05050770193338394,
      -0.09254928678274155,
      -0.11811428517103195,
      0.04318511113524437,
      0.07005802541971207,
      -0.061056602746248245,
      -0.002716653048992157,
      -0.06294864416122437,
      0.07500966638326645,
      -0.032178591936826706,
      0.03530534356832504,
      -0.023029623553156853,
      0.07368160039186478,
      -0.04033681005239487,
      0.05884287506341934,
      0.056457631289958954,
      0.059842463582754135,
      -0.007989900186657906,
      -0.049902334809303284,
      0.014696485362946987,
      -0.07385484874248505,
      -0.09822116047143936,
      -0.030666867271065712,
      -0.04357261583209038,
      0.026530258357524872,
      -0.027505949139595032,
      0.003786178072914481,
      0.022808317095041275,
      0.033860206604003906,
      -0.09449569880962372,
      -0.061142776161432266,
      -0.042030125856399536,
      0.04891137033700943,
      -0.04753706231713295,
      0.06437104940414429,
      0.05992496386170387,
      0.06992540508508682,
      -0.011288237757980824,
      -0.04307796061038971,
      0.051835935562849045,
      0.0050940304063260555,
      0.047771207988262177,
      0.050148818641901016,
      -0.05770399421453476,
      0.021297123283147812,
      -0.04104132205247879,
      0.04082533344626427,
      0.031440041959285736,
      -0.06145482510328293,
      -0.05558213219046593,
      0.03761936351656914,
      -0.022142190486192703,
      7265094318427145e-19,
      0.013252065517008305,
      0.07520212978124619,
      -0.05015644058585167,
      0.0633857399225235,
      0.07124725729227066,
      -0.03533455356955528,
      0.08703556656837463,
      -0.07965636253356934,
      -0.06334669142961502,
      0.03248230367898941,
      0.04799700900912285,
      -0.05917685106396675,
      -0.05346197262406349,
      0.07849322259426117,
      -0.004490906838327646,
      -0.03578924760222435,
      -0.07486512511968613,
      -0.04037320986390114,
      -0.04029073566198349,
      -0.06359899789094925,
      0.019372213631868362,
      0.03765327110886574,
      0.036875028163194656,
      -0.046961694955825806,
      -0.061044689267873764,
      -0.05121814087033272,
      0.046957485377788544,
      -0.07124641537666321,
      0.08736647665500641,
      0.015681063756346703,
      -0.06206479296088219,
      0.04927569255232811,
      -0.025735029950737953,
      0.014697111211717129,
      0.08018313348293304,
      -0.025430679321289062,
      -0.0369584821164608,
      -0.049294885247945786,
      -0.03224040940403938,
      0.03768624737858772,
      0.06379131227731705,
      0.05254407972097397,
      -0.03667161613702774,
      -0.007930843159556389,
      0.011211301200091839,
      -0.05283881351351738,
      0.08490658551454544,
      0.03854367882013321,
      0.025340743362903595,
      -0.015673799440264702,
      -0.04682697355747223,
      -0.018377717584371567,
      -0.09674548357725143,
      -0.012951510958373547,
      -0.05989713594317436,
      -0.007934734225273132,
      0.06224437803030014,
      -0.04833526536822319,
      -0.04181738942861557,
      -0.09667513519525528,
      0.04532381892204285,
      0.10884937644004822,
      -0.05308465287089348,
      -0.06421039998531342,
      0.03206160292029381,
      -0.005393845494836569,
      0.07461037486791611,
      0.08667305111885071,
      0.0434391126036644,
      -0.006015843711793423,
      -0.0023193147499114275,
      0.03867936506867409,
      -0.0039025337900966406,
      -0.007555725984275341,
      -0.04770709201693535,
      -0.08336621522903442,
      0.011426522396504879,
      -0.054295968264341354,
      0.019829796627163887,
      0.014811464585363865,
      0.035632431507110596,
      0.05614600330591202,
      -0.010552606545388699,
      0.03694077208638191,
      -0.03460155427455902,
      -0.07266324758529663,
      0.04127141833305359,
      0.005806011147797108,
      -0.12433553487062454,
      0.038036197423934937,
      0.05456375330686569,
      0.02531617321074009,
      0.021242719143629074,
      0.04987941309809685,
      0.04278036579489708,
      0.029546383768320084,
      -0.002985962200909853,
      0.007414909079670906,
      0.05438818037509918,
      0.07649768888950348,
      -7224769797176123e-19,
      0.022249547764658928,
      -0.04880230128765106,
      -0.04541103541851044,
      -0.06994418799877167,
      -0.020993541926145554,
      -0.042388226836919785,
      -0.04270906001329422,
      0.08258571475744247,
      0.018825631588697433,
      -0.02063467726111412,
      -0.006216485518962145,
      0.020228132605552673,
      0.010778063908219337,
      0.07042402774095535,
      -0.0320371575653553,
      -0.048234984278678894,
      0.009650781750679016,
      -0.05034070461988449,
      -0.050400711596012115,
      0.0012061221059411764,
      0.0494479164481163,
      -0.0066736554726958275,
      -0.07347208261489868,
      0.016468852758407593,
      0.04990266636013985,
      -29905040719313547e-21,
      0.0668383464217186,
      -0.020255666226148605,
      -0.04108365997672081,
      0.06708338856697083,
      -0.029821407049894333,
      -0.0026272896211594343,
      0.07170277088880539,
      0.03917553648352623,
      -0.10030504316091537,
      0.03597002848982811,
      0.02821328490972519,
      -0.02005678229033947,
      0.06705934554338455,
      -0.06104481220245361,
      -0.01371072418987751,
      0.05356195569038391,
      0.043510742485523224,
      -0.066819928586483,
      -0.03134150058031082,
      0.0455208420753479,
      0.0465669110417366,
      0.06554502248764038,
      0.05498514324426651,
      -0.004129643552005291,
      0.006304644513875246,
      0.043058689683675766,
      -0.07228699326515198,
      0.08229944109916687,
      0.04357242211699486,
      -0.04227956756949425,
      -0.006296519190073013,
      -0.007029897999018431,
      -0.09470682591199875,
      -0.0342596098780632,
      0.025440413504838943,
      -0.05346483737230301,
      -0.04908968508243561,
      0.024681007489562035,
      0.07863807678222656,
      0.05487468093633652,
      0.03581124171614647
    ]
  },
  {
    id: "code",
    behavior: "REVIEW",
    description: "Review code correctness and style concerns.",
    embedding: [
      0.07563477754592896,
      -0.04290882870554924,
      -0.03549105301499367,
      -0.08828897774219513,
      0.024075407534837723,
      -0.04203081503510475,
      0.048645246773958206,
      0.022589676082134247,
      0.05760309100151062,
      0.02632710710167885,
      0.07297266274690628,
      0.025700977072119713,
      0.10035054385662079,
      -0.04303024709224701,
      0.0026354144793003798,
      0.03788946941494942,
      0.06821685284376144,
      -0.002387800021097064,
      -0.05703844130039215,
      -0.06435032188892365,
      0.01860829070210457,
      -0.06763249635696411,
      0.002532007871195674,
      0.09051826596260071,
      0.052360404282808304,
      0.07720106095075607,
      -0.03979542478919029,
      0.033122073858976364,
      0.04711470007896423,
      -0.07458136975765228,
      -0.04010149836540222,
      -0.007164893206208944,
      0.0458664670586586,
      -0.04034204035997391,
      0.03406524658203125,
      0.03762073442339897,
      -0.05747564882040024,
      -0.025488056242465973,
      0.03631286323070526,
      -0.013153597712516785,
      -0.04612693563103676,
      0.051313985139131546,
      0.030025145038962364,
      0.09476839751005173,
      0.06832024455070496,
      0.024016335606575012,
      -0.072553850710392,
      0.019986912608146667,
      -0.06466232240200043,
      -0.025775644928216934,
      -0.03970605134963989,
      0.0468154102563858,
      0.0017306872177869081,
      0.01623832806944847,
      0.03311508521437645,
      -0.04845692589879036,
      -0.041409287601709366,
      -0.08594637364149094,
      -0.03874649479985237,
      0.01870231330394745,
      0.08764129132032394,
      -0.02737041376531124,
      -0.005779957864433527,
      0.05273374170064926,
      0.11096706986427307,
      0.06044760346412659,
      0.03495301306247711,
      0.07471893727779388,
      -0.08662929385900497,
      -0.02004905603826046,
      -0.06984210014343262,
      0.03674008697271347,
      -0.012196779251098633,
      -0.03965844586491585,
      -0.011674271896481514,
      0.06376877427101135,
      0.012443320825695992,
      -0.05192400515079498,
      0.012227765284478664,
      -0.07023131847381592,
      -0.06828375905752182,
      -0.04463651031255722,
      -0.046172719448804855,
      0.06018461287021637,
      -0.06836886703968048,
      0.06500077992677689,
      0.0686984732747078,
      -0.0547870397567749,
      0.09875265508890152,
      -0.03915373608469963,
      0.0395546555519104,
      0.011652403511106968,
      -0.05213762819766998,
      -0.08438952267169952,
      -0.096279576420784,
      -0.067046158015728,
      -0.026580138131976128,
      0.0736817717552185,
      0.09141885489225388,
      -0.00841850508004427,
      0.03351738303899765,
      -0.01627548225224018,
      0.04301849752664566,
      -0.08599355071783066,
      -0.03798826411366463,
      0.04252014309167862,
      0.03604930266737938,
      -0.01774435117840767,
      0.04522041603922844,
      -0.07658115774393082,
      -0.04072355106472969,
      0.005837865639477968,
      0.05956781283020973,
      1984275586437434e-19,
      -0.028221208602190018,
      -0.025912772864103317,
      -0.07423841208219528,
      -0.029558632522821426,
      0.03444744274020195,
      -0.03434881567955017,
      0.0767195001244545,
      -0.033590421080589294,
      -0.044012196362018585,
      -0.03822488337755203,
      -0.06031326204538345,
      -0.056317295879125595,
      0.055519551038742065,
      0.025135112926363945,
      0.01648377999663353,
      0.021334555000066757,
      0.057075511664152145,
      0.07112735509872437,
      0.038422539830207825,
      0.07494635879993439,
      0.055548228323459625,
      0.08074834942817688,
      -0.03132447972893715,
      0.028159916400909424,
      -0.028308797627687454,
      -0.029139136895537376,
      -0.019494058564305305,
      0.05852477252483368,
      -0.04271657392382622,
      0.04259338602423668,
      0.015171186998486519,
      0.02214682102203369,
      0.06392447650432587,
      -0.026517100632190704,
      0.09221412986516953,
      -0.0783337727189064,
      0.012142904102802277,
      0.05033363774418831,
      0.01795939914882183,
      -0.013636148534715176,
      0.05691351741552353,
      -0.06847397983074188,
      -0.059154391288757324,
      -0.06578323990106583,
      0.0437687411904335,
      0.0710349828004837,
      -0.07283452898263931,
      -0.06930249184370041,
      -0.08121000975370407,
      -0.027346525341272354,
      -0.05326035991311073,
      -0.054292455315589905,
      0.06485174596309662,
      0.08365786075592041,
      -0.0845908373594284,
      -0.00752260209992528,
      -0.07561410963535309,
      0.03560918942093849,
      -0.035882316529750824,
      0.02106332778930664,
      -0.009729955345392227,
      0.01641191728413105,
      -0.0039216638542711735,
      0.03267081454396248,
      0.08950020372867584,
      0.03868567943572998,
      -0.0493428036570549,
      -0.011925633996725082,
      -0.008530196733772755,
      -0.027044767513871193,
      -0.061199359595775604,
      -0.05783611163496971,
      -0.09346254169940948,
      0.03325410932302475,
      0.012328404001891613,
      -0.06535173207521439,
      2208477380918339e-19,
      0.041117046028375626,
      -0.07666319608688354,
      -0.029006004333496094,
      -0.06881821900606155,
      0.030480895191431046,
      -0.07239136844873428,
      0.058428093791007996,
      0.05845566466450691,
      0.016677148640155792,
      0.008118430152535439,
      -0.04671792313456535,
      0.06334570795297623,
      0.02464386820793152,
      0.038937464356422424,
      0.030888333916664124,
      -0.08380570262670517,
      0.03161587193608284,
      -0.04237131401896477,
      0.04764546453952789,
      0.010526185855269432,
      -0.06391458213329315,
      -0.07159542292356491,
      0.07329864799976349,
      -0.04249582439661026,
      -0.0035507373977452517,
      0.00608351593837142,
      0.0036885894369333982,
      -0.03343325853347778,
      -0.00495788874104619,
      0.06510483473539352,
      -0.01865219697356224,
      0.030725203454494476,
      -0.07036107033491135,
      -0.06506968289613724,
      0.07044478505849838,
      0.08674047887325287,
      -0.09778514504432678,
      -0.043819159269332886,
      0.03985806927084923,
      -0.03775437921285629,
      -0.0558006577193737,
      -0.0797777995467186,
      -0.06891119480133057,
      -0.05971752107143402,
      -0.05138339102268219,
      0.03742776811122894,
      0.017078714445233345,
      0.03811294212937355,
      -0.04737602174282074,
      -0.020460152998566628,
      -0.04885140433907509,
      0.04494954273104668,
      -0.075229711830616,
      0.08720821887254715,
      -0.004904528614133596,
      -0.031386807560920715,
      0.046503011137247086,
      -0.01459205150604248,
      0.056860800832509995,
      0.01759440079331398,
      -0.05504284426569939,
      -0.06331054121255875,
      -0.040234021842479706,
      -0.04089434817433357,
      0.028029723092913628,
      0.08187416195869446,
      0.07473926991224289,
      -0.03540531545877457,
      0.039385538548231125,
      0.061031524091959,
      -0.045253437012434006,
      0.09650389850139618,
      0.03412159904837608,
      0.05061715468764305,
      -0.004461911041289568,
      -0.06328035145998001,
      -0.04737960919737816,
      -0.09249796718358994,
      -0.031727369874715805,
      -0.07658787071704865,
      0.02652587927877903,
      0.016957417130470276,
      -0.03341542184352875,
      -0.011432708241045475,
      -0.04409155622124672,
      0.06823328137397766,
      0.11019017547369003,
      -0.017308155074715614,
      -0.07098324596881866,
      0.02439085580408573,
      -0.017307540401816368,
      0.03858200088143349,
      0.028970805928111076,
      0.07198408246040344,
      -0.012053357437252998,
      0.05287887528538704,
      0.0958656519651413,
      -0.014886007644236088,
      0.006433659233152866,
      -0.027607964351773262,
      -0.10222911834716797,
      -0.007906844839453697,
      -0.05956035107374191,
      0.03176994249224663,
      0.018099287524819374,
      -0.009206983260810375,
      0.012092058546841145,
      -0.051745302975177765,
      0.04806552454829216,
      0.008147465996444225,
      -0.044038284569978714,
      0.010434724390506744,
      0.034801844507455826,
      -0.07605893164873123,
      0.025984998792409897,
      0.009710296057164669,
      0.010150127112865448,
      -0.0047760303132236,
      0.05891944095492363,
      0.049844980239868164,
      0.09948139637708664,
      -0.03529113903641701,
      0.012231966480612755,
      0.030611123889684677,
      0.05564144253730774,
      -0.04109642282128334,
      0.027627862989902496,
      -0.03145824000239372,
      -0.03639698401093483,
      -0.04970708116889,
      -0.03247113153338432,
      -0.04925425723195076,
      -0.056643057614564896,
      0.04147865250706673,
      0.053124602884054184,
      -0.030223935842514038,
      -0.03126252070069313,
      0.05359985679388046,
      0.05929640680551529,
      0.03547118976712227,
      -0.0669247955083847,
      -0.060949716717004776,
      0.007407045923173428,
      -0.04659789800643921,
      -0.02470828965306282,
      -0.051790062338113785,
      0.011120656505227089,
      -0.05797965079545975,
      -0.0325719490647316,
      0.03245590254664421,
      0.02116001583635807,
      -0.058558687567710876,
      0.042281635105609894,
      -0.0014584060991182923,
      -0.023014653474092484,
      0.015390287153422832,
      -0.018792027607560158,
      -0.03444904088973999,
      0.0299211498349905,
      0.09002523124217987,
      -0.10109100490808487,
      0.01925317570567131,
      0.040265705436468124,
      -0.04817043989896774,
      0.047735922038555145,
      -0.09283274412155151,
      -0.018073376268148422,
      0.06204354390501976,
      0.04630552604794502,
      -0.031955916434526443,
      -0.030734790489077568,
      0.04043829068541527,
      0.10789455473423004,
      0.07694149017333984,
      0.044384002685546875,
      -0.028056049719452858,
      -0.0015222772490233183,
      0.03359847888350487,
      -0.0830497145652771,
      0.05637074634432793,
      0.037181656807661057,
      -0.049659643322229385,
      -0.013306017965078354,
      -0.013720681890845299,
      -0.05552448704838753,
      17403371748514473e-20,
      0.03568929433822632,
      -0.05086398869752884,
      -0.02117788977921009,
      0.018766839057207108,
      0.05408775806427002,
      0.0678253099322319,
      0.04746246337890625
    ]
  },
  {
    id: "security",
    behavior: "REVIEW",
    description: "Review security risks and attack surface.",
    embedding: [
      0.042418356984853745,
      0.004849587567150593,
      -0.023338530212640762,
      -0.10775859653949738,
      0.02689201571047306,
      -0.03980262950062752,
      0.042439818382263184,
      0.053187254816293716,
      0.0661085695028305,
      -9416669854545034e-21,
      0.06382928788661957,
      0.019273364916443825,
      0.06742819398641586,
      -0.04662527143955231,
      -0.029755933210253716,
      0.02866402640938759,
      0.0697028860449791,
      -0.0457148514688015,
      -0.06201548129320145,
      -0.031712859869003296,
      0.035546187311410904,
      -0.03767295926809311,
      -0.03977501019835472,
      0.09082542359828949,
      0.08415801078081131,
      0.08411584794521332,
      -0.02031964622437954,
      0.014833275228738785,
      0.07208891212940216,
      -0.059119414538145065,
      -0.05693349614739418,
      0.03287798911333084,
      0.0228301789611578,
      -0.07912813127040863,
      0.041940830647945404,
      0.05143024027347565,
      -0.04427365958690643,
      -0.0651240274310112,
      0.015306633897125721,
      -0.04059942439198494,
      -0.020570145919919014,
      0.004492887761443853,
      0.03894709050655365,
      0.08709259331226349,
      0.06636803597211838,
      0.05446239560842514,
      -0.05617014691233635,
      -0.0033144850749522448,
      -0.04969325289130211,
      -0.05999017134308815,
      -0.06736962497234344,
      0.04854229465126991,
      -0.006042368710041046,
      0.06130858510732651,
      0.07499196380376816,
      -0.07590128481388092,
      -0.06352896243333817,
      -0.10953644663095474,
      -0.06415198743343353,
      -0.007152913138270378,
      0.07034414261579514,
      -0.015276295132935047,
      -4886084352619946e-19,
      0.0178530290722847,
      0.07096723467111588,
      0.06127139925956726,
      0.07198174297809601,
      0.06662331521511078,
      -0.08529844135046005,
      -0.013739708811044693,
      -0.06760969012975693,
      0.044939856976270676,
      -0.00778862414881587,
      -0.053010374307632446,
      0.012312022037804127,
      0.08444233983755112,
      0.035536594688892365,
      -0.019194578751921654,
      0.010678863152861595,
      -0.04564142972230911,
      -0.07649064064025879,
      -0.08008577674627304,
      -0.03628043830394745,
      0.057917580008506775,
      -0.0511341355741024,
      0.0591839998960495,
      0.054008323699235916,
      -0.04643484950065613,
      0.061367642134428024,
      -0.03464163467288017,
      0.05176457390189171,
      0.021035512909293175,
      -0.05912676453590393,
      -0.04570018872618675,
      -0.028182050213217735,
      -0.06805184483528137,
      -0.05481737107038498,
      0.06532684713602066,
      0.08147094398736954,
      -0.009217817336320877,
      0.04365019127726555,
      0.009675201028585434,
      0.06049094721674919,
      -0.07006077468395233,
      -0.029353519901633263,
      0.05829073116183281,
      0.029328512027859688,
      -0.03072657622396946,
      0.06786186248064041,
      -0.07638933509588242,
      -0.02121984213590622,
      0.02421656996011734,
      0.04995939880609512,
      0.025957081466913223,
      -0.00137093267403543,
      -0.010353351943194866,
      -0.0409463569521904,
      -0.01850789599120617,
      0.01065293699502945,
      -0.0323835052549839,
      0.047637276351451874,
      -0.06288057565689087,
      -0.052660468965768814,
      -0.03288212791085243,
      -0.0493401475250721,
      -0.04124722257256508,
      0.0653717964887619,
      0.0442015565931797,
      0.019192751497030258,
      -0.008584161289036274,
      0.045688606798648834,
      0.04260536655783653,
      0.031718265265226364,
      0.058433957397937775,
      0.08019688725471497,
      0.061046186834573746,
      -0.05504471808671951,
      0.02066688984632492,
      -0.023389315232634544,
      -0.05154265835881233,
      -0.05372771620750427,
      0.07112476229667664,
      0.014132864773273468,
      0.028954211622476578,
      0.034390538930892944,
      0.033517591655254364,
      0.06751174479722977,
      -0.006453719921410084,
      0.08388423174619675,
      -0.039963509887456894,
      0.015418365597724915,
      -0.01831991784274578,
      0.05554816499352455,
      -0.029173696413636208,
      0.055614862591028214,
      -0.04885208606719971,
      -0.059393540024757385,
      -0.05977430194616318,
      0.051855430006980896,
      0.04529616981744766,
      -0.07065530866384506,
      -0.07882308959960938,
      -0.08576316386461258,
      -0.02314460277557373,
      -0.10272296518087387,
      -0.04256327077746391,
      0.08039165288209915,
      0.053504373878240585,
      -0.0983731597661972,
      -0.02383353002369404,
      -0.06096392869949341,
      0.009499767795205116,
      0.003384336130693555,
      0.05354223772883415,
      -0.04873416945338249,
      0.05922117084264755,
      -0.04700535535812378,
      0.04581539332866669,
      0.05425161123275757,
      0.06938336044549942,
      -0.027960238978266716,
      -0.027794858440756798,
      -0.0020102502312511206,
      -0.040940724313259125,
      -0.05763198062777519,
      -0.036392692476511,
      -0.08690784126520157,
      0.029201582074165344,
      0.013176965527236462,
      0.023111306130886078,
      -0.010378786362707615,
      0.03216926380991936,
      -0.07162973284721375,
      -0.0353841595351696,
      -0.07823532074689865,
      0.01882181316614151,
      -0.09936274588108063,
      0.06081647425889969,
      0.018083272501826286,
      0.016905656084418297,
      0.02468852326273918,
      -0.05010566487908363,
      0.045375384390354156,
      0.05383921042084694,
      0.012331314384937286,
      0.017821533605456352,
      -0.04180822893977165,
      0.017929188907146454,
      -0.05108329653739929,
      0.04975337162613869,
      0.027322424575686455,
      -0.08290982246398926,
      -0.06250198185443878,
      0.03479626774787903,
      -0.03187292069196701,
      -0.003250423353165388,
      0.02221662737429142,
      0.020583942532539368,
      -0.04235497862100601,
      -0.0391499362885952,
      0.07768480479717255,
      -0.03321271762251854,
      0.026249412447214127,
      -0.06104888767004013,
      -0.032202377915382385,
      0.015238418243825436,
      0.09019584208726883,
      -0.07219262421131134,
      -0.05377371236681938,
      0.048845354467630386,
      -0.02754208631813526,
      -0.055446963757276535,
      -0.0369071401655674,
      -0.05674323812127113,
      -0.06106472760438919,
      -0.08909719437360764,
      0.01705562323331833,
      0.02153720334172249,
      0.012633290141820908,
      -0.03334297984838486,
      -0.06989870220422745,
      -0.04028799384832382,
      0.026063136756420135,
      -0.08398067951202393,
      0.10525567829608917,
      0.007861494086682796,
      -0.00943348091095686,
      0.006450609769672155,
      -0.027844339609146118,
      0.06305857002735138,
      0.01764635182917118,
      -0.06476301699876785,
      -0.06588657200336456,
      -0.07074815779924393,
      -0.023775754496455193,
      0.029402295127511024,
      0.11743587255477905,
      0.09879796952009201,
      -0.05449198558926582,
      0.03956092521548271,
      0.05743259936571121,
      -0.0614188089966774,
      0.05487104877829552,
      0.05545300990343094,
      0.03406151011586189,
      0.015957223251461983,
      -0.07123060524463654,
      -0.04156007245182991,
      -0.10369788855314255,
      -0.046425580978393555,
      -0.08124373853206635,
      0.025427866727113724,
      0.03685037046670914,
      -0.07387220859527588,
      0.00760892266407609,
      -0.047209497541189194,
      0.06256608664989471,
      0.11204421520233154,
      -0.040940653532743454,
      -0.03816233202815056,
      0.056477196514606476,
      -0.018112778663635254,
      0.07273449748754501,
      0.014138493686914444,
      0.10098685324192047,
      -0.01326772291213274,
      -0.008298295550048351,
      0.04494185000658035,
      -0.022127309814095497,
      -0.02267913892865181,
      -0.043442245572805405,
      -0.060343943536281586,
      0.007007441017776728,
      -0.08201448619365692,
      0.03406418487429619,
      0.05282728001475334,
      -17332845891360193e-20,
      0.039687395095825195,
      -0.023116210475564003,
      0.04025358334183693,
      -0.03968092054128647,
      -0.04404672235250473,
      0.02345317415893078,
      0.061984311789274216,
      -0.05498877540230751,
      0.01676526479423046,
      0.07125096768140793,
      0.022947782650589943,
      7793406839482486e-19,
      0.07443518936634064,
      0.026461729779839516,
      0.06095533445477486,
      -0.046160340309143066,
      -0.012503311038017273,
      0.03789384290575981,
      0.044116053730249405,
      -0.02224322222173214,
      0.037657540291547775,
      -0.06540036201477051,
      -0.06597405672073364,
      -0.09526780247688293,
      -0.0015280829975381494,
      -0.021129608154296875,
      -0.0554887093603611,
      0.04764259606599808,
      0.0398273803293705,
      -0.030676769092679024,
      -0.021651577204465866,
      0.04931728169322014,
      0.06490405648946762,
      -0.003474445780739188,
      -0.049382906407117844,
      -0.03692738711833954,
      -0.03323431685566902,
      -0.062473196536302567,
      -0.02625783160328865,
      -0.0459919311106205,
      0.03122483380138874,
      -0.05164527893066406,
      -0.05234453082084656,
      0.026934849098324776,
      0.041534073650836945,
      -0.06555312871932983,
      0.05658351629972458,
      0.018689582124352455,
      -0.0584351122379303,
      0.05927223339676857,
      -0.0018954388797283173,
      -0.004450822249054909,
      0.03022766299545765,
      0.06747051328420639,
      -0.10510723292827606,
      0.048350993543863297,
      0.020181849598884583,
      -0.050819333642721176,
      0.0400707870721817,
      -0.07681667804718018,
      -0.03504003584384918,
      0.0587485171854496,
      0.053037725389003754,
      -0.03178957477211952,
      -0.015648141503334045,
      0.04854239895939827,
      0.05493785813450813,
      0.042785920202732086,
      0.08136560767889023,
      -0.03240276873111725,
      -0.012096194550395012,
      0.07272171974182129,
      -0.05940782651305199,
      0.058633849024772644,
      0.036130379885435104,
      -0.01624039188027382,
      -0.0022312593646347523,
      -0.011070352979004383,
      -0.047806259244680405,
      -0.0042761340737342834,
      0.02148948609828949,
      -0.039389487355947495,
      -0.02842351794242859,
      0.043728306889534,
      0.05381911247968674,
      0.05341491103172302,
      0.06975959241390228
    ]
  },
  {
    id: "performance",
    behavior: "REVIEW",
    description: "Review performance characteristics and bottlenecks.",
    embedding: [
      0.02193768508732319,
      0.006526488345116377,
      -0.028462443500757217,
      -0.09790480136871338,
      0.0501786470413208,
      -0.03447841480374336,
      0.03394080325961113,
      0.04849325120449066,
      0.10920973867177963,
      0.031067337840795517,
      0.04538732022047043,
      0.009984842501580715,
      0.049426525831222534,
      -0.04077759385108948,
      -0.04576946794986725,
      12874875392299145e-20,
      0.07620581239461899,
      -0.0455203503370285,
      -0.08513003587722778,
      -0.06863022595643997,
      -0.00805136188864708,
      -0.053318195044994354,
      -0.01263132132589817,
      0.05937008932232857,
      0.06868021935224533,
      0.07321538031101227,
      -0.07540136575698853,
      0.004800310358405113,
      0.06150394305586815,
      -0.0963163673877716,
      -0.025690918788313866,
      0.016344282776117325,
      0.020856671035289764,
      -0.06703867763280869,
      0.052482396364212036,
      0.04207667335867882,
      -0.0923587828874588,
      -0.045600391924381256,
      0.04045233130455017,
      -0.052737973630428314,
      -0.05029929056763649,
      0.02097260393202305,
      0.043339114636182785,
      0.06515123695135117,
      0.07739289849996567,
      0.0431661531329155,
      -0.06570755690336227,
      -0.008629048243165016,
      -0.045423123985528946,
      -0.0661095455288887,
      -0.03270683437585831,
      0.04607131704688072,
      -0.008280736394226551,
      0.03896045684814453,
      0.041271645575761795,
      -0.08791844546794891,
      -0.01758725754916668,
      -0.06610831618309021,
      -0.06842869520187378,
      0.06540863960981369,
      0.049393270164728165,
      -0.04944432154297829,
      0.016320252791047096,
      0.05701426416635513,
      0.09296287596225739,
      0.09129568189382553,
      0.029350072145462036,
      0.03458220511674881,
      -0.06970620900392532,
      -0.03426200523972511,
      -0.05303644388914108,
      0.027904052287340164,
      -0.021663719788193703,
      -0.028816629201173782,
      -0.022703824564814568,
      0.0788017138838768,
      0.06308817863464355,
      -0.01970977708697319,
      0.014578433707356453,
      -0.022436948493123055,
      -0.04661127179861069,
      -0.03220765292644501,
      -0.02184056118130684,
      0.040328286588191986,
      -0.05923251807689667,
      0.0685783252120018,
      0.020614663138985634,
      -0.011316461488604546,
      0.041047725826501846,
      -0.025661733001470566,
      0.030612044036388397,
      0.01864883303642273,
      -0.09572098404169083,
      -0.06505366414785385,
      -0.15464648604393005,
      -0.08380385488271713,
      -0.06760153919458389,
      0.09459224343299866,
      0.05919307842850685,
      -0.01552116684615612,
      0.053657401353120804,
      -0.031084399670362473,
      0.06841504573822021,
      -0.08130764216184616,
      -0.04760456457734108,
      0.0526098906993866,
      0.04830214008688927,
      -0.029861439019441605,
      0.06467677652835846,
      -0.04766998067498207,
      -0.0010287213372066617,
      -0.011024048551917076,
      0.04779884219169617,
      0.01638648845255375,
      -0.00768291437998414,
      -0.03854869678616524,
      -0.05012519285082817,
      -0.0039815474301576614,
      0.042157627642154694,
      0.0035411445423960686,
      0.07462789863348007,
      -0.029279716312885284,
      -0.05414966866374016,
      -0.03287018463015556,
      -0.05514758452773094,
      -0.04142037779092789,
      0.04750942066311836,
      0.06844476610422134,
      0.025728121399879456,
      0.03185853734612465,
      0.06785552948713303,
      0.03493495285511017,
      0.011179759167134762,
      0.047332439571619034,
      0.04243762046098709,
      0.06860235333442688,
      -0.002134181559085846,
      0.031014254316687584,
      0.004498647525906563,
      -0.012620542198419571,
      -0.049617666751146317,
      0.024962561205029488,
      -0.02746647782623768,
      0.04128480702638626,
      0.03126025199890137,
      0.06827884167432785,
      0.08919868618249893,
      -0.024249037727713585,
      0.11436238139867783,
      -0.06948822736740112,
      0.05194966867566109,
      -0.0021986551582813263,
      0.04084054380655289,
      0.01622285321354866,
      0.050579529255628586,
      -0.07607818394899368,
      -0.0948026105761528,
      -0.04660262539982796,
      0.07300669699907303,
      0.05075663700699806,
      -0.06524480134248734,
      -0.09079930186271667,
      -0.08906324952840805,
      -0.026258492842316628,
      -0.0518578439950943,
      -0.08749204874038696,
      0.043395642191171646,
      0.08061303943395615,
      -0.06997142732143402,
      -0.019481755793094635,
      -0.05910428613424301,
      0.010536679066717625,
      -0.031834185123443604,
      0.06815560162067413,
      -0.009252659045159817,
      0.02851390279829502,
      -0.03911759331822395,
      0.04188118502497673,
      0.07728458195924759,
      0.03127039223909378,
      -0.07715212553739548,
      -0.03531785309314728,
      0.021326713263988495,
      -0.05099957063794136,
      -0.05590328946709633,
      -0.061866939067840576,
      -0.05239410325884819,
      0.043404728174209595,
      0.017359258607029915,
      -0.03369545936584473,
      0.016623815521597862,
      0.04689917713403702,
      -0.09245087951421738,
      -0.0525386668741703,
      -0.0429183728992939,
      0.0062220217660069466,
      -0.0329008586704731,
      0.05550447851419449,
      0.05649784952402115,
      0.030098021030426025,
      0.0187624990940094,
      -0.04143955558538437,
      0.07831798493862152,
      326258857967332e-18,
      0.08925791829824448,
      0.040256671607494354,
      -0.09203421324491501,
      0.05470599979162216,
      -0.05227697640657425,
      0.019902121275663376,
      0.040611911565065384,
      -0.04593105986714363,
      -0.057679593563079834,
      0.02763635292649269,
      -0.02767285145819187,
      0.0024905106984078884,
      -0.02110743708908558,
      0.03305980563163757,
      -0.052461981773376465,
      -0.01589159294962883,
      0.060246482491493225,
      -0.013696386478841305,
      0.005418918561190367,
      -0.085673026740551,
      -0.01101810485124588,
      0.05539727956056595,
      0.07800348848104477,
      -0.07076222449541092,
      -0.024404700845479965,
      0.042224008589982986,
      -0.0227589663118124,
      -0.04431694373488426,
      -0.06271808594465256,
      -0.05437207594513893,
      -0.0360482782125473,
      -0.04677277058362961,
      0.010378539562225342,
      -0.0035452605225145817,
      0.007467999123036861,
      -0.033079106360673904,
      -0.028229057788848877,
      -0.04326595738530159,
      0.033027395606040955,
      -0.09709395468235016,
      0.08442952483892441,
      -0.037004463374614716,
      -0.01713038608431816,
      0.00810291338711977,
      -0.0017904068809002638,
      0.06613053381443024,
      0.05830351263284683,
      -0.06771796196699142,
      -0.04391622915863991,
      -0.05570113658905029,
      -0.013410874642431736,
      0.052085861563682556,
      0.08025576919317245,
      0.06032877042889595,
      -0.02671976387500763,
      0.024644123390316963,
      0.05579844489693642,
      -0.04689987376332283,
      0.02874165214598179,
      0.03543594107031822,
      0.06794270128011703,
      0.034435566514730453,
      -0.01581280678510666,
      -0.05879529193043709,
      -0.10834717750549316,
      -0.027965839952230453,
      -0.0990959107875824,
      0.029456203803420067,
      0.04856996610760689,
      -0.02558831311762333,
      -0.006829294376075268,
      -0.028883254155516624,
      0.045158084481954575,
      0.07983188331127167,
      -0.050545599311590195,
      -0.04747476801276207,
      0.03154495358467102,
      -0.04800443723797798,
      0.0418759286403656,
      0.014611181803047657,
      0.06608061492443085,
      -0.013328530825674534,
      -0.029193688184022903,
      0.0741148293018341,
      -0.020988812670111656,
      -0.04139154031872749,
      -0.044631313532590866,
      -0.06037459522485733,
      0.013297642581164837,
      -0.03087758645415306,
      0.05915938317775726,
      0.026293545961380005,
      -0.01492678839713335,
      0.032422054558992386,
      -0.048701196908950806,
      0.009227986447513103,
      -0.004476094152778387,
      -0.03129321336746216,
      0.054501116275787354,
      0.036069970577955246,
      -0.0488729327917099,
      0.055670518428087234,
      0.0038440371863543987,
      0.009625568054616451,
      -0.022138837724924088,
      0.08151819556951523,
      0.043421097099781036,
      0.07834365218877792,
      -0.05386965721845627,
      -0.03153799846768379,
      0.05068563297390938,
      0.046124644577503204,
      -0.026583146303892136,
      0.021857894957065582,
      -0.01763041876256466,
      -0.047811977565288544,
      -0.042499348521232605,
      -0.03496003895998001,
      -0.010777059011161327,
      -0.07507879287004471,
      0.061697281897068024,
      0.09590267390012741,
      -0.05530320852994919,
      -0.01771376095712185,
      0.03787783533334732,
      0.035887159407138824,
      0.014573647640645504,
      -0.03846118971705437,
      -0.04276450350880623,
      -0.002183107193559408,
      -0.10439494252204895,
      -0.030784910544753075,
      -0.06091363728046417,
      0.0377856083214283,
      -0.046419426798820496,
      -0.036724817007780075,
      0.036654431372880936,
      0.03752194344997406,
      -0.020285477861762047,
      0.05611005425453186,
      -0.045473869889974594,
      -0.046113044023513794,
      0.041752055287361145,
      -0.006358154118061066,
      -0.039701495319604874,
      0.0271370280534029,
      0.09365018457174301,
      -0.10994821041822433,
      0.05255777761340141,
      0.029768066480755806,
      -0.03037313185632229,
      0.04299626499414444,
      -0.0909634456038475,
      -0.029965272173285484,
      0.044476695358753204,
      0.03247000649571419,
      -0.040458302944898605,
      -0.04576588794589043,
      0.03947779908776283,
      0.09215212613344193,
      0.040122952312231064,
      0.0684574767947197,
      -0.01895279437303543,
      -6169756525196135e-19,
      0.04632681980729103,
      -0.06861292570829391,
      0.02850993722677231,
      0.027467062696814537,
      0.0027798719238489866,
      -0.0017603040905669332,
      -0.01244878489524126,
      -0.07404965907335281,
      -0.013736064545810223,
      0.05543111637234688,
      -0.04012289270758629,
      -0.0426788330078125,
      0.03864748030900955,
      0.060567207634449005,
      0.09974727034568787,
      0.04709707200527191
    ]
  },
  {
    id: "architecture",
    behavior: "REVIEW",
    description: "Review structural and layering concerns.",
    embedding: [
      0.05493888258934021,
      -0.01576308161020279,
      -0.06417381018400192,
      -0.10921113938093185,
      0.03154868632555008,
      -0.03995789214968681,
      0.0860430970788002,
      0.07290039956569672,
      0.07468786090612411,
      0.016201531514525414,
      0.0561731681227684,
      0.006097359582781792,
      0.07858140766620636,
      0.008513069711625576,
      -0.043720368295907974,
      0.037914495915174484,
      0.0788104310631752,
      -0.03370872884988785,
      -0.06734544783830643,
      -0.0668441653251648,
      0.021254299208521843,
      -0.04228678345680237,
      0.008389919996261597,
      0.0946669727563858,
      0.05286000669002533,
      0.09817417711019516,
      -0.04270569235086441,
      0.0045718420296907425,
      0.03659946843981743,
      -0.04541589692234993,
      -0.03836788982152939,
      -0.009126443415880203,
      0.05611754208803177,
      -0.04710179939866066,
      0.043099887669086456,
      0.04229816421866417,
      -0.049581535160541534,
      -0.07213421165943146,
      0.013881228864192963,
      -0.011849929578602314,
      -0.041056372225284576,
      0.004165781661868095,
      0.04319952055811882,
      0.09098108112812042,
      0.06096416711807251,
      0.06780074536800385,
      -0.050851333886384964,
      0.009789593517780304,
      -0.07683159410953522,
      -0.04927811771631241,
      -0.05946201831102371,
      0.05815720558166504,
      0.02532707341015339,
      0.0441637858748436,
      0.066520556807518,
      -0.045043300837278366,
      -0.06351634114980698,
      -0.07517123967409134,
      -0.031246457248926163,
      0.04661545157432556,
      0.08617537468671799,
      -0.01268400251865387,
      -0.023015882819890976,
      0.04000501707196236,
      0.10181635618209839,
      0.06777281314134598,
      0.029716957360506058,
      0.03736383095383644,
      -0.05118924006819725,
      -0.03161080926656723,
      -0.07805772125720978,
      0.047001346945762634,
      -0.01148739829659462,
      0.007736742030829191,
      0.013919301331043243,
      0.05490410700440407,
      0.02608099952340126,
      -0.010217269882559776,
      0.05202433466911316,
      -0.060131605714559555,
      -0.03669915348291397,
      -0.05248585715889931,
      -0.054368335753679276,
      0.0557597316801548,
      -0.0758446529507637,
      0.033356305211782455,
      0.05876574292778969,
      -0.036759600043296814,
      0.095053531229496,
      -0.056067321449518204,
      0.05254330858588219,
      0.04276023805141449,
      -0.05630972981452942,
      -0.04736245796084404,
      -0.07495233416557312,
      -0.06309492886066437,
      -0.04803628847002983,
      0.08396816998720169,
      0.10485585778951645,
      -0.017171449959278107,
      0.025023067370057106,
      -0.03816453367471695,
      0.05944110080599785,
      -0.09442830085754395,
      -0.053594931960105896,
      0.046959567815065384,
      0.019904613494873047,
      -0.0437774695456028,
      0.0865335464477539,
      -0.0626041367650032,
      -0.037259023636579514,
      0.006398696452379227,
      0.020927071571350098,
      0.02798442170023918,
      -0.020328208804130554,
      -0.017010703682899475,
      -0.057570550590753555,
      -0.02510041743516922,
      0.06302997469902039,
      -0.004537604749202728,
      0.04168923944234848,
      -0.07692131400108337,
      -0.05113840475678444,
      -0.05614383891224861,
      -0.0390206016600132,
      -0.03536256402730942,
      0.028399106115102768,
      -0.0033988463692367077,
      0.03377826139330864,
      0.04839065670967102,
      0.09070862084627151,
      0.06032026931643486,
      0.03252538666129112,
      0.061294570565223694,
      0.059036362916231155,
      0.08516556769609451,
      -0.02934817597270012,
      0.018374886363744736,
      -0.011040620505809784,
      -0.022855771705508232,
      -0.050291091203689575,
      0.056987255811691284,
      -0.012670141644775867,
      0.051323022693395615,
      0.018382800742983818,
      0.03159192204475403,
      0.06811649352312088,
      -0.007133174687623978,
      0.08989483118057251,
      -0.05382179468870163,
      -0.0011133166262879968,
      0.044881392270326614,
      0.01587170735001564,
      -0.01657283306121826,
      0.05949333310127258,
      -0.03589239716529846,
      -0.07454201579093933,
      -0.06829525530338287,
      0.03819102421402931,
      0.07539363950490952,
      -0.07892738282680511,
      -0.08142971992492676,
      -0.0778433084487915,
      -0.043760742992162704,
      -0.06256213784217834,
      -0.04788871482014656,
      0.07570140808820724,
      0.08621734380722046,
      -0.07327499240636826,
      -0.0016633105697110295,
      -0.07864677906036377,
      0.024759354069828987,
      -0.048806797713041306,
      0.05721275880932808,
      -0.028265180066227913,
      0.028855804353952408,
      -0.02712087891995907,
      -40252142935059965e-20,
      0.0817689597606659,
      0.04828707501292229,
      -0.04393073543906212,
      -0.007237294688820839,
      -643426610622555e-18,
      -0.04860662296414375,
      -0.08722154796123505,
      -0.06326688081026077,
      -0.08251029253005981,
      0.02132938988506794,
      0.019240282475948334,
      -0.0074113886803388596,
      0.00977355521172285,
      0.05658966675400734,
      -0.09039073437452316,
      -0.02976074442267418,
      -0.08241445571184158,
      0.042724609375,
      -0.06357702612876892,
      0.05717303976416588,
      0.07655175775289536,
      0.05431398004293442,
      0.016953924670815468,
      -0.05085775628685951,
      0.04317724332213402,
      0.01649090275168419,
      0.03613468259572983,
      0.011391392908990383,
      -0.05300500616431236,
      -0.010386403650045395,
      -0.044187549501657486,
      0.04651213809847832,
      0.023704832419753075,
      -0.05556522682309151,
      -0.06773893535137177,
      0.07593610882759094,
      -0.04886600375175476,
      -0.01715615577995777,
      0.007671129424124956,
      0.022543782368302345,
      -0.03311789780855179,
      -0.018995093181729317,
      0.07477205991744995,
      -0.03951222449541092,
      0.034831009805202484,
      -0.06308696419000626,
      -0.03181029111146927,
      0.035763707011938095,
      0.09369293600320816,
      -0.0642566904425621,
      -0.04200442135334015,
      0.038421791046857834,
      -0.03675444424152374,
      -0.049537524580955505,
      -0.08352819085121155,
      -0.08806310594081879,
      -0.031006887555122375,
      -0.06665252149105072,
      0.011826147325336933,
      0.013888691551983356,
      0.019299518316984177,
      -0.034561220556497574,
      -0.029832540079951286,
      -0.041890136897563934,
      0.051364053040742874,
      -0.079767145216465,
      0.06142234057188034,
      -0.02022336795926094,
      -0.024057574570178986,
      0.04313758388161659,
      -0.017648527398705482,
      0.06035694479942322,
      0.008355440571904182,
      -0.04938172176480293,
      -0.07647443562746048,
      -0.04889237508177757,
      -0.03709398955106735,
      0.046353764832019806,
      0.1004101112484932,
      0.04917711392045021,
      -0.05669201537966728,
      0.01578720659017563,
      0.04544324800372124,
      -0.02824568562209606,
      0.0756949782371521,
      0.04518074914813042,
      0.051695045083761215,
      -0.018850697204470634,
      -0.0651540607213974,
      -0.028110738843679428,
      -0.10110656917095184,
      -0.027230048552155495,
      -0.08833189308643341,
      -0.004237357527017593,
      0.03760562464594841,
      -0.07228359580039978,
      -0.023173091933131218,
      -0.06214168295264244,
      0.05204542353749275,
      0.12172942608594894,
      -0.0347120426595211,
      -0.04928707331418991,
      0.021127374842762947,
      -0.013983861543238163,
      0.033155329525470734,
      0.01355871744453907,
      0.06622551381587982,
      -0.015551635064184666,
      0.016210341826081276,
      0.05617488920688629,
      0.009010274894535542,
      -0.032711464911699295,
      -0.04594774544239044,
      -0.06938866525888443,
      0.004187118262052536,
      -0.05549578741192818,
      0.05441629886627197,
      0.036696657538414,
      -0.006334880832582712,
      0.02330278977751732,
      -0.055562395602464676,
      0.052818380296230316,
      -0.03182050213217735,
      -0.04495678097009659,
      0.03848283365368843,
      0.0465797483921051,
      -0.04565175622701645,
      0.031098026782274246,
      0.01105852983891964,
      0.03137747570872307,
      -0.0043415287509560585,
      0.08186919242143631,
      0.046399567276239395,
      0.05360421910881996,
      -0.04319722577929497,
      -0.010702344588935375,
      0.029920965433120728,
      0.05609164759516716,
      -0.02210535854101181,
      0.04456358402967453,
      -0.08200278878211975,
      -0.036010853946208954,
      -0.0744323804974556,
      -0.03850855305790901,
      -0.04091344028711319,
      -0.08521454781293869,
      0.05510479584336281,
      0.05475366488099098,
      -0.0065043470822274685,
      -0.0269768089056015,
      0.0677400678396225,
      0.04248855635523796,
      0.053607579320669174,
      -0.04886983707547188,
      -0.0520569272339344,
      0.008387107402086258,
      -0.0769442617893219,
      -0.010514634661376476,
      -0.056730929762125015,
      0.004526731092482805,
      -0.025671718642115593,
      -0.025142131373286247,
      0.011620182543992996,
      0.05233408510684967,
      -0.048215143382549286,
      0.05500418692827225,
      -0.020196449011564255,
      -0.03981276601552963,
      0.02609102427959442,
      -0.035543158650398254,
      -0.04617682844400406,
      0.050583817064762115,
      0.0760345533490181,
      -0.1103825494647026,
      -0.013401842676103115,
      0.026081686839461327,
      7593640475533903e-19,
      0.02077307365834713,
      -0.08128780126571655,
      -0.07024531811475754,
      0.05450261011719704,
      0.046411048620939255,
      -0.03908376768231392,
      -0.003796829143539071,
      0.03069671243429184,
      0.04065337032079697,
      0.05142056941986084,
      0.04354041814804077,
      -0.035464778542518616,
      -0.026864709332585335,
      0.08182138204574585,
      -0.06679042428731918,
      0.05555395781993866,
      0.02892340160906315,
      1845347142079845e-19,
      -0.009199409745633602,
      -4157733346801251e-19,
      -0.07192917168140411,
      -0.0013739013811573386,
      0.0409410260617733,
      -0.047763288021087646,
      -0.027104627341032028,
      0.03255154937505722,
      0.031510449945926666,
      0.05013841390609741,
      0.04066457971930504
    ]
  },
  {
    id: "quality",
    behavior: "REVIEW",
    description: "Review maintainability, consistency, and test quality.",
    embedding: [
      0.019469058141112328,
      -0.012429535388946533,
      -0.04251217469573021,
      -0.0818742886185646,
      -0.020395757630467415,
      -0.04224902018904686,
      0.05489097163081169,
      0.0268646739423275,
      0.09906977415084839,
      0.021032771095633507,
      0.052334800362586975,
      0.03738145902752876,
      0.07631507515907288,
      -0.02151191234588623,
      -0.043663546442985535,
      0.0318472795188427,
      0.07722999155521393,
      -0.012618429027497768,
      -0.09938155114650726,
      -0.07237972319126129,
      -0.011251278221607208,
      -0.07612591981887817,
      0.009900041855871677,
      0.0712694525718689,
      0.06996292620897293,
      0.06519541889429092,
      -0.024752290919423103,
      -0.004194964654743671,
      0.03154715150594711,
      -0.06489387899637222,
      -0.04134107381105423,
      -0.0026584307197481394,
      0.03669990599155426,
      -0.04992254078388214,
      0.0369943268597126,
      0.034516818821430206,
      -0.07871165871620178,
      -0.05554475262761116,
      0.04315749928355217,
      -0.018976494669914246,
      -0.016180390492081642,
      0.04401103034615517,
      0.022482123225927353,
      0.06334207952022552,
      0.04477841779589653,
      0.061166536062955856,
      -0.06657718867063522,
      0.004310361575335264,
      -0.035204604268074036,
      -0.06180684641003609,
      -0.06788110733032227,
      0.050911035388708115,
      -0.0050642360001802444,
      0.030015528202056885,
      0.06014381721615791,
      -0.08064289391040802,
      -0.01961342804133892,
      -0.06474046409130096,
      -0.06054054573178291,
      0.03824387118220329,
      0.06155341491103172,
      -0.045759495347738266,
      0.015117961913347244,
      0.048778120428323746,
      0.09016713500022888,
      0.0789528414607048,
      0.03721677139401436,
      0.04891185835003853,
      -0.04922223836183548,
      -0.024921026080846786,
      -0.05195625126361847,
      0.03894942253828049,
      -0.029009046033024788,
      -0.010040472261607647,
      0.0016720043495297432,
      0.04615215212106705,
      0.03898336738348007,
      -0.05647953972220421,
      -0.001992729725316167,
      -0.05215570330619812,
      -0.0915590226650238,
      -0.05199207738041878,
      -0.025341179221868515,
      0.03252765163779259,
      -0.06179388239979744,
      0.06558824330568314,
      0.04083893820643425,
      -0.055471885949373245,
      0.08045992255210876,
      -0.03237796574831009,
      0.04519879072904587,
      0.0049790143966674805,
      -0.07777803391218185,
      -0.044006187468767166,
      -0.1224374771118164,
      -0.07366570085287094,
      -0.01838059164583683,
      0.08317668735980988,
      0.07432008534669876,
      -0.02474174275994301,
      0.05251438543200493,
      0.002070195972919464,
      0.017005011439323425,
      -0.06654435396194458,
      -0.05260935425758362,
      0.06707722693681717,
      0.021853087469935417,
      -0.047095730900764465,
      0.06938976794481277,
      -0.045647893100976944,
      -0.009188718162477016,
      -0.004574631340801716,
      0.07660245895385742,
      0.022241365164518356,
      -0.009280179627239704,
      -0.006679019890725613,
      -0.056728098541498184,
      -0.031337376683950424,
      0.05671529099345207,
      -0.06583266705274582,
      0.07938424497842789,
      -0.03722076117992401,
      -0.02918391488492489,
      -0.04370487108826637,
      -0.044093284755945206,
      -0.04560108110308647,
      0.0216357484459877,
      0.029220907017588615,
      0.04357612505555153,
      0.01392940804362297,
      0.040166039019823074,
      0.024391528218984604,
      0.012526345439255238,
      0.07210232317447662,
      0.03075547330081463,
      0.08793659508228302,
      -0.037233177572488785,
      0.02636401727795601,
      0.014676605351269245,
      0.0043816473335027695,
      -0.05359054356813431,
      0.015096059069037437,
      -0.04166668280959129,
      0.06448418647050858,
      0.043406594544649124,
      0.041092585772275925,
      0.06385549157857895,
      -0.0383511446416378,
      0.09092774242162704,
      -0.0882141962647438,
      0.03177739307284355,
      0.024226244539022446,
      0.04397648572921753,
      0.004340483341366053,
      0.06963914632797241,
      -0.0515696220099926,
      -0.05514548346400261,
      -0.05830228328704834,
      0.060909319669008255,
      0.0702018290758133,
      -0.046477001160383224,
      -0.07664318382740021,
      -0.05736261606216431,
      -0.05453850328922272,
      -0.04780195653438568,
      -0.08358296751976013,
      0.014230684377253056,
      0.05659845471382141,
      -0.10438641160726547,
      -0.011064654216170311,
      -0.08694662153720856,
      0.057203929871320724,
      -0.029315166175365448,
      0.03618184104561806,
      -0.006422045640647411,
      0.0226780716329813,
      -0.04504215344786644,
      0.01819390058517456,
      0.07937566190958023,
      0.03154631331562996,
      -0.05260376259684563,
      -0.06660520285367966,
      0.024968072772026062,
      -0.04559171944856644,
      -0.03577717766165733,
      -0.03382530435919762,
      -0.08396607637405396,
      0.027115026488900185,
      -0.010080089792609215,
      -0.03530750423669815,
      0.019413091242313385,
      0.02147689461708069,
      -0.06376799196004868,
      -0.050991661846637726,
      -0.06224209442734718,
      0.06153058260679245,
      -0.055410757660865784,
      0.05642888695001602,
      0.04423462226986885,
      0.03387904912233353,
      0.006479236297309399,
      -0.05406054109334946,
      0.07698021084070206,
      0.04719715937972069,
      0.041223108768463135,
      0.01582333818078041,
      -0.09238018095493317,
      0.03158516064286232,
      -0.07639718800783157,
      0.05104398727416992,
      0.02258467860519886,
      -0.07378102838993073,
      -0.05519416183233261,
      0.07126924395561218,
      0.008112646639347076,
      -0.010747606866061687,
      7661135750822723e-19,
      0.034912336617708206,
      -0.04444010183215141,
      -0.0018908752826973796,
      0.041335560381412506,
      -0.01916591078042984,
      0.017691021785140038,
      -0.06817729026079178,
      -0.03581252694129944,
      0.03938066214323044,
      0.08669582009315491,
      -0.12423654645681381,
      -0.06961628049612045,
      0.07013984769582748,
      -0.007303652819246054,
      -0.06806713342666626,
      -0.07605889439582825,
      -0.05805664882063866,
      -0.04860628768801689,
      -0.07204750180244446,
      0.01545996405184269,
      0.02403656579554081,
      0.07909873872995377,
      -0.04195531830191612,
      -0.0014325864613056183,
      -0.037635788321495056,
      0.06301826983690262,
      -0.07890183478593826,
      0.05774766579270363,
      -0.02646259032189846,
      -0.02345195598900318,
      0.030127322301268578,
      -0.013172590173780918,
      0.061611276119947433,
      0.012592626735568047,
      -0.06520342826843262,
      -0.04775619879364967,
      -0.043957341462373734,
      -0.047722212970256805,
      0.02234223298728466,
      0.09374717622995377,
      0.07006276398897171,
      -0.026672467589378357,
      0.0423266626894474,
      0.05932319164276123,
      -0.07798376679420471,
      0.05839015170931816,
      0.02048841305077076,
      0.03748433664441109,
      0.039799764752388,
      -0.03341611474752426,
      -0.034693002700805664,
      -0.11283408105373383,
      -0.0496012344956398,
      -0.07246505469083786,
      0.025883527472615242,
      0.053872574120759964,
      -0.042059868574142456,
      -0.03932144492864609,
      -0.012129619717597961,
      0.05390816181898117,
      0.08059852570295334,
      -0.046929530799388885,
      -0.07843063771724701,
      0.015291159972548485,
      -0.030070947483181953,
      0.050421394407749176,
      0.016762444749474525,
      0.07212701439857483,
      0.02851635403931141,
      0.0093074981123209,
      0.07115107774734497,
      0.01938435807824135,
      -0.027614273130893707,
      -0.02298293262720108,
      -0.05811769887804985,
      0.026634318754076958,
      -0.03889799490571022,
      0.019617127254605293,
      0.03771436959505081,
      -0.014644460752606392,
      0.03891994431614876,
      -0.034245528280735016,
      0.0529455803334713,
      -0.025130512192845345,
      -0.025931891053915024,
      0.02412279322743416,
      0.05040379986166954,
      -0.06687916070222855,
      -0.01692463830113411,
      -0.00376541237346828,
      0.04191721975803375,
      0.0031372930388897657,
      0.07458972185850143,
      0.004190889652818441,
      0.07950585335493088,
      -0.06032058969140053,
      -0.022757675498723984,
      0.04871012642979622,
      0.05240440368652344,
      -0.03692109137773514,
      0.015270570293068886,
      -0.005821053870022297,
      -0.03844836726784706,
      -0.024439197033643723,
      -0.052056167274713516,
      -0.036090727895498276,
      -0.07021480053663254,
      0.04354944825172424,
      0.10763665288686752,
      -0.03087594173848629,
      -0.020568039268255234,
      0.01993631385266781,
      0.03500116989016533,
      0.027826793491840363,
      -0.044364236295223236,
      -0.04441835731267929,
      -0.001974596409127116,
      -0.004095250274986029,
      -0.016504371538758278,
      -0.0487620048224926,
      0.00959058478474617,
      -0.07242316007614136,
      -0.05322825536131859,
      0.046503860503435135,
      0.049829304218292236,
      -0.0568147636950016,
      0.08327002823352814,
      -0.017251232638955116,
      -0.04617174714803696,
      0.03936225175857544,
      -0.04380699619650841,
      -0.011367592960596085,
      0.02956658974289894,
      0.05231773480772972,
      -0.11763936281204224,
      0.05495148524641991,
      0.07164487987756729,
      -0.05472084879875183,
      0.05100258067250252,
      -0.08627063035964966,
      -0.036714594811201096,
      0.03811453655362129,
      0.049380794167518616,
      -0.044312894344329834,
      -0.02884724549949169,
      0.05497084930539131,
      0.08301467448472977,
      0.09795436263084412,
      0.052691586315631866,
      -0.021295031532645226,
      -0.01801862195134163,
      0.037856873124837875,
      -0.07187672704458237,
      0.07248007506132126,
      0.046856120228767395,
      -0.006722996477037668,
      -0.006152750924229622,
      0.0037741365376859903,
      -0.058426231145858765,
      -0.028078120201826096,
      0.04363345354795456,
      -0.04476501792669296,
      0.011659212410449982,
      0.029290160164237022,
      0.038743823766708374,
      0.11651050299406052,
      0.082978755235672
    ]
  },
  {
    id: "edit",
    behavior: "CODE",
    description: "Make targeted code edits in place. (mevcut kodu d\xFCzenle, ufak de\u011Fi\u015Fiklik)",
    embedding: [
      0.02934681810438633,
      -0.047704096883535385,
      -0.05748481675982475,
      -0.048766061663627625,
      0.08336002379655838,
      -0.02455994300544262,
      -47081088996492326e-20,
      0.019546348601579666,
      0.03531721234321594,
      0.016007529571652412,
      0.03920004144310951,
      -8489927859045565e-19,
      0.11919834464788437,
      -0.021385790780186653,
      -0.03510129824280739,
      0.0554623082280159,
      0.049804966896772385,
      -0.026955803856253624,
      -0.005427190568298101,
      -0.018716050311923027,
      0.015417919494211674,
      -0.031290002167224884,
      -0.02714490331709385,
      0.04016866907477379,
      0.037695299834012985,
      0.029160087928175926,
      -0.05800711736083031,
      0.03479943796992302,
      0.05376181751489639,
      -0.03856649622321129,
      -0.056327663362026215,
      -0.04108305275440216,
      0.02238871343433857,
      -0.0238813366740942,
      0.028556955978274345,
      0.013780666515231133,
      -0.06107419356703758,
      -0.03453874960541725,
      0.06800206005573273,
      -0.051156554371118546,
      -0.02415541373193264,
      0.007722740061581135,
      0.046736497431993484,
      0.05733296647667885,
      0.10395655781030655,
      5777901969850063e-19,
      -0.04118163511157036,
      0.052977267652750015,
      -0.03761923685669899,
      -0.03667420521378517,
      -0.04673738777637482,
      0.044299568980932236,
      0.015079941600561142,
      0.020503947511315346,
      -0.007166812662035227,
      -0.07485800981521606,
      -0.06638789921998978,
      -0.06991786509752274,
      -0.05586835741996765,
      0.058406341820955276,
      0.04873310774564743,
      0.008988587185740471,
      0.006537523586302996,
      0.01966378092765808,
      0.14669334888458252,
      0.0791347548365593,
      0.054017629474401474,
      0.07780349999666214,
      -0.020439159125089645,
      -0.017569057643413544,
      -0.02762458100914955,
      0.04556170478463173,
      0.018158450722694397,
      -0.042279601097106934,
      0.009859436191618443,
      0.03135231137275696,
      0.04486481100320816,
      -0.08976337313652039,
      0.027820073068141937,
      -0.05156676098704338,
      -0.0940021201968193,
      -0.04326571896672249,
      -0.05682983994483948,
      0.024616677314043045,
      -0.06695052236318588,
      0.05979248136281967,
      0.061626583337783813,
      -0.06993527710437775,
      0.06692442297935486,
      -0.053490884602069855,
      0.039052776992321014,
      0.050608228892087936,
      -0.0474429577589035,
      -0.04737364873290062,
      -0.16130416095256805,
      -0.053258925676345825,
      -0.0423736535012722,
      0.06336437910795212,
      0.07325316965579987,
      -0.038616303354501724,
      0.010476569645106792,
      -0.029922815039753914,
      0.045871008187532425,
      -0.08716331422328949,
      -0.07876754552125931,
      0.06147371977567673,
      0.007328426465392113,
      -0.04424169287085533,
      0.03152720257639885,
      -0.06299817562103271,
      -0.055262014269828796,
      0.022356489673256874,
      0.00562576949596405,
      0.03545359522104263,
      -0.06892470270395279,
      -0.03610094264149666,
      -0.0036379822995513678,
      -0.058799564838409424,
      0.06055457517504692,
      -0.10210365056991577,
      0.07520786672830582,
      -0.025138018652796745,
      -0.07194474339485168,
      -0.030439266934990883,
      -0.04578445851802826,
      -0.0069836159236729145,
      0.056838396936655045,
      0.010819870978593826,
      -5295348819345236e-19,
      -0.03563551977276802,
      0.012943279929459095,
      0.06936904042959213,
      0.053354211151599884,
      0.061990607529878616,
      0.041921768337488174,
      0.08975720405578613,
      -0.04970112815499306,
      0.00707130366936326,
      -0.00961996614933014,
      -0.02776540070772171,
      -0.04190142825245857,
      0.04684244841337204,
      -0.03615713119506836,
      0.030559521168470383,
      0.03546857461333275,
      0.054757364094257355,
      0.054094403982162476,
      -0.0010412918636575341,
      0.07744614034891129,
      -0.09248751401901245,
      0.059017546474933624,
      -0.013736538589000702,
      0.09994105994701385,
      0.013225456699728966,
      0.09053362160921097,
      -0.0564359612762928,
      -0.07672934979200363,
      -0.021008925512433052,
      0.07581567019224167,
      0.05468422919511795,
      -0.05467870831489563,
      -0.05047591030597687,
      -0.06556026637554169,
      -0.017675181850790977,
      -0.0508095845580101,
      -0.027840765193104744,
      0.029320739209651947,
      0.06114211305975914,
      -0.03879452869296074,
      -0.024198591709136963,
      -0.05933671444654465,
      0.054990433156490326,
      -0.05146852880716324,
      0.013725959695875645,
      -0.028110623359680176,
      0.06434541195631027,
      -0.04280988126993179,
      0.061044786125421524,
      0.033944256603717804,
      0.04809033125638962,
      -0.0050381445325911045,
      -0.008557036519050598,
      -0.015454639680683613,
      -0.030334455892443657,
      -0.06369579583406448,
      -0.05218299850821495,
      -0.050552912056446075,
      0.014295179396867752,
      5906055448576808e-19,
      -0.04936517775058746,
      0.016148794442415237,
      0.0647517517209053,
      -0.03432280197739601,
      -0.06524889916181564,
      -0.11729244142770767,
      0.03294296935200691,
      -0.017002688720822334,
      0.03426763415336609,
      0.019602801650762558,
      0.0474698469042778,
      0.0030265378300100565,
      -0.030830033123493195,
      0.04511473327875137,
      0.00900774635374546,
      0.02908390387892723,
      0.049557674676179886,
      -0.06171258166432381,
      0.04706135392189026,
      -0.02891780249774456,
      0.04172220081090927,
      0.023309312760829926,
      -0.05881575122475624,
      -0.04310455173254013,
      0.046321626752614975,
      -0.06564173847436905,
      0.01939576305449009,
      7937912014313042e-19,
      0.06787040084600449,
      -0.060518600046634674,
      0.04914432018995285,
      0.07274425774812698,
      -0.014208775013685226,
      0.05006347596645355,
      -0.09749305993318558,
      -0.06057501956820488,
      0.041707593947649,
      0.11439899355173111,
      -0.07393240928649902,
      -0.03908146172761917,
      0.07140394300222397,
      -0.03117525577545166,
      -0.02420421689748764,
      -0.06591261923313141,
      -0.08422864973545074,
      -0.040886636823415756,
      -0.0750913992524147,
      0.0014693597331643105,
      0.0014201384037733078,
      0.06521861255168915,
      -0.05651742219924927,
      -0.005859267897903919,
      -0.07527812570333481,
      0.07124675810337067,
      -0.07176323235034943,
      0.09560231864452362,
      -0.005543094594031572,
      -0.06313931941986084,
      0.050096746534109116,
      -0.0323258675634861,
      0.004371975548565388,
      0.011141407303512096,
      -0.04189004749059677,
      -0.02908090315759182,
      -0.008070294745266438,
      -0.030830644071102142,
      0.04593772813677788,
      0.08202256262302399,
      0.024320267140865326,
      -0.07220305502414703,
      0.04757098853588104,
      0.02020777203142643,
      -0.02251436375081539,
      0.11960294842720032,
      0.06740186363458633,
      0.05107908695936203,
      0.01712004840373993,
      -0.0399981252849102,
      -0.012807395309209824,
      -0.07245499640703201,
      -0.03751269727945328,
      -0.03564660623669624,
      0.005489501170814037,
      0.017263803631067276,
      -0.039107147604227066,
      -0.05272024869918823,
      -0.09346596151590347,
      0.07943957298994064,
      0.0713827833533287,
      -0.03862946853041649,
      -0.030415987595915794,
      0.028847169131040573,
      -0.01751432754099369,
      0.10433297604322433,
      0.0666690543293953,
      0.06974368542432785,
      -0.013540206477046013,
      -0.006123100873082876,
      0.04926162585616112,
      -0.008216501213610172,
      0.008480655960738659,
      -0.032335277646780014,
      -0.07787709683179855,
      0.001366408891044557,
      -0.05182185769081116,
      0.08758608996868134,
      -0.0052918498404324055,
      0.01769449934363365,
      0.08860340714454651,
      -0.04946257919073105,
      0.07634212076663971,
      0.004350749310106039,
      -0.04516962170600891,
      0.06126973405480385,
      0.029731478542089462,
      -0.09549403190612793,
      0.05190163105726242,
      0.02429986000061035,
      0.018357232213020325,
      0.01583726331591606,
      0.0659533217549324,
      0.07942890375852585,
      0.034904029220342636,
      -0.02850400097668171,
      -0.0148194944486022,
      0.040608733892440796,
      0.04093931242823601,
      -0.017474006861448288,
      0.015812622383236885,
      -0.04050920158624649,
      -0.04362022876739502,
      -0.09144202619791031,
      -0.021969808265566826,
      -0.05280715972185135,
      -0.03234456107020378,
      0.039144448935985565,
      0.021225498989224434,
      -0.04760263115167618,
      -0.03369878605008125,
      0.02089443989098072,
      0.011324909515678883,
      0.061576422303915024,
      -0.06462464481592178,
      -0.053970642387866974,
      0.015497978776693344,
      -0.029906203970313072,
      -0.03607766330242157,
      -0.014232116751372814,
      0.020080754533410072,
      -0.005669805221259594,
      -0.04996529966592789,
      0.019335737451910973,
      0.03393200784921646,
      -0.04545186087489128,
      0.03789356350898743,
      -0.020740263164043427,
      -0.07241249829530716,
      0.0031226833816617727,
      -0.03750024363398552,
      -0.00491472939029336,
      0.08971016854047775,
      0.05574367567896843,
      -0.10947388410568237,
      0.02150404080748558,
      0.041979048401117325,
      -0.02655169554054737,
      0.05756564065814018,
      -0.06723333895206451,
      -0.050029587000608444,
      0.05261671170592308,
      0.0490194633603096,
      -0.07092373073101044,
      -0.005937496665865183,
      0.02462169900536537,
      0.0758327767252922,
      0.039701130241155624,
      0.07724727690219879,
      -0.037684936076402664,
      -0.026727696880698204,
      0.02837018109858036,
      -0.046104300767183304,
      0.04990902915596962,
      0.053898587822914124,
      -0.0848182663321495,
      -0.01745658367872238,
      -0.012596690095961094,
      -0.0760355293750763,
      -0.021425515413284302,
      0.022306833416223526,
      -0.05654199421405792,
      0.014218335971236229,
      0.048017315566539764,
      0.0493830144405365,
      0.03364210203289986,
      0.06050658971071243
    ]
  },
  {
    id: "generate",
    behavior: "CODE",
    description: "Create new code from the user request. (yeni kod \xFCret, olu\u015Ftur)",
    embedding: [
      0.01814466342329979,
      -0.048838503658771515,
      -0.033948447555303574,
      -0.05760541930794716,
      0.09593379497528076,
      -0.025392424315214157,
      -9494403493590653e-19,
      0.01989998295903206,
      0.028739139437675476,
      0.023999154567718506,
      0.0389973409473896,
      0.03109312616288662,
      0.12765991687774658,
      -0.048939675092697144,
      -0.01627999357879162,
      0.06347867846488953,
      0.08291290700435638,
      -0.039703842252492905,
      -0.0356757678091526,
      -0.04925492778420448,
      0.04498627781867981,
      0.0018996555591002107,
      -0.029030200093984604,
      0.04115389287471771,
      0.06145793944597244,
      0.04515380784869194,
      -0.04939567670226097,
      0.009064882062375546,
      0.050481297075748444,
      -0.07443271577358246,
      -0.06271481513977051,
      -0.04113154858350754,
      0.03676462173461914,
      -0.02760370634496212,
      0.033298589289188385,
      0.023551784455776215,
      -0.0511372908949852,
      -0.038383450359106064,
      0.04724568501114845,
      -0.07213937491178513,
      -0.04644813388586044,
      0.01714138314127922,
      0.01857539266347885,
      0.05742502957582474,
      0.044453129172325134,
      0.01940019614994526,
      -0.010020000860095024,
      0.04872243478894234,
      -0.050323594361543655,
      -0.03294721618294716,
      -0.06258177012205124,
      0.06501815468072891,
      0.011024781502783298,
      0.07919902354478836,
      -0.008519836701452732,
      -0.024639792740345,
      -0.01805853843688965,
      -0.06003406271338463,
      -0.053565531969070435,
      0.06846189498901367,
      0.036028485745191574,
      0.001122969901189208,
      0.01434753555804491,
      -0.0038438818883150816,
      0.13083241879940033,
      0.03306689113378525,
      0.032926060259342194,
      0.050687819719314575,
      -0.021876206621527672,
      0.010736770927906036,
      -0.0459759347140789,
      0.006996835116297007,
      -0.0033941897563636303,
      -0.04987474903464317,
      0.00998714566230774,
      0.03767070919275284,
      0.013751871883869171,
      -0.07466110587120056,
      0.08326853811740875,
      -0.045051734894514084,
      -0.09092966467142105,
      -0.021586639806628227,
      -0.026201197877526283,
      0.01806395687162876,
      -0.08016093075275421,
      0.058524325489997864,
      0.07045932859182358,
      -0.06639842689037323,
      0.08840978890657425,
      -0.026982739567756653,
      0.04065424203872681,
      0.05275911092758179,
      -0.03601200133562088,
      -0.04639038071036339,
      -0.11632430553436279,
      -0.0716266855597496,
      -0.0826670303940773,
      0.06048779562115669,
      0.0822032243013382,
      -0.061858564615249634,
      0.03146795928478241,
      -0.017726169899106026,
      0.03140140324831009,
      -0.11012601107358932,
      -0.06277085095643997,
      0.07184811681509018,
      -0.04346273094415665,
      -0.06655997782945633,
      0.020410368219017982,
      -0.1044333279132843,
      -0.056035980582237244,
      0.03337758406996727,
      0.025139253586530685,
      0.02797473594546318,
      -0.041193023324012756,
      -0.034154728055000305,
      0.00945093110203743,
      -0.05147814005613327,
      0.03169186785817146,
      -0.07704345136880875,
      0.05449899658560753,
      -0.0022113414015620947,
      -0.07361449301242828,
      -0.056176673620939255,
      -0.05868343636393547,
      -0.0015504815382882953,
      0.0562250055372715,
      0.005622736178338528,
      -0.013419087044894695,
      -0.001479621510952711,
      0.022898534312844276,
      0.047436799854040146,
      0.04292631521821022,
      0.08167686313390732,
      0.05770370364189148,
      0.0785733014345169,
      -0.019967254251241684,
      0.01658492162823677,
      -3020452568307519e-19,
      -0.02619578130543232,
      -0.02866794727742672,
      0.0526072159409523,
      -0.025688542053103447,
      0.054944928735494614,
      0.03740931674838066,
      0.05997489020228386,
      0.0696997195482254,
      -0.0010225444566458464,
      0.03796573355793953,
      -0.09242504090070724,
      0.07406257092952728,
      -0.02318066731095314,
      0.06087881326675415,
      0.020625736564397812,
      0.07601428031921387,
      -0.07279706746339798,
      -0.08861447870731354,
      -0.02646106481552124,
      0.04110216349363327,
      0.03998948261141777,
      -0.03747054561972618,
      -0.10164869576692581,
      -0.04905698448419571,
      -0.0348922461271286,
      -0.05587535724043846,
      -0.006483269389718771,
      0.01967804692685604,
      0.11277418583631516,
      -0.02803206257522106,
      -0.046131618320941925,
      -0.06581331789493561,
      0.06360667198896408,
      -0.003042560536414385,
      0.025009458884596825,
      0.011291190050542355,
      0.062473397701978683,
      -0.035529714077711105,
      0.05757320299744606,
      0.06834365427494049,
      0.044233132153749466,
      -0.02263364940881729,
      -0.03517824783921242,
      -0.05002610757946968,
      -0.026782680302858353,
      -0.05956793576478958,
      -0.028277726843953133,
      -0.060486312955617905,
      0.00603853352367878,
      -0.006973762530833483,
      -0.0662894994020462,
      -0.0013019043253734708,
      0.054185427725315094,
      -0.03787316381931305,
      -0.06534424424171448,
      -0.09817241132259369,
      0.03518466278910637,
      -0.036660488694906235,
      0.044401008635759354,
      0.04351712018251419,
      0.07122517377138138,
      0.04007545858621597,
      -0.02585640922188759,
      0.03125925734639168,
      0.04116087779402733,
      0.03185101971030235,
      0.022085394710302353,
      -0.06392306089401245,
      0.06213458627462387,
      -0.04889145866036415,
      0.03903396800160408,
      0.027711475268006325,
      -0.0570482462644577,
      -0.04167163372039795,
      0.05683954805135727,
      -0.06157291308045387,
      0.018493052572011948,
      0.04979543387889862,
      0.06894990801811218,
      -0.03776576370000839,
      0.03548218309879303,
      0.05693407729268074,
      0.011060231365263462,
      0.021345343440771103,
      -0.0949084535241127,
      -0.07961608469486237,
      0.046070653945207596,
      0.055593155324459076,
      -0.09450265765190125,
      -0.022501206025481224,
      0.07106445729732513,
      -0.03275172784924507,
      -0.017698099836707115,
      -0.06878481805324554,
      -0.09516394138336182,
      -0.0683806911110878,
      -0.07923447340726852,
      0.018453320488333702,
      0.01737804338335991,
      0.03508676588535309,
      -0.0146939717233181,
      -0.005822926759719849,
      -0.04725679010152817,
      0.06629073619842529,
      -0.08711857348680496,
      0.09121955931186676,
      -0.005635903682559729,
      -0.05071098357439041,
      0.027961162850260735,
      -8670672541484237e-19,
      0.031433794647455215,
      0.027629083022475243,
      -0.06135436147451401,
      -0.019253740087151527,
      -0.006342477630823851,
      -0.029964199289679527,
      0.028632482513785362,
      0.07565993815660477,
      0.0642976388335228,
      -0.07000400871038437,
      0.023035278543829918,
      0.021170441061258316,
      -0.04393438249826431,
      0.10788606852293015,
      0.04459519684314728,
      0.031173039227724075,
      0.03392857313156128,
      -0.1092103123664856,
      -0.010119840502738953,
      -0.05038408562541008,
      -0.026676243171095848,
      -0.03648171201348305,
      -1679828274063766e-19,
      0.061681948602199554,
      -0.0648636445403099,
      -0.030272791162133217,
      -0.047670844942331314,
      0.060415733605623245,
      0.06713371723890305,
      -0.006091126706451178,
      -0.05106206610798836,
      0.004637422505766153,
      0.004029910545796156,
      0.06523393094539642,
      0.0674794539809227,
      0.06676461547613144,
      0.002617673249915242,
      -0.014235161244869232,
      0.04719444736838341,
      -0.046867743134498596,
      -0.018610021099448204,
      -0.024720728397369385,
      -0.08118180930614471,
      -44244376476854086e-20,
      -0.04480503499507904,
      0.08791856467723846,
      0.00726280827075243,
      0.02284369058907032,
      0.07791236788034439,
      -0.06623311340808868,
      0.04580429568886757,
      -0.014451872557401657,
      -0.08120089024305344,
      0.0619044192135334,
      0.03521299734711647,
      -0.13611167669296265,
      0.03345669433474541,
      0.01098873931914568,
      0.0017695050919428468,
      0.019571712240576744,
      0.06214987114071846,
      0.06228000298142433,
      0.03715799003839493,
      -0.035499207675457,
      -0.03390059992671013,
      0.010517960414290428,
      0.061264220625162125,
      -0.001811106689274311,
      0.019977102056145668,
      -0.04139290377497673,
      -0.0745578184723854,
      -0.09002015739679337,
      -0.045368742197752,
      -0.03186716139316559,
      -0.03436598181724548,
      0.011761780828237534,
      0.019831882789731026,
      -0.050588324666023254,
      0.004156680312007666,
      0.055966250598430634,
      0.020885171368718147,
      0.02902216836810112,
      -0.025771858170628548,
      -0.07954701036214828,
      0.04998291656374931,
      -0.02742399461567402,
      -0.03115798719227314,
      -0.01873050443828106,
      0.040250178426504135,
      32778081367723644e-20,
      -0.01902075856924057,
      0.00677609583362937,
      0.03555183857679367,
      -0.036926742643117905,
      0.028916630893945694,
      0.006561377085745335,
      -0.03526131808757782,
      0.029074212536215782,
      -0.03604269027709961,
      4815553838852793e-19,
      0.049890656024217606,
      0.03850124403834343,
      -0.09747269004583359,
      -0.011744854971766472,
      0.054668087512254715,
      -0.04114171117544174,
      0.05852191522717476,
      -0.098092220723629,
      -0.02424992434680462,
      0.0623718723654747,
      0.028531618416309357,
      -0.06452330201864243,
      -0.017368512228131294,
      0.016788456588983536,
      0.04566286504268646,
      0.07228541374206543,
      0.08787297457456589,
      -0.01887775957584381,
      0.02697012387216091,
      0.03413902595639229,
      -0.07542411237955093,
      0.05942228436470032,
      0.07828807830810547,
      -0.08666393905878067,
      -0.057901158928871155,
      -0.016918230801820755,
      -0.08137187361717224,
      0.004207716789096594,
      0.04062427207827568,
      -0.07055877894163132,
      -0.010711224749684334,
      0.03250396251678467,
      0.05999581515789032,
      0.042882274836301804,
      0.03631315380334854
    ]
  },
  {
    id: "refactor",
    behavior: "CODE",
    description: "Restructure code while preserving behavior. (refactor et, iyile\u015Ftir)",
    embedding: [
      0.044735342264175415,
      -0.02244654670357704,
      -0.021498428657650948,
      -0.05324267968535423,
      0.07703567296266556,
      -0.04126138985157013,
      -0.009372805245220661,
      0.0022217656951397657,
      0.026724940165877342,
      0.013069701381027699,
      0.04648733511567116,
      0.00854233093559742,
      0.11119282990694046,
      0.011048976331949234,
      -0.036433540284633636,
      0.04321884736418724,
      0.07246849685907364,
      -0.006092183757573366,
      -0.028841949999332428,
      -0.04248081520199776,
      0.01911993883550167,
      -0.0705706775188446,
      -0.006631298456341028,
      0.043380022048950195,
      0.07402175664901733,
      0.07689566910266876,
      -0.049631040543317795,
      0.02869579941034317,
      0.06627736985683441,
      -0.04889456555247307,
      -0.07332857698202133,
      -0.018056601285934448,
      0.045943714678287506,
      -0.050504837185144424,
      0.021346306428313255,
      0.006207740865647793,
      -0.05449935048818588,
      -0.033051006495952606,
      0.042696405202150345,
      -0.1001325249671936,
      -0.023624790832400322,
      0.01300771627575159,
      -0.003711801255121827,
      0.08778805285692215,
      0.0780048742890358,
      0.021260283887386322,
      -0.07365623116493225,
      0.02890734001994133,
      -0.0387943871319294,
      -0.039868805557489395,
      -0.0386628694832325,
      0.07732374966144562,
      0.014524898491799831,
      0.06260888278484344,
      0.032763004302978516,
      -0.049232594668865204,
      -0.08191075176000595,
      -0.06945346295833588,
      -0.03701651841402054,
      0.06321127712726593,
      0.04297881945967674,
      0.0035346068907529116,
      0.024099266156554222,
      0.027684610337018967,
      0.12013190984725952,
      0.05751366540789604,
      0.031969282776117325,
      0.06757108867168427,
      -0.013393345288932323,
      -0.018784206360578537,
      -0.049700669944286346,
      0.03678816184401512,
      0.004478673916310072,
      -0.02712966687977314,
      0.01995280757546425,
      0.03210657089948654,
      0.020416775718331337,
      -0.07064827531576157,
      0.04210755601525307,
      -0.06206854060292244,
      -0.08533025532960892,
      -0.06755009293556213,
      -0.05779470130801201,
      0.042973730713129044,
      -0.054364897310733795,
      0.061419084668159485,
      0.06989718228578568,
      -0.06716970354318619,
      0.07864047586917877,
      -0.030480824410915375,
      0.06942281126976013,
      0.013866768218576908,
      -0.0694923996925354,
      -0.03220526874065399,
      -0.12959223985671997,
      -0.06848253309726715,
      -0.05232100561261177,
      0.06977953016757965,
      0.06472082436084747,
      -0.03526803106069565,
      0.04761162027716637,
      -0.040997736155986786,
      0.01913212426006794,
      -0.10603401064872742,
      -0.05316881462931633,
      0.07378000020980835,
      -0.02913225069642067,
      -0.04721704497933388,
      0.04092372581362724,
      -0.07062960416078568,
      -0.05567072704434395,
      0.043284494429826736,
      0.03922184556722641,
      0.027799883857369423,
      -0.0552331767976284,
      -0.04360632598400116,
      -0.05228632315993309,
      -0.03243048116564751,
      0.037453703582286835,
      -0.05112535506486893,
      0.05254289507865906,
      -0.016994288191199303,
      -0.06419745087623596,
      -0.07252787798643112,
      -0.046701084822416306,
      -0.025177691131830215,
      0.058062560856342316,
      0.02376893348991871,
      0.010862233117222786,
      0.017962368205189705,
      0.011496893130242825,
      0.014453771524131298,
      0.025832800194621086,
      0.03967703506350517,
      0.04452257603406906,
      0.0958108976483345,
      -0.0272655226290226,
      0.04310629889369011,
      -0.03278134763240814,
      -0.02257012017071247,
      -0.04314018413424492,
      0.03223311901092529,
      -0.02979275956749916,
      0.02713748626410961,
      0.04821049049496651,
      0.03488153591752052,
      0.0699797123670578,
      -0.005997828673571348,
      0.05009275674819946,
      -0.09311214834451675,
      0.05829887092113495,
      -0.008698810823261738,
      0.08389166742563248,
      0.02369893155992031,
      0.053716111928224564,
      -0.06985257565975189,
      -0.04749487712979317,
      -0.04428960010409355,
      0.07948223501443863,
      0.04453438147902489,
      -0.06494129449129105,
      -0.07716058939695358,
      -0.08000633865594864,
      -0.03373141959309578,
      -0.04605814814567566,
      -0.020120253786444664,
      0.04672400653362274,
      0.05424155667424202,
      -0.037287309765815735,
      -0.01604175567626953,
      -0.09202525019645691,
      0.04773259535431862,
      -0.010074645280838013,
      0.03642365708947182,
      -0.016596144065260887,
      0.05289410799741745,
      -0.05236637219786644,
      0.07951746881008148,
      0.06656718254089355,
      0.056032825261354446,
      -0.03215907886624336,
      -0.025264980271458626,
      0.012686846777796745,
      -0.014380127191543579,
      -0.06897152215242386,
      -0.03935162350535393,
      -0.06250403076410294,
      0.04819292202591896,
      0.03802818804979324,
      -0.039978183805942535,
      0.03350435197353363,
      0.02099759876728058,
      -0.019639724865555763,
      -0.056340541690588,
      -0.08816350251436234,
      0.039570484310388565,
      -0.01967795565724373,
      0.057460419833660126,
      0.04960236698389053,
      0.07555820792913437,
      0.041239455342292786,
      -0.027655048295855522,
      0.04588543251156807,
      0.013405943289399147,
      0.03833479434251785,
      0.022232308983802795,
      -0.06858235597610474,
      0.06480740010738373,
      -0.0443616658449173,
      0.04944522678852081,
      0.010150882415473461,
      -0.08794426918029785,
      -0.07146910578012466,
      0.057942017912864685,
      -0.033206649124622345,
      -0.016611021012067795,
      0.0030402804259210825,
      0.06535053253173828,
      -0.0592869333922863,
      0.05983360856771469,
      0.04899130389094353,
      -0.03523021191358566,
      0.057333361357450485,
      -0.06686559319496155,
      -0.06085282936692238,
      0.04501039534807205,
      0.05977214500308037,
      -0.0606340616941452,
      -0.03613081946969032,
      0.07371397316455841,
      -0.04297281801700592,
      -0.001934005762450397,
      -0.06434862315654755,
      -0.059845637530088425,
      -0.04416072368621826,
      -0.04030196741223335,
      0.005596194416284561,
      0.01627267338335514,
      0.061220310628414154,
      -0.03627774864435196,
      0.008997844532132149,
      -0.08186235278844833,
      0.03919101506471634,
      -0.09830673038959503,
      0.09505148231983185,
      -0.024526745080947876,
      -0.06651351600885391,
      0.031234368681907654,
      -0.01019526831805706,
      0.029264329001307487,
      0.026605552062392235,
      -0.028166335076093674,
      -0.05832285434007645,
      -0.007389279082417488,
      0.006704794242978096,
      0.06994040310382843,
      0.0975806936621666,
      0.08914270997047424,
      -0.04977560415863991,
      0.029477471485733986,
      -0.011412943713366985,
      -0.04733733460307121,
      0.10579326003789902,
      0.049558646976947784,
      0.057074904441833496,
      0.013389787636697292,
      -0.07047507166862488,
      -0.028217874467372894,
      -0.09257128089666367,
      -0.05311568081378937,
      -0.05597178265452385,
      0.02533280849456787,
      0.043388739228248596,
      -0.04952662065625191,
      -0.049404650926589966,
      -0.04596984013915062,
      0.035017553716897964,
      0.05068672075867653,
      -0.03415137901902199,
      -0.05078454688191414,
      0.014348918572068214,
      0.016263028606772423,
      0.0971696674823761,
      0.06097462773323059,
      0.052310649305582047,
      0.029764516279101372,
      0.029763396829366684,
      0.0317801795899868,
      -0.020369578152894974,
      -0.03409207984805107,
      -0.013887465931475163,
      -0.08986370265483856,
      -0.0032483821269124746,
      -0.03583791106939316,
      0.07204998284578323,
      0.012170556001365185,
      0.019075220450758934,
      0.05637155845761299,
      -0.05032928287982941,
      0.07067147642374039,
      0.00652118306607008,
      -0.08861351758241653,
      0.02737281657755375,
      0.0638251081109047,
      -0.09252922981977463,
      0.03159213066101074,
      0.015376053750514984,
      -0.004144873470067978,
      0.033777788281440735,
      0.025233831256628036,
      0.05109819769859314,
      0.07657089084386826,
      -0.043252743780612946,
      5598152056336403e-19,
      0.022953376173973083,
      0.06608466058969498,
      0.004557750653475523,
      0.03247829154133797,
      -0.05542775243520737,
      -0.051355645060539246,
      -0.04581929370760918,
      -0.05587522312998772,
      -0.05036228522658348,
      -0.049189019948244095,
      0.01639207825064659,
      0.06120483577251434,
      -0.07473520189523697,
      -0.020475393161177635,
      0.05907881632447243,
      -0.014215804636478424,
      0.03755759820342064,
      -0.054553043097257614,
      -0.055937036871910095,
      0.04078731685876846,
      -0.06412824988365173,
      -0.010598498396575451,
      -0.007911470718681812,
      0.03408193960785866,
      -0.03099941834807396,
      -0.04832632839679718,
      24270180438179523e-20,
      0.03279756382107735,
      -0.07514055073261261,
      0.02534973807632923,
      -0.03741070628166199,
      -0.07153020054101944,
      0.032020147889852524,
      -0.014549901708960533,
      0.0033666065428406,
      0.03904538229107857,
      0.036465954035520554,
      -0.11975707113742828,
      0.02752089686691761,
      0.035066597163677216,
      -0.013731665909290314,
      0.05192011222243309,
      -0.11477085202932358,
      -0.026153061538934708,
      0.029099609702825546,
      0.03735184669494629,
      -0.06158509850502014,
      -0.03059353679418564,
      0.018266700208187103,
      0.06937401741743088,
      0.07253853976726532,
      0.06767840683460236,
      -0.016385149210691452,
      -0.019856972619891167,
      0.010253941640257835,
      -0.060452524572610855,
      0.060038767755031586,
      0.051037125289440155,
      -0.03645891696214676,
      -0.039412785321474075,
      -0.0357024259865284,
      -0.03635263070464134,
      -0.020702751353383064,
      0.040533646941185,
      -0.08920510113239288,
      -0.03376680240035057,
      0.03742850571870804,
      0.07104010134935379,
      0.05787934735417366,
      0.05867001786828041
    ]
  },
  {
    id: "fix",
    behavior: "CODE",
    description: "Repair bugs or apply small corrective changes. (hata d\xFCzelt, fix)",
    embedding: [
      0.03862148895859718,
      -0.04090970382094383,
      -0.019912032410502434,
      -0.10156676173210144,
      0.08869192004203796,
      -0.011127582751214504,
      -0.01724850945174694,
      -0.010226300917565823,
      0.00268883747048676,
      0.017231255769729614,
      0.02382083237171173,
      0.04067324474453926,
      0.06192021071910858,
      -0.02019229531288147,
      -0.033267904072999954,
      0.04898102208971977,
      0.06752315908670425,
      -0.03981402516365051,
      -0.032616037875413895,
      5705356597900391e-19,
      0.010483668185770512,
      -0.02816770039498806,
      -0.05923010781407356,
      0.02190403640270233,
      0.0391930490732193,
      0.03282357007265091,
      -0.051184896379709244,
      0.011640040203928947,
      0.06501997262239456,
      -0.07455363869667053,
      -0.05907699093222618,
      -0.054435860365629196,
      0.040440935641527176,
      -0.013604365289211273,
      0.03894612565636635,
      9439016139367595e-20,
      -0.05324360728263855,
      -0.01536176260560751,
      0.03695511817932129,
      -0.057355280965566635,
      -0.04544312506914139,
      0.042383577674627304,
      0.008929820731282234,
      0.06243523210287094,
      0.08358719199895859,
      0.034719135612249374,
      -0.09181845188140869,
      0.01763669215142727,
      -0.026863137260079384,
      -0.02046290785074234,
      -0.011634214781224728,
      0.04879895597696304,
      -0.02085147425532341,
      0.024267949163913727,
      0.019666720181703568,
      -0.030446553602814674,
      -0.0812247022986412,
      -0.08220693469047546,
      -0.07890137284994125,
      0.033892933279275894,
      0.0591658279299736,
      -0.017077049240469933,
      0.016436558216810226,
      0.024257386103272438,
      0.10938936471939087,
      0.08106028288602829,
      0.09324543178081512,
      0.06719037145376205,
      -0.04260164126753807,
      -0.01442941464483738,
      -0.07084637135267258,
      0.039126016199588776,
      0.004397162701934576,
      0.016659557819366455,
      -0.013437693938612938,
      0.011178172193467617,
      0.003433248959481716,
      -0.08173052221536636,
      0.04242090880870819,
      -0.041828058660030365,
      -0.05307910591363907,
      -0.03699473291635513,
      -0.07528547197580338,
      0.027429476380348206,
      -0.051298197358846664,
      0.033971551805734634,
      0.07503250986337662,
      -0.06480385363101959,
      0.04559831693768501,
      -0.05854509025812149,
      0.051757652312517166,
      0.04309343174099922,
      -0.0978541448712349,
      -0.022801598533988,
      -0.14340807497501373,
      -0.06529797613620758,
      -0.042388916015625,
      0.051562078297138214,
      0.05896717682480812,
      -0.054267995059490204,
      0.07491275668144226,
      -0.008448111824691296,
      0.059861406683921814,
      -0.07909810543060303,
      -0.02627517469227314,
      0.050362974405288696,
      -0.01172176469117403,
      -0.05613422393798828,
      0.031422875821590424,
      -0.050052326172590256,
      -0.054544847458601,
      0.03665766492486,
      0.04996323585510254,
      0.045704931020736694,
      -0.04117465019226074,
      -0.04788921773433685,
      -0.03305715695023537,
      -0.03427430987358093,
      0.07372883707284927,
      -0.08493927866220474,
      0.07871420681476593,
      0.017803454771637917,
      -0.06936377286911011,
      -0.054657720029354095,
      -0.07048120349645615,
      -0.04874064773321152,
      0.03908161818981171,
      0.020332466810941696,
      -0.0020044581033289433,
      -0.029543377459049225,
      0.02887457236647606,
      0.0241587795317173,
      0.05221637338399887,
      0.060824815183877945,
      0.06174187734723091,
      0.09416908770799637,
      0.010254783555865288,
      0.0034807135816663504,
      -0.037834689021110535,
      -0.024341337382793427,
      -0.03297163173556328,
      0.05586554855108261,
      0.01741546206176281,
      0.031098531559109688,
      0.03681020811200142,
      0.05881759896874428,
      0.06818047165870667,
      0.018309541046619415,
      0.08564936369657516,
      -0.08969852328300476,
      0.04700416326522827,
      0.01672562025487423,
      0.11166228353977203,
      0.00426161102950573,
      0.06982427835464478,
      -0.05786247178912163,
      -0.054318226873874664,
      -0.04142233729362488,
      0.0843147560954094,
      0.0397321917116642,
      -0.06348121166229248,
      -0.05271434038877487,
      -0.07787657529115677,
      -0.019451603293418884,
      -0.06486374884843826,
      -0.04689406976103783,
      0.02219730243086815,
      0.07584332674741745,
      -0.03694543242454529,
      0.007599998265504837,
      -0.04180438816547394,
      0.06580357253551483,
      -0.023919492959976196,
      0.014773006550967693,
      -0.03890898451209068,
      0.08497308939695358,
      -0.04551510885357857,
      0.05649798735976219,
      0.07375015318393707,
      0.050277017056941986,
      0.0011538895778357983,
      -0.032243482768535614,
      -0.03693215921521187,
      -0.0672350525856018,
      -0.0643715038895607,
      -0.029792236164212227,
      -0.04758530482649803,
      0.015397433191537857,
      0.010556320659816265,
      -0.021361680701375008,
      -0.02593684382736683,
      0.026942189782857895,
      -0.050323229283094406,
      -0.07157297432422638,
      -0.06114578992128372,
      0.020721781998872757,
      -0.05906688794493675,
      0.05059295520186424,
      0.05522168055176735,
      0.02391858957707882,
      0.050788331776857376,
      -0.023862428963184357,
      0.055943455547094345,
      0.0268018189817667,
      0.040563471615314484,
      0.014698679558932781,
      -0.021339263767004013,
      0.043273504823446274,
      -0.07202750444412231,
      0.04182029888033867,
      0.053942956030368805,
      -0.05766616389155388,
      -0.04799715429544449,
      0.06810547411441803,
      -0.08300821483135223,
      -904696760699153e-18,
      7961828378029168e-19,
      0.061563484370708466,
      -0.07666837424039841,
      0.033051662147045135,
      0.05484148487448692,
      -0.012726503424346447,
      0.08235324174165726,
      -0.06534292548894882,
      -0.05660577118396759,
      0.04951233044266701,
      0.06781554222106934,
      -0.0791132003068924,
      -0.05591321364045143,
      0.044176626950502396,
      -0.037090349942445755,
      -0.01941276155412197,
      -0.05813521519303322,
      -0.07345709204673767,
      -0.029197728261351585,
      -0.05674612522125244,
      -0.021661560982465744,
      0.021305987611413002,
      0.06018908694386482,
      -0.01898716762661934,
      -0.0010020098416134715,
      -0.05977019667625427,
      0.042902622371912,
      -0.10535730421543121,
      0.07742640376091003,
      -0.019027594476938248,
      -0.048566073179244995,
      0.030718276277184486,
      -0.028162425383925438,
      0.002239943016320467,
      0.053416620939970016,
      -0.057542555034160614,
      -0.08085492998361588,
      0.004215620923787355,
      -0.009592829272150993,
      0.05518196523189545,
      0.08999815583229065,
      0.04915842413902283,
      -0.03967554494738579,
      0.07095664739608765,
      -7826179498806596e-19,
      -0.05103299021720886,
      0.07331950217485428,
      0.05279451608657837,
      0.049858082085847855,
      -0.0030290575232356787,
      -0.05266862362623215,
      0.013030139729380608,
      -0.04749329015612602,
      -0.0214132871478796,
      -0.0728423073887825,
      0.015200820751488209,
      0.04185689240694046,
      -0.049166783690452576,
      -0.06797350943088531,
      -0.050199106335639954,
      0.03215407207608223,
      0.04150927811861038,
      -0.015032278373837471,
      -0.036290403455495834,
      0.032792914658784866,
      -0.007148968521505594,
      0.05299113690853119,
      0.0694044902920723,
      0.06357308477163315,
      -0.020628154277801514,
      0.02865074761211872,
      0.0575614795088768,
      -0.0016072489088401198,
      -0.0019160370575264096,
      0.007587147876620293,
      -0.0759689211845398,
      14669878873974085e-20,
      -0.04607154801487923,
      0.02941073104739189,
      0.040617506951093674,
      -5519713158719242e-19,
      0.06280071288347244,
      -0.03728021681308746,
      0.06589974462985992,
      -0.033867720514535904,
      -0.09151186794042587,
      0.07377587258815765,
      0.05054710805416107,
      -0.07007772475481033,
      0.046786800026893616,
      0.024905767291784286,
      0.007532419171184301,
      0.024075429886579514,
      0.02803250588476658,
      0.04440997913479805,
      0.05474172905087471,
      -0.046477850526571274,
      -0.04468749091029167,
      0.015376044437289238,
      0.03312850743532181,
      -0.03561728820204735,
      0.07598868012428284,
      -0.007354069501161575,
      -0.05511951074004173,
      -0.03892598673701286,
      -0.061705511063337326,
      -0.017599744722247124,
      -0.06555506587028503,
      0.03775591775774956,
      0.06344955414533615,
      -0.07991240918636322,
      -0.03103015199303627,
      0.030886031687259674,
      -0.006206653546541929,
      0.06839761137962341,
      -0.04410022124648094,
      -0.08472878485918045,
      0.0338800810277462,
      -0.0492398776113987,
      0.02108696661889553,
      -0.02588125504553318,
      0.04093194380402565,
      -0.0402580089867115,
      -0.05169328674674034,
      0.0016281601274386048,
      0.004914912395179272,
      -0.041922133415937424,
      0.05133293941617012,
      -0.07402144372463226,
      -0.10479170829057693,
      0.06576768308877945,
      -0.03705671802163124,
      -0.014274545013904572,
      0.06114671379327774,
      0.049855832010507584,
      -0.11706473678350449,
      0.031196484342217445,
      0.06298431754112244,
      -0.039093490689992905,
      0.060105569660663605,
      -0.10114756971597672,
      -0.04166257753968239,
      0.0445387102663517,
      0.04914835840463638,
      -0.04547717794775963,
      -0.037997011095285416,
      0.02751965820789337,
      0.11617617309093475,
      0.05221495404839516,
      0.0736934170126915,
      -0.03570901229977608,
      -0.009020726196467876,
      0.04877139627933502,
      -0.047114934772253036,
      0.0706440806388855,
      0.05993390083312988,
      0.011484501883387566,
      -0.026273256167769432,
      -0.023962482810020447,
      -0.05611810460686684,
      -0.028621571138501167,
      0.019421109929680824,
      -0.06926815956830978,
      -0.014756032265722752,
      0.042746033519506454,
      0.04930448904633522,
      0.0588839091360569,
      0.06484384834766388
    ]
  },
  {
    id: "test",
    behavior: "CODE",
    description: "Write or update tests. (test yaz)",
    embedding: [
      0.04515894502401352,
      0.005547217093408108,
      -0.048258863389492035,
      -0.07628904283046722,
      0.03989860787987709,
      -0.024904904887080193,
      -7816689321771264e-20,
      -0.0035748074296861887,
      0.00990376528352499,
      0.014271107502281666,
      0.06082659587264061,
      0.038725826889276505,
      0.07011634111404419,
      -0.032504547387361526,
      -0.05273185670375824,
      0.05599236488342285,
      0.06361835449934006,
      -0.039703886955976486,
      -0.03760861977934837,
      -0.018362965434789658,
      0.007362863048911095,
      -0.025159241631627083,
      -0.033242117613554,
      0.07194656133651733,
      0.061407629400491714,
      0.07737961411476135,
      -0.013838564045727253,
      -0.011696009896695614,
      0.08175243437290192,
      -0.04284367710351944,
      -0.031102750450372696,
      -0.037796758115291595,
      0.06269273161888123,
      -0.02004181407392025,
      0.07971513271331787,
      0.010899637825787067,
      -0.04791072756052017,
      -0.04569233953952789,
      0.04985519126057625,
      -0.044839046895504,
      -0.04682677239179611,
      0.0060903411358594894,
      0.011781750246882439,
      0.045969054102897644,
      0.041846536099910736,
      0.032195284962654114,
      -0.04144539311528206,
      0.05519287660717964,
      -0.05577611178159714,
      -0.044271647930145264,
      -0.036272525787353516,
      0.06208879128098488,
      0.014084761030972004,
      0.03953918069601059,
      0.018543394282460213,
      -0.08409777283668518,
      -0.0615704245865345,
      -0.07587993144989014,
      -0.03966323658823967,
      0.044097043573856354,
      0.0745491310954094,
      -0.021917905658483505,
      0.029756009578704834,
      0.03819935768842697,
      0.09993311762809753,
      0.049890030175447464,
      0.02858595736324787,
      0.02089638262987137,
      -0.038837410509586334,
      0.010871170088648796,
      -0.07252182066440582,
      0.05134015530347824,
      -0.0028986602555960417,
      -0.017410116270184517,
      -0.012312517501413822,
      0.05027999356389046,
      0.043704450130462646,
      -0.07571861892938614,
      0.049204885959625244,
      -0.03937704488635063,
      -0.08579032123088837,
      -0.028765615075826645,
      -0.04303980991244316,
      0.007424862589687109,
      -0.05660074204206467,
      0.0632723942399025,
      0.05112982168793678,
      -0.0487930066883564,
      0.054397501051425934,
      -0.04238753020763397,
      0.04298768565058708,
      0.06371188908815384,
      -0.07552193105220795,
      -0.04582813382148743,
      -0.12220858037471771,
      -0.05825803428888321,
      -0.057485975325107574,
      0.056890495121479034,
      0.03344586119055748,
      -0.03648001328110695,
      0.03741029277443886,
      -0.027024611830711365,
      0.02568604052066803,
      -0.1289900839328766,
      -0.013423174619674683,
      0.060389451682567596,
      0.011275029741227627,
      -0.054513175040483475,
      0.035811010748147964,
      -0.0340188592672348,
      -0.027915047481656075,
      0.034606996923685074,
      0.06029987335205078,
      0.023495523259043694,
      -0.040701974183321,
      0.001143825356848538,
      -0.07235859334468842,
      -0.05069485679268837,
      0.08778224885463715,
      -0.09117545187473297,
      0.03425047546625137,
      -0.02465941570699215,
      -0.06855008006095886,
      -0.06808793544769287,
      -0.0581735298037529,
      -0.0358588844537735,
      0.01590617559850216,
      0.037401460111141205,
      0.026468470692634583,
      -0.013926290906965733,
      0.02726038359105587,
      0.029223820194602013,
      0.009211956523358822,
      0.07808546721935272,
      0.05313888192176819,
      0.09836509078741074,
      -0.019896844401955605,
      0.03884286433458328,
      0.0027400758117437363,
      -0.03396649286150932,
      -0.029219821095466614,
      0.0535772331058979,
      -0.01159303355962038,
      0.07299735397100449,
      0.02568214386701584,
      0.056985680013895035,
      0.04918605461716652,
      0.018436504527926445,
      0.07993591576814651,
      -0.10842497646808624,
      0.05114015191793442,
      -0.007732377387583256,
      0.08308243006467819,
      0.019790781661868095,
      0.06170939654111862,
      -0.039412569254636765,
      -0.07820945233106613,
      -0.04062658175826073,
      0.09073556214570999,
      0.04518495872616768,
      -0.05015328526496887,
      -0.07491589337587357,
      -0.044487033039331436,
      -0.050262849777936935,
      -0.048686422407627106,
      -0.014724367298185825,
      0.030449310317635536,
      0.07684618979692459,
      -0.07932048290967941,
      -0.05958886817097664,
      -0.07496015727519989,
      0.060231152921915054,
      -0.018863124772906303,
      0.05345449969172478,
      0.004737420938909054,
      0.06326872110366821,
      -0.06895579397678375,
      0.053680408746004105,
      0.06044669449329376,
      0.047984156757593155,
      -0.009139204397797585,
      -0.023464836180210114,
      -0.03493030369281769,
      -0.03712982311844826,
      -0.04832150787115097,
      -0.05304891616106033,
      -0.032876066863536835,
      0.01054905541241169,
      0.05027375370264053,
      0.01216804701834917,
      -0.003302288008853793,
      -5902192206121981e-19,
      -0.06937096267938614,
      -0.04301343113183975,
      -0.08793874084949493,
      0.006431050598621368,
      -0.05535610392689705,
      0.03903993219137192,
      0.06081235781311989,
      0.04556263983249664,
      0.011207200586795807,
      -0.035353343933820724,
      0.10381763428449631,
      0.08216285705566406,
      0.022284118458628654,
      0.022084198892116547,
      -0.05670686066150665,
      0.03590984642505646,
      -0.031145736575126648,
      0.0012321504764258862,
      0.027072671800851822,
      -0.08633434027433395,
      -0.05486103147268295,
      0.06964615732431412,
      -0.04173973947763443,
      -0.0053014084696769714,
      0.015217123553156853,
      0.06836409121751785,
      -0.048453982919454575,
      0.02158581279218197,
      0.07536260038614273,
      -0.0028620362281799316,
      0.02714606188237667,
      -0.055136047303676605,
      -0.06585308909416199,
      0.028044482693076134,
      0.07756731659173965,
      -0.07978004962205887,
      -0.052821218967437744,
      0.051649805158376694,
      -0.009126654826104641,
      -0.045481763780117035,
      -0.09001758694648743,
      -0.06432906538248062,
      -0.04016725718975067,
      -0.032282423228025436,
      0.007702578324824572,
      0.048880234360694885,
      0.07552887499332428,
      -0.03029150888323784,
      -0.029467973858118057,
      -0.02586052007973194,
      0.0249672532081604,
      -0.03435879573225975,
      0.05795043706893921,
      -0.040101006627082825,
      -0.008913508616387844,
      0.023880261927843094,
      -0.016038523986935616,
      0.039768364280462265,
      0.06989793479442596,
      -0.04274074733257294,
      -0.06052325665950775,
      -0.024685382843017578,
      -0.013537782244384289,
      0.0700402483344078,
      0.09047894179821014,
      0.07573643326759338,
      -0.053518783301115036,
      0.020327065140008926,
      0.02105787955224514,
      -0.029968321323394775,
      0.10482044517993927,
      0.06249381601810455,
      0.028984608128666878,
      0.058667369186878204,
      -0.08642052859067917,
      -0.030204055830836296,
      -0.09858425706624985,
      -0.018307022750377655,
      -0.03036356344819069,
      0.009028029628098011,
      0.061477843672037125,
      -0.05468050017952919,
      -0.013330677524209023,
      -0.06692612171173096,
      0.06938125193119049,
      0.09276749938726425,
      -0.007558023557066917,
      -0.037771109491586685,
      0.026172418147325516,
      -0.0019261467969045043,
      0.03262978047132492,
      0.07612040638923645,
      0.07076740264892578,
      0.028203383088111877,
      -0.018579760566353798,
      0.05324174091219902,
      -0.005109735764563084,
      -0.023330047726631165,
      -0.043685197830200195,
      -0.10509361326694489,
      0.0017853686586022377,
      -0.03751618415117264,
      0.03281020373106003,
      0.001320983748883009,
      -0.017267661169171333,
      0.024905312806367874,
      -0.05248222500085831,
      0.014071159064769745,
      -0.029752155765891075,
      -0.09645818173885345,
      0.027387933805584908,
      0.029945654794573784,
      -0.07022061944007874,
      0.03110211156308651,
      0.029455726966261864,
      0.008414085954427719,
      -0.008603116497397423,
      0.048071812838315964,
      0.06801767647266388,
      0.0439084954559803,
      -0.07648681849241257,
      -0.0434691458940506,
      0.02535702846944332,
      0.09159880876541138,
      -0.0018494060495868325,
      0.017642183229327202,
      -0.05246150493621826,
      -0.05269785597920418,
      -0.06336761265993118,
      -0.02854081243276596,
      -0.008077641949057579,
      -0.06843498349189758,
      0.031140075996518135,
      0.05931001901626587,
      -0.05211823806166649,
      -0.048370424658060074,
      0.052709318697452545,
      0.016830362379550934,
      0.018755020573735237,
      -0.037979695945978165,
      -0.07907670736312866,
      0.04682161659002304,
      -0.03272057697176933,
      -0.07397737354040146,
      -0.05580274760723114,
      0.03503365069627762,
      -0.045015763491392136,
      -0.05962761864066124,
      0.004653725773096085,
      -0.003091612597927451,
      -0.017124464735388756,
      0.04440171271562576,
      -0.06101696938276291,
      -0.04891088977456093,
      0.03916306421160698,
      -0.013241213746368885,
      -0.025154657661914825,
      0.06028606370091438,
      -0.0027417356614023447,
      -0.1505568027496338,
      0.03542148694396019,
      0.07601719349622726,
      -0.014947939664125443,
      0.05404016003012657,
      -0.09494001418352127,
      -0.01584613509476185,
      0.027122346684336662,
      0.04462992772459984,
      -0.06634488701820374,
      -0.026338495314121246,
      0.02867789752781391,
      0.0806279331445694,
      0.06084941700100899,
      0.09574469923973083,
      -0.03362196683883667,
      0.00307169696316123,
      0.04268261045217514,
      -0.0673270896077156,
      0.07191895693540573,
      0.03250431269407272,
      -0.034393541514873505,
      -0.021540695801377296,
      0.029308607801795006,
      -0.10877016186714172,
      -0.02062908187508583,
      0.04816257581114769,
      -0.058887943625450134,
      -0.02048857882618904,
      0.007929953746497631,
      0.06362848728895187,
      0.0878528505563736,
      0.03728809952735901
    ]
  },
  {
    id: "color",
    behavior: "SUGGEST",
    description: "Suggest visual design choices such as colors, typography, and layout options.",
    embedding: [
      0.0214072298258543,
      -0.05089627206325531,
      -0.05202369764447212,
      -0.05221734568476677,
      0.05465712398290634,
      -0.04126832261681557,
      0.004434417467564344,
      0.017404451966285706,
      0.014278749004006386,
      -0.019623616710305214,
      0.04884961619973183,
      0.01652618497610092,
      0.1251152604818344,
      -0.013310503214597702,
      -0.0096166105940938,
      0.03775767982006073,
      0.0484427846968174,
      -6250226288102567e-19,
      -0.056810926645994186,
      -0.042238783091306686,
      0.03523463383316994,
      -0.002539818873628974,
      -0.017223354429006577,
      0.03378108888864517,
      0.06422045081853867,
      0.06428366154432297,
      -0.02602739818394184,
      -0.008262786082923412,
      0.05362251028418541,
      -0.07139962166547775,
      -0.053017135709524155,
      -0.017895249649882317,
      0.037518829107284546,
      -0.043363623321056366,
      0.04813399165868759,
      0.018368354067206383,
      -0.022447951138019562,
      -0.027055198326706886,
      0.03313826769590378,
      -0.04037254676222801,
      -0.014525601640343666,
      0.0026596630923449993,
      0.08634950965642929,
      0.06179342791438103,
      0.07028172165155411,
      0.0712452232837677,
      -0.06698138266801834,
      0.003998332191258669,
      -0.05878292769193649,
      0.003911925479769707,
      -0.03699663653969765,
      0.07800018787384033,
      0.004137036390602589,
      0.01803181879222393,
      0.034679438918828964,
      -0.04531304910778999,
      -0.004008197691291571,
      -0.0610174834728241,
      -0.04554521664977074,
      -2886807487811893e-19,
      0.023728853091597557,
      -0.0378684401512146,
      -0.005416688043624163,
      0.04971567541360855,
      0.059072330594062805,
      0.036365900188684464,
      0.04263068735599518,
      0.034492377191782,
      -0.07485762238502502,
      -0.04182160645723343,
      -0.06156023591756821,
      0.06513281911611557,
      -0.016837844625115395,
      -0.03671310842037201,
      -0.016269167885184288,
      0.022233666852116585,
      0.03953279182314873,
      -0.07559698075056076,
      0.044725626707077026,
      -0.037907905876636505,
      -0.08620227873325348,
      -0.0430818609893322,
      -0.028472691774368286,
      0.09120664745569229,
      -0.07750459760427475,
      0.07502512633800507,
      0.06372971832752228,
      -0.06171154975891113,
      0.05235617235302925,
      -0.05616503208875656,
      0.022909093648195267,
      0.05007529631257057,
      -0.0978134274482727,
      -0.051792535930871964,
      -0.10061203688383102,
      -0.05532227084040642,
      -0.0648571103811264,
      0.09623898565769196,
      0.07855455577373505,
      0.006884242873638868,
      -0.008693322539329529,
      -0.0033979960717260838,
      0.058453988283872604,
      -0.12222164124250412,
      -0.045052364468574524,
      0.0020684467162936926,
      0.07170101255178452,
      -0.027667313814163208,
      0.06560179591178894,
      -0.05933477729558945,
      -0.042984433472156525,
      0.011765015311539173,
      0.043298572301864624,
      0.025321580469608307,
      0.002524035517126322,
      -0.0319288931787014,
      -0.03978807106614113,
      -0.07660383731126785,
      0.048740487545728683,
      -0.05761970579624176,
      0.050995294004678726,
      0.0015972965629771352,
      -0.056735794991254807,
      -0.07216418534517288,
      -0.04353802278637886,
      -0.032876770943403244,
      0.01220687571913004,
      0.07277273386716843,
      -0.024177715182304382,
      -0.03152763843536377,
      0.07053599506616592,
      0.1070905476808548,
      0.06107759848237038,
      0.055312082171440125,
      0.020325196906924248,
      0.11408434808254242,
      -0.029873400926589966,
      0.015727616846561432,
      -0.04137340188026428,
      0.00293930247426033,
      -0.05264734849333763,
      0.08066356927156448,
      -0.022248882800340652,
      0.028719373047351837,
      0.06749890744686127,
      0.045321397483348846,
      0.01880580000579357,
      0.006834861356765032,
      0.05475972220301628,
      0.01000436395406723,
      0.050057437270879745,
      0.01560240238904953,
      0.005293498747050762,
      -0.022588210180401802,
      0.07960247248411179,
      -0.033369895070791245,
      -0.014600545167922974,
      -0.054484039545059204,
      0.05308765545487404,
      0.06030949577689171,
      -0.05444417521357536,
      -0.03922498598694801,
      -0.05586246773600578,
      -0.04979884997010231,
      -0.056270159780979156,
      -0.09674947708845139,
      0.06281860172748566,
      0.08286307752132416,
      -0.07257481664419174,
      -0.03031362034380436,
      -0.06724375486373901,
      0.04643222317099571,
      -0.01906466670334339,
      0.0731753557920456,
      -0.006325561553239822,
      0.018759898841381073,
      -0.06199970096349716,
      -45876315562054515e-20,
      0.047859251499176025,
      0.04049745202064514,
      -0.012543972581624985,
      -0.019980425015091896,
      0.002714039059355855,
      -0.057991836220026016,
      -0.09792491793632507,
      -0.022543204948306084,
      -0.030853403732180595,
      0.0046440367586910725,
      -0.006864950992166996,
      -0.00203000963665545,
      0.023722171783447266,
      0.06408488750457764,
      -0.07515792548656464,
      -0.09601987898349762,
      -0.03927537053823471,
      0.0442122146487236,
      -0.04790857434272766,
      0.03612270951271057,
      0.061807096004486084,
      0.0766708180308342,
      -0.03373922035098076,
      -0.002740132389590144,
      0.042717188596725464,
      0.028657151386141777,
      0.015266675502061844,
      0.00815595407038927,
      -0.07402041554450989,
      0.03861982747912407,
      -0.01734388805925846,
      0.008993228897452354,
      0.02872500941157341,
      -0.09748142212629318,
      -0.09674062579870224,
      0.0658879280090332,
      -0.040928103029727936,
      0.03111695870757103,
      -0.05629345402121544,
      0.05567874014377594,
      -0.061132144182920456,
      0.021838868036866188,
      0.08201630413532257,
      -0.02497035264968872,
      0.06344690173864365,
      -0.06611718982458115,
      -0.08337144553661346,
      0.05290374159812927,
      0.05371518060564995,
      -0.09296490252017975,
      -0.030983222648501396,
      0.051338307559490204,
      -0.007543517742305994,
      -0.028208425268530846,
      -0.06289098411798477,
      -0.06997364014387131,
      -0.0612778402864933,
      -0.05333973839879036,
      -0.0066562220454216,
      0.03836308792233467,
      0.06854609400033951,
      -0.05416601151227951,
      -0.020487111061811447,
      -0.012961268424987793,
      0.013806816190481186,
      -0.09877277165651321,
      0.07854149490594864,
      0.009067821316421032,
      -0.036401424556970596,
      0.07063503563404083,
      -0.0089408652856946,
      0.011174808256328106,
      0.0229704100638628,
      -0.05246051773428917,
      -0.04152749106287956,
      -0.018635397776961327,
      -0.017069905996322632,
      0.03842581808567047,
      0.05037926137447357,
      0.05446222424507141,
      -0.04803572967648506,
      0.05185481533408165,
      0.007813278585672379,
      -0.02078203111886978,
      0.10806409269571304,
      0.02901238203048706,
      0.009569541551172733,
      0.03138585761189461,
      -0.06737682223320007,
      -0.02491055056452751,
      -0.049064867198467255,
      -0.0746951624751091,
      -0.08953189104795456,
      0.007270337548106909,
      0.014036736451089382,
      -0.06488347053527832,
      -0.02077142894268036,
      -0.08488912880420685,
      0.04467150196433067,
      0.08131439983844757,
      -0.030629875138401985,
      -0.05020102486014366,
      -0.01421486958861351,
      -0.010572042316198349,
      0.04515906795859337,
      0.08055858314037323,
      0.0357876755297184,
      -0.008323627524077892,
      -0.0026903743855655193,
      0.08597921580076218,
      0.009331800043582916,
      0.012587334960699081,
      -0.02120443619787693,
      -0.09410722553730011,
      0.026138151064515114,
      -0.022029608488082886,
      0.0750422328710556,
      0.054085537791252136,
      -0.04827530309557915,
      0.059212177991867065,
      -0.018558751791715622,
      0.10402633249759674,
      0.0011808393755927682,
      -0.04838301241397858,
      -0.011815223842859268,
      0.021188566461205482,
      -0.09590809047222137,
      0.04010448977351189,
      -0.02210712432861328,
      0.022906439378857613,
      0.027040833607316017,
      0.03958026319742203,
      0.04736731946468353,
      0.03349211439490318,
      -0.0459459163248539,
      -0.004447204060852528,
      0.06138867512345314,
      0.05049382522702217,
      -0.003967605531215668,
      0.0878744050860405,
      -0.08458074182271957,
      -0.04301062971353531,
      -0.045324165374040604,
      -0.0432630255818367,
      -0.04058760404586792,
      -0.09602148085832596,
      0.04166807979345322,
      0.03830282390117645,
      -0.04718424752354622,
      -0.027977783232927322,
      0.04639379680156708,
      0.02557864598929882,
      0.07230690121650696,
      -0.06556671112775803,
      -0.05284630507230759,
      0.002963055158033967,
      -0.036671556532382965,
      0.012057996354997158,
      -0.006047604605555534,
      0.03726659342646599,
      -0.07326891273260117,
      -0.01899450644850731,
      0.017589008435606956,
      -0.012329154647886753,
      -0.019684603437781334,
      0.02349795773625374,
      -0.005929338280111551,
      -0.0691956952214241,
      0.07469657063484192,
      -0.021116694435477257,
      0.020313626155257225,
      0.042758308351039886,
      0.1251267045736313,
      -0.08638248592615128,
      0.04194686934351921,
      0.06902673095464706,
      -0.06038742512464523,
      0.03388233482837677,
      -0.0832756832242012,
      -0.029752075672149658,
      0.08663412183523178,
      0.028046783059835434,
      -0.08035299926996231,
      0.014740042388439178,
      0.07062070071697235,
      0.08161203563213348,
      0.03194620832800865,
      0.027403052896261215,
      -0.00268031214363873,
      -0.025847937911748886,
      0.04339104890823364,
      -0.043236203491687775,
      0.07850935310125351,
      0.034293033182621,
      -0.06783834844827652,
      -0.003807317465543747,
      -0.030075453221797943,
      -0.0482502318918705,
      -0.027519147843122482,
      0.04640886187553406,
      -0.059624139219522476,
      -0.043740756809711456,
      -0.005962491966784,
      0.08137156069278717,
      0.017081143334507942,
      0.035881269723176956
    ]
  },
  {
    id: "approach",
    behavior: "SUGGEST",
    description: "Suggest implementation approaches, patterns, or architectural options.",
    embedding: [
      0.022384360432624817,
      -0.009572559036314487,
      -0.04429951682686806,
      -0.0586978979408741,
      0.061558280140161514,
      -0.06448119878768921,
      0.04506886750459671,
      0.03541473299264908,
      0.014613477513194084,
      0.010841665789484978,
      0.03850661590695381,
      0.023701174184679985,
      0.07883823662996292,
      -0.04549005627632141,
      -0.020106058567762375,
      0.042362280189991,
      0.0477730967104435,
      -0.020226318389177322,
      -0.028988920152187347,
      -0.04527587071061134,
      0.025478670373558998,
      -0.04330415278673172,
      -0.019403059035539627,
      0.019877534359693527,
      0.04675500467419624,
      0.0558227114379406,
      -0.031830210238695145,
      -0.03349147364497185,
      0.08187875151634216,
      -0.06801419705152512,
      -0.07373156398534775,
      -0.014859712682664394,
      0.07730259001255035,
      -0.05289798974990845,
      0.06205286458134651,
      0.03660336136817932,
      -0.011386517435312271,
      -0.06118858978152275,
      0.03060491569340229,
      -0.08723774552345276,
      9891610825434327e-19,
      0.028669988736510277,
      0.06274676322937012,
      0.045207567512989044,
      0.06638911366462708,
      0.05976489558815956,
      -0.06541919708251953,
      -0.026524178683757782,
      -0.07982849329710007,
      -0.020113009959459305,
      -0.05971156805753708,
      0.0394904650747776,
      0.013586855493485928,
      0.05771941319108009,
      0.015757029876112938,
      -0.041151322424411774,
      -0.029023906216025352,
      -0.07299930602312088,
      -0.03463485464453697,
      0.03337443992495537,
      0.03202991187572479,
      -0.021366871893405914,
      0.0018403009744361043,
      0.051403939723968506,
      0.06668923795223236,
      0.03396379575133324,
      0.048162560909986496,
      0.028561878949403763,
      -0.0556754507124424,
      -0.051688384264707565,
      -0.05385352298617363,
      0.07069402933120728,
      -0.02186226099729538,
      -0.02845838852226734,
      0.0069432687014341354,
      0.01270777452737093,
      0.06324204057455063,
      -0.022334104403853416,
      0.047131817787885666,
      -0.023630013689398766,
      -0.09556330740451813,
      -0.037501417100429535,
      -0.04368080571293831,
      0.06562445312738419,
      -0.04794078320264816,
      0.04535449296236038,
      0.04271009936928749,
      -0.04211891442537308,
      0.047976452857255936,
      -0.06482531130313873,
      0.02746393531560898,
      0.03810745105147362,
      -0.10683482140302658,
      -0.04101702570915222,
      -0.13317064940929413,
      -0.08594029396772385,
      -0.08240728825330734,
      0.09229808300733566,
      0.07683056592941284,
      -0.008977490477263927,
      0.016742408275604248,
      -0.02656155824661255,
      0.024138549342751503,
      -0.11200199276208878,
      -0.0689680352807045,
      -0.003021722426638007,
      0.023393338546156883,
      -0.03417683020234108,
      0.03358392417430878,
      -0.06545993685722351,
      -0.01944212056696415,
      0.03031308948993683,
      0.036186426877975464,
      0.05741702765226364,
      -0.012882520444691181,
      -0.0540928840637207,
      -0.03824278339743614,
      -0.0923314094543457,
      0.05574421212077141,
      -0.05344642698764801,
      0.07077206671237946,
      -0.0011698533780872822,
      -0.07455915957689285,
      -0.05448975786566734,
      -0.0630694255232811,
      -0.029373284429311752,
      0.05496836453676224,
      0.049285635352134705,
      -0.00798855908215046,
      -0.017932448536157608,
      0.07297801971435547,
      0.06458122283220291,
      0.07030197978019714,
      0.053869813680648804,
      0.06859414279460907,
      0.10858029872179031,
      -0.007021009922027588,
      -0.006874364335089922,
      -0.01662501133978367,
      0.004950615111738443,
      -0.04253659024834633,
      0.06130485236644745,
      0.0011146403849124908,
      0.003992899786680937,
      0.06384612619876862,
      0.08218538761138916,
      0.040809497237205505,
      2721921191550791e-19,
      0.07745455205440521,
      -0.008220048621296883,
      0.018568340688943863,
      0.048142626881599426,
      0.047715164721012115,
      -0.049332503229379654,
      0.06467917561531067,
      -0.01604745350778103,
      -0.04596305638551712,
      -0.04266820102930069,
      0.07438715547323227,
      0.07099128514528275,
      -0.08881740272045135,
      -0.01426204014569521,
      -0.04504145309329033,
      -0.007586498279124498,
      -0.038413841277360916,
      -0.0025205067358911037,
      0.08314874768257141,
      0.07212720066308975,
      -0.06979981064796448,
      -0.02054380252957344,
      -0.0659816563129425,
      0.06939235329627991,
      -0.03168803080916405,
      0.06423810124397278,
      -0.015187385492026806,
      0.01771419867873192,
      -0.05128760263323784,
      -0.004837824031710625,
      0.06569167971611023,
      0.06192906200885773,
      -0.022908050566911697,
      -0.04547702893614769,
      -0.014464677311480045,
      -0.062287189066410065,
      -0.0720977932214737,
      -0.009260670281946659,
      -0.060587529093027115,
      0.026853514835238457,
      -0.0422324538230896,
      0.0031766246538609266,
      0.04299261048436165,
      0.016339637339115143,
      -0.1007521003484726,
      -0.08967738598585129,
      -0.041644029319286346,
      0.026555035263299942,
      -0.05799248442053795,
      0.046400219202041626,
      0.06002229452133179,
      0.04763219878077507,
      0.007620844524353743,
      -0.014309567399322987,
      0.06998767703771591,
      0.011230799369513988,
      0.02291855216026306,
      0.024909649044275284,
      -0.03032337874174118,
      0.06179581210017204,
      -0.05557287856936455,
      0.023125361651182175,
      0.033600810915231705,
      -0.08613114058971405,
      -0.04503677785396576,
      0.06117580085992813,
      -0.03369489312171936,
      -0.019353315234184265,
      -0.01175607182085514,
      0.05091166868805885,
      -0.07770001888275146,
      -0.00419574836269021,
      0.06393996626138687,
      -0.036834534257650375,
      0.06099281087517738,
      -0.050513554364442825,
      -0.07809627801179886,
      0.044080909341573715,
      0.07137817144393921,
      -0.08413895219564438,
      -0.04357354715466499,
      0.07560764253139496,
      -0.030829554423689842,
      -0.04138633608818054,
      -0.048416655510663986,
      -0.08873604983091354,
      -0.04486561566591263,
      -0.06413617730140686,
      -0.006894001271575689,
      0.06380579620599747,
      0.03172236680984497,
      -0.049669064581394196,
      -0.01953495666384697,
      -0.0028590112924575806,
      0.01904667727649212,
      -0.06260252743959427,
      0.07190848886966705,
      -0.021083209663629532,
      -0.031053928658366203,
      0.03575726971030235,
      -0.011272712610661983,
      -0.003985163290053606,
      0.013362940400838852,
      -0.06884507089853287,
      -0.043457258492708206,
      -0.014533895999193192,
      -0.01385208684951067,
      0.053747281432151794,
      0.09230788797140121,
      0.09332504868507385,
      -0.021097781136631966,
      0.025320634245872498,
      0.021583570167422295,
      -0.03576447069644928,
      0.067878358066082,
      0.01995796523988247,
      0.06872471421957016,
      -0.01334311068058014,
      -0.07136964797973633,
      -0.022627118974924088,
      -0.0803941935300827,
      -0.03670470789074898,
      -0.05508435517549515,
      0.019400568678975105,
      0.04358305782079697,
      -0.03835030645132065,
      -0.004641679581254721,
      -0.11164471507072449,
      0.04402649775147438,
      0.08136582374572754,
      -0.0637422725558281,
      -0.03873349353671074,
      0.02236366830766201,
      0.010978308506309986,
      0.05809364467859268,
      0.09858928620815277,
      0.01417250744998455,
      -0.013849878683686256,
      -0.004137471783906221,
      0.061478063464164734,
      -0.015193624421954155,
      0.012214834801852703,
      0.019473960623145103,
      -0.06334354728460312,
      0.021718107163906097,
      -0.03753482177853584,
      0.058590058237314224,
      0.0406474769115448,
      -0.030405081808567047,
      0.05009164288640022,
      -0.07767675817012787,
      0.10525675117969513,
      -0.013153673149645329,
      -0.04534231498837471,
      0.011889838613569736,
      0.021851016208529472,
      -0.10653688758611679,
      0.03686244413256645,
      -0.009023166261613369,
      0.0471947081387043,
      0.030979279428720474,
      0.050448376685380936,
      0.017563460394740105,
      0.014910745434463024,
      -0.06808097660541534,
      -0.0015655397437512875,
      0.05039459466934204,
      0.06883761286735535,
      -0.012705978006124496,
      0.03192168101668358,
      -0.06571430712938309,
      -0.01639648526906967,
      -0.05587610974907875,
      -0.06012355536222458,
      9367466554977e-16,
      -0.044747717678546906,
      0.06837062537670135,
      0.03813062608242035,
      -0.06847774982452393,
      0.001868064166046679,
      0.039373014122247696,
      -0.016273990273475647,
      0.06014931946992874,
      -0.08485829085111618,
      -0.056428711861371994,
      -0.007486185524612665,
      -0.07934115082025528,
      -0.009988448582589626,
      -0.042604800313711166,
      0.03284922242164612,
      -0.032065920531749725,
      -0.08372975885868073,
      0.04157343506813049,
      0.002588582457974553,
      -0.01624075509607792,
      0.0610290989279747,
      -0.03730369731783867,
      -0.06575361639261246,
      0.04247090592980385,
      -0.021677037701010704,
      0.006823602132499218,
      0.009430848993360996,
      0.10170035064220428,
      -0.09858249127864838,
      0.026191778481006622,
      0.05049273371696472,
      -0.04445352032780647,
      0.054693058133125305,
      -0.12324726581573486,
      -0.03638286143541336,
      0.0964462012052536,
      0.05426439270377159,
      -0.051342450082302094,
      -0.024241749197244644,
      0.03718641400337219,
      0.064852274954319,
      0.033800456672906876,
      0.060684964060783386,
      0.0022301662247627974,
      -0.01768087036907673,
      0.016868818551301956,
      -0.03161097690463066,
      0.05553046986460686,
      0.05144000053405762,
      -0.06558221578598022,
      0.009687653742730618,
      -0.007963098585605621,
      -0.027648255228996277,
      -0.047134868800640106,
      0.049923837184906006,
      -0.06390184909105301,
      -0.045275650918483734,
      -0.0025530699640512466,
      0.0778094083070755,
      0.0785183534026146,
      0.04152119532227516
    ]
  },
  {
    id: "technology",
    behavior: "SUGGEST",
    description: "Suggest libraries, frameworks, tools, or technology choices.",
    embedding: [
      0.05355023592710495,
      -0.008945578709244728,
      -0.04866243526339531,
      -0.07668595761060715,
      0.03827842324972153,
      -0.059251267462968826,
      0.03130888193845749,
      0.04450303316116333,
      0.01592707820236683,
      -0.01686483435332775,
      0.03167973831295967,
      0.010550977662205696,
      0.0963212177157402,
      -0.0325174406170845,
      -0.016801072284579277,
      0.04937933757901192,
      0.028572868555784225,
      9751098114065826e-19,
      -0.04571714997291565,
      -0.03246398642659187,
      0.03912980109453201,
      -0.013365414924919605,
      -0.04208904132246971,
      0.039914630353450775,
      0.043537091463804245,
      0.056487344205379486,
      -0.019851455464959145,
      -0.0028037659358233213,
      0.04667108505964279,
      -0.08609503507614136,
      -0.03316716477274895,
      -0.026233306154608727,
      0.04995295777916908,
      -0.07100087404251099,
      0.060237810015678406,
      0.028613081201910973,
      -0.00875469297170639,
      -0.039451029151678085,
      0.03443291038274765,
      -0.044335924088954926,
      -0.004981609992682934,
      0.012411845847964287,
      0.05369359254837036,
      0.06378582864999771,
      0.04576157405972481,
      0.048478707671165466,
      -0.03737063333392143,
      0.014749192632734776,
      -0.09046605974435806,
      -0.0320088267326355,
      -0.03391621634364128,
      0.06090301647782326,
      0.02349167875945568,
      0.059004656970500946,
      0.044054094702005386,
      -0.026677094399929047,
      -0.03182100132107735,
      -0.07125086337327957,
      -0.0499340258538723,
      -0.014983350411057472,
      0.039533089846372604,
      -0.040865711867809296,
      0.020181935280561447,
      0.02313879318535328,
      0.05861435830593109,
      0.023730138316750526,
      0.06481673568487167,
      -0.007741069886833429,
      -0.08427730202674866,
      -0.02592075802385807,
      -0.05478696897625923,
      0.06173298880457878,
      -0.02783290110528469,
      -0.018662111833691597,
      0.024882372468709946,
      0.05406246706843376,
      0.021311962977051735,
      -0.03869011253118515,
      0.0418449304997921,
      -0.04077308624982834,
      -0.1368943452835083,
      -0.07087895274162292,
      -0.03548475727438927,
      0.09130081534385681,
      -0.06030501052737236,
      0.046020522713661194,
      0.0297948457300663,
      -0.043545566499233246,
      0.07551102340221405,
      -0.057198360562324524,
      0.024912197142839432,
      0.042882226407527924,
      -0.08835067600011826,
      -0.026866799220442772,
      -0.0846979022026062,
      -0.05761294066905975,
      -0.03715609386563301,
      0.0986681804060936,
      0.08829975128173828,
      0.03925245255231857,
      0.008668054826557636,
      -0.0058145527727901936,
      0.04642148315906525,
      -0.10121533274650574,
      -0.08948953449726105,
      0.02950463630259037,
      0.03058723732829094,
      -0.047526098787784576,
      0.07796408236026764,
      -0.05678447335958481,
      -0.0588793084025383,
      0.006493621971458197,
      0.06727524101734161,
      0.023497428745031357,
      -0.011999737471342087,
      -0.03778702765703201,
      -0.037771549075841904,
      -0.08123770356178284,
      0.07432820647954941,
      -0.06031472608447075,
      0.06927145272493362,
      0.012617052532732487,
      -0.04688277095556259,
      -0.04484006017446518,
      -0.06542791426181793,
      -0.04795888066291809,
      0.03134726732969284,
      0.04144241288304329,
      1434299338143319e-19,
      -0.022475508973002434,
      0.048541948199272156,
      0.09609174728393555,
      0.05168375372886658,
      0.03084089420735836,
      0.08133982121944427,
      0.12039052695035934,
      -0.034308817237615585,
      0.037189871072769165,
      -0.013496878556907177,
      -0.04084532707929611,
      -0.057152166962623596,
      0.10085044801235199,
      -0.014152733609080315,
      0.0155693544074893,
      0.058424003422260284,
      0.06426429748535156,
      0.031212015077471733,
      0.006821237504482269,
      0.03967206925153732,
      -0.029317786917090416,
      0.030435875058174133,
      0.03476182371377945,
      0.004609283991158009,
      0.0052717579528689384,
      0.06526417285203934,
      -0.024336714297533035,
      -938137891353108e-19,
      -0.05721815675497055,
      0.0889783725142479,
      0.06047045439481735,
      -0.06482672691345215,
      -0.05592593178153038,
      -0.08391458541154861,
      -0.017787590622901917,
      -0.07261135429143906,
      -0.032205790281295776,
      0.03732219710946083,
      0.06131581589579582,
      -0.09020198881626129,
      -0.010904932394623756,
      -0.035892587155103683,
      0.04433003440499306,
      -0.03868823125958443,
      0.049626339226961136,
      0.0017164432210847735,
      0.02647721953690052,
      -0.058557577431201935,
      -0.003686631331220269,
      0.06400419026613235,
      0.05732681602239609,
      -0.0054189725778996944,
      -0.01290847361087799,
      -0.008993556722998619,
      -0.06390659511089325,
      -0.09672559052705765,
      -0.04601798579096794,
      -0.03567444533109665,
      0.04784952104091644,
      -0.053574204444885254,
      -0.0073798117227852345,
      0.0018918232526630163,
      -0.004491573665291071,
      -0.09074041992425919,
      -0.0965694859623909,
      -0.06904519349336624,
      0.03588312119245529,
      -0.03271489962935448,
      0.04108516871929169,
      0.05587105453014374,
      0.04622485488653183,
      -0.024037091061472893,
      -0.014085544273257256,
      0.04439963772892952,
      0.030908064916729927,
      0.026357077062129974,
      0.006898340303450823,
      -0.07057993859052658,
      0.06342408061027527,
      -0.025539126247167587,
      0.04323400557041168,
      0.031197385862469673,
      -0.024986281991004944,
      -0.058156710118055344,
      0.07552170008420944,
      -0.04425249993801117,
      -0.011819529347121716,
      -0.029111923649907112,
      0.03417828306555748,
      -0.045814234763383865,
      0.01442231610417366,
      0.04439428821206093,
      -0.02263038232922554,
      0.07542674988508224,
      -0.050375305116176605,
      -0.08257880806922913,
      0.049715306609869,
      0.05369799956679344,
      -0.11178801208734512,
      -0.06285873055458069,
      0.09067406505346298,
      0.0015435388777405024,
      -0.04670609161257744,
      -0.03841076046228409,
      -0.09868354350328445,
      -0.05151369795203209,
      -0.044646576046943665,
      0.004203874617815018,
      0.046193111687898636,
      0.0523337721824646,
      -0.074965700507164,
      -0.05597204342484474,
      1689822820480913e-19,
      0.04877108708024025,
      -0.09131257981061935,
      0.08754300326108932,
      -0.029708029702305794,
      -0.033118173480033875,
      0.0036757972557097673,
      -0.039429921656847,
      -0.013527064584195614,
      0.06061065196990967,
      -0.049951180815696716,
      -0.044230785220861435,
      0.0011869813315570354,
      -0.004337396007031202,
      0.029698584228754044,
      0.07685486227273941,
      0.062247589230537415,
      -0.023513995110988617,
      0.007602530065923929,
      0.025525836274027824,
      -0.04006143659353256,
      0.06323948502540588,
      0.04470730945467949,
      0.03907077759504318,
      0.03293972834944725,
      -0.034392405301332474,
      -0.031857043504714966,
      -0.053055837750434875,
      -0.061080578714609146,
      -0.0722542256116867,
      -0.044385943561792374,
      0.06897255033254623,
      -0.06450265645980835,
      -0.028873559087514877,
      -0.07032781094312668,
      0.048095762729644775,
      0.07803142070770264,
      -0.03951331228017807,
      -0.03560487926006317,
      -0.004448730032891035,
      0.015371906571090221,
      0.053649164736270905,
      0.06941823661327362,
      0.008847623132169247,
      0.019862040877342224,
      0.0012557506561279297,
      0.07540073990821838,
      0.008874200284481049,
      -0.036840662360191345,
      -0.018638169392943382,
      -0.08131090551614761,
      0.01998468115925789,
      -0.023636125028133392,
      0.07598619163036346,
      0.041919950395822525,
      -0.04055079445242882,
      0.06761838495731354,
      -0.02770482748746872,
      0.08391565829515457,
      -0.02450430393218994,
      -0.06951650977134705,
      0.030761485919356346,
      0.026914579793810844,
      -0.0859401747584343,
      0.05346139520406723,
      -0.02664000540971756,
      0.021757880225777626,
      0.012420429848134518,
      0.045853037387132645,
      0.03950202465057373,
      0.04568915814161301,
      -0.07677208632230759,
      -0.040984608232975006,
      0.058564942330121994,
      0.04214337468147278,
      -0.011569807305932045,
      0.04429340362548828,
      -0.05550908297300339,
      -0.02191362902522087,
      -0.10871818661689758,
      -0.0680595338344574,
      0.0038109913002699614,
      -0.07663391530513763,
      0.0238124318420887,
      0.060924071818590164,
      -0.06822877377271652,
      -0.0163100678473711,
      0.045254889875650406,
      0.03543822094798088,
      0.10417988896369934,
      -0.05162130668759346,
      -0.02616879530251026,
      -3092979022767395e-19,
      -0.051383718848228455,
      0.0070308540016412735,
      -0.03224577382206917,
      0.0587819442152977,
      -0.034011200070381165,
      -0.06652664393186569,
      0.007910681888461113,
      0.005351945757865906,
      -0.02509772963821888,
      0.05650179833173752,
      -0.04642858728766441,
      -0.056104663759469986,
      0.041271984577178955,
      -0.03268250823020935,
      0.0346502810716629,
      0.028545765206217766,
      0.06993800401687622,
      -0.07683467864990234,
      0.019905628636479378,
      0.0627141147851944,
      -0.0431193970143795,
      0.04415334016084671,
      -0.10378221422433853,
      -0.0015590449329465628,
      0.05927198380231857,
      0.0634421557188034,
      -0.07746147364377975,
      0.007655952125787735,
      0.040150199085474014,
      0.07831668108701706,
      0.04618632048368454,
      0.04167760908603668,
      -0.02422628551721573,
      -0.007186051458120346,
      0.049027230590581894,
      -0.044654738157987595,
      0.08161435276269913,
      0.04398373141884804,
      -0.08072669059038162,
      0.02419285476207733,
      -0.03997229039669037,
      -0.06236771494150162,
      -0.025381268933415413,
      0.05552849546074867,
      -0.0824945792555809,
      -0.04067588597536087,
      0.019155381247401237,
      0.04784722626209259,
      0.064110666513443,
      0.07547219842672348
    ]
  },
  {
    id: "design-option",
    behavior: "SUGGEST",
    description: "Suggest UI/UX design alternatives and trade-offs.",
    embedding: [
      0.0488370880484581,
      -0.01534945610910654,
      -0.045050978660583496,
      -0.009843411855399609,
      0.03541684150695801,
      -0.01775776967406273,
      0.02235151268541813,
      -0.02571541629731655,
      0.0251271091401577,
      -0.022862771525979042,
      0.03479639068245888,
      0.02273664064705372,
      0.10574188828468323,
      -0.004071760457009077,
      -0.019726885482668877,
      0.023696016520261765,
      0.02252952754497528,
      -0.015206634998321533,
      -0.055011969059705734,
      -0.02325132116675377,
      0.021352451294660568,
      0.0033076053950935602,
      -0.018051259219646454,
      0.048432666808366776,
      0.05827376991510391,
      0.06970033794641495,
      -0.04968228191137314,
      -0.01615275628864765,
      0.03416414558887482,
      -0.07549994438886642,
      -0.08793436735868454,
      -0.02390100061893463,
      0.03842474892735481,
      -0.07069841772317886,
      0.023549728095531464,
      0.02814086712896824,
      -0.04868035018444061,
      -0.04461047425866127,
      0.04321219399571419,
      -0.054005540907382965,
      -0.03688688576221466,
      0.016925623640418053,
      0.09890720993280411,
      0.07756200432777405,
      0.051388323307037354,
      0.055172815918922424,
      -0.02386322058737278,
      -0.024275489151477814,
      -0.06858955323696136,
      -0.03326472267508507,
      -0.068115234375,
      0.04202263802289963,
      0.011234463192522526,
      0.07547025382518768,
      -0.00948724802583456,
      -0.05809962749481201,
      -0.046803537756204605,
      -0.07892287522554398,
      -0.04676426574587822,
      0.02405347116291523,
      0.025456493720412254,
      -0.04729708656668663,
      0.0379195474088192,
      0.010991379618644714,
      0.07757485657930374,
      0.027239792048931122,
      0.032784346491098404,
      0.028337253257632256,
      -0.04512926936149597,
      0.010781773366034031,
      -0.055717699229717255,
      0.050074927508831024,
      0.010427765548229218,
      -0.022305060178041458,
      -0.012111012823879719,
      0.041864871978759766,
      0.029300130903720856,
      -0.010609698481857777,
      0.038104891777038574,
      -0.050221677869558334,
      -0.09037555009126663,
      -0.03913332149386406,
      -0.06179933622479439,
      0.09955760091543198,
      -0.06036848947405815,
      0.06665074080228806,
      0.02677827514708042,
      -0.07238784432411194,
      0.07817770540714264,
      -0.05077315866947174,
      0.02628730796277523,
      0.03511381894350052,
      -0.09024038910865784,
      -0.037971869111061096,
      -0.0990186557173729,
      -0.07340345531702042,
      -0.06580759584903717,
      0.08963551372289658,
      0.07692445814609528,
      0.02957458607852459,
      0.028301944956183434,
      -0.012745516374707222,
      0.07724405080080032,
      -0.12975788116455078,
      -0.06060785800218582,
      0.014524025842547417,
      0.05402665585279465,
      -0.042436741292476654,
      0.06073763594031334,
      -0.053497593849897385,
      -0.037518665194511414,
      0.04381275549530983,
      0.03460812568664551,
      0.017950091511011124,
      -0.023533938452601433,
      -0.046557243913412094,
      -0.028631577268242836,
      -0.05365927517414093,
      0.036511171609163284,
      -0.06663204729557037,
      0.06468529254198074,
      -0.027271723374724388,
      -0.0937754437327385,
      -0.04881099984049797,
      -0.06649114191532135,
      -0.01790817268192768,
      0.055790215730667114,
      0.04843635484576225,
      0.0029340696055442095,
      -8427224820479751e-19,
      0.03624185174703598,
      0.05725812166929245,
      0.026699237525463104,
      0.07632221281528473,
      0.04860205575823784,
      0.10467378050088882,
      -0.03448866307735443,
      0.04590364545583725,
      -0.02336972951889038,
      0.01089781615883112,
      -0.04140344262123108,
      0.08396698534488678,
      -0.013064103201031685,
      0.05369064211845398,
      0.044438086450099945,
      0.06505033373832703,
      0.06545361876487732,
      5903136916458607e-19,
      0.0704457238316536,
      -0.028753679245710373,
      0.021487407386302948,
      0.007787242531776428,
      0.04215501248836517,
      0.0010437860619276762,
      0.07166830450296402,
      -0.05084002763032913,
      -0.07278340309858322,
      -0.009585722349584103,
      0.09042161703109741,
      0.023244401440024376,
      -0.05368958041071892,
      -0.05334315821528435,
      -0.06989726424217224,
      -0.03927177935838699,
      -0.06478916853666306,
      -0.0768074095249176,
      0.032016634941101074,
      0.07676912844181061,
      -0.10722121596336365,
      -0.0011735318694263697,
      -0.06855689734220505,
      0.05657418444752693,
      -0.01169064175337553,
      0.06148681789636612,
      -3214922617189586e-19,
      0.025203334167599678,
      -0.05190746858716011,
      0.04770112782716751,
      0.06365616619586945,
      0.0484766960144043,
      -0.019320694729685783,
      -0.0429040864109993,
      -0.026909124106168747,
      -0.0740683525800705,
      -0.07903386652469635,
      -0.04550742357969284,
      -0.040590595453977585,
      0.03564709424972534,
      -0.005244359839707613,
      -0.0250051561743021,
      -0.01323594432324171,
      0.0015690046129748225,
      -0.11996296793222427,
      -0.07990577816963196,
      0.0022425721399486065,
      0.025543907657265663,
      -0.07234253734350204,
      0.048407841473817825,
      0.05556901544332504,
      0.07052552700042725,
      0.043442316353321075,
      -0.011431325227022171,
      0.04621707648038864,
      0.012334599159657955,
      0.0502527616918087,
      0.00904839113354683,
      -0.020926853641867638,
      0.008736643008887768,
      -0.030929462984204292,
      0.041839245706796646,
      0.03144129738211632,
      -0.04124477133154869,
      -0.06033831089735031,
      0.04944484308362007,
      -0.08214495331048965,
      0.015039310790598392,
      5549584166146815e-19,
      0.05707522854208946,
      -0.04205619916319847,
      0.004797378089278936,
      0.08316212892532349,
      -0.02422766573727131,
      0.09029537439346313,
      -0.08989587426185608,
      -0.09275025129318237,
      0.04531068727374077,
      0.07489331066608429,
      -0.08001811802387238,
      -0.07997302711009979,
      0.05598420277237892,
      -0.04921111837029457,
      -0.04036013036966324,
      -0.058506693691015244,
      -0.05360431969165802,
      -0.03151322901248932,
      -0.08027582615613937,
      -0.002991118934005499,
      0.05638333782553673,
      0.03490464389324188,
      -0.042758140712976456,
      -0.046415653079748154,
      -0.027058282867074013,
      0.028177935630083084,
      -0.07359819859266281,
      0.08179663866758347,
      -0.023692717775702477,
      -0.044238582253456116,
      0.06248174235224724,
      -0.02290976233780384,
      0.02331605553627014,
      0.061719782650470734,
      -0.049590300768613815,
      -0.03610412776470184,
      -0.020251953974366188,
      -0.004123952239751816,
      0.04691516235470772,
      0.04726842790842056,
      0.0837583914399147,
      -0.034791454672813416,
      0.007214887533336878,
      0.025340311229228973,
      -0.03596704080700874,
      0.09197603166103363,
      0.025138620287179947,
      0.050089891999959946,
      -0.008855949155986309,
      -0.03554094210267067,
      -0.047207821160554886,
      -0.05989602953195572,
      -0.05031578615307808,
      -0.06326300650835037,
      0.02635957859456539,
      0.0433860644698143,
      -0.01726667396724224,
      -0.00544722331687808,
      -0.041946545243263245,
      0.015345503576099873,
      0.09080575406551361,
      -0.048514191061258316,
      -0.048934418708086014,
      0.017483530566096306,
      0.031292494386434555,
      -0.002869134536013007,
      0.07983265817165375,
      0.03673695772886276,
      -0.020361248403787613,
      -0.014480309560894966,
      0.09433118999004364,
      -10847095836652443e-20,
      -0.018089696764945984,
      -0.034029051661491394,
      -0.057116586714982986,
      -0.003438779851421714,
      -0.043416887521743774,
      0.08775810152292252,
      0.03646291419863701,
      -0.051880039274692535,
      0.034497957676649094,
      -0.03559950366616249,
      0.08109889179468155,
      0.013987847603857517,
      -0.05467940494418144,
      -0.001031948602758348,
      0.01084870845079422,
      -0.105677030980587,
      0.06783757358789444,
      0.015714354813098907,
      0.041328493505716324,
      0.006157063879072666,
      0.07124096155166626,
      0.0482570044696331,
      0.0416865274310112,
      -0.0687829926609993,
      -0.023503143340349197,
      0.042157720774412155,
      0.06135871633887291,
      -0.03459910675883293,
      0.07988108694553375,
      -0.05792183429002762,
      -0.05420156940817833,
      -0.07960717380046844,
      -0.09194311499595642,
      -0.018334349617362022,
      -0.05731438100337982,
      0.08875048160552979,
      0.02074291929602623,
      -0.04434550553560257,
      -0.007761361543089151,
      0.04698050394654274,
      0.022720785811543465,
      0.04880794137716293,
      -0.06258544325828552,
      -0.027090026065707207,
      -0.011588907800614834,
      -0.060911670327186584,
      0.01300729438662529,
      -0.040218863636255264,
      0.08229479938745499,
      -0.08238594979047775,
      -0.06969945132732391,
      0.019237041473388672,
      -9844336891546845e-19,
      -0.0481829009950161,
      0.023089589551091194,
      -0.0346890389919281,
      -0.04319995641708374,
      0.09459073841571808,
      -0.008352645672857761,
      -0.008595298044383526,
      0.04996253922581673,
      0.0490143708884716,
      -0.09574105590581894,
      0.03427433595061302,
      0.03698095679283142,
      -0.02697165682911873,
      0.047008417546749115,
      -0.07795891910791397,
      -0.022931544110178947,
      0.04196285456418991,
      0.04392051324248314,
      -0.03747681528329849,
      1429290568921715e-19,
      0.04826820641756058,
      0.06885205954313278,
      0.08964715152978897,
      0.045640841126441956,
      4851465200772509e-20,
      -0.0015874302480369806,
      0.04280329495668411,
      -0.05978478491306305,
      0.06788607686758041,
      0.028472252190113068,
      -0.05797917768359184,
      -0.01978212222456932,
      -0.028498882427811623,
      -0.0254804827272892,
      -0.02652936987578869,
      0.025631891563534737,
      -0.06465204060077667,
      -0.051901329308748245,
      0.02002216875553131,
      0.08382104337215424,
      0.04272156581282616,
      0.06258143484592438
    ]
  }
];

// src/behavior/semanticEngine.ts
var SEMANTIC_CONFIDENCE_THRESHOLD = Number(process.env.SEMANTIC_CONFIDENCE_THRESHOLD) || 0.78;
var extractorPipeline = null;
async function getExtractor() {
  const logger = DebugLogger.getInstance();
  if (!extractorPipeline) {
    logger.semanticEngine.loadingModel = true;
    extractorPipeline = await pipeline("feature-extraction", "Xenova/multilingual-e5-small", {
      quantized: true
    });
  } else {
    logger.semanticEngine.modelLoadedBefore = true;
  }
  return extractorPipeline;
}
function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}
async function resolveBehaviorBySemantics(signal) {
  const logger = DebugLogger.getInstance();
  logger.semanticEngine.invoked = true;
  logger.semanticEngine.threshold = SEMANTIC_CONFIDENCE_THRESHOLD;
  const extractor = await getExtractor();
  const startT = performance.now();
  const output = await extractor(`query: ${signal.rawText}`, {
    pooling: "mean",
    normalize: true
  });
  logger.semanticEngine.embeddingTimeMs = Math.round(performance.now() - startT);
  const queryEmbedding = Array.from(output.data);
  let bestBehavior = null;
  let highestScore = -Infinity;
  for (const behavior of catalog_default) {
    const score = cosineSimilarity(queryEmbedding, behavior.embedding);
    logger.semanticEngine.scores[behavior.id] = { score, description: behavior.description };
    if (score > highestScore) {
      highestScore = score;
      bestBehavior = behavior.id;
    }
  }
  logger.semanticEngine.decision = bestBehavior;
  return {
    behavior: bestBehavior,
    confidence: highestScore,
    source: "semantic",
    ruleId: `behavior::semantic.${bestBehavior.toLowerCase()}`
  };
}
async function resolveWorkflowBySemantics(behavior, signal) {
  const logger = DebugLogger.getInstance();
  const extractor = await getExtractor();
  const output = await extractor(`query: ${signal.rawText}`, {
    pooling: "mean",
    normalize: true
  });
  const queryEmbedding = Array.from(output.data);
  let bestWorkflowId = null;
  let highestScore = -Infinity;
  const candidateEmbeddings = catalog_default2.filter((w) => w.behavior === behavior);
  for (const w of candidateEmbeddings) {
    const score = cosineSimilarity(queryEmbedding, w.embedding);
    logger.workflowResolver.scores[w.id] = score;
    if (score > highestScore) {
      highestScore = score;
      bestWorkflowId = w.id;
    }
  }
  return bestWorkflowId;
}

// src/behavior/resolver.ts
var RULE_CONFIDENCE_THRESHOLD = 0.55;
async function resolveBehavior(signal) {
  const logger = DebugLogger.getInstance();
  const ruleResolution = resolveBehaviorByRule(signal);
  if (ruleResolution && ruleResolution.confidence >= RULE_CONFIDENCE_THRESHOLD) {
    return ruleResolution;
  }
  const semanticResolution = await resolveBehaviorBySemantics(signal);
  return semanticResolution;
}

// src/workflow/catalog.ts
var WORKFLOW_CATALOG = catalog_default2;
var BY_BEHAVIOR = /* @__PURE__ */ new Map();
for (const workflow of WORKFLOW_CATALOG) {
  const list = BY_BEHAVIOR.get(workflow.behavior) ?? [];
  list.push(workflow);
  BY_BEHAVIOR.set(workflow.behavior, list);
}
function getWorkflowsForBehavior(behavior) {
  return BY_BEHAVIOR.get(behavior) ?? [];
}
function getWorkflowDefinition(behavior, workflowId) {
  const workflow = getWorkflowsForBehavior(behavior).find((entry) => entry.id === workflowId);
  if (!workflow) {
    throw new Error(`No workflow "${workflowId}" defined for behavior "${behavior}".`);
  }
  return workflow;
}

// src/workflow/resolver.ts
function getExplicitWorkflowId(signal) {
  if (signal.subcommand?.startsWith("/")) {
    return signal.subcommand.slice(1);
  }
  if (signal.command?.startsWith("/")) {
    return signal.command.slice(1);
  }
  return void 0;
}
async function resolveWorkflow(behavior, signal) {
  const candidates = getWorkflowsForBehavior(behavior);
  if (candidates.length === 0) {
    throw new Error(`No workflows configured for behavior "${behavior}".`);
  }
  const logger = DebugLogger.getInstance();
  logger.workflowResolver.behavior = behavior;
  let selectedId;
  const explicitId = getExplicitWorkflowId(signal);
  logger.workflowResolver.explicitCommand = explicitId;
  if (explicitId && candidates.some((c) => c.id === explicitId)) {
    selectedId = explicitId;
    logger.workflowResolver.isDefaultFallback = false;
  } else {
    selectedId = await resolveWorkflowBySemantics(behavior, signal);
    logger.workflowResolver.isDefaultFallback = false;
  }
  const selected = getWorkflowDefinition(behavior, selectedId);
  logger.workflowResolver.selected = selected.id;
  return selected;
}

// src/policy/resolver.ts
function escalateThinking(level) {
  const index = THINKING_LEVELS.indexOf(level);
  const nextIndex = Math.min(index + 1, THINKING_LEVELS.length - 1);
  return THINKING_LEVELS[nextIndex];
}
function findPolicyEntry(policyFile, behavior, workflow) {
  const entry = policyFile.policies.find(
    (policy) => policy.behavior === behavior && policy.workflow === workflow.id
  );
  if (!entry) {
    throw new Error(`No policy defined for behavior "${behavior}" workflow "${workflow.id}".`);
  }
  return entry;
}
function resolvePolicy(signal, behavior, workflow, policyFile) {
  const policy = findPolicyEntry(policyFile, behavior, workflow);
  const shouldEscalate = signal.diffLines !== void 0 && signal.diffLines >= policyFile.settings.diffLinesEscalationThreshold && policyFile.settings.diffLinesEscalationBehaviors.includes(behavior);
  const finalThinking = shouldEscalate ? escalateThinking(policy.thinking) : policy.thinking;
  const logger = DebugLogger.getInstance();
  logger.policy.selected = `${behavior}.${workflow.id}.${policy.workflow}`;
  logger.policy.reasoning = finalThinking;
  logger.policy.model = policy.pool.join(", ");
  logger.policy.tools = policy.allowedTools ?? [...ALL_TOOLS];
  return {
    behavior,
    workflow,
    provider: policy.provider,
    modelPool: policy.pool,
    thinking: finalThinking,
    contextBudget: policy.contextBudget,
    constraints: policy.constraints,
    allowedTools: policy.allowedTools ?? [...ALL_TOOLS],
    output: policy.output ?? { maxTokens: 1e3 },
    meta: {
      ruleId: `${behavior}:${workflow.id}::${policy.workflow}`,
      diffLinesEscalationApplied: shouldEscalate
    }
  };
}

// src/context/strategy.ts
var FILE_EXTENSIONS = [
  "tsx",
  "jsx",
  "mjs",
  "cjs",
  "hpp",
  "ts",
  "js",
  "py",
  "go",
  "rs",
  "java",
  "kt",
  "json",
  "yaml",
  "yml",
  "toml",
  "xml",
  "scss",
  "sass",
  "less",
  "css",
  "html",
  "vue",
  "svelte",
  "cpp",
  "md",
  "txt",
  "sh",
  "rb",
  "php",
  "c",
  "h"
];
var EXT_ALT = FILE_EXTENSIONS.map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
var FILE_PATH_RE = new RegExp(`(?:[\\w./-]+/)?[\\w-]+\\.(?:${EXT_ALT})`, "g");
var IDENTIFIER_RE = /\b(?:[A-Z][a-zA-Z0-9]+[A-Z][a-zA-Z0-9]*|[a-z]+[A-Z][a-zA-Z0-9]*|[a-z0-9]+-[a-z0-9-]+|[a-z0-9]+_[a-z0-9_]+)\b/g;
var STOP_WORDS = /* @__PURE__ */ new Set([
  "the",
  "this",
  "that",
  "these",
  "those",
  "for",
  "with",
  "from",
  "into",
  "and",
  "or",
  "but",
  "not"
]);
function extractEntities(rawText) {
  const files = /* @__PURE__ */ new Set();
  const identifiers = /* @__PURE__ */ new Set();
  for (const match of rawText.matchAll(FILE_PATH_RE)) {
    files.add(match[0]);
  }
  for (const match of rawText.matchAll(IDENTIFIER_RE)) {
    const token = match[0];
    if (!STOP_WORDS.has(token.toLowerCase())) {
      identifiers.add(token);
    }
  }
  return {
    files: [...files],
    identifiers: [...identifiers]
  };
}
var WORKFLOW_FOCUS = {
  // CHAT
  explain: "Kavram\u0131n net ve ad\u0131m ad\u0131m a\xE7\u0131klanmas\u0131",
  summarize: "Ana noktalar\u0131n \xF6zetlenmesi",
  teach: "\xD6rneklerle \xF6\u011Fretim",
  translate: "Anlam ve tonun korunarak \xE7eviri",
  // PLAN
  architecture: "Sistem mimarisi ve bile\u015Fen yerle\u015Fimi",
  design: "Aray\xFCz, API veya bile\u015Fen tasar\u0131m\u0131",
  brainstorm: "Se\xE7enek ve alternatif \xFCretilmesi",
  migration: "G\xFCvenli ge\xE7i\u015F plan\u0131",
  strategy: "Y\xFCr\xFCtme stratejisi ve i\u015F s\u0131ras\u0131",
  // REVIEW
  security: "G\xFCvenlik riskleri ve sald\u0131r\u0131 y\xFCzeyi",
  performance: "Performans karakteristikleri ve darbo\u011Fazlar",
  quality: "S\xFCrd\xFCr\xFClebilirlik, tutarl\u0131l\u0131k ve test kalitesi",
  code: "Kod do\u011Frulu\u011Fu ve stil sorunlar\u0131",
  // CODE
  generate: "Yeni kod \xFCretilmesi",
  refactor: "Davran\u0131\u015F\u0131 koruyarak yeniden yap\u0131land\u0131rma",
  fix: "Hata giderme ve k\xFC\xE7\xFCk d\xFCzeltmeler",
  test: "Test yaz\u0131m\u0131 veya g\xFCncellenmesi",
  edit: "Hedefe y\xF6nelik yerinde d\xFCzenlemeler",
  // SUGGEST
  color: "Renk ve g\xF6rsel tasar\u0131m se\xE7enekleri",
  approach: "Uygulama yakla\u015F\u0131m\u0131 ve desen se\xE7enekleri",
  technology: "K\xFCt\xFCphane, \xE7at\u0131 ve ara\xE7 se\xE7enekleri",
  "design-option": "UI/UX tasar\u0131m alternatifleri"
};
function buildFocusTargets(behavior, workflowId, entities) {
  const targets = [];
  const focus = WORKFLOW_FOCUS[workflowId];
  if (focus) {
    targets.push(`Odak: ${focus}`);
  }
  if (entities.files.length > 0) {
    targets.push(`\u0130lgili dosyalar: ${entities.files.join(", ")}`);
  }
  if (entities.identifiers.length > 0) {
    targets.push(`\u0130lgili bile\u015Fenler/semboller: ${entities.identifiers.join(", ")}`);
  }
  return targets;
}
function resolveContextStrategy(signal, resolvedPolicy) {
  let repositoryScan = "Allowed";
  switch (resolvedPolicy.behavior) {
    case "CODE":
      repositoryScan = "Limited";
      break;
    case "CHAT":
      repositoryScan = "Disabled";
      break;
    case "PLAN":
    case "REVIEW":
      repositoryScan = "Allowed";
      break;
    case "SUGGEST":
      repositoryScan = "Limited";
      break;
  }
  const entities = extractEntities(signal.rawText);
  const focusTargets = buildFocusTargets(resolvedPolicy.behavior, resolvedPolicy.workflow.id, entities);
  const fileHint = entities.files.length > 0 ? ` (${entities.files.join(", ")} \xFCzerinde)` : "";
  const expectedGoal = `${resolvedPolicy.behavior}/${resolvedPolicy.workflow.id} i\u015Fini yerine getir${fileHint}: "${signal.rawText}"`;
  return {
    focusTargets,
    repositoryScan,
    expectedGoal,
    reason: `Resolved context strategy for ${resolvedPolicy.behavior}.${resolvedPolicy.workflow.id}`
  };
}

// src/adapter/instructions.ts
var CONSTRAINT_TEXT = {
  code_only: "Sadece kod blo\u011Fu d\xF6nd\xFCr. A\xE7\u0131klama, giri\u015F c\xFCmlesi veya sonu\xE7 yorumu ekleme.",
  no_comments: "\xDCretti\u011Fin kodun i\xE7ine yorum sat\u0131r\u0131 (// veya /* */) ekleme.",
  no_refactor: "SADECE istenen de\u011Fi\u015Fikli\u011Fi yap. Etraf\u0131ndaki kodu, isimlendirmeleri veya yap\u0131y\u0131 yeniden d\xFCzenleme (refactor etme).",
  no_code_output: "Bu bir plan/analiz iste\u011Fidir. Kod blo\u011Fu \xFCretme, sadece ad\u0131m ad\u0131m plan veya a\xE7\u0131klama yaz.",
  suggest_only: "Bu bir \xF6neri iste\u011Fidir. Kodu dosyalara yazma veya uygulama. \xD6neriyi metin olarak sun, se\xE7enekleri ve avantajlar\u0131n\u0131 a\xE7\u0131kla. Opsiyonel olarak kod snippet \xF6rnekleri g\xF6sterebilirsin ama bunlar sadece referans ama\xE7l\u0131d\u0131r, do\u011Frudan uygulanmamal\u0131d\u0131r.",
  scope_limited: "SADECE hedef ajan\u0131n mevcut ba\u011Flam\u0131nda verilen dosyalarla \xE7al\u0131\u015F. Ba\u011Flam yetersizse hangi dosyan\u0131n gerekti\u011Fini sor."
};
function buildAdapterInstructions(workflow, strategy) {
  const constraints = workflow.constraints.map((constraint) => `- ${CONSTRAINT_TEXT[constraint]}`).join("\n");
  const strategyLines = [
    `Beklenen Hedef: ${strategy.expectedGoal}`,
    `Repository Taramas\u0131: ${strategy.repositoryScan === "Disabled" ? "Kapat\u0131ld\u0131" : strategy.repositoryScan === "Limited" ? "S\u0131n\u0131rland\u0131r\u0131ld\u0131" : "\u0130zin Verildi"}`
  ];
  if (strategy.focusTargets.length > 0) {
    strategyLines.push(`Odaklan\u0131lacak Konular: ${strategy.focusTargets.join(", ")}`);
  }
  return [
    `Davran\u0131\u015F: ${workflow.behavior}. Workflow: ${workflow.workflow.id}.`,
    `\u0130\u015F tan\u0131m\u0131: ${workflow.workflow.description}`,
    `Ba\u011Flam Stratejisi:
${strategyLines.join("\n")}`,
    constraints ? `Uyman gereken kurallar:
${constraints}` : "",
    `Cevab\u0131n\u0131 en fazla ${workflow.output.maxTokens} token ile s\u0131n\u0131rla.`
  ].filter(Boolean).join("\n\n");
}

// src/adapter/pi.ts
function adaptForPi(workflow, strategy) {
  const logger = DebugLogger.getInstance();
  const systemPrompt = buildAdapterInstructions(workflow, strategy);
  logger.adapter.target = "Pi";
  logger.adapter.name = "PiAdapter";
  logger.adapter.systemPrompt = systemPrompt;
  logger.contextStrategy.focusTargets = strategy.focusTargets;
  logger.contextStrategy.repositoryScan = strategy.repositoryScan;
  logger.contextStrategy.expectedGoal = strategy.expectedGoal;
  logger.contextStrategy.reason = strategy.reason;
  return {
    behavior: workflow.behavior,
    workflowId: workflow.workflow.id,
    provider: workflow.provider,
    modelPool: workflow.modelPool,
    thinking: workflow.thinking,
    allowedTools: workflow.allowedTools,
    contextLimit: workflow.contextBudget,
    statusText: `${workflow.behavior}/${workflow.workflow.id}`,
    systemPrompt
  };
}

// src/input/cliGuard.ts
var CLI_ONLY_COMMANDS = [
  { pattern: /^pi\s+update(\s|$)/i, displayName: "pi update" },
  { pattern: /^pi\s+--version(\s|$)/i, displayName: "pi --version" },
  { pattern: /^pi\s+config(\s|$)/i, displayName: "pi config" },
  { pattern: /^pi\s+login(\s|$)/i, displayName: "pi login" }
];
function detectMisplacedCliCommand(rawText) {
  const trimmed = rawText.trim();
  for (const cmd of CLI_ONLY_COMMANDS) {
    if (cmd.pattern.test(trimmed)) {
      return cmd.displayName;
    }
  }
  return null;
}

// extension/ay-pi/src/index.ts
var POLICY_PATH = new URL("../../../ay-pi.policy.json", import.meta.url).pathname;
var cachedPolicy = null;
function getPolicy() {
  if (!cachedPolicy) {
    cachedPolicy = loadPolicies(POLICY_PATH);
  }
  return cachedPolicy;
}
function detectDiffLinesFromGit(cwd) {
  try {
    const stat = execSync("git diff --shortstat", {
      cwd,
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"]
    }).trim();
    if (!stat) return 0;
    const insertions = /(\d+) insertion/.exec(stat)?.[1] ?? "0";
    const deletions = /(\d+) deletion/.exec(stat)?.[1] ?? "0";
    return Number(insertions) + Number(deletions);
  } catch {
    return void 0;
  }
}
function ayPi(pi) {
  pi.on("input", async (event, ctx) => {
    if (event.source !== "interactive") return { action: "continue" };
    const misplaced = detectMisplacedCliCommand(event.text);
    if (misplaced) {
      ctx.ui.notify(
        `"${misplaced}" is a CLI command and should be run in a terminal window.`,
        "info"
      );
      return { action: "handled" };
    }
    return { action: "continue" };
  });
  pi.on("session_start", async (_event, ctx) => {
    ctx.ui.notify("AY-PI extension active", "info");
  });
  pi.on("before_agent_start", async (event, ctx) => {
    const rawText = event.prompt;
    if (!rawText) return {};
    const diffLines = detectDiffLinesFromGit(ctx.cwd);
    const signal = buildSignal(rawText, { diffLines });
    const logger = DebugLogger.getInstance();
    logger.start(rawText);
    const policy = getPolicy();
    const behavior = await resolveBehavior(signal);
    const workflowDefinition = await resolveWorkflow(behavior.behavior, signal);
    const workflow = resolvePolicy(signal, behavior.behavior, workflowDefinition, policy);
    const contextStrategy = resolveContextStrategy(signal, workflow);
    const piDecision = adaptForPi(workflow, contextStrategy);
    let appliedModelInfo;
    let modelApplied = false;
    for (const modelId of piDecision.modelPool) {
      const model = ctx.modelRegistry.find(piDecision.provider, modelId);
      if (model) {
        const applied = await pi.setModel(model);
        if (applied) {
          modelApplied = true;
          appliedModelInfo = modelId;
          break;
        }
      }
    }
    if (!modelApplied) {
      ctx.ui.notify(
        `AY-PI: None of the candidate models (${piDecision.modelPool.join(", ")}) were available. Active model unchanged.`,
        "error"
      );
    }
    pi.setThinkingLevel(piDecision.thinking);
    const appliedThinking = pi.getThinkingLevel();
    if (appliedThinking !== piDecision.thinking) {
      ctx.ui.notify(
        `AY-PI: Requested thinking '${piDecision.thinking}', active thinking level is '${appliedThinking}'.`,
        "info"
      );
    }
    pi.setActiveTools(piDecision.allowedTools);
    const toolsNote = piDecision.allowedTools.length < ALL_TOOLS.length ? ` (tools: ${piDecision.allowedTools.join(",")})` : "";
    ctx.ui.setStatus(
      "ay-pi",
      `AY-PI: ${piDecision.statusText} \xB7 ${piDecision.provider}/${appliedModelInfo ?? piDecision.modelPool[0]} \xB7 ${appliedThinking}` + (workflow.meta.diffLinesEscalationApplied ? " (\u2191 diffLines escalated)" : "") + toolsNote
    );
    const result = {
      systemPrompt: `${event.systemPrompt}

${piDecision.systemPrompt}`
    };
    logger.finalResult.behavior = piDecision.behavior;
    logger.finalResult.workflow = piDecision.workflowId;
    logger.finalResult.policy = logger.policy.selected;
    logger.print();
    return result;
  });
  pi.registerCommand("ay-pi-status", {
    description: "Display AY-PI status and active policy metrics",
    handler: async (args, commandCtx) => {
      const policy = getPolicy();
      const policyCount = policy.policies.length;
      commandCtx.ui.notify(
        `AY-PI Active.
Policy: ${policyCount} workflow policies loaded.`,
        "info"
      );
    }
  });
  pi.registerCommand("ay-pi-reload-policy", {
    description: "Reload AY-PI policy definition file",
    handler: async (args, commandCtx) => {
      cachedPolicy = null;
      getPolicy();
      commandCtx.ui.notify("AY-PI: Policy cache cleared and reloaded.", "info");
    }
  });
}
export {
  ayPi as default
};

/**
 * You can contribute here
 */

let c = {
  // 400
  badRequest_en: 'The API request is invalid or improperly formed. Consequently, the API server could not understand the request.',
  badRequest_id: 'Permintaan API tidak valid atau tidak terbentuk dengan benar. Akibatnya, server API tidak dapat memahami permintaan tersebut.',
  badContent_en: 'The content type of the request data or the content type of a part of a multipart request is not supported.',
  badContent_id: 'Jenis konten dari data permintaan atau tipe konten dari bagian permintaan multi-bagian tidak didukung.',
  invalid_en: 'The request failed because it contained an invalid value. The value could be a parameter value, a header value, or a property value.',
  invalid_id: 'Permintaan gagal karena mengandung nilai yang tidak valid. Nilai tersebut bisa berupa nilai parameter, nilai header, atau nilai properti.',
  invalidHeader_en: 'The request failed because it contained an invalid header.',
  invalidHeader_id: 'Permintaan gagal karena berisi header yang tidak valid.',
  invalidParameter_en: 'The request failed because it contained an invalid parameter or parameter value.',
  invalidParameter_id: 'Permintaan gagal karena berisi parameter atau nilai parameter yang tidak valid.',
  invalidQuery_en: 'The request is invalid. Check the value of the q request parameter.',
  invalidQuery_id: 'Permintaan tidak valid. Periksa nilai parameter permintaan q.',
  keyExpired_en: 'The API key provided in the request expired.',
  keyExpired_id: 'Kunci API yang disediakan dalam permintaan telah kedaluwarsa.',
  keyInvalid_en: 'The API key provided in the request is invalid.',
  keyInvalid_id: 'Kunci API yang disediakan dalam permintaan tidak valid.',
  required_en: 'The API request is missing required information. The required information could be a parameter or resource property.',
  required_id: 'Permintaan API tidak ada informasi yang diperlukan. Informasi yang diperlukan dapat berupa parameter atau properti sumber daya.',
  unknownApi_en: 'The API that the request is calling is not recognized.',
  unknownApi_id: 'Permintaan API yang dipanggil tidak dikenali.',
  accountUnverifiedEmail_en: 'The email address of the user has not been verified.',
  accountUnverifiedEmail_id: 'Alamat email pengguna belum diverifikasi.',
  accountUnverifiedPhone_en: 'The phone number of the user has not been verified.',
  accountUnverifiedPhone_id: 'Nomor telepon pengguna belum diverifikasi.',
  accountRegisteredEmail_en: 'Email address already registered by another user. Please fill another email address.',
  accountRegisteredEmail_id: 'Alamat email sudah terdaftar oleh pengguna lain. Silakan masukan alamat email lainnya.',
  accountRegisteredPhone_en: 'Phone number already registered by another user. Please fill another phone number.',
  accountRegisteredPhone_id: 'Nomor telepon sudah terdaftar oleh pengguna lain. Silakan masukan nomor telepon lainnya.',
  accountNotRegisteredEmail_en: 'The email address is not registered. Please fill another email address.',
  accountNotRegisteredEmail_id: 'Alamat email tidak terdaftar. Silakan masukan alamat email lainnya.',
  accountNotRegisteredPhone_en: 'The phone number is not registered. Please fill another phone number.',
  accountNotRegisteredPhone_id: 'Nomor telepon tidak terdaftar. Silakan masukan nomor telepon lainnya.',
  accountVerifedEmail_en: 'The email address of the user already verified.',
  accountVerifedEmail_id: 'Alamat email pengguna sudah diverifikasi.',
  accountVerifedPhone_en: 'The phone number of the user already verified.',
  accountVerifedPhone_id: 'Nomor telepon pengguna sudah diverifikasi.',

  // 401
  unauthorized_en: 'The user is not authorized to make the request.',
  unauthorized_id: 'Pengguna tidak berwenang untuk membuat permintaan.',
  authError_en: 'The authorization credentials provided for the request are invalid. Check the value of the Authorization HTTP request header.',
  authError_id: 'Kredensial otorisasi yang diberikan tidak valid.',
  expired_en: 'Session Expired. Check the value of the Authorization HTTP request header.',
  expired_id: 'Sesi berakhir.',
  expiredOTP_en: 'OTP code expired. Please request new OTP code and try again.',
  expiredOTP_id: 'Kode OTP berakhir. Silakan meminta kode OTP baru dan cobalagi.',

  // 403
  forbidden_en: 'The requested operation is forbidden and cannot be completed.',
  forbidden_id: 'Operasi yang diminta dicekal dan tidak dapat diselesaikan.',
  rateLimitExceeded_en: 'Too many requests have been sent within a given time span.',
  rateLimitExceeded_id: 'Terlalu banyak permintaan telah dikirim dalam rentang waktu tertentu.',

  // 404
  notFound_en: 'The requested operation failed because a resource associated with the request could not be found.',
  notFound_id: 'Operasi yang diminta gagal karena sumber daya yang terkait dengan permintaan tidak dapat ditemukan.',

  // 413
  uploadTooLarge_en: 'The request failed because the data sent in the request is too large.',
  uploadTooLarge_id: 'Permintaan gagal karena data yang dikirim terlalu besar.',

  // 500
  internalError_en: 'The request failed due to an internal error.',
  internalError_id: 'Permintaan gagal karena kesalahan internal.',
};

let RestErrors = function(options){
  this.lang = options.lang ? options.lang : this.lang;
  this.envCon = options.env ? options.env : this.envCon;
};

RestErrors.prototype.badRequest = function() {
  let m = c.badRequest_id;
  if (this.lang === 'en') m = c.badRequest_en;
  return { message: m, status: 400 };
};

RestErrors.prototype.badContent = function() {
  let m = c.badContent_id;
  if (this.lang === 'en') m = c.badContent_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.invalid = function() {
  let m = c.invalid_id;
  if (this.lang === 'en') m = c.invalid_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.invalidHeader = function() {
  let m = c.invalidHeader_id;
  if (this.lang === 'en') m = c.invalidHeader_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.invalidParameter = function() {
  let m = c.invalidParameter_id;
  if (this.lang === 'en') m = c.invalidParameter_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.invalidQuery = function() {
  let m = c.invalidQuery_id;
  if (this.lang === 'en') m = c.invalidQuery_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.keyExpired = function() {
  let m = c.keyExpired_id;
  if (this.lang === 'en') m = c.keyExpired_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.keyInvalid = function() {
  let m = c.keyInvalid_id;
  if (this.lang === 'en') m = c.keyExpired_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.required = function() {
  let m = c.required_id;
  if (this.lang === 'en') m = c.required_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.unknownApi = function() {
  let m = c.unknownApi_id;
  if (this.lang === 'en') m = c.unknownApi_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.accountUnverifiedEmail = function() {
  let m = c.accountUnverifiedEmail_id;
  if (this.lang === 'en') m = c.accountUnverifiedEmail_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.accountUnverifiedPhone = function() {
  let m = c.accountUnverifiedPhone_id;
  if (this.lang === 'en') m = c.accountUnverifiedPhone_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.accountRegisteredEmail = function() {
  let m = c.accountRegisteredEmail_id;
  if (this.lang === 'en') m = c.accountRegisteredEmail_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.accountRegisteredPhone = function() {
  let m = c.accountRegisteredPhone_id;
  if (this.lang === 'en') m = c.accountRegisteredPhone_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.accountNotRegisteredEmail = function() {
  let m = c.accountNotRegisteredEmail_id;
  if (this.lang === 'en') m = c.accountNotRegisteredEmail_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.accountNotRegisteredPhone = function() {
  let m = c.accountNotRegisteredPhone_id;
  if (this.lang === 'en') m = c.accountNotRegisteredPhone_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.accountVerifedEmail = function() {
  let m = c.accountVerifedEmail_id;
  if (this.lang === 'en') m = c.accountVerifedEmail_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.accountVerifedPhone = function() {
  let m = c.accountVerifedPhone_id;
  if (this.lang === 'en') m = c.accountVerifedPhone_en;

  return { message: m, status: 400 };
};

RestErrors.prototype.unauthorized = function() {
  let m = c.unauthorized_id;
  if (this.lang === 'en') m = c.unauthorized_en;

  return { message: m, status: 401 };
};

RestErrors.prototype.authError = function() {
  let m = c.authError_id;
  if (this.lang === 'en') m = c.authError_en;

  return { message: m, status: 401 };
};

RestErrors.prototype.expired = function() {
  let m = c.expired_id;
  if (this.lang === 'en') m = c.expired_en;

  return { message: m, status: 401 };
};

RestErrors.prototype.expiredOTP = function() {
  let m = c.expiredOTP_id;
  if (this.lang === 'en') m = c.expiredOTP_en;

  return { message: m, status: 401 };
};

RestErrors.prototype.forbidden = function() {
  let m = c.forbidden_id;
  if (this.lang === 'en') m = c.forbidden_en;

  return { message: m, status: 403 };
};

RestErrors.prototype.notFound = function() {
  let m = c.notFound_id;
  if (this.lang === 'en') m = c.notFound_en;

  return { message: m, status: 404 };
};

RestErrors.prototype.rateLimitExceeded = function() {
  let m = c.rateLimitExceeded_id;
  if (this.lang === 'en') m = c.rateLimitExceeded_en;

  return { message: m, status: 403 };
};

RestErrors.prototype.uploadTooLarge = function() {
  let m = c.uploadTooLarge_id;
  if (this.lang === 'en') m = c.uploadTooLarge_en;

  return { message: m, status: 413 };
};

RestErrors.prototype.internalError = function() {
  let m = c.internalError_id;
  if (this.lang === 'en') m = c.internalError_en;

  return { message: m, status: 500 };
};

module.exports = exports = RestErrors;
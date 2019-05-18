module.exports = {
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

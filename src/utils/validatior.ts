/**
 * 이메일 형식 유효성 검사 함수
 * @param email 이메일 문자열
 * @returns {boolean} 이메일 형식이 맞으면 true, 아니면 false
 */
export const isValidEmail = (email: string): boolean => {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
};

/**
 * 전화번호 형식 유효성 검사 (간단한 예시)
 * @param phone 전화번호 문자열
 * @returns {boolean} 유효하면 true, 아니면 false
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const re = /^\d{10,11}$/;
  return re.test(phone);
};
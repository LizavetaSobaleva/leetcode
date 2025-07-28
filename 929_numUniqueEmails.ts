function numUniqueEmails(emails: string[]): number {
  const validEmails = emails.map((email) => {
    const [local, domain] = email.split("@");
    const cleanLocal = local.split("+")[0].replaceAll(".", "");
    return `${cleanLocal}@${domain}`;
  });

  return new Set(validEmails).size;
}

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);

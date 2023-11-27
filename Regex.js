// Regular expressions (regex or regexp) are powerful tools for pattern matching and manipulation of strings.
// They are widely used in programming, text processing, and data validation for various purposes.
// Here are some common use cases for regex:

// Validation:
// Regex is often used for validating input data. For example, you can use a regex pattern to validate email addresses, phone numbers, dates, and other formats.

// Search and Replace:
// Regex enables you to search for specific patterns in a string and replace them with another pattern. This is commonly used in text editors and IDEs for find-and-replace operations.

// Data Extraction:
// When dealing with structured data, regex can be used to extract specific information. For example, extracting all email addresses from a text document.

// Parsing and Tokenization:
// Regex is useful for breaking down strings into smaller parts or tokens based on a specific pattern. This is common in parsing languages or extracting information from log files.

// Text Processing and Analysis:
// Regex is valuable for processing and analyzing text data. You can use it to count occurrences of specific patterns, extract keywords, or identify specific patterns in a large corpus of text.

// URL Matching and Validation:
// Regex is often used to validate and extract information from URLs. It can be used to check if a URL is well-formed or to extract parameters from the query string.

// Password Strength Checking:
// Regex can be used to define rules for strong passwords, such as requiring a certain length, a mix of uppercase and lowercase letters, and numbers.

// Lexical Analysis in Compilers:
// In the field of computer science, regex is used in lexical analysis to define the token patterns for a programming language.

// It's important to note that while regex is powerful, it can also be complex, and writing complex regex patterns may require careful consideration. Additionally, there are situations where using more specialized parsers or tools may be more appropriate, especially for complex data structures.

// Function to check if a word is "apple"
function isApple(word) {
  const pattern = /\bapple\b/;
  return pattern.test(word);
}

// Function to check if a given string is an email address
function isEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

// Function to check if a string contains digits
function hasDigits(text) {
  const pattern = /\d+/;
  return pattern.test(text);
}

// Function to check if a string contains non-digits
function hasNonDigits(text) {
  const pattern = /\D+/;
  return pattern.test(text);
}

// Function to check if a string is a date in MM/DD/YYYY format
function isDate(dateString) {
  const pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
  return pattern.test(dateString);
}

// Function to check if a string is a URL
function isUrl(url) {
  const pattern = /^(https?|ftp):\/\/[^\\s/$.?#].[^\\s]*$/;
  return pattern.test(url);
}
undefined;

// Example for isEmail function
console.log(isEmail("user@example.com")); // true
console.log(isEmail("invalid-email")); // false
console.log(isEmail("another.user@domain.co")); // true

// Example for hasDigits function
console.log(hasDigits("abc123")); // true
console.log(hasDigits("noDigits")); // false

// Example for hasNonDigits function
console.log(hasNonDigits("abc123")); // false
console.log(hasNonDigits("abc!@#")); // true

// Example for isDate function
console.log(isDate("12/25/2022")); // true
console.log(isDate("02/30/2023")); // false
console.log(isDate("invalid-date")); // false

// Example for isUrl function
console.log(isUrl("https://www.example.com")); // true
console.log(isUrl("ftp://ftp.example.com")); // true
console.log(isUrl("invalid url")); // false

function arrayExtractor(inputString) {
  const regex = /values=\[(.*?)\]/;
  const match = inputString.match(regex);

  if (match && match[1]) {
    const arrayString = match[1];
    const valuesArray = arrayString.split(",");

    // Trim whitespace and single quotes from each element
    const cleanValuesArray = valuesArray.map((item) =>
      item.trim().replace(/'/g, "")
    );

    return cleanValuesArray;
  } else {
    return "No array found in the input string.";
  }
}

console.log(
  arrayExtractor("https://www.example.com?colors=['RED','GREEN','ORANGE']")
);

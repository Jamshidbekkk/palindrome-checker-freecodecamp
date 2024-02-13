// Get the necessary elements
const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    // Check if the clean string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Function to display result
function displayResult(isPalindrome) {
    if (isPalindrome) {
        resultDiv.textContent = 'Yes, it\'s a palindrome!';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'No, it\'s not a palindrome.';
        resultDiv.style.color = 'red';
    }
    resultDiv.classList.remove('hidden');
}

// Event listener for the check button
checkBtn.addEventListener('click', function() {
    const text = input.value;
    const palindrome = isPalindrome(text);
    displayResult(palindrome);
});


const translations = {
    bg: {
        title: "Калкулатор Лев ⇄ Евро",
        amount: "Сума:",
        amountPlaceholder: "Въведи сумата!",
        currency: "Валута:",
        currencyOptions: ["Лев → Евро", "Евро → Лев"],
        convert: "Конвертирай",
        rate: "Курс: 1 EUR = 1.95583 BGN",
        resultText: "Резултат:",
        error: "Моля, въведи валидна сума."
    },
    en: {
        title: "BGN ⇄ EUR Converter",
        amount: "Amount:",
        amountPlaceholder: "Enter amount",
        currency: "Currency:",
        currencyOptions: ["BGN → EUR", "EUR → BGN"],
        convert: "Convert",
        rate: "Rate: 1 EUR = 1.95583 BGN",
        resultText: "Result:",
        error: "Please enter a valid amount."
    }
};

const languageSelect = document.getElementById("language");
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const resultElement = document.getElementById("result");
const button = document.getElementById("converter");
const rateElement = document.querySelector(".rate");

const RATE = 1.95583;

function changeLanguage(lang) {
    document.querySelector("h1").textContent = translations[lang].title;
    document.querySelector('label[for="amount"]').textContent = translations[lang].amount;
    amountInput.placeholder = translations[lang].amountPlaceholder;
    document.querySelector('label[for="currency"]').textContent = translations[lang].currency;
    currencySelect.options[0].text = translations[lang].currencyOptions[0];
    currencySelect.options[1].text = translations[lang].currencyOptions[1];
    button.textContent = translations[lang].convert;
    rateElement.textContent = translations[lang].rate;
    resultElement.textContent = translations[lang].resultText;
}

languageSelect.addEventListener("change", () => {
    changeLanguage(languageSelect.value);
});

button.addEventListener("click", () => {
    const amount = Number(amountInput.value);
    const direction = currencySelect.value;
    const lang = languageSelect.value;

    if (amount <= 0 || isNaN(amount)) {
        resultElement.textContent = translations[lang].error;
        return;
    }

    let result;
    if (direction === "bgnToEur") {
        result = amount / RATE;
        resultElement.textContent = `${result.toFixed(2)} EUR`;
    } else {
        result = amount * RATE;
        resultElement.textContent = `${result.toFixed(2)} BGN`;
    }
});

changeLanguage("bg");




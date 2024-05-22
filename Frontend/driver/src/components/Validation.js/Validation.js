const validatePhone = (phone) => {
    var re = /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/;
    return re.test(String(phone));
}

const [phoneError, setPhoneError] = useState(false);

const handlePhoneChange = (phoneInput) => {
    setphone(phoneInput);
    if (!validatePhone(phoneInput)) {
        setError("הטלפון שהוזן אינו תקני");
        setPhoneError(true);
    } else {
        setError("");
        setPhoneError(false);
    }
};

// בתוך ה-JSX שלך




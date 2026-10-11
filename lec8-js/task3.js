const cleanText = (text) => {


    const withoutSpecialChars = text.replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, "");

    const result = withoutSpecialChars.trim().replace(/\s+/g, " ");

    return result;
};


const sample = "   @اماني$$$        حسين!   ";
const cleaned = cleanText(sample);

console.log(`النص الأصلي: "${sample}"`);
console.log(`النص المفلتر: "${cleaned}"`);
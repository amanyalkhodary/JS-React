const findLongestName = (...names) => {
  if (names.length > 10) {
    console.log("تنبيه: هذه الدالة تستقبل 10 اشخاص كحد اقصى فقط");
    return;
  }

  if (names.length === 0) {
    console.log("لم يتم ادخال اي اسماء");
    return;
  }

  const longestName = names.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  );

  console.log(`الاسم الأكثر حروفاً هو: "${longestName}" (عدد الحروف: ${longestName.length})`);
  return longestName;
};

findLongestName("أحمد", "محمد", "علي", "عبد الرحمن", "سارة");
/* ===== script-1.js (dating hiwalay na script) ===== */
/* =========================================================
   WORDORA LEARNING APP
   ALL DATA IS OFFLINE
========================================================= */


/* =========================================================
   VOCABULARY DATABASE

   IMPORTANT:
   Translator and Vocabulary use this same array.
========================================================= */

const vocabulary = [

    { icon: "🍎", english: "Apple", korean: "사과", koreanPronunciation: "sa-gwa", chinese: "苹果", chinesePinyin: "píng guǒ" },
    { icon: "🍌", english: "Banana", korean: "바나나", koreanPronunciation: "ba-na-na", chinese: "香蕉", chinesePinyin: "xiāng jiāo" },
    { icon: "💧", english: "Water", korean: "물", koreanPronunciation: "mul", chinese: "水", chinesePinyin: "shuǐ" },
    { icon: "📖", english: "Book", korean: "책", koreanPronunciation: "chaek", chinese: "书", chinesePinyin: "shū" },
    { icon: "🏠", english: "House", korean: "집", koreanPronunciation: "jip", chinese: "房子", chinesePinyin: "fáng zi" },
    { icon: "🍚", english: "Rice", korean: "쌀", koreanPronunciation: "ssal", chinese: "米饭", chinesePinyin: "mǐ fàn" },
    { icon: "👩‍🏫", english: "Teacher", korean: "선생님", koreanPronunciation: "seon-saeng-nim", chinese: "老师", chinesePinyin: "lǎo shī" },
    { icon: "🎓", english: "Student", korean: "학생", koreanPronunciation: "hak-saeng", chinese: "学生", chinesePinyin: "xué shēng" },
    { icon: "👨‍👩‍👧", english: "Family", korean: "가족", koreanPronunciation: "ga-jok", chinese: "家人", chinesePinyin: "jiā rén" },
    { icon: "🤝", english: "Friend", korean: "친구", koreanPronunciation: "chin-gu", chinese: "朋友", chinesePinyin: "péng yǒu" },
    { icon: "🐱", english: "Cat", korean: "고양이", koreanPronunciation: "go-yang-i", chinese: "猫", chinesePinyin: "māo" },
    { icon: "🐶", english: "Dog", korean: "개", koreanPronunciation: "gae", chinese: "狗", chinesePinyin: "gǒu" },
    { icon: "🍞", english: "Bread", korean: "빵", koreanPronunciation: "ppang", chinese: "面包", chinesePinyin: "miàn bāo" },
    { icon: "📱", english: "Phone", korean: "전화", koreanPronunciation: "jeon-hwa", chinese: "手机", chinesePinyin: "shǒu jī" },
    { icon: "🚗", english: "Car", korean: "자동차", koreanPronunciation: "ja-dong-cha", chinese: "汽车", chinesePinyin: "qì chē" },
    { icon: "☕", english: "Coffee", korean: "커피", koreanPronunciation: "keo-pi", chinese: "咖啡", chinesePinyin: "kā fēi" },
    { icon: "🍽️", english: "Food", korean: "음식", koreanPronunciation: "eum-sik", chinese: "食物", chinesePinyin: "shí wù" },
    { icon: "💰", english: "Money", korean: "돈", koreanPronunciation: "don", chinese: "钱", chinesePinyin: "qián" },
    { icon: "🏫", english: "School", korean: "학교", koreanPronunciation: "hak-gyo", chinese: "学校", chinesePinyin: "xué xiào" },
    { icon: "❤️", english: "Love", korean: "사랑", koreanPronunciation: "sa-rang", chinese: "爱", chinesePinyin: "ài" },
    { icon: "😊", english: "Happy", korean: "행복한", koreanPronunciation: "haeng-bok-han", chinese: "快乐", chinesePinyin: "kuài lè" },
    { icon: "🙏", english: "Thank You", korean: "감사합니다", koreanPronunciation: "gam-sa-ham-ni-da", chinese: "谢谢", chinesePinyin: "xiè xie" },
    { icon: "👋", english: "Hello", korean: "안녕하세요", koreanPronunciation: "an-nyeong-ha-se-yo", chinese: "你好", chinesePinyin: "nǐ hǎo" },
    { icon: "🪑", english: "Chair", korean: "의자", koreanPronunciation: "ui-ja", chinese: "椅子", chinesePinyin: "yǐ zi" },
    { icon: "🛏️", english: "Bed", korean: "침대", koreanPronunciation: "chim-dae", chinese: "床", chinesePinyin: "chuáng" },
    { icon: "🛋️", english: "Sofa", korean: "소파", koreanPronunciation: "so-pa", chinese: "沙发", chinesePinyin: "shā fā" },
    { icon: "💡", english: "Light", korean: "불", koreanPronunciation: "bul", chinese: "灯", chinesePinyin: "dēng" },
    { icon: "🧊", english: "Refrigerator", korean: "냉장고", koreanPronunciation: "naeng-jang-go", chinese: "冰箱", chinesePinyin: "bīng xiāng" },
    { icon: "🍽️", english: "Plate", korean: "접시", koreanPronunciation: "jeop-si", chinese: "盘子", chinesePinyin: "pán zi" },
    { icon: "🥄", english: "Spoon", korean: "숟가락", koreanPronunciation: "sut-ga-rak", chinese: "勺子", chinesePinyin: "sháo zi" },
    { icon: "🍴", english: "Fork", korean: "포크", koreanPronunciation: "po-keu", chinese: "叉子", chinesePinyin: "chā zi" },
    { icon: "🔪", english: "Knife", korean: "칼", koreanPronunciation: "kal", chinese: "刀", chinesePinyin: "dāo" },
    { icon: "🥤", english: "Cup", korean: "컵", koreanPronunciation: "keop", chinese: "杯子", chinesePinyin: "bēi zi" },
    { icon: "🍳", english: "Kitchen", korean: "주방", koreanPronunciation: "ju-bang", chinese: "厨房", chinesePinyin: "chú fáng" },
    { icon: "🚿", english: "Bathroom", korean: "화장실", koreanPronunciation: "hwa-jang-sil", chinese: "洗手间", chinesePinyin: "xǐ shǒu jiān" },
    { icon: "👕", english: "Shirt", korean: "셔츠", koreanPronunciation: "syeo-cheu", chinese: "衬衫", chinesePinyin: "chèn shān" },
    { icon: "👖", english: "Pants", korean: "바지", koreanPronunciation: "ba-ji", chinese: "裤子", chinesePinyin: "kù zi" },
    { icon: "👟", english: "Shoes", korean: "신발", koreanPronunciation: "sin-bal", chinese: "鞋子", chinesePinyin: "xié zi" },
    { icon: "🧢", english: "Hat", korean: "모자", koreanPronunciation: "mo-ja", chinese: "帽子", chinesePinyin: "mào zi" },
    { icon: "🧥", english: "Jacket", korean: "재킷", koreanPronunciation: "jae-kit", chinese: "夹克", chinesePinyin: "jiā kè" },
    { icon: "🎒", english: "Bag", korean: "가방", koreanPronunciation: "ga-bang", chinese: "包", chinesePinyin: "bāo" },
    { icon: "⌚", english: "Watch", korean: "시계", koreanPronunciation: "si-gye", chinese: "手表", chinesePinyin: "shǒu biǎo" },
    { icon: "🔑", english: "Key", korean: "열쇠", koreanPronunciation: "yeol-swae", chinese: "钥匙", chinesePinyin: "yào shi" },
    { icon: "📱", english: "Computer", korean: "컴퓨터", koreanPronunciation: "keom-pyu-teo", chinese: "电脑", chinesePinyin: "diàn nǎo" },
    { icon: "⌨️", english: "Keyboard", korean: "키보드", koreanPronunciation: "ki-bo-deu", chinese: "键盘", chinesePinyin: "jiàn pán" },
    { icon: "🖱️", english: "Mouse", korean: "마우스", koreanPronunciation: "ma-u-seu", chinese: "鼠标", chinesePinyin: "shǔ biāo" },
    { icon: "📺", english: "Television", korean: "텔레비전", koreanPronunciation: "tel-le-bi-jeon", chinese: "电视", chinesePinyin: "diàn shì" },
    { icon: "📷", english: "Camera", korean: "카메라", koreanPronunciation: "ka-me-ra", chinese: "相机", chinesePinyin: "xiàng jī" },
    { icon: "🎧", english: "Headphones", korean: "헤드폰", koreanPronunciation: "he-deu-pon", chinese: "耳机", chinesePinyin: "ěr jī" },
    { icon: "🔋", english: "Battery", korean: "배터리", koreanPronunciation: "bae-teo-ri", chinese: "电池", chinesePinyin: "diàn chí" },
    { icon: "🌧️", english: "Rain", korean: "비", koreanPronunciation: "bi", chinese: "雨", chinesePinyin: "yǔ" },
    { icon: "☁️", english: "Cloud", korean: "구름", koreanPronunciation: "gu-reum", chinese: "云", chinesePinyin: "yún" },
    { icon: "❄️", english: "Snow", korean: "눈", koreanPronunciation: "nun", chinese: "雪", chinesePinyin: "xuě" },
    { icon: "💨", english: "Wind", korean: "바람", koreanPronunciation: "ba-ram", chinese: "风", chinesePinyin: "fēng" },
    { icon: "🔥", english: "Fire", korean: "불", koreanPronunciation: "bul", chinese: "火", chinesePinyin: "huǒ" },
    { icon: "🌊", english: "Sea", korean: "바다", koreanPronunciation: "ba-da", chinese: "海", chinesePinyin: "hǎi" },
    { icon: "🏔️", english: "Mountain", korean: "산", koreanPronunciation: "san", chinese: "山", chinesePinyin: "shān" },
    { icon: "😢", english: "Sad", korean: "슬프다", koreanPronunciation: "seul-peu-da", chinese: "难过", chinesePinyin: "nán guò" },
    { icon: "😡", english: "Angry", korean: "화나다", koreanPronunciation: "hwa-na-da", chinese: "生气", chinesePinyin: "shēng qì" },
    { icon: "😴", english: "Sleepy", korean: "졸리다", koreanPronunciation: "jol-li-da", chinese: "困", chinesePinyin: "kùn" },
    { icon: "😊", english: "Smile", korean: "미소", koreanPronunciation: "mi-so", chinese: "微笑", chinesePinyin: "wēi xiào" },
    { icon: "💪", english: "Strong", korean: "강하다", koreanPronunciation: "gang-ha-da", chinese: "强", chinesePinyin: "qiáng" },
    { icon: "🏃", english: "Fast", korean: "빠르다", koreanPronunciation: "ppa-reu-da", chinese: "快", chinesePinyin: "kuài" },
    { icon: "🐢", english: "Slow", korean: "느리다", koreanPronunciation: "neu-ri-da", chinese: "慢", chinesePinyin: "màn" },
    { icon: "⭐", english: "Important", korean: "중요하다", koreanPronunciation: "jung-yo-ha-da", chinese: "重要", chinesePinyin: "zhòng yào" },
    { icon: "🚶", english: "Walk", korean: "걷다", koreanPronunciation: "geot-da", chinese: "走路", chinesePinyin: "zǒu lù" },
    { icon: "🏃", english: "Run", korean: "달리다", koreanPronunciation: "dal-li-da", chinese: "跑步", chinesePinyin: "pǎo bù" },
    { icon: "🍴", english: "Eat", korean: "먹다", koreanPronunciation: "meok-da", chinese: "吃", chinesePinyin: "chī" },
    { icon: "🥤", english: "Drink", korean: "마시다", koreanPronunciation: "ma-si-da", chinese: "喝", chinesePinyin: "hē" },
    { icon: "😴", english: "Sleep", korean: "자다", koreanPronunciation: "ja-da", chinese: "睡觉", chinesePinyin: "shuì jiào" },
    { icon: "👀", english: "See", korean: "보다", koreanPronunciation: "bo-da", chinese: "看", chinesePinyin: "kàn" },
    { icon: "👂", english: "Listen", korean: "듣다", koreanPronunciation: "deut-da", chinese: "听", chinesePinyin: "tīng" },
    { icon: "🗣️", english: "Speak", korean: "말하다", koreanPronunciation: "mal-ha-da", chinese: "说话", chinesePinyin: "shuō huà" },
    { icon: "📖", english: "Read", korean: "읽다", koreanPronunciation: "ik-da", chinese: "读", chinesePinyin: "dú" },
    { icon: "✍️", english: "Write", korean: "쓰다", koreanPronunciation: "sseu-da", chinese: "写", chinesePinyin: "xiě" },
    { icon: "🎮", english: "Play", korean: "놀다", koreanPronunciation: "nol-da", chinese: "玩", chinesePinyin: "wán" },
    { icon: "💼", english: "Work", korean: "일하다", koreanPronunciation: "il-ha-da", chinese: "工作", chinesePinyin: "gōng zuò" },
    { icon: "📚", english: "Study", korean: "공부하다", koreanPronunciation: "gong-bu-ha-da", chinese: "学习", chinesePinyin: "xué xí" },
    { icon: "🚪", english: "Open", korean: "열다", koreanPronunciation: "yeol-da", chinese: "打开", chinesePinyin: "dǎ kāi" },
    { icon: "🔒", english: "Close", korean: "닫다", koreanPronunciation: "dat-da", chinese: "关闭", chinesePinyin: "guān bì" },
    { icon: "🎁", english: "Give", korean: "주다", koreanPronunciation: "ju-da", chinese: "给", chinesePinyin: "gěi" },
    { icon: "🤲", english: "Receive", korean: "받다", koreanPronunciation: "bat-da", chinese: "收到", chinesePinyin: "shōu dào" },
    { icon: "🛒", english: "Buy", korean: "사다", koreanPronunciation: "sa-da", chinese: "买", chinesePinyin: "mǎi" },
    { icon: "💰", english: "Sell", korean: "팔다", koreanPronunciation: "pal-da", chinese: "卖", chinesePinyin: "mài" },
    { icon: "🔍", english: "Find", korean: "찾다", koreanPronunciation: "chat-da", chinese: "寻找", chinesePinyin: "xún zhǎo" },
    { icon: "💕", english: "Like", korean: "좋아하다", koreanPronunciation: "jo-a-ha-da", chinese: "喜欢", chinesePinyin: "xǐ huan" },
    { icon: "🚫", english: "Dislike", korean: "싫어하다", koreanPronunciation: "silh-eo-ha-da", chinese: "不喜欢", chinesePinyin: "bù xǐ huan" },
    { icon: "💭", english: "Think", korean: "생각하다", koreanPronunciation: "saeng-gak-ha-da", chinese: "想", chinesePinyin: "xiǎng" },
    { icon: "🧠", english: "Know", korean: "알다", koreanPronunciation: "al-da", chinese: "知道", chinesePinyin: "zhī dào" },
    { icon: "❓", english: "Ask", korean: "묻다", koreanPronunciation: "mut-da", chinese: "问", chinesePinyin: "wèn" },
    { icon: "💬", english: "Answer", korean: "대답하다", koreanPronunciation: "dae-dap-ha-da", chinese: "回答", chinesePinyin: "huí dá" },
    { icon: "🤝", english: "Help", korean: "돕다", koreanPronunciation: "dop-da", chinese: "帮助", chinesePinyin: "bāng zhù" },
    { icon: "🙏", english: "Thank", korean: "감사하다", koreanPronunciation: "gam-sa-ha-da", chinese: "感谢", chinesePinyin: "gǎn xiè" },
    { icon: "🤲", english: "Need", korean: "필요하다", koreanPronunciation: "pil-yo-ha-da", chinese: "需要", chinesePinyin: "xū yào" },
    { icon: "⭐", english: "Want", korean: "원하다", koreanPronunciation: "won-ha-da", chinese: "想要", chinesePinyin: "xiǎng yào" },
    { icon: "🌅", english: "Morning", korean: "아침", koreanPronunciation: "a-chim", chinese: "早上", chinesePinyin: "zǎo shang" },
    { icon: "☀️", english: "Afternoon", korean: "오후", koreanPronunciation: "o-hu", chinese: "下午", chinesePinyin: "xià wǔ" },
    { icon: "🌙", english: "Evening", korean: "저녁", koreanPronunciation: "jeo-nyeok", chinese: "晚上", chinesePinyin: "wǎn shang" },
    { icon: "🌃", english: "Night", korean: "밤", koreanPronunciation: "bam", chinese: "夜晚", chinesePinyin: "yè wǎn" },
    { icon: "📅", english: "Today", korean: "오늘", koreanPronunciation: "o-neul", chinese: "今天", chinesePinyin: "jīn tiān" },
    { icon: "⬅️", english: "Yesterday", korean: "어제", koreanPronunciation: "eo-je", chinese: "昨天", chinesePinyin: "zuó tiān" },
    { icon: "➡️", english: "Tomorrow", korean: "내일", koreanPronunciation: "nae-il", chinese: "明天", chinesePinyin: "míng tiān" },
    { icon: "📆", english: "Week", korean: "주", koreanPronunciation: "ju", chinese: "星期", chinesePinyin: "xīng qī" },
    { icon: "🗓️", english: "Month", korean: "달", koreanPronunciation: "dal", chinese: "月份", chinesePinyin: "yuè fèn" },
    { icon: "🎂", english: "Birthday", korean: "생일", koreanPronunciation: "saeng-il", chinese: "生日", chinesePinyin: "shēng rì" },
    { icon: "1️⃣", english: "One", korean: "하나", koreanPronunciation: "ha-na", chinese: "一", chinesePinyin: "yī" },
    { icon: "2️⃣", english: "Two", korean: "둘", koreanPronunciation: "dul", chinese: "二", chinesePinyin: "èr" },
    { icon: "3️⃣", english: "Three", korean: "셋", koreanPronunciation: "set", chinese: "三", chinesePinyin: "sān" },
    { icon: "4️⃣", english: "Four", korean: "넷", koreanPronunciation: "net", chinese: "四", chinesePinyin: "sì" },
    { icon: "5️⃣", english: "Five", korean: "다섯", koreanPronunciation: "da-seot", chinese: "五", chinesePinyin: "wǔ" },
    { icon: "🔢", english: "Number", korean: "숫자", koreanPronunciation: "sut-ja", chinese: "数字", chinesePinyin: "shù zì" },
    { icon: "6️⃣", english: "Six", korean: "여섯", koreanPronunciation: "yeo-seot", chinese: "六", chinesePinyin: "liù" },
    { icon: "7️⃣", english: "Seven", korean: "일곱", koreanPronunciation: "il-gop", chinese: "七", chinesePinyin: "qī" },
    { icon: "8️⃣", english: "Eight", korean: "여덟", koreanPronunciation: "yeo-deol", chinese: "八", chinesePinyin: "bā" },
    { icon: "9️⃣", english: "Nine", korean: "아홉", koreanPronunciation: "a-hop", chinese: "九", chinesePinyin: "jiǔ" },
    { icon: "🔟", english: "Ten", korean: "열", koreanPronunciation: "yeol", chinese: "十", chinesePinyin: "shí" },
    { icon: "1️⃣1️⃣", english: "Eleven", korean: "열하나", koreanPronunciation: "yeol-ha-na", chinese: "十一", chinesePinyin: "shí yī" },
    { icon: "1️⃣2️⃣", english: "Twelve", korean: "열둘", koreanPronunciation: "yeol-dul", chinese: "十二", chinesePinyin: "shí èr" },
    { icon: "1️⃣3️⃣", english: "Thirteen", korean: "열셋", koreanPronunciation: "yeol-set", chinese: "十三", chinesePinyin: "shí sān" },
    { icon: "1️⃣4️⃣", english: "Fourteen", korean: "열넷", koreanPronunciation: "yeol-net", chinese: "十四", chinesePinyin: "shí sì" },
    { icon: "1️⃣5️⃣", english: "Fifteen", korean: "열다섯", koreanPronunciation: "yeol-da-seot", chinese: "十五", chinesePinyin: "shí wǔ" },
    { icon: "1️⃣6️⃣", english: "Sixteen", korean: "열여섯", koreanPronunciation: "yeol-yeo-seot", chinese: "十六", chinesePinyin: "shí liù" },
    { icon: "1️⃣7️⃣", english: "Seventeen", korean: "열일곱", koreanPronunciation: "yeol-il-gop", chinese: "十七", chinesePinyin: "shí qī" },
    { icon: "1️⃣8️⃣", english: "Eighteen", korean: "열여덟", koreanPronunciation: "yeol-yeo-deol", chinese: "十八", chinesePinyin: "shí bā" },
    { icon: "1️⃣9️⃣", english: "Nineteen", korean: "열아홉", koreanPronunciation: "yeol-a-hop", chinese: "十九", chinesePinyin: "shí jiǔ" },
    { icon: "2️⃣0️⃣", english: "Twenty", korean: "스물", koreanPronunciation: "seu-mul", chinese: "二十", chinesePinyin: "èr shí" },
    { icon: "2️⃣1️⃣", english: "Twenty-One", korean: "스물하나", koreanPronunciation: "seu-mul-ha-na", chinese: "二十一", chinesePinyin: "èr shí yī" },
    { icon: "2️⃣2️⃣", english: "Twenty-Two", korean: "스물둘", koreanPronunciation: "seu-mul-dul", chinese: "二十二", chinesePinyin: "èr shí èr" },
    { icon: "2️⃣3️⃣", english: "Twenty-Three", korean: "스물셋", koreanPronunciation: "seu-mul-set", chinese: "二十三", chinesePinyin: "èr shí sān" },
    { icon: "2️⃣4️⃣", english: "Twenty-Four", korean: "스물넷", koreanPronunciation: "seu-mul-net", chinese: "二十四", chinesePinyin: "èr shí sì" },
    { icon: "2️⃣5️⃣", english: "Twenty-Five", korean: "스물다섯", koreanPronunciation: "seu-mul-da-seot", chinese: "二十五", chinesePinyin: "èr shí wǔ" },
    { icon: "2️⃣6️⃣", english: "Twenty-Six", korean: "스물여섯", koreanPronunciation: "seu-mul-yeo-seot", chinese: "二十六", chinesePinyin: "èr shí liù" },
    { icon: "2️⃣7️⃣", english: "Twenty-Seven", korean: "스물일곱", koreanPronunciation: "seu-mul-il-gop", chinese: "二十七", chinesePinyin: "èr shí qī" },
    { icon: "2️⃣8️⃣", english: "Twenty-Eight", korean: "스물여덟", koreanPronunciation: "seu-mul-yeo-deol", chinese: "二十八", chinesePinyin: "èr shí bā" },
    { icon: "2️⃣9️⃣", english: "Twenty-Nine", korean: "스물아홉", koreanPronunciation: "seu-mul-a-hop", chinese: "二十九", chinesePinyin: "èr shí jiǔ" },
    { icon: "3️⃣0️⃣", english: "Thirty", korean: "서른", koreanPronunciation: "seo-reun", chinese: "三十", chinesePinyin: "sān shí" },
    { icon: "3️⃣1️⃣", english: "Thirty-One", korean: "서른하나", koreanPronunciation: "seo-reun-ha-na", chinese: "三十一", chinesePinyin: "sān shí yī" },
    { icon: "3️⃣2️⃣", english: "Thirty-Two", korean: "서른둘", koreanPronunciation: "seo-reun-dul", chinese: "三十二", chinesePinyin: "sān shí èr" },
    { icon: "3️⃣3️⃣", english: "Thirty-Three", korean: "서른셋", koreanPronunciation: "seo-reun-set", chinese: "三十三", chinesePinyin: "sān shí sān" },
    { icon: "3️⃣4️⃣", english: "Thirty-Four", korean: "서른넷", koreanPronunciation: "seo-reun-net", chinese: "三十四", chinesePinyin: "sān shí sì" },
    { icon: "3️⃣5️⃣", english: "Thirty-Five", korean: "서른다섯", koreanPronunciation: "seo-reun-da-seot", chinese: "三十五", chinesePinyin: "sān shí wǔ" },
    { icon: "3️⃣6️⃣", english: "Thirty-Six", korean: "서른여섯", koreanPronunciation: "seo-reun-yeo-seot", chinese: "三十六", chinesePinyin: "sān shí liù" },
    { icon: "3️⃣7️⃣", english: "Thirty-Seven", korean: "서른일곱", koreanPronunciation: "seo-reun-il-gop", chinese: "三十七", chinesePinyin: "sān shí qī" },
    { icon: "3️⃣8️⃣", english: "Thirty-Eight", korean: "서른여덟", koreanPronunciation: "seo-reun-yeo-deol", chinese: "三十八", chinesePinyin: "sān shí bā" },
    { icon: "3️⃣9️⃣", english: "Thirty-Nine", korean: "서른아홉", koreanPronunciation: "seo-reun-a-hop", chinese: "三十九", chinesePinyin: "sān shí jiǔ" },
    { icon: "4️⃣0️⃣", english: "Forty", korean: "마흔", koreanPronunciation: "ma-heun", chinese: "四十", chinesePinyin: "sì shí" },
    { icon: "4️⃣1️⃣", english: "Forty-One", korean: "마흔하나", koreanPronunciation: "ma-heun-ha-na", chinese: "四十一", chinesePinyin: "sì shí yī" },
    { icon: "4️⃣2️⃣", english: "Forty-Two", korean: "마흔둘", koreanPronunciation: "ma-heun-dul", chinese: "四十二", chinesePinyin: "sì shí èr" },
    { icon: "4️⃣3️⃣", english: "Forty-Three", korean: "마흔셋", koreanPronunciation: "ma-heun-set", chinese: "四十三", chinesePinyin: "sì shí sān" },
    { icon: "4️⃣4️⃣", english: "Forty-Four", korean: "마흔넷", koreanPronunciation: "ma-heun-net", chinese: "四十四", chinesePinyin: "sì shí sì" },
    { icon: "4️⃣5️⃣", english: "Forty-Five", korean: "마흔다섯", koreanPronunciation: "ma-heun-da-seot", chinese: "四十五", chinesePinyin: "sì shí wǔ" },
    { icon: "4️⃣6️⃣", english: "Forty-Six", korean: "마흔여섯", koreanPronunciation: "ma-heun-yeo-seot", chinese: "四十六", chinesePinyin: "sì shí liù" },
    { icon: "4️⃣7️⃣", english: "Forty-Seven", korean: "마흔일곱", koreanPronunciation: "ma-heun-il-gop", chinese: "四十七", chinesePinyin: "sì shí qī" },
    { icon: "4️⃣8️⃣", english: "Forty-Eight", korean: "마흔여덟", koreanPronunciation: "ma-heun-yeo-deol", chinese: "四十八", chinesePinyin: "sì shí bā" },
    { icon: "4️⃣9️⃣", english: "Forty-Nine", korean: "마흔아홉", koreanPronunciation: "ma-heun-a-hop", chinese: "四十九", chinesePinyin: "sì shí jiǔ" },
    { icon: "5️⃣0️⃣", english: "Fifty", korean: "쉰", koreanPronunciation: "swin", chinese: "五十", chinesePinyin: "wǔ shí" },
    { icon: "5️⃣1️⃣", english: "Fifty-One", korean: "쉰하나", koreanPronunciation: "swin-ha-na", chinese: "五十一", chinesePinyin: "wǔ shí yī" },
    { icon: "5️⃣2️⃣", english: "Fifty-Two", korean: "쉰둘", koreanPronunciation: "swin-dul", chinese: "五十二", chinesePinyin: "wǔ shí èr" },
    { icon: "5️⃣3️⃣", english: "Fifty-Three", korean: "쉰셋", koreanPronunciation: "swin-set", chinese: "五十三", chinesePinyin: "wǔ shí sān" },
    { icon: "5️⃣4️⃣", english: "Fifty-Four", korean: "쉰넷", koreanPronunciation: "swin-net", chinese: "五十四", chinesePinyin: "wǔ shí sì" },
    { icon: "5️⃣5️⃣", english: "Fifty-Five", korean: "쉰다섯", koreanPronunciation: "swin-da-seot", chinese: "五十五", chinesePinyin: "wǔ shí wǔ" },
    { icon: "5️⃣6️⃣", english: "Fifty-Six", korean: "쉰여섯", koreanPronunciation: "swin-yeo-seot", chinese: "五十六", chinesePinyin: "wǔ shí liù" },
    { icon: "5️⃣7️⃣", english: "Fifty-Seven", korean: "쉰일곱", koreanPronunciation: "swin-il-gop", chinese: "五十七", chinesePinyin: "wǔ shí qī" },
    { icon: "5️⃣8️⃣", english: "Fifty-Eight", korean: "쉰여덟", koreanPronunciation: "swin-yeo-deol", chinese: "五十八", chinesePinyin: "wǔ shí bā" },
    { icon: "5️⃣9️⃣", english: "Fifty-Nine", korean: "쉰아홉", koreanPronunciation: "swin-a-hop", chinese: "五十九", chinesePinyin: "wǔ shí jiǔ" },
    { icon: "6️⃣0️⃣", english: "Sixty", korean: "예순", koreanPronunciation: "ye-sun", chinese: "六十", chinesePinyin: "liù shí" },
    { icon: "6️⃣1️⃣", english: "Sixty-One", korean: "예순하나", koreanPronunciation: "ye-sun-ha-na", chinese: "六十一", chinesePinyin: "liù shí yī" },
    { icon: "6️⃣2️⃣", english: "Sixty-Two", korean: "예순둘", koreanPronunciation: "ye-sun-dul", chinese: "六十二", chinesePinyin: "liù shí èr" },
    { icon: "6️⃣3️⃣", english: "Sixty-Three", korean: "예순셋", koreanPronunciation: "ye-sun-set", chinese: "六十三", chinesePinyin: "liù shí sān" },
    { icon: "6️⃣4️⃣", english: "Sixty-Four", korean: "예순넷", koreanPronunciation: "ye-sun-net", chinese: "六十四", chinesePinyin: "liù shí sì" },
    { icon: "6️⃣5️⃣", english: "Sixty-Five", korean: "예순다섯", koreanPronunciation: "ye-sun-da-seot", chinese: "六十五", chinesePinyin: "liù shí wǔ" },
    { icon: "6️⃣6️⃣", english: "Sixty-Six", korean: "예순여섯", koreanPronunciation: "ye-sun-yeo-seot", chinese: "六十六", chinesePinyin: "liù shí liù" },
    { icon: "6️⃣7️⃣", english: "Sixty-Seven", korean: "예순일곱", koreanPronunciation: "ye-sun-il-gop", chinese: "六十七", chinesePinyin: "liù shí qī" },
    { icon: "6️⃣8️⃣", english: "Sixty-Eight", korean: "예순여덟", koreanPronunciation: "ye-sun-yeo-deol", chinese: "六十八", chinesePinyin: "liù shí bā" },
    { icon: "6️⃣9️⃣", english: "Sixty-Nine", korean: "예순아홉", koreanPronunciation: "ye-sun-a-hop", chinese: "六十九", chinesePinyin: "liù shí jiǔ" },
    { icon: "7️⃣0️⃣", english: "Seventy", korean: "일흔", koreanPronunciation: "il-heun", chinese: "七十", chinesePinyin: "qī shí" },
    { icon: "7️⃣1️⃣", english: "Seventy-One", korean: "일흔하나", koreanPronunciation: "il-heun-ha-na", chinese: "七十一", chinesePinyin: "qī shí yī" },
    { icon: "7️⃣2️⃣", english: "Seventy-Two", korean: "일흔둘", koreanPronunciation: "il-heun-dul", chinese: "七十二", chinesePinyin: "qī shí èr" },
    { icon: "7️⃣3️⃣", english: "Seventy-Three", korean: "일흔셋", koreanPronunciation: "il-heun-set", chinese: "七十三", chinesePinyin: "qī shí sān" },
    { icon: "7️⃣4️⃣", english: "Seventy-Four", korean: "일흔넷", koreanPronunciation: "il-heun-net", chinese: "七十四", chinesePinyin: "qī shí sì" },
    { icon: "7️⃣5️⃣", english: "Seventy-Five", korean: "일흔다섯", koreanPronunciation: "il-heun-da-seot", chinese: "七十五", chinesePinyin: "qī shí wǔ" },
    { icon: "7️⃣6️⃣", english: "Seventy-Six", korean: "일흔여섯", koreanPronunciation: "il-heun-yeo-seot", chinese: "七十六", chinesePinyin: "qī shí liù" },
    { icon: "7️⃣7️⃣", english: "Seventy-Seven", korean: "일흔일곱", koreanPronunciation: "il-heun-il-gop", chinese: "七十七", chinesePinyin: "qī shí qī" },
    { icon: "7️⃣8️⃣", english: "Seventy-Eight", korean: "일흔여덟", koreanPronunciation: "il-heun-yeo-deol", chinese: "七十八", chinesePinyin: "qī shí bā" },
    { icon: "7️⃣9️⃣", english: "Seventy-Nine", korean: "일흔아홉", koreanPronunciation: "il-heun-a-hop", chinese: "七十九", chinesePinyin: "qī shí jiǔ" },
    { icon: "8️⃣0️⃣", english: "Eighty", korean: "여든", koreanPronunciation: "yeo-deun", chinese: "八十", chinesePinyin: "bā shí" },
    { icon: "8️⃣1️⃣", english: "Eighty-One", korean: "여든하나", koreanPronunciation: "yeo-deun-ha-na", chinese: "八十一", chinesePinyin: "bā shí yī" },
    { icon: "8️⃣2️⃣", english: "Eighty-Two", korean: "여든둘", koreanPronunciation: "yeo-deun-dul", chinese: "八十二", chinesePinyin: "bā shí èr" },
    { icon: "8️⃣3️⃣", english: "Eighty-Three", korean: "여든셋", koreanPronunciation: "yeo-deun-set", chinese: "八十三", chinesePinyin: "bā shí sān" },
    { icon: "8️⃣4️⃣", english: "Eighty-Four", korean: "여든넷", koreanPronunciation: "yeo-deun-net", chinese: "八十四", chinesePinyin: "bā shí sì" },
    { icon: "8️⃣5️⃣", english: "Eighty-Five", korean: "여든다섯", koreanPronunciation: "yeo-deun-da-seot", chinese: "八十五", chinesePinyin: "bā shí wǔ" },
    { icon: "8️⃣6️⃣", english: "Eighty-Six", korean: "여든여섯", koreanPronunciation: "yeo-deun-yeo-seot", chinese: "八十六", chinesePinyin: "bā shí liù" },
    { icon: "8️⃣7️⃣", english: "Eighty-Seven", korean: "여든일곱", koreanPronunciation: "yeo-deun-il-gop", chinese: "八十七", chinesePinyin: "bā shí qī" },
    { icon: "8️⃣8️⃣", english: "Eighty-Eight", korean: "여든여덟", koreanPronunciation: "yeo-deun-yeo-deol", chinese: "八十八", chinesePinyin: "bā shí bā" },
    { icon: "8️⃣9️⃣", english: "Eighty-Nine", korean: "여든아홉", koreanPronunciation: "yeo-deun-a-hop", chinese: "八十九", chinesePinyin: "bā shí jiǔ" },
    { icon: "9️⃣0️⃣", english: "Ninety", korean: "아흔", koreanPronunciation: "a-heun", chinese: "九十", chinesePinyin: "jiǔ shí" },
    { icon: "9️⃣1️⃣", english: "Ninety-One", korean: "아흔하나", koreanPronunciation: "a-heun-ha-na", chinese: "九十一", chinesePinyin: "jiǔ shí yī" },
    { icon: "9️⃣2️⃣", english: "Ninety-Two", korean: "아흔둘", koreanPronunciation: "a-heun-dul", chinese: "九十二", chinesePinyin: "jiǔ shí èr" },
    { icon: "9️⃣3️⃣", english: "Ninety-Three", korean: "아흔셋", koreanPronunciation: "a-heun-set", chinese: "九十三", chinesePinyin: "jiǔ shí sān" },
    { icon: "9️⃣4️⃣", english: "Ninety-Four", korean: "아흔넷", koreanPronunciation: "a-heun-net", chinese: "九十四", chinesePinyin: "jiǔ shí sì" },
    { icon: "9️⃣5️⃣", english: "Ninety-Five", korean: "아흔다섯", koreanPronunciation: "a-heun-da-seot", chinese: "九十五", chinesePinyin: "jiǔ shí wǔ" },
    { icon: "9️⃣6️⃣", english: "Ninety-Six", korean: "아흔여섯", koreanPronunciation: "a-heun-yeo-seot", chinese: "九十六", chinesePinyin: "jiǔ shí liù" },
    { icon: "9️⃣7️⃣", english: "Ninety-Seven", korean: "아흔일곱", koreanPronunciation: "a-heun-il-gop", chinese: "九十七", chinesePinyin: "jiǔ shí qī" },
    { icon: "9️⃣8️⃣", english: "Ninety-Eight", korean: "아흔여덟", koreanPronunciation: "a-heun-yeo-deol", chinese: "九十八", chinesePinyin: "jiǔ shí bā" },
    { icon: "9️⃣9️⃣", english: "Ninety-Nine", korean: "아흔아홉", koreanPronunciation: "a-heun-a-hop", chinese: "九十九", chinesePinyin: "jiǔ shí jiǔ" },
    { icon: "💯", english: "One Hundred", korean: "백", koreanPronunciation: "baek", chinese: "一百", chinesePinyin: "yī bǎi" },
    { icon: "🔴", english: "Red", korean: "빨간색", koreanPronunciation: "ppal-gan-saek", chinese: "红色", chinesePinyin: "hóng sè" },
    { icon: "🔵", english: "Blue", korean: "파란색", koreanPronunciation: "pa-ran-saek", chinese: "蓝色", chinesePinyin: "lán sè" },
    { icon: "🟡", english: "Yellow", korean: "노란색", koreanPronunciation: "no-ran-saek", chinese: "黄色", chinesePinyin: "huáng sè" },
    { icon: "🟢", english: "Green", korean: "초록색", koreanPronunciation: "cho-rok-saek", chinese: "绿色", chinesePinyin: "lǜ sè" },
    { icon: "🟠", english: "Orange", korean: "주황색", koreanPronunciation: "ju-hwang-saek", chinese: "橙色", chinesePinyin: "chéng sè" },
    { icon: "🟣", english: "Purple", korean: "보라색", koreanPronunciation: "bo-ra-saek", chinese: "紫色", chinesePinyin: "zǐ sè" },
    { icon: "🎀", english: "Pink", korean: "분홍색", koreanPronunciation: "bun-hong-saek", chinese: "粉色", chinesePinyin: "fěn sè" },
    { icon: "🟤", english: "Brown", korean: "갈색", koreanPronunciation: "gal-saek", chinese: "棕色", chinesePinyin: "zōng sè" },
    { icon: "⚫", english: "Black", korean: "검은색", koreanPronunciation: "geom-eun-saek", chinese: "黑色", chinesePinyin: "hēi sè" },
    { icon: "⚪", english: "White", korean: "흰색", koreanPronunciation: "huin-saek", chinese: "白色", chinesePinyin: "bái sè" },
    { icon: "🌚", english: "Gray", korean: "회색", koreanPronunciation: "hoe-saek", chinese: "灰色", chinesePinyin: "huī sè" },
    { icon: "💚", english: "Light Green", korean: "연두색", koreanPronunciation: "yeon-du-saek", chinese: "浅绿色", chinesePinyin: "qiǎn lǜ sè" },
    { icon: "💜", english: "Lavender", korean: "라벤더색", koreanPronunciation: "ra-ben-deo-saek", chinese: "薰衣草色", chinesePinyin: "xūn yī cǎo sè" },
    { icon: "🔷", english: "Dark Blue", korean: "진한 파란색", koreanPronunciation: "jin-han pa-ran-saek", chinese: "深蓝色", chinesePinyin: "shēn lán sè" },
    { icon: "🟩", english: "Dark Green", korean: "진한 초록색", koreanPronunciation: "jin-han cho-rok-saek", chinese: "深绿色", chinesePinyin: "shēn lǜ sè" },
    { icon: "❤️", english: "Dark Red", korean: "진한 빨간색", koreanPronunciation: "jin-han ppal-gan-saek", chinese: "深红色", chinesePinyin: "shēn hóng sè" },
    { icon: "🟪", english: "Dark Purple", korean: "진한 보라색", koreanPronunciation: "jin-han bo-ra-saek", chinese: "深紫色", chinesePinyin: "shēn zǐ sè" },
    { icon: "🟫", english: "Dark Brown", korean: "진한 갈색", koreanPronunciation: "jin-han gal-saek", chinese: "深棕色", chinesePinyin: "shēn zōng sè" },
    { icon: "🌈", english: "Rainbow", korean: "무지개색", koreanPronunciation: "mu-ji-gae-saek", chinese: "彩虹色", chinesePinyin: "cǎi hóng sè" },
    { icon: "🥇", english: "Gold", korean: "금색", koreanPronunciation: "geum-saek", chinese: "金色", chinesePinyin: "jīn sè" },
    { icon: "🥈", english: "Silver", korean: "은색", koreanPronunciation: "eun-saek", chinese: "银色", chinesePinyin: "yín sè" },
    { icon: "🟤", english: "Beige", korean: "베이지색", koreanPronunciation: "be-i-ji-saek", chinese: "米色", chinesePinyin: "mǐ sè" },
    { icon: "🟨", english: "Cream", korean: "크림색", koreanPronunciation: "keu-rim-saek", chinese: "奶油色", chinesePinyin: "nǎi yóu sè" },
    { icon: "🌿", english: "Mint", korean: "민트색", koreanPronunciation: "min-teu-saek", chinese: "薄荷色", chinesePinyin: "bò hé sè" },
    { icon: "💙", english: "Navy", korean: "남색", koreanPronunciation: "nam-saek", chinese: "藏青色", chinesePinyin: "zàng qīng sè" },
    { icon: "💗", english: "Magenta", korean: "자홍색", koreanPronunciation: "ja-hong-saek", chinese: "品红色", chinesePinyin: "pǐn hóng sè" },
    { icon: "🌺", english: "Coral", korean: "산호색", koreanPronunciation: "san-ho-saek", chinese: "珊瑚色", chinesePinyin: "shān hú sè" },
    { icon: "🍷", english: "Maroon", korean: "적갈색", koreanPronunciation: "jeok-gal-saek", chinese: "栗色", chinesePinyin: "lì sè" },
    { icon: "🌹", english: "Rose", korean: "장미색", koreanPronunciation: "jang-mi-saek", chinese: "玫瑰色", chinesePinyin: "méi guī sè" },
    { icon: "🍑", english: "Peach", korean: "복숭아색", koreanPronunciation: "bok-sung-a-saek", chinese: "桃色", chinesePinyin: "táo sè" },
    { icon: "🍋", english: "Lemon Yellow", korean: "레몬색", koreanPronunciation: "re-mon-saek", chinese: "柠檬黄", chinesePinyin: "níng méng huáng" },
    { icon: "🌻", english: "Mustard", korean: "겨자색", koreanPronunciation: "gyeo-ja-saek", chinese: "芥末黄", chinesePinyin: "jiè mò huáng" },
    { icon: "🍃", english: "Olive", korean: "올리브색", koreanPronunciation: "ol-li-beu-saek", chinese: "橄榄色", chinesePinyin: "gǎn lǎn sè" },
    { icon: "🌲", english: "Forest Green", korean: "숲색", koreanPronunciation: "sup-saek", chinese: "森林绿", chinesePinyin: "sēn lín lǜ" },
    { icon: "🧊", english: "Turquoise", korean: "청록색", koreanPronunciation: "cheong-nok-saek", chinese: "绿松石色", chinesePinyin: "lǜ sōng shí sè" },
    { icon: "🍇", english: "Plum", korean: "자두색", koreanPronunciation: "ja-du-saek", chinese: "梅子色", chinesePinyin: "méi zi sè" },
    { icon: "💎", english: "Teal", korean: "청록색", koreanPronunciation: "cheong-nok-saek", chinese: "蓝绿色", chinesePinyin: "lán lǜ sè" },
    { icon: "🧡", english: "Burnt Orange", korean: "짙은 주황색", koreanPronunciation: "jit-eun ju-hwang-saek", chinese: "焦橙色", chinesePinyin: "jiāo chéng sè" },
    { icon: "💛", english: "Golden Yellow", korean: "황금색", koreanPronunciation: "hwang-geum-saek", chinese: "金黄色", chinesePinyin: "jīn huáng sè" },
    { icon: "🤍", english: "Ivory", korean: "상아색", koreanPronunciation: "sang-a-saek", chinese: "象牙色", chinesePinyin: "xiàng yá sè" },
    { icon: "🤎", english: "Chocolate", korean: "초콜릿색", koreanPronunciation: "cho-kol-lit-saek", chinese: "巧克力色", chinesePinyin: "qiǎo kè lì sè" },
    { icon: "🖤", english: "Jet Black", korean: "칠흑색", koreanPronunciation: "chil-heuk-saek", chinese: "乌黑色", chinesePinyin: "wū hēi sè" },
    { icon: "🌷", english: "Fuchsia", korean: "푸시아색", koreanPronunciation: "pu-si-a-saek", chinese: "紫红色", chinesePinyin: "zǐ hóng sè" },
    { icon: "🐶", english: "Dog", korean: "개", koreanPronunciation: "gae", chinese: "狗", chinesePinyin: "gǒu" },
    { icon: "🐱", english: "Cat", korean: "고양이", koreanPronunciation: "go-yang-i", chinese: "猫", chinesePinyin: "māo" },
    { icon: "🐭", english: "Mouse", korean: "쥐", koreanPronunciation: "jwi", chinese: "老鼠", chinesePinyin: "lǎo shǔ" },
    { icon: "🐰", english: "Rabbit", korean: "토끼", koreanPronunciation: "to-kki", chinese: "兔子", chinesePinyin: "tù zi" },
    { icon: "🦊", english: "Fox", korean: "여우", koreanPronunciation: "yeo-u", chinese: "狐狸", chinesePinyin: "hú li" },
    { icon: "🐻", english: "Bear", korean: "곰", koreanPronunciation: "gom", chinese: "熊", chinesePinyin: "xióng" },
    { icon: "🐼", english: "Panda", korean: "판다", koreanPronunciation: "pan-da", chinese: "熊猫", chinesePinyin: "xióng māo" },
    { icon: "🐨", english: "Koala", korean: "코알라", koreanPronunciation: "ko-al-la", chinese: "考拉", chinesePinyin: "kǎo lā" },
    { icon: "🦁", english: "Lion", korean: "사자", koreanPronunciation: "sa-ja", chinese: "狮子", chinesePinyin: "shī zi" },
    { icon: "🐯", english: "Tiger", korean: "호랑이", koreanPronunciation: "ho-rang-i", chinese: "老虎", chinesePinyin: "lǎo hǔ" },
    { icon: "🐘", english: "Elephant", korean: "코끼리", koreanPronunciation: "ko-kki-ri", chinese: "大象", chinesePinyin: "dà xiàng" },
    { icon: "🦒", english: "Giraffe", korean: "기린", koreanPronunciation: "gi-rin", chinese: "长颈鹿", chinesePinyin: "cháng jǐng lù" },
    { icon: "🐒", english: "Monkey", korean: "원숭이", koreanPronunciation: "won-sung-i", chinese: "猴子", chinesePinyin: "hóu zi" },
    { icon: "🐴", english: "Horse", korean: "말", koreanPronunciation: "mal", chinese: "马", chinesePinyin: "mǎ" },
    { icon: "🐮", english: "Cow", korean: "소", koreanPronunciation: "so", chinese: "牛", chinesePinyin: "niú" },
    { icon: "🐷", english: "Pig", korean: "돼지", koreanPronunciation: "dwae-ji", chinese: "猪", chinesePinyin: "zhū" },
    { icon: "🐑", english: "Sheep", korean: "양", koreanPronunciation: "yang", chinese: "羊", chinesePinyin: "yáng" },
    { icon: "🐐", english: "Goat", korean: "염소", koreanPronunciation: "yeom-so", chinese: "山羊", chinesePinyin: "shān yáng" },
    { icon: "🐔", english: "Chicken", korean: "닭", koreanPronunciation: "dak", chinese: "鸡", chinesePinyin: "jī" },
    { icon: "🦆", english: "Duck", korean: "오리", koreanPronunciation: "o-ri", chinese: "鸭子", chinesePinyin: "yā zi" },
    { icon: "🌅", english: "Good morning", korean: "좋은 아침이에요", koreanPronunciation: "jo-eun a-chim-i-e-yo", chinese: "早上好", chinesePinyin: "zǎo shàng hǎo" },
    { icon: "☀️", english: "Good afternoon", korean: "좋은 오후 보내세요", koreanPronunciation: "jo-eun o-hu bo-nae-se-yo", chinese: "下午好", chinesePinyin: "xià wǔ hǎo" },
    { icon: "🌙", english: "Good evening", korean: "좋은 저녁 되세요", koreanPronunciation: "jo-eun jeo-nyeok doe-se-yo", chinese: "晚上好", chinesePinyin: "wǎn shàng hǎo" },
    { icon: "🤝", english: "Nice to meet you", korean: "만나서 반가워요", koreanPronunciation: "man-na-seo ban-ga-wo-yo", chinese: "很高兴认识你", chinesePinyin: "hěn gāo xìng rèn shi nǐ" },
    { icon: "🙂", english: "How are you?", korean: "잘 지내세요?", koreanPronunciation: "jal ji-nae-se-yo", chinese: "你好吗？", chinesePinyin: "nǐ hǎo ma" },
    { icon: "👍", english: "I'm fine", korean: "잘 지내요", koreanPronunciation: "jal ji-nae-yo", chinese: "我很好", chinesePinyin: "wǒ hěn hǎo" },
    { icon: "🤗", english: "Welcome", korean: "환영합니다", koreanPronunciation: "hwan-yeong-ham-ni-da", chinese: "欢迎", chinesePinyin: "huān yíng" },
    { icon: "😔", english: "Sorry", korean: "죄송합니다", koreanPronunciation: "joe-song-ham-ni-da", chinese: "对不起", chinesePinyin: "duì bu qǐ" },
    { icon: "👌", english: "Excuse me", korean: "실례합니다", koreanPronunciation: "sil-lye-ham-ni-da", chinese: "不好意思", chinesePinyin: "bù hǎo yì si" },
    { icon: "🎉", english: "Have a nice day", korean: "좋은 하루 보내세요", koreanPronunciation: "jo-eun ha-ru bo-nae-se-yo", chinese: "祝你今天愉快", chinesePinyin: "zhù nǐ jīn tiān yú kuài" },
    { icon: "🎂", english: "Happy birthday", korean: "생일 축하해요", koreanPronunciation: "saeng-il chuk-ha-hae-yo", chinese: "生日快乐", chinesePinyin: "shēng rì kuài lè" },
    { icon: "🎄", english: "Merry Christmas", korean: "메리 크리스마스", koreanPronunciation: "me-ri keu-ri-seu-ma-seu", chinese: "圣诞快乐", chinesePinyin: "shèng dàn kuài lè" },
    { icon: "❄️", english: "January", korean: "1월", koreanPronunciation: "il-wol", chinese: "一月", chinesePinyin: "yī yuè" },
    { icon: "💋", english: "February", korean: "2월", koreanPronunciation: "i-wol", chinese: "二月", chinesePinyin: "èr yuè" },
    { icon: "🌸", english: "March", korean: "3월", koreanPronunciation: "sam-wol", chinese: "三月", chinesePinyin: "sān yuè" },
    { icon: "🌷", english: "April", korean: "4월", koreanPronunciation: "sa-wol", chinese: "四月", chinesePinyin: "sì yuè" },
    { icon: "🌱", english: "May", korean: "5월", koreanPronunciation: "o-wol", chinese: "五月", chinesePinyin: "wǔ yuè" },
    { icon: "☀️", english: "June", korean: "6월", koreanPronunciation: "yu-wol", chinese: "六月", chinesePinyin: "liù yuè" },
    { icon: "🌧️", english: "July", korean: "7월", koreanPronunciation: "chil-wol", chinese: "七月", chinesePinyin: "qī yuè" },
    { icon: "🌻", english: "August", korean: "8월", koreanPronunciation: "pal-wol", chinese: "八月", chinesePinyin: "bā yuè" },
    { icon: "🍂", english: "September", korean: "9월", koreanPronunciation: "gu-wol", chinese: "九月", chinesePinyin: "jiǔ yuè" },
    { icon: "🎃", english: "October", korean: "10월", koreanPronunciation: "si-wol", chinese: "十月", chinesePinyin: "shí yuè" },
    { icon: "🍁", english: "November", korean: "11월", koreanPronunciation: "sip-il-wol", chinese: "十一月", chinesePinyin: "shí yī yuè" },
    { icon: "🎄", english: "December", korean: "12월", koreanPronunciation: "sip-i-wol", chinese: "十二月", chinesePinyin: "shí èr yuè" },
    { icon: "💖", english: "I love you", korean: "사랑해요", koreanPronunciation: "sa-rang-hae-yo", chinese: "我爱你", chinesePinyin: "wǒ ài nǐ" },
    { icon: "💔", english: "I miss you", korean: "보고 싶어요", koreanPronunciation: "bo-go si-peo-yo", chinese: "我想你", chinesePinyin: "wǒ xiǎng nǐ" },
    { icon: "😊", english: "I'm happy", korean: "행복해요", koreanPronunciation: "haeng-bok-hae-yo", chinese: "我很开心", chinesePinyin: "wǒ hěn kāi xīn" },
    { icon: "😢", english: "I'm sad", korean: "슬퍼요", koreanPronunciation: "seul-peo-yo", chinese: "我很难过", chinesePinyin: "wǒ hěn nán guò" },
    { icon: "😡", english: "I'm angry", korean: "화가 나요", koreanPronunciation: "hwa-ga na-yo", chinese: "我很生气", chinesePinyin: "wǒ hěn shēng qì" },
    { icon: "😴", english: "I'm tired", korean: "피곤해요", koreanPronunciation: "pi-gon-hae-yo", chinese: "我很累", chinesePinyin: "wǒ hěn lèi" },
    { icon: "🥰", english: "I like you", korean: "좋아해요", koreanPronunciation: "jo-a-hae-yo", chinese: "我喜欢你", chinesePinyin: "wǒ xǐ huān nǐ" },
    { icon: "👤", english: "I", korean: "나", koreanPronunciation: "na", chinese: "我", chinesePinyin: "wǒ" },
    { icon: "👉", english: "You", korean: "너", koreanPronunciation: "neo", chinese: "你", chinesePinyin: "nǐ" },
    { icon: "👥", english: "We", korean: "우리", koreanPronunciation: "u-ri", chinese: "我们", chinesePinyin: "wǒ men" },
    { icon: "❓", english: "What", korean: "무엇", koreanPronunciation: "mu-eot", chinese: "什么", chinesePinyin: "shén me" },
    { icon: "📍", english: "Where", korean: "어디", koreanPronunciation: "eo-di", chinese: "哪里", chinesePinyin: "nǎ lǐ" },
    { icon: "👤", english: "Who", korean: "누구", koreanPronunciation: "nu-gu", chinese: "谁", chinesePinyin: "shéi" },
    { icon: "⏰", english: "When", korean: "언제", koreanPronunciation: "eon-je", chinese: "什么时候", chinesePinyin: "shén me shí hou" },
    { icon: "❓", english: "Why", korean: "왜", koreanPronunciation: "wae", chinese: "为什么", chinesePinyin: "wèi shén me" },
    { icon: "🤔", english: "How", korean: "어떻게", koreanPronunciation: "eo-tteo-ke", chinese: "怎么", chinesePinyin: "zěn me" },
    { icon: "👍", english: "Yes", korean: "네", koreanPronunciation: "ne", chinese: "是", chinesePinyin: "shì" },
    { icon: "👎", english: "No", korean: "아니요", koreanPronunciation: "a-ni-yo", chinese: "不", chinesePinyin: "bù" },
    { icon: "👌", english: "Okay", korean: "괜찮아요", koreanPronunciation: "gwaen-chan-a-yo", chinese: "好的", chinesePinyin: "hǎo de" },
    { icon: "🙏", english: "Please", korean: "제발", koreanPronunciation: "je-bal", chinese: "请", chinesePinyin: "qǐng" },
    { icon: "🆘", english: "Help!", korean: "도와주세요!", koreanPronunciation: "do-wa-ju-se-yo", chinese: "救命！", chinesePinyin: "jiù mìng" },
    { icon: "🍍", english: "Pineapple", korean: "파인애플", koreanPronunciation: "pa-in-ae-peul", chinese: "菠萝", chinesePinyin: "bō luó" },
    { icon: "🍑", english: "Peach", korean: "복숭아", koreanPronunciation: "bok-sung-a", chinese: "桃子", chinesePinyin: "táo zi" },
    { icon: "🍐", english: "Pear", korean: "배", koreanPronunciation: "bae", chinese: "梨", chinesePinyin: "lí" },
    { icon: "🍋", english: "Lemon", korean: "레몬", koreanPronunciation: "re-mon", chinese: "柠檬", chinesePinyin: "níng méng" },
    { icon: "🍈", english: "Melon", korean: "멜론", koreanPronunciation: "mel-lon", chinese: "甜瓜", chinesePinyin: "tián guā" },
    { icon: "🍒", english: "Cherry", korean: "체리", koreanPronunciation: "che-ri", chinese: "樱桃", chinesePinyin: "yīng táo" },
    { icon: "🥝", english: "Kiwi", korean: "키위", koreanPronunciation: "ki-wi", chinese: "猕猴桃", chinesePinyin: "mí hóu táo" },
    { icon: "🥥", english: "Coconut", korean: "코코넛", koreanPronunciation: "ko-ko-neot", chinese: "椰子", chinesePinyin: "yē zi" },
    { icon: "🍊", english: "Mandarin", korean: "귤", koreanPronunciation: "gyul", chinese: "橘子", chinesePinyin: "jú zi" },
    { icon: "🍏", english: "Green Apple", korean: "청사과", koreanPronunciation: "cheong-sa-gwa", chinese: "青苹果", chinesePinyin: "qīng píng guǒ" },
    { icon: "🍈", english: "Papaya", korean: "파파야", koreanPronunciation: "pa-pa-ya", chinese: "木瓜", chinesePinyin: "mù guā" },
    { icon: "🍅", english: "Tomato", korean: "토마토", koreanPronunciation: "to-ma-to", chinese: "番茄", chinesePinyin: "fān qié" },
    { icon: "🥩", english: "Beef", korean: "소고기", koreanPronunciation: "so-go-gi", chinese: "牛肉", chinesePinyin: "niú ròu" },
    { icon: "🥓", english: "Pork", korean: "돼지고기", koreanPronunciation: "dwae-ji-go-gi", chinese: "猪肉", chinesePinyin: "zhū ròu" },
    { icon: "🐟", english: "Fish", korean: "생선", koreanPronunciation: "saeng-seon", chinese: "鱼", chinesePinyin: "yú" },
    { icon: "🍲", english: "Soup", korean: "수프", koreanPronunciation: "su-peu", chinese: "汤", chinesePinyin: "tāng" },
    { icon: "🍕", english: "Pizza", korean: "피자", koreanPronunciation: "pi-ja", chinese: "披萨", chinesePinyin: "pī sà" },
    { icon: "🍔", english: "Hamburger", korean: "햄버거", koreanPronunciation: "haem-beo-geo", chinese: "汉堡包", chinesePinyin: "hàn bǎo bāo" },
    { icon: "🍟", english: "French fries", korean: "감자튀김", koreanPronunciation: "gam-ja-twi-gim", chinese: "炸薯条", chinesePinyin: "zhá shǔ tiáo" },
    { icon: "🌭", english: "Hot dog", korean: "핫도그", koreanPronunciation: "hat-do-geu", chinese: "热狗", chinesePinyin: "rè gǒu" },
    { icon: "🌮", english: "Taco", korean: "타코", koreanPronunciation: "ta-ko", chinese: "塔可", chinesePinyin: "tǎ kě" },
    { icon: "🍣", english: "Sushi", korean: "초밥", koreanPronunciation: "cho-bap", chinese: "寿司", chinesePinyin: "shòu sī" },
    { icon: "🍝", english: "Spaghetti", korean: "스파게티", koreanPronunciation: "seu-pa-ge-ti", chinese: "意大利面", chinesePinyin: "yì dà lì miàn" },
    { icon: "🥗", english: "Salad", korean: "샐러드", koreanPronunciation: "sael-leo-deu", chinese: "沙拉", chinesePinyin: "shā lā" },
    { icon: "🍰", english: "Cake", korean: "케이크", koreanPronunciation: "ke-i-keu", chinese: "蛋糕", chinesePinyin: "dàn gāo" },
    { icon: "🍪", english: "Cookie", korean: "쿠키", koreanPronunciation: "ku-ki", chinese: "饼干", chinesePinyin: "bǐng gān" },
    { icon: "🍦", english: "Ice cream", korean: "아이스크림", koreanPronunciation: "a-i-seu-keu-rim", chinese: "冰淇淋", chinesePinyin: "bīng qí lín" },
    { icon: "☀️", english: "Sunny", korean: "맑아요", koreanPronunciation: "mal-ga-yo", chinese: "晴天", chinesePinyin: "qíng tiān" },
    { icon: "🌧️", english: "Rainy", korean: "비가 와요", koreanPronunciation: "bi-ga wa-yo", chinese: "下雨", chinesePinyin: "xià yǔ" },
    { icon: "☁️", english: "Cloudy", korean: "흐려요", koreanPronunciation: "heu-ryeo-yo", chinese: "多云", chinesePinyin: "duō yún" },
    { icon: "❄️", english: "Snowy", korean: "눈이 와요", koreanPronunciation: "nu-ni wa-yo", chinese: "下雪", chinesePinyin: "xià xuě" },
    { icon: "💨", english: "Windy", korean: "바람이 불어요", koreanPronunciation: "ba-ram-i bu-reo-yo", chinese: "有风", chinesePinyin: "yǒu fēng" },
    { icon: "🌫️", english: "Foggy", korean: "안개가 껴요", koreanPronunciation: "an-gae-ga kkyeo-yo", chinese: "有雾", chinesePinyin: "yǒu wù" },
    { icon: "⛈️", english: "Stormy", korean: "폭풍이 와요", koreanPronunciation: "pok-pung-i wa-yo", chinese: "暴风雨", chinesePinyin: "bào fēng yǔ" },
    { icon: "⚡", english: "Thunder", korean: "천둥", koreanPronunciation: "cheon-dung", chinese: "雷", chinesePinyin: "léi" },
    { icon: "🌩️", english: "Lightning", korean: "번개", koreanPronunciation: "beon-gae", chinese: "闪电", chinesePinyin: "shǎn diàn" },
    { icon: "🌡️", english: "Hot", korean: "더워요", koreanPronunciation: "deo-wo-yo", chinese: "热", chinesePinyin: "rè" },
    { icon: "🥶", english: "Cold", korean: "추워요", koreanPronunciation: "chu-wo-yo", chinese: "冷", chinesePinyin: "lěng" },
    { icon: "🌤️", english: "Warm", korean: "따뜻해요", koreanPronunciation: "tta-tteut-hae-yo", chinese: "温暖", chinesePinyin: "wēn nuǎn" },
    { icon: "🧊", english: "Cool", korean: "시원해요", koreanPronunciation: "si-won-hae-yo", chinese: "凉爽", chinesePinyin: "liáng shuǎng" },
    { icon: "🌈", english: "Rainbow", korean: "무지개", koreanPronunciation: "mu-ji-gae", chinese: "彩虹", chinesePinyin: "cǎi hóng" },
    { icon: "☔", english: "Rain", korean: "비", koreanPronunciation: "bi", chinese: "雨", chinesePinyin: "yǔ" },
    { icon: "❄️", english: "Snow", korean: "눈", koreanPronunciation: "nun", chinese: "雪", chinesePinyin: "xuě" },
    { icon: "💨", english: "Wind", korean: "바람", koreanPronunciation: "ba-ram", chinese: "风", chinesePinyin: "fēng" },
    { icon: "🌡️", english: "Temperature", korean: "온도", koreanPronunciation: "on-do", chinese: "温度", chinesePinyin: "wēn dù" },
    { icon: "☀️", english: "Sunshine", korean: "햇빛", koreanPronunciation: "haet-bit", chinese: "阳光", chinesePinyin: "yáng guāng" },
    { icon: "🌧️", english: "Heavy rain", korean: "폭우", koreanPronunciation: "po-gu", chinese: "大雨", chinesePinyin: "dà yǔ" },
    { icon: "🅰️", english: "A", korean: "에이", koreanPronunciation: "e-i", chinese: "诶", chinesePinyin: "ēi" },
    { icon: "🅱️", english: "B", korean: "비", koreanPronunciation: "bi", chinese: "比", chinesePinyin: "bǐ" },
    { icon: "©️", english: "C", korean: "씨", koreanPronunciation: "ssi", chinese: "西", chinesePinyin: "xī" },
    { icon: "🔤", english: "D", korean: "디", koreanPronunciation: "di", chinese: "迪", chinesePinyin: "dí" },
    { icon: "📧", english: "E", korean: "이", koreanPronunciation: "i", chinese: "伊", chinesePinyin: "yī" },
    { icon: "🎏", english: "F", korean: "에프", koreanPronunciation: "e-peu", chinese: "艾弗", chinesePinyin: "ài fú" },
    { icon: "🟢", english: "G", korean: "지", koreanPronunciation: "ji", chinese: "吉", chinesePinyin: "jí" },
    { icon: "♓", english: "H", korean: "에이치", koreanPronunciation: "e-i-chi", chinese: "艾尺", chinesePinyin: "ài chǐ" },
    { icon: "ℹ️", english: "I", korean: "아이", koreanPronunciation: "a-i", chinese: "艾", chinesePinyin: "ài" },
    { icon: "🃏", english: "J", korean: "제이", koreanPronunciation: "je-i", chinese: "杰", chinesePinyin: "jié" },
    { icon: "🔑", english: "K", korean: "케이", koreanPronunciation: "ke-i", chinese: "开", chinesePinyin: "kāi" },
    { icon: "📚", english: "L", korean: "엘", koreanPronunciation: "el", chinese: "艾勒", chinesePinyin: "ài lè" },
    { icon: "Ⓜ️", english: "M", korean: "엠", koreanPronunciation: "em", chinese: "艾姆", chinesePinyin: "ài mǔ" },
    { icon: "🔠", english: "N", korean: "엔", koreanPronunciation: "en", chinese: "恩", chinesePinyin: "ēn" },
    { icon: "⭕", english: "O", korean: "오", koreanPronunciation: "o", chinese: "欧", chinesePinyin: "ōu" },
    { icon: "🅿️", english: "P", korean: "피", koreanPronunciation: "pi", chinese: "屁", chinesePinyin: "pì" },
    { icon: "❓", english: "Q", korean: "큐", koreanPronunciation: "kyu", chinese: "丘", chinesePinyin: "qiū" },
    { icon: "®️", english: "R", korean: "알", koreanPronunciation: "al", chinese: "艾儿", chinesePinyin: "ài ér" },
    { icon: "💲", english: "S", korean: "에스", koreanPronunciation: "e-seu", chinese: "艾丝", chinesePinyin: "ài sī" },
    { icon: "🌴", english: "T", korean: "티", koreanPronunciation: "ti", chinese: "提", chinesePinyin: "tí" },
    { icon: "⛎", english: "U", korean: "유", koreanPronunciation: "yu", chinese: "优", chinesePinyin: "yōu" },
    { icon: "✌️", english: "V", korean: "브이", koreanPronunciation: "beu-i", chinese: "维", chinesePinyin: "wéi" },
    { icon: "〰️", english: "W", korean: "더블유", koreanPronunciation: "deo-beul-yu", chinese: "达布流", chinesePinyin: "dá bù liú" },
    { icon: "❌", english: "X", korean: "엑스", koreanPronunciation: "ek-seu", chinese: "艾克斯", chinesePinyin: "ài kè sī" },
    { icon: "🆈", english: "Y", korean: "와이", koreanPronunciation: "wa-i", chinese: "吾艾", chinesePinyin: "wú ài" },
    { icon: "⚡", english: "Z", korean: "지", koreanPronunciation: "ji", chinese: "贼德", chinesePinyin: "zéi dé" },
    { icon: "⬆️", english: "Up", korean: "위", koreanPronunciation: "wi", chinese: "上", chinesePinyin: "shàng" },
    { icon: "⬇️", english: "Down", korean: "아래", koreanPronunciation: "a-rae", chinese: "下", chinesePinyin: "xià" },
    { icon: "⬅️", english: "Left", korean: "왼쪽", koreanPronunciation: "oen-jjok", chinese: "左", chinesePinyin: "zuǒ" },
    { icon: "➡️", english: "Right", korean: "오른쪽", koreanPronunciation: "o-reun-jjok", chinese: "右", chinesePinyin: "yòu" },
    { icon: "⬆️", english: "Forward", korean: "앞으로", koreanPronunciation: "a-peu-ro", chinese: "向前", chinesePinyin: "xiàng qián" },
    { icon: "⬅️", english: "Turn left", korean: "왼쪽으로 도세요", koreanPronunciation: "oen-jjok-eu-ro do-se-yo", chinese: "向左转", chinesePinyin: "xiàng zuǒ zhuǎn" },
    { icon: "➡️", english: "Turn right", korean: "오른쪽으로 도세요", koreanPronunciation: "o-reun-jjok-eu-ro do-se-yo", chinese: "向右转", chinesePinyin: "xiàng yòu zhuǎn" },
    { icon: "🔄", english: "Turn around", korean: "돌아가세요", koreanPronunciation: "do-ra-ga-se-yo", chinese: "转身", chinesePinyin: "zhuǎn shēn" },
    { icon: "🛑", english: "Stop", korean: "멈추세요", koreanPronunciation: "meom-chu-se-yo", chinese: "停", chinesePinyin: "tíng" },
    { icon: "🚶", english: "Go", korean: "가세요", koreanPronunciation: "ga-se-yo", chinese: "走", chinesePinyin: "zǒu" },
    { icon: "↗️", english: "Go straight", korean: "직진하세요", koreanPronunciation: "jik-jin-ha-se-yo", chinese: "直走", chinesePinyin: "zhí zǒu" },
    { icon: "↩️", english: "Go back", korean: "돌아가세요", koreanPronunciation: "do-ra-ga-se-yo", chinese: "回去", chinesePinyin: "huí qù" },
    { icon: "📍", english: "Here", korean: "여기", koreanPronunciation: "yeo-gi", chinese: "这里", chinesePinyin: "zhè lǐ" },
    { icon: "📍", english: "There", korean: "저기", koreanPronunciation: "jeo-gi", chinese: "那里", chinesePinyin: "nà lǐ" },
    { icon: "⬅️", english: "Near", korean: "가까이", koreanPronunciation: "ga-kka-i", chinese: "附近", chinesePinyin: "fù jìn" },
    { icon: "➡️", english: "Far", korean: "멀리", koreanPronunciation: "meol-li", chinese: "远", chinesePinyin: "yuǎn" },
    { icon: "🏠", english: "Entrance", korean: "입구", koreanPronunciation: "ip-gu", chinese: "入口", chinesePinyin: "rù kǒu" },
    { icon: "🚪", english: "Exit", korean: "출구", koreanPronunciation: "chul-gu", chinese: "出口", chinesePinyin: "chū kǒu" },
    { icon: "⬆️", english: "Upstairs", korean: "위층", koreanPronunciation: "wi-cheung", chinese: "楼上", chinesePinyin: "lóu shàng" },
    { icon: "⬇️", english: "Downstairs", korean: "아래층", koreanPronunciation: "a-rae-cheung", chinese: "楼下", chinesePinyin: "lóu xià" },
    { icon: "⬆️", english: "North", korean: "북쪽", koreanPronunciation: "buk-jjok", chinese: "北", chinesePinyin: "běi" },
    { icon: "➡️", english: "East", korean: "동쪽", koreanPronunciation: "dong-jjok", chinese: "东", chinesePinyin: "dōng" },
    { icon: "⬇️", english: "South", korean: "남쪽", koreanPronunciation: "nam-jjok", chinese: "南", chinesePinyin: "nán" },
    { icon: "⬅️", english: "West", korean: "서쪽", koreanPronunciation: "seo-jjok", chinese: "西", chinesePinyin: "xī" },
    { icon: "👧", english: "Sister", korean: "자매", koreanPronunciation: "ja-mae", chinese: "姐妹", chinesePinyin: "jiě mèi" },
    { icon: "👦", english: "Brother", korean: "형제", koreanPronunciation: "hyeong-je", chinese: "兄弟", chinesePinyin: "xiōng dì" },
    { icon: "👫", english: "Cousin", korean: "사촌", koreanPronunciation: "sa-chon", chinese: "表亲", chinesePinyin: "biǎo qīn" },
    { icon: "👨", english: "Uncle", korean: "삼촌", koreanPronunciation: "sam-chon", chinese: "叔叔", chinesePinyin: "shū shu" },
    { icon: "👩", english: "Aunt", korean: "이모", koreanPronunciation: "i-mo", chinese: "阿姨", chinesePinyin: "ā yí" },
    { icon: "👴", english: "Grandfather", korean: "할아버지", koreanPronunciation: "hal-a-beo-ji", chinese: "爷爷", chinesePinyin: "yé ye" },
    { icon: "👵", english: "Grandmother", korean: "할머니", koreanPronunciation: "hal-meo-ni", chinese: "奶奶", chinesePinyin: "nǎi nai" },
    { icon: "👧", english: "Sister", korean: "자매", koreanPronunciation: "ja-mae", chinese: "姐妹", chinesePinyin: "jiě mèi" },
    { icon: "👦", english: "Brother", korean: "형제", koreanPronunciation: "hyeong-je", chinese: "兄弟", chinesePinyin: "xiōng dì" },
    { icon: "👫", english: "Cousin", korean: "사촌", koreanPronunciation: "sa-chon", chinese: "表亲", chinesePinyin: "biǎo qīn" },
    { icon: "👨", english: "Uncle", korean: "삼촌", koreanPronunciation: "sam-chon", chinese: "叔叔", chinesePinyin: "shū shu" },
    { icon: "👩", english: "Aunt", korean: "이모", koreanPronunciation: "i-mo", chinese: "阿姨", chinesePinyin: "ā yí" },
    { icon: "👴", english: "Grandfather", korean: "할아버지", koreanPronunciation: "hal-a-beo-ji", chinese: "爷爷", chinesePinyin: "yé ye" },
    { icon: "👵", english: "Grandmother", korean: "할머니", koreanPronunciation: "hal-meo-ni", chinese: "奶奶", chinesePinyin: "nǎi nai" },
    { icon: "⚽", english: "Soccer", korean: "축구", koreanPronunciation: "chuk-gu", chinese: "足球", chinesePinyin: "zú qiú" },
    { icon: "🏀", english: "Basketball", korean: "농구", koreanPronunciation: "nong-gu", chinese: "篮球", chinesePinyin: "lán qiú" },
    { icon: "🏐", english: "Volleyball", korean: "배구", koreanPronunciation: "bae-gu", chinese: "排球", chinesePinyin: "pái qiú" },
    { icon: "🎾", english: "Tennis", korean: "테니스", koreanPronunciation: "te-ni-seu", chinese: "网球", chinesePinyin: "wǎng qiú" },
    { icon: "🏸", english: "Badminton", korean: "배드민턴", koreanPronunciation: "bae-deu-min-teon", chinese: "羽毛球", chinesePinyin: "yǔ máo qiú" },
    { icon: "🏓", english: "Table Tennis", korean: "탁구", koreanPronunciation: "tak-gu", chinese: "乒乓球", chinesePinyin: "pīng pāng qiú" },
    { icon: "🏊", english: "Swimming", korean: "수영", koreanPronunciation: "su-yeong", chinese: "游泳", chinesePinyin: "yóu yǒng" },
    { icon: "🥊", english: "Boxing", korean: "복싱", koreanPronunciation: "bok-sing", chinese: "拳击", chinesePinyin: "quán jī" },
    { icon: "🥋", english: "Karate", korean: "가라테", koreanPronunciation: "ga-ra-te", chinese: "空手道", chinesePinyin: "kōng shǒu dào" },
    { icon: "🤼", english: "Wrestling", korean: "레슬링", koreanPronunciation: "re-seul-ling", chinese: "摔跤", chinesePinyin: "shuāi jiāo" },
    { icon: "🏃", english: "Running", korean: "달리기", koreanPronunciation: "dal-li-gi", chinese: "跑步", chinesePinyin: "pǎo bù" },
    { icon: "🚴", english: "Cycling", korean: "사이클링", koreanPronunciation: "sa-i-keul-ling", chinese: "骑自行车", chinesePinyin: "qí zì xíng chē" },
    { icon: "🏹", english: "Archery", korean: "양궁", koreanPronunciation: "yang-gung", chinese: "射箭", chinesePinyin: "shè jiàn" },
    { icon: "⛳", english: "Golf", korean: "골프", koreanPronunciation: "gol-peu", chinese: "高尔夫", chinesePinyin: "gāo ěr fū" },
    { icon: "🏒", english: "Ice Hockey", korean: "아이스하키", koreanPronunciation: "a-i-seu-ha-ki", chinese: "冰球", chinesePinyin: "bīng qiú" },
    { icon: "⚾", english: "Baseball", korean: "야구", koreanPronunciation: "ya-gu", chinese: "棒球", chinesePinyin: "bàng qiú" },
    { icon: "🤸", english: "Gymnastics", korean: "체조", koreanPronunciation: "che-jo", chinese: "体操", chinesePinyin: "tǐ cāo" },
    { icon: "🎱", english: "Billiards", korean: "당구", koreanPronunciation: "dang-gu", chinese: "台球", chinesePinyin: "tái qiú" },
    { icon: "🌹", english: "Rose", korean: "장미", koreanPronunciation: "jang-mi", chinese: "玫瑰", chinesePinyin: "méi guī" },
    { icon: "🌷", english: "Tulip", korean: "튤립", koreanPronunciation: "tyul-lip", chinese: "郁金香", chinesePinyin: "yù jīn xiāng" },
    { icon: "🌻", english: "Sunflower", korean: "해바라기", koreanPronunciation: "hae-ba-ra-gi", chinese: "向日葵", chinesePinyin: "xiàng rì kuí" },
    { icon: "🌸", english: "Cherry Blossom", korean: "벚꽃", koreanPronunciation: "beot-kkot", chinese: "樱花", chinesePinyin: "yīng huā" },
    { icon: "🌼", english: "Daisy", korean: "데이지", koreanPronunciation: "de-i-ji", chinese: "雏菊", chinesePinyin: "chú jú" },
    { icon: "🌷", english: "Lily", korean: "백합", koreanPronunciation: "baek-hap", chinese: "百合", chinesePinyin: "bǎi hé" },
    { icon: "🌼", english: "Dandelion", korean: "민들레", koreanPronunciation: "min-deul-le", chinese: "蒲公英", chinesePinyin: "pú gōng yīng" },
    { icon: "🌺", english: "Orchid", korean: "난초", koreanPronunciation: "nan-cho", chinese: "兰花", chinesePinyin: "lán huā" },
    { icon: "🌸", english: "Lotus", korean: "연꽃", koreanPronunciation: "yeon-kkot", chinese: "莲花", chinesePinyin: "lián huā" },
    { icon: "🌹", english: "Jasmine", korean: "자스민", koreanPronunciation: "ja-seu-min", chinese: "茉莉花", chinesePinyin: "mò lì huā" },
    { icon: "🌻", english: "Dahlia", korean: "달리아", koreanPronunciation: "dal-li-a", chinese: "大丽花", chinesePinyin: "dà lì huā" },
    { icon: "💍", english: "Ring", korean: "반지", koreanPronunciation: "ban-ji", chinese: "戒指", chinesePinyin: "jiè zhi" },
    { icon: "📿", english: "Necklace", korean: "목걸이", koreanPronunciation: "mok-geol-i", chinese: "项链", chinesePinyin: "xiàng liàn" },
    { icon: "💎", english: "Diamond", korean: "다이아몬드", koreanPronunciation: "da-i-a-mon-deu", chinese: "钻石", chinesePinyin: "zuàn shí" },
    { icon: "👂", english: "Earrings", korean: "귀걸이", koreanPronunciation: "gwi-geol-i", chinese: "耳环", chinesePinyin: "ěr huán" },
    { icon: "📿", english: "Bracelet", korean: "팔찌", koreanPronunciation: "pal-jji", chinese: "手链", chinesePinyin: "shǒu liàn" },
    { icon: "👑", english: "Crown", korean: "왕관", koreanPronunciation: "wang-gwan", chinese: "王冠", chinesePinyin: "wáng guān" },
    { icon: "🍔", english: "McDonald's", korean: "맥도날드", koreanPronunciation: "maek-do-nal-deu", chinese: "麦当劳", chinesePinyin: "mài dāng láo" },
    { icon: "🍗", english: "KFC", korean: "KFC", koreanPronunciation: "ke-i-e-peu-si", chinese: "肯德基", chinesePinyin: "kěn dé jī" },
    { icon: "🏫", english: "School", korean: "학교", koreanPronunciation: "hak-gyo", chinese: "学校", chinesePinyin: "xué xiào" },
    { icon: "🏥", english: "Hospital", korean: "병원", koreanPronunciation: "byeong-won", chinese: "医院", chinesePinyin: "yī yuàn" },
    { icon: "🏦", english: "Bank", korean: "은행", koreanPronunciation: "eun-haeng", chinese: "银行", chinesePinyin: "yín háng" },
    { icon: "🏨", english: "Hotel", korean: "호텔", koreanPronunciation: "ho-tel", chinese: "酒店", chinesePinyin: "jiǔ diàn" },
    { icon: "🏰", english: "Castle", korean: "성", koreanPronunciation: "seong", chinese: "城堡", chinesePinyin: "chéng bǎo" },
    { icon: "⛪", english: "Church", korean: "교회", koreanPronunciation: "gyo-hoe", chinese: "教堂", chinesePinyin: "jiào táng" },
    { icon: "🕌", english: "Mosque", korean: "모스크", koreanPronunciation: "mo-seu-keu", chinese: "清真寺", chinesePinyin: "qīng zhēn sì" },
    { icon: "🛕", english: "Temple", korean: "사원", koreanPronunciation: "sa-won", chinese: "寺庙", chinesePinyin: "sì miào" },
    { icon: "🏛️", english: "Museum", korean: "박물관", koreanPronunciation: "bang-mul-gwan", chinese: "博物馆", chinesePinyin: "bó wù guǎn" },
    { icon: "📚", english: "Library", korean: "도서관", koreanPronunciation: "do-seo-gwan", chinese: "图书馆", chinesePinyin: "tú shū guǎn" },
    { icon: "🏟️", english: "Stadium", korean: "경기장", koreanPronunciation: "gyeong-gi-jang", chinese: "体育场", chinesePinyin: "tǐ yù chǎng" },
    { icon: "🌉", english: "Bridge", korean: "다리", koreanPronunciation: "da-ri", chinese: "桥", chinesePinyin: "qiáo" },
    { icon: "🗼", english: "Tower", korean: "탑", koreanPronunciation: "tap", chinese: "塔", chinesePinyin: "tǎ" },
    { icon: "🏙️", english: "Skyscraper", korean: "고층 빌딩", koreanPronunciation: "go-cheung bil-ding", chinese: "摩天大楼", chinesePinyin: "mó tiān dà lóu" },
    { icon: "🚉", english: "Train Station", korean: "기차역", koreanPronunciation: "gi-cha-yeok", chinese: "火车站", chinesePinyin: "huǒ chē zhàn" },
    { icon: "✈️", english: "Airport", korean: "공항", koreanPronunciation: "gong-hang", chinese: "机场", chinesePinyin: "jī chǎng" },
    { icon: "🏪", english: "Store", korean: "가게", koreanPronunciation: "ga-ge", chinese: "商店", chinesePinyin: "shāng diàn" },
    { icon: "🏭", english: "Factory", korean: "공장", koreanPronunciation: "gong-jang", chinese: "工厂", chinesePinyin: "gōng chǎng" },
    { icon: "🏔️", english: "Mountain", korean: "산", koreanPronunciation: "san", chinese: "山", chinesePinyin: "shān" },
    { icon: "🌊", english: "Ocean", korean: "바다", koreanPronunciation: "ba-da", chinese: "海洋", chinesePinyin: "hǎi yáng" },
    { icon: "🏖️", english: "Beach", korean: "해변", koreanPronunciation: "hae-byeon", chinese: "海滩", chinesePinyin: "hǎi tān" },
    { icon: "🌳", english: "Forest", korean: "숲", koreanPronunciation: "sup", chinese: "森林", chinesePinyin: "sēn lín" },
    { icon: "🏞️", english: "Valley", korean: "계곡", koreanPronunciation: "gye-gok", chinese: "山谷", chinesePinyin: "shān gǔ" },
    { icon: "🏜️", english: "Desert", korean: "사막", koreanPronunciation: "sa-mak", chinese: "沙漠", chinesePinyin: "shā mò" },
    { icon: "🏝️", english: "Island", korean: "섬", koreanPronunciation: "seom", chinese: "岛", chinesePinyin: "dǎo" },
    { icon: "🌋", english: "Volcano", korean: "화산", koreanPronunciation: "hwa-san", chinese: "火山", chinesePinyin: "huǒ shān" },
    { icon: "💧", english: "Waterfall", korean: "폭포", koreanPronunciation: "pok-po", chinese: "瀑布", chinesePinyin: "pù bù" },
    { icon: "🏕️", english: "Lake", korean: "호수", koreanPronunciation: "ho-su", chinese: "湖", chinesePinyin: "hú" },
    { icon: "🌊", english: "River", korean: "강", koreanPronunciation: "gang", chinese: "河流", chinesePinyin: "hé liú" },
    { icon: "🌲", english: "Jungle", korean: "정글", koreanPronunciation: "jeong-geul", chinese: "丛林", chinesePinyin: "cóng lín" },
    { icon: "🌾", english: "Field", korean: "들판", koreanPronunciation: "deul-pan", chinese: "田野", chinesePinyin: "tián yě" },
    { icon: "🌴", english: "Tropical Forest", korean: "열대 우림", koreanPronunciation: "yeol-dae u-rim", chinese: "热带雨林", chinesePinyin: "rè dài yǔ lín" },
    { icon: "🏔️", english: "Hill", korean: "언덕", koreanPronunciation: "eon-deok", chinese: "山丘", chinesePinyin: "shān qiū" },
    { icon: "🌳", english: "Park", korean: "공원", koreanPronunciation: "gong-won", chinese: "公园", chinesePinyin: "gōng yuán" },
    { icon: "🌱", english: "Garden", korean: "정원", koreanPronunciation: "jeong-won", chinese: "花园", chinesePinyin: "huā yuán" },
    { icon: "💑", english: "Boyfriend", korean: "남자친구", koreanPronunciation: "nam-ja-chin-gu", chinese: "男朋友", chinesePinyin: "nán péng you" },
    { icon: "💑", english: "Girlfriend", korean: "여자친구", koreanPronunciation: "yeo-ja-chin-gu", chinese: "女朋友", chinesePinyin: "nǚ péng you" },
    { icon: "💍", english: "Husband", korean: "남편", koreanPronunciation: "nam-pyeon", chinese: "丈夫", },

];


/* =========================================================
   CONVERSATION DATA
========================================================= */

const conversations = {

    greetings: {
        title: "Greetings",
        messages: [

            [
                "Person A",
                "Hello! Nice to meet you.",
                "안녕하세요! 만나서 반가워요.",
                "Annyeonghaseyo! Mannaseo bangawoyo.",
                "你好！很高兴认识你。",
                "Nǐ hǎo! Hěn gāoxìng rènshi nǐ."
            ],

            [
                "Person B",
                "Nice to meet you too.",
                "저도 만나서 반가워요.",
                "Jeodo mannaseo bangawoyo.",
                "我也很高兴认识你。",
                "Wǒ yě hěn gāoxìng rènshi nǐ."
            ],

            [
                "Person A",
                "How are you?",
                "잘 지내세요?",
                "Jal jinaeseyo?",
                "你好吗？",
                "Nǐ hǎo ma?"
            ],

            [
                "Person B",
                "I am doing well. Thank you.",
                "잘 지내요. 감사합니다.",
                "Jal jinaeyo. Gamsahamnida.",
                "我很好，谢谢。",
                "Wǒ hěn hǎo, xièxie."
            ]

        ]
    },


    market: {
        title: "At the Market",
        messages: [

            [
                "Customer",
                "How much is this?",
                "이것은 얼마예요?",
                "Igeoseun eolmayeyo?",
                "这个多少钱？",
                "Zhège duōshao qián?"
            ],

            [
                "Seller",
                "It is ten dollars.",
                "십 달러예요.",
                "Sip dalleoyeyo.",
                "十美元。",
                "Shí měiyuán."
            ],

            [
                "Customer",
                "Can I have one, please?",
                "하나 주세요.",
                "Hana juseyo.",
                "请给我一个。",
                "Qǐng gěi wǒ yí ge."
            ]

        ]
    },


    public: {
        title: "In Public",
        messages: [

            [
                "Person A",
                "Excuse me, where is the station?",
                "실례합니다. 역이 어디예요?",
                "Sillyehamnida. Yeogi eodiyeyo?",
                "请问，车站在哪里？",
                "Qǐngwèn, chēzhàn zài nǎlǐ?"
            ],

            [
                "Person B",
                "It is over there.",
                "저쪽에 있어요.",
                "Jeojjoge isseoyo.",
                "在那里。",
                "Zài nàlǐ."
            ]

        ]
    },


    restaurant: {
        title: "At a Restaurant",
        messages: [

            [
                "Customer",
                "Can I see the menu?",
                "메뉴를 볼 수 있을까요?",
                "Menyureul bol su isseulkkayo?",
                "可以给我看菜单吗？",
                "Kěyǐ gěi wǒ kàn càidān ma?"
            ],

            [
                "Staff",
                "Of course.",
                "물론입니다.",
                "Mullonimnida.",
                "当然可以。",
                "Dāngrán kěyǐ."
            ],

            [
                "Customer",
                "I would like some food.",
                "음식을 주세요.",
                "Eumsigeul juseyo.",
                "请给我一些食物。",
                "Qǐng gěi wǒ yìxiē shíwù."
            ]

        ]
    },


    school: {
        title: "At School",
        messages: [

            [
                "Student A",
                "Where is the classroom?",
                "교실이 어디예요?",
                "Gyosiri eodiyeyo?",
                "教室在哪里？",
                "Jiàoshì zài nǎlǐ?"
            ],

            [
                "Student B",
                "It is on the second floor.",
                "2층에 있어요.",
                "Icheung-e isseoyo.",
                "在二楼。",
                "Zài èr lóu."
            ],

            [
                "Student A",
                "Thank you!",
                "감사합니다!",
                "Gamsahamnida!",
                "谢谢！",
                "Xièxie!"
            ]

        ]
    },


    travel: {
        title: "Travel",
        messages: [

            [
                "Traveler",
                "Where is the airport?",
                "공항이 어디예요?",
                "Gonghangi eodiyeyo?",
                "机场在哪里？",
                "Jīchǎng zài nǎlǐ?"
            ],

            [
                "Person",
                "The airport is nearby.",
                "공항은 가까워요.",
                "Gonghangeun gakkawoyo.",
                "机场就在附近。",
                "Jīchǎng jiù zài fùjìn."
            ]

        ]
    },


    daily: {
        title: "Daily Conversation",
        messages: [

            [
                "Person A",
                "What are you doing?",
                "무엇을 하고 있어요?",
                "Mueoseul hago isseoyo?",
                "你在做什么？",
                "Nǐ zài zuò shénme?"
            ],

            [
                "Person B",
                "I am studying.",
                "공부하고 있어요.",
                "Gongbuhago isseoyo.",
                "我正在学习。",
                "Wǒ zhèngzài xuéxí."
            ],

            [
                "Person A",
                "Good luck!",
                "행운을 빌어요!",
                "Haenguneul bireoyo!",
                "祝你好运！",
                "Zhù nǐ hǎoyùn!"
            ]

        ]
    },
    

};


/* =========================================================
   LANDING / APP
========================================================= */

function enterApp() {

    document.getElementById("landingPage").classList.add("hidden");

    document.getElementById("appPage").classList.remove("hidden");

    showSection("home");

}


function backToLanding() {

    document.getElementById("appPage").classList.add("hidden");

    document.getElementById("landingPage").classList.remove("hidden");

}


/* =========================================================
   NAVIGATION
========================================================= */

function showSection(sectionId, clickedButton = null) {

    document.querySelectorAll(".section").forEach(section => {

        section.classList.remove("active");

    });


    const section = document.getElementById(sectionId);

    if (section) {

        section.classList.add("active");

    }


    document.querySelectorAll(".nav-btn").forEach(button => {

        button.classList.remove("active");

    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    } else {

        document.querySelectorAll(".nav-btn").forEach(button => {

            if (
                button.getAttribute("onclick") &&
                button.getAttribute("onclick").includes(
                    "'" + sectionId + "'"
                )
            ) {

                button.classList.add("active");

            }

        });

    }


    updateGameLanguageBox(sectionId);


    if (sectionId === "home") {

        renderHomeStats();

    }


    if (sectionId === "vocabulary") {

        loadVocabulary();

    }


    if (sectionId === "conversation") {

        showConversation("greetings");

    }


    if (sectionId === "games") {

        backToGames();

    }

}


/* =========================================================
   NICKNAME

   - Click the round profile icon to change the nickname.
   - After a nickname is saved, the input and button disappear.
========================================================= */

/* =========================================================
   PLAYERS (ACCOUNTS)

   Every nickname is a small account, saved in this browser.
   Scores and history are saved under the name that played,
   so they stay even when the nickname is removed or changed.
   Anyone can tap a name in the Score Dashboard to switch to
   that account. No nickname = the guest account ("Learner").
========================================================= */

const PLAYERS_KEY = "wordoraPlayers";

const GUEST_NAME = "Learner";


function playerKey(name) {

    return String(name || "").trim().toLowerCase();

}


function currentPlayerName() {

    try {

        return localStorage.getItem("wordoraNickname") || GUEST_NAME;

    } catch (error) {

        return GUEST_NAME;

    }

}


function currentPlayerKey() {

    return playerKey(currentPlayerName());

}


function loadPlayers() {

    try {

        const list = JSON.parse(localStorage.getItem(PLAYERS_KEY));

        return Array.isArray(list) ? list : [];

    } catch (error) {

        return [];

    }

}


function savePlayers(list) {

    try {

        localStorage.setItem(PLAYERS_KEY, JSON.stringify(list));

    } catch (error) {}

}


/* Adds the name to the player list (or marks it as recently used) */

function touchPlayer(name) {

    const clean = String(name || "").trim();

    const key = playerKey(clean);

    if (!key) return;

    const list = loadPlayers();

    let player = list.find(item => item.key === key);

    if (!player) {

        player = { name: clean, key: key, last: 0 };

        list.push(player);

    }

    player.last = Date.now();

    savePlayers(list);

}


function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

}


/* Old scores (saved before accounts existed) go to the name
   that was set at that time, or to the guest account. */

function migrateLegacyHistory() {

    const list = loadAllHistory();

    if (!list.some(item => !item.player)) return;

    const owner = currentPlayerName();

    list.forEach(item => {

        if (!item.player) item.player = owner;

    });

    try {

        localStorage.setItem(
            GAME_HISTORY_KEY,
            JSON.stringify(list)
        );

    } catch (error) {}

    touchPlayer(owner);

}


function refreshOpenGame() {

    const games = document.getElementById("games");

    if (games && games.classList.contains("active")) {

        restartOpenGame();

    }

}


function afterPlayerChange(previousKey) {

    renderScoreDashboard();

    renderHomeStats();

    if (previousKey !== currentPlayerKey()) {

        refreshOpenGame();

    }

}


function switchPlayer(key) {

    const player =
        loadPlayers().find(item => item.key === key);

    if (!player) return;

    const previousKey = currentPlayerKey();

    touchPlayer(player.name);

    const isGuest = key === playerKey(GUEST_NAME);

    try {

        if (isGuest) {

            localStorage.removeItem("wordoraNickname");

        } else {

            localStorage.setItem("wordoraNickname", player.name);

        }

    } catch (error) {}

    applyNickname(player.name);

    document.getElementById("nicknameInput").value =
        isGuest ? "" : player.name;

    setNicknameEditor(false);

    document.getElementById("profileHint")
        .classList.remove("hidden");

    afterPlayerChange(previousKey);

}



function setNicknameEditor(show) {

    const editor =
        document.getElementById("nicknameEditor");

    const hint =
        document.getElementById("profileHint");

    if (!editor) return;

    editor.classList.toggle("hidden", !show);

    if (hint) {

        hint.classList.toggle("hidden", show);

    }

    if (show) {

        const input =
            document.getElementById("nicknameInput");

        input.focus();

        input.select();

    }

}


function toggleNicknameEditor() {

    const editor =
        document.getElementById("nicknameEditor");

    setNicknameEditor(
        editor.classList.contains("hidden")
    );

}


function getInitial(name) {

    const first = Array.from(name.trim())[0] || "L";

    return first.toLocaleUpperCase();

}


function applyNickname(name) {

    document.getElementById("profileName").textContent = name;

    const initial =
        document.getElementById("profileInitial");

    if (initial) initial.textContent = getInitial(name);

    const welcome =
        document.getElementById("welcomeName");

    if (welcome) welcome.textContent = name;

}


function saveNickname() {

    const input = document.getElementById("nicknameInput");

    const typed = input.value.trim();

    const previousKey = currentPlayerKey();


    if (typed === "") {

        /* Nickname removed: back to the guest account.
           Everything the old name played stays saved. */

        try {
            localStorage.removeItem("wordoraNickname");
        } catch (error) {}

        applyNickname(GUEST_NAME);

        input.value = "";

    }

    else {

        touchPlayer(typed);

        const account =
            loadPlayers().find(player =>
                player.key === playerKey(typed)
            );

        const name = account ? account.name : typed;

        try {
            localStorage.setItem("wordoraNickname", name);
        } catch (error) {}

        applyNickname(name);

        input.value = name;

    }


    setNicknameEditor(false);

    document.getElementById("profileHint")
        .classList.remove("hidden");

    afterPlayerChange(previousKey);

}


function loadNickname() {

    migrateLegacyHistory();

    const savedName =
        localStorage.getItem("wordoraNickname");

    if (savedName) {

        applyNickname(savedName);

        document.getElementById("nicknameInput").value =
            savedName;

        /* Nickname already set: hide the input and button */
        document.getElementById("nicknameEditor")
            .classList.add("hidden");

        document.getElementById("profileHint")
            .classList.remove("hidden");

        if (
            !loadPlayers().some(player =>
                player.key === playerKey(savedName)
            )
        ) {

            touchPlayer(savedName);

        }

    }

}


/* =========================================================
   VOCABULARY
========================================================= */

function loadVocabulary() {

    const grid =
        document.getElementById("vocabularyGrid");

    if (!grid) return;

    grid.innerHTML = "";

    vocabulary.forEach(word => {

        const card =
            document.createElement("div");

        card.className = "vocab-card";

        card.innerHTML = `

            <div class="vocab-icon">
                ${word.icon}
            </div>

            <h3>
                ${word.english}
            </h3>

            <div class="vocab-language">
                🇰🇷 ${word.korean}
                <small>
                    ${word.koreanPronunciation}
                </small>
            </div>

            <div class="vocab-language">
                🇨🇳 ${word.chinese}
                <small>
                    ${word.chinesePinyin}
                </small>
            </div>

        `;

        grid.appendChild(card);

    });

}


/* =========================================================
   TRANSLATOR
========================================================= */

function normalizeText(text) {

    return text
        .trim()
        .toLowerCase();

}


function findVocabularyWord(language, value) {

    const search =
        normalizeText(value);

    return vocabulary.find(word => {

        if (language === "english") {

            return normalizeText(word.english) === search;

        }

        if (language === "korean") {

            return word.korean.trim() === value.trim();

        }

        if (language === "chinese") {

            return word.chinese.trim() === value.trim();

        }

        return false;

    });

}


function getLanguageValue(word, language) {

    if (language === "english") {

        return word.english;

    }

    if (language === "korean") {

        return word.korean;

    }

    if (language === "chinese") {

        return word.chinese;

    }

}


function getPronunciation(word, language) {

    if (language === "korean") {

        return word.koreanPronunciation;

    }

    if (language === "chinese") {

        return word.chinesePinyin;

    }

    return "";

}


function translateWord() {

    const from =
        document.getElementById("fromLanguage").value;

    const to =
        document.getElementById("toLanguage").value;

    const input =
        document.getElementById("translateInput").value.trim();


    const inputResult =
        document.getElementById("inputResult");

    const outputResult =
        document.getElementById("outputResult");


    if (!input) {

        inputResult.textContent = "";

        outputResult.textContent = "";

        return;

    }


    inputResult.innerHTML = `
        ${input}
    `;


    const word =
        findVocabularyWord(from, input);


    if (!word) {

        outputResult.innerHTML = `
            <span style="color:#ef4444;">
                Word not found in offline vocabulary.
            </span>
        `;

        return;

    }


    const translated =
        getLanguageValue(word, to);

    const pronunciation =
        getPronunciation(word, to);


    outputResult.innerHTML = `
        ${translated}

        ${
            pronunciation
            ?
            `<span class="pronunciation">
                ${pronunciation}
            </span>`
            :
            ""
        }
    `;

}


function swapLanguages() {

    const from =
        document.getElementById("fromLanguage");

    const to =
        document.getElementById("toLanguage");


    const temp =
        from.value;

    from.value =
        to.value;

    to.value =
        temp;


    renderTranslatorTabs();

    translateWord();

}


/* =========================================================
   TRANSLATOR TABS, CLEAR AND COPY
========================================================= */

function renderTranslatorTabs() {

    const values = {
        from: document.getElementById("fromLanguage").value,
        to: document.getElementById("toLanguage").value
    };

    document
        .querySelectorAll(".gt-tab")
        .forEach(tab => {

            const active =
                tab.dataset.lang === values[tab.dataset.side];

            tab.classList.toggle("active", active);

            tab.setAttribute(
                "aria-pressed",
                active ? "true" : "false"
            );

        });


    if (typeof kbSyncWithTranslator === "function") {

        kbSyncWithTranslator();

    }

}


/* Choosing the same language on both sides swaps them */

function setTranslatorLanguage(side, lang) {

    const from = document.getElementById("fromLanguage");

    const to = document.getElementById("toLanguage");


    if (side === "from") {

        if (lang === to.value) to.value = from.value;

        from.value = lang;

    }

    else {

        if (lang === from.value) from.value = to.value;

        to.value = lang;

    }


    renderTranslatorTabs();

    translateWord();

}


function onTranslatorInput() {

    const input = document.getElementById("translateInput");

    document.getElementById("gtCount").textContent =
        input.value.length + " / " + input.maxLength;

    document.getElementById("gtClear")
        .classList.toggle("hidden", input.value === "");

    translateWord();

}


function clearTranslator() {

    const input = document.getElementById("translateInput");

    input.value = "";

    onTranslatorInput();

    input.focus();

}


function copyTranslation() {

    const output = document.getElementById("outputResult");

    const clone = output.cloneNode(true);

    clone.querySelectorAll(".pronunciation")
        .forEach(item => item.remove());

    const text = clone.textContent.trim();

    if (!text || text.startsWith("Word not found")) return;


    const button = document.getElementById("gtCopy");

    function done() {

        button.classList.add("done");

        button.title = "Copied!";

        setTimeout(() => {

            button.classList.remove("done");

            button.title = "Copy translation";

        }, 1200);

    }

    if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(text).then(done).catch(() => {

            legacyCopy(text);

            done();

        });

    } else {

        legacyCopy(text);

        done();

    }

}


function legacyCopy(text) {

    const box = document.createElement("textarea");

    box.value = text;

    box.style.position = "fixed";

    box.style.opacity = "0";

    document.body.appendChild(box);

    box.select();

    try { document.execCommand("copy"); } catch (error) {}

    document.body.removeChild(box);

}


document.addEventListener(
    "DOMContentLoaded",
    renderTranslatorTabs
);


/* =========================================================
   KOREAN & CHINESE ON-SCREEN KEYBOARD  (Translator)

   - Korean: letter keys (Hangul jamo). The letters join into
     syllables automatically, for example ㅅ ㅏ ㄱ ㅗ ㅏ = 사과.
   - Chinese: type pinyin, then tap the word you want. The
     suggestions come from the offline vocabulary list.
========================================================= */

const KB_SHIFT_MAP = {
    "ㅂ": "ㅃ", "ㅈ": "ㅉ", "ㄷ": "ㄸ", "ㄱ": "ㄲ",
    "ㅅ": "ㅆ", "ㅐ": "ㅒ", "ㅔ": "ㅖ"
};

const KB_KOREAN_ROWS = [
    "ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ".split(""),
    "ㅁㄴㅇㄹㅎㅗㅓㅏㅣ".split(""),
    "ㅋㅌㅊㅍㅠㅜㅡ".split("")
];

const KB_CHINESE_ROWS = [
    "qwertyuiop".split(""),
    "asdfghjkl".split(""),
    "zxcvbnm".split("")
];


/* ----- Hangul tables ----- */

const H_L = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ".split("");

const H_V = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ".split("");

const H_T = [
    "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ",
    "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ",
    "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
];

const H_VOWEL_COMBO = {
    "ㅗㅏ": "ㅘ", "ㅗㅐ": "ㅙ", "ㅗㅣ": "ㅚ",
    "ㅜㅓ": "ㅝ", "ㅜㅔ": "ㅞ", "ㅜㅣ": "ㅟ", "ㅡㅣ": "ㅢ"
};

const H_VOWEL_SPLIT = {
    "ㅘ": ["ㅗ", "ㅏ"], "ㅙ": ["ㅗ", "ㅐ"], "ㅚ": ["ㅗ", "ㅣ"],
    "ㅝ": ["ㅜ", "ㅓ"], "ㅞ": ["ㅜ", "ㅔ"], "ㅟ": ["ㅜ", "ㅣ"],
    "ㅢ": ["ㅡ", "ㅣ"]
};

const H_FINAL_COMBO = {
    "ㄱㅅ": "ㄳ", "ㄴㅈ": "ㄵ", "ㄴㅎ": "ㄶ", "ㄹㄱ": "ㄺ",
    "ㄹㅁ": "ㄻ", "ㄹㅂ": "ㄼ", "ㄹㅅ": "ㄽ", "ㄹㅌ": "ㄾ",
    "ㄹㅍ": "ㄿ", "ㄹㅎ": "ㅀ", "ㅂㅅ": "ㅄ"
};

const H_FINAL_SPLIT = {
    "ㄳ": ["ㄱ", "ㅅ"], "ㄵ": ["ㄴ", "ㅈ"], "ㄶ": ["ㄴ", "ㅎ"],
    "ㄺ": ["ㄹ", "ㄱ"], "ㄻ": ["ㄹ", "ㅁ"], "ㄼ": ["ㄹ", "ㅂ"],
    "ㄽ": ["ㄹ", "ㅅ"], "ㄾ": ["ㄹ", "ㅌ"], "ㄿ": ["ㄹ", "ㅍ"],
    "ㅀ": ["ㄹ", "ㅎ"], "ㅄ": ["ㅂ", "ㅅ"]
};


function hDecompose(code) {

    const index = code - 0xAC00;

    return {
        L: Math.floor(index / 28 / 21),
        V: Math.floor(index / 28) % 21,
        T: index % 28
    };

}


function hCompose(L, V, T) {

    return String.fromCharCode(0xAC00 + (L * 21 + V) * 28 + T);

}


function isSyllable(ch) {

    if (!ch) return false;

    const code = ch.charCodeAt(0);

    return code >= 0xAC00 && code <= 0xD7A3;

}


/* Adds one letter (jamo) to the end of the text and joins it
   with the last syllable when it can */

function hangulAppend(before, jamo) {

    const chars = Array.from(before);

    const last = chars.pop() || "";

    const head = chars.join("");


    const jamoIsConsonant = H_L.includes(jamo);

    const jamoIsVowel = H_V.includes(jamo);


    if (isSyllable(last)) {

        const d = hDecompose(last.charCodeAt(0));

        const finalLetter = H_T[d.T];


        if (d.T === 0) {

            if (jamoIsVowel) {

                const combo = H_VOWEL_COMBO[H_V[d.V] + jamo];

                if (combo) {

                    return head + hCompose(d.L, H_V.indexOf(combo), 0);

                }

            }

            if (jamoIsConsonant) {

                const t = H_T.indexOf(jamo);

                if (t > 0) return head + hCompose(d.L, d.V, t);

            }

        }

        else {

            if (jamoIsVowel) {

                const split = H_FINAL_SPLIT[finalLetter];

                if (split) {

                    return head +
                        hCompose(d.L, d.V, H_T.indexOf(split[0])) +
                        hCompose(H_L.indexOf(split[1]), H_V.indexOf(jamo), 0);

                }

                return head +
                    hCompose(d.L, d.V, 0) +
                    hCompose(H_L.indexOf(finalLetter), H_V.indexOf(jamo), 0);

            }

            if (jamoIsConsonant) {

                const combo = H_FINAL_COMBO[finalLetter + jamo];

                if (combo) {

                    return head + hCompose(d.L, d.V, H_T.indexOf(combo));

                }

            }

        }

        return before + jamo;

    }


    /* Last letter is a single consonant or vowel */

    if (H_L.includes(last) && jamoIsVowel) {

        return head + hCompose(H_L.indexOf(last), H_V.indexOf(jamo), 0);

    }

    if (H_V.includes(last) && jamoIsVowel) {

        const combo = H_VOWEL_COMBO[last + jamo];

        if (combo) return head + combo;

    }

    return before + jamo;

}


/* Removes the last letter (not the whole syllable) */

function hangulBackspace(before) {

    const chars = Array.from(before);

    const last = chars.pop();

    if (last === undefined) return "";

    const head = chars.join("");


    if (!isSyllable(last)) return head;


    const d = hDecompose(last.charCodeAt(0));


    if (d.T > 0) {

        const split = H_FINAL_SPLIT[H_T[d.T]];

        return head + hCompose(
            d.L,
            d.V,
            split ? H_T.indexOf(split[0]) : 0
        );

    }


    const splitVowel = H_VOWEL_SPLIT[H_V[d.V]];

    if (splitVowel) {

        return head + hCompose(d.L, H_V.indexOf(splitVowel[0]), 0);

    }

    return head + H_L[d.L];

}


/* ----- Pinyin suggestions (from the vocabulary list) ----- */

let pinyinDictionary = null;


function normalizePinyin(text) {

    return String(text || "")
        .toLowerCase()
        .replace(/[üǖǘǚǜ]/g, "v")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z]/g, "");

}


function buildPinyinDictionary() {

    const entries = [];

    const seen = new Set();


    function add(text, pinyin) {

        const key = normalizePinyin(pinyin);

        const id = text + "|" + key;

        if (!key || seen.has(id)) return;

        seen.add(id);

        entries.push({
            text: text,
            key: key,
            pinyin: pinyin.trim()
        });

    }


    vocabulary.forEach(word => {

        if (!word.chinese || !word.chinesePinyin) return;


        /* The whole word */

        add(word.chinese, word.chinesePinyin);


        /* Each single character (when the pinyin lines up) */

        const syllables =
            word.chinesePinyin.trim().split(/\s+/);

        const characters =
            Array.from(word.chinese)
                .filter(ch => /[\u4E00-\u9FFF]/.test(ch));

        if (
            characters.length > 1 &&
            characters.length === syllables.length
        ) {

            characters.forEach((ch, index) =>
                add(ch, syllables[index])
            );

        }

    });


    return entries;

}


function getPinyinCandidates(buffer) {

    if (!buffer) return [];

    if (!pinyinDictionary) {

        pinyinDictionary = buildPinyinDictionary();

    }

    const exact = [];

    const starts = [];

    pinyinDictionary.forEach(entry => {

        if (entry.key === buffer) exact.push(entry);

        else if (entry.key.startsWith(buffer)) starts.push(entry);

    });

    const byLength = (a, b) =>
        Array.from(a.text).length - Array.from(b.text).length;

    return exact.sort(byLength)
        .concat(starts.sort(byLength))
        .slice(0, 9);

}


/* ----- Keyboard panel ----- */

let kbOpen = false;

let kbLang = "korean";

let kbShift = false;

let kbPinyin = "";

let kbCandidates = [];


function toggleKeyboard(force) {

    const open =
        typeof force === "boolean" ? force : !kbOpen;

    kbOpen = open;


    const panel = document.getElementById("kbPanel");

    const button = document.getElementById("kbToggle");

    const card = document.querySelector(".gt-card");

    const input = document.getElementById("translateInput");


    panel.classList.toggle("hidden", !open);

    button.classList.toggle("active", open);

    button.setAttribute("aria-expanded", open ? "true" : "false");

    card.classList.toggle("kb-open", open);


    if (open) {

        /* Use the "From" language when it is Korean or Chinese */

        const from =
            document.getElementById("fromLanguage").value;

        kbLang = from === "chinese" ? "chinese"
               : from === "korean" ? "korean"
               : kbLang;

        kbShift = false;

        kbPinyin = "";

        /* Stops the phone's own keyboard from popping up */

        input.setAttribute("inputmode", "none");

        setTranslatorLanguage("from", kbLang);

        renderKeyboard();

        input.focus();

    }

    else {

        kbPinyin = "";

        input.removeAttribute("inputmode");

    }

}


function setKeyboardLanguage(lang) {

    kbLang = lang;

    kbShift = false;

    kbPinyin = "";

    /* Translate from the language being typed */

    setTranslatorLanguage("from", lang);

    renderKeyboard();

    document.getElementById("translateInput").focus();

}


/* Called when the "From" tab changes */

function kbSyncWithTranslator() {

    if (!kbOpen) return;

    const from =
        document.getElementById("fromLanguage").value;

    if (
        (from === "korean" || from === "chinese") &&
        from !== kbLang
    ) {

        kbLang = from;

        kbShift = false;

        kbPinyin = "";

        renderKeyboard();

    }

}


function kbKeyHtml(type, value, label, extra) {

    return `<button type="button" class="kb-key ${extra || ""}" data-t="${type}" data-k="${escapeAttr(value)}">${label === undefined ? value : label}</button>`;

}


function renderKeyboard() {

    document.querySelectorAll(".kb-tab").forEach(tab => {

        tab.classList.toggle(
            "active",
            tab.dataset.kb === kbLang
        );

    });


    const keys = document.getElementById("kbKeys");

    const rows = [];


    if (kbLang === "korean") {

        rows.push(
            "1234567890".split("").map(n => kbKeyHtml("char", n))
        );

        KB_KOREAN_ROWS.forEach((row, index) => {

            const cells = row.map(letter => {

                const shown =
                    kbShift && KB_SHIFT_MAP[letter]
                    ? KB_SHIFT_MAP[letter]
                    : letter;

                return kbKeyHtml("jamo", shown);

            });


            if (index === 2) {

                cells.unshift(
                    kbKeyHtml("shift", "shift", "⇧", "wide" + (kbShift ? " on" : ""))
                );

                cells.push(kbKeyHtml("back", "back", "⌫", "wide"));

            }

            rows.push(cells);

        });

        rows.push([
            kbKeyHtml("char", "?"),
            kbKeyHtml("char", "!"),
            kbKeyHtml("char", ","),
            kbKeyHtml("char", "."),
            kbKeyHtml("space", " ", "space", "space")
        ]);

    }

    else {

        KB_CHINESE_ROWS.forEach((row, index) => {

            const cells =
                row.map(letter => kbKeyHtml("letter", letter));

            if (index === 2) {

                cells.push(kbKeyHtml("back", "back", "⌫", "wide"));

            }

            rows.push(cells);

        });

        rows.push([
            kbKeyHtml("cpunct", "？"),
            kbKeyHtml("cpunct", "！"),
            kbKeyHtml("cpunct", "，"),
            kbKeyHtml("cpunct", "。"),
            kbKeyHtml("space", " ", "space", "space")
        ]);

    }


    keys.innerHTML = rows.map(row =>
        `<div class="kb-row">${row.join("")}</div>`
    ).join("");


    renderKeyboardCandidates();

}


function renderKeyboardCandidates() {

    const box = document.getElementById("kbCandidates");


    if (kbLang === "korean") {

        box.innerHTML =
            "Tap the letters. They join into Korean syllables by themselves. Use ⇧ for ㅃ ㅉ ㄸ ㄲ ㅆ ㅒ ㅖ.";

        return;

    }


    if (!kbPinyin) {

        box.innerHTML =
            "Type pinyin (example: pingguo), then tap the word. Use <b>v</b> for ü.";

        return;

    }


    kbCandidates = getPinyinCandidates(kbPinyin);


    box.innerHTML =
        `<span class="kb-buffer">${kbPinyin}</span>` +
        (
            kbCandidates.length
            ? kbCandidates.map((item, index) => `
                <button type="button" class="kb-cand-btn" data-t="cand" data-k="${index}">
                    <b>${item.text}</b>
                    <small>${item.pinyin}</small>
                </button>
            `).join("")
            : "No match in the vocabulary."
        );

}


/* Changes the text where the cursor is */

function kbEdit(change) {

    const input = document.getElementById("translateInput");

    const value = input.value;

    const start = input.selectionStart;

    const end = input.selectionEnd;


    const before = value.slice(0, start);

    const after = value.slice(end);

    const newBefore = change(before);

    const newValue = newBefore + after;


    if (
        newValue.length > input.maxLength &&
        newValue.length > value.length
    ) {

        return;

    }


    input.value = newValue;

    input.setSelectionRange(newBefore.length, newBefore.length);

    input.focus();

    onTranslatorInput();

}


function kbPickCandidate(index) {

    const item = kbCandidates[index];

    if (!item) return;

    kbPinyin = "";

    kbEdit(before => before + item.text);

    renderKeyboardCandidates();

}


function kbKeyClick(event) {

    const button = event.target.closest("button[data-t]");

    if (!button) return;


    const type = button.dataset.t;

    const key = button.dataset.k;


    if (type === "jamo") {

        kbEdit(before => hangulAppend(before, key));

        if (kbShift) {

            kbShift = false;

            renderKeyboard();

        }

    }

    else if (type === "char") {

        kbEdit(before => before + key);

    }

    else if (type === "shift") {

        kbShift = !kbShift;

        renderKeyboard();

    }

    else if (type === "space") {

        if (kbLang === "chinese" && kbPinyin) {

            /* Space picks the first suggestion */

            if (kbCandidates.length) kbPickCandidate(0);

            else {

                kbPinyin = "";

                renderKeyboardCandidates();

            }

        }

        else {

            kbEdit(before => before + " ");

        }

    }

    else if (type === "back") {

        if (kbLang === "chinese" && kbPinyin) {

            kbPinyin = kbPinyin.slice(0, -1);

            renderKeyboardCandidates();

        }

        else if (kbLang === "korean") {

            const input = document.getElementById("translateInput");

            if (input.selectionStart !== input.selectionEnd) {

                kbEdit(before => before);

            }

            else {

                kbEdit(before => hangulBackspace(before));

            }

        }

        else {

            const input = document.getElementById("translateInput");

            if (input.selectionStart !== input.selectionEnd) {

                kbEdit(before => before);

            }

            else {

                kbEdit(before =>
                    Array.from(before).slice(0, -1).join("")
                );

            }

        }

    }

    else if (type === "letter") {

        if (kbPinyin.length < 20) kbPinyin += key;

        renderKeyboardCandidates();

    }

    else if (type === "cpunct") {

        if (kbPinyin && kbCandidates.length) {

            const first = kbCandidates[0].text;

            kbPinyin = "";

            kbEdit(before => before + first + key);

            renderKeyboardCandidates();

        }

        else {

            kbPinyin = "";

            kbEdit(before => before + key);

            renderKeyboardCandidates();

        }

    }

    else if (type === "cand") {

        kbPickCandidate(Number(key));

    }

}


/* =========================================================
   CONVERSATION VOICE OVER

   Recorded audio files are loaded from:
   audio/<scenario>/<line number>-<en|ko|zh>.mp3
   Example: audio/greetings/1-en.mp3

   If a recording is missing or can't play, the browser's
   built-in text-to-speech is used as a backup.
========================================================= */

let speechVoices = [];

let speechToken = 0;

let currentAudio = null;


function loadVoices() {

    if (!("speechSynthesis" in window)) return;

    speechVoices = speechSynthesis.getVoices();

}


if ("speechSynthesis" in window) {

    loadVoices();

    speechSynthesis.onvoiceschanged = loadVoices;

}


function pickVoice(lang) {

    const full = lang.toLowerCase();

    const base = full.split("-")[0];

    return (
        speechVoices.find(v =>
            v.lang.replace("_", "-").toLowerCase() === full
        ) ||
        speechVoices.find(v =>
            v.lang.toLowerCase().startsWith(base)
        )
    );

}


function stopSpeech() {

    speechToken++;

    if (currentAudio) {

        currentAudio.onended = null;

        currentAudio.onerror = null;

        currentAudio.pause();

        currentAudio = null;

    }

    if ("speechSynthesis" in window) {

        speechSynthesis.cancel();

    }

    document
        .querySelectorAll(".speak-btn.playing")
        .forEach(b => b.classList.remove("playing"));

}


/* =========================================================
   VOICE CHOICE (girl / boy) — button at the top right

   - Girl voice: only girl voices, in every scenario.
   - Boy voice:  only boy voices, in every scenario.
   - Changing the choice does NOT play any sound.

   Recorded files, in this order:
     1. audio/<girl|boy>/<scenario>/<line>-<en|ko|zh>.mp3
     2. audio/<scenario>/<line>-<en|ko|zh>.mp3  (your current files)
     3. the browser voice (backup), using the chosen girl / boy voice

   EXISTING_AUDIO_GENDER tells which voice your current
   audio/<scenario>/... files are:
     "boy"  -> use them only when Boy voice is chosen
               (Girl voice never plays them, so no boy voice
               gets mixed in)
     "girl" -> use them only when Girl voice is chosen
     "any"  -> always use them
     "none" -> never use them
========================================================= */

const EXISTING_AUDIO_GENDER = "boy";

const VOICE_CHOICE_KEY = "wordoraVoiceChoice";

let voiceChoice = "girl";

try {

    const savedChoice = localStorage.getItem(VOICE_CHOICE_KEY);

    if (savedChoice === "girl" || savedChoice === "boy") {
        voiceChoice = savedChoice;
    }

} catch (e) { /* storage not available */ }


const FEMALE_VOICE_NAMES = /female|woman|girl|zira|samantha|susan|hazel|heather|aria|jenny|libby|maisie|mia\b|sonia|karen|victoria|moira|tessa|fiona|ava\b|emma|michelle|nova|allison|joanna|kendra|kimberly|salli|amy|emily|ivy|jessica|laura|linda|catherine|helen|sabina|elsa|eva\b|ana\b|lucia|paulina|monica|yuna|sun-?hi|heami|seoyeon|xiaoxiao|xiaoyi|xiaohan|xiaomeng|xiaochen|huihui|yaoyao|hanhan|tingting|ting-ting|mei-?jia|sin-?ji|google (us english|uk english female|한국어|普通话|中文)/i;

const MALE_VOICE_NAMES = /(^|[^a-z])male|\bman\b|\bboy\b|david|mark\b|guy\b|daniel|alex\b|fred\b|george|james|richard|ryan|christopher|eric\b|andrew|brian|davis|thomas|sean|aaron|arthur|nathan|oliver|tom\b|jorge|injoon|in-?joon|minho|kangkang|yunxi|yunyang|yunjian|yunhao|yunze|zhiwei|danny|liang|google uk english male/i;

function genderOfVoice(voice) {

    const f = FEMALE_VOICE_NAMES.test(voice.name);

    const m = MALE_VOICE_NAMES.test(voice.name);

    if (f && !m) return "girl";

    if (m && !f) return "boy";

    return null;

}


function languageVoices(lang) {

    const full = lang.toLowerCase();

    const base = full.split("-")[0];

    let list = speechVoices.filter(v =>
        v.lang.replace("_", "-").toLowerCase() === full
    );

    if (!list.length) {

        list = speechVoices.filter(v =>
            v.lang.toLowerCase().replace("_", "-").startsWith(base)
        );

    }

    return list.slice().sort((a, b) => {

        if (a.localService !== b.localService) {
            return a.localService ? -1 : 1;
        }

        return a.name.localeCompare(b.name);

    });

}


/* Same voice every time for the same choice and language.
   exact = true when the device has a real girl / boy voice. */
function resolveGenderVoice(lang) {

    const list = languageVoices(lang);

    const exact = list.filter(v => genderOfVoice(v) === voiceChoice);

    if (exact.length) return { voice: exact[0], exact: true };

    const opposite = voiceChoice === "girl" ? "boy" : "girl";

    const neutral = list.filter(v => genderOfVoice(v) !== opposite);

    return {
        voice: (neutral.length ? neutral : list)[0],
        exact: false
    };

}


function updateVoiceMenuUI() {

    const icon = document.getElementById("voiceMenuIcon");

    const label = document.getElementById("voiceMenuLabel");

    if (icon && label) {

        icon.textContent = voiceChoice === "girl" ? "👧" : "👦";

        label.textContent =
            voiceChoice === "girl" ? "Girl voice" : "Boy voice";

    }

    document
        .querySelectorAll(".voice-option")
        .forEach(b => {
            b.classList.toggle(
                "active",
                b.dataset.voice === voiceChoice
            );
        });

}


function toggleVoiceMenu(event) {

    if (event) event.stopPropagation();

    const menu = document.getElementById("voiceMenu");

    if (!menu) return;

    const open = menu.classList.toggle("open");

    const btn = document.getElementById("voiceMenuBtn");

    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");

}


function closeVoiceMenu() {

    const menu = document.getElementById("voiceMenu");

    if (menu) menu.classList.remove("open");

    const btn = document.getElementById("voiceMenuBtn");

    if (btn) btn.setAttribute("aria-expanded", "false");

}


function setVoiceChoice(choice) {

    voiceChoice = choice;

    try {
        localStorage.setItem(VOICE_CHOICE_KEY, choice);
    } catch (e) { /* storage not available */ }

    stopSpeech();

    updateVoiceMenuUI();

    closeVoiceMenu();

}


document.addEventListener("click", event => {

    const menu = document.getElementById("voiceMenu");

    if (menu && !menu.contains(event.target)) closeVoiceMenu();

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") closeVoiceMenu();

});


updateVoiceMenuUI();


/* Backup voice (text-to-speech) */

function speakText(text, lang, onEnd) {

    if (!("speechSynthesis" in window)) {

        onEnd();

        return;

    }

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = lang;

    const resolved = resolveGenderVoice(lang);

    const voice = resolved.voice || pickVoice(lang);

    if (voice) utterance.voice = voice;

    /* No real girl / boy voice on this device: shift the pitch */
    if (!resolved.exact) {

        utterance.pitch = voiceChoice === "girl" ? 1.5 : 0.7;

    }

    utterance.rate = lang === "en-US" ? 0.95 : 0.85;

    utterance.onend = onEnd;

    utterance.onerror = onEnd;

    speechSynthesis.speak(utterance);

}


/* Recorded audio first, text-to-speech as backup */

function playClip(btn, onEnd) {

    const token = speechToken;

    const sources = [
        btn.dataset.src.replace(/^audio\//, "audio/" + voiceChoice + "/")
    ];

    if (
        EXISTING_AUDIO_GENDER === "any" ||
        EXISTING_AUDIO_GENDER === voiceChoice
    ) {
        sources.push(btn.dataset.src);
    }

    function fallback() {

        if (token !== speechToken) return;

        currentAudio = null;

        speakText(btn.dataset.text, btn.dataset.lang, onEnd);

    }

    function tryNext(i) {

        if (token !== speechToken) return;

        if (i >= sources.length) {

            fallback();

            return;

        }

        let failed = false;

        function fail() {

            if (failed) return;

            failed = true;

            tryNext(i + 1);

        }

        const audio = new Audio(sources[i]);

        currentAudio = audio;

        audio.onended = onEnd;

        audio.onerror = fail;

        const attempt = audio.play();

        if (attempt && attempt.catch) {

            attempt.catch(fail);

        }

    }

    tryNext(0);

}


function speakButtons(buttons) {

    stopSpeech();

    const token = speechToken;

    let i = 0;

    function next() {

        if (token !== speechToken || i >= buttons.length) return;

        const btn = buttons[i++];

        btn.classList.add("playing");

        playClip(btn, () => {

            btn.classList.remove("playing");

            setTimeout(next, 350);

        });

    }

    setTimeout(next, 60);

}


/* One speaker button = one language only */

function speakFromButton(button) {

    speakButtons([button]);

}


/* Play all = English -> Korean -> Chinese */

function speakAll(button) {

    const message = button.closest(".chat-message");

    const buttons = [...message.querySelectorAll(".speak-btn")];

    speakButtons(buttons);

}


function escapeAttr(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}


function speakerButton(text, lang, src) {

    return `
        <button
            class="speak-btn"
            title="Play voice over"
            data-lang="${lang}"
            data-src="${src}"
            data-text="${escapeAttr(text)}"
            onclick="speakFromButton(this)"
        >🔊</button>
    `;

}


/* =========================================================
   CONVERSATION
========================================================= */

function showConversation(
    scenario,
    clickedButton = null
) {

    const data =
        conversations[scenario];

    if (!data) return;


    stopSpeech();


    document.getElementById(
        "conversationTitle"
    ).textContent =
        data.title;


    const display =
        document.getElementById(
            "conversationDisplay"
        );


    display.innerHTML = "";


    data.messages.forEach((message, index) => {

        const [
            speaker,
            english,
            korean,
            koreanPronunciation,
            chinese,
            chinesePinyin
        ] = message;


        const n = index + 1;


        const div =
            document.createElement("div");

        div.className =
            "chat-message";


        div.innerHTML = `

            <div class="chat-header">

                <strong>
                    ${speaker}
                </strong>

                <button
                    class="speak-all-btn"
                    onclick="speakAll(this)"
                >
                    ▶ Play all
                </button>

            </div>

            <div class="lang-line">

                ${speakerButton(english, "en-US", `audio/${scenario}/${n}-en.mp3`)}

                <div class="lang-text">
                    <span class="lang-label">
                        🇺🇸 English:
                    </span>
                    ${english}
                </div>

            </div>

            <div class="lang-line">

                ${speakerButton(korean, "ko-KR", `audio/${scenario}/${n}-ko.mp3`)}

                <div class="lang-text">
                    <span class="lang-label">
                        🇰🇷 Korean:
                    </span>
                    ${korean}

                    <span class="pronunciation">
                        ${koreanPronunciation}
                    </span>
                </div>

            </div>

            <div class="lang-line">

                ${speakerButton(chinese, "zh-CN", `audio/${scenario}/${n}-zh.mp3`)}

                <div class="lang-text">
                    <span class="lang-label">
                        🇨🇳 Chinese:
                    </span>
                    ${chinese}

                    <span class="pronunciation">
                        ${chinesePinyin}
                    </span>
                </div>

            </div>

        `;


        display.appendChild(div);

    });


    document
        .querySelectorAll(".scenario-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    if (clickedButton) {

        clickedButton.classList.add("active");

    } else {

        document
            .querySelectorAll(".scenario-btn")
            .forEach(button => {

                if (
                    button.getAttribute("onclick") &&
                    button
                        .getAttribute("onclick")
                        .includes("'" + scenario + "'")
                ) {

                    button.classList.add("active");

                }

            });

    }

}


/* =========================================================
   GAMES NAVIGATION
========================================================= */

function openGame(gameType) {

    clearGameTimer();

    const hub =
        document.getElementById("gamesHub");

    const gameView =
        document.getElementById("gameView");


    if (!hub || !gameView) {

        console.error(
            "Games interface not found."
        );

        return;

    }


    /* Hide game hub */

    hub.classList.add("hidden");


    /* Show game view */

    gameView.classList.remove("hidden");


    /* Hide EVERY game */

    document
        .querySelectorAll(".game-pane")
        .forEach(game => {

            game.classList.remove("active-game");

        });


    /* Game titles */

    const titles = {

        matching:
            "🧩 Matching Game",

        object:
            "🖼️ Identify the Object",

        scramble:
            "🔤 Word Scramble",

        quiz:
            "🧠 Language Quiz"

    };


    document.getElementById(
        "currentGameTitle"
    ).textContent =
        titles[gameType] || "Game";


    /* Show selected game */

    const selectedGame =
        document.getElementById(
            gameType + "Game"
        );


    if (!selectedGame) {

        console.error(
            "Game not found:",
            gameType
        );

        return;

    }


    selectedGame.classList.add(
        "active-game"
    );


    /* Start selected game */

    if (gameType === "matching") {

        startMatchingGame();

    }

    else if (gameType === "object") {

        startObjectGame();

    }

    else if (gameType === "scramble") {

        startScrambleGame();

    }

    else if (gameType === "quiz") {

        startQuizGame();

    }

}


function backToGames() {

    clearGameTimer();

    const hub =
        document.getElementById("gamesHub");

    const gameView =
        document.getElementById("gameView");


    if (!hub || !gameView) return;


    gameView.classList.add("hidden");

    hub.classList.remove("hidden");


    document
        .querySelectorAll(".game-pane")
        .forEach(game => {

            game.classList.remove(
                "active-game"
            );

        });


    renderScoreDashboard();

}


/* =========================================================
   SOUND EFFECTS
========================================================= */

function playSound(correct) {

    showAnswerPopup(correct);


const correctSound = new Audio("correct-answer.wav");
const wrongSound = new Audio("wrong-answer.wav");

function playCorrectSound() {
    correctSound.currentTime = 0;
    correctSound.play();
}

function playWrongSound() {
    wrongSound.currentTime = 0;
    wrongSound.play();
}

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    if (!AudioContext) return;


    const audio =
        new AudioContext();


    const oscillator =
        audio.createOscillator();

    const gain =
        audio.createGain();


    oscillator.connect(gain);

    gain.connect(audio.destination);


    oscillator.type =
        correct
        ? "sine"
        : "sawtooth";


    oscillator.frequency.value =
        correct
        ? 700
        : 220;


    gain.gain.setValueAtTime(
        0.25,
        audio.currentTime
    );


    oscillator.start();


    oscillator.frequency.exponentialRampToValueAtTime(

        correct
        ? 1000
        : 120,

        audio.currentTime + 0.18

    );


    gain.gain.exponentialRampToValueAtTime(

        0.001,

        audio.currentTime + 0.3

    );


    oscillator.stop(
        audio.currentTime + 0.3
    );

}


/* =========================================================
   GAME WORD POOL

   Shared by the Matching Game and Identify the Object.
   The words are looked up in the main vocabulary list, so
   the data always stays the same as the Translator.
   Add or remove names here to change what the games use.
========================================================= */

/* Words with a clear picture (used by Identify the Object,
   and also by the Matching Game) */

const GAME_WORD_NAMES = [

    "Apple", "Banana", "Water", "Book", "House", "Cat", "Dog",
    "Bread", "Car", "Coffee", "Money", "School", "Chair", "Bed",
    "Key", "Camera", "Television", "Hat", "Shoes", "Bag", "Watch",
    "Tomato", "Pizza", "Cake", "Fish", "Rabbit", "Lion", "Elephant",
    "Horse", "Pig", "Mountain", "Rose", "Sunflower", "Hospital",
    "Bank", "Airport", "Bridge", "Pineapple", "Cherry", "Lemon",
    "Ice cream", "Hamburger", "Baseball", "Soccer", "Basketball",
    "Ring", "Crown", "Tiger", "Panda", "Monkey", "Duck", "Chicken",
    "Sofa", "Spoon", "Fork", "Knife", "Shirt", "Pants", "Jacket",
    "Battery", "Cloud", "Sea", "Fire", "Bear", "Fox", "Giraffe",
    "Cow", "Sheep", "Goat", "Koala", "Tulip", "Hotel", "Castle",
    "Church", "Museum", "Tower", "Beach", "Island", "Volcano",
    "Desert", "Kiwi", "Coconut", "Pear", "Melon", "Sushi", "Salad",
    "Cookie", "Taco", "Hot dog", "Soup", "Golf", "Tennis", "Phone"

];


/* Extra words for the Matching Game (no picture needed).
   Everything here is taken from the main vocabulary list. */

const MATCHING_EXTRA_NAMES = [

    "Hello", "Thank You", "Sorry", "Welcome", "Yes", "No",
    "Teacher", "Student", "Family", "Friend", "Love", "Happy",
    "Sad", "Angry", "Sleepy", "Eat", "Drink", "Sleep", "Read",
    "Write", "Walk", "Run", "Speak", "Listen", "Study", "Work",
    "Buy", "Sell", "Red", "Blue", "Yellow", "Green", "Orange",
    "Purple", "Pink", "Brown", "Black", "White", "Gray", "One",
    "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
    "Nine", "Ten", "Rain", "Snow", "Today", "Tomorrow",
    "Yesterday", "Morning", "Night", "Left", "Right", "Up",
    "Down", "Brother", "Sister", "Uncle", "Aunt", "Grandfather",
    "Grandmother", "Boyfriend", "Girlfriend", "Park", "Forest",
    "River", "Lake", "Bathroom", "Kitchen", "Birthday"

];


/* Looks the words up in the vocabulary list. Words that are not
   in the vocabulary are skipped, and words that would look the
   same as another card are skipped too. */

function getGameWordPool(names) {

    const pool = [];

    const usedEnglish = new Set();

    const usedKorean = new Set();

    const usedChinese = new Set();

    const usedIcons = new Set();


    (names || GAME_WORD_NAMES).forEach(name => {

        const word =
            vocabulary.find(item =>
                item.english.toLowerCase() === name.toLowerCase()
            );

        if (!word) return;


        /* Keep the cards short enough to fit */

        if (
            word.korean.length > 7 ||
            word.chinese.length > 5 ||
            word.english.length > 14
        ) {

            return;

        }


        if (
            usedEnglish.has(word.english.toLowerCase()) ||
            usedKorean.has(word.korean) ||
            usedChinese.has(word.chinese) ||
            usedIcons.has(word.icon)
        ) {

            return;

        }


        usedEnglish.add(word.english.toLowerCase());

        usedKorean.add(word.korean);

        usedChinese.add(word.chinese);

        usedIcons.add(word.icon);

        pool.push(word);

    });


    return pool;

}


/* Pool used by the Matching Game (pictures not needed) */

function getMatchingPool() {

    return getGameWordPool(
        GAME_WORD_NAMES.concat(MATCHING_EXTRA_NAMES)
    );

}


/* Picks words for a new play. Words that were already used in
   the earlier plays are skipped, so "Play Again" gives new words
   until every word has been seen once. Then it starts over.
   The result is always shuffled. */

const gameSeenWords = {};

const gameLastSet = {};

const SEEN_STORAGE_PREFIX = "wordoraSeen_";


function loadSeenWords(key) {

    if (gameSeenWords[key]) return gameSeenWords[key];

    let list = [];

    try {

        list = JSON.parse(
            localStorage.getItem(SEEN_STORAGE_PREFIX + key) || "[]"
        );

    } catch (error) {}

    gameSeenWords[key] =
        new Set(Array.isArray(list) ? list : []);

    return gameSeenWords[key];

}


function saveSeenWords(key) {

    try {

        localStorage.setItem(
            SEEN_STORAGE_PREFIX + key,
            JSON.stringify([...gameSeenWords[key]])
        );

    } catch (error) {}

}


/* idOf tells what makes an item "the same" (default: its English word) */

function pickFreshWords(pool, count, key, idOf) {

    const id = idOf || (word => word.english);

    const seen = loadSeenWords(key);

    const last = gameLastSet[key] || new Set();


    let chosen =
        shuffleArray(
            pool.filter(word =>
                !seen.has(id(word))
            )
        ).slice(0, count);


    if (chosen.length < count) {

        /* Not enough new words left: start a new round, but avoid
           the words of the play that just finished when possible */

        seen.clear();

        const taken = new Set(chosen.map(id));

        const rest =
            shuffleArray(
                pool.filter(word =>
                    !taken.has(id(word))
                )
            );

        const fresh = rest.filter(word => !last.has(id(word)));

        const old = rest.filter(word => last.has(id(word)));

        chosen =
            chosen.concat(
                fresh.concat(old).slice(0, count - chosen.length)
            );

        chosen.forEach(word => seen.add(id(word)));

    }

    else {

        chosen.forEach(word => seen.add(id(word)));

    }


    gameLastSet[key] = new Set(chosen.map(id));

    saveSeenWords(key);


    return shuffleArray(chosen);

}


/* =========================================================
   GAME LANGUAGE  (Korean / Chinese / Both)

   The buttons in the sidebar choose which language appears
   in the games. The choice is saved in the browser.
========================================================= */

const GAME_LANGUAGE_KEY = "wordoraGameLanguage";

const GAME_LANGUAGE_CHOICES = ["korean", "chinese", "both"];


let gameLanguage = (function () {

    try {

        const saved =
            localStorage.getItem(GAME_LANGUAGE_KEY);

        return GAME_LANGUAGE_CHOICES.includes(saved)
            ? saved
            : "both";

    } catch (error) {

        return "both";

    }

})();


function getGameLanguages() {

    return gameLanguage === "both"
        ? ["korean", "chinese"]
        : [gameLanguage];

}


function getLanguageLabel(lang) {

    return lang === "korean"
        ? "Korean"
        : "Chinese";

}


function getWordPronunciation(word, lang) {

    return lang === "korean"
        ? word.koreanPronunciation
        : word.chinesePinyin;

}


/* "Korean", "Chinese" or "Korean or Chinese" */

function getLanguageText() {

    return getGameLanguages()
        .map(getLanguageLabel)
        .join(" or ");

}


function renderGameLanguageButtons() {

    document
        .querySelectorAll(".sl-btn")
        .forEach(button => {

            const active =
                button.dataset.lang === gameLanguage;

            button.classList.toggle("active", active);

            button.setAttribute(
                "aria-pressed",
                active ? "true" : "false"
            );

        });

}


/* The language box is only shown in the Games section */

function updateGameLanguageBox(sectionId) {

    const box =
        document.getElementById("gameLangBox");

    if (box) {

        box.classList.toggle(
            "hidden",
            sectionId !== "games"
        );

    }

}


function setGameLanguage(lang) {

    if (
        !GAME_LANGUAGE_CHOICES.includes(lang) ||
        lang === gameLanguage
    ) {

        return;

    }


    gameLanguage = lang;

    try {

        localStorage.setItem(GAME_LANGUAGE_KEY, lang);

    } catch (error) {}


    renderGameLanguageButtons();


    /* Restart the game that is open so the new language is used */

    const pane =
        document.querySelector(".game-pane.active-game");

    if (!pane) return;


    if (pane.id === "matchingGame") {

        startMatchingGame();

    }

    else if (pane.id === "objectGame") {

        startObjectGame();

    }

    else if (pane.id === "quizGame") {

        startQuizGame();

    }

}


document.addEventListener(
    "DOMContentLoaded",
    renderGameLanguageButtons
);


/* =========================================================
   DIFFICULTY  (Easy / Hard / Difficult)

   One selector in the Games section controls all 4 games.
   The choice is saved in the browser. Changing it restarts
   the game that is open.

   Easy      - fewer words / choices, with hints, no timer
   Hard      - more words / choices, no hints, no timer
   Difficult - the most words / choices, plus a timer in
               Identify the Object, Word Scramble and Quiz
========================================================= */

const GAME_DIFFICULTY_KEY = "wordoraGameDifficulty";

const DIFFICULTY_LEVELS = ["easy", "hard", "difficult"];

const DIFFICULTY_INFO = {
    easy:      { label: "Easy",      icon: "🟢" },
    hard:      { label: "Hard",      icon: "🟠" },
    difficult: { label: "Difficult", icon: "🔴" }
};

const DIFFICULTY_NOTES = {
    easy:      "Easy: fewer words and choices, with hints. No timer.",
    hard:      "Hard: more words and choices. No hints and no timer.",
    difficult: "Difficult: the most words and choices. There is a timer in Identify the Object, Word Scramble and Language Quiz."
};

/* Rules for every game and level.
   time = seconds for each question (0 = no timer) */

const DIFFICULTY_SETTINGS = {

    matching: {
        easy:      { batches: 2, perBatch: 4, penalty: 2 },
        hard:      { batches: 2, perBatch: 8, penalty: 4 },
        difficult: { batches: 3, perBatch: 8, penalty: 6 }
    },

    object: {
        easy:      { choices: 3, time: 0 },
        hard:      { choices: 4, time: 0 },
        difficult: { choices: 6, time: 8 }
    },

    scramble: {
        easy:      { hint: true,  time: 0 },
        hard:      { hint: false, time: 0 },
        difficult: { hint: false, time: 20 }
    },

    quiz: {
        easy:      { choices: 2, time: 0 },
        hard:      { choices: 3, time: 0 },
        difficult: { choices: 4, time: 10 }
    }

};


let gameDifficulty = (function () {

    try {

        const saved =
            localStorage.getItem(GAME_DIFFICULTY_KEY);

        return DIFFICULTY_LEVELS.includes(saved)
            ? saved
            : "easy";

    } catch (error) {

        return "easy";

    }

})();


function diffSetting(game) {

    return DIFFICULTY_SETTINGS[game][gameDifficulty];

}


function getDifficultyLabel() {

    return DIFFICULTY_INFO[gameDifficulty].label;

}


/* Best scores are saved separately for each level */

function hsKey(game) {

    return game + "HighScore_" + gameDifficulty;

}


function getHighScore(game) {

    /* Best score of the current player for this game and level */

    return loadHistory()
        .filter(item =>
            item.game === game &&
            item.level === gameDifficulty
        )
        .reduce(
            (best, item) =>
                Math.max(best, Number(item.score) || 0),
            0
        );

}


function setHighScore(game, value) {

    /* Best scores are worked out from the saved history,
       so nothing else needs to be saved here. */

}


const BEST_LABEL_IDS = {
    matching: "matchingHighScore",
    object: "objectHighScore",
    scramble: "scrambleHighScore",
    quiz: "quizHighScore"
};


function updateBestLabel(game, shownValue) {

    const element =
        document.getElementById(BEST_LABEL_IDS[game]);

    if (!element) return;

    element.textContent =
        "Best Score (" + getDifficultyLabel() + "): " +
        (shownValue === undefined ? getHighScore(game) : shownValue);

}


function renderDifficultyBars() {

    document
        .querySelectorAll(".diff-slot")
        .forEach(slot => {

            slot.innerHTML = `

                <div class="diff-bar">

                    <span class="diff-title">🎚️ Difficulty</span>

                    <div class="diff-buttons" role="group" aria-label="Difficulty">

                        ${DIFFICULTY_LEVELS.map(level => `

                            <button
                                type="button"
                                class="diff-btn ${level} ${level === gameDifficulty ? "active" : ""}"
                                aria-pressed="${level === gameDifficulty}"
                                onclick="setGameDifficulty('${level}')"
                            >
                                ${DIFFICULTY_INFO[level].icon}
                                ${DIFFICULTY_INFO[level].label}
                            </button>

                        `).join("")}

                    </div>

                    <p class="diff-note">
                        ${DIFFICULTY_NOTES[gameDifficulty]}
                    </p>

                </div>

            `;

        });

}


function restartOpenGame() {

    clearGameTimer();

    const pane =
        document.querySelector(".game-pane.active-game");

    if (!pane) return;

    if (pane.id === "matchingGame") startMatchingGame();

    else if (pane.id === "objectGame") startObjectGame();

    else if (pane.id === "scrambleGame") startScrambleGame();

    else if (pane.id === "quizGame") startQuizGame();

}


/* The Shuffle button: start the open game again with new random words */

let shuffleLabelTimer = null;

function shuffleOpenGame() {

    restartOpenGame();

    const button = document.getElementById("shuffleGameBtn");

    if (!button) return;

    button.textContent = "✅ New words!";

    clearTimeout(shuffleLabelTimer);

    shuffleLabelTimer = setTimeout(() => {

        button.textContent = "🔀 Shuffle";

    }, 1000);

}


function setGameDifficulty(level) {

    if (
        !DIFFICULTY_LEVELS.includes(level) ||
        level === gameDifficulty
    ) {

        return;

    }

    gameDifficulty = level;

    try {

        localStorage.setItem(GAME_DIFFICULTY_KEY, level);

    } catch (error) {}

    renderDifficultyBars();

    restartOpenGame();

}


document.addEventListener(
    "DOMContentLoaded",
    renderDifficultyBars
);


/* =========================================================
   QUESTION TIMER  (used when the level has a time limit)
========================================================= */

let gameTimerId = null;


function clearGameTimer() {

    if (gameTimerId) {

        clearInterval(gameTimerId);

        gameTimerId = null;

    }

}


function timerHtml(seconds) {

    if (!seconds) return "";

    return `
        <div class="game-timer">
            <div class="game-timer-text">
                ⏱ <span id="gameTimerLabel">${seconds}</span>s
            </div>
            <div class="game-timer-bar">
                <span id="gameTimerFill"></span>
            </div>
        </div>
    `;

}


function startGameTimer(seconds, onTimeout) {

    clearGameTimer();

    if (!seconds) return;


    let left = seconds;

    const label = document.getElementById("gameTimerLabel");

    const fill = document.getElementById("gameTimerFill");


    function paint() {

        if (label) label.textContent = Math.max(Math.ceil(left), 0);

        if (fill) {

            fill.style.width =
                Math.max(left / seconds, 0) * 100 + "%";

            fill.classList.toggle("low", left <= seconds * 0.3);

        }

    }

    paint();


    gameTimerId = setInterval(() => {

        /* Stop the timer when the player leaves the games */

        const gamesSection =
            document.getElementById("games");

        const appPage =
            document.getElementById("appPage");

        if (
            !gamesSection ||
            !gamesSection.classList.contains("active") ||
            appPage.classList.contains("hidden")
        ) {

            clearGameTimer();

            return;

        }


        left -= 0.1;

        paint();


        if (left <= 0) {

            clearGameTimer();

            onTimeout();

        }

    }, 100);

}


/* =========================================================
   CORRECT / WRONG POP-UP

   Shown in every game each time an answer is checked.
   It is called from playSound(), so it always shows together
   with the sound (the sounds themselves are not changed).
========================================================= */

let answerPopupTimer = null;

/* Optional text for the next pop-up (used when the time runs out) */

let nextPopupLabel = null;


function showAnswerPopup(correct) {

    let popup =
        document.getElementById("answerPopup");

    if (!popup) {

        popup = document.createElement("div");

        popup.id = "answerPopup";

        popup.setAttribute("role", "status");

        popup.setAttribute("aria-live", "polite");

        document.body.appendChild(popup);

    }

    popup.className =
        "answer-popup " + (correct ? "correct" : "wrong");

    popup.textContent =
        nextPopupLabel ||
        (correct ? "✅ Correct!" : "❌ Incorrect!");

    nextPopupLabel = null;

    /* Centre it over the page content (the area right of the sidebar) */

    const main = document.querySelector(".main");

    if (main) {

        const area = main.getBoundingClientRect();

        popup.style.left = (area.left + area.width / 2) + "px";

    }

    popup.style.top = (window.innerHeight / 2) + "px";

    /* Restart the animation */

    void popup.offsetWidth;

    popup.classList.add("show");

    clearTimeout(answerPopupTimer);

    answerPopupTimer = setTimeout(() => {

        popup.classList.remove("show");

    }, 850);

}


/* =========================================================
   MATCHING GAME

   Easy:      2 batches of 4 words
   Hard:      2 batches of 8 words
   Difficult: 3 batches of 8 words (bigger penalty for mistakes)
   The words are picked randomly and shuffled every time the
   game starts, so each play is different.
========================================================= */

let matchingBatches = [];

let matchingBatch = 0;

let matchingBatchMatches = 0;

let matchingCards = [];

let matchingSelected = [];

let matchingMatches = 0;

let matchingAttempts = 0;

let matchingRun = 0;


function getMatchingGroupSize() {

    /* English + each chosen language */

    return 1 + getGameLanguages().length;

}


function getMatchingTotal() {

    return matchingBatches.reduce(
        (sum, words) => sum + words.length,
        0
    );

}


function createMatchingCards(words) {

    const cards = [];


    words.forEach((word, index) => {

        cards.push({

            id: index,
            type: "English",
            value: word.english,
            pronunciation: "",
            pairId: index

        });


        getGameLanguages().forEach(lang => {

            cards.push({

                id: index,
                type: getLanguageLabel(lang),
                value: word[lang],
                pronunciation:
                    getWordPronunciation(word, lang),
                pairId: index

            });

        });

    });


    return shuffleArray(cards);

}


function startMatchingGame() {

    clearGameTimer();

    matchingRun++;


    const cfg = diffSetting("matching");


    const pool =
        pickFreshWords(
            getMatchingPool(),
            cfg.batches * cfg.perBatch,
            "matching"
        );


    matchingBatches = [];

    for (let b = 0; b < cfg.batches; b++) {

        matchingBatches.push(
            pool.slice(
                b * cfg.perBatch,
                (b + 1) * cfg.perBatch
            )
        );

    }


    matchingBatch = 0;

    matchingMatches = 0;

    matchingAttempts = 0;


    const description =
        document.querySelector(
            "#matchingGame .game-description"
        );

    if (description) {

        const langs =
            getGameLanguages().map(getLanguageLabel);

        description.textContent =
            (
                gameLanguage === "both"
                ? "Match the English, Korean, and Chinese cards that belong to the same word. Korean pronunciation and Chinese Pinyin are shown on the cards."
                : `Match the English and ${langs[0]} cards that belong to the same word. The ${langs[0] === "Korean" ? "pronunciation" : "Pinyin"} is shown on the cards.`
            ) +
            ` (${getDifficultyLabel()}: ${cfg.batches} batches of ${cfg.perBatch} words)`;

    }


    loadMatchingBatch();


    document.getElementById(
        "matchingResult"
    ).textContent = "";

}


function loadMatchingBatch() {

    matchingCards =
        createMatchingCards(
            matchingBatches[matchingBatch]
        );

    matchingSelected = [];

    matchingBatchMatches = 0;


    updateMatchingScore();

    renderMatchingBoard();

}


function renderMatchingBoard() {

    const board =
        document.getElementById(
            "matchingBoard"
        );


    board.innerHTML = "";


    matchingCards.forEach((card, index) => {

        const button =
            document.createElement("button");


        button.className =
            "match-card";


        button.dataset.index =
            index;


        button.innerHTML = `

            <span class="match-type">
                ${card.type}
            </span>

            <span class="match-main">
                ${card.value}
            </span>

            ${
                card.pronunciation
                ?
                `<span class="match-pronunciation">
                    ${card.pronunciation}
                </span>`
                :
                ""
            }

        `;


        button.onclick =
            () => selectMatchingCard(index);


        board.appendChild(button);

    });

}


function selectMatchingCard(index) {

    /* Naka-lock habang chine-check ang sagot */
    if (
        matchingSelected.length >= getMatchingGroupSize()
    ) {

        return;

    }


    const buttons =
        document.querySelectorAll(
            ".match-card"
        );


    if (
        buttons[index].disabled
    ) {

        return;

    }


    /* Pindutin ulit ang napili na = unselect */
    if (
        matchingSelected.includes(index)
    ) {

        matchingSelected =
            matchingSelected.filter(i => i !== index);

        buttons[index].classList.remove(
            "selected"
        );

        return;

    }


    /* Isang card lang bawat language:
       kapag ibang English (o Korean/Chinese) ang pinili,
       papalitan nito yung dating napili sa language na iyon */
    const sameTypeIndex =
        matchingSelected.find(i =>
            matchingCards[i].type ===
            matchingCards[index].type
        );

    if (sameTypeIndex !== undefined) {

        matchingSelected =
            matchingSelected.filter(i => i !== sameTypeIndex);

        buttons[sameTypeIndex].classList.remove(
            "selected"
        );

    }


    matchingSelected.push(index);

    buttons[index].classList.add(
        "selected"
    );


    if (
        matchingSelected.length === getMatchingGroupSize()
    ) {

        checkMatchingPair();

    }

}


function checkMatchingPair() {

    matchingAttempts++;


    const run = matchingRun;


    const indexes =
        matchingSelected;


    const cards =
        indexes.map(index =>
            matchingCards[index]
        );


    const samePair =
        cards.every(card =>
            card.pairId === cards[0].pairId
        );


    const buttons =
        document.querySelectorAll(
            ".match-card"
        );


    if (samePair) {

        playSound(true);

        matchingMatches++;

        matchingBatchMatches++;


        indexes.forEach(index => {

            buttons[index]
                .classList.remove("selected");

            buttons[index]
                .classList.add("matched");

            buttons[index].disabled = true;

        });


        matchingSelected = [];


        updateMatchingScore();


        /* Batch finished? */

        if (
            matchingBatchMatches ===
            matchingBatches[matchingBatch].length
        ) {

            if (
                matchingBatch < matchingBatches.length - 1
            ) {

                document.getElementById(
                    "matchingResult"
                ).textContent =
                    `✅ Batch ${matchingBatch + 1} complete! Get ready for the next words...`;


                setTimeout(() => {

                    if (run !== matchingRun) return;

                    matchingBatch++;

                    document.getElementById(
                        "matchingResult"
                    ).textContent = "";

                    loadMatchingBatch();

                }, 1100);

            }

            else {

                finishMatchingGame();

            }

        }

    }

    else {

        playSound(false);


        setTimeout(() => {

            if (run !== matchingRun) return;


            indexes.forEach(index => {

                buttons[index]
                    .classList.remove(
                        "selected"
                    );

            });


            matchingSelected = [];

            updateMatchingScore();

        }, 700);

    }

}


function updateMatchingScore() {

    const total = getMatchingTotal();


    document.getElementById(
        "matchingScore"
    ).textContent =
        `Batch ${matchingBatch + 1} / ${matchingBatches.length} – Matches: ${matchingMatches} / ${total}`;


    document.getElementById(
        "matchingAttempts"
    ).textContent =
        "Attempts: " + matchingAttempts;


    updateBestLabel("matching");

}


function finishMatchingGame() {

    const total = getMatchingTotal();

    const cfg = diffSetting("matching");


    /* 100 points for a perfect game, minus points for each extra attempt
       (the penalty is bigger on the harder levels) */

    const score =
        Math.max(
            100 -
            Math.max(
                0,
                matchingAttempts - total
            ) * cfg.penalty,
            10
        );


    if (score > getHighScore("matching")) {

        setHighScore("matching", score);

    }


    recordGameResult("matching", score);


    document.getElementById(
        "matchingResult"
    ).innerHTML = `
        🎉 Great job!
        <br>
        Final Score: ${score}
    `;


    updateMatchingScore();

}


/* =========================================================
   OBJECT GAME

   2 batches of 15 objects (30 questions in total).
   Easy:      3 choices
   Hard:      4 choices
   Difficult: 6 choices and 8 seconds for each question
========================================================= */

const OBJECT_BATCHES = 2;

const OBJECT_PER_BATCH = 15;


function buildObjectQuestions() {

    return shuffleArray(getGameWordPool())
        .slice(0, OBJECT_BATCHES * OBJECT_PER_BATCH);

}


/* Which language each question uses (Korean, Chinese, or a
   mix of both when "Both" is chosen) */

function buildObjectLangs(count) {

    const langs = getGameLanguages();

    const result = [];

    for (let i = 0; i < count; i++) {

        result.push(langs[i % langs.length]);

    }

    return shuffleArray(result);

}


let objectQuestions =
    buildObjectQuestions();

let objectLangs =
    buildObjectLangs(objectQuestions.length);


let objectIndex = 0;

let objectScore = 0;

let objectBatchScore = 0;

let objectRun = 0;


function startObjectGame() {

    clearGameTimer();

    objectRun++;

    objectQuestions =
        pickFreshWords(
            getGameWordPool(),
            OBJECT_BATCHES * OBJECT_PER_BATCH,
            "object"
        );

    objectLangs =
        buildObjectLangs(objectQuestions.length);


    const cfg = diffSetting("object");

    const description =
        document.querySelector(
            "#objectGame .game-description"
        );

    if (description) {

        description.textContent =
            `Look at the object and choose the correct ${getLanguageText()} word. ` +
            `(${getDifficultyLabel()}: ${cfg.choices} choices` +
            (cfg.time ? `, ${cfg.time} seconds for each question)` : ")");

    }


    objectIndex = 0;

    objectScore = 0;

    objectBatchScore = 0;

    updateBestLabel("object");

    updateObjectGame();

}


function updateObjectGame() {

    const container =
        document.getElementById(
            "objectContent"
        );


    if (
        objectIndex >=
        objectQuestions.length
    ) {

        finishObjectGame();

        return;

    }


    const cfg = diffSetting("object");


    const batch =
        Math.floor(objectIndex / OBJECT_PER_BATCH);

    const questionInBatch =
        objectIndex % OBJECT_PER_BATCH;


    document.getElementById(
        "objectProgress"
    ).textContent =
        `Batch ${batch + 1} / ${OBJECT_BATCHES} – Question ${questionInBatch + 1} / ${OBJECT_PER_BATCH}`;


    document.getElementById(
        "objectScore"
    ).textContent =
        "Score: " + objectScore;


    const current =
        objectQuestions[
            objectIndex
        ];


    const lang =
        objectLangs[objectIndex];


    const choices =
        generateObjectChoices(
            current,
            lang,
            cfg.choices
        );


    container.innerHTML = `

        ${timerHtml(cfg.time)}

        <div class="object-image">
            ${current.icon}
        </div>

        <div class="object-question">
            Which ${getLanguageLabel(lang)} word matches this object?
        </div>

        <div class="object-options opts-${cfg.choices}">

            ${choices.map(choice => `

                <button
                    class="object-option"
                    data-value="${escapeAttr(choice[lang])}"
                    onclick="answerObject(this.dataset.value)"
                >

                    <strong>
                        ${choice[lang]}
                    </strong>

                    <span>
                        ${getWordPronunciation(choice, lang)}
                    </span>

                </button>

            `).join("")}

        </div>

    `;


    const run = objectRun;

    const index = objectIndex;

    startGameTimer(cfg.time, () => {

        if (run !== objectRun || index !== objectIndex) return;

        nextPopupLabel = "⏰ Time's up!";

        answerObject(null);

    });

}


function generateObjectChoices(correctWord, lang, count) {

    const others =
        shuffleArray(
            getGameWordPool().filter(word =>
                word[lang] !== correctWord[lang]
            )
        );


    return shuffleArray(
        [correctWord].concat(others.slice(0, count - 1))
    );

}


/* answer = null means the time ran out */

function answerObject(answer) {

    const buttons =
        document.querySelectorAll(
            ".object-option"
        );


    /* Already answered */

    if (
        !buttons.length ||
        buttons[0].disabled
    ) {

        return;

    }


    clearGameTimer();


    const run = objectRun;


    const current =
        objectQuestions[
            objectIndex
        ];

    const lang =
        objectLangs[objectIndex];


    const correct =
        answer !== null &&
        answer === current[lang];


    buttons.forEach(button => {

        button.disabled = true;

        if (button.dataset.value === current[lang]) {

            button.classList.add("right");

        }

        else if (
            answer !== null &&
            button.dataset.value === answer
        ) {

            button.classList.add("bad");

        }

    });


    if (correct) {

        objectScore++;

        objectBatchScore++;

    }


    playSound(correct);


    document.getElementById(
        "objectScore"
    ).textContent =
        "Score: " + objectScore;


    setTimeout(() => {

        if (run !== objectRun) return;


        objectIndex++;


        /* End of a batch (but not the end of the game) */

        if (
            objectIndex < objectQuestions.length &&
            objectIndex % OBJECT_PER_BATCH === 0
        ) {

            showObjectBatchBreak();

            return;

        }


        updateObjectGame();

    }, 900);

}


function showObjectBatchBreak() {

    const finishedBatch =
        objectIndex / OBJECT_PER_BATCH;


    document.getElementById(
        "objectContent"
    ).innerHTML = `

        <div class="game-result">

            ✅ Batch ${finishedBatch} complete!

            <br><br>

            Batch Score:
            ${objectBatchScore} / ${OBJECT_PER_BATCH}

            <br>

            <button
                class="restart-btn"
                onclick="continueObjectGame()"
            >
                Start Batch ${finishedBatch + 1}
            </button>

        </div>

    `;


    objectBatchScore = 0;

}


function continueObjectGame() {

    updateObjectGame();

}


function finishObjectGame() {

    clearGameTimer();

    recordGameResult("object", objectScore);

    const highScore = getHighScore("object");


    if (
        objectScore > highScore
    ) {

        setHighScore("object", objectScore);

    }


    document.getElementById(
        "objectContent"
    ).innerHTML = `

        <div class="game-result">

            🎉 Game Complete!

            <br><br>

            Your Score:
            ${objectScore} / ${objectQuestions.length}


            <br>

            Best Score:
            ${Math.max(
                objectScore,
                highScore
            )}

            <br>

            <button
                class="restart-btn"
                onclick="startObjectGame()"
            >
                Play Again
            </button>

        </div>

    `;


    updateBestLabel(
        "object",
        Math.max(objectScore, highScore)
    );

}


/* =========================================================
   WORD SCRAMBLE

   Easy:      a hint (picture, first letter, letter count)
              and the first letter stays in place
   Hard:      no hint
   Difficult: no hint and 20 seconds for each word
========================================================= */

const scrambleWords = [

    "Apple",
    "Banana",
    "Water",
    "Book",
    "House",
    "Student",
    "Family",
    "Friend",
    "Birthday",
    "Boy Friend",
    "Girl Friend",
    "Cherry",
    "Fish",
    "Beef",
    "Soup",
    "French fries",
    "Pork",
    "Spaghetti",
    "Cake",
    "Sushi",
    "Cookie",
    "Billiards",
    "Bank",
    "Church",
    "Forest",
    "Beach",
    "Park",
    "Bay",
    "Husband",
    "Computer",
    

];


/* Every word that can appear in Word Scramble: the original list plus
   the single words of the game word pool (letters only, 3 to 12 long) */

function getScramblePool() {

    const names = [];

    const seenNames = new Set();

    scrambleWords
        .concat(GAME_WORD_NAMES)
        .concat(MATCHING_EXTRA_NAMES)
        .forEach(name => {

            const key = name.toLowerCase();

            const letters = name.replace(/\s+/g, "");

            if (
                seenNames.has(key) ||
                !/^[A-Za-z]+$/.test(letters) ||
                letters.length < 3 ||
                letters.length > 12 ||
                name.length > 12
            ) {

                return;

            }

            seenNames.add(key);

            names.push({ english: name });

        });

    return names;

}


let scrambleIndex = 0;

let scrambleScore = 0;

let currentScrambleWord = "";

let scrambleList = scrambleWords;

let scrambleRun = 0;


function startScrambleGame() {

    clearGameTimer();

    scrambleRun++;

    /* New random order every time the game starts */

    scrambleList =
        pickFreshWords(
            getScramblePool(),
            scrambleWords.length,
            "scramble",
            word => word.english
        ).map(word => word.english);

    scrambleIndex = 0;

    scrambleScore = 0;


    const cfg = diffSetting("scramble");

    const description =
        document.querySelector(
            "#scrambleGame .game-description"
        );

    if (description) {

        description.textContent =
            "Rearrange the letters and type the correct English word. " +
            `(${getDifficultyLabel()}: ` +
            (
                cfg.hint
                ? "hint and first letter shown"
                : "no hint"
            ) +
            (cfg.time ? `, ${cfg.time} seconds for each word)` : ")");

    }


    updateBestLabel("scramble");

    updateScrambleGame();

}


function scrambleWord(word, keepFirst) {

    const first =
        keepFirst ? word.charAt(0) : "";

    const rest =
        keepFirst ? word.slice(1) : word;


    let letters =
        rest.split("");

    let shuffled =
        rest;

    let attempts = 0;


    while (
        rest.length > 1 &&
        shuffled.toLowerCase() ===
        rest.toLowerCase() &&
        attempts < 10
    ) {

        letters =
            shuffleArray(letters);

        shuffled =
            letters.join("");

        attempts++;

    }


    return first + shuffled;

}


function getScrambleHint(word) {

    const plain =
        word.toLowerCase().replace(/\s+/g, "");

    const match =
        vocabulary.find(item =>
            item.english.toLowerCase().replace(/\s+/g, "") === plain
        );

    const letters =
        word.replace(/\s+/g, "").length;

    return `
        <div class="scramble-hint">
            💡 Hint:
            ${match ? match.icon : ""}
            starts with <b>${word.charAt(0).toUpperCase()}</b>
            · ${letters} letters
        </div>
    `;

}


function updateScrambleGame() {

    if (
        scrambleIndex >=
        scrambleList.length
    ) {

        finishScrambleGame();

        return;

    }


    const cfg = diffSetting("scramble");


    currentScrambleWord =
        scrambleList[
            scrambleIndex
        ];


    const scrambled =
        scrambleWord(
            currentScrambleWord,
            cfg.hint
        );


    document.getElementById(
        "scrambleProgress"
    ).textContent =
        `Question ${scrambleIndex + 1} / ${scrambleList.length}`;


    document.getElementById(
        "scrambleScore"
    ).textContent =
        "Score: " + scrambleScore;


    document.getElementById(
        "scrambleContent"
    ).innerHTML = `

        ${timerHtml(cfg.time)}

        ${cfg.hint ? getScrambleHint(currentScrambleWord) : ""}

        <div class="scramble-word">
            ${scrambled}
        </div>

        <input
            type="text"
            id="scrambleAnswer"
            class="text-input scramble-input"
            placeholder="Type the correct word"
            autocomplete="off"
            onkeydown="
                if(event.key === 'Enter')
                submitScramble();
            "
        >

        <button
            class="center-button"
            onclick="submitScramble()"
        >
            Submit Answer
        </button>

        <div
            id="scrambleFeedback"
            class="game-result"
        ></div>

    `;


    document
        .getElementById(
            "scrambleAnswer"
        )
        .focus();


    const run = scrambleRun;

    const index = scrambleIndex;

    startGameTimer(cfg.time, () => {

        if (run !== scrambleRun || index !== scrambleIndex) return;

        nextPopupLabel = "⏰ Time's up!";

        submitScramble(true);

    });

}


/* timedOut = true when the time ran out */

function submitScramble(timedOut) {

    const input =
        document.getElementById(
            "scrambleAnswer"
        );


    if (!input || input.disabled) return;


    const timeUp = timedOut === true;

    const answer =
        input.value.trim();


    if (!timeUp && !answer) return;


    clearGameTimer();


    const run = scrambleRun;


    const feedback =
        document.getElementById(
            "scrambleFeedback"
        );


    const clean = text =>
        text.toLowerCase().replace(/\s+/g, "");


    const correct =
        !timeUp &&
        clean(answer) === clean(currentScrambleWord);


    if (correct) {

        scrambleScore++;

        feedback.innerHTML = "";

    }

    else {

        feedback.innerHTML =
            `Correct answer: ${currentScrambleWord}`;

    }


    playSound(correct);


    input.disabled = true;


    setTimeout(() => {

        if (run !== scrambleRun) return;

        scrambleIndex++;

        updateScrambleGame();

    }, timeUp ? 1300 : 900);

}


function finishScrambleGame() {

    clearGameTimer();

    recordGameResult("scramble", scrambleScore);

    const highScore = getHighScore("scramble");


    if (
        scrambleScore > highScore
    ) {

        setHighScore("scramble", scrambleScore);

    }


    document.getElementById(
        "scrambleContent"
    ).innerHTML = `

        <div class="game-result">

            🎉 Scramble Complete!

            <br><br>

            Your Score:
            ${scrambleScore} / ${scrambleList.length}

            <br>

            Best Score:
            ${Math.max(
                scrambleScore,
                highScore
            )}

            <br>

            <button
                class="restart-btn"
                onclick="startScrambleGame()"
            >
                Play Again
            </button>

        </div>

    `;


    updateBestLabel(
        "scramble",
        Math.max(scrambleScore, highScore)
    );

}


/* =========================================================
   QUIZ GAME

   Easy:      2 choices
   Hard:      3 choices
   Difficult: 4 choices and 10 seconds for each question
========================================================= */

const quizData = [

    {
        question:
            "How do you say 'Hello' in Korean?",

        options: [
            "감사합니다",
            "안녕하세요",
            "再见"
        ],

        correct: 1
    },

    {
        question:
            "What is the Chinese character for 'Water'?",

        options: [
            "水",
            "朋友",
            "食物"
        ],

        correct: 0
    },

    {
        question:
            "What does 'Thank you' translate to in Chinese?",

        options: [
            "再见",
            "谢谢",
            "你好"
        ],

        correct: 1
    },

    {
        question:
            "How do you say 'Friend' in Korean?",

        options: [
            "음식",
            "물",
            "친구"
        ],

        correct: 2
    },

    {
        question:
            "What is 'Book' in Korean?",

        options: [
            "책",
            "집",
            "개"
        ],

        correct: 0
    },

    {
        question:
            "What is 'Apple' in Chinese?",

        options: [
            "香蕉",
            "苹果",
            "猫"
        ],

        correct: 1
    },

    {
        question:
            "What does 학생 mean?",

        options: [
            "Teacher",
            "Student",
            "Family"
        ],

        correct: 1
    },

    {
        question:
            "What is 'Dog' in Chinese?",

        options: [
            "狗",
            "猫",
            "水"
        ],

        correct: 0
    },
        {
        question:
            "How do you say 'Goodbye' in Chinese?",

        options: [
            "谢谢",
            "再见",
            "水"
        ],

        correct: 1
    },

    {
        question:
            "What does 'Thank you' translate to in Korean?",

        options: [
            "안녕하세요",
            "사랑",
            "감사합니다"
        ],

        correct: 2
    },

    {
        question:
            "What does 사과 mean?",

        options: [
            "Water",
            "School",
            "Apple"
        ],

        correct: 2
    },

    {
        question:
            "What is 'School' in Chinese?",

        options: [
            "学校",
            "医院",
            "朋友"
        ],

        correct: 0
    },

    {
        question:
            "How do you say 'Water' in Korean?",

        options: [
            "불",
            "물",
            "밥"
        ],

        correct: 1
    },

    {
        question:
            "What does 老师 mean?",

        options: [
            "Doctor",
            "Student",
            "Teacher"
        ],

        correct: 2
    },

    {
        question:
            "What is 'Cat' in Korean?",

        options: [
            "강아지",
            "새",
            "고양이"
        ],

        correct: 2
    },

    {
        question:
            "What is 'Food' in Chinese?",

        options: [
            "水果",
            "食物",
            "书"
        ],

        correct: 1
    },

    {
        question:
            "What does 가족 mean?",

        options: [
            "Friend",
            "Family",
            "House"
        ],

        correct: 1
    },

    {
        question:
            "How do you say 'House' in Chinese?",

        options: [
            "车",
            "家",
            "狗"
        ],

        correct: 1
    },
        {
        question:
            "How do you say 'Rice' in Korean?",

        options: [
            "물",
            "책",
            "밥"
        ],

        correct: 2
    },

    {
        question:
            "What is 'Love' in Chinese?",

        options: [
            "爱",
            "家",
            "书"
        ],

        correct: 0
    },

    {
        question:
            "What does 선생님 mean?",

        options: [
            "Student",
            "Teacher",
            "Doctor"
        ],

        correct: 1
    },

    {
        question:
            "What is 'Book' in Chinese?",

        options: [
            "车",
            "书",
            "鱼"
        ],

        correct: 1
    },

    {
        question:
            "How do you say 'Car' in Korean?",

        options: [
            "자동차",
            "나무",
            "꽃"
        ],

        correct: 0
    },

    {
        question:
            "What does 你好 mean?",

        options: [
            "Goodbye",
            "Thank you",
            "Hello"
        ],

        correct: 2
    },

    {
        question:
            "How do you say 'Mother' in Korean?",

        options: [
            "아버지",
            "어머니",
            "친구"
        ],

        correct: 1
    },

    {
        question:
            "What is 'Father' in Chinese?",

        options: [
            "妈妈",
            "爸爸",
            "老师"
        ],

        correct: 1
    },

    {
        question:
            "What does 学生 mean?",

        options: [
            "Student",
            "Teacher",
            "Friend"
        ],

        correct: 0
    },

    {
        question:
            "How do you say 'Sky' in Korean?",

        options: [
            "산",
            "바다",
            "하늘"
        ],

        correct: 2
    },

    {
        question:
            "How do you say 'Sorry' in Korean?",

        options: [
            "감사합니다",
            "안녕히 가세요",
            "죄송합니다"
        ],

        correct: 2
    },

    {
        question:
            "What is 'Moon' in Chinese?",

        options: [
            "月亮",
            "太阳",
            "星星"
        ],

        correct: 0
    }

];


let quizIndex = 0;

let quizScore = 0;

let quizList = quizData;


/* Which language a quiz question is about */

function getQuizLanguage(item) {

    if (/Korean|[가-힯]/.test(item.question)) {

        return "korean";

    }

    return "chinese";

}


function hasLanguageScript(text, lang) {

    return lang === "korean"
        ? /[가-힯]/.test(text)
        : /[一-鿿]/.test(text);

}


function scriptOf(text) {

    if (/[가-힯]/.test(text)) return "korean";

    if (/[一-鿿]/.test(text)) return "chinese";

    return "latin";

}


/* Questions for the language chosen in the sidebar.
   If only one language is chosen, every answer choice that
   is written in a language (Korean or Chinese) uses that
   same language. */

function getQuizQuestions() {

    if (gameLanguage === "both") {

        return quizData;

    }


    return quizData
        .filter(item =>
            getQuizLanguage(item) === gameLanguage
        )
        .map(item => {

            /* Only questions that ask for a Korean/Chinese word */

            const asksForWord =
                /in (Korean|Chinese)\?/.test(item.question);

            if (!asksForWord) return item;


            const correctText =
                item.options[item.correct];

            const options =
                item.options.slice();


            options.forEach((option, index) => {

                if (hasLanguageScript(option, gameLanguage)) return;


                const replacement =
                    shuffleArray(vocabulary).find(word =>
                        word[gameLanguage].length <= 6 &&
                        word[gameLanguage] !== correctText &&
                        !options.includes(word[gameLanguage])
                    );

                if (replacement) {

                    options[index] = replacement[gameLanguage];

                }

            });


            return {
                question: item.question,
                options: options,
                correct: item.correct
            };

        });

}


/* All the English meanings a word can have (used so that a new wrong
   choice never means the same thing as the correct answer) */

function meaningsOf(text) {

    return vocabulary
        .filter(word =>
            word.english === text ||
            word.korean === text ||
            word.chinese === text
        )
        .map(word => word.english.toLowerCase());

}


/* Makes every question have the number of choices of the level:
   Easy removes a wrong choice, Difficult adds new wrong choices. */

function applyQuizDifficulty(list) {

    const count = diffSetting("quiz").choices;


    return list.map(item => {

        const correctText =
            item.options[item.correct];

        let options =
            item.options.slice();


        /* Too many choices: remove wrong ones */

        if (options.length > count) {

            const wrong =
                shuffleArray(
                    options.filter(option =>
                        option !== correctText
                    )
                );

            options =
                [correctText].concat(
                    wrong.slice(0, count - 1)
                );

        }


        /* Too few choices: add wrong ones of the same writing */

        if (options.length < count) {

            const script = scriptOf(correctText);

            const correctMeaning = meaningsOf(correctText);

            const candidates =
                shuffleArray(
                    vocabulary
                        .map(word =>
                            script === "korean"
                            ? word.korean
                            : script === "chinese"
                            ? word.chinese
                            : word.english
                        )
                        .filter(text =>
                            text &&
                            text.length <= (script === "latin" ? 12 : 6) &&
                            scriptOf(text) === script
                        )
                );

            const seen = new Set(options);

            for (const text of candidates) {

                if (options.length >= count) break;

                if (seen.has(text)) continue;

                const meaning = meaningsOf(text);

                if (meaning.some(m => correctMeaning.includes(m))) continue;

                seen.add(text);

                options.push(text);

            }

        }


        return {
            question: item.question,
            options: options,
            correct: options.indexOf(correctText)
        };

    });

}


/* Shuffles the order of the questions and the position of the
   answers (the correct answer is tracked after shuffling) */

function shuffleQuizQuestions(list) {

    return shuffleArray(list).map(item => {

        const order =
            shuffleArray(
                item.options.map((option, index) => index)
            );

        return {
            question: item.question,
            options: order.map(index => item.options[index]),
            correct: order.indexOf(item.correct)
        };

    });

}


function getQuizBestShown() {

    /* Best scores are saved out of the full quiz, so they stay
       comparable between Korean only, Chinese only and Both */

    return Math.round(
        getHighScore("quiz") / quizData.length * quizList.length
    );

}


/* Extra "How do you say ... ?" questions made from the word list, so the
   quiz is not the same 30 questions every time */

function getExtraQuizQuestions() {

    const have = new Set(
        quizData.map(item => item.question.toLowerCase())
    );

    const langs = getGameLanguages();

    const extra = [];

    const wordPool = getMatchingPool();

    wordPool.forEach((word, index) => {

        const lang = langs[index % langs.length];

        /* Wrong choices come from the same word list (never the same word) */

        const wrong =
            shuffleArray(
                wordPool.filter(other =>
                    other.english !== word.english &&
                    other[lang] !== word[lang]
                )
            ).slice(0, 3).map(other => other[lang]);

        const question =
            `How do you say '${word.english}' in ${getLanguageLabel(lang)}?`;

        if (have.has(question.toLowerCase())) return;

        extra.push({
            question: question,
            options: [word[lang]].concat(wrong),
            correct: 0
        });

    });

    return extra;

}


/* A new set of questions that were not asked in the last plays */

const QUIZ_PER_PLAY = 30;

function pickQuizQuestions() {

    const all =
        getQuizQuestions().concat(getExtraQuizQuestions());

    return pickFreshWords(
        all,
        Math.min(QUIZ_PER_PLAY, all.length),
        "quiz-" + gameLanguage,
        item => item.question
    );

}


function startQuizGame() {

    clearGameTimer();

    quizList =
        shuffleQuizQuestions(
            applyQuizDifficulty(pickQuizQuestions())
        );

    quizIndex = 0;

    quizScore = 0;


    const cfg = diffSetting("quiz");

    const description =
        document.querySelector(
            "#quizGame .game-description"
        );

    if (description) {

        description.textContent =
            (
                gameLanguage === "both"
                ? "Choose the correct translation."
                : `Choose the correct translation. Only ${getLanguageLabel(gameLanguage)} questions are shown.`
            ) +
            ` (${getDifficultyLabel()}: ${cfg.choices} choices` +
            (cfg.time ? `, ${cfg.time} seconds for each question)` : ")");

    }


    updateBestLabel("quiz", getQuizBestShown());

    updateQuizGame();

}


function updateQuizGame() {

    if (
        quizIndex >=
        quizList.length
    ) {

        finishQuizGame();

        return;

    }


    const cfg = diffSetting("quiz");


    const question =
        quizList[
            quizIndex
        ];


    document.getElementById(
        "quizProgress"
    ).textContent =
        `Question ${quizIndex + 1} / ${quizList.length}`;


    document.getElementById(
        "quizScore"
    ).textContent =
        "Score: " + quizScore;


    document.getElementById(
        "quizContent"
    ).innerHTML = `

        ${timerHtml(cfg.time)}

        <div class="quiz-question">
            ${question.question}
        </div>

        <div class="quiz-options opts-${question.options.length}">

            ${question.options.map(
                (option, index) => `

                    <button
                        class="quiz-option"
                        data-index="${index}"
                        onclick="answerQuiz(${index})"
                    >
                        ${option}
                    </button>

                `
            ).join("")}

        </div>

    `;


    const list = quizList;

    const index = quizIndex;

    startGameTimer(cfg.time, () => {

        if (list !== quizList || index !== quizIndex) return;

        nextPopupLabel = "⏰ Time's up!";

        answerQuiz(-1);

    });

}


/* selected = -1 means the time ran out */

function answerQuiz(selected) {

    const question =
        quizList[
            quizIndex
        ];


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    /* Already answered */

    if (
        !buttons.length ||
        buttons[0].disabled
    ) {

        return;

    }


    clearGameTimer();


    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === question.correct) {

            button.classList.add("right");

        }

        else if (index === selected) {

            button.classList.add("bad");

        }

    });


    const correct =
        selected === question.correct;


    if (correct) {

        quizScore++;

    }


    playSound(correct);


    document.getElementById(
        "quizScore"
    ).textContent =
        "Score: " + quizScore;


    const list = quizList;

    setTimeout(() => {

        /* The language or level was changed while waiting */

        if (list !== quizList) return;

        quizIndex++;

        updateQuizGame();

    }, 900);

}


function finishQuizGame() {

    clearGameTimer();

    /* The dashboard and best score always use the full quiz
       (all questions) as the 100% mark, so scores from
       Korean-only, Chinese-only and Both stay comparable. */

    const full = quizData.length;

    const scaled =
        Math.round(quizScore / quizList.length * full);


    recordGameResult("quiz", scaled);


    const savedBest = getHighScore("quiz");


    if (
        scaled > savedBest
    ) {

        setHighScore("quiz", scaled);

    }


    const bestShown =
        Math.round(
            Math.max(scaled, savedBest) / full * quizList.length
        );


    document.getElementById(
        "quizContent"
    ).innerHTML = `

        <div class="game-result">

            🎉 Quiz Complete!

            <br><br>

            Your Score:
            ${quizScore} / ${quizList.length}

            <br>

            Best Score:
            ${bestShown}

            <br>

            <button
                class="restart-btn"
                onclick="startQuizGame()"
            >
                Try Again
            </button>

        </div>

    `;


    updateBestLabel("quiz", bestShown);

}


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function shuffleArray(array) {

    const result =
        [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];

    }


    return result;

}


function escapeQuotes(value) {

    return value
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}


/* =========================================================
   SCORE DASHBOARD
========================================================= */

const GAME_STATS_KEY = "wordoraGameStats";


function getGameMeta() {

    return {

        matching: {
            name: "Matching Game",
            icon: "🧩",
            max: 100
        },

        object: {
            name: "Identify the Object",
            icon: "🖼️",
            max: objectQuestions.length
        },

        scramble: {
            name: "Word Scramble",
            icon: "🔤",
            max: scrambleWords.length
        },

        quiz: {
            name: "Language Quiz",
            icon: "🧠",
            max: quizData.length
        }

    };

}


function loadGameStats() {

    /* Worked out from the history of the current player */

    const stats = {};

    loadHistory().forEach(item => {

        if (!item.game) return;

        const entry =
            stats[item.game] ||
            (stats[item.game] = {
                plays: 0, last: 0, best: 0, totalPct: 0, time: 0
            });

        entry.plays++;

        entry.totalPct +=
            item.max > 0
            ? Math.min(item.score / item.max, 1)
            : 0;

        entry.best = Math.max(entry.best, item.score);

        if (item.time >= entry.time) {

            entry.time = item.time;

            entry.last = item.score;

        }

    });

    return stats;

}


function recordGameResult(game, score) {

    const meta = getGameMeta()[game];

    if (!meta) return;

    touchPlayer(currentPlayerName());

    addHistory(game, score, meta.max);

}


function getBestScore(game, stats) {

    return stats[game] ? stats[game].best : 0;

}


function getOverallStats() {

    const meta = getGameMeta();

    const stats = loadGameStats();

    let plays = 0;
    let bestPct = 0;
    let avgSum = 0;
    let avgCount = 0;
    let lastGame = "";
    let lastTime = 0;

    Object.keys(meta).forEach(game => {

        const entry = stats[game];

        const best = getBestScore(game, stats);

        bestPct = Math.max(
            bestPct,
            Math.min(best / meta[game].max, 1)
        );

        if (entry && entry.plays > 0) {

            plays += entry.plays;

            avgSum += entry.totalPct / entry.plays;

            avgCount++;

            if (entry.time > lastTime) {

                lastTime = entry.time;

                lastGame = meta[game].name;

            }

        }

    });

    return {
        plays: plays,
        bestPct: Math.round(bestPct * 100),
        avgPct: avgCount ? Math.round((avgSum / avgCount) * 100) : 0,
        lastGame: lastGame
    };

}


function toggleScoreDashboard() {

    const box = document.getElementById("sidebarScores");

    const btn = document.getElementById("sdToggle");

    if (!box || !btn) return;

    const open = box.classList.toggle("open");

    btn.setAttribute("aria-expanded", open ? "true" : "false");

}


function renderScoreDashboard() {

    const grid =
        document.getElementById("scoreDashboardGrid");

    if (!grid) return;

    const meta = getGameMeta();

    const stats = loadGameStats();

    grid.innerHTML = Object.keys(meta).map(game => {

        const info = meta[game];

        const entry = stats[game];

        const best = getBestScore(game, stats);

        const played = entry ? entry.plays : 0;

        const percent =
            Math.round(Math.min(best / info.max, 1) * 100);

        return `

            <div class="sd-game">

                <div class="sd-game-head">
                    <span class="sd-icon">${info.icon}</span>
                    <strong>${info.name}</strong>
                    <b class="sd-best">${best > 0 ? best + " / " + info.max : "—"}</b>
                </div>

                <div class="sd-meta">
                    <span>Last: ${entry ? entry.last + " / " + info.max : "—"}</span>
                    <span>${played}× played</span>
                </div>

                <div class="sd-bar">
                    <span style="width:${percent}%"></span>
                </div>

            </div>

        `;

    }).join("");


    const overall = getOverallStats();

    document.getElementById("sdPlayed").textContent =
        overall.plays;

    document.getElementById("sdBest").textContent =
        overall.bestPct > 0 ? overall.bestPct + "%" : "—";

    document.getElementById("sdAvg").textContent =
        overall.plays > 0 ? overall.avgPct + "%" : "—";

    document.getElementById("sdLast").textContent =
        overall.lastGame || "—";

    const owner = document.getElementById("sdFor");

    if (owner) {

        owner.textContent = "Scores for: " + currentPlayerName();

    }

    renderPlayers();

    renderProgress();

}


function renderHomeStats() {

    const overall = getOverallStats();

    document.getElementById("homeGamesPlayed").textContent =
        overall.plays;

    document.getElementById("homeBestResult").textContent =
        overall.bestPct > 0 ? overall.bestPct + "%" : "—";

    document.getElementById("homeWords").textContent =
        vocabulary.length;

    document.getElementById("homeConvos").textContent =
        Object.keys(conversations).length;

}


function resetScores() {

    const name = currentPlayerName();

    if (!confirm('Reset all game scores for "' + name + '"?')) return;

    const key = currentPlayerKey();

    const rest =
        loadAllHistory().filter(item =>
            playerKey(item.player || GUEST_NAME) !== key
        );

    try {

        localStorage.setItem(
            GAME_HISTORY_KEY,
            JSON.stringify(rest)
        );

    } catch (error) {}

    localStorage.removeItem(GAME_STATS_KEY);

    renderScoreDashboard();

    renderHomeStats();

    refreshOpenGame();

}


/* =========================================================
   PROGRESS, HISTORY AND RANKING  (inside the Score Dashboard)

   Every finished game is saved in the browser with its score,
   level and date. The dashboard then shows:
   - Ranking: the highest scores on top
   - History: newest first, with an arrow showing if you
     improved or went down compared with your last play
     of the same game and level
========================================================= */

const GAME_HISTORY_KEY = "wordoraGameHistory";

let sdView = "ranking";

let sdFilter = "all";


function loadAllHistory() {

    try {

        const list =
            JSON.parse(localStorage.getItem(GAME_HISTORY_KEY));

        return Array.isArray(list) ? list : [];

    } catch (error) {

        return [];

    }

}


/* History of the current player only */

function loadHistory() {

    const key = currentPlayerKey();

    return loadAllHistory().filter(item =>
        playerKey(item.player || GUEST_NAME) === key
    );

}


function addHistory(game, score, max) {

    const list = loadAllHistory();

    list.push({
        game: game,
        score: score,
        max: max,
        level: gameDifficulty,
        player: currentPlayerName(),
        time: Date.now()
    });

    try {

        localStorage.setItem(
            GAME_HISTORY_KEY,
            JSON.stringify(list.slice(-2000))
        );

    } catch (error) {}

    /* Refresh the dashboard after the result is saved */

    setTimeout(() => {

        renderScoreDashboard();

        renderHomeStats();

    }, 0);

}


function setSdView(view) {

    sdView = view;

    renderProgress();

}


function setSdFilter(value) {

    sdFilter = value;

    renderProgress();

}


function formatWhen(time) {

    const date = new Date(time);

    const today = new Date();

    const yesterday = new Date();

    yesterday.setDate(today.getDate() - 1);

    const clock =
        date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

    if (date.toDateString() === today.toDateString()) {

        return "Today " + clock;

    }

    if (date.toDateString() === yesterday.toDateString()) {

        return "Yesterday " + clock;

    }

    return date.toLocaleDateString([], { month: "short", day: "numeric" }) +
        " " + clock;

}


function sparklineSvg(values) {

    if (values.length < 2) return "";

    const width = 200;

    const height = 46;

    const pad = 5;

    const step = (width - pad * 2) / (values.length - 1);

    const points = values.map((value, index) => {

        const x = pad + index * step;

        const y = height - pad - (value / 100) * (height - pad * 2);

        return x.toFixed(1) + "," + y.toFixed(1);

    });

    const last = points[points.length - 1].split(",");

    return `
        <svg class="sd-spark" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="Your recent scores">
            <polyline points="${points.join(" ")}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="${last[0]}" cy="${last[1]}" r="3.6" fill="currentColor"/>
        </svg>
    `;

}


function renderPlayers() {

    const box = document.getElementById("sdPlayers");

    if (!box) return;

    const meta = getGameMeta();

    const all = loadAllHistory();

    const currentKey = currentPlayerKey();

    const rows =
        loadPlayers()
            .map(player => {

                let plays = 0;
                let best = 0;
                let last = 0;

                all.forEach(item => {

                    if (
                        playerKey(item.player || GUEST_NAME) !== player.key ||
                        !meta[item.game] ||
                        !(item.max > 0)
                    ) {
                        return;
                    }

                    plays++;

                    best = Math.max(
                        best,
                        Math.round(Math.min(item.score / item.max, 1) * 100)
                    );

                    last = Math.max(last, item.time);

                });

                return {
                    player: player,
                    plays: plays,
                    best: best,
                    last: last,
                    activity: Math.max(player.last || 0, last)
                };

            })
            .sort((a, b) => b.activity - a.activity);


    const list = rows.map((row, index) => {

        const name = row.player.name;

        const isYou = row.player.key === currentKey;

        const detail =
            row.plays
            ? row.plays + (row.plays === 1 ? " game" : " games") +
              " · Best " + row.best + "% · " + formatWhen(row.last)
            : "No games yet";

        return `
            <li style="animation-delay:${index * 40}ms">
                <button
                    type="button"
                    class="sd-player ${isYou ? "current" : ""}"
                    data-key="${escapeAttr(row.player.key)}"
                    onclick="switchPlayer(this.dataset.key)"
                    title="Switch to ${escapeAttr(name)}"
                >
                    <span class="sd-player-avatar">${escapeHtml(getInitial(name))}</span>
                    <span class="sd-row-main">
                        <b>${escapeHtml(name)}${isYou ? ' <em class="sd-you">You</em>' : ""}</b>
                        <small>${detail}</small>
                    </span>
                </button>
            </li>
        `;

    }).join("");


    box.innerHTML = `
        <div class="sd-section-title">👥 Players</div>
        ${
            rows.length
            ? `<ul class="sd-list sd-players">${list}</ul>
               <p class="sd-hint">Tap a name to switch to that account. Every account keeps its own scores and history.</p>`
            : `<p class="sd-empty">No players yet. Set a nickname and finish a game to appear here.</p>`
        }
    `;

}



function renderProgress() {

    const box = document.getElementById("sdProgress");

    if (!box) return;


    const meta = getGameMeta();


    /* Every result as a percentage, oldest first */

    const bestBefore = {};

    const lastBefore = {};

    const all = loadHistory()
        .filter(item => meta[item.game] && item.max > 0)
        .map(item => {

            const entry = Object.assign({}, item);

            entry.pct =
                Math.round(Math.min(item.score / item.max, 1) * 100);

            const key = item.game + "|" + item.level;

            entry.delta =
                lastBefore[key] === undefined
                ? null
                : entry.pct - lastBefore[key];

            entry.record =
                bestBefore[key] !== undefined &&
                entry.pct > bestBefore[key];

            lastBefore[key] = entry.pct;

            bestBefore[key] =
                Math.max(bestBefore[key] || 0, entry.pct);

            return entry;

        });


    const list =
        all.filter(item =>
            sdFilter === "all" || item.game === sdFilter
        );


    const levelName = level =>
        DIFFICULTY_INFO[level]
        ? DIFFICULTY_INFO[level].label
        : "";


    const arrow = delta =>
        delta === null
        ? `<span class="sd-delta same">first</span>`
        : delta > 0
        ? `<span class="sd-delta up">▲ +${delta}%</span>`
        : delta < 0
        ? `<span class="sd-delta down">▼ ${delta}%</span>`
        : `<span class="sd-delta same">= 0%</span>`;


    const filterHtml = `
        <select class="sd-filter" onchange="setSdFilter(this.value)" aria-label="Show results for">
            <option value="all" ${sdFilter === "all" ? "selected" : ""}>All games</option>
            ${Object.keys(meta).map(game => `
                <option value="${game}" ${sdFilter === game ? "selected" : ""}>${meta[game].icon} ${meta[game].name}</option>
            `).join("")}
        </select>
    `;


    const tabsHtml = `
        <div class="sd-tabs" role="group" aria-label="Dashboard view">
            <button type="button" class="sd-tab ${sdView === "ranking" ? "active" : ""}" onclick="setSdView('ranking')">🏅 Ranking</button>
            <button type="button" class="sd-tab ${sdView === "history" ? "active" : ""}" onclick="setSdView('history')">🕑 History</button>
        </div>
    `;


    if (!list.length) {

        box.innerHTML = `
            <div class="sd-section-title">📈 My Progress</div>
            ${filterHtml}
            <p class="sd-empty">No scores yet. Finish a game to start your progress!</p>
        `;

        return;

    }


    /* ----- Progress summary ----- */

    const latest = list[list.length - 1];

    const recent = list.slice(-12).map(item => item.pct);

    const bestPct = Math.max(...list.map(item => item.pct));

    let message;

    if (latest.delta === null) {

        message = "Play this game again to see how much you improve.";

    }

    else if (latest.delta > 0) {

        message = "You are improving! Keep going 🎉";

    }

    else if (latest.delta < 0) {

        message = "A little lower than last time. Try again!";

    }

    else {

        message = "Same as your last play. Keep practicing!";

    }


    const summaryHtml = `
        <div class="sd-latest">
            <div class="sd-latest-top">
                <span>Latest <b>${latest.pct}%</b></span>
                ${arrow(latest.delta)}
            </div>
            <div class="sd-latest-sub">
                ${meta[latest.game].icon} ${meta[latest.game].name}
                · ${levelName(latest.level)} · Best ${bestPct}%
            </div>
            ${sparklineSvg(recent)}
            <div class="sd-latest-sub">${message}</div>
        </div>
    `;


    /* ----- Ranking (highest score on top) or History (newest first) ----- */

    let rows;

    if (sdView === "ranking") {

        const ranked =
            list
                .slice()
                .sort((a, b) => b.pct - a.pct || b.time - a.time)
                .slice(0, 10);

        rows = ranked.map((item, index) => {

            const place =
                index === 0 ? "🥇"
                : index === 1 ? "🥈"
                : index === 2 ? "🥉"
                : "#" + (index + 1);

            return `
                <li class="sd-row-item rank-${index + 1}" style="animation-delay:${index * 60}ms">
                    <span class="sd-place">${place}</span>
                    <span class="sd-row-main">
                        <b>${meta[item.game].icon} ${meta[item.game].name}</b>
                        <small>${item.score} / ${item.max} · ${levelName(item.level)} · ${formatWhen(item.time)}</small>
                    </span>
                    <span class="sd-pct">${item.pct}%</span>
                </li>
            `;

        }).join("");

    }

    else {

        rows = list
            .slice()
            .reverse()
            .slice(0, 15)
            .map((item, index) => `
                <li class="sd-row-item" style="animation-delay:${index * 40}ms">
                    <span class="sd-place">${item.record ? "🏆" : "•"}</span>
                    <span class="sd-row-main">
                        <b>${meta[item.game].icon} ${meta[item.game].name}</b>
                        <small>${item.score} / ${item.max} · ${levelName(item.level)} · ${formatWhen(item.time)}</small>
                    </span>
                    <span class="sd-pct">
                        ${item.pct}%
                        ${arrow(item.delta)}
                    </span>
                </li>
            `)
            .join("");

    }


    box.innerHTML = `
        <div class="sd-section-title">📈 My Progress</div>
        ${filterHtml}
        ${summaryHtml}
        ${tabsHtml}
        <ol class="sd-list">${rows}</ol>
        <p class="sd-hint">
            ${sdView === "ranking"
                ? "Highest scores are on top."
                : "🏆 = a new best for that game and level."}
        </p>
    `;

}



/* =========================================================
   EXIT CONFIRMATION  (Yes / No)
========================================================= */

function openExitConfirm() {

    const modal = document.getElementById("exitModal");

    modal.classList.remove("hidden");

    document.getElementById("exitNoBtn").focus();

}


function closeExitConfirm() {

    document.getElementById("exitModal").classList.add("hidden");

}


function confirmExit() {

    closeExitConfirm();

    clearGameTimer();

    stopSpeech();

    backToLanding();

}


document.addEventListener("keydown", event => {

    const modal = document.getElementById("exitModal");

    if (
        event.key === "Escape" &&
        modal &&
        !modal.classList.contains("hidden")
    ) {

        closeExitConfirm();

    }

});


/* =========================================================
   INITIALIZE APP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadNickname();

        loadVocabulary();

        showConversation("greetings");

        backToGames();

        renderHomeStats();

        document.getElementById("landingWords").textContent =
            vocabulary.length;

    }
);


/* ===== script-2.js (dating hiwalay na script) =====
 =========================================================
     VOICE FIX (FINAL) — Girl / Boy voice, STRICT

     Pinapalitan nito ang lahat ng naunang voice code.

     - Girl voice -> babae LANG ang boses (English, Korean, Chinese)
                     sa LAHAT ng scenarios (Greetings, Market, Public,
                     Restaurant, School, Travel, Daily).
     - Boy voice  -> lalaki LANG ang boses sa lahat ng wika at scenarios.
     - Hindi nagkakahalo: kapag Girl, hindi gagamitin ang mga recording
       na lalaki (EXISTING_AUDIO_GENDER = "boy").
     - Iisang boses bawat wika hangga't hindi binabago ang Girl / Boy.
     - Chinese: hinahanap ang babae / lalaking boses sa lahat ng
       zh variant (zh-CN, zh-TW, zh-HK). Kapag walang totoong babae /
       lalaking Chinese voice ang device, gagamit ng pitch para hindi
       tumunog na kabaligtaran.
========================================================= 
*/
/* ---------- Pangalan ng boses: babae o lalaki ---------- */

const VF3_FEMALE = /(^|[^a-z])female|\bwoman\b|\bgirl\b|zira|hazel|samantha|karen|moira|tessa|fiona|victoria|susan|heather|catherine|linda|helen|sabina|elsa|eva\b|paulina|monica|lucia|ting-?ting|mei-?jia|sin-?ji|sun-?hi|yuna|heami|ji-?min|seo-?hyeon|soon-?bok|yu-?jin|sora|xiao-?xiao|xiao-?yi|xiao-?bei|xiao-?ni|xiao-?chen|xiao-?han|xiao-?mo|xiao-?rui|xiao-?shuang|xiao-?yan|xiao-?zhen|xiao-?hui|xiao-?meng|xiao-?qiu|xiao-?you|hsiao-?chen|hsiao-?yu|hiu-?maan|hiu-?gaai|wan-?lung-?f|huihui|yaoyao|hanhan|tracy|yu-?shu|ya-?ting|shan-?shan|mei-?ling|li-?li|si-?qi|si-?jia|qian-?qian|jenny|aria|jane|nancy|sara\b|cora|elizabeth|michelle|sonia|libby|maisie|\bflo\b|sandy|shelley|grandma|ava\b|emma|salli|joanna|kendra|kimberly|amy|emily|ivy|nicole|zoe|allison|nova|google (us english|uk english female|한국어|普通话|中文|國語|粤語)/i;

const VF3_MALE = /(^|[^a-z])male|\bman\b|\bboy\b|david|\bmark\b|\bguy\b|daniel|\balex\b|\bfred\b|george|james|richard|ryan|christopher|\beric\b|andrew|brian|davis|thomas|\bjason\b|\btony\b|brandon|roger|steffan|jacob|\btom\b|sean|aaron|arthur|nathan|oliver|injoon|in-?joon|bongjin|gookmin|hyun-?su|minho|kangkang|yunxi|yunxia|yunyang|yunjian|yunhao|yunze|yunfeng|yunjhe|wanlung|li-?mu|yun-?jie|yunyi|zhiwei|danny|liang|\beddy\b|\breed\b|rocko|grandpa|matthew|justin|joey|russell|google uk english male/i;


function vf3Gender(voice) {

    const name = (voice && voice.name) || "";

    const male = VF3_MALE.test(name);

    const female = VF3_FEMALE.test(name) && !male;

    if (female) return "girl";

    if (male) return "boy";

    return null;

}


/* ---------- Pag-load ng mga boses ng device ---------- */

function vf3Voices() {

    if (!("speechSynthesis" in window)) return [];

    const list = speechSynthesis.getVoices();

    if (list && list.length) speechVoices = list;

    return speechVoices;

}


const vf3Cache = {};


if ("speechSynthesis" in window) {

    vf3Voices();

    speechSynthesis.addEventListener("voiceschanged", function () {

        vf3Voices();

        Object.keys(vf3Cache).forEach(k => delete vf3Cache[k]);

    });

}


/* Hinihintay na ma-load ang mga boses (hanggang mga 1.2 segundo) */

function vf3WhenReady(callback) {

    if (vf3Voices().length) {

        callback();

        return;

    }

    let done = false;

    function go() {

        if (done) return;

        done = true;

        vf3Voices();

        callback();

    }

    speechSynthesis.addEventListener("voiceschanged", go, { once: true });

    setTimeout(go, 1200);

}


/* ---------- Pagpili ng boses (iisa bawat Girl/Boy + wika) ---------- */

function vf3Normalize(lang) {

    return String(lang || "").toLowerCase().replace("_", "-");

}


/* Girl voice: the best-known girl voices are tried first */

const VF3_PREFERRED_FEMALE = [
    /xiao-?xiao/i, /xiao-?yi/i, /huihui/i, /yaoyao/i,
    /hsiao-?chen/i, /hanhan/i, /ting-?ting/i, /mei-?jia/i, /sin-?ji/i,
    /google.*(普通话|中文|國語|粤語|한국어|us english|uk english female)/i,
    /sun-?hi|yuna|seo-?yeon|heami|ji-?min/i,
    /jenny|aria|zira|samantha|hazel|susan/i
];


function vf3Resolve(lang, choice) {

    const key = choice + "|" + lang;

    if (vf3Cache[key]) return vf3Cache[key];

    const all = vf3Voices();

    const full = vf3Normalize(lang);

    const base = full.split("-")[0];

    const exactLang = all.filter(v => vf3Normalize(v.lang) === full);

    const sameBase = all.filter(v => vf3Normalize(v.lang).split("-")[0] === base);

    /* Chinese: also voices written as zh / cmn / yue / Mandarin */

    const extra = base === "zh"
        ? all.filter(v => /cmn|yue|chinese|mandarin|中文|普通话|國語|粤語/i.test(v.name + " " + v.lang))
        : [];

    const pools = [exactLang, sameBase, extra];

    const pref = v => {

        if (choice !== "girl") return 99;

        const i = VF3_PREFERRED_FEMALE.findIndex(r => r.test(v.name));

        return i < 0 ? 99 : i;

    };

    const rank = (a, b) => {

        if (pref(a) !== pref(b)) return pref(a) - pref(b);

        if (a.localService !== b.localService) return a.localService ? -1 : 1;

        return a.name.localeCompare(b.name);

    };

    let result = null;

    /* 1) A real girl / boy voice */

    for (const pool of pools) {

        const match = pool.filter(v => vf3Gender(v) === choice).sort(rank);

        if (match.length) {

            result = { voice: match[0], mode: "exact" };

            break;

        }

    }

    /* 2) A voice with no gender in its name (never the opposite one) */

    if (!result) {

        for (const pool of pools) {

            const unknown = pool.filter(v => vf3Gender(v) === null).sort(rank);

            if (unknown.length) {

                result = { voice: unknown[0], mode: "unknown" };

                break;

            }

        }

    }

    /* 3) Only the opposite voice exists: use it with a strong pitch change */

    if (!result) {

        const any = (sameBase.length ? sameBase : exactLang).slice().sort(rank);

        if (any.length) result = { voice: any[0], mode: "opposite" };

    }

    if (result && all.length) vf3Cache[key] = result;

    return result || { voice: null, mode: "none" };

}


/* Override: ginagamit pa rin ng ibang bahagi ng app */

function resolveGenderVoice(lang) {

    const r = vf3Resolve(lang, voiceChoice);

    return { voice: r.voice, exact: r.mode === "exact", opposite: r.mode === "opposite" };

}


function vf3Pitch(mode, choice, lang) {

    if (mode === "exact") return 1;

    const zh = String(lang).toLowerCase().startsWith("zh");

    if (mode === "unknown") {

        return choice === "girl" ? (zh ? 1.65 : 1.5) : 0.7;

    }

    if (mode === "opposite") return choice === "girl" ? 2 : 0.1;

    return choice === "girl" ? 1.5 : 0.7;

}


/* ---------- Backup voice (text-to-speech) ---------- */

function speakText(text, lang, onEnd) {

    if (!("speechSynthesis" in window)) {

        onEnd();

        return;

    }

    const token = speechToken;

    const choice = voiceChoice;

    vf3WhenReady(() => {

        if (token !== speechToken) return;

        const resolved = vf3Resolve(lang, choice);

        const utterance = new SpeechSynthesisUtterance(text);

        utterance.lang = lang;

        if (resolved.voice) {

            utterance.voice = resolved.voice;

            utterance.lang = resolved.voice.lang || lang;

        }

        utterance.pitch = vf3Pitch(resolved.mode, choice, lang);

        utterance.rate = lang === "en-US" ? 0.95 : 0.85;

        utterance.volume = 1;

        utterance.onend = onEnd;

        utterance.onerror = onEnd;

        /* Maliit na delay para hindi ma-skip ang speak() pagkatapos ng cancel() */

        speechSynthesis.cancel();

        setTimeout(() => {

            if (token !== speechToken) return;

            speechSynthesis.speak(utterance);

        }, 60);

    });

}


/* ---------- Recorded audio: ang napiling boses LANG ---------- */

/* Which language a clip is (en / ko / zh) */

function vf3ClipLang(btn) {

    return String(btn.dataset.lang || "").toLowerCase().split("-")[0];

}


/* Says if the old recordings (audio/<scenario>/...) may be used for the
   chosen voice. Change EXISTING_AUDIO_GENDER_BY_LANG when a language of
   the old recordings is a girl voice instead of a boy voice. */

const EXISTING_AUDIO_GENDER_BY_LANG = {
    en: EXISTING_AUDIO_GENDER,
    ko: EXISTING_AUDIO_GENDER,
    zh: "none"   /* old Chinese recordings are never used: Girl/Boy follow the folders audio/girl|boy/ or the matching browser voice */
};


/* Chinese girl-voice recordings (scenario/line number) */
const ZH_GIRL_AUDIO = {
    "daily/1": "audio/girl/daily/1-zh.mp3",
    "daily/2": "audio/girl/daily/2-zh.mp3",
    "daily/3": "audio/girl/daily/3-zh.mp3",
    "greetings/1": "audio/girl/greetings/1-zh.mp3",
    "greetings/2": "audio/girl/greetings/2-zh.mp3",
    "greetings/3": "audio/girl/greetings/3-zh.mp3",
    "greetings/4": "audio/girl/greetings/4-zh.mp3",
    "market/1": "audio/girl/market/1-zh.mp3",
    "market/2": "audio/girl/market/2-zh.mp3",
    "market/3": "audio/girl/market/3-zh.mp3",
    "public/1": "audio/girl/public/1-zh.mp3",
    "public/2": "audio/girl/public/2-zh.mp3",
    "restaurant/1": "audio/girl/restaurant/1-zh.mp3",
    "restaurant/2": "audio/girl/restaurant/2-zh.mp3",
    "restaurant/3": "audio/girl/restaurant/3-zh.mp3",
    "school/1": "audio/girl/school/1-zh.mp3",
    "school/2": "audio/girl/school/2-zh.mp3",
    "school/3": "audio/girl/school/3-zh.mp3",
    "travel/1": "audio/girl/travel/1-zh.mp3",
    "travel/2": "audio/girl/travel/2-zh.mp3"
};

function playClip(btn, onEnd) {

    const token = speechToken;

    const choice = voiceChoice;

    const lang = vf3ClipLang(btn);

    const sources = [
        btn.dataset.src.replace(/^audio\//, "audio/" + choice + "/")
    ];

    /* Chinese girl voice: the recordings are inside this file */

    if (choice === "girl" && lang === "zh") {

        const found = /^audio\/([a-z]+)\/(\d+)-zh\.mp3$/.exec(btn.dataset.src);

        const embedded = found && ZH_GIRL_AUDIO[found[1] + "/" + found[2]];

        if (embedded) sources.unshift(embedded);

    }

    const oldGender =
        EXISTING_AUDIO_GENDER_BY_LANG[lang] || EXISTING_AUDIO_GENDER;

    if (oldGender === "any" || oldGender === choice) {

        sources.push(btn.dataset.src);

    }

    function fallback() {

        if (token !== speechToken) return;

        currentAudio = null;

        speakText(btn.dataset.text, btn.dataset.lang, onEnd);

    }

    function tryNext(i) {

        if (token !== speechToken) return;

        if (i >= sources.length) {

            fallback();

            return;

        }

        let failed = false;

        function fail() {

            if (failed) return;

            failed = true;

            tryNext(i + 1);

        }

        const audio = new Audio(sources[i]);

        currentAudio = audio;

        audio.onended = onEnd;

        audio.onerror = fail;

        const attempt = audio.play();

        if (attempt && attempt.catch) {

            attempt.catch(fail);

        }

    }

    tryNext(0);

}


/* Small note when the device has no real girl / boy voice */

function vf3UpdateNote() {

    /* The note about the missing girl / boy voice is no longer shown */

    const hiddenNote = document.getElementById("voiceNote");

    if (hiddenNote) hiddenNote.classList.add("hidden");

    return;

    const note = document.getElementById("voiceNote");

    if (!note) return;

    if (!("speechSynthesis" in window) || !vf3Voices().length) {

        note.classList.add("hidden");

        return;

    }

    const names = { en: "English", ko: "Korean", zh: "Chinese" };

    const missing = [["en", "en-US"], ["ko", "ko-KR"], ["zh", "zh-CN"]]
        .filter(item => vf3Resolve(item[1], voiceChoice).mode !== "exact")
        .map(item => names[item[0]]);

    if (!missing.length) {

        note.classList.add("hidden");

        return;

    }

    const who = voiceChoice === "girl" ? "girl" : "boy";

    note.innerHTML =
        "ℹ️ This device has no real " + who + " voice for " +
        missing.join(" / ") + ", so the browser voice is pitched to sound like a " +
        who + ". For the exact voice, put recordings in <b>audio/" +
        voiceChoice + "/&lt;scenario&gt;/</b>.";

    note.classList.remove("hidden");

}

/* Refresh the note when the voice list loads or the voice is changed */

const vf3OriginalSetVoiceChoice = setVoiceChoice;

setVoiceChoice = function (choice) {

    vf3OriginalSetVoiceChoice(choice);

    vf3UpdateNote();

};

if ("speechSynthesis" in window) {

    speechSynthesis.addEventListener("voiceschanged", vf3UpdateNote);

}

document.addEventListener("DOMContentLoaded", () => {

    vf3UpdateNote();

    setTimeout(vf3UpdateNote, 800);

});


/* ===== script-3.js (dating hiwalay na script) ===== */
/* =========================================================
   READY SCREEN
   Every game waits for the player to press "Start" before
   the questions (and the timer) begin.
========================================================= */

(function () {

    const READY = {
        matching: {
            start: startMatchingGame, run: () => { matchingRun++; },
            pane: "matchingGame", box: "matchingBoard", icon: "🧩", name: "Matching Game"
        },
        object: {
            start: startObjectGame, run: () => { objectRun++; },
            pane: "objectGame", box: "objectContent", icon: "🖼️", name: "Identify the Object"
        },
        scramble: {
            start: startScrambleGame, run: () => { scrambleRun++; },
            pane: "scrambleGame", box: "scrambleContent", icon: "🔤", name: "Word Scramble"
        },
        quiz: {
            start: startQuizGame, run: () => { quizList = []; },
            pane: "quizGame", box: "quizContent", icon: "🧠", name: "Language Quiz"
        }
    };

    const SUMMARY = {
        matching: cfg => `${cfg.batches} batches of ${cfg.perBatch} words. Match the cards that belong together.`,
        object: cfg => `30 questions with ${cfg.choices} choices each. Pick the word that matches the picture.`,
        scramble: cfg => `Rearrange the letters and type the English word.${cfg.hint ? " A hint is shown." : ""}`,
        quiz: cfg => `${cfg.choices} choices per question. Choose the correct translation.`
    };

    function showReady(game) {

        const g = READY[game];

        clearGameTimer();

        g.run();

        const cfg = diffSetting(game);

        const box = document.getElementById(g.box);

        const pane = document.getElementById(g.pane);

        if (!box || !pane) return;

        pane.classList.add("is-ready");

        if (game === "matching") {

            const result = document.getElementById("matchingResult");

            if (result) result.textContent = "";

        }

        box.innerHTML = `
            <div class="ready-panel">
                <h3>${g.icon} Ready?</h3>
                <p>${SUMMARY[game](cfg)}</p>
                <p>Level: <b>${getDifficultyLabel()}</b></p>
                ${cfg.time ? `<div class="ready-timer">⏱ ${cfg.time} seconds for each question</div>` : ""}
                <p>Press Start when you are ready.</p>
                <button type="button" class="ready-start-btn" id="readyStartBtn_${game}">▶ Start</button>
            </div>
        `;

        const button = document.getElementById("readyStartBtn_" + game);

        button.addEventListener("click", () => {

            pane.classList.remove("is-ready");

            g.start();

        });

        /* Do not steal focus on touch screens, only on keyboards */

        try { button.focus({ preventScroll: true }); } catch (error) {}

    }

    window.startMatchingGame = () => showReady("matching");

    window.startObjectGame = () => showReady("object");

    window.startScrambleGame = () => showReady("scramble");

    window.startQuizGame = () => showReady("quiz");

})();


/* ===== script-4.js (dating hiwalay na script) =====
 =========================================================
     CONVERSATION VOICE — RELIABLE ENGINE (FINAL FIX)

     Bakit hindi tumutunog dati:
     - Ang browser voice (speechSynthesis) ay na-i-start pagkatapos ng
       delay, kaya hinaharang ng ibang browser / phone.
     - Walang laman ang reference ng utterance, kaya sa Chrome minsan
       hindi na dumarating ang "onend" at tumitigil ang Play all.
     - Kapag walang Korean / Chinese voice ang device, tahimik lang.
     - Walang paalam kapag pumalya ang lahat.

     Ngayon, bawat 🔊 at ▶ Play all ay dumadaan sa 3 hakbang:
       1. Recorded audio  (audio/girl|boy/<scenario>/<line>-<en|ko|zh>.mp3)
       2. Browser voice ng device (Girl / Boy, kapareho ng dati)
       3. Online voice (kapag walang voice ang device o hindi nag-start)
     Kapag pumalya ang lahat, may lalabas na maliit na mensahe.
========================================================= 
*/
(function () {

    const synth = ("speechSynthesis" in window) ? window.speechSynthesis : null;

    /* Isang audio element lang para laging "unlocked" sa phone */
    const player = new Audio();
    player.preload = "auto";

    const held = [];              /* para hindi ma-garbage-collect ang utterance */
    const deadSrc = new Set();    /* mga recording na wala, para hindi na ulit subukan */
    let run = 0;
    let timers = [];
    let lastCancel = 0;
    let unlocked = false;

    function later(fn, ms) {
        const t = setTimeout(fn, ms);
        timers.push(t);
        return t;
    }

    function clearTimers() {
        timers.forEach(clearTimeout);
        timers = [];
    }

    /* ---------- Unlock: sa unang pindot kahit saan ---------- */

    function unlock() {

        if (unlocked) return;

        unlocked = true;

        try {
            if (synth) {
                const u = new SpeechSynthesisUtterance(" ");
                u.volume = 0;
                synth.speak(u);
            }
        } catch (e) {}

        try {
            player.muted = true;
            player.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";
            const p = player.play();
            if (p && p.catch) p.catch(() => {});
            player.pause();
            player.muted = false;
        } catch (e) {}

    }

    ["pointerdown", "touchend", "click", "keydown"].forEach(ev =>
        document.addEventListener(ev, unlock, { capture: true, once: false, passive: true })
    );

    /* ---------- Maliit na mensahe kapag walang tunog ---------- */

    let toastEl = null;
    let toastTimer = null;

    function toast(message) {

        if (!toastEl) {
            toastEl = document.createElement("div");
            toastEl.setAttribute("role", "status");
            toastEl.style.cssText =
                "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);" +
                "max-width:min(92vw,420px);padding:12px 16px;border-radius:12px;" +
                "background:#1f2937;color:#fff;font:600 14px/1.4 system-ui,sans-serif;" +
                "box-shadow:0 8px 24px rgba(0,0,0,.3);z-index:99999;text-align:center;";
            document.body.appendChild(toastEl);
        }

        toastEl.textContent = message;
        toastEl.style.display = "block";

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { toastEl.style.display = "none"; }, 5000);

    }

    /* ---------- Stop ---------- */

    window.stopSpeech = function () {

        run++;

        clearTimers();

        try { player.onplaying = player.onerror = player.onended = null; player.pause(); } catch (e) {}

        if (synth) {
            try {
                if (synth.speaking || synth.pending) {
                    synth.cancel();
                    lastCancel = Date.now();
                }
            } catch (e) {}
        }

        held.length = 0;

        document
            .querySelectorAll(".speak-btn.playing")
            .forEach(b => b.classList.remove("playing"));

    };

    /* ---------- Hakbang 1 at 3: audio file (recorded / online) ---------- */

    function playUrl(url, rate, id, onStarted, onFail, onDone, startTimeout) {

        if (id !== run) return;

        let settled = false;

        function fail() {
            if (settled) return;
            settled = true;
            player.onplaying = player.onerror = player.onended = null;
            onFail();
        }

        try {

            player.onplaying = () => {
                if (settled || id !== run) return;
                settled = true;
                player.onerror = null;
                onStarted();
                player.onended = () => { if (id === run) onDone(); };
                player.onerror = () => { if (id === run) onDone(); };
            };

            player.onerror = fail;

            player.muted = false;
            player.volume = 1;
            player.preservesPitch = rate === 1;
            player.defaultPlaybackRate = rate;
            player.src = url;
            player.playbackRate = rate;

            const p = player.play();

            if (p && p.catch) p.catch(fail);

            later(() => { if (!settled && id === run) { try { player.pause(); } catch (e) {} fail(); } }, startTimeout);

        } catch (e) {
            fail();
        }

    }

    /* ---------- Hakbang 2: browser voice ---------- */

    function browserVoice(text, lang, choice, id, onStarted, onFail, onDone) {

        if (!synth || id !== run) { onFail(); return; }

        let resolved = { voice: null, mode: "none" };

        try {
            resolved = vf3Resolve(lang, choice);
        } catch (e) {}

        const base = lang.toLowerCase().split("-")[0];

        /* Walang voice ang device para sa Korean / Chinese -> online agad */
        if (!resolved.voice && base !== "en") { onFail(); return; }

        const u = new SpeechSynthesisUtterance(text);

        u.lang = lang;

        if (resolved.voice) {
            u.voice = resolved.voice;
            u.lang = resolved.voice.lang || lang;
        }

        try { u.pitch = vf3Pitch(resolved.mode, choice, lang); } catch (e) { u.pitch = 1; }

        u.rate = base === "en" ? 0.95 : 0.85;
        u.volume = 1;

        held.push(u);

        let started = false;
        let finished = false;

        function finish() {
            if (finished) return;
            finished = true;
            onDone();
        }

        u.onstart = () => {
            started = true;
            onStarted();
            /* Safety: kapag hindi dumating ang onend */
            later(finish, Math.max(5000, text.length * 450));
        };

        u.onend = () => { if (id === run) finish(); };

        u.onerror = (e) => {
            if (id !== run || finished) return;
            const reason = e && e.error;
            if (reason === "canceled" || reason === "interrupted") return;
            if (!started) { finished = true; onFail(); } else { finish(); }
        };

        function go() {

            if (id !== run) return;

            try {
                if (synth.paused) synth.resume();
                synth.speak(u);
            } catch (e) {
                finished = true;
                onFail();
                return;
            }

            /* Kapag hindi nag-start sa loob ng 2.5s -> online */
            later(() => {
                if (!started && !finished && id === run) {
                    finished = true;
                    try { synth.cancel(); lastCancel = Date.now(); } catch (e) {}
                    onFail();
                }
            }, 2500);

        }

        /* Pagkatapos ng cancel(), maghintay sandali (bug ng Chrome) */
        const wait = 150 - (Date.now() - lastCancel);

        if (wait > 0) later(go, wait); else go();

    }

    /* ---------- Isang clip: recorded -> browser voice -> online ---------- */

    window.playClip = function (btn, onEnd) {

        const id = run;
        const choice = (typeof voiceChoice !== "undefined") ? voiceChoice : "girl";
        const text = btn.dataset.text || "";
        const lang = btn.dataset.lang || "en-US";
        const clipLang = lang.toLowerCase().split("-")[0];
        const src = btn.dataset.src || "";

        let ended = false;

        function done() {
            if (ended) return;
            ended = true;
            clearTimers();
            onEnd();
        }

        /* mga recorded file na pwedeng gamitin */
        const files = [];

        if (src) files.push(src.replace(/^audio\//, "audio/" + choice + "/"));

        if (choice === "girl" && clipLang === "zh" && typeof ZH_GIRL_AUDIO !== "undefined") {
            const found = /^audio\/([a-z]+)\/(\d+)-zh\.mp3$/.exec(src);
            const embedded = found && ZH_GIRL_AUDIO[found[1] + "/" + found[2]];
            if (embedded) files.unshift(embedded);
        }

        try {
            const oldGender =
                (typeof EXISTING_AUDIO_GENDER_BY_LANG !== "undefined" && EXISTING_AUDIO_GENDER_BY_LANG[clipLang]) ||
                (typeof EXISTING_AUDIO_GENDER !== "undefined" ? EXISTING_AUDIO_GENDER : "none");
            if (src && (oldGender === "any" || oldGender === choice)) files.push(src);
        } catch (e) {}

        const usable = files.filter(f => !deadSrc.has(f));

        function online() {

            if (id !== run) return;

            const url =
                "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=" +
                encodeURIComponent(clipLang === "zh" ? "zh-CN" : clipLang) +
                "&q=" + encodeURIComponent(text);

            playUrl(
                url,
                choice === "boy" ? 0.82 : 1,
                id,
                () => {},
                () => {
                    if (id !== run) return;
                    toast("🔇 Walang tunog: walang voice ang device para sa wikang ito at hindi maabot ang online voice. I-check ang internet, volume o silent mode.");
                    done();
                },
                done,
                5000
            );

        }

        function browser() {
            browserVoice(text, lang, choice, id, () => {}, online, done);
        }

        function tryFile(i) {

            if (id !== run) return;

            if (i >= usable.length) { browser(); return; }

            const f = usable[i];

            playUrl(
                f,
                1,
                id,
                () => {},
                () => {
                    if (!/^data:/.test(f)) deadSrc.add(f);
                    tryFile(i + 1);
                },
                done,
                2500
            );

        }

        tryFile(0);

    };

    /* ---------- Sunud-sunod (Play all: English -> Korean -> Chinese) ---------- */

    window.speakButtons = function (buttons) {

        window.stopSpeech();

        unlock();

        const id = run;

        let i = 0;

        function next() {

            if (id !== run || i >= buttons.length) return;

            const btn = buttons[i++];

            btn.classList.add("playing");

            window.playClip(btn, () => {

                btn.classList.remove("playing");

                if (id !== run) return;

                setTimeout(() => { if (id === run) next(); }, 350);

            });

        }

        /* Agad, nasa loob pa ng pindot, para hindi harangin ng phone */
        next();

    };

    window.speakFromButton = function (button) {
        window.speakButtons([button]);
    };

    window.speakAll = function (button) {
        const message = button.closest(".chat-message");
        if (!message) return;
        window.speakButtons([...message.querySelectorAll(".speak-btn")]);
    };

    /* Para ma-load nang maaga ang mga voice ng device */
    if (synth) { try { synth.getVoices(); } catch (e) {} }

})();

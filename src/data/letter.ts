import { LetterChapterData } from '../types';

/**
 * CANONICAL FOUR-CHAPTER STRUCTURE FOR CANIM ANEM
 * 
 * Chapter 1: Sizin Güzelliğinizin İzleri (Appreciation & Beauty)
 * Chapter 2: Sesiniz, Zarafetiniz ve Güzel Kalbiniz (Admiration & Personality)
 * Chapter 3: Hayata Duyduğunuz Sevgi (Gratitude, Passions, Travel, Kitchen & Family)
 * Chapter 4: Ve Ilayda... Kalbimin En Güzel Hikâyesi (Love, Commitment, Ilayda's Portrait & Future)
 */

export const LETTER_CHAPTERS: LetterChapterData[] = [
  {
    id: 'beauty',
    number: 1,
    title: 'Sizin Güzelliğinizin İzleri',
    subtitle: 'Zamansız bir zarafetin ve asaletin yansıması',
    decorIcon: 'sakura',
    paragraphs: [
      'Bazı insanlar hayatımıza yalnızca bir anlığına girmez; geldikleri yeri, dokundukları her köşeyi ve etraflarındaki her insanın dünyasını güzelleştirirler. Bugün, bu dünyada sizin varlığınızı, asil duruşunuzu ve etrafınıza saçtığınız o zarif ışığı kutlamak için buradayız.',
      'Bazı kadınların güzelliği yalnızca yüzlerindeki zarafetle sınırlı kalmaz; o güzellik bir yaşam biçimine, bir bakışa, bir duruşa ve zamanın bile solduramadığı derin bir asalete dönüşür. Sizin güzelliğiniz de işte tam olarak böyle; zamansız, içten gelen ve insanın ruhunu dinlendiren çok özel bir ışıltı.',
      'Ve bu güzellik sadece sizinle de kalmıyor; dünyaya armağan ettiğiniz iki güzel kızınızda, Sude’nin ve Ilayda’nın yüzlerinde, onların tebessümlerinde ve asil duruşlarında bir ayna gibi parıldıyor. Bir annenin zarafeti, kızlarının gülüşünde yeniden can bulur derler. Onların her gülümsemesinde ve zarafetinde, sizin asaletinizin en saf izlerini görmek mümkün.',
      'Bir anne, çocuklarına sadece bir hayat vermez; kendi ruhundan, kendi nezaketinden ve kendi güzelliğinden bir parçayı da onlara emanet eder. Sizin kızlarınızda bıraktığınız bu zarif izler, kalbinizin ne kadar asil ve sevgi dolu olduğunun en canlı, en kıymetli şahididir.'
    ]
  },
  {
    id: 'personality',
    number: 2,
    title: 'Sesiniz, Zarafetiniz ve Güzel Kalbiniz',
    subtitle: 'Ruhu dinlendiren bir ahenk ve engin bir şefkat',
    decorIcon: 'sakura',
    paragraphs: [
      'Sizin o zarif ve şefkatli Türkçeniz, sesinizdeki o yumuşacık kadınsı ton insanı ilk andan itibaren sarıp sarmalayan eşsiz bir ahenge sahip. Konuşurken sesinizden yayılan o içten sıcaklık, insanı dinlendiriyor; sizi dinlerken insanın yüzünde kendiliğinden beliren o huzur dolu tebessüme engel olmak imkânsız.',
      'Ama sesinizden daha da etkileyici olan bir şey varsa, o da kalbinizin eşsiz güzelliğidir. Herkese karşı gösterdiğiniz o koşulsuz şefkat, insanları yargılamadan kucaklayan o engin merhametiniz ve her durumda iyiliği gören o asil kalbiniz, etrafınızdaki herkes için tükenmez bir huzur kaynağı.',
      'Dünyaya bu kadar açık fikirli, bu kadar anlayışlı ve yeniliklere böylesine meraklı bakabilmeniz, hayata kattığınız en büyük zenginliklerden biri. Farklı bakış açılarına gösterdiğiniz derin hoşgörü, bitmek bilmeyen yaşam merakınız ve her zaman koruduğunuz o asil duruşunuz, sizi tanıyan herkes için hayranlık uyandırıcı bir ilham kaynağıdır.'
    ]
  },
  {
    id: 'life',
    number: 3,
    title: 'Hayata Duyduğunuz Sevgi',
    subtitle: 'Seyahat tutkusu, bereketli bir sofra ve güzel bir aile',
    decorIcon: 'tropical',
    paragraphs: [
      'Hayata duyduğunuz o canlı tutku, yeni kültürleri ve diyarları keşfetme arzunuz ruhunuza bambaşka bir tazelik katıyor. Dünyanın en huzurlu köşelerinden biri olan Japonya’ya duyduğunuz hayranlık ve o masalsı sakura bahçelerine olan sevginiz ne kadar da size yakışıyor... Bir gün o pembe kiraz çiçeklerinin altında, sabahın ilk ışıklarıyla birlikte huzurla yürüdüğünüzü hayal etmek ne kadar güzel.',
      'Ve elbette Bali... Masmavi turkuaz suların, tropik yeşilliklerin ve gökyüzünü kızıla boyayan o büyüleyici gün batımlarının adası. Sizi Bali’nin o dingin sahilinde, hafif bir okyanus meltemi eşliğinde, hayatın tüm yorgunluklarından uzakta neşeyle dinlenirken görmek, en büyük dileklerimizden biri.',
      'Sanırım bazı insanlar sevgilerini kelimelerle, bazıları sarılarak, bazılarıysa etrafında sevdiklerinin toplandığı güzel bir sofrayla ifade eder.',
      'Sizin yemeklerinizin de işte böyle özel bir yanı olduğunu hayal ediyorum. Çünkü güzel bir yemek hazırlamak, yalnızca malzemeleri bir araya getirmek değildir. İçine sabır, emek, özen ve insanın kalbinden kopup gelen küçücük bir sevgi parçasını da katabilmektir.',
      'Belki de bu yüzden hiçbir restoranın yemeği, bir annenin ellerinden çıkan yemeğin tadına tam olarak ulaşamaz. Çünkü o sofrada yalnızca yemek yoktur. Orada sevgi vardır.',
      'Erol Baba ile omuz omuza kurduğunuz bu güzel aile yuvası, Sude’nin ve Ilayda’nın neşesiyle taçlanmış en kutsal sığınak. Bir aileyi güçlü kılan şey yalnızca aynı duvarların arasında yaşamak değil; o çatı altında paylaşılan sevgi, sadakat ve hürmettir. En büyük hayallerimden biri, hep birlikte aynı güzel masanın etrafında toplanmak, saatlerce kahkahalarla sohbet etmek ve ömür boyu unutulmayacak hatıralar biriktirmektir.',
      'Yeni yaşınızda kalbinizden geçen tüm güzel hayaller, görmek istediğiniz tüm uzak diyarlar bir bir gerçek olsun. Erol Baba ile el ele, kızlarınızın mutluluğuyla aydınlanan, sağlıkla, huzurla ve yepyeni seyahat maceralarıyla dolu upuzun, bereketli bir ömür diliyorum. Hayatımıza kattığınız tüm güzellikler için size yürekten teşekkür ederiz.'
    ]
  },
  {
    id: 'ilayda',
    number: 4,
    title: 'Ve Ilayda... Kalbimin En Güzel Hikâyesi',
    subtitle: 'Gözümün nuru, ömrümün en kıymetli gayesi',
    decorIcon: 'heart',
    highlightQuote: {
      part1: 'Siz bir gün dünyaya iki güzel kız getirdiniz.',
      part2: 'Ben ise yıllar sonra, o iki güzel hikâyeden birinin içinde kendi hayatımın aşkını buldum.'
    },
    paragraphs: [
      'Bazen insan hayatına biri girer ve farkında olmadan her şeyin anlamı değişmeye başlar. Sizin bu dünyaya kattığınız en güzel hediyelerden biri olan kızınız Ilayda, benim dünyamın en parlak ışığı oldu.',
      'Ilayda hayatıma girdiği günden beri, sıradan günlerin bile anlamı değişti. O benim gözümün nuru, günümün en güzel tebessümü. En yorgun anımda bile onun adını düşünmek, sesini duymak içime tarifsiz bir ferahlık veriyor. Onun gözlerindeki o masum parıltı, bana her gün yeniden yaşama sevinci aşılıyor.',
      'Onun varlığı, hayatta daha çok çalışmam, her gün daha iyi bir insan ve güçlü bir adam olmam için en büyük motivasyonumdur. Benim kalbimde Ilayda sadece bugünün değil, ömrümün geri kalanının da tek sahibidir. Onunla bir gelecek kurmak, hayatlarımızı birleştirmek ve onunla bir ömür boyu evli olarak yürümek en kutsal niyetim ve hedefimdir.',
      'Ona her gün bir prenses olduğunu hissettirmek, kalbini dünyanın tüm kederlerinden korumak ve o güzel gözlerindeki ışıltının bir an bile sönmemesi için canla başla çalışmak benim boynumun borcudur. Çünkü gerçek sevgi yalnızca sözlerde değil; güven vermek, huzur olmak ve sevdiğin insanı koşulsuz koruyup kollamaktır.',
      'Hayatın içinde bazen fikir ayrılıkları yaşasak da, birbirimize her kırıldığımızda veya tartıştığımızda bile ona olan sevgim azalmak yerine daha da olgunlaşıyor, kökleniyor ve büyüyor. Bizim sevgimiz; birbirini anlamayı, sabretmeyi, affetmeyi ve ne olursa olsun asla birbirinden vazgeçmemeyi öğrenen gerçek bir sevgi yolculuğudur. Ben her yeni güne başlarken, kalbimin en derin köşesiyle yeniden Ilayda’yı seçiyorum.',
      'Bir gün gelecek; onu o bembeyaz gelinliğin içinde, dünyanın en zarif ve en mutlu kadını olarak yanımda göreceğim anın hayaliyle yaşıyorum. O gün geldiğinde, onun gözlerindeki mutluluk hem sizin hem de benim bu hayattaki en büyük gururumuz olacak.',
      'Böylesine asil, tertemiz kalpli, merhametli ve sevgi dolu bir kız yetiştirdiğiniz için size olan saygım ve minnetim sonsuzdur. Sizin özenle büyüttüğünüz bu kıymetli emanete ömrüm boyunca hürmetle, sonsuz bir aşkla ve derin bir sorumlulukla sahip çıkacağıma söz veriyorum.'
    ]
  }
];

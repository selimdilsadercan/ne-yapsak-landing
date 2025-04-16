import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiMenu,
  FiHome,
  FiCompass,
  FiUsers,
  FiBook,
  FiUserCheck,
  FiFilter,
  FiZap,
  FiHeart,
  FiFolder,
  FiCheckCircle,
  FiAward,
  FiBookOpen,
  FiDownload,
  FiCpu,
} from "react-icons/fi";
import { IBenefit } from "@/types";
import BalanceFeature from "@/components/BalanceFeature";
import { ExploreSection } from "@/components/ExploreSection";
import { HomeSection } from "@/components/HomeSection";
import { LibrarySection } from "@/components/LibrarySection";
import { FileClock } from "lucide-react";
import { SessionSection } from "@/components/SessionSection";
import { IntegrationSection } from "@/components/IntegrationSection";

export const benefits: IBenefit[] = [
  {
    title: "Keşif Merkezin",
    description:
      "Ne izleyeceğini, ne oynayacağını ya da nereye gideceğini düşünme. Wedo ile tüm seçenekler akıllıca kategorilere ayrılır ve sana özel listelerle sunulur.",
    bullets: [
      {
        title: "Akıllı Kategoriler",
        description:
          "Film, oyun, etkinlik, mekan ve daha fazlası… İlgi alanlarına göre ayrılmış net ve sade kategorilerle hızlıca keşfet.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Kendine Özel Listeler",
        description:
          "“Kuşakla oynanacak oyunlar” ya da “Tek sezonda biten diziler” gibi seni tanıyan dinamik listelere göz at.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Anında Erişim",
        description:
          "İzlenecekleri tek tıkla Netflix'te aç, gidilecek mekanları haritada görüntüle, oyunları doğrudan oyna.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    component: <HomeSection />,
  },
  {
    title: "Sana Özel Öneriler",
    description:
      "Wedo, geçmişte izlediklerine, oynadıklarına ve beğendiklerine göre sana özel film, oyun, etkinlik ve daha fazlasını önerir.",
    bullets: [
      {
        title: "Beğendiğin Oyuncular & Yönetmenler",
        description:
          "Favori oyuncuların veya yönetmenlerin yeni projeleri çıktığında senin için öne çıkar.",
        icon: <FiUserCheck size={26} />,
      },
      {
        title: "Kişisel İlgi Alanlarına Göre Filtreleme",
        description:
          "Romantik komedi seviyorsan daha fazla o türden, yarış oyunu oynuyorsan benzer oyunlardan öneriler alırsın.",
        icon: <FiFilter size={26} />,
      },
      {
        title: "Tüm Türlerde Akıllı Öneriler",
        description:
          "Dizi, film, oyun, aktivite ya da video... Hangi türde neyi sevdiysen ona göre öneriler gelir.",
        icon: <FiZap size={26} />,
      },
    ],
    component: <ExploreSection />,
  },
  {
    title: "Birlikte Karar Verin",
    description:
      "Wedo, arkadaşlarınla veya grubunla ne izleyeceğinize, nereye gideceğinize ya da ne oynayacağınıza birlikte karar vermenizi kolaylaştırır.",
    bullets: [
      {
        title: "Oylama Oturumları",
        description:
          "Grup üyeleri önerilen seçenekleri oylayarak en çok beğenileni seçer. Eğlenceli ve demokratik karar alma!",
        icon: <FiCheckCircle size={26} />,
      },
      {
        title: "Gerçek Zamanlı Katılım",
        description:
          "Herkes aynı anda çevrim içi olarak oy kullanabilir, sonuçlar anlık görüntülenir.",
        icon: <FiUsers size={26} />,
      },
      {
        title: "En Çok Beğenilenler Öne Çıkar",
        description:
          "Oyların toplamına göre sıralama yapılır, grupça en uygun seçenek en üstte yer alır.",
        icon: <FiAward size={26} />,
      },
    ],
    component: <SessionSection />,
  },
  {
    title: "Kişisel Kitaplığın",
    description:
      "Film izlerken, oyun oynarken ya da bir mekân keşfederken aklında kalan her şeyi saklayabileceğin kişisel alanın.",
    bullets: [
      {
        title: "Tüm Kategoriler Tek Yerde",
        description:
          "Film, dizi, oyun, video, etkinlik, mekan… İlgi duyduğun her şeyi türüne göre düzenli şekilde sakla.",
        icon: <FiFolder size={26} />,
      },
      {
        title: "Daha Sonra Devam Et",
        description:
          "Beğendiğin ama şimdi yapamadığın şeyleri kaydet, müsait olduğunda hemen geri dön.",
        icon: <FileClock size={26} />,
      },
      {
        title: "Favorilerini Yönet",
        description:
          "Kalbine dokunan içerikleri favorilerine ekle, öncelik sırasına göre planla.",
        icon: <FiHeart size={26} />,
      },
    ],
    component: <LibrarySection />,
  },
  {
    title: "Platformlarını Bağla",
    description:
      "Netflix, JustWatch, BiletiniAl, Steam ve YouTube hesaplarını Wedo'ya entegre et, izlediklerin ve merak ettiklerin otomatik olarak kütüphanene eklensin.",
    bullets: [
      {
        title: "Zaman Kazandıran Otomatik Ekleme",
        description:
          "Daha önce izlediğin ya da oynadığın içerikleri tek tek aramakla uğraşma. Entegrasyonla otomatik olarak kaydet.",
        icon: <FiDownload size={26} />,
      },
      {
        title: "Kütüphanen Sana Özel Dolu Dolu",
        description:
          "Favori platformlarından gelen verilerle Wedo kütüphanen anında kişiselleşir.",
        icon: <FiBookOpen size={26} />,
      },
      {
        title: "Öneri Motoru Daha Akıllı",
        description:
          "Bağlı platformlardan gelen geçmiş veriler sayesinde, Wedo’nun önerileri çok daha isabetli olur.",
        icon: <FiCpu size={26} />,
      },
    ],
    component: <IntegrationSection />,
  },
];

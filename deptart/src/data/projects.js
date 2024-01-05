// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Księżycowa Metropolia',
		category: 'Teledyski',
		img: require('@/assets/images/Ksiezycowa_3.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Księżycowa Metropolia',
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Teledyski',
		},
		projectImages: [
			{
				id: 1,
				title: 'Księżycowa Metropolia',
				img: require('@/assets/images/Ksiezycowa_1.png'),
			},
			{
				id: 2,
				title: 'Księżycowa Metropolia',
				img: require('@/assets/images/KsiezycowaMetropolia.jpg'),
			},
			{
				id: 3,
				title: 'Księżycowa Metropolia',
				img: require('@/assets/images/Ksiezycowa_3.jpg'),
			},
		],
		projectInfo: {
			clientHeading: 'O kliencie',
			companyName: `Zespół 'echo'`,
			companyInfos: [
				{
					id: 1,
					title: 'Strona internetowa',
					url: 'https://www.youtube.com/@echooficjalnie4120',
				}
			],
			objectivesHeading: 'Cel',
			objectivesDetails:
				'Celem tego projektu była realizacja teledysku dla najnowszego singla zespołu "echo".',
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						'Zanurz się w magicznym świetle nocnej metropolii! Teledysk do utworu "Księżycowa Metropolia" zabierze Cię w niezwykłą podróż po nocnych ulicach Katowic, odkrywając piękno miasta pod światłem księżyca.'
				},
				{
					id: 2,
					details:
						'Katowice, tętniące życiem miasto na Górnym Śląsku, stało się niezapomnianą scenerią dla naszego teledysku. Kluczowym elementem produkcji było uwiecznienie miasta nocą, ukazując nie tylko jego architektoniczne piękno, ale również atmosferę, która budzi się, gdy słońce zachodzi. Księżycowe światło podkreślało kontrasty miasta, jednocześnie tworząc niesamowitą aurę tajemniczości i romantyzmu.'
				},
				{
					id: 3,
					details:
						`Przy projektowaniu teledysku skupiliśmy się na stworzeniu wizualnej poezji. Kadr za kadrem, zaskakujące ujęcia, podkreślające architektoniczne detale miasta, tworzą niepowtarzalną formę artystyczną, która idealnie współgra z brzmieniem tego utworu.
						"Księżycowa Metropolia" to nie tylko teledysk. To nocne spotkanie z miastem, zanurzone w świetle księżyca, które przenosi widza w magiczny świat emocji i piękna miejskiej scenerii.`
				}	
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://youtu.be/gVcNGZkOrko?si=yvP3WdcG0qabNMkP',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/gVcNGZkOrko?si=qch8Sjv7VuacDEn9'
		},
		relatedProject: {
			relatedProjectsHeading: `Inne projekty z tej kategorii`,
			relatedProjects: [
				{
					id: 1,
					title: 'Grudniowy',
					img: require('@/assets/images/Grudniowy_2.jpg'),
					href: '2'
				},
			],
		},
	},
	{
		id: 2,
		title: 'Grudniowy',
		category: 'Teledyski',
		img: require('@/assets/images/Grudniowy_2.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Grudniowy',
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Teledyski',
		},
		projectImages: [
			{
				id: 1,
				title: 'Grudniowy',
				img: require('@/assets/images/Grudniowy_2.jpg'),
			},
			{
				id: 2,
				title: 'Grudniowy',
				img: require('@/assets/images/Grudniowy_3.jpg'),
			},
			{
				id: 3,
				title: 'Grudniowy',
				img: require('@/assets/images/Grudniowy_1.png'),
			}
		],
		projectInfo: {
			clientHeading: 'O kliencie',
			companyName: `MOKSiR Kuźnia Raciborska`,
			companyInfos: [
				{
					id: 1,
					title: 'Strona internetowa',
					url: 'http://kuzniakultury.pl/',
				}
			],
			objectivesHeading: 'Cel',
			objectivesDetails:
				`Celem tego projektu była realizacja teledysku dla utworu 'Grudniowy', który zaprezentował zespół prowadzony przez MOKSiR Kuźnia Raciborska.`,
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						'Przygotuj się na świąteczny festiwal dźwięków i magii! "Grudniowy" to muzyczna uczta w wykonaniu utalentowanych podopiecznych MOKSiR w Kuźni Raciborskiej. Ta niezwykła produkcja została zrealizowana na deskach charakterystycznego budynku ośrodka, przynosząc ze sobą ciepło świątecznej atmosfery. Teledysk przeniesie Cię do serca Kuźni Raciborskiej, gdzie Młodzieżowy Ośrodek Kultury, Sportu i Rekreacji stał się magiczną sceną dla naszej interpretacji utworu "Grudniowy" autorstwa zespołu Lemon.'
				},
				{
					id: 2,
					details:
						'Decydując się na realizację teledysku na deskach ośrodka, chcieliśmy oddać hołd kreatywności i talentowi młodych artystów. Każdy krok, każdy dźwięk, każda nuta przenosi widza w magiczny świat grudniowych świąt, tworząc niezapomniany spektakl wizualny i dźwiękowy.'
				},
				{
					id: 3,
					details:
						'Podopieczni MOKSiR w Kuźni Raciborskiej z pełnym zaangażowaniem wykonują cover utworu "Grudniowy". Ich entuzjazm i artystyczna energia sprawiają, że teledysk staje się nie tylko muzyczną podróżą, ale również świadectwem wspólnej pasji i zaangażowania w tworzenie sztuki. Sceneria, podświetlona blaskiem choinkowych świateł, dodaje temu przedstawieniu aurę kameralnej intymności i tradycyjnego uroku.'
				}
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://youtu.be/jmbxs1wqML4?si=d3oPzsj98bh9xWjK',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/jmbxs1wqML4?si=SnBRdhq7G0VxBY55'
		},
		relatedProject: {
			relatedProjectsHeading: `Inne projekty z tej kategorii`,
			relatedProjects: [
				{
					id: 1,
					title: 'Księżycowa Metropolia',
					img: require('@/assets/images/Ksiezycowa_3.jpg'),
					href: '1'
				},
			],
		}
	},
	{
		id: 3,
		title: 'Sesja portretowa i lookbook',
		category: 'Sesje plenerowe',
		img: require('@/assets/images/Plener_1.png'),
		singleProjectHeader: {
			singleProjectTitle: 'Sesja portretowa i lookbook w plenerze',
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Sesje plenerowe',
		},
		projectImages: [
			{
				id: 1,
				title: 'Sesja - plener',
				img: require('@/assets/images/Plener_3.jpg'),
			},
			{
				id: 2,
				title: 'Sesja - plener',
				img: require('@/assets/images/Plener_1.jpg'),
			},
			{
				id: 3,
				title: 'Sesja - plener',
				img: require('@/assets/images/Plener_6.jpg'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Cel',
			objectivesDetails:
				`Celem tego projektu była realizacja sesji fotograficznej modelki w plenerze oraz nagranie krótkiego lookbook'a.`,
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						`Moim zadaniem była realizacja sesji fotograficznej modelki w plenerze oraz stworzenie krótkiego lookbook'a. Cała sesja odbyła się w plenerze, co stanowiło wyzwanie, z którego udało się wydobyć unikalne ujęcia. Wykorzystując światło, starałem się podkreślić kontury płaszcza i delikatnie modelowaną twarz, tworząc kompozycję, która łączy naturę z elegancją.`
				},
				{
					id: 2,
					details:
						'Modelka prezentuje się w wyrafinowanym płaszczu, który staje się nie tylko elementem garderoby, ale również środkiem wyrazu artystycznego. Każda poza, każdy ruch materiału odzwierciedla elegancję i siłę natury.',
				},
				{
					id: 3,
					details:
						'Skupiłem się na subtelnych detalach płaszcza, rejestrując każdy ruch materiału, co dodaje dynamiki każdemu ujęciu. Zwróciłem również uwagę na ekspresję modelki, starając się uchwycić zarówno chwilę skupienia, jak i swobodnego spaceru. To profesjonalne spojrzenie na detale, które definiuje jakość fotografii.',
				}
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://www.youtube.com/channel/UC93wqgg8Yr3cdtKlKaO27kQ',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/5bZWvTKuEr8?si=FGikGcxXIXh6m3e3'
		}
	},
	{
		id: 4,
		title: 'Działka inwestycyjna w Rybniku',
		category: 'Nieruchomości',
		img: require('@/assets/images/Rybnik_dzialka1.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Działka w Rybniku - Północ Nieruchomości',
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Nieruchomości',
		},
		projectImages: [
			{
				id: 1,
				title: 'Działka - Rybnik',
				img: require('@/assets/images/Rybnik_dzialka1.jpg'),
			},
			{
				id: 2,
				title: 'Działka - Rybnik',
				img: require('@/assets/images/Rybnik_dzialka2.jpg'),
			},
			{
				id: 3,
				title: 'Działka - Rybnik',
				img: require('@/assets/images/Rybnik_dzialka3.jpg'),
			},
		],
		projectInfo: {
			clientHeading: 'O kliencie',
			companyName: `Biuro "Północ Nieruchomości"`,
			companyInfos: [
				{
					id: 1,
					title: 'Strona internetowa',
					url: 'https://polnoc.pl/',
				}
			],
			objectivesHeading: 'Cel',
			objectivesDetails:
				'Celem tego projektu była realizacja materiału z powietrza w postaci zdjęć oraz filmu pokazowego działki inwestycyjnej.',
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						'Przedstawiam projekt, w którym należało spojrzeć na potencjał inwestycyjnej działki w Rybniku z zupełnie nowej perspektywy - z góry. Wykorzystując drona i korzystne warunki pogodowe, udało mi się stworzyć unikatowy zestaw zdjęć i filmu, ukazując nie tylko samą działkę, ale także jej otoczenie, co może być kluczowe w przyciąganiu potencjalnych inwestorów.'
				},
				{
					id: 2,
					details:
						'Zastosowanie drona pozwoliło mi zobaczyć działkę z wyjątkowej wysokości, uchwycić nie tylko jej kontury, ale także specyficzne detale terenu. Słońce oświetlające teren dodaje uroku i pozytywnie wpływa na prezentację, dlatego zawsze proponuję swoim klientom wstrzymać się z realizacją projektu do słonecznych warunków.'
				},
				{
					id: 3,
					details:
						'Chciałem, aby potencjalni inwestorzy zobaczyli nie tylko to, co jest tuż obok, ale również dalsze otoczenie. Dron pokazał nie tylko najbliższe sąsiedztwo, ale również okolicę, gdzie widoczne są istotne punkty, takie jak tereny rekreacyjne, sklepy czy ważne instytucje. To kompleksowe spojrzenie, które mam nadzieję, zaintryguje potencjalnych partnerów biznesowych.'
				}
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://youtu.be/Re1AAFdwrSk',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/Re1AAFdwrSk?si=mdCfMdFcNhXEY33B'
		},
		relatedProject: {
			relatedProjectsHeading: `Inne projekty z tej kategorii`,
			relatedProjects: [
				{
					id: 1,
					title: 'Działka na sprzedaż',
					img: require('@/assets/images/Zory_dzialka1.jpg'),
					href: '5'
				},
				{
					id: 2,
					title: 'Działka na sprzedaż',
					img: require('@/assets/images/Jastrzebie_dzialka1.jpg'),
					href: '6'
				},
			],
		}
	},
	{
		id: 5,
		title: 'Działka budowlana w Żorach',
		category: 'Nieruchomości',
		img: require('@/assets/images/Zory_dzialka1.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Działka w Żorach - Północ Nieruchomości',
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Nieruchomości',
		},
		projectImages: [
			{
				id: 1,
				title: 'Działka - Żory',
				img: require('@/assets/images/Zory_dzialka2.jpg'),
			},
			{
				id: 2,
				title: 'Działka - Żory',
				img: require('@/assets/images/Zory_dzialka1.jpg'),
			},
			{
				id: 3,
				title: 'Działka - Żory',
				img: require('@/assets/images/Zory_dzialka3.jpg'),
			},
		],
		projectInfo: {
			clientHeading: 'O kliencie',
			companyName: `Biuro "Północ Nieruchomości"`,
			companyInfos: [
				{
					id: 1,
					title: 'Strona internetowa',
					url: 'https://polnoc.pl/',
				}
			],
			objectivesHeading: 'Cel',
			objectivesDetails:
				'Celem tego projektu było zrealizowanie materiału z powietrza w postaci zdjęć oraz filmu pokazowego działki budowlanej.',
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						'Przedstawiam projekt, w którym postanowiłem odkryć potencjał malowniczej, budowlanej działki położonej w Żorach z perspektywy lotu drona. Korzystając z zaawansowanej technologii i sprzyjających warunków atmosferycznych, udało mi się stworzyć wyjątkowy zestaw fotografii i filmów, prezentując nie tylko sam teren budowlany, lecz także jego otoczenie, co może być kluczowe w przyciąganiu potencjalnych inwestorów.'
				},
				{
					id: 2,
					details:
						'Użycie drona pozwoliło mi spojrzeć na działkę z niezwykłej wysokości, podkreślając nie tylko jej kształty, lecz także charakterystyczne detale terenu. Naturalne światło słoneczne, które delikatnie padło na teren, dodaje uroku i pozytywnie wpływa na prezentację. Z tego powodu zawsze zalecam moim klientom oczekiwanie na słoneczne dni przed rozpoczęciem projektu.',
				},
				{
					id: 3,
					details:
						'Istotne jest nie tylko to, co znajduje się bezpośrednio wokół działki, ale równie piękno jej dalszego otoczenia. Dron uwiecznił nie tylko najbliższe sąsiedztwo, lecz także okolicę, gdzie można dostrzec istotne punkty, takie jak malownicze tereny rekreacyjne, dostępność sklepów czy istotne instytucje. To kompleksowe spojrzenie, które mam nadzieję, zainteresuje potencjalnych klientów, podkreślając jednocześnie unikalność tego ustronnego miejsca z pięknym pejzażem.',
				}
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://youtu.be/v33FIrONmAg',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/v33FIrONmAg?si=hV0OgSawzfS-Hn0j'
		},
		relatedProject: {
			relatedProjectsHeading: `Inne projekty z tej kategorii`,
			relatedProjects: [
				{
					id: 1,
					title: 'Działka na sprzedaż',
					img: require('@/assets/images/Rybnik_dzialka1.jpg'),
					href: '4'
				},
				{
					id: 2,
					title: 'Działka na sprzedaż',
					img: require('@/assets/images/Jastrzebie_dzialka1.jpg'),
					href: '6'
				},
			],
		}
	},
	{
		id: 6,
		title: 'Działka budowlana w Jastrzębiu',
		category: 'Nieruchomości',
		img: require('@/assets/images/Jastrzebie_dzialka1.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Działka w Jastrzębiu-Zdroju - Północ Nieruchomości',
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Nieruchomości',
		},
		projectImages: [
			{
				id: 1,
				title: 'Działka - Jastrzębie-Zdrój',
				img: require('@/assets/images/Jastrzebie_dzialka1.jpg'),
			},
			{
				id: 2,
				title: 'Działka - Jastrzębie-Zdrój',
				img: require('@/assets/images/Jastrzebie_dzialka2.jpg'),
			},
			{
				id: 3,
				title: 'Działka - Jastrzębie-Zdrój',
				img: require('@/assets/images/Jastrzebie_dzialka3.jpg'),
			},
		],
		projectInfo: {
			clientHeading: 'O kliencie',
			companyName: `Biuro "Północ Nieruchomości"`,
			companyInfos: [
				{
					id: 1,
					title: 'Strona internetowa',
					url: 'https://polnoc.pl/',
				}
			],
			objectivesHeading: 'Cel',
			objectivesDetails:
				'Celem tego projektu było przygotowanie materiału z powietrza w postaci zdjęć oraz filmu pokazowego działki budowlanej.',
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						'Przedstawiam projekt, w którym dane było mi eksplorować potencjał niewielkiej działki w pobliżu malowniczego Jastrzębiu-Zdroju. Z wykorzystaniem drona oraz sprzyjających warunków atmosferycznych, udało mi się stworzyć unikatowy zestaw zdjęć i filmu, prezentując nie tylko samą działkę, ale także urokliwe otoczenie tego niewielkiego miasteczka, co może być kluczowe dla potencjalnych klientów.',
				},
				{
					id: 2,
					details:
						'Dron umożliwił mi spojrzenie na działkę z lotu ptaka, dostrzegając nie tylko jej granice, ale także urok specyficznych detali terenu. Naturalne światło słoneczne, które delikatnie oświetliło działkę, dodaje jej uroku i wpływa pozytywnie na prezentację. Z tego względu zawsze zalecam oczekiwanie na słoneczne dni przed rozpoczęciem projektu, aby maksymalnie wyeksponować potencjał miejsca.',
				},
				{
					id: 3,
					details:
						'Mój cel to nie tylko pokazanie tego, co znajduje się bezpośrednio wokół działki, ale również uchwycenie piękna okolic Jastrzębia-Zdroju. Dron uwiecznił nie tylko najbliższe sąsiedztwo, ale także malownicze krajobrazy i specyficzny charakter niewielkiej miejscowości. To kompleksowe spojrzenie, które mam nadzieję, zaciekawi potencjalnych odbiorców, podkreślając jednocześnie ustronność tego miejsca w malowniczym otoczeniu.',
				}
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://youtu.be/1EuG8c3ubTs',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/1EuG8c3ubTs?si=p1u70tUiR3R-WRDh'
		},
		relatedProject: {
			relatedProjectsHeading: `Inne projekty z tej kategorii`,
			relatedProjects: [
				{
					id: 1,
					title: 'Działka na sprzedaż',
					img: require('@/assets/images/Rybnik_dzialka1.jpg'),
					href: '4'
				},
				{
					id: 2,
					title: 'Działka na sprzedaż',
					img: require('@/assets/images/Zory_dzialka1.jpg'),
					href: '5'
				},
			],
		}
	},
	{
		id: 7,
		title: `Cross'em przez pustynię`,
		category: 'Filmy promocyjne',
		img: require('@/assets/images/Offroad_1.jpg'),
		singleProjectHeader: {
			singleProjectTitle: `Off-road - cross'em przez pustynię`,
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Filmy promocyjne',
		},
		projectImages: [
			{
				id: 1,
				title: 'Cross',
				img: require('@/assets/images/Offroad_1.jpg'),
			},
			{
				id: 2,
				title: 'Cross',
				img: require('@/assets/images/Offroad_2.jpg'),
			},
			{
				id: 3,
				title: 'Cross',
				img: require('@/assets/images/Offroad_3.jpg'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Cel',
			objectivesDetails:
				'Celem tego projektu było przygotowanie materiału z powietrza w postaci zdjęć oraz filmu konkursowego, prezentującego zdolności kandydatki na crossie.',
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						'Przedstawiam projekt, którego celem było stworzenie atrakcyjnego materiału z powietrza w postaci zdjęć i filmu konkursowego, ukazującego umiejętności kandydatki na crossie. Wybraliśmy malowniczy teren pustyni, z wymagającymi wzniesieniami, aby dodatkowo podkreślić wyjątkowe zdolności zawodniczki na tym terenie. Pomimo trudności związanych z podążaniem za zwiną uczestniczką, udało się uchwycić i podkreślić jej dynamiczność oraz nieposkromioną energię.',
				},
				{
					id: 2,
					details:
						'Zastosowanie drona umożliwiło nam uwiecznienie porywającej akcji na trudnym terenie pustynnym. Bezdroża, wzniesienia i zjazdy zostały zarejestrowane z lotu ptaka, co pozwoliło na ukazanie pełnej skali wyzwania, przed którym stanęła kandydatka. To nie tylko konkursowy materiał, ale również wizualna opowieść o determinacji i umiejętnościach w środowisku crossowym.',
				},
				{
					id: 3,
					details:
						'Malownicza pustynia, ze swoimi wymagającymi warunkami terenowymi, dostarczyła spektakularnych ujęć, a jednocześnie stanowiła wyzwanie dla pilotowania drona. Przez trudne fragmenty terenu, dynamiczne skoki i szybkie zjazdy, stworzyliśmy materiał, który nie tylko prezentuje umiejętności kandydatki na crossie, ale również przenosi widza w świat ekscytujących i wymagających wyzwań off-roadowych.',
				}
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://youtu.be/6V_BT6Xv0Vw',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/6V_BT6Xv0Vw?si=eH-BxUJbxSZetRJO'
		},
		relatedProject: {
			relatedProjectsHeading: 'Inne projekty z tej kategorii',
			relatedProjects: [
				{
					id: 1,
					title: 'Styria',
					img: require('@/assets/images/Styria_3.jpg'),
					href: '8'
				},
				{
					id: 1,
					title: 'Nassfeld',
					img: require('@/assets/images/Nassfeld_1.jpg'),
					href: '9'
				},
			],
		},
	},
	{
		id: 8,
		title: `Styria`,
		category: 'Filmy promocyjne',
		img: require('@/assets/images/Styria_3.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Styria - materiał promocyjny regionu',
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Filmy promocyjne',
		},
		projectImages: [
			{
				id: 1,
				title: 'Styria',
				img: require('@/assets/images/Styria_1.jpg'),
			},
			{
				id: 2,
				title: 'Styria',
				img: require('@/assets/images/Styria_2.jpg'),
			},
			{
				id: 3,
				title: 'Styria',
				img: require('@/assets/images/Styria_3.jpg'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Cel',
			objectivesDetails:
				'Celem tego projektu było przygotowanie materiału z powietrza w postaci zdjęć oraz filmu pokazowego pięknego, górskiego regionu Styria w Austrii.',
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						'Celem tego projektu było stworzenie przepięknego materiału z powietrza, który ukazuje górski region Styrii w Austrii z zupełnie nowej perspektywy. Wykorzystanie drona pozwoliło mi na zarejestrowanie spektakularnych widoków i niezwykłych krajobrazów, którymi zachwyciły mnie te rejony. Ten niezwykły film i zdjęcia mają na celu podzielenie się z widzami fascynacją i urodą tych miejsc.',
				},
				{
					id: 2,
					details:
						'Odwiedziłem najbardziej urokliwe miejsca, takie jak lodowiec Dachstein, Hallstatt, Bärfallspitze, Schladming i Stoderzinken, a wszystko to zostało uwiecznione za pomocą drona DJI Air 2S w rozdzielczości 5,4K.',
				},
				{
					id: 3,
					details:
						'Wykorzystałem zdolności drona do lotu na różnych wysokościach i kątach, co pozwoliło mi uchwycić obszerne widoki gór i malowniczych dolin. Ta perspektywa dostarczała unikalne spojrzenie na górski krajobraz, podkreślając jego majestat i rozmach. Planując nagrania, zwracałem uwagę na warunki oświetleniowe. Przy zachodzącym słońcu lub podczas złotej godziny uzyskiwałem ciepłe światło, które subtelnie podkreślało kontury gór i zwiększało głębię obrazu. W postprodukcji, korzystając z formatu D-Log, miałem większą elastyczność w dostosowywaniu kolorystyki, co pozwoliło na wierniejsze oddanie naturalnych odcieni.',
				},
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://youtu.be/w0BRw97Aup0?si=LM1OmRSVlzb8VfgZ',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/w0BRw97Aup0?si=bVjCqXTDvCrvVVJj'
		},
		relatedProject: {
			relatedProjectsHeading: 'Inne projekty z tej kategorii',
			relatedProjects: [
				{
					id: 1,
					title: 'Cross',
					img: require('@/assets/images/Offroad_1.jpg'),
					href: '7'
				},
				{
					id: 1,
					title: 'Nassfeld',
					img: require('@/assets/images/Nassfeld_1.jpg'),
					href: '9'
				},
			],
		},
	},
	{
		id: 9,
		title: `Nassfeld`,
		category: 'Filmy promocyjne',
		img: require('@/assets/images/Nassfeld_3.jpg'),
		singleProjectHeader: {
			singleProjectTitle: 'Nassfeld - film promocyjny kurortu narciarskiego',
			singleProjectDate: '1 stycznia 2024',
			singleProjectTag: 'Filmy promocyjne',
		},
		projectImages: [
			{
				id: 1,
				title: 'Nassfeld',
				img: require('@/assets/images/Nassfeld_3.jpg'),
			},
			{
				id: 2,
				title: 'Nassfeld',
				img: require('@/assets/images/Nassfeld_2.jpg'),
			},
			{
				id: 3,
				title: 'Nassfeld',
				img: require('@/assets/images/Nassfeld_1.jpg'),
			},
		],
		projectInfo: {
			objectivesHeading: 'Cel',
			objectivesDetails:
				'Celem tego projektu było zrealizowanie materiału z powietrza w postaci zdjęć oraz filmu promocyjnego przy użyciu drona oraz kamery sportowej.',
			projectDetailsHeading: 'Szczegóły',
			projectDetails: [
				{
					id: 1,
					details:
						'W trakcie tego projektu skoncentrowałem się na stworzeniu dynamicznego materiału z powietrza, obejmującego zarówno zdjęcia, jak i film promocyjny kurortu narciarskiego, wykorzystując drona oraz kamerę sportową.',
				},
				{
					id: 2,
					details:
						'Kamerka sportowa okazała się niezastąpionym narzędziem podczas tego projektu. Jej kompaktowy rozmiar i lekkość umożliwiły montaż na różnych elementach, co było kluczowe przy rejestrowaniu ujęć z perspektywy narciarzy. Wyjątkowe możliwości stabilizacji obrazu oraz wysoka jakość nagrywania pozwoliły na uzyskanie płynnych i profesjonalnych kadrów, nawet w dynamicznych warunkach.',
				},
				{
					id: 3,
					details:
						'Aby zwiększyć emocje i autentyczność materiału, koncentrowałem się na detalach wyczynów narciarzy. Uchwyty na narty, kijki, skoki czy nawet zmienne warunki śniegowe stawały się kluczowymi elementami w kształtowaniu narracji. DJI Action 2, dzięki swojej małej masie i mobilności, umożliwiała zbliżenia do detali, bez utraty jakości obrazu.',
				}
			],
			socialSharingsHeading: 'Podziel się tym projektem',
			socialSharings: [
				{
					id: 1,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/deptart.pl',
				},
				{
					id: 2,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://youtu.be/8z9SqmHGtBI?si=Q94Csq1rPiDB35YG',
				},
			],
			projectUrl: 'https://www.youtube.com/embed/8z9SqmHGtBI?si=AYY3yVJNaaKSvNQn'
		},
		relatedProject: {
			relatedProjectsHeading: 'Inne projekty z tej kategorii',
			relatedProjects: [
				{
					id: 1,
					title: 'Cross',
					img: require('@/assets/images/Offroad_1.jpg'),
					href: '7'
				},
				{
					id: 1,
					title: 'Styria',
					img: require('@/assets/images/Styria_3.jpg'),
					href: '8'
				},
			],
		},
	}
];

export default projects;

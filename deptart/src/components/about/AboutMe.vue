<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 3,
					bio:
						`Moja oferta obejmuje wykonanie <b>zdjęć</b> oraz <b>filmów</b> - zarówno z ziemi, jak i lotu ptaka. Działam na terenie województwa <b>śląskiego</b> oraz <b>opolskiego</b>. W moim ekwipunku znajduje się <b><a href="#gear">sprzęt z najwyższej półki</a></b> - aparat pełnoklatkowy, który umożliwia nagrywanie filmów w <b>rozdzielczości 6K</b>! W zestawieniu z odpowiednimi obiektywami oraz stabilizatorem obrazu tworzy idealne narzędzie, które pozwala mi uwieczniać niezapomniane chwile.`,
				},
				{
					id: 4,
					bio:
						'Dodatkowo, bardzo często materiały wzbogacam o ujęcia z powietrza. Oferuję wykonanie zdjęć w rozdzielczości 48 Mpix oraz filmów w wysokiej jakości 5.4K za pomocą <b>profesjonalnego drona</b> z 1-calową matrycą. Jako doświadczony operator drona, posiadający niezbędne uprawnienia przez Urzęd Lotnictwa Cywilnego, gwarantuję nie tylko unikalne perspektywy, ale również pełne bezpieczeństwo i zgodność z przepisami. <b>Każde zlecenie traktuję indywidualnie</b>, dostosowując się do potrzeb klienta.',
				},
				{
					id: 4,
					bio:
						'Marzy Ci się ujęcie spod wody? To dla mnie również żaden problem! Dysponuję <b>kamerką sportową</b>, która pozwoli mi nagrać materiał w każdych warunkach - również w tych podwodnych.',
				}
			],
			intro: [
				{
					id: 1,
					bio:
						'Fajnie, że tu jesteś! <b>Mam na imię Dominik</b>, a moją pasją od najmłodszych lat jest świat fotografii i filmowania. Znajdujesz się zatem w miejscu, gdzie pasja spotyka profesjonalizm!'
				},
				{
					id: 2,
					bio:
						'Podejmę się każdego zlecenia, przykładowo:<br>- realizacja teledysków<br>- filmy promocyjne, pokazowe<br>- sesje fotograficzne w plenerze, lookbooki<br>- prezentacja działek budowlanych, inwestycyjnych, rolniczych<br>- dokumentacja budowy domów i innych nieruchomości<br>- zdjęcia hoteli, ośrodków wypoczynkowych, domków<br>- inspekcja trudno dostępnych miejsc<br>- wszelkiego rodzaju filmy promocyjne',
				},
			]
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<div class="flex justify-center w-full sm:w-2/4 mb-7 sm:mb-0">
			<img
				src="https://harmonifystorage.blob.core.windows.net/deptart/profile2.jpg"
				class="rounded-xl w-96 object-fill"
				alt=""
			/>
		</div>
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in intro"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg justify-text"
				v-html="bio.bio"
			>
			</p>
		</div>
	</div>
	<div class="w-full mt-6">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg justify-text"
				v-html="bio.bio"
			>
			</p>
		</div>
		<div class="text-center mt-12" id="gear">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				Czym fotografuję i nagrywam?
			</p>
		</div>
		<div class="flex mt-12 w-full items-center justify-center">
			<img
				src="https://harmonifystorage.blob.core.windows.net/deptart/gear_full.jpg"
				class="rounded-xl w-1/2"
				alt="Gear Full"
			/>
		</div>
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4"
			>
				Sprzęt jest niezwykle istotny w celu dostarczenia projektu w jak najlepszej jakości.<br> Pozwól, że przedstawię Ci moje narzędzia, które wykorzystuję w pracy.
			</h3>
		</div>
		<div class="block sm:flex sm:gap-10 mt-10 items-center">
			<div class="flex justify-center w-full mb-7 sm:mb-0">
			<img
				src="https://harmonifystorage.blob.core.windows.net/deptart/gear_camera.jpg"
				class="rounded-xl object-scale-down"
				alt="Gear Cam"
			/>
			</div>
			<div class="w-full sm:w-3/4 text-left">
			<h3 class="font-black mb-2 text-ternary-dark dark:text-ternary-light text-lg justify-text"><b>Panasonic Lumix S5II</b> - aparat pełnoklatkowy.</h3>
			<p
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg justify-text"
			>
			- zdjęcia o wyjątkowej rozdzielczości dzięki brakowi filtra antyaliasingowego - aż do 96 megapikseli<br>
			- niskie poziomy szumów, i imponująca dynamika tonalna<br>
			- pozwala na nagrywanie w maksymalnej rozdzielczości aż do 6K<br>
			- posiada aktywny układ chłodzenia elektroniki, idealny do długotrwałego filmowania<br>
			- wraz z obiektywami o ogniskowych 20mm-60mm oraz 50mm z przysłoną 1.8 pozwala na nagrywanie różnorodnych ujęć
			</p>
		</div>
	</div>
	<div class="mt-10 sm:mt-10">
		<div class="block sm:flex sm:gap-10 mt-10 items-center">
			<div class="flex justify-center w-full mb-7 sm:mb-0">
				<img
				src="https://harmonifystorage.blob.core.windows.net/deptart/gear_gimbal.jpg"
				class="rounded-xl object-scale-down"
				alt="Gear Gimbal"
				/>
			</div>
			<div class="w-full sm:w-3/4 text-left">
				<h3 class="font-black mb-2 text-ternary-dark dark:text-ternary-light text-lg justify-text"><b>Moza Aircross 2</b> - elektroniczny stabilizator obrazu.</h3>
				<p
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg justify-text"
				>
				- zapewnia trójosiową stabilizację, co oznacza, że równocześnie stabilizuje ruch kamery w trzech płaszczyznach: przechylenie, pochylenie i obrót<br>
				- jest zasilany akumulatorem, a jego długi czas pracy na jednym naładowaniu pozwala na stabilne nagrywanie przez dłuższy czas<br>
				- oferuje różne zaawansowane funkcje, takie jak tryb timelapse, śledzenie obiektu czy bardzo ciekawy efekt incepcji<br>
				</p>
			</div>
		</div>
	</div>
	<div class="mt-10 sm:mt-10">
		<div class="block sm:flex sm:gap-10 mt-10 items-center">
			<div class="flex justify-center w-full mb-7 sm:mb-0">
				<img
				src="https://harmonifystorage.blob.core.windows.net/deptart/gear_drone.jpg"
				class="rounded-xl object-scale-down"
				alt="Gear Drone"
				/>
			</div>
			<div class="w-full sm:w-3/4 text-left">
				<h3 class="font-black mb-2 text-ternary-dark dark:text-ternary-light text-lg justify-text"><b>DJI Air 2S</b> - profesjonalny dron.</h3>
				<p
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg justify-text"
				>
				- wyposażony jest w kamerę o rozdzielczości 20 megapikseli, a co ważniejsze, posiada dużą przekątną czujnika (1-calowy), co pozwala na lepszą jakość obrazu, szczególnie w warunkach słabego oświetlenia<br>
				- umożliwia nagrywanie wideo w rozdzielczości 5.4K przy 30 klatkach na sekundę, co pozwala na uzyskanie wysokiej jakości materiałów filmowych<br>
				- umożliwia nagrywanie w zwolnionym tempie (slow motion) z maksymalną prędkością klatek na sekundę wynoszącą 120 fps<br>
				- posiada optykę przesłony, która można regulować elektronicznie, co pozwala na dostosowanie ilości światła wpadającego do kamery<br>
				</p>
			</div>
		</div>
	</div>
	<div class="mt-10 sm:mt-10">
		<div class="block sm:flex sm:gap-10 mt-10 items-center">
			<div class="flex justify-center w-full mb-7 sm:mb-0">
				<img
				src="https://harmonifystorage.blob.core.windows.net/deptart/gear_sportcam.jpg"
				class="rounded-xl object-scale-down"
				alt="Gear Sportcam"
				/>
			</div>
			<div class="w-full sm:w-3/4 text-left">
				<h3 class="font-black mb-2 text-ternary-dark dark:text-ternary-light text-lg justify-text"><b>DJI Action 2</b> - wodoodporna kamera sportowa.</h3>
				<p
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg justify-text"
				>
				- nagrywa materiały wideo w jakości 4K/120FPS, zapewniając doskonałą wydajność i bogate w szczegóły ujęcia<br>
				- wyposażona jest w obiektyw o szerokim kącie widzenia wynoszącym 155° przy przysłonie f/2.8. Ten szeroki kąt pozwala na uchwycenie dużej przestrzeni<br> i idealnie sprawdza się podczas rejestrowania akcji, zwłaszcza w dynamicznych i panoramicznych ujęciach<br>
				- posiada stopień ochrony IP68, co oznacza, że jest wodoodporna do głębokości do 10 metrów<br>
				</p>
			</div>
		</div>
	</div>
</template>
<style scoped>
.justify-text {
  text-align: justify;
}
</style>

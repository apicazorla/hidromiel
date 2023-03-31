import Page from '@/components/page'
import Section from '@/components/section'
const Index = () => (
	<Page>
		<Section>
			<h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
				We grow a lot of rice.
			</h2>

			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Tu adorable arroz, and so does the rest of the world. In the crop year
					2008/2009, the milled rice production volume amounted to over{' '}
					<span className='font-medium text-zinc-900 dark:text-zinc-50'>
						448 million tons
					</span>{' '}
					worldwide.
				</p>

				<br />

				<p className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a
						href='https://github.com/mvllow/next-pwa-template'
						className='underline'
					>
						Source
					</a>
				</p>
			</div>
		</Section>
	</Page>
)

export default Index
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAsrK-SGqmZ9dOFWEXyS9e5V1YeWuPHy9k",
    authDomain: "miel-para-regalo.firebaseapp.com",
    projectId: "miel-para-regalo",
    storageBucket: "miel-para-regalo.appspot.com",
    messagingSenderId: "406612881797",
    appId: "1:406612881797:web:e83f602168381c122e54ec",
    measurementId: "G-H2M3L930KB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
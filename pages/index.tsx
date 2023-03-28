import Page from '@/components/page'
import Section from '@/components/section'

butInstall.addEventListener('click', async () => {
	console.log('👍', 'butInstall-clicked');
	const promptEvent = window.deferredPrompt;
	if (!promptEvent) {
	  // The deferred prompt isn't available.
	  return;
	}
	// Show the install prompt.
	promptEvent.prompt();
	// Log the result
	const result = await promptEvent.userChoice;
	console.log('👍', 'userChoice', result);
	// Reset the deferred prompt variable, since
	// prompt() can only be called once.
	window.deferredPrompt = null;
	// Hide the install button.
	divInstall.classList.toggle('hidden', true);
  });
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

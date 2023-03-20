import Page from '@/components/page'
import Section from '@/components/section'

const Recipes = () => (
	<Page>
		<Section>
			<h3 className='text-xl font-semibold'>Hidromiel de manzana</h3>

			
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Hidromiel de manzana semidulce de un grado alcohólico del 8% a partir de zumo de manzana a partir de concentrado 
					y miel de romero. Estabilizada y endulzada con miel de romero. Levadura Lalvin 47.
				</p>
			</div>
		</Section>


		<Section>
			<h3 className='font-medium'>Thanks to</h3>

			<ul className='list-disc space-y-2 px-6 py-2'>
				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a img src='https://drive.google.com/uc?export=view&id=1DaJeWAtOPrVDWz_Xk0LMXS5TrQDKYnYP" width="200"' className='underline'>
						Receta en pdf
					</a>{' '}
					for high quality images
				</li>

				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
					<a href='https://teenyicons.com' className='underline'>
						Teenyicons
					</a>{' '}
					for lovely icons
				</li>
			</ul>
		</Section>
	</Page>
)

export default Recipes

import Page from '@/components/page'
import Section from '@/components/section'

const Recipes = () => (
	<Page>

<Section>
			<h3 className='text-xl font-semibold'>Recetas</h3>
		</Section>

		<Section>
			<h3 className='text-xl font-semibold'>Hidromiel de manzana</h3>

			
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Hidromiel de manzana semidulce de grado alcohólico 8% a partir de zumo de manzana procedente de concentrado 
					y miel de romero. Estabilizado y endulzado con miel de romero. Levadura Lalvin D47.
				</p>
			</div>
		</Section>

		<Section>
			<ul className='list-disc space-y-2 px-6 py-2'>
				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
				<div>
				<a href="hidromiel_de_manzana.pdf" className= 'underline'download>Clic para Descarga de pdf!</a>
</div>
				</li>
			</ul>
		</Section>

		<Section>
			<h3 className='text-xl font-semibold'>Buckland mead</h3>

			
			<div className='mt-2'>
				<p className='text-zinc-600 dark:text-zinc-400'>
					Hidromiel seca de grado alcohólico 4,5% a partir de miel de romero.  En la secundaria se 
					añade rooibos y zumo de limón. Estabilizado. Levadura Lalvin D47.
				</p>
			</div>
		</Section>

		<Section>
			<ul className='list-disc space-y-2 px-6 py-2'>
				<li className='text-sm text-zinc-600 dark:text-zinc-400'>
				<div>
				<a href="hidromiel_de_manzana.pdf" className= 'underline'download>Clic para Descarga de pdf!</a>
</div>
				</li>
			</ul>
		</Section>



	</Page>
)

export default Recipes

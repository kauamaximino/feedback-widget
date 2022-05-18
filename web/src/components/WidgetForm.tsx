import { CloseButton } from './CloseButton'

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: '',
      alt: 'relatar um bug',
    },
  },
  IDEA: {
    title: 'Ideia'
  },
  OTHER: {
    title: 'Outro'
  },
};

export function WidgetForm() {
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        <button></button>
      </div>

      <footer className='text-xs'>
        U+1F41B
        Feito com ❤️ por <a className='underline underline-offset-2' href="https://www.linkedin.com/in/kaua-maximino/">Kauã Maximino</a>
      </footer>
    </div>
  )
}
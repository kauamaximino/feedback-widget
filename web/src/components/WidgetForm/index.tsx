import { useState } from 'react'
import { CloseButton } from '../CloseButton'

import bug from '../../assets/images/bug.svg'
import idea from '../../assets/idea.svg'
import other from '../../assets/other.svg'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bug,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: idea,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: other,
      alt: 'Imagem de um',
    }
  },
};

type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>
        <CloseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep />
      ) : (
          <p>Hello World</p>
      )}

      <footer className='text-xs'>
        
        Feito com ❤️ por <a className='underline underline-offset-2' href="https://www.linkedin.com/in/kaua-maximino/">Kauã Maximino</a>
      </footer>
    </div>
  )
}
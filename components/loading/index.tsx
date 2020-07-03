import {
  Background,
  Rocket,
  ExhaustFumes,
  Stars,
  RocketBody,
} from './loading.styles'

const createArray = (length: number) => Array.from({ length }, (_, i) => i)

export default function () {
  const exhaust = createArray(9)
  const star = createArray(7)

  return (
    <Background>
      <Rocket>
        <RocketBody>
          <div className='body' />
          <div className='fin fin-left' />
          <div className='fin fin-right' />
          <div className='window' />
        </RocketBody>

        <div className='exhaust-flame' />

        <ExhaustFumes>
          {exhaust.map(i => (
            <li key={`fume-${i}`} />
          ))}
        </ExhaustFumes>

        <Stars>
          {star.map(i => (
            <li key={`star-${i}`} />
          ))}
        </Stars>
      </Rocket>
    </Background>
  )
}

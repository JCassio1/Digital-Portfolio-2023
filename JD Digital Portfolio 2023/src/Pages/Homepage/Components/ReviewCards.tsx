import doubleQuote from '../../../assets/quote-rounded-left---filled(24x24)@3x.png'
import { reviewCard } from '../../../model/DataStructure'

const ReviewCards = ({ reviewComments, reviewBy, reviewTextColor, reviewerTextColor, cardBgColor }: reviewCard) => {
  return (
    <div className={`mt-5 ${cardBgColor} p-8 rounded-lg shadow-md max-w-md flex`}>
      <div className='mr-4'>
        <img src={doubleQuote} alt='double quotes' />
      </div>
      <div>
        <p className={`text-lg mb-4 ${reviewTextColor}`}>{reviewComments}</p>
        <p className={`text-sm font-bold ${reviewerTextColor}`}>- {reviewBy}</p>
      </div>
    </div>
  )
}

export default ReviewCards

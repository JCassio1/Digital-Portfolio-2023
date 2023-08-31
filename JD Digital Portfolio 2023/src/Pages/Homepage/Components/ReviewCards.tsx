import doubleQuote from '../../../assets/quote-rounded-left---filled(24x24)@3x.png'
import { reviewCard } from '../../../model/DataStructure'

const ReviewCards = ({ reviewComments, reviewBy, workType }: reviewCard) => {
  return (
    <article className='my-8 mr-2 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25'>
      <div className='rounded-[10px] bg-white p-4  dark:bg-gray-900 sm:p-6'>
        <h3 className='mt-0.5 text-lg font-medium text-gray-900 dark:text-white'>{reviewBy}</h3>

        <p>{reviewComments}</p>

        <div className='mt-4 flex flex-wrap gap-1'>
          <span className='whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100'>
            {workType}
          </span>
        </div>
      </div>
    </article>
  )

  // return (
  //   <div className={`mt-5 ${cardBgColor} p-8 rounded-lg shadow-md max-w-md flex`}>
  //     <div className='mr-4'>
  //       <img src={doubleQuote} alt='double quotes' />
  //     </div>
  //     <div>
  //       <p className={`text-lg mb-4 ${reviewTextColor}`}>{reviewComments}</p>
  //       <p className={`text-sm font-bold ${reviewerTextColor}`}>- {reviewBy}</p>
  //     </div>
  //   </div>
  // )
}

export default ReviewCards

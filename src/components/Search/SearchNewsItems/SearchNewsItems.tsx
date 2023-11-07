import React from 'react'
interface NewsItem {
  id: number
  title: string
  description: string
  subreddit: string
  avatarUrl: string
  coverImageUrl: string
}
export const SearchNewsItems: React.FC = () => {
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "1989 (Taylor's Version)",
      description: "1989 Taylor's Version description goes here.",
      subreddit: 'r/TaylorSwift',
      avatarUrl: 'https://b.thumbs.redditmedia.com/FPpQTlvTw9KcPD3jIjIDxkRpFDaHapQ8FLwrjJyIGFc.png',
      coverImageUrl: 'https://b.thumbs.redditmedia.com/Bu7rx_lHYwuNw1kUxnwyg-MP1O2-Y5fecmXVDSZr2os.jpg'
    },
    {
      id: 2,
      title: 'NFL Week 8',
      description:
        'NFL Power Rankings, Week 8: Chiefs reclaim No. 1 spot; rampaging Ravens soar into top fiveNFL Power Rankings, Week 8: Chiefs reclaim No. 1 spot; rampaging Ravens soar into top five',
      subreddit: 'r/nfl and more',
      avatarUrl: 'https://b.thumbs.redditmedia.com/gPTZdsAVMdsYqOqNFtEkAyKuMZGdva3H5pTQztE7qCQ.png',
      coverImageUrl: 'https://b.thumbs.redditmedia.com/72CibiV0mWj--HNNEvRg6u0Ny4LRan1KCPxqCJfxEOk.jpg'
    }
  ]

  return (
    <section>
      <ul role='menu' className='list-none mt-0 mb-0 search-result-list'>
        {newsData.map((news, index) => (
          <li
            key={news.title}
            className={`relative list-none mt-0 border-b ${
              index !== newsData.length - 1 ? 'border-gray-300' : 'border-transparent'
            }`}
          >
            <a className='flex pl-3 justify-between px-md gap-[0.5rem] text-secondary hover:bg-hover-popper'>
              <span className='flex items-center gap-xs min-w-0 shrink w-[400px]'>
                <span className='flex flex-col justify-center min-w-0 shrink py-2'>
                  <span className='text-14'>
                    <span
                      className='ml-2xs inline-block leading-5 text-neutral-content font-bold'
                      data-type='search-dropdown-item-label-text'
                    >
                      {news.title}
                    </span>
                  </span>
                  <span className='text-12 text-secondary-weak'>
                    <span className='ml-2xs inline-block min-h-[40px] text-neutral-content pb-xs'>
                      <span className='inline-block mb-xs text-12'>{news.description}</span>
                      <div className='flex items-center text-text-color-weak gap-2'>
                        <img
                          className='rounded-full h-md w-md mr-2xs'
                          loading='lazy'
                          src={news.avatarUrl}
                          width='20'
                          height='20'
                          alt='User Avatar'
                        />
                        <span className='text-12'>{news.subreddit}</span>
                      </div>
                    </span>
                  </span>
                </span>
              </span>
              <span className='flex items-center shrink-0'>
                <span className='flex items-center justify-center h-lg'>
                  <img
                    className='rounded-sm object-cover mr-2xs'
                    loading='lazy'
                    src={news.coverImageUrl}
                    width='96'
                    height='72'
                    alt='Album Cover'
                  />
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

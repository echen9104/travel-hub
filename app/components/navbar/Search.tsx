'use client';

import { BiSearch } from 'react-icons/bi';
import useSearchModal from '@/app/hooks/useSearchModal';

const Search = () => {
	const searchModal = useSearchModal();

  return (
    <div 
			onClick={searchModal.onOpen}
			className='
				border-1[px] py-2
				w-full md:w-auto
				rounded-full 
				shadow-md hover:shadow-lg
				transition cursor-pointer
			'
    >
        <div 
            className='
                flex flex-row
                items-center justify-between
            '
        >
            <div className='text-sm font-semibold px-6 hover:scale-105'>
                Anywhere
            </div>
            <div
                className='
                    hidden sm:block
                    text-sm font-semibold
                    px-6 border-x-[1px]
                    flex-1 text-center
                    whitespace-nowrap
                    hover:scale-105
                '
            >
                Any Week
            </div>
            <div
                className='
                    text-sm pl-6 pr-2 text-gray-600
                    flex flex-row items-center gap-3
                '
            >
                <div 
                    className='
                        hidden sm:block hover:scale-105
                        whitespace-nowrap
                    '
                >
                    Add Guests
                </div>
                <div
                    className='
                        p-2 rounded-full
                        bg-rose-500 text-white
                    '
                >
                    <BiSearch size={18} className='hover:scale-105' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search
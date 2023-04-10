'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from 'query-string';

interface CategoryProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryProps> = ({
  icon: Icon,
  label,
  selected
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    // parse current params to string from object
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    // set category to current category 
    const updatedQuery: any = {
      ...currentQuery,
      category: label
    };

    // deselect if category is clicked again
    if (params?.get('category') == label) {
      delete updatedQuery.category;
    }

    // generate url string to updated query
    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex flex-col items-center justify-center
        gap-2 p-3 border-b-2 
        transition cursor-pointer
        hover:text-neutral-800
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm whitespace-nowrap">
        {label}
      </div>
    </div>
  )
};

export default CategoryBox;
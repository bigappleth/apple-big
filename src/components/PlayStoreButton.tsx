import React from 'react'
import clsx from 'clsx'
import { ctaDetails } from '@/data/cta'
import Link from 'next/link'

const PlayStoreButton: React.FC<{ dark?: boolean }> = ({ dark }) => (
    <Link href={ctaDetails.googlePlayUrl}>
        <button
            type="button"
            className={clsx(
                "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit",
                { "text-white bg-primary": dark, "text-foreground bg-white": !dark }
            )}
        >
            <span className="-mt-1 text-lg font-semibold">
                สอบถามเพิ่มเติม
            </span>
        </button>
    </Link>
)

export default PlayStoreButton
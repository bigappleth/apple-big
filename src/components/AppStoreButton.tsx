import React from 'react'
import clsx from 'clsx'
import { ctaDetails } from '@/data/cta'
import Link from 'next/link'

const AppStoreButton: React.FC<{ dark?: boolean }> = ({ dark }) => (
    <Link href={ctaDetails.appStoreUrl}>
        <button
            type="button"
            className={clsx(
                "flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit",
                { "text-white bg-primary": dark, "text-foreground bg-secondary": !dark }
            )}
        >
            <span className="-mt-1 text-xl font-semibold">
                ขายเลย คลิก
            </span>
        </button>
    </Link>
)

export default AppStoreButton
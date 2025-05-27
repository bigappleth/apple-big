import React from 'react'
import clsx from 'clsx'

import { ctaDetails } from '@/data/cta'
import Link from 'next/link'

const PlayStoreButton = ({ dark }: { dark?: boolean }) => {
    return (
        <Link href={ctaDetails.googlePlayUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-primary": dark, "text-foreground bg-white": !dark })}
            >
                <div>
                    <div className="-mt-1 text-lg font-semibold">
                        สอบถามเพิ่มเติม
                    </div>
                </div>
            </button>
        </Link>
    )
}

export default PlayStoreButton
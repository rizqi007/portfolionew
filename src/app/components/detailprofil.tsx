import Image from "next/image";

export default function Detailprofil() {
    return (
        <div className="grid grid-cols-1 pb-5 border-b border-dotted border-gray-400 dark:border-gray-500" id="profil">
            <div className="text-base font-semibold uppercase">
                <h1>
                    profil pribadi
                </h1>
            </div>
            <div className="text-xs">
                Detail profil Muhammad Rizqi
            </div>
            <div className="mt-5">
                <div className="w-full max-w-[500px] h-[300px] rounded-md relative">
                    <Image
                        src={'/profil.JPG'}
                        sizes="100%"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                        alt='Profil Muhammad Rizqi'
                    />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-5">
                    <div>
                        <div className="text-base uppercase font-semibold">
                            Muhammad Rizqi
                        </div>
                        <div className="text-sm dark:text-gray-300 mt-2">
                            Seorang pengembang Web Developer dari Jakarta.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        <Lebihlengkap ikon="pendidikan" teks="STT Terpadu Nurul Fikri" />
                        <Lebihlengkap ikon="email" teks="amat.rizki200@gmail.com" />
                        <Lebihlengkap ikon="nohp" teks="+62859866874974" />
                        <Lebihlengkap ikon="website" teks="rizqi.vercel.app" />
                        <Lebihlengkap ikon="website" teks="rizqi007.com" />
                        <Lebihlengkap ikon="github" teks="rizqi007" />
                        <Lebihlengkap ikon="lokasi" teks="Jakarta selatan, Kota Jakarta, Indonesia" />
                    </div>
                </div>
            </div>
        </div>
    )
}
function Lebihlengkap({ ikon, teks }: { ikon: string, teks: string }) {
    return (
        <div className="grid grid-cols-[auto,1fr] gap-4 items-start">
            <div className="w-4 h-4">
                <Image
                    src={`/${ikon}.svg`}
                    width={100}
                    height={100}
                    alt={ikon}
                />
            </div>
            {
                ikon === "website" || ikon === "github" ?
                    <a href={`https://${ikon === "github" ? `github.com/${teks}` : `${teks}`}`} target="_blank">
                        <div className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500">
                            {teks}
                        </div>
                    </a>
                    :
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                        {teks}
                    </div>
            }
        </div>
    )
}

export default function Lokasimaps() {
    return (
        <div className="pb-5" id="maps">
            <div>
                <div className="text-base font-semibold uppercase">
                    lokasi di google maps
                </div>
                <div className="text-xs">
                    Alamat dan lokasi saya di google maps
                </div>
            </div>
            <div className="mt-5">
                <iframe className="w-full h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3511163269695!2d106.83340017378187!3d-6.34856296210853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec373614856d%3A0x55e0758275ff0d21!2sJl.%20H.%20Shibi%204%20No.69%2C%20RT.7%2FRW.2%2C%20Srengseng%20Sawah%2C%20Kec.%20Jagakarsa%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010550!5e0!3m2!1sen!2sid!4v1700503214087!5m2!1sen!2sid" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}

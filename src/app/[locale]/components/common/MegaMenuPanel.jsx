import Link from "next/link";

export default function MegaMenuPanel({ menu }) {
  if (!menu) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-40 hidden lg:block">
      <div className="rounded-b-[16px] bg-[#f4f5f7] px-10 pb-10 pt-8 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
        <div className="mb-8 flex items-center gap-3">
          <h3 className="text-[18px] font-semibold text-dark">{menu.title}</h3>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#995F22] text-sm text-white">
            →
          </span>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {menu.columns.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-6 text-[16px] font-semibold text-dark">
                {column.heading}
              </h4>

              <ul className="space-y-5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] leading-[1.4] text-[#202020] transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
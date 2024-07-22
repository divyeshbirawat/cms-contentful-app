import Image from "next/image";
import nextJSImage from '../public/assets/nextjs.svg';
import Link from "next/link";

const MegaMenu = ({ megaMenuList }: { megaMenuList: any[] }) => {
  const menuItems = megaMenuList[0].megaMenuItemCollection.items;
  return (
    <div className="megamenu w-full h-32 flex items-center">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link href="/">
          <Image
            unoptimized={true}
            src={nextJSImage}
            loader={nextJSImage}
            priority
            alt="nextjs"
            height={100}
            width={100}
          />
        </Link>
        <button className="menu-toggle md:hidden">
          <div className="w-4 h-[2px] bg-black mb-[1.5px]" />
          <div className="w-4 h-[2px] bg-black mb-[1.5px]" />
          <div className="w-4 h-[2px] bg-black mb-[1.5px]" />
        </button>
        <ul className="menu-items flex divide-x">
          {menuItems.map((item: any) => (
            <li key={item.id} className="min-w-24 text-center px-4">
              <a href={item['__typename'] === 'Blog' ? `/posts/${item.slug}` : `/authors/${item.slug}`}>{item['__typename'] === 'Blog' ? item.blogTitle : item.authorName}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
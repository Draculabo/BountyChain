import Link from 'next/link';

import { ConnectButton } from '@mysten/dapp-kit';

const Nav = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <nav className="flex space-x-4">
          <Link href="/" className="font-semibold text-primary">
            任务广场
          </Link>
          <Link href="/publish" className="text-muted-foreground hover:text-primary">
            任务发布
          </Link>
        </nav>
        <div className="flex space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary">
            语言切换
          </a>
          <ConnectButton />
          <Link href="/message" className="text-muted-foreground hover:text-primary">
            消息
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Nav;

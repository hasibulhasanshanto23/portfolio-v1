export const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center max-lg:pb-[80px]">
      <span className="font-medium">© {currentYear} Hasibul Hasan</span>
    </footer>
  );
};

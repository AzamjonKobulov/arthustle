import TabButton from './TabButton';

const tabs = [{ tabName: 'About course' }, { tabName: 'Additional materials' }];

export default function Tabs({}) {
  return (
    <div className="flex items-center gap-30 text-sm">
      {tabs.map((tab, index) => (
        <TabButton key={index} tabName={tab.tabName} index={index} />
      ))}
    </div>
  );
}

const terminalLines = [
  { dir: 'projects', command: 'mkdir about_me && cd about_me', className: 'one' },
  { dir: 'about_me', command: 'mkdir hey_im_ross', className: 'two' },
  { dir: 'about_me', command: 'mkdir currently_working_at', className: 'three' },
  { dir: 'about_me', command: 'touch trustpilot.ts', className: 'four' },
  { dir: 'about_me', command: 'ls', className: 'five' },
];

const lsOutput = ['hey_im_ross', 'currently_working_at'];
const lsFile = 'trustpilot.ts';

const TerminalCommand = ({ dir, command }) => (
  <div className="flex items-center text-[13px] font-terminal tracking-[-0.5px]">
    <span className="material-icons text-term-light-green p-1.25">arrow_right_alt</span>
    <p className="text-term-dir pr-1.25 pb-0.75">{dir}</p>
    <p className="pb-0.75 tracking-[-0.5px]">{command}</p>
  </div>
);

const Hero = () => (
  <section id="hero" className="flex justify-center text-[#fefefe] pt-15">
    <div className="max-w-300 w-screen flex max-lg:flex-wrap">
      <div className="flex self-center flex-col w-screen max-lg:items-center max-sm:text-[0.5em] max-xs:text-[0.5em] max-xs:items-center">
        <p className="developer flex text-[6em] text-title after:content-['.'] after:text-accent">Developer</p>
        <p className="designer flex text-[6em] text-title after:content-['.'] after:text-accent">Designer</p>
        <p className="creator flex text-[6em] text-title after:content-['.'] after:text-accent">Creator</p>
      </div>
      <div className="flex self-center justify-end w-screen max-lg:justify-center max-lg:pt-7.5 max-sm:h-auto max-sm:w-auto max-sm:items-center max-sm:pt-5 max-xs:h-auto max-xs:w-auto max-xs:items-center max-xs:pt-5">
        <div className="w-125 max-w-[100vw] h-75 bg-title rounded-[10px] max-sm:min-w-auto max-sm:w-100 max-xs:min-w-auto max-xs:w-62.5">
          <div className="flex items-center pl-2.5 h-7.5 bg-[#2c2f34] rounded-t-[10px]">
            <div className="m-0.75 h-2.5 w-2.5 rounded-full bg-term-red" />
            <div className="m-0.75 h-2.5 w-2.5 rounded-full bg-term-yellow" />
            <div className="m-0.75 h-2.5 w-2.5 rounded-full bg-term-green" />
          </div>

          <div>
            <div className="max-sm:w-screen">
              {terminalLines.map((line) => (
                <TerminalCommand
                  key={line.className}
                  dir={line.dir}
                  command={line.command}
                />
              ))}
              <div className="flex items-center text-[13px] font-terminal tracking-[-0.5px] pl-3.25 max-sm:flex-wrap max-xs:flex-wrap">
                {lsOutput.map((name) => (
                  <p key={name} className="text-term-dir pr-5 pb-0.75">{name}</p>
                ))}
                <p className="pb-0.75 tracking-[-0.5px]">{lsFile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

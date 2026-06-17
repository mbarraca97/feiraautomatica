import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { contact } from '../../data/site';

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('pt-PT', {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-body text-sm font-medium tabular-nums text-on-dark tablet:text-base">
      {time}
    </span>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-on-dark"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default function ScheduleClockCard({ label = 'Horário' }) {
  const shouldReduceMotion = useReducedMotion();
  const { weekdays, saturday, sunday } = contact.hours;

  return (
    <div
      className={`group relative z-10 flex shrink-0 flex-col-reverse overflow-hidden bg-foreground text-on-dark transition-[border-radius] duration-300 ease-out ${
        shouldReduceMotion ? 'rounded-[1.25rem]' : 'rounded-pill hover:rounded-[1.25rem]'
      }`}
    >
      <div className="flex items-center justify-center gap-3 px-6 py-4 tablet:py-5">
        <ClockIcon />
        <LiveClock />
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          shouldReduceMotion ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-2 pt-5 text-center tablet:px-8 tablet:pt-6">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-on-dark-muted">
              {label}
            </p>
            <ul className="mt-3 space-y-2 font-body text-sm leading-snug text-on-dark tablet:text-base">
              <li>{weekdays}</li>
              <li>{saturday}</li>
              <li>{sunday}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useCallback, useMemo, useState } from 'react';
import ProgressBar from 'atom/ProgressBar';

export interface Step {
  component:JSX.Element;
  time?:number;
  progress?:number;
}

export interface WorkflowProps {
  steps:Step[];
  currentStep?:number;
  showProgress?:boolean;
  completed?:() => void;
}

const Workflow = ({steps, currentStep, showProgress = false, completed}:WorkflowProps) => {
  const [screen, setScreen] = useState(currentStep || 0);
  const [progress, setProgress] = useState(0);
  const [_completed, setCompleted] = useState(false);
  const [component, setComponent] = useState<JSX.Element>(<></>);

  const screens = useMemo(() => steps, [steps]);
  const cb = useCallback(() => {
    if (_completed && completed) {
      completed();
    }
  }, [_completed, completed]);

  useEffect(() => {
    cb();
  }, [_completed, completed, cb])

  useEffect(() => {
    const _s = screens[screen];
    if (!_s?.component) {
      setCompleted(true);
      return;
    }
    setComponent(_s.component);
    if (_s?.progress) {
      setProgress(_s.progress);
    }

    if (_s?.time && screen < screens.length) {
      const timeout = setTimeout(() => {
        setScreen(screen + 1);
      }, _s.time);
      return () => clearTimeout(timeout);
    }
    if (screen < screens.length) {
      setCompleted(true);
    }
  }, [screen, screens]);
  return (
    <>
    {showProgress && <ProgressBar width={progress} />}
    {component}
    </>
  )
}
export default Workflow;
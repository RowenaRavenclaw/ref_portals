import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, timeTarget },
  ref
) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{timeTarget} second.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
    </dialog>
  );
});

export default ResultModal;

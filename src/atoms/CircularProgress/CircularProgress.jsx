import "./CircularProgress.scss";

export default function CircularProgress() {
  return (
    <svg className="loader" viewBox="25 25 50 50">
      <circle className="loader-path" cx="50" cy="50" r="20"></circle>
    </svg>
  );
}

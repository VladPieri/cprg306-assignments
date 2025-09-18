import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Vladimir Pierimarchi</p>
      <p>
        GitHub Repository:{" "}
        <Link 
          href="https://github.com/VladPieri/cprg306-assignments"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Here
        </Link>
      </p>
    </div>
  );
}
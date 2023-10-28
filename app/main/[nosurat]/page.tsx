export default function SuratDetail({ params }: { params: { nosurat: number } }) {
  const { nosurat } = params;

  return <main>{nosurat}</main>;
}

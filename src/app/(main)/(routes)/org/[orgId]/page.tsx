interface OrgIdPageProps {
  params: {
    orgId: string
  }
}

function OrgIdPage({
  params
}:OrgIdPageProps) {
  return (
    <div>{params.orgId}</div>
  )
}

export default OrgIdPage
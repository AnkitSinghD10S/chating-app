const GenderBox = () => {
  return (
    <div className="flex mt-2">
        <div className="form-control mx-4">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text"> Male</span>
                <input type="checkbox"  className="checkbox checkbox-success border-green-950"/>
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text"> Female</span>
                <input type="checkbox"  className="checkbox checkbox-success border-green-950"/>
            </label>
        </div>
    </div>
  )
}

export default GenderBox
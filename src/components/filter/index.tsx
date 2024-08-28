import { useSearchParams } from "react-router-dom"
import ReactSelect from "react-select"
import { fuels } from "../../utils/constant"

const Filter = () => {
    const [params, setParams] = useSearchParams();

    const selected = {
        label: params.get("fuel_type"),
        value: params.get("fuel_type"),
    };
    return (
        <div>
            <ReactSelect
                onChange={(e) => {
                    params.set("fuel_type", e?.value as string);
                    setParams(params);
                }}
                options={fuels}
                defaultValue={selected}
                className="text-black"
            />
        </div>
    );
};

export default Filter;
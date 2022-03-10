using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Page_ILV.Data
{
    public class Report
    {
        public int Id_Reporte { get; set; }
        public int Id_Usuario { get; set; }
        public int Id_Etiqueta { get; set; }
        public string Usuario { get; set; }
        public string Etiqueta { get; set; }
        public DateTime Fecha { get; set; }
        public string Descripcion { get; set; }
        public string Coordenadas { get; set; }
        public string Foto { get; set; }
    }
}
